"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import {
  CommerceError,
  confirmOrder,
  downloadUrl,
  type OrderConfirmation as Confirmation,
} from "@/lib/commerce";
import { defaultLocale, path, type Locale } from "@/lib/i18n";
import { formatDate } from "@/lib/format";
import { t } from "@/content/i18n/ui";

type State =
  | { phase: "loading" }
  | { phase: "paid"; order: Confirmation }
  | { phase: "pending" }
  | { phase: "error"; message: string };

/**
 * Page de confirmation : vérifie la session Stripe côté serveur
 * (edge function `confirm-order`) puis affiche le lien de téléchargement
 * sécurisé. Aucun accès au fichier n'est possible sans paiement vérifié.
 */
export function OrderConfirmation({
  locale = defaultLocale,
}: {
  locale?: Locale;
}) {
  const ui = t(locale);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [state, setState] = useState<State>({ phase: "loading" });

  useEffect(() => {
    if (!sessionId) {
      setState({ phase: "error", message: ui.order.missingSession });
      return;
    }

    let cancelled = false;
    confirmOrder(sessionId, locale)
      .then((order) => {
        if (cancelled) return;
        setState(
          order.status === "paid" ? { phase: "paid", order } : { phase: "pending" }
        );
      })
      .catch((e) => {
        if (cancelled) return;
        setState({
          phase: "error",
          message:
            e instanceof CommerceError
              ? e.localizedMessage(locale)
              : ui.order.verifyFailed,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [sessionId, locale, ui.order.missingSession, ui.order.verifyFailed]);

  if (state.phase === "loading") {
    return (
      <p className="text-soft" role="status">
        {ui.order.verifying}
      </p>
    );
  }

  if (state.phase === "pending") {
    return (
      <div className="max-w-lg text-center">
        <h1 className="heading text-3xl">{ui.order.pendingTitle}</h1>
        <p className="mt-4 text-soft">{ui.order.pendingText}</p>
      </div>
    );
  }

  if (state.phase === "error") {
    return (
      <div className="max-w-lg text-center">
        <h1 className="heading text-3xl">{ui.order.errorTitle}</h1>
        <p role="alert" className="mt-4 text-soft">
          {state.message}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href={path("decks", locale)} variant="secondary">
            {ui.order.backToCatalogue}
          </ButtonLink>
        </div>
      </div>
    );
  }

  const { order } = state;
  return (
    <div className="max-w-lg text-center">
      <p aria-hidden className="heading text-4xl text-success">
        ✓
      </p>
      <h1 className="heading mt-4 text-3xl">{ui.order.successTitle}</h1>
      <p className="mt-4 text-soft">
        {ui.order.successText(order.deckTitle, order.email)}
      </p>

      {order.downloadToken ? (
        <div className="mt-8">
          <a
            href={downloadUrl(order.downloadToken, locale)}
            className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-7 text-[15px] font-medium text-white transition-colors hover:bg-accent-deep"
          >
            {ui.order.download}
          </a>
          {order.expiresAt && (
            <p className="mt-3 text-xs text-faint">
              {ui.order.linkValidUntil(formatDate(order.expiresAt, locale))}
            </p>
          )}
        </div>
      ) : (
        <p className="mt-8 text-sm text-soft">{ui.order.preparing}</p>
      )}

      <div className="mt-10 border-t border-line pt-8 text-left">
        <h2 className="text-sm font-semibold">{ui.order.installTitle}</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-soft">
          <li>
            {ui.order.installStep1a}{" "}
            <a
              href="https://apps.ankiweb.net"
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              apps.ankiweb.net
            </a>{" "}
            {ui.order.installStep1b}
          </li>
          <li>{ui.order.installStep2}</li>
          <li>{ui.order.installStep3}</li>
        </ol>
        <p className="mt-4 text-sm text-soft">
          {ui.order.problem}{" "}
          <Link href={path("faq", locale)} className="link-quiet">
            {ui.order.faqLink}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
