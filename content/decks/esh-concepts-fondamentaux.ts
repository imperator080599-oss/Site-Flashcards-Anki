import type { Deck } from "../types";

export const deck: Deck = {
  slug: "esh-concepts-fondamentaux",
  title: "ESH — Concepts fondamentaux",
  categorySlug: "prepa-ecg",
  subcategory: "ESH",
  level: "1re et 2e année",
  shortDescription:
    "Les concepts, auteurs et mécanismes essentiels du programme d'ESH, en cartes atomiques prêtes pour la répétition espacée.",
  description: [
    "L'épreuve d'ESH récompense les copies qui mobilisent des concepts précis, des auteurs correctement attribués et des mécanismes économiques maîtrisés. Ce deck couvre le socle du programme des deux années : microéconomie, macroéconomie, mondialisation, politiques économiques et sociologie.",
    "Chaque carte isole une seule notion — une définition, un mécanisme, une thèse d'auteur — formulée comme vous devrez la restituer en dissertation. Les cartes sont organisées par module du programme officiel, pour réviser en parallèle de vos cours.",
  ],
  objectives: [
    "Définir avec précision les concepts centraux du programme d'ESH",
    "Attribuer les thèses aux bons auteurs et les situer dans les débats",
    "Expliquer les mécanismes économiques mobilisables en dissertation",
    "Ancrer le socle des deux années pour aborder sereinement les concours",
  ],
  audience: [
    "Étudiants en prépa ECG (1re et 2e année)",
    "Candidats aux concours BCE et Ecricome",
    "Khûbes souhaitant consolider leurs acquis rapidement",
  ],
  topics: [
    "Microéconomie : marchés, défaillances, concurrence imparfaite",
    "Macroéconomie : croissance, fluctuations, monnaie",
    "Mondialisation commerciale et financière",
    "Politiques économiques et intervention publique",
    "Sociologie : stratification, mobilité, socialisation",
  ],
  cardLanguages: ["fr"],
  cardCount: 480,
  priceCents: 2900,
  sampleCards: [
    {
      front: "Qu'est-ce que la « destruction créatrice » chez Schumpeter ?",
      back: "Processus par lequel l'innovation détruit les structures productives existantes tout en en créant de nouvelles : les innovations rendent obsolètes les anciens produits, procédés et entreprises, et sont le moteur endogène de la dynamique du capitalisme (Capitalisme, socialisme et démocratie, 1942).",
      tag: "Croissance et fluctuations",
    },
    {
      front: "Définissez l'aléa moral (moral hazard).",
      back: "Situation d'asymétrie d'information post-contractuelle où un agent, protégé des conséquences de ses actes, modifie son comportement et prend davantage de risques. Exemple : une banque se sachant « too big to fail » accroît sa prise de risque.",
      tag: "Microéconomie",
    },
    {
      front: "Quel paradoxe met en évidence Leontief (1953) ?",
      back: "En testant le modèle HOS sur les États-Unis, Leontief constate que leurs exportations sont plus intensives en travail que leurs importations — l'inverse de la prédiction du modèle pour le pays le mieux doté en capital. Ce « paradoxe de Leontief » a stimulé les nouvelles théories du commerce international.",
      tag: "Mondialisation",
    },
  ],
  structure: [
    { name: "Microéconomie et défaillances du marché", cards: 105 },
    { name: "Macroéconomie : croissance et fluctuations", cards: 120 },
    { name: "Monnaie et financement de l'économie", cards: 75 },
    { name: "Mondialisation et commerce international", cards: 90 },
    { name: "Politiques économiques", cards: 50 },
    { name: "Sociologie", cards: 40 },
  ],
  featured: true,
  demo: true,
  draft: true,
  publishedAt: "2026-07-01",
};
