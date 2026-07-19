/**
 * Configuration globale du site.
 *
 * `SITE_URL` et `BASE_PATH` sont injectés au build (variables d'environnement
 * publiques). En production GitHub Pages, le site vit sous un sous-chemin ;
 * avec un domaine personnalisé, il suffit de changer ces deux variables.
 */
export const SITE_NAME = "Mémodeck";
export const SITE_TAGLINE = "Decks Anki premium pour apprendre plus vite";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** URL absolue d'une page (pour SEO, Open Graph, sitemap…). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Préfixe un chemin d'asset public avec le basePath (GitHub Pages). */
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@example.com";

/** Backend Supabase (clé publique — conçue pour être exposée côté client). */
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const COMMERCE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
