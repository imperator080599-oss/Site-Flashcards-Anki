import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { fullFaq } from "@/content/faq";
import { CONTACT_EMAIL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — questions fréquentes",
  description:
    "Tout savoir sur Anki, l'achat et l'installation de nos decks, les appareils compatibles, les mises à jour et la politique de remboursement.",
  alternates: { canonical: absoluteUrl("/faq/") },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fullFaq.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      }))
    ),
  };

  return (
    <div className="container-site py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="max-w-2xl">
        <h1 className="heading text-4xl">Questions fréquentes</h1>
        <p className="mt-4 text-soft">
          Anki, achat, installation, compatibilité, mises à jour : les
          réponses aux questions que l'on nous pose le plus.
        </p>
      </header>

      <div className="mt-12 max-w-2xl space-y-12">
        {fullFaq.map((section) => (
          <section key={section.section} aria-label={section.section}>
            <h2 className="heading text-2xl">{section.section}</h2>
            <div className="mt-5">
              <Accordion items={section.items} />
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 max-w-2xl text-sm text-soft">
        Vous n'avez pas trouvé votre réponse ? Écrivez-nous à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-quiet">
          {CONTACT_EMAIL}
        </a>{" "}
        — ou consultez{" "}
        <Link href="/methode/" className="link-quiet">
          la page méthode
        </Link>{" "}
        pour comprendre comment tirer le meilleur de vos decks.
      </p>
    </div>
  );
}
