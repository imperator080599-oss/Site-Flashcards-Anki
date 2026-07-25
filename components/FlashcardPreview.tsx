"use client";

import { useState } from "react";
import type { SampleCard } from "@/content/types";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

/**
 * Aperçu interactif d'une carte Anki : recto visible, clic (ou Entrée)
 * pour retourner la carte et révéler le verso — la mécanique exacte du
 * rappel actif.
 */
function Flashcard({
  card,
  index,
  locale,
}: {
  card: SampleCard;
  index: number;
  locale: Locale;
}) {
  const ui = t(locale).flashcard;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard-scene">
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        aria-label={
          flipped ? ui.ariaHide(index + 1) : ui.ariaReveal(index + 1)
        }
        className="block w-full text-left"
      >
        <div
          className={`flashcard-inner grid min-h-56 ${flipped ? "is-flipped" : ""}`}
        >
          {/* Recto */}
          <div className="flashcard-face col-start-1 row-start-1 flex flex-col rounded-md border border-line bg-card p-6 shadow-lift">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                {ui.front}
              </span>
              {card.tag && (
                <span className="rounded-xs bg-wash px-2 py-0.5 text-[11px] text-soft">
                  {card.tag}
                </span>
              )}
            </div>
            <p className="heading mt-4 text-lg leading-snug">{card.front}</p>
            <span className="mt-auto pt-5 text-xs text-accent">
              {ui.reveal}
            </span>
          </div>

          {/* Verso */}
          <div className="flashcard-face flashcard-back col-start-1 row-start-1 flex flex-col rounded-md border border-accent/25 bg-accent-wash p-6 shadow-lift">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                {ui.back}
              </span>
              {card.tag && (
                <span className="rounded-xs bg-card px-2 py-0.5 text-[11px] text-soft">
                  {card.tag}
                </span>
              )}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              {card.back}
            </p>
            <span className="mt-auto pt-5 text-xs text-accent">
              {ui.hide}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export function FlashcardPreview({
  cards,
  locale = defaultLocale,
}: {
  cards: SampleCard[];
  locale?: Locale;
}) {
  // Une seule carte (ex. hero) : pleine largeur ; sinon grille responsive.
  const columns =
    cards.length === 1 ? "" : "lg:grid-cols-2 xl:grid-cols-3";
  return (
    <div className={`grid gap-5 ${columns}`}>
      {cards.map((card, i) => (
        <Flashcard key={i} card={card} index={i} locale={locale} />
      ))}
    </div>
  );
}
