import type { Metadata } from "next";
import { FaqView } from "@/components/views/FaqView";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { t } from "@/content/i18n/ui";

const locale = "en" as const;

export const metadata: Metadata = {
  title: t(locale).faqPage.metaTitle,
  description: t(locale).faqPage.metaDescription,
  alternates: {
    canonical: absoluteUrl(path("faq", locale)),
    languages: languageAlternates("faq"),
  },
};

export default function Page() {
  return <FaqView locale={locale} />;
}
