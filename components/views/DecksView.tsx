import { Suspense } from "react";
import { CatalogBrowser } from "@/components/CatalogBrowser";
import { getCategories, getDecks } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function DecksView({ locale }: { locale: Locale }) {
  const ui = t(locale).decksPage;

  return (
    <div className="container-site py-14 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="heading text-4xl">{ui.title}</h1>
        <p className="mt-4 text-soft">{ui.intro}</p>
      </header>

      <div className="mt-10">
        <Suspense>
          <CatalogBrowser
            decks={getDecks(locale)}
            categories={getCategories(locale)}
            locale={locale}
          />
        </Suspense>
      </div>
    </div>
  );
}
