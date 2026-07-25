import type { CardLanguage } from "@/content/types";
import type { Locale } from "@/lib/i18n";

/**
 * Libellés de la langue des cartes.
 *
 * Information décisive à l'achat : un acheteur anglophone doit voir
 * immédiatement qu'un deck est rédigé en français, et réciproquement.
 */
const names: Record<CardLanguage, { code: string } & Record<Locale, string>> = {
  fr: { code: "FR", fr: "français", en: "French" },
  en: { code: "EN", fr: "anglais", en: "English" },
  es: { code: "ES", fr: "espagnol", en: "Spanish" },
  vi: { code: "VI", fr: "vietnamien", en: "Vietnamese" },
  la: { code: "LA", fr: "latin", en: "Latin" },
};

/** Langues proposées dans le filtre du catalogue. */
export const filterableLanguages: CardLanguage[] = ["fr", "en", "es", "vi", "la"];

export function languageName(lang: CardLanguage, locale: Locale): string {
  return names[lang][locale];
}

/** Badge compact : « FR » ou « FR ⇄ EN ». */
export function shortLabel(langs: CardLanguage[]): string {
  return langs.map((l) => names[l].code).join(" ⇄ ");
}

/** Libellé complet : « Cartes en français », « Bilingual cards French ⇄ English ». */
export function fullLabel(langs: CardLanguage[], locale: Locale): string {
  if (langs.length === 0) return "";
  if (langs.length === 1) {
    const name = names[langs[0]][locale];
    return locale === "fr" ? `Cartes en ${name}` : `Cards in ${name}`;
  }
  const joined = langs.map((l) => names[l][locale]).join(" ⇄ ");
  return locale === "fr" ? `Cartes ${joined}` : `Cards ${joined}`;
}

/** Un deck « en français » inclut les decks bilingues dont une face est en français. */
export function matchesLanguage(
  langs: CardLanguage[],
  filter: CardLanguage
): boolean {
  return langs.includes(filter);
}
