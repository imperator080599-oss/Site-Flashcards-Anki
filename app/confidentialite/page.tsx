import type { Metadata } from "next";
import { LegalPage, Placeholder } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et cookies du site ${SITE_NAME}.`,
  alternates: { canonical: absoluteUrl("/confidentialite/") },
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="13 juillet 2026">
      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données collectées sur {SITE_NAME}{" "}
        est <Placeholder label="identité du responsable (reprendre les mentions légales)" />,
        joignable à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Données collectées et finalités</h2>
      <ul>
        <li>
          <strong>Lors d'un achat</strong> : adresse e-mail et données de
          facturation, collectées via Stripe pour l'exécution de la commande
          (base légale : exécution du contrat) ; référence de commande et
          statut de paiement, conservés pour la gestion des téléchargements,
          la comptabilité et les obligations légales.
        </li>
        <li>
          <strong>Lors d'un contact par e-mail</strong> : les informations que
          vous nous transmettez, utilisées uniquement pour vous répondre.
        </li>
        <li>
          <strong>Navigation</strong> : le site ne dépose aucun cookie de
          suivi et n'utilise aucun outil de mesure d'audience tierce. C'est
          pourquoi aucun bandeau de consentement n'est nécessaire.
        </li>
      </ul>

      <h2>Paiement</h2>
      <p>
        Les paiements sont traités par Stripe Payments Europe, Ltd. Les
        données de carte bancaire sont transmises directement à Stripe et ne
        transitent jamais par nos systèmes. Consultez la{" "}
        <a
          href="https://stripe.com/fr/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          politique de confidentialité de Stripe
        </a>
        .
      </p>

      <h2>Durées de conservation</h2>
      <p>
        Les données de commande sont conservées pendant la durée nécessaire à
        la fourniture du service (accès aux mises à jour du deck), puis
        archivées conformément aux obligations comptables et fiscales
        (10 ans pour les pièces comptables). Les échanges e-mail sont
        conservés au plus 3 ans après le dernier contact.
      </p>

      <h2>Destinataires et transferts</h2>
      <p>
        Les données sont traitées par nos sous-traitants techniques : Stripe
        (paiement), Supabase (base de données et fichiers, hébergés dans
        l'Union européenne) et GitHub (hébergement du site statique, qui ne
        traite pas de données de commande). Aucune donnée n'est vendue ni
        transmise à des tiers à des fins commerciales.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de
        rectification, d'effacement, de limitation, d'opposition et de
        portabilité sur vos données. Pour l'exercer, écrivez à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Vous pouvez
        également introduire une réclamation auprès de la CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>
        ).
      </p>
    </LegalPage>
  );
}
