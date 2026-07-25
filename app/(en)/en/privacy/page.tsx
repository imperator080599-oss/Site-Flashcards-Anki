import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PrivacyEn } from "@/components/views/LegalEn";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Privacy and cookie policy for ${SITE_NAME}.`,
  alternates: {
    canonical: absoluteUrl(path("privacy", locale)),
    languages: languageAlternates("privacy"),
  },
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage title="Privacy policy" updated="22 July 2026" locale={locale}>
      <PrivacyEn />
    </LegalPage>
  );
}
