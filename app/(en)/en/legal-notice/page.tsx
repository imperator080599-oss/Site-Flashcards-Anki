import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { LegalNoticeEn } from "@/components/views/LegalEn";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Legal notice",
  description: `Legal notice for ${SITE_NAME}.`,
  alternates: {
    canonical: absoluteUrl(path("legalNotice", locale)),
    languages: languageAlternates("legalNotice"),
  },
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage title="Legal notice" updated="22 July 2026" locale={locale}>
      <LegalNoticeEn />
    </LegalPage>
  );
}
