import type { MetadataRoute } from "next";
import { categories, getDecks } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), priority: 1 },
    { url: absoluteUrl("/decks/"), priority: 0.9 },
    { url: absoluteUrl("/categories/"), priority: 0.7 },
    { url: absoluteUrl("/methode/"), priority: 0.7 },
    { url: absoluteUrl("/faq/"), priority: 0.6 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: absoluteUrl(`/categories/${c.slug}/`),
    priority: 0.8,
  }));

  const deckPages: MetadataRoute.Sitemap = getDecks().map((d) => ({
    url: absoluteUrl(`/decks/${d.slug}/`),
    lastModified: d.publishedAt,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...deckPages];
}
