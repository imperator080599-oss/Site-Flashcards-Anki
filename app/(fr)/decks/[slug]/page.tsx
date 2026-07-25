import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeckView } from "@/components/views/DeckView";
import { getCategory, getDeck, getDecks } from "@/lib/catalog";
import { languageAlternatesFor } from "@/lib/layout";
import { deckPath } from "@/lib/i18n";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { t } from "@/content/i18n/ui";

const locale = "fr" as const;

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getDecks().map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const deck = getDeck(slug, locale);
  if (!deck) return {};
  const title = `${deck.title} — ${t(locale).deck.metaSuffix}`;
  return {
    title,
    description: deck.shortDescription,
    alternates: {
      canonical: absoluteUrl(deckPath(deck.slug, locale)),
      languages: languageAlternatesFor({
        fr: deckPath(deck.slug, "fr"),
        en: deckPath(deck.slug, "en"),
      }),
    },
    openGraph: {
      title,
      description: deck.shortDescription,
      type: "website",
      url: absoluteUrl(deckPath(deck.slug, locale)),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const deck = getDeck(slug, locale);
  if (!deck) notFound();

  const category = getCategory(deck.categorySlug, locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: deck.title,
    description: deck.shortDescription,
    category: category?.name,
    inLanguage: deck.cardLanguages,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      price: (deck.priceCents / 100).toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(deckPath(deck.slug, locale)),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeckView deck={deck} locale={locale} />
    </>
  );
}
