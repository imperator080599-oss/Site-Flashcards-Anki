"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CommerceError, createCheckout } from "@/lib/commerce";
import { COMMERCE_ENABLED } from "@/lib/site";
import { formatPrice } from "@/lib/format";

export function BuyButton({
  deckSlug,
  priceCents,
}: {
  deckSlug: string;
  priceCents: number;
}) {
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setState("loading");
    setError(null);
    try {
      // Les URLs de retour pointent vers la page courante du site déployé.
      const origin = window.location.origin;
      const base = window.location.pathname.replace(/decks\/.*/, "");
      const { url } = await createCheckout(
        deckSlug,
        `${origin}${base}merci/?session_id={CHECKOUT_SESSION_ID}`,
        window.location.href
      );
      window.location.href = url;
    } catch (e) {
      setState("error");
      setError(
        e instanceof CommerceError
          ? e.message
          : "Une erreur est survenue. Réessayez dans un instant."
      );
    }
  }

  if (!COMMERCE_ENABLED) {
    return (
      <div>
        <Button size="lg" disabled className="w-full sm:w-auto">
          Acheter — {formatPrice(priceCents)}
        </Button>
        <p className="mt-3 text-sm text-soft">
          La boutique ouvre très prochainement. Le paiement en ligne n'est pas
          encore activé sur cette version du site.
        </p>
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
          ? "Redirection vers le paiement…"
          : `Acheter — ${formatPrice(priceCents)}`}
      </Button>
      <p className="mt-3 text-xs text-faint">
        Paiement sécurisé par Stripe · Téléchargement immédiat · TVA incluse
      </p>
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
