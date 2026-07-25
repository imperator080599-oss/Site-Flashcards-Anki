import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { getFullFaq } from "@/lib/catalog";
import { CONTACT_EMAIL } from "@/lib/site";
import { path, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function FaqView({ locale }: { locale: Locale }) {
  const ui = t(locale).faqPage;
  const sections = getFullFaq(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: sections.flatMap((section) =>
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
        <h1 className="heading text-4xl">{ui.title}</h1>
        <p className="mt-4 text-soft">{ui.intro}</p>
      </header>

      <div className="mt-12 max-w-2xl space-y-12">
        {sections.map((section) => (
          <section key={section.section} aria-label={section.section}>
            <h2 className="heading text-2xl">{section.section}</h2>
            <div className="mt-5">
              <Accordion items={section.items} />
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 max-w-2xl text-sm text-soft">
        {ui.contact1}{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-quiet">
          {CONTACT_EMAIL}
        </a>{" "}
        {ui.contact2}{" "}
        <Link href={path("method", locale)} className="link-quiet">
          {ui.contactLink}
        </Link>{" "}
        {ui.contact3}
      </p>
    </div>
  );
}
