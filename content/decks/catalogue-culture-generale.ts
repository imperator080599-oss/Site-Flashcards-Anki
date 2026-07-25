import type { Deck } from "../types";

/** Catalogue réel — Culture générale (sources publiques). */
export const decks: Deck[] = [
  {
    slug: "geographie-departements-de-france",
    title: "Départements de France — 180 cartes",
    categorySlug: "culture-generale",
    subcategory: "Géographie",
    shortDescription:
      "Numéro ⇄ département, sur données Datagouv : le réflexe 01 → Ain, 02 → Aisne… enfin acquis pour de bon.",
    description: [
      "Construit sur les données ouvertes officielles (data.gouv.fr) : 180 cartes associant chaque numéro de département à son nom, avec cartes de localisation.",
      "Un classique des concours administratifs, des quiz — et de la vie quotidienne.",
    ],
    objectives: [
      "Associer chaque numéro à son département sans hésiter",
      "Situer les départements sur la carte",
    ],
    audience: ["Candidats aux concours administratifs", "Curieux et amateurs de quiz"],
    topics: ["Numéros et noms", "Localisation"],
    cardLanguages: ["fr"],
    cardCount: 180,
    priceCents: 690,
    sampleCards: [
      { front: "01", back: "Ain", tag: "Départements" },
      { front: "04", back: "Alpes-de-Haute-Provence", tag: "Départements" },
      { front: "07", back: "Ardèche", tag: "Départements" },
    ],
    structure: [{ name: "Départements (Datagouv)", cards: 180 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "geographie-regions-de-france",
    title: "Régions de France — 12 cartes",
    categorySlug: "culture-generale",
    subcategory: "Géographie",
    shortDescription:
      "Les régions de France métropolitaine en cartes, sur données Datagouv.",
    description: [
      "Le découpage régional français en un deck court construit sur les données ouvertes officielles (data.gouv.fr).",
      "À combiner avec le deck des départements pour une carte de France complète en tête.",
    ],
    objectives: ["Connaître les régions métropolitaines", "Compléter la carte mentale de la France"],
    audience: ["Candidats aux concours", "Curieux"],
    topics: ["Régions métropolitaines"],
    cardLanguages: ["fr"],
    cardCount: 12,
    priceCents: 490,
    sampleCards: [],
    structure: [{ name: "Régions (Datagouv)", cards: 12 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "geographie-etats-capitales-monde",
    title: "États et capitales du monde — 197 cartes",
    categorySlug: "culture-generale",
    subcategory: "Géographie",
    shortDescription:
      "197 pays → capitale, d'Afghanistan → Kaboul à Zimbabwe → Harare, sur données publiques.",
    description: [
      "Tous les États du monde et leur capitale : 197 cartes pays → capitale, construites sur données publiques.",
      "Le socle de culture générale géopolitique — utile en prépa, aux concours, en entretien et au quotidien.",
    ],
    objectives: ["Connaître la capitale de chaque État", "Consolider sa culture géopolitique"],
    audience: ["Étudiants en prépa et IEP", "Candidats aux concours et quiz"],
    topics: ["Capitales du monde"],
    cardLanguages: ["fr"],
    cardCount: 197,
    priceCents: 690,
    sampleCards: [
      { front: "Afghanistan", back: "Kaboul", tag: "Capitales" },
      { front: "Afrique du Sud", back: "Prétoria", tag: "Capitales" },
      { front: "Albanie", back: "Tirana", tag: "Capitales" },
    ],
    structure: [{ name: "États et capitales", cards: 197 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "geographie-paris-arrondissements",
    title: "Arrondissements de Paris — 19 cartes visuelles",
    categorySlug: "culture-generale",
    subcategory: "Géographie",
    shortDescription:
      "Situer chaque arrondissement de Paris sur la carte : 19 cartes visuelles de localisation.",
    description: [
      "Un deck visuel : chaque carte présente la carte de Paris et demande de situer un arrondissement, sur données Datagouv.",
      "Parfait pour les nouveaux Parisiens, les chauffeurs, les concours — et l'amour-propre en soirée.",
    ],
    objectives: ["Situer chaque arrondissement instantanément", "Mémoriser la spirale parisienne"],
    audience: ["Nouveaux arrivants à Paris", "Curieux"],
    topics: ["Arrondissements", "Cartes de localisation"],
    cardLanguages: ["fr"],
    cardCount: 19,
    priceCents: 490,
    sampleCards: [],
    structure: [{ name: "Cartes visuelles (Datagouv)", cards: 19 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "geographie-world-heritage-list",
    title: "Patrimoine mondial de l'UNESCO — 2 496 cartes",
    categorySlug: "culture-generale",
    subcategory: "Géographie",
    shortDescription:
      "La liste du patrimoine mondial en cartes : 2 496 sites → pays, du chantier naval d'Antigua à la région d'Ohrid.",
    description: [
      "L'intégralité de la liste du patrimoine mondial en cartes site → pays : 2 496 entrées couvrant les patrimoines culturels et naturels du monde entier.",
      "Un voyage de culture générale au long cours, qui transforme chaque révision en découverte.",
    ],
    objectives: [
      "Associer les grands sites à leur pays",
      "Construire une culture patrimoniale mondiale",
    ],
    audience: ["Amateurs de culture générale et de voyages", "Candidats aux concours et quiz"],
    topics: ["Sites culturels", "Sites naturels", "Sites transfrontaliers"],
    cardLanguages: ["fr"],
    cardCount: 2496,
    priceCents: 1490,
    sampleCards: [
      {
        front: "Patrimoine naturel et culturel de la région d'Ohrid",
        back: "Macédoine du Nord, Albanie",
        tag: "Sites mixtes",
      },
      {
        front: "Chantier naval d'Antigua et sites archéologiques associés",
        back: "Antigua-et-Barbuda",
        tag: "Sites culturels",
      },
    ],
    structure: [{ name: "Liste du patrimoine mondial", cards: 2496 }],
    publishedAt: "2026-07-19",
  },
];
