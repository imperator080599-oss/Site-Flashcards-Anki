import type { Deck } from "../types";

/**
 * Catalogue réel — DSCG. Comptes de cartes et exemples extraits des
 * fichiers .apkg livrés (analyse du 19/07/2026).
 */
export const decks: Deck[] = [
  {
    slug: "dscg-ue2-finance-manuel-3e-edition",
    title: "DSCG UE2 Finance — Le programme en 3 977 cartes",
    categorySlug: "dscg",
    subcategory: "UE2",
    shortDescription:
      "3 977 questions-réponses en français couvrant tout le programme de finance du DSCG : marchés, valorisation, structure financière, ingénierie.",
    description: [
      "Le deck le plus complet du catalogue : 3 977 cartes de question-réponse balayant l'intégralité du programme de l'UE2, des mécanismes de marché (marché primaire, adjudication, capitalisation boursière) jusqu'à l'ingénierie financière.",
      "Chaque carte est référencée à sa page de cours d'origine, ce qui permet de retrouver le contexte d'une notion en un instant. Un outil de fond pour tenir la distance jusqu'à l'épreuve.",
    ],
    objectives: [
      "Couvrir l'intégralité du programme de finance de l'UE2",
      "Restituer définitions et mécanismes en formulation d'examen",
      "Réviser par répétition espacée sur toute l'année",
    ],
    audience: [
      "Candidats au DSCG (UE2 Finance)",
      "Étudiants en master CCA ou finance",
    ],
    topics: [
      "Marchés financiers et instruments",
      "Valorisation et politique financière",
      "Structure de financement et ingénierie",
    ],
    cardLanguages: ["fr"],
    cardCount: 3977,
    priceCents: 4990,
    sampleCards: [
      {
        front: "Qu'est-ce qu'un marché primaire en finance ?",
        back: "C'est un lieu où les émetteurs d'actifs financiers (entreprises, États) proposent leurs titres à des investisseurs en échange de capitaux.",
        tag: "Marchés",
      },
      {
        front: "Quel terme désigne spécifiquement l'émission d'obligations par un État sur le marché primaire ?",
        back: "L'adjudication.",
        tag: "Marchés",
      },
      {
        front: "Comment détermine-t-on la capitalisation boursière d'une société cotée ?",
        back: "Elle se calcule en multipliant le nombre d'actions en circulation (flottant) par leur valeur boursière.",
        tag: "Valorisation",
      },
    ],
    structure: [{ name: "Programme UE2 Finance (cartes page-référencées)", cards: 3977 }],
    featured: true,
    publishedAt: "2026-07-19",
  },
  {
    slug: "dscg-ue4-comptabilite-audit-132-flashcards",
    title: "DSCG UE4 Comptabilité et audit — 128 cartes de synthèse",
    categorySlug: "dscg",
    subcategory: "UE4",
    shortDescription:
      "L'essentiel de l'UE4 en 128 cartes de synthèse : IFRS, consolidation, fusions et audit — pour réviser vite et bien.",
    description: [
      "Un format volontairement resserré : 128 cartes de synthèse qui condensent les notions structurantes de l'UE4 — définitions IFRS (contrats de location, immeubles de placement, états financiers), mécanismes de consolidation et repères d'audit.",
      "Idéal en complément d'une préparation complète, pour des révisions rapides dans les semaines précédant l'épreuve.",
    ],
    objectives: [
      "Réviser les définitions clés de l'UE4 en un temps limité",
      "Ancrer les notions IFRS incontournables",
      "Faire des passages de révision rapides avant l'épreuve",
    ],
    audience: ["Candidats au DSCG (UE4)", "Étudiants en master CCA"],
    topics: ["Normes IFRS", "Consolidation", "Audit"],
    cardLanguages: ["fr"],
    cardCount: 128,
    priceCents: 1490,
    sampleCards: [
      {
        front: "Contrat de location (IFRS 16) : définition et traitement côté locataire ?",
        back: "Contrat qui donne un droit d'utilisation sur un actif pendant une période déterminée en échange d'une redevance. Pour le locataire : pas de distinction entre locations simples et financières.",
        tag: "IFRS",
      },
      {
        front: "Quels sont les états financiers en normes IFRS ?",
        back: "État de la situation financière (bilan), état du résultat global, notes explicatives (annexes), état de variation des capitaux propres, tableau de flux de trésorerie.",
        tag: "IFRS",
      },
      {
        front: "Immeuble de placement : définition ?",
        back: "Immeuble permettant de retirer des loyers ou de valoriser le capital. S'il est utilisé pour l'activité de la société ou destiné à être vendu, il est comptabilisé en simple immobilisation.",
        tag: "IFRS",
      },
    ],
    structure: [{ name: "Synthèse UE4 — IFRS, consolidation, audit", cards: 128 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "dscg-ue6-anglais-des-affaires-manuel",
    title: "DSCG UE6 Anglais des affaires — 3 435 cartes",
    categorySlug: "dscg",
    subcategory: "UE6",
    shortDescription:
      "3 435 questions-réponses en anglais sur les thèmes business de l'UE6 : stratégie, marketing, innovation, management.",
    description: [
      "Un corpus massif de 3 435 cartes en anglais couvrant les thèmes économiques et managériaux de l'épreuve d'anglais des affaires : innovation, marketing digital, stratégie d'entreprise, organisations.",
      "Les cartes sont référencées par page de cours et rédigées intégralement en anglais : vous travaillez la langue et le fond en même temps, comme le demande l'épreuve.",
    ],
    objectives: [
      "Assimiler le vocabulaire business de l'épreuve en contexte",
      "Réviser les concepts de management et de stratégie en anglais",
      "Préparer l'écrit et l'oral de l'UE6 sur la durée",
    ],
    audience: ["Candidats au DSCG (UE6)", "Étudiants souhaitant un anglais business solide"],
    topics: ["Business & strategy", "Marketing et digital", "Innovation et organisations"],
    cardLanguages: ["en"],
    cardCount: 3435,
    priceCents: 2990,
    sampleCards: [
      {
        front: "What occurs when \"customers speak for the product themselves and advertise it to their peers\"?",
        back: "Social acceptance and enrolment.",
        tag: "Marketing",
      },
      {
        front: "Which type of social media influencer typically delivers a better return on investment (ROI)?",
        back: "Micro-influencers (under 100k followers).",
        tag: "Digital",
      },
      {
        front: "What example illustrates a US$1 trillion company built mostly on incremental innovations?",
        back: "Apple — mostly revamped versions rather than new product categories (2018).",
        tag: "Innovation",
      },
    ],
    structure: [{ name: "Business English — cartes page-référencées", cards: 3435 }],
    publishedAt: "2026-07-19",
  },
];
