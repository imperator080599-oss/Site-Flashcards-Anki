import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

/**
 * Versions anglaises des pages légales.
 *
 * Traductions de courtoisie : le vendeur est un professionnel français et le
 * contrat est régi par le droit français, donc la version française prévaut.
 * Chaque page le dit explicitement — un acheteur doit savoir quel texte
 * l'engage.
 */
function PrevailingNotice({ frenchHref }: { frenchHref: string }) {
  return (
    <p className="rounded-sm border border-line bg-wash px-4 py-3 text-sm text-soft">
      This English text is provided for convenience. The seller is established
      in France and the contract is governed by French law: in case of any
      discrepancy, the{" "}
      <a href={frenchHref} className="link-quiet">
        French version
      </a>{" "}
      prevails.
    </p>
  );
}

export function LegalNoticeEn() {
  return (
    <>
      <PrevailingNotice frenchHref="../../mentions-legales/" />

      <h2>Site publisher</h2>
      <p>
        {SITE_NAME} is published by Hadrien TRAN, sole trader (French
        <em> micro-entrepreneur</em>), trading under the business name
        “Imperator”, whose establishment is located in 92500 Rueil-Malmaison,
        France.
      </p>
      <ul>
        <li>SIREN: 952 703 775</li>
        <li>VAT: not applicable, art. 293 B of the French tax code</li>
        <li>Publication director: Hadrien TRAN</li>
        <li>
          Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
      </ul>

      <h2>Hosting</h2>
      <p>
        The site is hosted by GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr.
        Street, San Francisco, CA 94107, United States —{" "}
        <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">
          pages.github.com
        </a>
        . Order data and file delivery are operated through Supabase (Supabase
        Inc.), with data hosted in the European Union (Paris region), and
        Stripe for payment.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site — text, decks, structure, visual identity — is
        protected by copyright. Any reproduction or distribution, in whole or in
        part, without prior written permission is prohibited. Buying a deck
        grants a personal, non-transferable licence to use it (see the terms of
        sale).
      </p>
      <p>
        Anki is third-party free software, developed and distributed
        independently of {SITE_NAME}. Trademarks mentioned belong to their
        respective owners; mentioning them implies no affiliation or
        endorsement.
      </p>
    </>
  );
}

export function TermsEn() {
  return (
    <>
      <PrevailingNotice frenchHref="../../cgv/" />

      <h2>1. Purpose and scope</h2>
      <p>
        These terms of sale govern sales of digital content — Anki flashcard
        decks (.apkg) — concluded on {SITE_NAME} between Hadrien TRAN, sole
        trader operating under the business name “Imperator”, SIREN
        952 703 775 (the “Seller”), and any natural person acting for personal
        purposes (the “Customer”). Placing an order implies unreserved
        acceptance of these terms.
      </p>

      <h2>2. Products</h2>
      <p>
        The products sold are downloadable digital files in .apkg format, for
        use with the Anki software. The essential characteristics of each deck
        (content, number of cards, structure, target audience and the language
        the cards are written in) are described on its product page. Using the
        decks requires the Anki software, which the Seller does not supply; Anki
        is free on desktop and Android, while the official iOS app (AnkiMobile)
        is paid.
      </p>

      <h2>3. Prices</h2>
      <p>
        Prices are stated in euros and charged in euros. VAT is not applicable
        under article 293 B of the French tax code (small-business VAT
        exemption). The applicable price is the one displayed on the product
        page at the time of the order. The Seller may change prices at any time
        for future orders.
      </p>

      <h2>4. Order and payment</h2>
      <p>
        Payment is made online by bank card through the secure Stripe platform.
        The order becomes firm upon payment confirmation. The Seller never has
        access to full card details, which are processed exclusively by Stripe.
      </p>

      <h2>5. Delivery</h2>
      <p>
        Delivery is digital and immediate: after payment confirmation, a secure
        download link is shown to the Customer and repeated in the confirmation
        e-mail. The link is limited in time and in number of downloads; if it
        expires, the Customer can obtain a new one by contacting the Seller at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>6. Right of withdrawal</h2>
      <p>
        Under article L221-28 13° of the French Consumer Code, the right of
        withdrawal cannot be exercised for digital content supplied on an
        intangible medium where performance has begun with the consumer's prior
        express consent and express waiver of the right of withdrawal. By
        confirming the order and accessing the download, the Customer expressly
        consents to immediate supply of the content and waives the right of
        withdrawal.
      </p>

      <h2>7. Licence of use</h2>
      <p>
        Buying a deck grants the Customer a personal, non-exclusive and
        non-transferable licence for private use on their own devices. The
        following are prohibited in particular: resale, sharing, publication
        (including on deck-sharing platforms), modification for redistribution,
        and any collective use without a specific licence.
      </p>

      <h2>8. Warranties and conformity</h2>
      <p>
        The Seller is bound by the legal warranty of conformity for digital
        content (articles L224-25-12 et seq. of the French Consumer Code). If a
        deck does not conform to its description or is unusable, the Customer
        may request that it be brought into conformity or, failing that, a
        refund, by writing to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>9. Updates</h2>
      <p>
        A deck may be updated when its source material changes (for example, a
        new edition of the work it is drawn from). Such updates are not
        retroactive: the Customer acquires the version of the deck available on
        the date of their order, and versions published later are not
        redistributed to them. No right of access to future versions is
        included in the price.
      </p>

      <h2>10. Liability</h2>
      <p>
        The decks are memorisation aids. The Seller does not guarantee any
        result in an examination, a competitive exam or an interview, success
        depending on many factors specific to the Customer.
      </p>

      <h2>11. Personal data</h2>
      <p>
        The processing of personal data is described in the{" "}
        <a href="../privacy/">privacy policy</a>.
      </p>

      <h2>12. Governing law and disputes</h2>
      <p>
        These terms are governed by French law. After a prior written approach
        to the Seller has gone without a satisfactory answer for one month, the
        Customer may refer the matter free of charge to the consumer mediator
        the Seller belongs to: CM2C — Centre de la médiation de la consommation
        de conciliateurs de justice, 14 rue Saint-Jean, 75017 Paris, France —{" "}
        <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer">
          cm2c.net
        </a>
        . The Customer may also use the European online dispute resolution
        platform:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>
    </>
  );
}

export function PrivacyEn() {
  return (
    <>
      <PrevailingNotice frenchHref="../../confidentialite/" />

      <h2>Data controller</h2>
      <p>
        The controller of the data collected on {SITE_NAME} is Hadrien TRAN,
        sole trader (business name “Imperator”, SIREN 952 703 775), reachable at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Data collected and purposes</h2>
      <ul>
        <li>
          <strong>When you buy</strong>: e-mail address and billing data,
          collected through Stripe to perform the order (legal basis:
          performance of the contract); order reference and payment status, kept
          to manage downloads, accounting and legal obligations.
        </li>
        <li>
          <strong>When you contact us by e-mail</strong>: the information you
          send us, used solely to reply to you.
        </li>
        <li>
          <strong>Browsing</strong>: the site sets no tracking cookies and uses
          no third-party analytics. That is why no consent banner is needed.
        </li>
      </ul>

      <h2>Payment</h2>
      <p>
        Payments are processed by Stripe Payments Europe, Ltd. Card data is sent
        directly to Stripe and never passes through our systems. See{" "}
        <a
          href="https://stripe.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe's privacy policy
        </a>
        .
      </p>

      <h2>Retention periods</h2>
      <p>
        Order data is kept for as long as needed to provide the service
        (delivering the deck, re-issuing an expired download link, after-sales
        support), then archived in line with accounting and tax
        obligations (10 years for accounting records). E-mail exchanges are kept
        for at most 3 years after the last contact.
      </p>

      <h2>Recipients and transfers</h2>
      <p>
        Data is processed by our technical subprocessors: Stripe (payment),
        Supabase (database and files, hosted in the European Union) and GitHub
        (static site hosting, which processes no order data). No data is sold or
        passed to third parties for commercial purposes.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR you have rights of access, rectification, erasure,
        restriction, objection and portability over your data. To exercise them,
        write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You may
        also lodge a complaint with the French data protection authority, the
        CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>
        ).
      </p>
    </>
  );
}
