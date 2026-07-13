import type { Deck } from "../types";

export const deck: Deck = {
  slug: "geopolitique-reperes-essentiels",
  title: "Géopolitique — Repères essentiels",
  categorySlug: "prepa-ecg",
  subcategory: "HGG",
  level: "1re et 2e année",
  shortDescription:
    "Dates, chiffres, acteurs et notions de géopolitique : les repères factuels qui donnent de la précision à vos copies d'HGG.",
  description: [
    "Une bonne copie de géopolitique s'appuie sur des repères exacts : dates de traités, chiffres d'échanges, organisations internationales, notions correctement définies. Ce deck rassemble les repères factuels transversaux du programme d'HGG, ceux qui servent quel que soit le sujet.",
    "Les cartes privilégient les faits stables et vérifiables — chronologies, définitions, acteurs institutionnels — plutôt que les données conjoncturelles qui se périment. Chaque chiffre est accompagné de son ordre de grandeur et de sa source usuelle.",
  ],
  objectives: [
    "Mémoriser les dates et chronologies structurantes du programme",
    "Définir les notions clés de la géopolitique et de la géoéconomie",
    "Connaître les organisations internationales, leur rôle et leurs membres clés",
    "Donner des ordres de grandeur justes dans les copies",
  ],
  audience: [
    "Étudiants en prépa ECG (1re et 2e année)",
    "Candidats préparant les épreuves d'HGG des concours BCE et Ecricome",
  ],
  topics: [
    "Chronologies : mondialisations, conflits, construction européenne",
    "Notions : puissance, soft power, hinterland, ZEE…",
    "Organisations et gouvernance mondiale",
    "Espaces maritimes, énergie, ressources",
  ],
  cardCount: 390,
  priceCents: 2400,
  sampleCards: [
    {
      front: "Qu'est-ce qu'une ZEE et quelle étendue couvre-t-elle ?",
      back: "Zone économique exclusive : espace maritime s'étendant jusqu'à 200 milles marins des côtes, sur lequel l'État côtier exerce des droits souverains d'exploration et d'exploitation des ressources (convention de Montego Bay, 1982). La France possède le deuxième domaine maritime mondial grâce à ses outre-mer.",
      tag: "Espaces maritimes",
    },
    {
      front: "Soft power : qui forge le concept, et que désigne-t-il ?",
      back: "Joseph Nye (Bound to Lead, 1990) : capacité d'un État à obtenir ce qu'il veut par l'attraction et la persuasion — culture, valeurs, diplomatie — plutôt que par la coercition militaire ou économique (hard power).",
      tag: "Notions",
    },
    {
      front: "Quand la Chine rejoint-elle l'OMC, et pourquoi est-ce un tournant ?",
      back: "En décembre 2001. Cette adhésion accélère l'insertion de la Chine dans les chaînes de valeur mondiales et son essor exportateur : elle devient le premier exportateur mondial de marchandises à la fin des années 2000, bouleversant les équilibres commerciaux.",
      tag: "Chronologies",
    },
  ],
  structure: [
    { name: "Notions et concepts", cards: 95 },
    { name: "Chronologies structurantes", cards: 110 },
    { name: "Organisations et gouvernance", cards: 70 },
    { name: "Espaces, ressources, énergie", cards: 75 },
    { name: "Ordres de grandeur", cards: 40 },
  ],
  demo: true,
  publishedAt: "2026-07-01",
};
