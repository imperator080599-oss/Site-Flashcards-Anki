import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "prepa-ecg",
    name: "Prépa ECG",
    title: "Decks Anki pour la prépa ECG",
    lead: "Mémorisez durablement l'essentiel du programme ECG — concepts, auteurs, chiffres et repères — sans relire vos cours en boucle.",
    description:
      "En classe préparatoire ECG, la masse de connaissances à retenir en ESH, géopolitique, langues et mathématiques dépasse ce que la relecture permet d'ancrer. Nos decks découpent le programme en cartes atomiques, pensées pour la répétition espacée : vous révisez chaque notion juste avant de l'oublier, et vous arrivez aux concours avec des fondations solides.",
    order: 1,
  },
  {
    slug: "dcg",
    name: "DCG",
    title: "Decks Anki pour le DCG",
    lead: "Les notions clés de chaque UE du Diplôme de Comptabilité et de Gestion, structurées pour être retenues jusqu'à l'examen.",
    description:
      "Le DCG exige de maîtriser un volume important de définitions, d'écritures comptables, de règles fiscales et juridiques. Chaque deck couvre une UE et transforme le référentiel en questions-réponses précises, pour réviser efficacement tout au long de l'année et sécuriser les fondamentaux le jour de l'épreuve.",
    order: 2,
  },
  {
    slug: "dscg",
    name: "DSCG",
    title: "Decks Anki pour le DSCG",
    lead: "Consolidez les connaissances techniques du DSCG — comptabilité avancée, audit, finance, droit — avec des cartes de niveau master.",
    description:
      "Le DSCG demande à la fois de la hauteur de vue et une grande précision technique. Nos decks isolent les points de cours qui font gagner des points : normes, retraitements de consolidation, raisonnements d'audit et mécanismes financiers, formulés pour être restitués en conditions d'examen.",
    order: 3,
  },
  {
    slug: "langues",
    name: "Langues",
    title: "Decks Anki de langues",
    lead: "Vocabulaire ciblé et structures idiomatiques, appris par répétition espacée — la méthode la plus efficace pour la mémoire lexicale.",
    description:
      "L'apprentissage du vocabulaire est le cas d'usage historique d'Anki : la répétition espacée y est redoutablement efficace. Nos decks de langues privilégient un lexique réellement utile — thèmes d'actualité, langue des affaires, collocations — avec des exemples en contexte plutôt que des listes de mots isolés.",
    order: 4,
  },
  {
    slug: "excel",
    name: "Excel",
    title: "Decks Anki pour maîtriser Excel",
    lead: "Raccourcis, fonctions et réflexes de modélisation : automatisez les gestes qui font la vitesse des meilleurs analystes.",
    description:
      "La maîtrise d'Excel est une compétence de mémoire procédurale : ce sont les raccourcis et les fonctions mobilisés sans réfléchir qui font la différence. Ces decks entraînent les automatismes — navigation au clavier, fonctions de recherche, bonnes pratiques de modélisation — jusqu'à ce qu'ils deviennent des réflexes.",
    order: 5,
  },
  {
    slug: "investment-banking",
    name: "Investment Banking",
    title: "Decks Anki pour l'Investment Banking",
    lead: "Les technicals attendus en entretien M&A — comptabilité, valorisation, LBO — sous forme de questions-réponses d'entraînement.",
    description:
      "Les entretiens en banque d'affaires testent des connaissances précises, à restituer vite et sans hésitation. Nos decks reprennent les questions techniques classiques — liens entre états financiers, méthodes de valorisation, mécanique LBO — formulées comme en entretien, pour transformer la préparation en réflexes.",
    order: 6,
  },
  {
    slug: "transaction-services",
    name: "Financial Due Diligence",
    title: "Decks Anki pour la Financial Due Diligence",
    lead: "Les fondamentaux du Transaction Services : EBITDA ajusté, BFR normatif, dette nette — les concepts au cœur des missions de FDD.",
    description:
      "En Transaction Services, la valeur d'un analyste tient à la maîtrise de concepts précis : ajustements d'EBITDA, normalisation du BFR, items de dette nette, mécanismes de closing. Ces decks structurent ce corpus en cartes rigoureuses, utiles autant pour les entretiens que pour les premières missions.",
    order: 7,
  },
  {
    slug: "comptabilite-ifrs",
    name: "Comptabilité & IFRS",
    title: "Decks Anki de comptabilité et normes IFRS",
    lead: "Plan comptable général, référentiel IFRS, IFRS 9 : les référentiels comptables en cartes, pour les ancrer durablement.",
    description:
      "La comptabilité et les normes internationales reposent sur des référentiels précis qu'il faut connaître par cœur : numéros de comptes du PCG, objectifs des normes IAS/IFRS, mécanismes d'IFRS 9. Ces decks transforment ces référentiels en cartes de révision systématiques, utiles aux étudiants comme aux professionnels du chiffre.",
    order: 5,
  },
  {
    slug: "culture-generale",
    name: "Culture générale",
    title: "Decks Anki de culture générale",
    lead: "Départements, capitales du monde, patrimoine mondial : les repères factuels que tout le monde devrait avoir en tête.",
    description:
      "Certaines connaissances sont des fondations : la carte de France, les capitales, les grands sites du patrimoine mondial. Construits sur des sources de référence (Datagouv, UNESCO), ces decks ancrent ces repères une bonne fois pour toutes, pour les concours comme pour la culture personnelle.",
    order: 9,
  },
  {
    slug: "physique-chimie",
    name: "Physique-Chimie",
    title: "Decks Anki de physique-chimie",
    lead: "Le tableau périodique et les repères des sciences physiques, en cartes construites sur des données de référence.",
    description:
      "Les sciences physiques reposent sur un socle de connaissances exactes : éléments, symboles, masses atomiques. Construits sur des données de référence comme celles de l'IUPAC, ces decks installent ce socle par répétition espacée — pour les lycéens, les étudiants et tous les esprits scientifiques.",
    order: 10,
  },
  {
    slug: "cfa",
    name: "CFA",
    title: "Decks Anki pour le CFA",
    lead: "Formules, définitions et concepts clés du curriculum CFA, découpés en cartes pour tenir la distance sur plusieurs mois de préparation.",
    description:
      "La préparation du CFA s'étale sur des mois et le taux d'oubli est l'ennemi principal du candidat. La répétition espacée est particulièrement adaptée : nos decks couvrent les formules et concepts essentiels du curriculum, en anglais — la langue de l'examen — pour ancrer durablement ce qui sera testé.",
    order: 8,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
