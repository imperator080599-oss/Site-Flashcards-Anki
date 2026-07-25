import type { Metadata } from "next";
import { MethodView } from "@/components/views/MethodView";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

const locale = "fr" as const;

export const metadata: Metadata = {
  title: "La méthode — rappel actif et répétition espacée",
  description: "Pourquoi Anki fonctionne : le rappel actif et la répétition espacée expliqués, et la philosophie de construction de nos decks.",
  alternates: {
    canonical: absoluteUrl(path("method", locale)),
    languages: languageAlternates("method"),
  },
};

export default function Page() {
  return <MethodView locale={locale} />;
}
