import Link from "next/link";
import type { Metadata } from "next";
import { categories, countDecksByCategory } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catégories",
  description:
    "Nos decks Anki par discipline : prépa ECG, DCG, DSCG, langues, Excel, Investment Banking, Financial Due Diligence et CFA.",
  alternates: { canonical: absoluteUrl("/categories/") },
};

export default function CategoriesPage() {
  const counts = countDecksByCategory();

  return (
    <div className="container-site py-14 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="heading text-4xl">Catégories</h1>
        <p className="mt-4 text-soft">
          Chaque discipline a ses exigences propres. Nos decks sont construits
          au plus près des programmes et des attentes réelles de chaque
          domaine.
        </p>
      </header>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {categories.map((c) => {
          const count = counts.get(c.slug) ?? 0;
          return (
            <li key={c.slug}>
              <Link
                href={`/categories/${c.slug}/`}
                className="group grid gap-2 py-7 transition-colors sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="heading text-2xl group-hover:text-accent">
                  {c.name}
                </span>
                <span className="max-w-xl text-sm leading-relaxed text-soft">
                  {c.lead}
                </span>
                <span className="text-xs text-faint sm:justify-self-end">
                  {count} deck{count > 1 ? "s" : ""} →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
