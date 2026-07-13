import type { Deck } from "../types";

export const deck: Deck = {
  slug: "anglais-des-affaires-b2-c1",
  title: "Anglais des affaires — B2/C1",
  categorySlug: "langues",
  subcategory: "Anglais",
  level: "B2–C1",
  shortDescription:
    "800 cartes de vocabulaire économique et professionnel en contexte : collocations, phrasal verbs et tournures idiomatiques.",
  description: [
    "Ce deck cible le lexique dont on a réellement besoin en contexte professionnel et académique : économie, finance, management, négociation, presse anglo-saxonne. Chaque carte présente le mot en contexte — une phrase type issue de l'usage réel — plutôt qu'une traduction isolée.",
    "Les collocations (« to weather a downturn », « to post record earnings ») sont travaillées comme des unités, car c'est ainsi que la langue s'emploie. Idéal pour les épreuves de langues des concours comme pour la vie professionnelle.",
  ],
  objectives: [
    "Acquérir un lexique économique et professionnel actif de niveau B2–C1",
    "Maîtriser les collocations usuelles de la presse économique",
    "Gagner en aisance et en précision à l'écrit comme à l'oral",
    "Éviter les gallicismes classiques des francophones",
  ],
  audience: [
    "Étudiants en prépa, IEP et écoles de commerce",
    "Professionnels de la finance et du conseil",
    "Toute personne préparant un entretien ou un poste en anglais",
  ],
  topics: [
    "Économie et conjoncture",
    "Finance d'entreprise et marchés",
    "Management et stratégie",
    "Négociation et réunions",
    "Presse économique : tournures journalistiques",
  ],
  cardCount: 800,
  priceCents: 1900,
  sampleCards: [
    {
      front: "The company managed to ______ the downturn thanks to its strong balance sheet. (résister à / traverser)",
      back: "to weather the downturn — « The company managed to weather the downturn… » : traverser la crise sans dommage majeur. Collocation très fréquente dans la presse économique (weather a storm/crisis/recession).",
      tag: "Conjoncture",
    },
    {
      front: "Comment dit-on « rentable » — et quel est le faux ami à éviter ?",
      back: "profitable. « Rentable » ne se traduit pas par *rentable* (qui n'existe pas en anglais dans ce sens). On dira aussi cost-effective (rentable au sens efficient) ; break even = atteindre le seuil de rentabilité.",
      tag: "Faux amis",
    },
    {
      front: "to post record earnings — sens et registre ?",
      back: "Publier des résultats record. « Post » s'emploie pour l'annonce de résultats financiers (to post a profit/a loss). Registre : presse économique et communication financière.",
      tag: "Finance",
    },
  ],
  structure: [
    { name: "Économie et conjoncture", cards: 180 },
    { name: "Finance et marchés", cards: 170 },
    { name: "Management et stratégie", cards: 150 },
    { name: "Négociation, réunions, e-mails", cards: 140 },
    { name: "Tournures de presse et connecteurs", cards: 100 },
    { name: "Faux amis et gallicismes", cards: 60 },
  ],
  featured: true,
  demo: true,
  publishedAt: "2026-07-08",
};
