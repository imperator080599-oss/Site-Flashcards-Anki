/**
 * Synchronise le catalogue (content/decks) vers la table `decks` de Supabase,
 * source de vérité des prix au moment du paiement.
 *
 * Usage :
 *   SUPABASE_URL=https://<ref>.supabase.co \
 *   SUPABASE_SERVICE_ROLE_KEY=... \
 *   npm run sync-decks
 *
 * La clé service_role est SECRÈTE : uniquement en local ou en CI chiffrée.
 * Les decks marqués `draft` sont désactivés (active=false), pas supprimés,
 * pour ne pas casser l'historique des commandes.
 */
import { allDecks } from "../content/decks";
import { decksEn } from "../content/i18n/decks.en";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error(
    "Variables manquantes : SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont requises."
  );
  process.exit(1);
}

const rows = allDecks.map((deck) => ({
  slug: deck.slug,
  title: deck.title,
  // Titre anglais : affiché à l'achat quand l'acheteur navigue sur /en/.
  title_en: decksEn[deck.slug]?.title ?? null,
  price_cents: deck.priceCents,
  currency: "eur",
  storage_path: `${deck.slug}.apkg`,
  active: !deck.draft,
  updated_at: new Date().toISOString(),
}));

const response = await fetch(`${SUPABASE_URL}/rest/v1/decks`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    Prefer: "resolution=merge-duplicates,return=representation",
  },
  body: JSON.stringify(rows),
});

if (!response.ok) {
  console.error("Échec de la synchronisation :", await response.text());
  process.exit(1);
}

const synced = (await response.json()) as { slug: string; active: boolean }[];
console.log(`${synced.length} deck(s) synchronisé(s) :`);
for (const row of synced) {
  console.log(`  - ${row.slug}${row.active ? "" : " (inactif)"}`);
}
