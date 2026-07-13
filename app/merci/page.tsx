import type { Metadata } from "next";
import { Suspense } from "react";
import { OrderConfirmation } from "@/components/OrderConfirmation";

export const metadata: Metadata = {
  title: "Merci pour votre achat",
  description: "Confirmation de commande et téléchargement de votre deck Anki.",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <div className="container-site flex min-h-[60vh] items-center justify-center py-20">
      <Suspense
        fallback={
          <p className="text-soft" role="status">
            Vérification du paiement…
          </p>
        }
      >
        <OrderConfirmation />
      </Suspense>
    </div>
  );
}
