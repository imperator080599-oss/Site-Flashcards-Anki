import type { MetadataRoute } from "next";
import { getCategories, getDecks } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";
import {
  alternatesFor,
  categoryPath,
  deckPath,
  htmlLang,
  locales,
  type Locale,
  type RouteKey,
} from "@/lib/i18n";

export const dynamic = "force-static";

/** Bloc `alternates.languages` d'une entrée, à partir des chemins par langue. */
function alternates(paths: Record<Locale, string>) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[htmlLang[l]] = absoluteUrl(paths[l]);
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticKeys: [RouteKey, number][] = [
    ["home", 1],
    ["decks", 0.9],
    ["categories", 0.7],
    ["method", 0.7],
    ["faq", 0.6],
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const [key, priority] of staticKeys) {
    const paths = alternatesFor(key);
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(paths[locale]),
        priority,
        alternates: alternates(paths),
      });
    }
  }

  for (const category of getCategories()) {
    const paths = {
      fr: categoryPath(category.slug, "fr"),
      en: categoryPath(category.slug, "en"),
    };
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(paths[locale]),
        priority: 0.8,
        alternates: alternates(paths),
      });
    }
  }

  for (const deck of getDecks()) {
    const paths = {
      fr: deckPath(deck.slug, "fr"),
      en: deckPath(deck.slug, "en"),
    };
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(paths[locale]),
        lastModified: deck.publishedAt,
        priority: 0.8,
        alternates: alternates(paths),
      });
    }
  }

  return entries;
}
