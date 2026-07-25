"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Category, CardLanguage, Deck } from "@/content/types";
import { DeckCard } from "@/components/DeckCard";
import {
  filterableLanguages,
  languageName,
  matchesLanguage,
} from "@/lib/cardLanguages";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

type SortKey = "recent" | "price-asc" | "price-desc" | "cards-desc" | "title";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function CatalogBrowser({
  decks,
  categories,
  locale = defaultLocale,
}: {
  decks: Deck[];
  categories: Category[];
  locale?: Locale;
}) {
  const ui = t(locale);
  const searchParams = useSearchParams();
  const initialCategory =
    searchParams.get("categorie") ?? searchParams.get("category") ?? "all";
  const initialLanguage = searchParams.get("langue") ?? searchParams.get("lang") ?? "all";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [language, setLanguage] = useState(initialLanguage);
  const [sort, setSort] = useState<SortKey>("recent");

  // Ne proposer que les langues réellement présentes dans le catalogue.
  const availableLanguages = useMemo(
    () =>
      filterableLanguages.filter((lang) =>
        decks.some((d) => matchesLanguage(d.cardLanguages, lang))
      ),
    [decks]
  );

  const results = useMemo(() => {
    const q = normalize(query.trim());
    let list = decks;

    if (category !== "all") {
      list = list.filter((d) => d.categorySlug === category);
    }
    if (language !== "all") {
      list = list.filter((d) =>
        matchesLanguage(d.cardLanguages, language as CardLanguage)
      );
    }
    if (q) {
      list = list.filter((d) => {
        const haystack = normalize(
          [
            d.title,
            d.shortDescription,
            d.subcategory ?? "",
            d.level ?? "",
            ...d.topics,
          ].join(" ")
        );
        return q.split(/\s+/).every((term) => haystack.includes(term));
      });
    }

    return [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.priceCents - b.priceCents;
        case "price-desc":
          return b.priceCents - a.priceCents;
        case "cards-desc":
          return b.cardCount - a.cardCount;
        case "title":
          return a.title.localeCompare(b.title, locale);
        default:
          return b.publishedAt.localeCompare(a.publishedAt);
      }
    });
  }, [decks, query, category, language, sort, locale]);

  const selectClass =
    "h-10 w-full rounded-sm border border-line bg-card px-3 text-sm text-ink focus:border-accent sm:w-auto";

  return (
    <div>
      {/* Barre d'outils : recherche, filtres, tri */}
      <div className="flex flex-col gap-3 border-y border-line py-4 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">{ui.catalog.searchLabel}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={ui.catalog.searchPlaceholder}
            className="h-10 w-full rounded-sm border border-line bg-card px-3.5 text-sm placeholder:text-faint focus:border-accent"
          />
        </label>

        <div className="flex min-w-0 flex-wrap gap-3">
          <label className="min-w-0 flex-1 sm:flex-none">
            <span className="sr-only">{ui.catalog.categoryLabel}</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={selectClass}
            >
              <option value="all">{ui.catalog.allCategories}</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label className="min-w-0 flex-1 sm:flex-none">
            <span className="sr-only">{ui.catalog.languageLabel}</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={selectClass}
            >
              <option value="all">{ui.catalog.allLanguages}</option>
              {availableLanguages.map((lang) => (
                <option key={lang} value={lang}>
                  {ui.catalog.languageOption(languageName(lang, locale))}
                </option>
              ))}
            </select>
          </label>

          <label className="min-w-0 flex-1 sm:flex-none">
            <span className="sr-only">{ui.catalog.sortLabel}</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className={selectClass}
            >
              {(Object.keys(ui.catalog.sort) as SortKey[]).map((key) => (
                <option key={key} value={key}>
                  {ui.catalog.sort[key]}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-4 text-sm text-faint" role="status">
        {ui.catalog.results(results.length)}
        {category !== "all" &&
          ` — ${categories.find((c) => c.slug === category)?.name ?? ""}`}
        {language !== "all" &&
          ` — ${ui.catalog.languageOption(languageName(language as CardLanguage, locale))}`}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((deck) => (
            <DeckCard key={deck.slug} deck={deck} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-line bg-card px-6 py-16 text-center">
          <p className="heading text-xl">{ui.catalog.emptyTitle}</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-soft">
            {ui.catalog.emptyText}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setLanguage("all");
            }}
            className="link-quiet mt-5 text-sm"
          >
            {ui.catalog.reset}
          </button>
        </div>
      )}
    </div>
  );
}
