import { allDecks } from "@/content/decks";
import { categories, getCategory } from "@/content/categories";
import type { Category, Deck } from "@/content/types";

export { categories, getCategory };
export type { Category, Deck };

/** Decks publiés (hors brouillons), du plus récent au plus ancien. */
export function getDecks(): Deck[] {
  return allDecks
    .filter((d) => !d.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getDeck(slug: string): Deck | undefined {
  return getDecks().find((d) => d.slug === slug);
}

export function getDecksByCategory(categorySlug: string): Deck[] {
  return getDecks().filter((d) => d.categorySlug === categorySlug);
}

export function getFeaturedDecks(limit = 4): Deck[] {
  const featured = getDecks().filter((d) => d.featured);
  return (featured.length > 0 ? featured : getDecks()).slice(0, limit);
}

export function countDecksByCategory(): Map<string, number> {
  const counts = new Map<string, number>();
  for (const deck of getDecks()) {
    counts.set(deck.categorySlug, (counts.get(deck.categorySlug) ?? 0) + 1);
  }
  return counts;
}
