import type { Deck } from "../types";

export const deck: Deck = {
  slug: "cfa-level-1-essentials",
  title: "CFA Level I — Formulas & Key Concepts",
  categorySlug: "cfa",
  subcategory: "Level I",
  shortDescription:
    "Les formules et définitions incontournables du Level I, en anglais, organisées par topic du curriculum.",
  description: [
    "Le Level I du CFA teste un volume considérable de définitions et de formules réparties sur dix topics. Ce deck isole ce qui doit être su par cœur : formules exactes, définitions officielles, distinctions conceptuelles fréquemment testées.",
    "Les cartes sont en anglais, dans la terminologie du curriculum. Elles sont conçues comme un complément de mémorisation à votre préparation principale (curriculum ou prep provider) — pas comme un substitut.",
  ],
  objectives: [
    "Mémoriser durablement les formules exigibles du Level I",
    "Maîtriser la terminologie officielle du curriculum",
    "Réviser chaque topic à intervalle optimal sur plusieurs mois",
    "Arriver à l'examen sans trous de mémoire sur les fondamentaux",
  ],
  audience: [
    "Candidats au CFA Level I",
    "Étudiants en finance préparant l'inscription",
    "Professionnels reprenant la préparation après une pause",
  ],
  topics: [
    "Quantitative Methods",
    "Economics",
    "Financial Statement Analysis",
    "Corporate Issuers",
    "Equity & Fixed Income",
    "Derivatives & Alternative Investments",
    "Portfolio Management & Ethics",
  ],
  cardCount: 900,
  priceCents: 3900,
  sampleCards: [
    {
      front: "Formula: price of a full (dirty) bond price vs. flat (clean) price?",
      back: "Full price = flat price + accrued interest, where accrued interest = coupon × (days since last coupon / days in period). The flat price is what is quoted; the full price is what is paid.",
      tag: "Fixed Income",
    },
    {
      front: "Define the Sharpe ratio and its main limitation.",
      back: "Sharpe ratio = (Rp − Rf) / σp — excess return per unit of total risk. Limitation: uses total risk (standard deviation), so it penalizes upside volatility and is less relevant for diversified portfolios where only systematic risk is priced; it can also be gamed by return smoothing.",
      tag: "Portfolio Management",
    },
    {
      front: "Under IFRS, when can inventory write-downs be reversed?",
      back: "Reversal is permitted (up to the amount of the original write-down) when the net realizable value recovers. Under US GAAP, reversals are prohibited. A classic IFRS vs. US GAAP test point.",
      tag: "FSA",
    },
  ],
  structure: [
    { name: "Quantitative Methods", cards: 120 },
    { name: "Economics", cards: 100 },
    { name: "Financial Statement Analysis", cards: 160 },
    { name: "Corporate Issuers", cards: 70 },
    { name: "Equity Investments", cards: 100 },
    { name: "Fixed Income", cards: 130 },
    { name: "Derivatives & Alternatives", cards: 90 },
    { name: "Portfolio Management & Ethics", cards: 130 },
  ],
  faq: [
    {
      question: "Ce deck couvre-t-il tout le curriculum ?",
      answer:
        "Non — il couvre les formules et concepts à mémoriser. La compréhension des readings et la pratique des questions restent indispensables : ce deck est un outil de rétention, pas un cours.",
    },
  ],
  demo: true,
  draft: true,
  publishedAt: "2026-07-12",
};
