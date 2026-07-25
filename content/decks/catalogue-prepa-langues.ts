import type { Deck } from "../types";

/** Catalogue réel — Prépa ECG & Langues. */
export const decks: Deck[] = [
  {
    slug: "ecs-hgg-siecle-des-exces-reperes",
    title: "HGG — 536 repères chronologiques (XIXe-XXe siècles)",
    categorySlug: "prepa-ecg",
    subcategory: "HGG",
    level: "1re et 2e année",
    shortDescription:
      "536 dates → événements couvrant les XIXe et XXe siècles : le squelette chronologique de vos dissertations d'HGG.",
    description: [
      "Une chronologie massive et systématique : 536 cartes date → événement, de l'ouverture du canal de Suez (1869) à la fin du XXe siècle, en passant par les crises, les innovations et les tournants géopolitiques.",
      "Les repères exacts sont ce qui distingue une bonne copie : ce deck les installe durablement, par répétition espacée, tout au long des deux années de prépa.",
    ],
    objectives: [
      "Mémoriser 536 dates structurantes des XIXe-XXe siècles",
      "Dater précisément les événements mobilisés en dissertation",
      "Construire une frise mentale solide du monde contemporain",
    ],
    audience: ["Étudiants en prépa ECG (HGG)", "Candidats aux IEP et à l'agrégation"],
    topics: ["Industrialisation et mondialisations", "Crises et conflits", "Innovations et société"],
    cardLanguages: ["fr"],
    cardCount: 536,
    priceCents: 1990,
    sampleCards: [
      { front: "1869", back: "Ouverture du canal de Suez.", tag: "Chronologie" },
      { front: "1873", back: "Crise financière à New York : début de la Grande Dépression.", tag: "Chronologie" },
      { front: "1908", back: "Lancement de la Ford T : l'automobile devient un produit de masse.", tag: "Chronologie" },
    ],
    structure: [{ name: "Repères chronologiques XIXe-XXe", cards: 536 }],
    featured: true,
    publishedAt: "2026-07-19",
  },
  {
    slug: "ecs-anglais-theme-grammatical",
    title: "Thème anglais grammatical — 500 phrases",
    categorySlug: "prepa-ecg",
    subcategory: "Anglais",
    level: "Prépa / B2-C1",
    shortDescription:
      "500 phrases de thème français → anglais ciblant les points de grammaire qui font les points aux concours.",
    description: [
      "L'exercice roi de la préparation aux épreuves de langues : 500 phrases de thème, chacune construite autour d'un point grammatical précis (temps, modaux, structures idiomatiques), avec sa traduction de référence.",
      "Travaillées en répétition espacée, ces 500 phrases installent des automatismes de traduction — exactement ce que les correcteurs valorisent.",
    ],
    objectives: [
      "Automatiser les structures grammaticales du thème",
      "Éliminer les fautes classiques des francophones",
      "Gagner en vitesse et en sûreté le jour de l'épreuve",
    ],
    audience: ["Étudiants en prépa ECG et littéraire", "Candidats aux IEP"],
    topics: ["Temps et aspects", "Modaux", "Structures idiomatiques"],
    cardLanguages: ["fr", "en"],
    cardCount: 500,
    priceCents: 1990,
    sampleCards: [
      {
        front: "Seul Roosevelt fut élu Président des États-Unis quatre fois de suite.",
        back: "Only Roosevelt was elected President of the United States four times running.",
        tag: "Thème",
      },
      {
        front: "Cardinal depuis 1970, il fut élu Pape quelques années plus tard.",
        back: "A cardinal since 1970, he was elected Pope a few years later.",
        tag: "Thème",
      },
    ],
    structure: [{ name: "Phrases de thème graduées", cards: 500 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "espagnol-vocabulaire-essentiel-3000",
    title: "Vocabulaire espagnol essentiel — 3 000 phrases · 9 000 mots",
    categorySlug: "prepa-ecg",
    subcategory: "Espagnol",
    level: "B1-C1",
    shortDescription:
      "12 491 fiches recto-verso (24 943 cartes) couvrant tout le lexique espagnol en 41 chapitres thématiques. Version texte, sans audio.",
    description: [
      "Le deck de vocabulaire espagnol le plus complet du catalogue : 12 491 fiches organisées en 41 chapitres thématiques — pensée et sentiments, corps et santé, école et université, entreprise, économie, médias, environnement, histoire… Chaque fiche est recto-verso : l'espagnol vous est demandé depuis le français et inversement, soit 24 943 cartes au total.",
      "Les entrées associent mots et locutions proches (« pensar, opinar, creer » → « penser »), avec les contraires et les nuances (« preocupado ≠ despreocupado »), ce qui construit un lexique organisé plutôt qu'une liste plate.",
      "Version texte allégée : les fichiers audio de la version d'origine ont été retirés pour un import léger (moins de 8 Mo) — les cartes, elles, sont intégralement conservées.",
    ],
    objectives: [
      "Construire un vocabulaire espagnol étendu et organisé",
      "Travailler les deux sens de traduction (version et thème)",
      "Couvrir tous les champs lexicaux des concours et de la vie courante",
    ],
    audience: [
      "Étudiants en prépa ECG et littéraire (LV1/LV2)",
      "Apprenants d'espagnol de niveau intermédiaire à avancé",
    ],
    topics: [
      "41 chapitres thématiques",
      "Fiches recto-verso ES ⇄ FR",
      "Synonymes, contraires et nuances",
    ],
    cardLanguages: ["fr", "es"],
    cardCount: 12491,
    priceCents: 2990,
    sampleCards: [
      { front: "El pensamiento", back: "La pensée", tag: "Pensée" },
      { front: "pensar, opinar, creer", back: "penser", tag: "Pensée" },
      {
        front: "preocupado (a) ≠ despreocupado (a)",
        back: "soucieux (euse) ≠ insouciant(e)",
        tag: "Sentiments",
      },
    ],
    structure: [
      {
        name: "41 chapitres thématiques (pensée, corps, santé, école, économie, médias…)",
        cards: 12491,
      },
    ],
    featured: true,
    publishedAt: "2026-07-20",
  },
  {
    slug: "ecs-espagnol-theme-systematique",
    title: "Thème espagnol systématique — 900 phrases",
    categorySlug: "prepa-ecg",
    subcategory: "Espagnol",
    level: "Prépa / B1-B2",
    shortDescription:
      "900 phrases de thème français → espagnol pour systématiser la grammaire et les tournures attendues aux concours.",
    description: [
      "Le pendant espagnol du thème grammatical, en plus volumineux encore : 900 phrases français → espagnol couvrant systématiquement les structures (subjonctif, tournures idiomatiques, prépositions) qui piègent les candidats.",
      "Un entraînement de fond qui transforme la grammaire apprise en réflexes de traduction.",
    ],
    objectives: [
      "Systématiser la grammaire espagnole par la traduction",
      "Automatiser les tournures idiomatiques attendues",
      "Sécuriser les épreuves écrites et orales",
    ],
    audience: ["Étudiants en prépa ECG et littéraire (LV1/LV2)", "Candidats aux IEP"],
    topics: ["Subjonctif et concordance", "Tournures idiomatiques", "Prépositions et régimes"],
    cardLanguages: ["fr", "es"],
    cardCount: 900,
    priceCents: 2490,
    sampleCards: [
      {
        front: "Parler plusieurs langues représente un précieux bagage quand il s'agit de chercher un bon emploi.",
        back: "Hablar varios idiomas representa un valioso aporte cuando se trata de buscar un buen empleo.",
        tag: "Thème",
      },
      {
        front: "Écris-moi en espagnol ne serait-ce que quelques lignes et je promets de te répondre par retour du courrier.",
        back: "Escríbeme en español aunque sólo sean unas cuantas líneas y prometo contestarte a vuelta de correo.",
        tag: "Thème",
      },
    ],
    structure: [{ name: "Phrases de thème systématiques", cards: 900 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "latin-vocabulaire",
    title: "Vocabulaire latin — 733 mots",
    categorySlug: "langues",
    subcategory: "Latin",
    shortDescription:
      "733 cartes de vocabulaire latin avec déclinaisons et genres : le lexique de base des textes classiques.",
    description: [
      "Le vocabulaire latin fondamental : 733 entrées présentées avec leur modèle de déclinaison et leur genre (agricola, ae, m.), telles qu'on doit les connaître pour la version.",
      "Un outil pour les latinistes du secondaire au supérieur, et pour tous les amoureux des langues anciennes.",
    ],
    objectives: [
      "Mémoriser le lexique latin de base avec les déclinaisons",
      "Gagner en aisance de traduction des textes classiques",
      "Réviser efficacement pour le bac, la khâgne ou l'université",
    ],
    audience: ["Lycéens et étudiants latinistes", "Candidats aux concours littéraires"],
    topics: ["Substantifs et déclinaisons", "Verbes usuels", "Lexique des textes classiques"],
    cardLanguages: ["la", "fr"],
    cardCount: 733,
    priceCents: 1290,
    sampleCards: [
      { front: "agricola, ae, m.", back: "cultivateur, paysan", tag: "1re déclinaison" },
      { front: "amicitia, ae, f.", back: "1) amitié — 2) alliance", tag: "1re déclinaison" },
      { front: "aqua, ae, f.", back: "eau", tag: "1re déclinaison" },
    ],
    structure: [{ name: "Vocabulaire latin de base", cards: 733 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "vietnamien-lexique-fr-vi",
    title: "Lexique vietnamien — 3 754 entrées FR ⇄ VI",
    categorySlug: "langues",
    subcategory: "Vietnamien",
    shortDescription:
      "Un dictionnaire d'apprentissage complet : 3 754 cartes français → vietnamien, des expressions courantes au lexique avancé.",
    description: [
      "Un des lexiques vietnamiens les plus complets disponibles au format Anki : 3 754 entrées français → vietnamien couvrant les expressions du quotidien (« à chaque instant », « à côté de… ») jusqu'au vocabulaire avancé.",
      "L'outil de fond idéal pour construire un vocabulaire riche sur la durée, en complément d'une méthode ou de cours.",
    ],
    objectives: [
      "Construire un vocabulaire vietnamien étendu",
      "Réviser quotidiennement avec la répétition espacée",
      "Passer du lexique passif au lexique actif",
    ],
    audience: ["Apprenants du vietnamien, tous niveaux", "Familles et voyageurs de longue durée"],
    topics: ["Expressions courantes", "Vocabulaire thématique", "Lexique avancé"],
    cardLanguages: ["fr", "vi"],
    cardCount: 3754,
    priceCents: 2990,
    sampleCards: [
      { front: "À chaque instant", back: "Từng lúc, từng hồi", tag: "Expressions" },
      { front: "À côté de…", back: "Bên cạnh...", tag: "Expressions" },
      { front: "À droite", back: "Bên phải / Tay phải", tag: "Expressions" },
    ],
    structure: [{ name: "Lexique FR ⇄ VI", cards: 3754 }],
    publishedAt: "2026-07-19",
  },
  {
    slug: "vietnamien-assimil",
    title: "Vietnamien — 2 007 phrases annotées",
    categorySlug: "langues",
    subcategory: "Vietnamien",
    shortDescription:
      "2 007 phrases vietnamien → français avec notes de grammaire détaillées : apprendre la langue par les phrases complètes.",
    description: [
      "L'apprentissage par les phrases : 2 007 cartes vietnamien → français, chacune accompagnée de sa traduction littérale et de notes grammaticales détaillées (construction des interrogatives, particules, registres).",
      "Cette approche par phrases complètes développe une intuition de la syntaxe qu'aucune liste de mots ne peut donner. Le complément naturel du lexique FR ⇄ VI.",
    ],
    objectives: [
      "Intérioriser la syntaxe vietnamienne par les phrases",
      "Comprendre les constructions grâce aux notes de grammaire",
      "Développer compréhension et expression en parallèle",
    ],
    audience: ["Apprenants débutants à intermédiaires", "Autodidactes cherchant une progression structurée"],
    topics: ["Phrases du quotidien", "Notes de grammaire", "Traductions littérales"],
    cardLanguages: ["vi", "fr"],
    cardCount: 2007,
    priceCents: 2490,
    sampleCards: [
      {
        front: "Cô tìm ai ?",
        back: "Qui cherchez-vous, mademoiselle ? (littéralement : mademoiselle chercher qui)",
        tag: "Interrogatives",
      },
      {
        front: "Chào cô !",
        back: "Bonjour, mademoiselle ! — « chào » signifie littéralement « saluer », employé sans sujet apparent suivi du mot désignant la personne saluée.",
        tag: "Salutations",
      },
    ],
    structure: [{ name: "Phrases annotées VI → FR", cards: 2007 }],
    publishedAt: "2026-07-19",
  },
];
