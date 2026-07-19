import type { Deck } from "../types";

/** Catalogue réel — Excel. */
export const decks: Deck[] = [
  {
    slug: "excel-keyboard-shortcuts",
    title: "Excel — 192 raccourcis clavier",
    categorySlug: "excel",
    level: "Tous niveaux",
    shortDescription:
      "192 raccourcis Excel (Windows) organisés par usage : navigation, ruban, mise en forme, collage spécial — jusqu'au réflexe.",
    description: [
      "Le « zéro souris » s'apprend : 192 cartes couvrant les raccourcis Excel pour Windows, structurées par familles — raccourcis fréquents, navigation dans le ruban, déplacement dans les cellules, mise en forme, boîte de dialogue Collage spécial.",
      "Cartes en anglais (les libellés officiels des commandes), réponses immédiates : le format parfait pour transformer chaque geste en réflexe.",
    ],
    objectives: [
      "Travailler dans Excel sans toucher la souris",
      "Mémoriser les raccourcis par familles d'usage",
      "Gagner une vitesse visible dès les premières semaines",
    ],
    audience: ["Étudiants visant la finance, l'audit ou le conseil", "Tout utilisateur quotidien d'Excel"],
    topics: ["Raccourcis fréquents", "Ruban et navigation", "Mise en forme", "Collage spécial"],
    cardCount: 192,
    priceCents: 990,
    sampleCards: [
      { front: "Close a workbook.", back: "Ctrl+W", tag: "Fréquents" },
      { front: "Go to the Home tab.", back: "Alt+H", tag: "Ruban" },
      { front: "Open a workbook.", back: "Ctrl+O", tag: "Fréquents" },
    ],
    structure: [
      { name: "Frequently used shortcuts", cards: 50 },
      { name: "Ribbon & navigation", cards: 80 },
      { name: "Formatting & Paste Special", cards: 62 },
    ],
    publishedAt: "2026-07-19",
  },
  {
    slug: "excel-functions-alphabetical",
    title: "Excel — Les 515 fonctions",
    categorySlug: "excel",
    level: "Intermédiaire à avancé",
    shortDescription:
      "Les 515 fonctions d'Excel en cartes : nom → catégorie et rôle. La culture générale complète du tableur.",
    description: [
      "Une couverture exhaustive : chaque fonction d'Excel (ABS, ACCRINT, ACOS… jusqu'à Z) associée à sa catégorie et à ce qu'elle fait. 515 cartes en anglais, la langue de la documentation.",
      "Connaître l'existence d'une fonction, c'est déjà savoir résoudre le problème : ce deck construit ce répertoire mental que possèdent les utilisateurs avancés.",
    ],
    objectives: [
      "Connaître le rôle de chaque fonction Excel",
      "Identifier immédiatement la fonction adaptée à un problème",
      "Réviser par catégories (financier, texte, recherche, maths…)",
    ],
    audience: ["Analystes, contrôleurs de gestion, comptables", "Candidats aux certifications Excel"],
    topics: ["Fonctions financières", "Recherche et référence", "Texte, dates, logique", "Maths et statistiques"],
    cardCount: 515,
    priceCents: 1290,
    sampleCards: [
      { front: "ABS", back: "Math and trigonometry: returns the absolute value of a number.", tag: "Maths" },
      { front: "ACCRINT", back: "Financial: returns the accrued interest for a security that pays periodic interest.", tag: "Finance" },
    ],
    structure: [{ name: "Fonctions A → Z", cards: 515 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "excel-mos-mo200",
    title: "Excel certification MO-200 — 881 questions",
    categorySlug: "excel",
    subcategory: "Certification",
    level: "Associate",
    shortDescription:
      "881 questions d'entraînement pour la certification Excel Associate (MO-200) : QCM corrigés et expliqués, page-référencés.",
    description: [
      "Une préparation intensive à la certification Microsoft Office Specialist Excel Associate (MO-200) : 881 cartes en anglais au format QCM avec la bonne réponse et son explication — mise en forme conditionnelle, graphiques, sparklines, gestion des données.",
      "Le format question → réponse expliquée permet de comprendre la logique de l'examen, pas seulement de mémoriser.",
    ],
    objectives: [
      "Couvrir le programme de l'examen MO-200",
      "S'entraîner sur des QCM corrigés et expliqués",
      "Identifier ses lacunes avant de réserver l'examen",
    ],
    audience: ["Candidats à la certification MO-200", "Étudiants valorisant Excel sur leur CV"],
    topics: ["Mise en forme conditionnelle", "Graphiques et sparklines", "Gestion de données", "Formules"],
    cardCount: 881,
    priceCents: 1990,
    sampleCards: [
      {
        front: "Which conditional formatting rule type applies formatting to cells containing the highest or lowest values in a range?",
        back: "Top/Bottom rules.",
        tag: "Formatting",
      },
      {
        front: "What two elements does the Create Sparklines dialog box require?",
        back: "The Data Range (source data) and the Location Range (where to place the sparkline).",
        tag: "Charts",
      },
    ],
    structure: [{ name: "QCM corrigés MO-200 (page-référencés)", cards: 881 }],
    featured: true,
    publishedAt: "2026-07-19",
  },
  {
    slug: "excel-mos-expert-mo201",
    title: "Excel Expert MO-201 — 831 questions",
    categorySlug: "excel",
    subcategory: "Certification",
    level: "Expert",
    shortDescription:
      "831 questions pour la certification Excel Expert (MO-201) : macros, fonctions avancées, analyse de données — corrigées et expliquées.",
    description: [
      "Le niveau Expert de la certification Microsoft : 831 cartes en anglais couvrant les macros et leur enregistrement, l'éditeur VBA, les fonctions avancées et l'analyse de données — chaque question corrigée et expliquée, page-référencée.",
      "La suite logique du MO-200 pour faire d'Excel un vrai différenciateur professionnel.",
    ],
    objectives: [
      "Couvrir le programme de l'examen MO-201",
      "Maîtriser macros, VBA de base et fonctions avancées",
      "Se présenter à l'examen avec une préparation systématique",
    ],
    audience: ["Candidats à la certification MO-201", "Utilisateurs avancés d'Excel"],
    topics: ["Macros et VBA", "Fonctions avancées", "Analyse de données", "Modèles et audits de formules"],
    cardCount: 831,
    priceCents: 1990,
    sampleCards: [
      {
        front: "What visual indicator on the Excel status bar shows that a macro recording is in progress?",
        back: "The Macro Recording button (a square icon).",
        tag: "Macros",
      },
      {
        front: "Which dialog box allows you to change a macro's shortcut key or description after it has been recorded?",
        back: "The Macro Options dialog box.",
        tag: "Macros",
      },
    ],
    structure: [{ name: "QCM corrigés MO-201 (page-référencés)", cards: 831 }],
    publishedAt: "2026-07-19",
  },
];
