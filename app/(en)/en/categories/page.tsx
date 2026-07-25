import type { Metadata } from "next";
import { CategoriesView } from "@/components/views/CategoriesView";
import { languageAlternates } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { t } from "@/content/i18n/ui";

const locale = "en" as const;

export const metadata: Metadata = {
  title: t(locale).categoriesPage.title,
  description: t(locale).categoriesPage.metaDescription,
  alternates: {
    canonical: absoluteUrl(path("categories", locale)),
    languages: languageAlternates("categories"),
  },
};

export default function Page() {
  return <CategoriesView locale={locale} />;
}
