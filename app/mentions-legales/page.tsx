import type { Metadata } from "next";
import { LegalPage, Placeholder } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE_NAME}.`,
  alternates: { canonical: absoluteUrl("/mentions-legales/") },
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updated="13 juillet 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site {SITE_NAME} est édité par{" "}
        <Placeholder label="nom / raison sociale de l'éditeur" />,{" "}
        <Placeholder label="forme juridique (auto-entrepreneur, SASU…)" />,
        dont le siège est situé <Placeholder label="adresse complète" />.
      </p>
      <ul>
        <li>
          SIREN/SIRET : <Placeholder label="numéro SIREN/SIRET" />
        </li>
        <li>
          TVA intracommunautaire :{" "}
          <Placeholder label="numéro de TVA, ou mention « TVA non applicable, art. 293 B du CGI »" />
        </li>
        <li>
          Directeur de la publication :{" "}
          <Placeholder label="nom du directeur de la publication" />
        </li>
        <li>
          Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
      </ul>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly
        Jr. Street, San Francisco, CA 94107, États-Unis —{" "}
        <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">
          pages.github.com
        </a>
        . Les données de commande et la livraison des fichiers sont opérées
        via Supabase (Supabase Inc.), avec hébergement des données dans
        l'Union européenne (région Paris), et Stripe pour le paiement.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus du site — textes, decks, structure,
        identité visuelle — est protégé par le droit d'auteur. Toute
        reproduction ou diffusion, totale ou partielle, sans autorisation
        écrite préalable est interdite. L'achat d'un deck confère une licence
        d'utilisation personnelle et non transférable (voir les CGV).
      </p>
      <p>
        Anki est un logiciel libre tiers, développé et distribué
        indépendamment de {SITE_NAME}. Les marques citées appartiennent à
        leurs titulaires respectifs ; leur mention n'implique aucune
        affiliation ni approbation.
      </p>
    </LegalPage>
  );
}
