import type { Deck } from "../types";

export const deck: Deck = {
  slug: "dscg-ue4-comptabilite-audit",
  title: "DSCG UE4 — Comptabilité et audit",
  categorySlug: "dscg",
  subcategory: "UE4",
  shortDescription:
    "Consolidation, fusions, normes IFRS et démarche d'audit : les points techniques de l'UE4 en cartes de niveau master.",
  description: [
    "L'UE4 est réputée l'épreuve la plus technique du DSCG. Ce deck en couvre les quatre piliers : opérations de restructuration (fusions, apports), consolidation des groupes, cadre IFRS et démarche d'audit légal.",
    "Les cartes alternent définitions normatives, mécanismes de retraitement et mini-cas chiffrés, pour que chaque notion soit à la fois comprise et mobilisable en situation d'examen.",
  ],
  objectives: [
    "Maîtriser les mécanismes de consolidation : périmètre, méthodes, retraitements",
    "Traiter les opérations de fusion et leurs valorisations",
    "Connaître les principales divergences PCG / IFRS",
    "Structurer une démarche d'audit et connaître les NEP incontournables",
  ],
  audience: [
    "Candidats au DSCG (UE4)",
    "Étudiants en master CCA",
    "Collaborateurs en cabinet préparant le diplôme en alternance",
  ],
  topics: [
    "Fusions et opérations assimilées",
    "Consolidation : périmètre, méthodes, retraitements, impôts différés",
    "Normes IFRS : cadre et principales normes",
    "Audit : cadre légal, démarche, NEP",
  ],
  cardCount: 540,
  priceCents: 3400,
  sampleCards: [
    {
      front:
        "Filiale détenue à 40 % avec contrôle conjoint contractuel (partenariat qualifié de coentreprise) : quelle méthode de consolidation en normes françaises (CRC 99-02) ?",
      back: "L'intégration proportionnelle : les comptes de l'entité sous contrôle conjoint sont repris à hauteur du pourcentage d'intérêt (40 %). À distinguer des IFRS, où IFRS 11 impose la mise en équivalence pour les coentreprises.",
      tag: "Consolidation",
    },
    {
      front:
        "Dans une fusion à l'endroit entre sociétés sous contrôle distinct, à quelle valeur les apports sont-ils transcrits ?",
      back: "À la valeur réelle. La transcription à la valeur comptable est réservée aux opérations impliquant des sociétés sous contrôle commun (ou aux fusions à l'envers), conformément au règlement ANC 2014-03.",
      tag: "Fusions",
    },
    {
      front: "Que définit la notion de « caractère significatif » en audit (NEP-320) ?",
      back: "Le seuil au-delà duquel une anomalie, seule ou cumulée, est susceptible d'influencer le jugement d'un utilisateur des comptes. Il guide la planification des travaux et l'évaluation des anomalies relevées ; il relève du jugement professionnel de l'auditeur.",
      tag: "Audit",
    },
  ],
  structure: [
    { name: "Fusions et opérations assimilées", cards: 110 },
    { name: "Consolidation", cards: 190 },
    { name: "Normes IFRS", cards: 120 },
    { name: "Audit et commissariat aux comptes", cards: 120 },
  ],
  demo: true,
  draft: true,
  publishedAt: "2026-07-05",
};
