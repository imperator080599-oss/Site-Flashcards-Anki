import Link from "next/link";
import type { Deck } from "@/content/types";
import { getCategory } from "@/lib/catalog";
import { formatCardCount, formatPrice } from "@/lib/format";
import { fullLabel, shortLabel } from "@/lib/cardLanguages";
import { deckPath, defaultLocale, type Locale } from "@/lib/i18n";
import { Badge } from "@/components/ui/Badge";

export function DeckCard({
  deck,
  locale = defaultLocale,
}: {
  deck: Deck;
  locale?: Locale;
}) {
  const category = getCategory(deck.categorySlug, locale);
  return (
    <article className="group relative flex flex-col rounded-md border border-line bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">{category?.name ?? deck.categorySlug}</Badge>
        <Badge tone="language" title={fullLabel(deck.cardLanguages, locale)}>
          {shortLabel(deck.cardLanguages)}
        </Badge>
        {deck.demo && <Badge tone="demo">{locale === "fr" ? "Démo" : "Demo"}</Badge>}
      </div>

      <h3 className="heading mt-4 text-xl">
        <Link
          href={deckPath(deck.slug, locale)}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {deck.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-soft">
        {deck.shortDescription}
      </p>

      <div className="mt-auto flex items-baseline justify-between pt-6">
        <span className="text-xs text-faint">
          {formatCardCount(deck.cardCount, locale)}
          {deck.level ? ` · ${deck.level}` : ""}
        </span>
        <span className="font-medium">{formatPrice(deck.priceCents, locale)}</span>
      </div>
    </article>
  );
}
