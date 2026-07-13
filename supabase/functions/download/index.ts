// Edge Function « download » : échange un jeton d'achat valide contre une
// URL signée de courte durée vers le fichier du deck (bucket privé), puis
// redirige. Les fichiers ne sont jamais accessibles sans jeton valide.
import { createClient } from "jsr:@supabase/supabase-js@2";

const SIGNED_URL_TTL_SECONDS = 120;

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Page d'erreur lisible (le lien est ouvert directement dans le navigateur). */
function errorPage(status: number, title: string, message: string): Response {
  const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
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
  if (req.method !== "GET") {
    return errorPage(405, "Méthode non autorisée", "Utilisez le lien fourni après votre achat.");
  }

  const token = new URL(req.url).searchParams.get("token") ?? "";
  if (!UUID_RE.test(token)) {
    return errorPage(
      400,
      "Lien invalide",
      "Ce lien de téléchargement est incomplet ou mal formé. Utilisez le lien exact fourni après votre achat."
    );
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
    return errorPage(
      404,
      "Lien inconnu",
      "Ce lien ne correspond à aucun achat confirmé. Si vous venez de payer, patientez quelques secondes puis réessayez."
    );
  }

  if (new Date(record.expires_at).getTime() < Date.now()) {
    return errorPage(
      410,
      "Lien expiré",
      "Ce lien de téléchargement a expiré. Contactez-nous avec votre e-mail d'achat pour en recevoir un nouveau."
    );
  }

  if (record.download_count >= record.max_downloads) {
    return errorPage(
      429,
      "Limite atteinte",
      "Le nombre maximal de téléchargements pour ce lien est atteint. Contactez-nous avec votre e-mail d'achat."
    );
  }

  const storagePath = record.decks?.storage_path;
  if (!storagePath) {
    return errorPage(
      503,
      "Fichier en préparation",
      "Le fichier de ce deck est en cours de mise en ligne. Réessayez sous peu ou contactez-nous."
    );
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
    return errorPage(500, "Erreur interne", "Réessayez dans un instant.");
  }

  return new Response(null, {
    status: 302,
    headers: { Location: signed.signedUrl, "Cache-Control": "no-store" },
  });
});
