import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME, absoluteUrl } from "@/lib/site";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE_NAME}.`,
  alternates: {
    canonical: absoluteUrl(path("legalNotice", "fr")),
    languages: languageAlternates("legalNotice"),
  },
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updated="13 juillet 2026" locale="fr">
      <h2>Éditeur du site</h2>
      <p>
        Le site {SITE_NAME} est édité par Hadrien TRAN, entrepreneur
        individuel (micro-entrepreneur), exerçant sous le nom commercial
        « Imperator », dont l'établissement est situé à
        92500 Rueil-Malmaison.
      </p>
      <ul>
        <li>SIREN : 952 703 775</li>
        <li>TVA : non applicable, art. 293 B du CGI</li>
        <li>Directeur de la publication : Hadrien TRAN</li>
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
