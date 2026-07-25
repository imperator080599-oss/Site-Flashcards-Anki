import type { Metadata } from "next";
import { DecksView } from "@/components/views/DecksView";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { t } from "@/content/i18n/ui";

const locale = "fr" as const;

export const metadata: Metadata = {
  title: t(locale).decksPage.metaTitle,
  description: t(locale).decksPage.metaDescription,
  alternates: {
    canonical: absoluteUrl(path("decks", locale)),
    languages: languageAlternates("decks"),
  },
};

export default function Page() {
  return <DecksView locale={locale} />;
}
