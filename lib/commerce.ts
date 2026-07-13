import { COMMERCE_ENABLED, SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/site";

/**
 * Client des fonctions commerce (Supabase Edge Functions).
 *
 * Aucun secret ici : seule la clé publique (anon) est utilisée. Les prix,
 * la vérification du paiement et l'accès aux fichiers sont exclusivement
 * traités côté serveur.
 */

export class CommerceError extends Error {
  constructor(
    message: string,
    public readonly code:
      | "disabled"
      | "unavailable"
      | "not_found"
      | "not_paid"
      | "invalid"
      | "expired"
      | "unknown" = "unknown"
  ) {
    super(message);
  }
}

async function callFunction<T>(name: string, body: unknown): Promise<T> {
  if (!COMMERCE_ENABLED) {
    throw new CommerceError(
      "La boutique n'est pas encore ouverte sur cette instance.",
      "disabled"
    );
  }

  let response: Response;
  try {
    response = await fetch(`${SUPABASE_URL}/functions/v1/${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify(body),
    });
  } catch {
    throw new CommerceError(
      "Impossible de contacter le serveur. Vérifiez votre connexion puis réessayez.",
      "unavailable"
    );
  }

  const payload = (await response.json().catch(() => ({}))) as {
    error?: string;
    code?: string;
  } & T;

  if (!response.ok) {
    const code =
      payload.code === "payments_not_configured"
        ? "unavailable"
        : payload.code === "not_found"
          ? "not_found"
          : payload.code === "not_paid"
            ? "not_paid"
            : payload.code === "expired"
              ? "expired"
              : payload.code === "invalid"
                ? "invalid"
                : "unknown";
    throw new CommerceError(
      payload.error ?? "Une erreur est survenue. Réessayez dans un instant.",
      code
    );
  }

  return payload;
}

/** Démarre un paiement : retourne l'URL Stripe Checkout vers laquelle rediriger. */
export async function createCheckout(
  deckSlug: string,
  successUrl: string,
  cancelUrl: string
): Promise<{ url: string }> {
  return callFunction<{ url: string }>("create-checkout", {
    deckSlug,
    successUrl,
    cancelUrl,
  });
}

export interface OrderConfirmation {
  status: "paid" | "pending";
  deckSlug: string;
  deckTitle: string;
  email: string | null;
  downloadToken: string | null;
  expiresAt: string | null;
}

/** Vérifie une session Checkout côté serveur et récupère le lien de téléchargement. */
export async function confirmOrder(sessionId: string): Promise<OrderConfirmation> {
  return callFunction<OrderConfirmation>("confirm-order", { sessionId });
}

/** URL de téléchargement sécurisé pour un jeton d'achat. */
export function downloadUrl(token: string): string {
  return `${SUPABASE_URL}/functions/v1/download?token=${encodeURIComponent(token)}`;
}
