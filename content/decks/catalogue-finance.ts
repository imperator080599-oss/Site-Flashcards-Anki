import type { Deck } from "../types";

/** Catalogue réel — Investment Banking & Transaction Services. */
export const decks: Deck[] = [
  {
    slug: "investment-banking-valuation-lbo-ma-ipo",
    title: "Investment Banking — Valuation, LBO, M&A, IPO (2 330 cartes)",
    categorySlug: "investment-banking",
    level: "Stage / Analyst",
    shortDescription:
      "2 330 cartes en anglais couvrant la boîte à outils complète de l'analyste : comps, DCF, mécanique LBO pas à pas, process M&A et IPO.",
    description: [
      "Le deck de référence du catalogue pour la banque d'affaires : 2 330 cartes en anglais qui déroulent méthodiquement la valorisation (trading comps, transactions précédentes, DCF), la construction d'un modèle LBO étape par étape, les process M&A côté vente et achat, et les IPO.",
      "Les cartes sont page-référencées et suivent une progression pédagogique : idéal pour préparer les entretiens techniques puis garder le corpus frais pendant le stage.",
    ],
    objectives: [
      "Maîtriser les trois méthodes de valorisation et leurs pièges",
      "Dérouler la construction d'un LBO (5 étapes) sans hésiter",
      "Connaître le déroulé des process M&A et IPO",
      "Répondre vite et juste en entretien technique",
    ],
    audience: [
      "Candidats aux stages et graduate programs en M&A / leveraged finance",
      "Analystes en poste souhaitant consolider leur technique",
    ],
    topics: ["Comparable companies & precedent transactions", "DCF", "LBO analysis", "M&A sell-side / buy-side", "IPO"],
    cardCount: 2330,
    priceCents: 7990,
    sampleCards: [
      {
        front: "LBO analysis typically produces valuations at the ___ of the comprehensive analysis range due to leverage constraints.",
        back: "lower end",
        tag: "LBO",
      },
      {
        front: "The LBO analysis framework follows five steps — which ones?",
        back: "(I) Locate/Analyze Info, (II) Build Pre-LBO Model, (III) Input Transaction Structure, (IV) Complete Post-LBO Model, (V) Perform LBO Analysis.",
        tag: "LBO",
      },
      {
        front: "What do transaction summary page \"toggle cells\" allow bankers to do?",
        back: "Switch between various financing structures and operating scenarios.",
        tag: "Modeling",
      },
    ],
    structure: [{ name: "Valuation · LBO · M&A · IPO (page-référencé)", cards: 2330 }],
    featured: true,
    publishedAt: "2026-07-19",
  },
  {
    slug: "fdd-interview-preparation-pack",
    title: "FDD Interview Pack — 284 cartes",
    categorySlug: "transaction-services",
    level: "Stage / Junior",
    shortDescription:
      "284 cartes en anglais pour les entretiens en Financial Due Diligence : net debt, trapped cash, debt-like items, NWC — avec QCM et cartes à trous.",
    description: [
      "Un pack d'entraînement dédié aux entretiens en Transaction Services : 284 cartes en anglais organisées en trois formats (question-réponse, QCM, cartes à trous) couvrant les concepts que les recruteurs testent réellement — net debt et debt-like items, trapped cash, traitement du BFR, equity bridge.",
      "Les réponses sont détaillées et justifiées, comme on attend de vous en entretien.",
    ],
    objectives: [
      "Maîtriser le raisonnement net debt / debt-like / NWC",
      "S'entraîner sous trois formats complémentaires (Q/R, QCM, cloze)",
      "Arriver en entretien FDD avec des réponses structurées",
    ],
    audience: ["Candidats aux stages et CDI en TS / FDD", "Auditeurs préparant un move vers le TS"],
    topics: ["Net debt & debt-like items", "Trapped cash", "Net working capital", "Equity bridge"],
    cardCount: 284,
    priceCents: 4990,
    sampleCards: [
      {
        front: "In FDD, what does \"Reported Net Debt\" typically consist of?",
        back: "External financing (loans) minus cash held on the balance sheet.",
        tag: "Net debt",
      },
      {
        front: "What are two common examples of \"trapped cash\" deducted from reported cash?",
        back: "Cash held in overseas entities that cannot be repatriated (or only after withholding tax) — cash held in escrow or for regulatory requirements.",
        tag: "Trapped cash",
      },
      {
        front: "Why are rental deposits excluded from cash and adjusted into NWC?",
        back: "The amount is not available to pay down debt and would need to be replaced by a new deposit if a lease expired.",
        tag: "NWC",
      },
    ],
    structure: [
      { name: "Basic flashcards", cards: 150 },
      { name: "MCQ flashcards", cards: 80 },
      { name: "Cloze flashcards", cards: 54 },
    ],
    featured: true,
    publishedAt: "2026-07-19",
  },
  {
    slug: "fdd-tas",
    title: "Transaction Services — Lexique et concepts (51 cartes)",
    categorySlug: "transaction-services",
    level: "Découverte / Junior",
    shortDescription:
      "51 cartes en français sur le vocabulaire du Transaction Services : carve-out, mandats, restructuration, mécanismes de cession.",
    description: [
      "Le vocabulaire du TS en français : carve-out, mandat ad hoc et conciliation, mécanismes de cession et de restructuration. 51 cartes précises pour parler le langage du métier dès le premier jour.",
      "Un complément idéal du FDD Interview Pack pour les candidats francophones.",
    ],
    objectives: [
      "Maîtriser le lexique français du Transaction Services",
      "Comprendre les mécanismes de cession et de restructuration",
      "Se préparer aux entretiens en cabinet français",
    ],
    audience: ["Candidats aux stages TS/FDD en France", "Étudiants en master finance ou audit"],
    topics: ["Carve-out et détourage", "Procédures amiables", "Vocabulaire des deals"],
    cardCount: 51,
    priceCents: 1490,
    sampleCards: [
      {
        front: "Qu'est-ce qu'un carve-out ?",
        back: "Isoler une partie de l'activité d'une société (considérée comme non stratégique ou peu rentable) afin de l'intégrer à une nouvelle structure.",
        tag: "Deals",
      },
      {
        front: "Mandat ad hoc et conciliation : quel objectif commun ?",
        back: "Aider, de manière confidentielle, la société dans la négociation de ses dettes et la modulation des échéanciers de paiement prévus avec les créanciers.",
        tag: "Restructuration",
      },
    ],
    structure: [{ name: "Lexique et concepts TS", cards: 51 }],
    publishedAt: "2026-07-19",
  },
];
