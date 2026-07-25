import type { Metadata } from "next";
import { HomeView } from "@/components/views/HomeView";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: `${SITE_NAME} — Premium Anki decks to learn faster`,
  description: "Premium Anki decks for French prépa, DCG, DSCG, CFA, investment banking, financial due diligence, Excel and languages. Every deck states the language its cards are written in.",
  alternates: {
    canonical: absoluteUrl(path("home", locale)),
    languages: languageAlternates("home"),
  },
};

export default function Page() {
  return <HomeView locale={locale} />;
}
