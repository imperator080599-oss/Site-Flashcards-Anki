/**
 * Socle d'internationalisation.
 *
 * Le site existe en deux langues : le français à la racine (URLs historiques,
 * déjà référencées) et l'anglais sous `/en/`. Chaque page connaît son
 * équivalent dans l'autre langue, ce qui permet le sélecteur de langue et les
 * balises `hreflang`.
 */
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** Code de langue HTML / Open Graph. */
export const htmlLang: Record<Locale, string> = { fr: "fr", en: "en" };
export const ogLocale: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };

export type RouteKey =
  | "home"
  | "decks"
  | "categories"
  | "method"
  | "faq"
  | "thanks"
  | "terms"
  | "legalNotice"
  | "privacy";

/** Chemin de chaque page, par langue. Source unique des URLs du site. */
const routePaths: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: "/", en: "/en/" },
  decks: { fr: "/decks/", en: "/en/decks/" },
  categories: { fr: "/categories/", en: "/en/categories/" },
  method: { fr: "/methode/", en: "/en/method/" },
  faq: { fr: "/faq/", en: "/en/faq/" },
  thanks: { fr: "/merci/", en: "/en/thank-you/" },
  terms: { fr: "/cgv/", en: "/en/terms/" },
  legalNotice: { fr: "/mentions-legales/", en: "/en/legal-notice/" },
  privacy: { fr: "/confidentialite/", en: "/en/privacy/" },
};

export function path(key: RouteKey, locale: Locale): string {
  return routePaths[key][locale];
}

/** Les identifiants de deck et de catégorie sont communs aux deux langues. */
export function deckPath(slug: string, locale: Locale): string {
  return `${routePaths.decks[locale]}${slug}/`;
}

export function categoryPath(slug: string, locale: Locale): string {
  return `${routePaths.categories[locale]}${slug}/`;
}

/** Toutes les URLs d'une même page, indexées par langue (hreflang, sitemap). */
export function alternatesFor(key: RouteKey): Record<Locale, string> {
  return routePaths[key];
}

const exactPairs: [string, string][] = Object.values(routePaths).map((p) => [
  p.fr,
  p.en,
]);

const prefixPairs: [string, string][] = [
  [routePaths.decks.fr, routePaths.decks.en],
  [routePaths.categories.fr, routePaths.categories.en],
];

/**
 * Équivalent d'un chemin dans l'autre langue. Retombe sur l'accueil de la
 * langue cible si la page n'a pas de traduction (cas impossible aujourd'hui,
 * mais le sélecteur de langue ne doit jamais mener à une 404).
 */
export function alternatePath(pathname: string, target: Locale): string {
  const current = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const from = target === "en" ? 0 : 1;
  const to = target === "en" ? 1 : 0;

  for (const pair of exactPairs) {
    if (current === pair[from]) return pair[to];
  }
  for (const pair of prefixPairs) {
    if (current.startsWith(pair[from])) {
      return `${pair[to]}${current.slice(pair[from].length)}`;
    }
  }
  return routePaths.home[target];
}

/** Langue déduite du chemin (utilisé par les composants clients). */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}
