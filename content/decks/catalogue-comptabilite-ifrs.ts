import type { Deck } from "../types";

/** Catalogue réel — Comptabilité & IFRS (analyse des .apkg du 19/07/2026). */
export const decks: Deck[] = [
  {
    slug: "accounting-pcg-anc-2014-03-v2026",
    title: "Plan comptable général 2026 — 837 comptes",
    categorySlug: "comptabilite-ifrs",
    subcategory: "PCG",
    shortDescription:
      "Le plan comptable général (règlement ANC 2014-03, version 2026) en 837 cartes : numéro → intitulé, classe par classe.",
    description: [
      "Connaître ses numéros de comptes sans hésiter est un gain de temps permanent, en examen comme en cabinet. Ce deck couvre le PCG dans sa version 2026 : 837 cartes couvrant les classes 1 à 8, du compte « 10 Capital et réserves » aux subdivisions fines.",
      "La numérotation est travaillée dans les deux sens (numéro → intitulé), avec la hiérarchie des classes pour structurer la mémorisation.",
    ],
    objectives: [
      "Mémoriser la numérotation du PCG classe par classe",
      "Passer des écritures sans chercher ses comptes",
      "Gagner un temps précieux au DCG, au DSCG et en cabinet",
    ],
    audience: [
      "Étudiants en DCG, DSCG, BTS CG et BUT GEA",
      "Collaborateurs comptables et alternants en cabinet",
    ],
    topics: ["Classes 1 à 8 du PCG", "Comptes et subdivisions", "Règlement ANC 2014-03 (v. 2026)"],
    cardLanguages: ["fr"],
    cardCount: 837,
    priceCents: 1490,
    sampleCards: [
      { front: "CLASSE 1 : … ?", back: "Comptes de capitaux.", tag: "Classes" },
      { front: "Compte 10 ?", back: "Capital et réserves.", tag: "Classe 1" },
      { front: "Compte 1011 ?", back: "Capital souscrit — non appelé.", tag: "Classe 1" },
    ],
    structure: [{ name: "PCG — classes 1 à 8", cards: 837 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "referentiel-ifrs-cncc",
    title: "Référentiel IFRS — L'objectif de chaque norme (42 cartes)",
    categorySlug: "comptabilite-ifrs",
    subcategory: "IFRS",
    shortDescription:
      "42 cartes pour connaître l'objectif de chaque norme IAS/IFRS — le réflexe de base de tout professionnel du chiffre.",
    description: [
      "Savoir immédiatement ce que couvre IAS 1, IAS 7 ou IFRS 15 est le socle de toute pratique des normes internationales. Ce deck compact associe chaque norme du référentiel à son objectif, en français.",
      "Un format court, à maîtriser en quelques jours, qui rend tous les autres apprentissages IFRS plus faciles.",
    ],
    objectives: [
      "Associer chaque norme IAS/IFRS à son objet",
      "Structurer sa vision d'ensemble du référentiel",
      "Répondre sans hésiter en entretien ou en examen",
    ],
    audience: ["Étudiants DSCG / master CCA", "Auditeurs et consolideurs juniors"],
    topics: ["Normes IAS", "Normes IFRS", "Objectifs et champs d'application"],
    cardLanguages: ["fr"],
    cardCount: 42,
    priceCents: 990,
    sampleCards: [
      {
        front: "Quel est l'objectif d'IAS 1 ?",
        back: "Prescrire la base de présentation des états financiers à usage général, afin qu'ils soient comparables dans le temps et entre entités.",
        tag: "IAS 1",
      },
      {
        front: "Quel est l'objectif d'IAS 7 ?",
        back: "Imposer la fourniture d'une information sur l'historique des évolutions de la trésorerie et des équivalents de trésorerie de l'entité.",
        tag: "IAS 7",
      },
    ],
    structure: [{ name: "Référentiel IAS/IFRS", cards: 42 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "ifrs9-financial-instruments",
    title: "IFRS 9 Instruments financiers — 691 cartes",
    categorySlug: "comptabilite-ifrs",
    subcategory: "IFRS 9",
    shortDescription:
      "691 cartes à trous en anglais sur IFRS 9 : classement, dépréciation (ECL), risque de crédit — page-référencées.",
    description: [
      "IFRS 9 est l'une des normes les plus techniques du référentiel. Ce deck la travaille en profondeur : 691 cartes à trous (cloze) en anglais couvrant le classement des instruments, le modèle de dépréciation par pertes de crédit attendues (ECL) et le suivi du risque de crédit.",
      "Chaque carte est référencée à sa page source pour retrouver le contexte. Un outil de niveau professionnel, pour les équipes normes, l'audit et la banque.",
    ],
    objectives: [
      "Maîtriser le vocabulaire et les mécanismes d'IFRS 9 en anglais",
      "Ancrer le modèle ECL et les notions de risque de crédit",
      "Préparer un poste ou une mission exposé aux instruments financiers",
    ],
    audience: [
      "Professionnels banque / audit / consolidation",
      "Étudiants en master finance ou CCA visant ces métiers",
    ],
    topics: ["Classification et évaluation", "Expected credit losses", "Risque de crédit"],
    cardLanguages: ["en"],
    cardCount: 691,
    priceCents: 4490,
    sampleCards: [
      {
        front: "When assessing significant increases in credit risk, an entity compares the ___ at the reporting date with the risk at initial recognition.",
        back: "risk of a default occurring",
        tag: "Credit risk",
      },
      {
        front: "The simplified approach for trade receivables without a significant financing component requires the loss allowance to always equal ___.",
        back: "lifetime expected credit losses",
        tag: "ECL",
      },
    ],
    structure: [{ name: "IFRS 9 — cloze cards (page-référencées)", cards: 691 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "ifrs9-hedge-accounting-in-practice",
    title: "IFRS 9 Hedge accounting — 409 cartes",
    categorySlug: "comptabilite-ifrs",
    subcategory: "IFRS 9",
    shortDescription:
      "409 cartes en anglais sur la comptabilité de couverture IFRS 9 : désignations, cash flow hedge, cost of hedging.",
    description: [
      "La comptabilité de couverture est un domaine d'expertise à part entière. Ce deck en couvre la pratique : désignations spot/forward, mécanique des cash flow hedges, réserve de coût de couverture, illustrations chiffrées.",
      "409 cartes en anglais, page-référencées, pour les professionnels confrontés aux dérivés et à leur traitement comptable.",
    ],
    objectives: [
      "Maîtriser les types de désignation et leurs effets en résultat",
      "Comprendre la mécanique des réserves de couverture",
      "Traiter les cas pratiques classiques (swaps, forwards, options)",
    ],
    audience: ["Équipes normes, trésorerie et consolidation", "Auditeurs sur des groupes couverts"],
    topics: ["Désignations de couverture", "Cash flow hedge", "Cost of hedging"],
    cardLanguages: ["en"],
    cardCount: 409,
    priceCents: 3990,
    sampleCards: [
      {
        front: "In a cash flow hedge of inventory purchases, where do accumulated intrinsic value and time value amounts go at recognition?",
        back: "Both the intrinsic value gains/losses in the cash flow hedge reserve and the time value changes in the cost of hedging reserve are transferred directly to the inventory carrying amount.",
        tag: "Cash flow hedge",
      },
      {
        front: "Pay-fixed swap (2%) + debt at LIBOR + 3% credit spread: what is the net overall cash flow?",
        back: "Equivalent to paying 5% fixed interest, eliminating the variability from six-month LIBOR.",
        tag: "Swaps",
      },
    ],
    structure: [{ name: "Hedge accounting in practice", cards: 409 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "ratios-financiers-hec-montreal",
    title: "Ratios financiers — 28 ratios clés",
    categorySlug: "comptabilite-ifrs",
    subcategory: "Analyse financière",
    shortDescription:
      "28 cartes pour connaître par cœur les ratios d'analyse financière : rentabilité, marge, structure, liquidité.",
    description: [
      "Les ratios financiers sont le langage de base de l'analyse d'états financiers. Ce deck compact associe chaque ratio à sa formule exacte : rendement de l'actif, marge nette, ratios de structure et de liquidité.",
      "Un essentiel à maîtriser en quelques jours, utile de l'entretien de stage à la pratique quotidienne.",
    ],
    objectives: [
      "Restituer les formules des ratios sans hésiter",
      "Interpréter rapidement des états financiers",
      "Sécuriser les questions de base en entretien finance",
    ],
    audience: ["Étudiants en finance, comptabilité, école de commerce", "Candidats aux entretiens finance"],
    topics: ["Rentabilité", "Marges", "Structure et liquidité"],
    cardLanguages: ["fr"],
    cardCount: 28,
    priceCents: 790,
    sampleCards: [
      { front: "Rendement de l'actif ?", back: "Bénéfice net / Total de l'actif.", tag: "Rentabilité" },
      { front: "Ratio de marge bénéficiaire nette ?", back: "Bénéfice net / Ventes.", tag: "Marges" },
    ],
    structure: [{ name: "Ratios d'analyse financière", cards: 28 }],
    publishedAt: "2026-07-19",
  },
];
