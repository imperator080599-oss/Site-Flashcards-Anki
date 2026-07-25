import type { Metadata } from "next";
import { HomeView } from "@/components/views/HomeView";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const locale = "fr" as const;

export const metadata: Metadata = {
  title: `${SITE_NAME} — Decks Anki premium pour apprendre plus vite`,
  description: "Decks Anki premium pour la prépa ECG, le DCG, le DSCG, le CFA, l'Investment Banking, la Financial Due Diligence, Excel et les langues. Mémorisez durablement grâce au rappel actif et à la répétition espacée.",
  alternates: {
    canonical: absoluteUrl(path("home", locale)),
    languages: languageAlternates("home"),
  },
};

export default function Page() {
  return <HomeView locale={locale} />;
}
