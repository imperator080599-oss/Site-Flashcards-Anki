"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Category, Deck } from "@/content/types";
import { DeckCard } from "@/components/DeckCard";

type SortKey = "recent" | "price-asc" | "price-desc" | "cards-desc" | "title";

const sortLabels: Record<SortKey, string> = {
  recent: "Plus récents",
  "price-asc": "Prix croissant",
  "price-desc": "Prix décroissant",
  "cards-desc": "Nombre de cartes",
  title: "Ordre alphabétique",
};

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function CatalogBrowser({
  decks,
  categories,
}: {
  decks: Deck[];
  categories: Category[];
}) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categorie") ?? "all";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortKey>("recent");

  const results = useMemo(() => {
    const q = normalize(query.trim());
    let list = decks;

    if (category !== "all") {
      list = list.filter((d) => d.categorySlug === category);
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
          return a.title.localeCompare(b.title, "fr");
        default:
          return b.publishedAt.localeCompare(a.publishedAt);
      }
    });
  }, [decks, query, category, sort]);

  return (
    <div>
      {/* Barre d'outils : recherche, filtre, tri */}
      <div className="flex flex-col gap-3 border-y border-line py-4 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Rechercher un deck</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un deck, un thème, une épreuve…"
            className="h-10 w-full rounded-sm border border-line bg-card px-3.5 text-sm placeholder:text-faint focus:border-accent"
          />
        </label>

        <div className="flex min-w-0 gap-3">
          <label className="min-w-0 flex-1 sm:flex-none">
            <span className="sr-only">Filtrer par catégorie</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-10 w-full rounded-sm border border-line bg-card px-3 text-sm text-ink focus:border-accent sm:w-auto"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label className="min-w-0 flex-1 sm:flex-none">
            <span className="sr-only">Trier</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-10 w-full rounded-sm border border-line bg-card px-3 text-sm text-ink focus:border-accent sm:w-auto"
            >
              {Object.entries(sortLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-4 text-sm text-faint" role="status">
        {results.length} deck{results.length > 1 ? "s" : ""}
        {category !== "all" &&
          ` — ${categories.find((c) => c.slug === category)?.name ?? ""}`}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((deck) => (
            <DeckCard key={deck.slug} deck={deck} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-line bg-card px-6 py-16 text-center">
          <p className="heading text-xl">Aucun deck ne correspond</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-soft">
            Essayez d'autres mots-clés ou retirez le filtre de catégorie. Le
            catalogue s'enrichit régulièrement.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="link-quiet mt-5 text-sm"
          >
            Réinitialiser la recherche
          </button>
        </div>
      )}
    </div>
  );
}
