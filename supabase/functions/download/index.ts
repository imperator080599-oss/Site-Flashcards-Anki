// Edge Function « download » : échange un jeton d'achat valide contre une
// URL signée de courte durée vers le fichier du deck (bucket privé), puis
// redirige. Les fichiers ne sont jamais accessibles sans jeton valide.
import { createClient } from "jsr:@supabase/supabase-js@2";

const SIGNED_URL_TTL_SECONDS = 120;

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type Lang = "fr" | "en";

/** Messages d'erreur, dans la langue de la boutique où l'achat a eu lieu. */
const MESSAGES: Record<
  string,
  Record<Lang, { title: string; message: string }>
> = {
  method: {
    fr: {
      title: "Méthode non autorisée",
      message: "Utilisez le lien fourni après votre achat.",
    },
    en: {
      title: "Method not allowed",
      message: "Use the link provided after your purchase.",
    },
  },
  invalid: {
    fr: {
      title: "Lien invalide",
      message:
        "Ce lien de téléchargement est incomplet ou mal formé. Utilisez le lien exact fourni après votre achat.",
    },
    en: {
      title: "Invalid link",
      message:
        "This download link is incomplete or malformed. Use the exact link provided after your purchase.",
    },
  },
  unknown: {
    fr: {
      title: "Lien inconnu",
      message:
        "Ce lien ne correspond à aucun achat confirmé. Si vous venez de payer, patientez quelques secondes puis réessayez.",
    },
    en: {
      title: "Unknown link",
      message:
        "This link does not match any confirmed purchase. If you have just paid, wait a few seconds and try again.",
    },
  },
  expired: {
    fr: {
      title: "Lien expiré",
      message:
        "Ce lien de téléchargement a expiré. Contactez-nous avec votre e-mail d'achat pour en recevoir un nouveau.",
    },
    en: {
      title: "Link expired",
      message:
        "This download link has expired. Contact us with your purchase e-mail to receive a new one.",
    },
  },
  limit: {
    fr: {
      title: "Limite atteinte",
      message:
        "Le nombre maximal de téléchargements pour ce lien est atteint. Contactez-nous avec votre e-mail d'achat.",
    },
    en: {
      title: "Limit reached",
      message:
        "The maximum number of downloads for this link has been reached. Contact us with your purchase e-mail.",
    },
  },
  preparing: {
    fr: {
      title: "Fichier en préparation",
      message:
        "Le fichier de ce deck est en cours de mise en ligne. Réessayez sous peu ou contactez-nous.",
    },
    en: {
      title: "File being prepared",
      message:
        "This deck's file is still being uploaded. Try again shortly or contact us.",
    },
  },
  internal: {
    fr: { title: "Erreur interne", message: "Réessayez dans un instant." },
    en: { title: "Internal error", message: "Please try again in a moment." },
  },
};

/** Page d'erreur lisible (le lien est ouvert directement dans le navigateur). */
function errorPage(status: number, key: string, lang: Lang): Response {
  const { title, message } = MESSAGES[key][lang];
  const html = `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${title}</title>
<style>
  body{font-family:system-ui,sans-serif;background:#fbfaf7;color:#1d1b16;
    display:grid;place-items:center;min-height:100vh;margin:0;padding:1rem}
  main{max-width:26rem;text-align:center}
  h1{font-size:1.4rem;font-weight:600}
  p{color:#57534a;line-height:1.6}
</style></head>
<body><main><h1>${title}</h1><p>${message}</p></main></body></html>`;
  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const lang: Lang = url.searchParams.get("lang") === "en" ? "en" : "fr";

  if (req.method !== "GET") {
    return errorPage(405, "method", lang);
  }

  const token = url.searchParams.get("token") ?? "";
  if (!UUID_RE.test(token)) {
    return errorPage(400, "invalid", lang);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { data: record } = await supabase
    .from("download_tokens")
    .select(
      "token, expires_at, max_downloads, download_count, deck_slug, orders!inner(status), decks!inner(storage_path, title)"
    )
    .eq("token", token)
    .maybeSingle();

  if (!record || record.orders?.status !== "paid") {
    return errorPage(404, "unknown", lang);
  }

  if (new Date(record.expires_at).getTime() < Date.now()) {
    return errorPage(410, "expired", lang);
  }

  if (record.download_count >= record.max_downloads) {
    return errorPage(429, "limit", lang);
  }

  const storagePath = record.decks?.storage_path;
  if (!storagePath) {
    return errorPage(503, "preparing", lang);
  }

  const { error: countError } = await supabase
    .from("download_tokens")
    .update({ download_count: record.download_count + 1 })
    .eq("token", token);
  if (countError) {
    console.error("Count update error:", countError.message);
  }

  const { data: signed, error: signError } = await supabase.storage
    .from("deck-files")
    .createSignedUrl(storagePath, SIGNED_URL_TTL_SECONDS, {
      download: `${record.deck_slug}.apkg`,
    });

  if (signError || !signed?.signedUrl) {
    console.error("Sign error:", signError?.message);
    return errorPage(500, "internal", lang);
  }

  return new Response(null, {
    status: 302,
    headers: { Location: signed.signedUrl, "Cache-Control": "no-store" },
  });
});
