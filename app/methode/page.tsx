import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "La méthode — rappel actif et répétition espacée",
  description:
    "Pourquoi Anki fonctionne : le rappel actif et la répétition espacée expliqués, et la philosophie de construction de nos decks.",
  alternates: { canonical: absoluteUrl("/methode/") },
};

export default function MethodePage() {
  return (
    <div className="container-site py-14 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          La méthode
        </p>
        <h1 className="heading mt-4 text-4xl sm:text-5xl">
          Pourquoi ça marche
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-soft">
          Nos decks reposent sur deux principes solidement établis par la
          psychologie cognitive : le rappel actif et la répétition espacée.
          Voici ce qu'ils recouvrent, et comment nous construisons nos decks
          pour en tirer le meilleur.
        </p>
      </header>

      <div className="prose-site mt-12">
        <h2>Le rappel actif : se tester plutôt que relire</h2>
        <p>
          Relire un cours donne une impression de maîtrise, mais cette
          familiarité est trompeuse : reconnaître une information n'est pas
          savoir la restituer. Le rappel actif consiste à s'obliger à
          retrouver l'information de mémoire — exactement ce qu'exigent un
          concours, un entretien ou une mission réelle.
        </p>
        <p>
          L'effet du test (<em>testing effect</em>) est l'un des résultats les
          plus répliqués de la recherche sur l'apprentissage : l'effort de
          récupération renforce durablement la trace mnésique, bien plus que la
          relecture passive. Chaque carte Anki est un micro-test : question au
          recto, effort de rappel, vérification au verso.
        </p>

        <h2>La répétition espacée : réviser au bon moment</h2>
        <p>
          La mémoire décline selon une courbe d'oubli identifiée dès la fin du
          XIX<sup>e</sup> siècle par Hermann Ebbinghaus. Chaque révision
          ralentit ce déclin, et l'espacement optimal des révisions s'allonge à
          mesure que le souvenir se consolide : quelques minutes, puis un jour,
          une semaine, un mois.
        </p>
        <p>
          Anki automatise cette planification carte par carte. Vous ne décidez
          plus quoi réviser : l'algorithme présente chaque carte juste avant
          que vous ne l'oubliiez. Résultat : un ancrage durable pour un
          investissement en temps minimal — généralement 10 à 30 minutes par
          jour.
        </p>

        <h2>Pourquoi Anki</h2>
        <p>
          Anki est un logiciel libre, mature et utilisé par des millions
          d'apprenants — étudiants en médecine, polyglottes, candidats aux
          concours. Vos données vous appartiennent, la synchronisation entre
          appareils est gratuite via AnkiWeb, et le format .apkg est un
          standard ouvert : un deck acheté aujourd'hui restera utilisable dans
          dix ans.
        </p>

        <h2>Notre philosophie de construction</h2>
        <p>
          L'efficacité d'un deck dépend d'abord de la qualité de ses cartes.
          Les nôtres suivent des règles strictes :
        </p>
        <ul>
          <li>
            <strong>Une carte, une notion.</strong> Les cartes « fourre-tout »
            rendent la planification impossible : quand une carte contient
            cinq idées, en oublier une force à tout revoir. Nos cartes sont
            atomiques.
          </li>
          <li>
            <strong>Des formulations d'examen.</strong> Les questions sont
            posées comme elles le seront le jour J — en dissertation, en
            entretien, à l'épreuve — pas comme des définitions de manuel.
          </li>
          <li>
            <strong>Fidélité aux référentiels.</strong> Chaque deck suit le
            programme officiel de l'épreuve ou les attentes documentées du
            métier, sans remplissage artificiel.
          </li>
          <li>
            <strong>Structure et tags propres.</strong> Les decks sont
            organisés en sous-decks par thème, avec des tags cohérents, pour
            réviser une partie du programme isolément si besoin.
          </li>
          <li>
            <strong>Mise à jour continue.</strong> Programmes et normes
            évoluent ; les decks aussi. Les acheteurs bénéficient des mises à
            jour de leur deck.
          </li>
        </ul>

        <h2>Ce que nos decks ne sont pas</h2>
        <p>
          Un deck Anki ne remplace ni un cours, ni la compréhension, ni la
          pratique d'exercices. C'est un outil de rétention : il garantit que
          ce que vous avez compris reste disponible, précis et mobilisable. La
          compréhension vient de vos cours ; la mémorisation durable, de vos
          révisions espacées.
        </p>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <ButtonLink href="/decks/" size="lg">
          Explorer le catalogue
        </ButtonLink>
      </div>
    </div>
  );
}
