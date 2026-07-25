import Link from "next/link";
import { DeckCard } from "@/components/DeckCard";
import { getDecksByCategory } from "@/lib/catalog";
import type { Category } from "@/content/types";
import { path, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function CategoryView({
  category,
  locale,
}: {
  category: Category;
  locale: Locale;
}) {
  const ui = t(locale);
  const decks = getDecksByCategory(category.slug, locale);

  return (
    <div className="container-site py-14 sm:py-20">
      <nav aria-label={ui.deck.breadcrumb} className="text-xs text-faint">
        <Link href={path("categories", locale)} className="hover:text-ink">
          {ui.categoriesPage.breadcrumb}
        </Link>
        <span aria-hidden> / </span>
        <span className="text-soft">{category.name}</span>
      </nav>

      <header className="mt-6 max-w-2xl">
        <h1 className="heading text-4xl">{category.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-soft">{category.lead}</p>
      </header>

      <div className="mt-12">
        {decks.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <DeckCard key={deck.slug} deck={deck} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-line bg-card px-6 py-16 text-center">
            <p className="heading text-xl">{ui.categoriesPage.emptyTitle}</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-soft">
              {ui.categoriesPage.emptyText}
            </p>
            <Link
              href={path("decks", locale)}
              className="link-quiet mt-5 inline-block text-sm"
            >
              {ui.categoriesPage.emptyCta}
            </Link>
          </div>
        )}
      </div>

      <section className="prose-site mt-16 border-t border-line pt-10">
        <h2>{ui.categoriesPage.aboutTitle}</h2>
        <p>{category.description}</p>
      </section>
    </div>
  );
}
