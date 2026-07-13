import type { Deck } from "../types";

export const deck: Deck = {
  slug: "fdd-fondamentaux",
  title: "Financial Due Diligence — Fondamentaux",
  categorySlug: "transaction-services",
  level: "Stage / Junior",
  shortDescription:
    "EBITDA ajusté, BFR normatif, dette nette, bridge equity value : le socle conceptuel des missions de Transaction Services.",
  description: [
    "La Financial Due Diligence a son propre langage : Quality of Earnings, ajustements d'EBITDA, normalisation du BFR, items de dette nette, mécanismes de locked box et de completion accounts. Ce deck structure ce corpus en cartes précises, du concept à l'application.",
    "Rédigé pour les candidats aux stages et juniors en TS, il couvre ce qu'on attend de vous en entretien comme dans les premières semaines de mission : comprendre pourquoi on ajuste, quoi ajuster, et comment cela se traduit dans le prix.",
  ],
  objectives: [
    "Comprendre la logique d'une mission de FDD et ses livrables",
    "Identifier et justifier les ajustements d'EBITDA classiques (QoE)",
    "Construire un BFR normatif et analyser sa saisonnalité",
    "Maîtriser les items de dette nette et le bridge EV → equity value",
    "Distinguer locked box et completion accounts",
  ],
  audience: [
    "Candidats aux stages et CDI en Transaction Services / FDD",
    "Auditeurs souhaitant évoluer vers le TS",
    "Étudiants en master finance ou CCA",
  ],
  topics: [
    "Périmètre et déroulé d'une mission de FDD",
    "Quality of Earnings : ajustements d'EBITDA",
    "BFR normatif et saisonnalité",
    "Dette nette et debt-like items",
    "Mécanismes de prix : locked box vs completion accounts",
  ],
  cardCount: 430,
  priceCents: 4400,
  sampleCards: [
    {
      front: "Citez quatre ajustements d'EBITDA classiques dans une analyse Quality of Earnings.",
      back: "1) Éléments non récurrents (litiges, coûts de restructuration, honoraires exceptionnels). 2) Rémunération des dirigeants au-delà du marché (management fees d'un groupe familial). 3) Effets de périmètre (pro forma des acquisitions/cessions). 4) Normalisations comptables (changements de méthode, cut-off). Chaque ajustement doit être documenté et justifié.",
      tag: "Quality of Earnings",
    },
    {
      front: "Pourquoi calcule-t-on un BFR « normatif » plutôt que le BFR à la date de closing ?",
      back: "Le BFR fluctue avec la saisonnalité : un closing en point bas avantagerait mécaniquement l'acheteur (ou inversement). Le BFR normatif — souvent une moyenne 12 mois ajustée — sert de référence : l'écart entre BFR livré et BFR normatif ajuste le prix, neutralisant l'effet de saisonnalité.",
      tag: "BFR",
    },
    {
      front: "Locked box vs completion accounts : quelle différence fondamentale ?",
      back: "Locked box : prix fixé sur un bilan de référence antérieur au closing ; pas d'ajustement post-closing, mais protection contre les leakages entre la date de référence et le closing. Completion accounts : prix ajusté après closing sur la base des comptes effectifs (dette nette et BFR réels). La locked box donne de la certitude ; les completion accounts, de l'exactitude.",
      tag: "Mécanismes de prix",
    },
  ],
  structure: [
    { name: "La mission de FDD : cadre et livrables", cards: 60 },
    { name: "Quality of Earnings — EBITDA ajusté", cards: 120 },
    { name: "BFR normatif", cards: 80 },
    { name: "Dette nette et debt-like items", cards: 90 },
    { name: "Mécanismes de prix et SPA", cards: 80 },
  ],
  demo: true,
  publishedAt: "2026-07-10",
};
