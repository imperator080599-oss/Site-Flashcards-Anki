import type { Metadata } from "next";
import { MethodView } from "@/components/views/MethodView";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "The method — active recall and spaced repetition",
  description: "Why Anki works: active recall and spaced repetition explained, and the philosophy behind how we build our decks.",
  alternates: {
    canonical: absoluteUrl(path("method", locale)),
    languages: languageAlternates("method"),
  },
};

export default function Page() {
  return <MethodView locale={locale} />;
}
