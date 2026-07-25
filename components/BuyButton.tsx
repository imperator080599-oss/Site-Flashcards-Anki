"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CommerceError, createCheckout } from "@/lib/commerce";
import { COMMERCE_ENABLED } from "@/lib/site";
import { formatPrice } from "@/lib/format";
import { defaultLocale, path, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function BuyButton({
  deckSlug,
  priceCents,
  locale = defaultLocale,
}: {
  deckSlug: string;
  priceCents: number;
  locale?: Locale;
}) {
  const ui = t(locale);
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setState("loading");
    setError(null);
    try {
      // URL de retour : page de remerciement de la langue courante, sur ce
      // déploiement (le site peut vivre sous un sous-chemin).
      const { origin, pathname, href } = window.location;
      const decksSegment = path("decks", locale);
      const base = pathname.slice(0, pathname.indexOf(decksSegment));
      const thanks = `${origin}${base}${path("thanks", locale)}`;
      const { url } = await createCheckout(
        deckSlug,
        `${thanks}?session_id={CHECKOUT_SESSION_ID}`,
        href,
        locale
      );
      window.location.href = url;
    } catch (e) {
      setState("error");
      setError(
        e instanceof CommerceError ? e.localizedMessage(locale) : ui.buy.genericError
      );
    }
  }

  if (!COMMERCE_ENABLED) {
    return (
      <div>
        <Button size="lg" disabled className="w-full sm:w-auto">
          {ui.buy.label(formatPrice(priceCents, locale))}
        </Button>
        <p className="mt-3 text-sm text-soft">{ui.buy.disabledNote}</p>
      </div>
    );
  }

  return (
    <div>
      <Button
        size="lg"
        onClick={handleBuy}
        disabled={state === "loading"}
        className="w-full sm:w-auto"
        aria-busy={state === "loading"}
      >
        {state === "loading"
          ? ui.buy.loading
          : ui.buy.label(formatPrice(priceCents, locale))}
      </Button>
      <p className="mt-3 text-xs text-faint">{ui.buy.reassurance}</p>
      {state === "error" && error && (
        <p
          role="alert"
          className="mt-3 rounded-sm border border-error/30 bg-error-wash px-4 py-3 text-sm text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}
