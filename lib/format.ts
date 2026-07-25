import { defaultLocale, type Locale } from "@/lib/i18n";

/** Locale Intl utilisée pour les nombres et les prix (euros dans les deux cas). */
const intlLocale: Record<Locale, string> = { fr: "fr-FR", en: "en-IE" };

/** Formatte un prix en centimes vers « 29 € » / « €29 ». */
export function formatPrice(cents: number, locale: Locale = defaultLocale): string {
  const euros = cents / 100;
  return new Intl.NumberFormat(intlLocale[locale], {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(euros) ? 0 : 2,
  }).format(euros);
}

export function formatNumber(value: number, locale: Locale = defaultLocale): string {
  return new Intl.NumberFormat(intlLocale[locale]).format(value);
}

export function formatCardCount(
  count: number,
  locale: Locale = defaultLocale
): string {
  const n = formatNumber(count, locale);
  return locale === "fr" ? `${n} cartes` : `${n} cards`;
}

export function formatDate(iso: string, locale: Locale = defaultLocale): string {
  return new Date(iso).toLocaleDateString(intlLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
