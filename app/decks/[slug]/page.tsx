import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { Badge } from "@/components/ui/Badge";
import { BuyButton } from "@/components/BuyButton";
import { DeckCard } from "@/components/DeckCard";
import { FlashcardPreview } from "@/components/FlashcardPreview";
import {
  getCategory,
  getDeck,
  getDecks,
  getDecksByCategory,
} from "@/lib/catalog";
import { formatCardCount, formatPrice } from "@/lib/format";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getDecks().map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const deck = getDeck(slug);
  if (!deck) return {};
  return {
    title: `${deck.title} — Deck Anki`,
    description: deck.shortDescription,
    alternates: { canonical: absoluteUrl(`/decks/${deck.slug}/`) },
    openGraph: {
      title: `${deck.title} — Deck Anki`,
      description: deck.shortDescription,
      type: "website",
      url: absoluteUrl(`/decks/${deck.slug}/`),
    },
  };
}

export default async function DeckPage({ params }: Props) {
  const { slug } = await params;
  const deck = getDeck(slug);
  if (!deck) notFound();

  const category = getCategory(deck.categorySlug);
  const related = getDecksByCategory(deck.categorySlug)
    .filter((d) => d.slug !== deck.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: deck.title,
    description: deck.shortDescription,
    category: category?.name,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      price: (deck.priceCents / 100).toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/decks/${deck.slug}/`),
    },
  };

  return (
    <div className="container-site py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Fil d'Ariane" className="text-xs text-faint">
        <Link href="/decks/" className="hover:text-ink">
          Catalogue
        </Link>
        <span aria-hidden> / </span>
        {category && (
          <>
            <Link href={`/categories/${category.slug}/`} className="hover:text-ink">
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
            {deck.subcategory && <Badge>{deck.subcategory}</Badge>}
            {deck.level && <Badge>{deck.level}</Badge>}
            {deck.demo && <Badge tone="demo">Deck de démonstration</Badge>}
          </div>
          <h1 className="heading mt-5 text-4xl sm:text-[2.75rem]">{deck.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-soft">
            {deck.shortDescription}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-5">
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">Cartes</dt>
              <dd className="mt-1 font-medium">{formatCardCount(deck.cardCount)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">Format</dt>
              <dd className="mt-1 font-medium">Fichier Anki (.apkg)</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">Livraison</dt>
              <dd className="mt-1 font-medium">Téléchargement immédiat</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-faint">Prix</dt>
              <dd className="mt-1 font-medium">{formatPrice(deck.priceCents)}</dd>
            </div>
          </dl>
        </div>

        {/* Encart d'achat */}
        <aside className="h-fit rounded-md border border-line bg-card p-6 lg:sticky lg:top-24">
          <p className="heading text-3xl">{formatPrice(deck.priceCents)}</p>
          <p className="mt-1 text-xs text-faint">TVA incluse</p>
          <div className="mt-5">
            <BuyButton deckSlug={deck.slug} priceCents={deck.priceCents} />
          </div>
          {deck.demo && (
            <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-soft">
              Ce deck fait partie du catalogue de démonstration publié au
              lancement du site : il illustre le format et l'expérience
              d'achat.
            </p>
          )}
        </aside>
      </header>

      {/* Description */}
      <section className="prose-site mt-14" aria-labelledby="desc-title">
        <h2 id="desc-title">À propos de ce deck</h2>
        {deck.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      {/* Objectifs + public */}
      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="heading text-2xl">Ce que vous allez maîtriser</h2>
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
          <h2 className="heading text-2xl">Pour qui ?</h2>
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
      <section className="mt-16" aria-labelledby="preview-title">
        <h2 id="preview-title" className="heading text-2xl">
          Aperçu des cartes
        </h2>
        <p className="mt-2 max-w-xl text-sm text-soft">
          Trois cartes extraites du deck, telles que vous les verrez dans
          Anki. Cliquez sur une carte pour révéler sa réponse.
        </p>
        <div className="mt-7">
          <FlashcardPreview cards={deck.sampleCards} />
        </div>
      </section>

      {/* Structure du deck */}
      <section className="mt-16 max-w-2xl" aria-labelledby="structure-title">
        <h2 id="structure-title" className="heading text-2xl">
          Structure du deck
        </h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {deck.structure.map((section) => (
            <li
              key={section.name}
              className="flex items-baseline justify-between gap-6 py-3.5"
            >
              <span className="text-[15px]">{section.name}</span>
              <span className="shrink-0 text-sm text-faint">
                {section.cards} cartes
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-faint">
          Thèmes couverts : {deck.topics.join(" · ")}.
        </p>
      </section>

      {/* FAQ spécifique */}
      {deck.faq && deck.faq.length > 0 && (
        <section className="mt-16 max-w-2xl" aria-labelledby="deck-faq-title">
          <h2 id="deck-faq-title" className="heading text-2xl">
            Questions sur ce deck
          </h2>
          <div className="mt-6">
            <Accordion items={deck.faq} />
          </div>
        </section>
      )}

      {/* Decks liés */}
      {related.length > 0 && (
        <section className="mt-20 border-t border-line pt-12" aria-labelledby="related-title">
          <h2 id="related-title" className="heading text-2xl">
            Dans la même catégorie
          </h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d) => (
              <DeckCard key={d.slug} deck={d} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
