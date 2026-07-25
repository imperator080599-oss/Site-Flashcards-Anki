import { allDecks } from "@/content/decks";
import { categories as categoriesFr, getCategory as getCategoryFr } from "@/content/categories";
import { categoriesEn } from "@/content/i18n/categories.en";
import { decksEn } from "@/content/i18n/decks.en";
import { homeFaq, fullFaq } from "@/content/faq";
import { homeFaqEn, fullFaqEn } from "@/content/i18n/faq.en";
import type { Category, Deck } from "@/content/types";
import { defaultLocale, type Locale } from "@/lib/i18n";

export type { Category, Deck };

/**
 * Catalogue localisé.
 *
 * Le contenu français est la source : les traductions anglaises vivent dans
 * `content/i18n/` et sont appliquées ici. Une traduction manquante retombe
 * silencieusement sur le français plutôt que d'afficher une page vide — le
 * catalogue reste ainsi cohérent même si un deck est ajouté sans traduction.
 */
function localizeDeck(deck: Deck, locale: Locale): Deck {
  if (locale === defaultLocale) return deck;
  const tr = decksEn[deck.slug];
  if (!tr) return deck;
  return {
    ...deck,
    title: tr.title,
    shortDescription: tr.shortDescription,
    description: tr.description,
    objectives: tr.objectives,
    audience: tr.audience,
    topics: tr.topics,
    structure: deck.structure.map((section, i) => ({
      ...section,
      name: tr.structure[i] ?? section.name,
    })),
  };
}

function localizeCategory(category: Category, locale: Locale): Category {
  if (locale === defaultLocale) return category;
  const tr = categoriesEn[category.slug];
  return tr ? { ...category, ...tr } : category;
}

export function getCategories(locale: Locale = defaultLocale): Category[] {
  return categoriesFr.map((c) => localizeCategory(c, locale));
}

export function getCategory(
  slug: string,
  locale: Locale = defaultLocale
): Category | undefined {
  const category = getCategoryFr(slug);
  return category ? localizeCategory(category, locale) : undefined;
}

/** Decks publiés (hors brouillons), du plus récent au plus ancien. */
export function getDecks(locale: Locale = defaultLocale): Deck[] {
  return allDecks
    .filter((d) => !d.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((d) => localizeDeck(d, locale));
}

export function getDeck(
  slug: string,
  locale: Locale = defaultLocale
): Deck | undefined {
  return getDecks(locale).find((d) => d.slug === slug);
}

export function getDecksByCategory(
  categorySlug: string,
  locale: Locale = defaultLocale
): Deck[] {
  return getDecks(locale).filter((d) => d.categorySlug === categorySlug);
}

export function getFeaturedDecks(limit = 4, locale: Locale = defaultLocale): Deck[] {
  const decks = getDecks(locale);
  const featured = decks.filter((d) => d.featured);
  return (featured.length > 0 ? featured : decks).slice(0, limit);
}

export function countDecksByCategory(): Map<string, number> {
  const counts = new Map<string, number>();
  for (const deck of getDecks()) {
    counts.set(deck.categorySlug, (counts.get(deck.categorySlug) ?? 0) + 1);
  }
  return counts;
}

export function getHomeFaq(locale: Locale) {
  return locale === "en" ? homeFaqEn : homeFaq;
}

export function getFullFaq(locale: Locale) {
  return locale === "en" ? fullFaqEn : fullFaq;
}
