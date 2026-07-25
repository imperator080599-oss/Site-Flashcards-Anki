import { COMMERCE_ENABLED, SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/site";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

/**
 * Client des fonctions commerce (Supabase Edge Functions).
 *
 * Aucun secret ici : seule la clé publique (anon) est utilisée. Les prix,
 * la vérification du paiement et l'accès aux fichiers sont exclusivement
 * traités côté serveur.
 *
 * Les messages d'erreur affichés proviennent du dictionnaire local et non du
 * serveur : ils sont ainsi toujours dans la langue de la page.
 */

export type CommerceErrorCode =
  | "disabled"
  | "unavailable"
  | "not_found"
  | "not_paid"
  | "invalid"
  | "expired"
  | "unknown";

export class CommerceError extends Error {
  constructor(
    message: string,
    public readonly code: CommerceErrorCode = "unknown"
  ) {
    super(message);
  }

  /** Message destiné à l'utilisateur, dans la langue de la page. */
  localizedMessage(locale: Locale = defaultLocale): string {
    return t(locale).commerceErrors[this.code];
  }
}

function errorCodeFrom(payloadCode: string | undefined): CommerceErrorCode {
  switch (payloadCode) {
    case "payments_not_configured":
      return "unavailable";
    case "not_found":
    case "not_paid":
    case "expired":
    case "invalid":
      return payloadCode;
    default:
      return "unknown";
  }
}

async function callFunction<T>(name: string, body: unknown): Promise<T> {
  if (!COMMERCE_ENABLED) {
    throw new CommerceError("Commerce disabled on this instance.", "disabled");
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
    throw new CommerceError("Network error.", "unavailable");
  }

  const payload = (await response.json().catch(() => ({}))) as {
    error?: string;
    code?: string;
  } & T;

  if (!response.ok) {
    throw new CommerceError(
      payload.error ?? "Request failed.",
      errorCodeFrom(payload.code)
    );
  }

  return payload;
}

/** Démarre un paiement : retourne l'URL Stripe Checkout vers laquelle rediriger. */
export async function createCheckout(
  deckSlug: string,
  successUrl: string,
  cancelUrl: string,
  locale: Locale = defaultLocale
): Promise<{ url: string }> {
  return callFunction<{ url: string }>("create-checkout", {
    deckSlug,
    successUrl,
    cancelUrl,
    locale,
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
export async function confirmOrder(
  sessionId: string,
  locale: Locale = defaultLocale
): Promise<OrderConfirmation> {
  return callFunction<OrderConfirmation>("confirm-order", { sessionId, locale });
}

/** URL de téléchargement sécurisé pour un jeton d'achat. */
export function downloadUrl(token: string, locale: Locale = defaultLocale): string {
  return `${SUPABASE_URL}/functions/v1/download?token=${encodeURIComponent(
    token
  )}&lang=${locale}`;
}
