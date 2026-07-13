import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeckCard } from "@/components/DeckCard";
import { categories, getCategory, getDecksByCategory } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: `${category.lead} Decks Anki fondés sur le rappel actif et la répétition espacée.`,
    alternates: { canonical: absoluteUrl(`/categories/${category.slug}/`) },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const decks = getDecksByCategory(category.slug);

  return (
    <div className="container-site py-14 sm:py-20">
      <nav aria-label="Fil d'Ariane" className="text-xs text-faint">
        <Link href="/categories/" className="hover:text-ink">
          Catégories
        </Link>
        <span aria-hidden> / </span>
        <span className="text-soft">{category.name}</span>
      </nav>

      <header className="mt-6 max-w-2xl">
        <h1 className="heading text-4xl">{category.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-soft">{category.lead}</p>
      </header>

      <div className="mt-12">
        {decks.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {decks.map((deck) => (
              <DeckCard key={deck.slug} deck={deck} />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-line bg-card px-6 py-16 text-center">
            <p className="heading text-xl">Les decks arrivent</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-soft">
              Cette catégorie est en cours de construction. Les premiers decks
              y seront publiés prochainement.
            </p>
            <Link href="/decks/" className="link-quiet mt-5 inline-block text-sm">
              Voir le reste du catalogue
            </Link>
          </div>
        )}
      </div>

      <section className="prose-site mt-16 border-t border-line pt-10">
        <h2>À propos de cette catégorie</h2>
        <p>{category.description}</p>
      </section>
    </div>
  );
}
