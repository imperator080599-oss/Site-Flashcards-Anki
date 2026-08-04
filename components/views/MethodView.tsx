import { ButtonLink } from "@/components/ui/Button";
import { path, type Locale } from "@/lib/i18n";

/**
 * Page « méthode ». Contrairement aux pages structurelles, le texte *est* la
 * page : chaque langue a donc sa propre prose plutôt qu'un gabarit commun
 * rempli de clés de dictionnaire.
 */
export function MethodView({ locale }: { locale: Locale }) {
  return (
    <div className="container-site py-14 sm:py-20">
      {locale === "fr" ? <MethodFr /> : <MethodEn />}
      <div className="mt-14 border-t border-line pt-10">
        <ButtonLink href={path("decks", locale)} size="lg">
          {locale === "fr" ? "Explorer le catalogue" : "Browse the catalogue"}
        </ButtonLink>
      </div>
    </div>
  );
}

function MethodFr() {
  return (
    <>
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          La méthode
        </p>
        <h1 className="heading mt-4 text-4xl sm:text-5xl">Pourquoi ça marche</h1>
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
          savoir la restituer. Le rappel actif consiste à s'obliger à retrouver
          l'information de mémoire — exactement ce qu'exigent un concours, un
          entretien ou une mission réelle.
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
          plus quoi réviser : l'algorithme présente chaque carte juste avant que
          vous ne l'oubliiez. Résultat : un ancrage durable pour un
          investissement en temps minimal — généralement 10 à 30 minutes par
          jour.
        </p>

        <h2>Pourquoi Anki</h2>
        <p>
          Anki est un logiciel libre, mature et utilisé par des millions
          d'apprenants — étudiants en médecine, polyglottes, candidats aux
          concours. Vos données vous appartiennent, la synchronisation entre
          appareils est gratuite via AnkiWeb, et le format .apkg est un standard
          ouvert : un deck acheté aujourd'hui restera utilisable dans dix ans.
        </p>

        <h2>Notre philosophie de construction</h2>
        <p>
          L'efficacité d'un deck dépend d'abord de la qualité de ses cartes. Les
          nôtres suivent des règles strictes :
        </p>
        <ul>
          <li>
            <strong>Une carte, une notion.</strong> Les cartes « fourre-tout »
            rendent la planification impossible : quand une carte contient cinq
            idées, en oublier une force à tout revoir. Nos cartes sont
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
            <strong>Langue des cartes annoncée.</strong> Chaque deck indique
            clairement la langue de son contenu — français, anglais ou paire
            bilingue — sur la fiche produit comme dans le catalogue.
          </li>
          <li>
            <strong>Structure et tags propres.</strong> Les decks sont organisés
            en sous-decks par thème, avec des tags cohérents, pour réviser une
            partie du programme isolément si besoin.
          </li>
          <li>
            <strong>Trois types de cartes.</strong> La plupart des decks
            combinent des cartes Basic (question / réponse), des QCM
            (Multiple-choice questions) et des Cloze (texte à trous), selon ce
            que la notion demande.
          </li>
          <li>
            <strong>Decks mis à jour quand la source change.</strong> Les decks
            sont mis à jour si le contenu source a changé — par exemple une
            nouvelle édition du livre dont ils sont tirés. Ces mises à jour ne
            sont pas rétroactives : un achat donne accès à la version en ligne
            au moment de l&rsquo;achat, pas aux versions publiées ensuite.
          </li>
        </ul>

        <h2>Ce que nos decks ne sont pas</h2>
        <p>
          Un deck Anki ne remplace ni un cours, ni la compréhension, ni la
          pratique d'exercices. C'est un outil de rétention : il garantit que ce
          que vous avez compris reste disponible, précis et mobilisable. La
          compréhension vient de vos cours ; la mémorisation durable, de vos
          révisions espacées.
        </p>
      </div>
    </>
  );
}

function MethodEn() {
  return (
    <>
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          The method
        </p>
        <h1 className="heading mt-4 text-4xl sm:text-5xl">Why it works</h1>
        <p className="mt-5 text-lg leading-relaxed text-soft">
          Our decks rest on two principles that cognitive psychology has
          established solidly: active recall and spaced repetition. Here is what
          they mean, and how we build our decks to get the most out of them.
        </p>
      </header>

      <div className="prose-site mt-12">
        <h2>Active recall: test yourself instead of rereading</h2>
        <p>
          Rereading your notes feels like mastery, but that familiarity is
          misleading: recognising a piece of information is not the same as
          being able to produce it. Active recall forces you to retrieve
          information from memory — exactly what an exam, an interview or a real
          engagement demands.
        </p>
        <p>
          The <em>testing effect</em> is one of the most replicated results in
          learning research: the effort of retrieval strengthens the memory
          trace far more durably than passive rereading. Every Anki card is a
          micro-test: question on the front, recall effort, verification on the
          back.
        </p>

        <h2>Spaced repetition: review at the right moment</h2>
        <p>
          Memory decays along a forgetting curve first described in the late
          19th century by Hermann Ebbinghaus. Each review slows that decay, and
          the optimal gap between reviews grows as the memory consolidates: a
          few minutes, then a day, a week, a month.
        </p>
        <p>
          Anki automates that scheduling card by card. You no longer decide what
          to review: the algorithm shows you each card just before you would
          have forgotten it. The result is durable retention for a minimal time
          investment — usually 10 to 30 minutes a day.
        </p>

        <h2>Why Anki</h2>
        <p>
          Anki is mature, free software used by millions of learners — medical
          students, polyglots, exam candidates. Your data belongs to you, syncing
          across devices is free through AnkiWeb, and the .apkg format is an
          open standard: a deck bought today will still be usable in ten years.
        </p>

        <h2>How we build our decks</h2>
        <p>
          A deck's effectiveness depends first and foremost on the quality of
          its cards. Ours follow strict rules:
        </p>
        <ul>
          <li>
            <strong>One card, one idea.</strong> Catch-all cards make scheduling
            impossible: when a card holds five ideas, forgetting one forces you
            to review all of them. Our cards are atomic.
          </li>
          <li>
            <strong>Exam wording.</strong> Questions are phrased the way they
            will be asked on the day — in an essay, an interview, an exam — not
            as textbook definitions.
          </li>
          <li>
            <strong>Faithful to the syllabus.</strong> Every deck follows the
            official exam programme or documented professional expectations,
            with no artificial padding.
          </li>
          <li>
            <strong>Card language stated up front.</strong> Every deck states
            the language of its content — French, English or a bilingual pair —
            on the product page and in the catalogue, so you always know what
            you are buying.
          </li>
          <li>
            <strong>Clean structure and tags.</strong> Decks are organised into
            sub-decks by theme, with consistent tags, so you can revise one part
            of the syllabus in isolation when you need to.
          </li>
          <li>
            <strong>Three card types.</strong> Most decks combine Basic cards
            (question / answer), multiple-choice questions (MCQ) and Cloze
            deletions, depending on what the material calls for.
          </li>
          <li>
            <strong>Decks updated when the source changes.</strong> A deck is
            updated when its source material changes — a new edition of the
            book it is drawn from, for instance. Those updates are not
            retroactive: a purchase gives you the version available at the time
            of purchase, not the versions published afterwards.
          </li>
        </ul>

        <h2>What our decks are not</h2>
        <p>
          An Anki deck replaces neither a course, nor understanding, nor
          practice. It is a retention tool: it guarantees that what you have
          understood stays available, precise and ready to use. Understanding
          comes from your courses; durable memory comes from your spaced
          reviews.
        </p>
      </div>
    </>
  );
}
