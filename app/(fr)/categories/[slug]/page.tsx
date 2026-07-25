import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/views/CategoryView";
import { getCategories, getCategory } from "@/lib/catalog";
import { languageAlternatesFor } from "@/lib/layout";
import { categoryPath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";
import { t } from "@/content/i18n/ui";

const locale = "fr" as const;

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug, locale);
  if (!category) return {};
  return {
    title: category.title,
    description: `${category.lead} ${t(locale).categoriesPage.metaSuffix}`,
    alternates: {
      canonical: absoluteUrl(categoryPath(category.slug, locale)),
      languages: languageAlternatesFor({
        fr: categoryPath(category.slug, "fr"),
        en: categoryPath(category.slug, "en"),
      }),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug, locale);
  if (!category) notFound();
  return <CategoryView category={category} locale={locale} />;
}
