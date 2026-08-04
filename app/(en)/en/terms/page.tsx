import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { TermsEn } from "@/components/views/LegalEn";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Terms of sale",
  description: `Terms of sale for ${SITE_NAME} digital decks.`,
  alternates: {
    canonical: absoluteUrl(path("terms", locale)),
    languages: languageAlternates("terms"),
  },
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage title="Terms of sale" updated="4 August 2026" locale={locale}>
      <TermsEn />
    </LegalPage>
  );
}
