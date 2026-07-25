import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { Badge } from "@/components/ui/Badge";
import { BuyButton } from "@/components/BuyButton";
import { DeckCard } from "@/components/DeckCard";
import { FlashcardPreview } from "@/components/FlashcardPreview";
import { getCategory, getDecksByCategory } from "@/lib/catalog";
import type { Deck } from "@/content/types";
import { formatCardCount, formatPrice } from "@/lib/format";
import { fullLabel } from "@/lib/cardLanguages";
import { categoryPath, path, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function DeckView({ deck, locale }: { deck: Deck; locale: Locale }) {
  const ui = t(locale).deck;
  const category = getCategory(deck.categorySlug, locale);
  const related = getDecksByCategory(deck.categorySlug, locale)
    .filter((d) => d.slug !== deck.slug)
    .slice(0, 3);

  return (
    <div className="container-site py-14 sm:py-20">
      <nav aria-label={ui.breadcrumb} className="text-xs text-faint">
        <Link href={path("decks", locale)} className="hover:text-ink">
          {ui.catalogue}
        </Link>
        <span aria-hidden> / </span>
        {category && (
          <>
            <Link
              href={categoryPath(category.slug, locale)}
              className="hover:text-ink"
            >
              {category.name}
            </Link>
            <span aria-hidden> / </span>
          </>
        )}
        <span className="text-soft">{deck.title}</span>
      </nav>

      {/* En-tête produit */}
      <header className="mt-8 grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {category && <Badge tone="accent">{category.name}</Badge>}
            <Badge tone="language">{fullLabel(deck.cardLanguages, locale)}</Badge>
            {deck.subcategory && <Badge>{deck.subcategory}</Badge>}
            {deck.level && <Badge>{deck.level}</Badge>}
            {deck.demo && <Badge tone="demo">{ui.demoBadge}</Badge>}
          </div>
          <h1 className="heading mt-5 text-4xl sm:text-[2.75rem]">{deck.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-soft">
            {deck.shortDescription}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5">
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">
                {ui.cards}
              </dt>
              <dd className="mt-1 font-medium">
                {formatCardCount(deck.cardCount, locale)}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">
                {ui.cardsLanguage}
              </dt>
              <dd className="mt-1 font-medium">
                {fullLabel(deck.cardLanguages, locale)}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">
                {ui.format}
              </dt>
              <dd className="mt-1 font-medium">{ui.formatValue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">
                {ui.delivery}
              </dt>
              <dd className="mt-1 font-medium">{ui.deliveryValue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">
                {ui.price}
              </dt>
              <dd className="mt-1 font-medium">
                {formatPrice(deck.priceCents, locale)}
              </dd>
            </div>
          </dl>
        </div>

        {/* Encart d'achat */}
        <aside className="h-fit rounded-md border border-line bg-card p-6 lg:sticky lg:top-24">
          <p className="heading text-3xl">
            {formatPrice(deck.priceCents, locale)}
          </p>
          <p className="mt-1 text-xs text-faint">{ui.vatNote}</p>
          <div className="mt-5">
            <BuyButton
              deckSlug={deck.slug}
              priceCents={deck.priceCents}
              locale={locale}
            />
          </div>
          {deck.demo && (
            <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-soft">
              {ui.demoNote}
            </p>
          )}
        </aside>
      </header>

      {/* Description */}
      <section className="prose-site mt-14" aria-labelledby="desc-title">
        <h2 id="desc-title">{ui.aboutTitle}</h2>
        {deck.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {/* Objectifs + public */}
      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="heading text-2xl">{ui.objectivesTitle}</h2>
          <ul className="mt-5 space-y-3">
            {deck.objectives.map((objective) => (
              <li key={objective} className="flex gap-3 text-[15px] text-soft">
                <span aria-hidden className="mt-0.5 text-accent">
                  ✓
                </span>
                {objective}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="heading text-2xl">{ui.audienceTitle}</h2>
          <ul className="mt-5 space-y-3">
            {deck.audience.map((a) => (
              <li key={a} className="flex gap-3 text-[15px] text-soft">
                <span aria-hidden className="mt-0.5 text-accent">
                  →
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Aperçu des cartes */}
      {deck.sampleCards.length > 0 && (
        <section className="mt-16" aria-labelledby="preview-title">
          <h2 id="preview-title" className="heading text-2xl">
            {ui.previewTitle}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-soft">{ui.previewLead}</p>
          <div className="mt-7">
            <FlashcardPreview cards={deck.sampleCards} locale={locale} />
          </div>
        </section>
      )}

      {/* Structure du deck */}
      <section className="mt-16 max-w-2xl" aria-labelledby="structure-title">
        <h2 id="structure-title" className="heading text-2xl">
          {ui.structureTitle}
        </h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {deck.structure.map((section) => (
            <li
              key={section.name}
              className="flex items-baseline justify-between gap-6 py-3.5"
            >
              <span className="text-[15px]">{section.name}</span>
              <span className="shrink-0 text-sm text-faint">
                {ui.sectionCards(section.cards)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-faint">
          {ui.topics(deck.topics.join(" · "))}
        </p>
      </section>

      {/* FAQ spécifique */}
      {deck.faq && deck.faq.length > 0 && (
        <section className="mt-16 max-w-2xl" aria-labelledby="deck-faq-title">
          <h2 id="deck-faq-title" className="heading text-2xl">
            {ui.faqTitle}
          </h2>
          <div className="mt-6">
            <Accordion items={deck.faq} />
          </div>
        </section>
      )}

      {/* Decks liés */}
      {related.length > 0 && (
        <section
          className="mt-20 border-t border-line pt-12"
          aria-labelledby="related-title"
        >
          <h2 id="related-title" className="heading text-2xl">
            {ui.relatedTitle}
          </h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d) => (
              <DeckCard key={d.slug} deck={d} locale={locale} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
