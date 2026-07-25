import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { DeckCard } from "@/components/DeckCard";
import { Accordion } from "@/components/Accordion";
import { FlashcardPreview } from "@/components/FlashcardPreview";
import {
  countDecksByCategory,
  getCategories,
  getFeaturedDecks,
  getHomeFaq,
} from "@/lib/catalog";
import { categoryPath, path, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function HomeView({ locale }: { locale: Locale }) {
  const ui = t(locale).home;
  const featured = getFeaturedDecks(4, locale);
  const categories = getCategories(locale);
  const counts = countDecksByCategory();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-site flex flex-col items-start gap-10 py-20 sm:py-28 lg:flex-row lg:items-center lg:gap-16">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {ui.eyebrow}
            </p>
            <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">
              {ui.titleLine1}
              <br />
              <em className="text-soft">{ui.titleLine2}</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
              {ui.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={path("decks", locale)} size="lg">
                {ui.ctaPrimary}
              </ButtonLink>
              <ButtonLink
                href={path("method", locale)}
                size="lg"
                variant="secondary"
              >
                {ui.ctaSecondary}
              </ButtonLink>
            </div>
          </div>

          <div className="w-full max-w-md lg:ml-auto">
            <FlashcardPreview
              locale={locale}
              cards={[
                {
                  front: ui.heroCardFront,
                  back: ui.heroCardBack,
                  tag: ui.heroCardTag,
                },
              ]}
            />
            <p className="mt-3 text-center text-xs text-faint">{ui.heroCaption}</p>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="container-site py-20" aria-labelledby="categories-title">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 id="categories-title" className="heading text-3xl">
              {ui.categoriesTitle}
            </h2>
            <p className="mt-3 max-w-xl text-soft">{ui.categoriesLead}</p>
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const count = counts.get(c.slug) ?? 0;
            return (
              <li key={c.slug}>
                <Link
                  href={categoryPath(c.slug, locale)}
                  className="group flex h-full flex-col bg-card p-6 transition-colors hover:bg-wash"
                >
                  <span className="heading text-lg">{c.name}</span>
                  <span className="mt-2 line-clamp-2 text-sm text-soft">
                    {c.lead}
                  </span>
                  <span className="mt-4 text-xs text-faint">
                    {t(locale).categoriesPage.deckCount(count)}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Decks en avant */}
      <section
        className="border-y border-line bg-wash"
        aria-labelledby="featured-title"
      >
        <div className="container-site py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 id="featured-title" className="heading text-3xl">
              {ui.featuredTitle}
            </h2>
            <Link
              href={path("decks", locale)}
              className="link-quiet hidden text-sm sm:inline"
            >
              {ui.allCatalogue}
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((deck) => (
              <DeckCard key={deck.slug} deck={deck} locale={locale} />
            ))}
          </div>
          <Link
            href={path("decks", locale)}
            className="link-quiet mt-8 inline-block text-sm sm:hidden"
          >
            {ui.allCatalogue}
          </Link>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="container-site py-20" aria-labelledby="how-title">
        <h2 id="how-title" className="heading text-3xl">
          {ui.howTitle}
        </h2>
        <ol className="mt-10 grid gap-10 sm:grid-cols-3">
          {ui.steps.map((item, i) => (
            <li key={item.title}>
              <span className="heading text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* La méthode */}
      <section
        className="border-y border-line bg-wash"
        aria-labelledby="method-title"
      >
        <div className="container-site grid gap-12 py-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="method-title" className="heading text-3xl">
              {ui.methodTitle}
            </h2>
            <p className="mt-5 leading-relaxed text-soft">
              {ui.methodBody1}
              <strong className="font-medium text-ink">
                {ui.methodActiveRecall}
              </strong>
              {ui.methodBody2}
              <strong className="font-medium text-ink">
                {ui.methodSpacedRepetition}
              </strong>
              {ui.methodBody3}
            </p>
            <ButtonLink
              href={path("method", locale)}
              variant="secondary"
              className="mt-8"
            >
              {ui.methodCta}
            </ButtonLink>
          </div>
          <ul className="space-y-6 self-center">
            {ui.methodPoints.map((item) => (
              <li key={item.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-soft">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-20" aria-labelledby="faq-title">
        <div className="mx-auto max-w-2xl">
          <h2 id="faq-title" className="heading text-3xl">
            {ui.faqTitle}
          </h2>
          <div className="mt-8">
            <Accordion items={getHomeFaq(locale)} />
          </div>
          <p className="mt-6 text-sm text-soft">
            {ui.faqMore}{" "}
            <Link href={path("faq", locale)} className="link-quiet">
              {ui.faqLink}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
