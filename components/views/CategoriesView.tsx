import Link from "next/link";
import { countDecksByCategory, getCategories } from "@/lib/catalog";
import { categoryPath, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function CategoriesView({ locale }: { locale: Locale }) {
  const ui = t(locale).categoriesPage;
  const categories = getCategories(locale);
  const counts = countDecksByCategory();

  return (
    <div className="container-site py-14 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="heading text-4xl">{ui.title}</h1>
        <p className="mt-4 text-soft">{ui.intro}</p>
      </header>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {categories.map((c) => {
          const count = counts.get(c.slug) ?? 0;
          return (
            <li key={c.slug}>
              <Link
                href={categoryPath(c.slug, locale)}
                className="group grid gap-2 py-7 transition-colors sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="heading text-2xl group-hover:text-accent">
                  {c.name}
                </span>
                <span className="max-w-xl text-sm leading-relaxed text-soft">
                  {c.lead}
                </span>
                <span className="text-xs text-faint sm:justify-self-end">
                  {ui.deckCount(count)} →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
