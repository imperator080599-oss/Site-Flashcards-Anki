import type { Metadata } from "next";
import { LegalPage, Placeholder } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: `Conditions générales de vente des decks numériques ${SITE_NAME}.`,
  alternates: { canonical: absoluteUrl("/cgv/") },
  robots: { index: false },
};

export default function CgvPage() {
  return (
    <LegalPage title="Conditions générales de vente" updated="13 juillet 2026">
      <h2>1. Objet et champ d'application</h2>
      <p>
        Les présentes conditions générales de vente (CGV) régissent les ventes
        de contenus numériques — decks de flashcards au format Anki (.apkg) —
        conclues sur le site {SITE_NAME} entre{" "}
        <Placeholder label="identité du vendeur (reprendre les mentions légales)" /> (le «
        Vendeur ») et toute personne physique agissant à des fins personnelles
        (le « Client »). Toute commande implique l'acceptation sans réserve
        des présentes CGV.
      </p>

      <h2>2. Produits</h2>
      <p>
        Les produits vendus sont des fichiers numériques téléchargeables au
        format .apkg, utilisables avec le logiciel Anki. Les caractéristiques
        essentielles de chaque deck (contenu, nombre de cartes, structure,
        public visé) sont décrites sur sa page produit. L'utilisation des
        decks requiert le logiciel Anki, non fourni par le Vendeur ; Anki est
        gratuit sur ordinateur et Android, l'application iOS officielle
        (AnkiMobile) étant payante.
      </p>

      <h2>3. Prix</h2>
      <p>
        Les prix sont indiqués en euros, toutes taxes comprises. Le prix
        applicable est celui affiché sur la page produit au moment de la
        commande. Le Vendeur se réserve le droit de modifier ses prix à tout
        moment pour les commandes futures.
      </p>

      <h2>4. Commande et paiement</h2>
      <p>
        Le paiement s'effectue en ligne par carte bancaire via la plateforme
        sécurisée Stripe. La commande est ferme dès la confirmation du
        paiement. Le Vendeur n'a jamais accès aux données complètes de la
        carte bancaire, traitées exclusivement par Stripe.
      </p>

      <h2>5. Livraison</h2>
      <p>
        La livraison est numérique et immédiate : après confirmation du
        paiement, un lien de téléchargement sécurisé est présenté au Client et
        rappelé dans l'e-mail de confirmation. Le lien est limité dans le
        temps et en nombre de téléchargements ; en cas d'expiration, le Client
        peut obtenir un nouveau lien en contactant le Vendeur à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>6. Droit de rétractation</h2>
      <p>
        Conformément à l'article L221-28 13° du Code de la consommation, le
        droit de rétractation ne peut être exercé pour les contenus numériques
        fournis sur un support immatériel dont l'exécution a commencé avec
        l'accord préalable exprès du consommateur et son renoncement exprès au
        droit de rétractation. En validant la commande et en accédant au
        téléchargement, le Client consent expressément à la fourniture
        immédiate du contenu et renonce à son droit de rétractation.
      </p>

      <h2>7. Licence d'utilisation</h2>
      <p>
        L'achat d'un deck confère au Client une licence personnelle, non
        exclusive et non transférable, pour un usage privé sur ses propres
        appareils. Sont notamment interdits : la revente, le partage, la
        publication (y compris sur des plateformes de partage de decks), la
        modification en vue d'une rediffusion, et tout usage collectif sans
        licence spécifique.
      </p>

      <h2>8. Garanties et conformité</h2>
      <p>
        Le Vendeur est tenu de la garantie légale de conformité des contenus
        numériques (articles L224-25-12 et suivants du Code de la
        consommation). Si un deck est non conforme à sa description ou
        inutilisable, le Client peut en demander la mise en conformité, ou à
        défaut le remboursement, en écrivant à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>9. Mises à jour</h2>
      <p>
        Les decks peuvent faire l'objet de mises à jour (corrections,
        enrichissements, évolutions de programme). Les mises à jour d'un deck
        acheté sont accessibles au Client sans surcoût.
      </p>

      <h2>10. Responsabilité</h2>
      <p>
        Les decks sont des outils d'aide à la mémorisation. Le Vendeur ne
        garantit aucun résultat à un examen, un concours ou un entretien, la
        réussite dépendant de nombreux facteurs propres au Client.
      </p>

      <h2>11. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est décrit dans la{" "}
        <a href="../confidentialite/">politique de confidentialité</a>.
      </p>

      <h2>12. Droit applicable et litiges</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige,
        le Client peut recourir gratuitement à un médiateur de la
        consommation : <Placeholder label="médiateur de la consommation choisi et ses coordonnées" />.
        Le Client peut également utiliser la plateforme européenne de
        règlement en ligne des litiges :{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>
    </LegalPage>
  );
}
