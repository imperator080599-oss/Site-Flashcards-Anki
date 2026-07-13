import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { DeckCard } from "@/components/DeckCard";
import { Accordion } from "@/components/Accordion";
import { FlashcardPreview } from "@/components/FlashcardPreview";
import { categories } from "@/content/categories";
import { getFeaturedDecks, countDecksByCategory } from "@/lib/catalog";
import { SITE_NAME, SITE_TAGLINE, absoluteUrl } from "@/lib/site";
import { homeFaq } from "@/content/faq";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "Decks Anki premium pour la prépa ECG, le DCG, le DSCG, le CFA, l'Investment Banking, la Financial Due Diligence, Excel et les langues. Mémorisez durablement grâce au rappel actif et à la répétition espacée.",
  alternates: { canonical: absoluteUrl("/") },
};

const demoCard = [
  {
    front: "Qu'est-ce que la répétition espacée ?",
    back: "Une méthode d'apprentissage qui planifie chaque révision juste avant le moment où vous alliez oublier. L'intervalle s'allonge à chaque succès : quelques minutes, puis des jours, puis des mois — pour un ancrage durable avec un minimum de temps.",
    tag: "La méthode",
  },
];

export default function HomePage() {
  const featured = getFeaturedDecks(4);
  const counts = countDecksByCategory();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-site flex flex-col items-start gap-10 py-20 sm:py-28 lg:flex-row lg:items-center lg:gap-16">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Flashcards Anki · Rappel actif · Répétition espacée
            </p>
            <h1 className="heading mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">
              Apprenez plus vite.
              <br />
              <em className="text-soft">Retenez pour de bon.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
              Des decks Anki soigneusement construits pour les concours et les
              métiers exigeants : prépa ECG, DCG, DSCG, CFA, Investment
              Banking, Financial Due Diligence, Excel et langues.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/decks/" size="lg">
                Explorer les decks
              </ButtonLink>
              <ButtonLink href="/methode/" size="lg" variant="secondary">
                Pourquoi ça marche
              </ButtonLink>
            </div>
          </div>

          <div className="w-full max-w-md lg:ml-auto">
            <FlashcardPreview cards={demoCard} />
            <p className="mt-3 text-center text-xs text-faint">
              Une carte Anki : question, effort de rappel, réponse.
            </p>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="container-site py-20" aria-labelledby="categories-title">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 id="categories-title" className="heading text-3xl">
              Un catalogue par discipline
            </h2>
            <p className="mt-3 max-w-xl text-soft">
              Chaque catégorie est construite avec la même exigence : des
              cartes atomiques, fidèles aux programmes et aux attentes réelles.
            </p>
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/categories/${c.slug}/`}
                className="group flex h-full flex-col bg-card p-6 transition-colors hover:bg-wash"
              >
                <span className="heading text-lg">{c.name}</span>
                <span className="mt-2 line-clamp-2 text-sm text-soft">
                  {c.lead}
                </span>
                <span className="mt-4 text-xs text-faint">
                  {counts.get(c.slug) ?? 0} deck{(counts.get(c.slug) ?? 0) > 1 ? "s" : ""}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Decks en avant */}
      <section className="border-y border-line bg-wash" aria-labelledby="featured-title">
        <div className="container-site py-20">
          <div className="flex items-end justify-between gap-6">
            <h2 id="featured-title" className="heading text-3xl">
              Decks en avant
            </h2>
            <Link href="/decks/" className="link-quiet hidden text-sm sm:inline">
              Tout le catalogue →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((deck) => (
              <DeckCard key={deck.slug} deck={deck} />
            ))}
          </div>
          <Link href="/decks/" className="link-quiet mt-8 inline-block text-sm sm:hidden">
            Tout le catalogue →
          </Link>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="container-site py-20" aria-labelledby="how-title">
        <h2 id="how-title" className="heading text-3xl">
          Comment ça marche
        </h2>
        <ol className="mt-10 grid gap-10 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Choisissez votre deck",
              text: "Chaque deck correspond à un programme, une épreuve ou une compétence précise, avec un aperçu des cartes avant l'achat.",
            },
            {
              step: "02",
              title: "Importez-le dans Anki",
              text: "Vous recevez un fichier .apkg à ouvrir avec Anki — gratuit sur ordinateur et Android. Deux clics suffisent.",
            },
            {
              step: "03",
              title: "Révisez quelques minutes par jour",
              text: "Anki planifie chaque carte au moment optimal. Vous ne révisez que ce qui doit l'être, et la mémoire se consolide durablement.",
            },
          ].map((item) => (
            <li key={item.step}>
              <span className="heading text-sm text-accent">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* La méthode */}
      <section className="border-y border-line bg-wash" aria-labelledby="method-title">
        <div className="container-site grid gap-12 py-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="method-title" className="heading text-3xl">
              Une méthode éprouvée par la recherche
            </h2>
            <p className="mt-5 leading-relaxed text-soft">
              Le <strong className="font-medium text-ink">rappel actif</strong> — se
              tester plutôt que relire — et la{" "}
              <strong className="font-medium text-ink">répétition espacée</strong> —
              revoir au bon moment — comptent parmi les techniques
              d'apprentissage les plus robustes de la psychologie cognitive.
              Anki les automatise ; nos decks apportent ce qui prend le plus de
              temps : un contenu rigoureux, structuré et fidèle aux programmes.
            </p>
            <ButtonLink href="/methode/" variant="secondary" className="mt-8">
              Découvrir la méthode
            </ButtonLink>
          </div>
          <ul className="space-y-6 self-center">
            {[
              {
                title: "Des cartes atomiques",
                text: "Une carte = une notion. C'est la condition d'une planification fiable et d'un rappel sans ambiguïté.",
              },
              {
                title: "Fidèles aux programmes",
                text: "Chaque deck suit le référentiel de l'épreuve ou les attentes réelles du métier — pas de remplissage.",
              },
              {
                title: "Conçus pour durer",
                text: "Formulations précises, tags propres, structure claire : des decks agréables à réviser sur la durée.",
              },
            ].map((item) => (
              <li key={item.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-20" aria-labelledby="faq-title">
        <div className="mx-auto max-w-2xl">
          <h2 id="faq-title" className="heading text-3xl">
            Questions fréquentes
          </h2>
          <div className="mt-8">
            <Accordion items={homeFaq} />
          </div>
          <p className="mt-6 text-sm text-soft">
            D'autres questions ?{" "}
            <Link href="/faq/" className="link-quiet">
              Consultez la FAQ complète
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
