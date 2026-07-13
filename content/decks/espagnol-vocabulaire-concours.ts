import type { Deck } from "../types";

export const deck: Deck = {
  slug: "espagnol-vocabulaire-concours",
  title: "Espagnol — Vocabulaire des concours",
  categorySlug: "langues",
  subcategory: "Espagnol",
  level: "B1–B2",
  shortDescription:
    "Le lexique des thèmes de civilisation et d'actualité hispanophone, pour les épreuves écrites et orales des concours.",
  description: [
    "Les épreuves d'espagnol des concours s'appuient sur des thèmes récurrents : société espagnole et latino-américaine, politique, économie, environnement, migrations. Ce deck couvre le lexique de ces thèmes, avec les tournures qui structurent un bon essai ou une bonne khôlle.",
    "Chaque carte présente le terme en contexte, son genre, et les collocations usuelles. Les verbes à régime prépositionnel et les faux amis font l'objet de cartes dédiées.",
  ],
  objectives: [
    "Maîtriser le vocabulaire des grands thèmes de civilisation",
    "Structurer essais et oraux avec des connecteurs idiomatiques",
    "Éliminer les faux amis et erreurs de préposition classiques",
    "Gagner en richesse lexicale à l'écrit comme à l'oral",
  ],
  audience: [
    "Étudiants en prépa ECG et littéraire (LV1/LV2 espagnol)",
    "Candidats aux IEP et concours de la fonction publique",
    "Étudiants préparant une certification B2",
  ],
  topics: [
    "Société et politique en Espagne",
    "Amérique latine : économie et société",
    "Environnement et énergie",
    "Migrations et mémoire historique",
    "Connecteurs et tournures d'essai",
  ],
  cardCount: 650,
  priceCents: 1900,
  sampleCards: [
    {
      front: "« Le réchauffement climatique » — traduction et collocation usuelle ?",
      back: "el calentamiento global (ou el cambio climático pour « le changement climatique »). Collocations : luchar contra el cambio climático, frenar el calentamiento global.",
      tag: "Environnement",
    },
    {
      front: "Faux ami : que signifie « constipado » ?",
      back: "Enrhumé (estar constipado = avoir un rhume) — et non « constipé » (estreñido). Faux ami classique des copies.",
      tag: "Faux amis",
    },
    {
      front: "Connecteur : « en définitive / au bout du compte » ?",
      back: "a fin de cuentas / en definitiva. Utile en conclusion d'essai : « En definitiva, se trata de un desafío estructural… »",
      tag: "Connecteurs",
    },
  ],
  structure: [
    { name: "Société et politique espagnoles", cards: 140 },
    { name: "Amérique latine", cards: 140 },
    { name: "Environnement, énergie, tech", cards: 110 },
    { name: "Migrations et mémoire", cards: 100 },
    { name: "Connecteurs et tournures", cards: 90 },
    { name: "Faux amis et prépositions", cards: 70 },
  ],
  demo: true,
  publishedAt: "2026-07-12",
};
