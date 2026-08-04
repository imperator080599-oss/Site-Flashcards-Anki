// Edge Function « create-checkout » : crée une session Stripe Checkout pour
// un deck. Le prix provient exclusivement de la base (jamais du client).
import { createClient } from "jsr:@supabase/supabase-js@2";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

const SLUG_RE = /^[a-z0-9-]{1,100}$/;

/** Secret depuis l'environnement, sinon depuis la table app_config (RLS service_role). */
async function getSecret(
  supabase: ReturnType<typeof createClient>,
  key: string
): Promise<string | null> {
  const envValue = Deno.env.get(key);
  if (envValue) return envValue;
  const { data } = await supabase
    .from("app_config")
    .select("value")
    .eq("key", key)
    .single();
  return (data as { value: string } | null)?.value ?? null;
}


Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return json(405, { error: "Méthode non autorisée." });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const stripeKey = await getSecret(supabase, "STRIPE_SECRET_KEY");
  // Origines autorisées pour les URLs de retour. Surchargeable via le
  // secret SITE_URL (liste séparée par des virgules — domaine personnalisé).
  const allowedOrigins = (
    Deno.env.get("SITE_URL") ??
    "https://imperator080599.github.io/Site-Flashcards-Anki," +
      // Ancien identifiant GitHub, encore redirigé : évite de casser
      // un paiement lancé depuis un lien déjà partagé.
      "https://imperator080599-oss.github.io/Site-Flashcards-Anki," +
      // Hébergement Vercel : alias de production du projet rappel-anki.
      "https://rappel-anki-imperator080599.vercel.app," +
      "https://rappel-anki-imperator080599-oss-imperator080599.vercel.app," +
      "https://rappel-anki.vercel.app"
  )
    .split(",")
    .map((u) => u.trim().replace(/\/$/, ""))
    .filter(Boolean);
  if (!stripeKey || allowedOrigins.length === 0) {
    return json(503, {
      error:
        "Le paiement en ligne n'est pas encore activé. Réessayez prochainement.",
      code: "payments_not_configured",
    });
  }

  let body: {
    deckSlug?: unknown;
    successUrl?: unknown;
    cancelUrl?: unknown;
    locale?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Requête invalide.", code: "invalid" });
  }

  const { deckSlug, successUrl, cancelUrl } = body;
  // Langue de la boutique : pilote l'interface Stripe et le libellé produit.
  const locale = body.locale === "en" ? "en" : "fr";
  if (typeof deckSlug !== "string" || !SLUG_RE.test(deckSlug)) {
    return json(400, { error: "Deck invalide.", code: "invalid" });
  }
  // Les URLs de retour doivent pointer vers notre site (anti-redirection).
  const isAllowed = (url: unknown): boolean =>
    typeof url === "string" &&
    allowedOrigins.some((origin) => url.startsWith(origin));
  if (!isAllowed(successUrl) || !isAllowed(cancelUrl)) {
    return json(400, { error: "URL de retour invalide.", code: "invalid" });
  }

  const { data: deck, error: deckError } = await supabase
    .from("decks")
    .select("slug, title, title_en, price_cents, currency")
    .eq("slug", deckSlug)
    .eq("active", true)
    .single();

  if (deckError || !deck) {
    return json(404, { error: "Ce deck n'est pas disponible.", code: "not_found" });
  }

  // Le titre anglais est facultatif : on retombe sur le titre français.
  const productName =
    (locale === "en" ? (deck.title_en as string | null) : null) ?? deck.title;
  const productDescription =
    locale === "en"
      ? "Anki flashcard deck (.apkg file, instant download)"
      : "Deck de flashcards Anki (fichier .apkg, téléchargement immédiat)";

  // Création de la session Checkout via l'API REST Stripe.
  const params = new URLSearchParams({
    mode: "payment",
    success_url: successUrl as string,
    cancel_url: cancelUrl as string,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": deck.currency,
    "line_items[0][price_data][unit_amount]": String(deck.price_cents),
    "line_items[0][price_data][product_data][name]": productName,
    "line_items[0][price_data][product_data][description]": productDescription,
    locale,
    "metadata[deck_slug]": deck.slug,
    "metadata[locale]": locale,
    "payment_intent_data[description]": `Deck Anki : ${deck.title}`,
  });

  const stripeResponse = await fetch(
    "https://api.stripe.com/v1/checkout/sessions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    }
  );

  const session = await stripeResponse.json();
  if (!stripeResponse.ok || !session?.id || !session?.url) {
    console.error("Stripe error:", session?.error?.message ?? session);
    return json(502, {
      error: "Le paiement est momentanément indisponible. Réessayez.",
    });
  }

  const { error: orderError } = await supabase.from("orders").insert({
    stripe_session_id: session.id,
    deck_slug: deck.slug,
    amount_total: deck.price_cents,
    currency: deck.currency,
    status: "pending",
  });
  if (orderError) {
    console.error("Order insert error:", orderError.message);
  }

  return json(200, { url: session.url });
});
