import type { Deck } from "../types";

export const deck: Deck = {
  slug: "dcg-ue9-comptabilite",
  title: "DCG UE9 — Comptabilité",
  categorySlug: "dcg",
  subcategory: "UE9",
  shortDescription:
    "Le référentiel de l'UE9 en cartes : principes comptables, écritures courantes, TVA et travaux d'inventaire.",
  description: [
    "L'UE9 « Comptabilité » pose les fondations de tout le cursus DCG. Ce deck transforme le référentiel officiel en questions-réponses : principes et cadre conceptuel, mécanique des écritures, TVA, opérations courantes et travaux d'inventaire.",
    "Les écritures sont présentées en situation : la carte pose une opération concrète, la réponse détaille l'écriture attendue, comptes et sens compris. C'est l'entraînement le plus proche de ce qui est exigé le jour de l'épreuve.",
  ],
  objectives: [
    "Maîtriser le cadre conceptuel et les principes comptables français",
    "Passer sans hésiter les écritures des opérations courantes",
    "Appliquer les mécanismes de TVA (collectée, déductible, autoliquidation)",
    "Réussir les travaux d'inventaire : amortissements, dépréciations, provisions, régularisations",
  ],
  audience: [
    "Candidats au DCG (UE9), en formation initiale ou à distance",
    "Étudiants en BTS CG ou BUT GEA souhaitant consolider leurs bases",
    "Professionnels en reconversion vers les métiers comptables",
  ],
  topics: [
    "Principes comptables et cadre réglementaire (PCG)",
    "Écritures courantes : achats, ventes, trésorerie, paie",
    "TVA : mécanismes et déclaration",
    "Immobilisations et amortissements",
    "Travaux d'inventaire et clôture",
  ],
  cardLanguages: ["fr"],
  cardCount: 620,
  priceCents: 2400,
  sampleCards: [
    {
      front:
        "Achat de marchandises 1 000 € HT, TVA 20 %, à crédit. Quelle écriture ?",
      back: "Débit 607 « Achats de marchandises » : 1 000 — Débit 44566 « TVA déductible sur ABS » : 200 — Crédit 401 « Fournisseurs » : 1 200.",
      tag: "Opérations courantes",
    },
    {
      front: "Énoncez le principe de prudence (PCG art. 121-4).",
      back: "La comptabilité ne doit pas transférer sur des exercices futurs des incertitudes présentes : les pertes probables sont comptabilisées dès qu'elles sont connues (provisions, dépréciations), tandis que les profits ne sont enregistrés que lorsqu'ils sont réalisés.",
      tag: "Principes",
    },
    {
      front:
        "Machine acquise 24 000 € HT le 1er avril, amortissement linéaire sur 5 ans. Dotation de l'exercice (clôture 31/12) ?",
      back: "Base 24 000 × 20 % = 4 800 €/an, prorata temporis 9 mois : 4 800 × 9/12 = 3 600 €. Écriture : débit 68112 / crédit 28154 pour 3 600 €.",
      tag: "Inventaire",
    },
  ],
  structure: [
    { name: "Cadre conceptuel et principes", cards: 80 },
    { name: "Mécanique comptable et documents", cards: 70 },
    { name: "Opérations courantes", cards: 180 },
    { name: "TVA", cards: 90 },
    { name: "Immobilisations et amortissements", cards: 100 },
    { name: "Travaux d'inventaire", cards: 100 },
  ],
  featured: true,
  demo: true,
  draft: true,
  publishedAt: "2026-07-05",
};
