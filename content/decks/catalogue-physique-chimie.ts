import type { Deck } from "../types";

/** Catalogue réel — Physique-Chimie (sources publiques). */
export const decks: Deck[] = [
  {
    slug: "iupac-periodic-table",
    title: "Tableau périodique IUPAC — 118 éléments",
    categorySlug: "physique-chimie",
    subcategory: "Chimie",
    shortDescription:
      "Les 118 éléments chimiques : numéro, symbole, nom et masse atomique, d'après les données IUPAC/CIAAW 2024.",
    description: [
      "Le tableau périodique complet en cartes, construit sur les données officielles IUPAC/CIAAW (Abridged Standard Atomic Weights 2024) : numéro atomique, symbole, nom et masse atomique de chaque élément.",
      "Pour les étudiants en sciences, les enseignants — et tous ceux qui veulent enfin retenir plus loin que l'oxygène.",
    ],
    objectives: [
      "Associer numéro, symbole et nom de chaque élément",
      "Mémoriser les masses atomiques usuelles",
    ],
    audience: ["Lycéens et étudiants en chimie", "Enseignants et curieux"],
    topics: ["118 éléments", "Données IUPAC/CIAAW 2024"],
    cardLanguages: ["fr"],
    cardCount: 118,
    priceCents: 690,
    sampleCards: [
      {
        front: "Élément n° 1 — symbole et masse atomique ?",
        back: "H, hydrogène — 1,0080 ± 0,0002 (IUPAC/CIAAW 2024).",
        tag: "Éléments",
      },
      {
        front: "Élément n° 3 — symbole et masse atomique ?",
        back: "Li, lithium — 6,94 ± 0,06 (IUPAC/CIAAW 2024).",
        tag: "Éléments",
      },
    ],
    structure: [{ name: "Éléments 1 → 118", cards: 118 }],
    publishedAt: "2026-07-19",
  },
];
