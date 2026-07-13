import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogBrowser } from "@/components/CatalogBrowser";
import { categories, getDecks } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catalogue des decks Anki",
  description:
    "Parcourez tous nos decks Anki : prépa ECG, DCG, DSCG, CFA, Investment Banking, Financial Due Diligence, Excel et langues. Recherche, filtres par catégorie et tri.",
  alternates: { canonical: absoluteUrl("/decks/") },
};

export default function DecksPage() {
  const decks = getDecks();

  return (
    <div className="container-site py-14 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="heading text-4xl">Catalogue</h1>
        <p className="mt-4 text-soft">
          Tous nos decks Anki, classés par discipline. Chaque deck présente un
          aperçu de ses cartes avant l'achat.
        </p>
      </header>

      <div className="mt-10">
        <Suspense>
          <CatalogBrowser decks={decks} categories={categories} />
        </Suspense>
      </div>
    </div>
  );
}
