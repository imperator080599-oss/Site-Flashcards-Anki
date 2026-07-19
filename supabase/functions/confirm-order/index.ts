// Edge Function « confirm-order » : vérifie une session Checkout auprès de
// Stripe (côté serveur) et retourne le jeton de téléchargement. Sert de
// rattrapage si le webhook n'est pas encore passé. L'identifiant de session
// (non devinable, connu du seul payeur) fait office de preuve d'achat.
import { createClient } from "jsr:@supabase/supabase-js@2";

const TOKEN_VALIDITY_DAYS = 7;

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

const SESSION_RE = /^cs_(test|live)_[a-zA-Z0-9]{10,200}$/;

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
  if (!stripeKey) {
    return json(503, {
      error: "Le paiement en ligne n'est pas encore activé.",
      code: "payments_not_configured",
    });
  }

  let body: { sessionId?: unknown };
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Requête invalide.", code: "invalid" });
  }
  const sessionId = body.sessionId;
  if (typeof sessionId !== "string" || !SESSION_RE.test(sessionId)) {
    return json(400, { error: "Référence de commande invalide.", code: "invalid" });
  }

  // Vérification auprès de Stripe — jamais de confiance dans le client.
  const stripeResponse = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
    { headers: { Authorization: `Bearer ${stripeKey}` } }
  );
  const session = await stripeResponse.json();
  if (!stripeResponse.ok || !session?.id) {
    return json(404, { error: "Commande introuvable.", code: "not_found" });
  }

  const deckSlug: string | null = session.metadata?.deck_slug ?? null;
  if (!deckSlug) {
    return json(404, { error: "Commande introuvable.", code: "not_found" });
  }

  const { data: deck } = await supabase
    .from("decks")
    .select("slug, title")
    .eq("slug", deckSlug)
    .single();

  if (session.payment_status !== "paid") {
    return json(200, {
      status: "pending",
      deckSlug,
      deckTitle: deck?.title ?? deckSlug,
      email: null,
      downloadToken: null,
      expiresAt: null,
    });
  }

  // Commande payée : upsert (rattrape un webhook manqué) puis jeton.
  const { data: order } = await supabase
    .from("orders")
    .upsert(
      {
        stripe_session_id: session.id,
        deck_slug: deckSlug,
        status: "paid",
        paid_at: new Date().toISOString(),
        email: session.customer_details?.email ?? null,
        amount_total: session.amount_total ?? null,
        currency: session.currency ?? null,
      },
      { onConflict: "stripe_session_id" }
    )
    .select("id")
    .single();

  if (!order) {
    return json(500, { error: "Erreur interne. Contactez le support." });
  }

  let { data: token } = await supabase
    .from("download_tokens")
    .select("token, expires_at")
    .eq("order_id", order.id)
    .maybeSingle();

  if (!token) {
    const expiresAt = new Date(
      Date.now() + TOKEN_VALIDITY_DAYS * 24 * 3600 * 1000
    ).toISOString();
    const { data: created } = await supabase
      .from("download_tokens")
      .insert({ order_id: order.id, deck_slug: deckSlug, expires_at: expiresAt })
      .select("token, expires_at")
      .single();
    token = created;
  }

  return json(200, {
    status: "paid",
    deckSlug,
    deckTitle: deck?.title ?? deckSlug,
    email: session.customer_details?.email ?? null,
    downloadToken: token?.token ?? null,
    expiresAt: token?.expires_at ?? null,
  });
});
