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
export function OrderConfirmation() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [state, setState] = useState<State>({ phase: "loading" });

  useEffect(() => {
    if (!sessionId) {
      setState({
        phase: "error",
        message:
          "Référence de commande manquante. Si vous venez de payer, utilisez le lien de l'e-mail de confirmation.",
      });
      return;
    }

    let cancelled = false;
    confirmOrder(sessionId)
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
              ? e.message
              : "Impossible de vérifier la commande. Réessayez dans un instant.",
        });
      });

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  if (state.phase === "loading") {
    return (
      <p className="text-soft" role="status">
        Vérification du paiement…
      </p>
    );
  }

  if (state.phase === "pending") {
    return (
      <div className="max-w-lg text-center">
        <h1 className="heading text-3xl">Paiement en cours de confirmation</h1>
        <p className="mt-4 text-soft">
          Votre paiement est en cours de traitement. Rechargez cette page dans
          quelques instants — le lien de téléchargement apparaîtra dès la
          confirmation.
        </p>
      </div>
    );
  }

  if (state.phase === "error") {
    return (
      <div className="max-w-lg text-center">
        <h1 className="heading text-3xl">Un problème est survenu</h1>
        <p role="alert" className="mt-4 text-soft">
          {state.message}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/decks/" variant="secondary">
            Retour au catalogue
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
      <h1 className="heading mt-4 text-3xl">Merci pour votre achat</h1>
      <p className="mt-4 text-soft">
        Votre paiement pour <strong className="text-ink">{order.deckTitle}</strong>{" "}
        est confirmé{order.email ? ` (reçu envoyé à ${order.email})` : ""}. Vous
        pouvez télécharger votre deck dès maintenant.
      </p>

      {order.downloadToken ? (
        <div className="mt-8">
          <a
            href={downloadUrl(order.downloadToken)}
            className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-7 text-[15px] font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Télécharger le deck (.apkg)
          </a>
          {order.expiresAt && (
            <p className="mt-3 text-xs text-faint">
              Lien valable jusqu'au{" "}
              {new Date(order.expiresAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              . Conservez cette page ou l'e-mail de confirmation.
            </p>
          )}
        </div>
      ) : (
        <p className="mt-8 text-sm text-soft">
          Le lien de téléchargement est en cours de préparation. Rechargez la
          page dans quelques secondes.
        </p>
      )}

      <div className="mt-10 border-t border-line pt-8 text-left">
        <h2 className="text-sm font-semibold">Installer le deck dans Anki</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-soft">
          <li>
            Installez Anki depuis{" "}
            <a
              href="https://apps.ankiweb.net"
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              apps.ankiweb.net
            </a>{" "}
            si ce n'est pas déjà fait.
          </li>
          <li>Double-cliquez sur le fichier .apkg téléchargé (ou Fichier → Importer).</li>
          <li>Le deck apparaît dans votre collection : bonnes révisions.</li>
        </ol>
        <p className="mt-4 text-sm text-soft">
          Un problème ?{" "}
          <Link href="/faq/" className="link-quiet">
            Consultez la FAQ
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
