/**
 * Chaînes d'interface, par langue.
 *
 * Le dictionnaire français fait foi : `UiDict` en dérive, ce qui oblige la
 * traduction anglaise à couvrir exactement les mêmes clés (erreur de
 * compilation sinon).
 */
import type { Locale } from "@/lib/i18n";

export const uiFr = {
  skipToContent: "Aller au contenu",

  nav: {
    home: "Accueil",
    decks: "Catalogue",
    categories: "Catégories",
    method: "La méthode",
    faq: "FAQ",
    cta: "Voir les decks",
    main: "Navigation principale",
    mobile: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    homeAria: "accueil",
    language: "Langue",
    switchTo: "Voir cette page en anglais",
  },

  footer: {
    tagline:
      "Des decks Anki soigneusement construits pour apprendre plus vite, grâce à la répétition espacée et au rappel actif.",
    categories: "Catégories",
    navigation: "Navigation",
    legal: "Légal",
    allDecks: "Tous les decks",
    contact: "Contact",
    legalNotice: "Mentions légales",
    terms: "Conditions générales de vente",
    privacy: "Politique de confidentialité",
    rights: "Tous droits réservés.",
    ankiNote: (site: string) =>
      `Anki est un logiciel libre développé indépendamment de ${site}.`,
  },

  home: {
    eyebrow: "Flashcards Anki · Rappel actif · Répétition espacée",
    titleLine1: "Apprenez plus vite.",
    titleLine2: "Retenez pour de bon.",
    intro:
      "Des decks Anki soigneusement construits pour les concours et les métiers exigeants : prépa ECG, DCG, DSCG, CFA, Investment Banking, Financial Due Diligence, Excel et langues.",
    ctaPrimary: "Explorer les decks",
    ctaSecondary: "Pourquoi ça marche",
    heroCardFront: "Qu'est-ce que la répétition espacée ?",
    heroCardBack:
      "Une méthode d'apprentissage qui planifie chaque révision juste avant le moment où vous alliez oublier. L'intervalle s'allonge à chaque succès : quelques minutes, puis des jours, puis des mois — pour un ancrage durable avec un minimum de temps.",
    heroCardTag: "La méthode",
    heroCaption: "Une carte Anki : question, effort de rappel, réponse.",
    categoriesTitle: "Un catalogue par discipline",
    categoriesLead:
      "Chaque catégorie est construite avec la même exigence : des cartes atomiques, fidèles aux programmes et aux attentes réelles.",
    featuredTitle: "Decks en avant",
    allCatalogue: "Tout le catalogue →",
    howTitle: "Comment ça marche",
    steps: [
      {
        title: "Choisissez votre deck",
        text: "Chaque deck correspond à un programme, une épreuve ou une compétence précise, avec un aperçu des cartes avant l'achat.",
      },
      {
        title: "Importez-le dans Anki",
        text: "Vous recevez un fichier .apkg à ouvrir avec Anki — gratuit sur ordinateur et Android. Deux clics suffisent.",
      },
      {
        title: "Révisez quelques minutes par jour",
        text: "Anki planifie chaque carte au moment optimal. Vous ne révisez que ce qui doit l'être, et la mémoire se consolide durablement.",
      },
    ],
    methodTitle: "Une méthode éprouvée par la recherche",
    methodBody1: "Le ",
    methodActiveRecall: "rappel actif",
    methodBody2: " — se tester plutôt que relire — et la ",
    methodSpacedRepetition: "répétition espacée",
    methodBody3:
      " — revoir au bon moment — comptent parmi les techniques d'apprentissage les plus robustes de la psychologie cognitive. Anki les automatise ; nos decks apportent ce qui prend le plus de temps : un contenu rigoureux, structuré et fidèle aux programmes.",
    methodCta: "Découvrir la méthode",
    methodPoints: [
      {
        title: "Des cartes atomiques",
        text: "Une carte = une notion. C'est la condition d'une planification fiable et d'un rappel sans ambiguïté.",
      },
      {
        title: "Fidèles aux programmes",
        text: "Chaque deck suit le référentiel de l'épreuve ou les attentes réelles du métier — pas de remplissage.",
      },
      {
        title: "Conçus pour durer",
        text: "Formulations précises, tags propres, structure claire : des decks agréables à réviser sur la durée.",
      },
    ],
    faqTitle: "Questions fréquentes",
    faqMore: "D'autres questions ?",
    faqLink: "Consultez la FAQ complète",
  },

  decksPage: {
    title: "Catalogue",
    intro:
      "Tous nos decks Anki, classés par discipline. Chaque deck présente un aperçu de ses cartes avant l'achat.",
    metaTitle: "Catalogue des decks Anki",
    metaDescription:
      "Parcourez tous nos decks Anki : prépa ECG, DCG, DSCG, CFA, Investment Banking, Financial Due Diligence, Excel et langues. Recherche, filtres par catégorie et par langue des cartes.",
  },

  catalog: {
    searchLabel: "Rechercher un deck",
    searchPlaceholder: "Rechercher un deck, un thème, une épreuve…",
    categoryLabel: "Filtrer par catégorie",
    allCategories: "Toutes les catégories",
    languageLabel: "Filtrer par langue des cartes",
    allLanguages: "Toutes les langues",
    languageOption: (name: string) => `Cartes en ${name}`,
    sortLabel: "Trier",
    sort: {
      recent: "Plus récents",
      "price-asc": "Prix croissant",
      "price-desc": "Prix décroissant",
      "cards-desc": "Nombre de cartes",
      title: "Ordre alphabétique",
    },
    results: (n: number) => `${n} deck${n > 1 ? "s" : ""}`,
    emptyTitle: "Aucun deck ne correspond",
    emptyText:
      "Essayez d'autres mots-clés, ou retirez les filtres de catégorie et de langue. Le catalogue s'enrichit régulièrement.",
    reset: "Réinitialiser la recherche",
  },

  categoriesPage: {
    title: "Catégories",
    intro:
      "Chaque discipline a ses exigences propres. Nos decks sont construits au plus près des programmes et des attentes réelles de chaque domaine.",
    metaDescription:
      "Nos decks Anki par discipline : prépa ECG, DCG, DSCG, langues, Excel, Investment Banking, Financial Due Diligence, comptabilité & IFRS, CFA, culture générale et physique-chimie.",
    deckCount: (n: number) => `${n} deck${n > 1 ? "s" : ""}`,
    breadcrumb: "Catégories",
    emptyTitle: "Les decks arrivent",
    emptyText:
      "Cette catégorie est en cours de construction. Les premiers decks y seront publiés prochainement.",
    emptyCta: "Voir le reste du catalogue",
    aboutTitle: "À propos de cette catégorie",
    metaSuffix:
      "Decks Anki fondés sur le rappel actif et la répétition espacée.",
  },

  deck: {
    breadcrumb: "Fil d'Ariane",
    catalogue: "Catalogue",
    demoBadge: "Deck de démonstration",
    demoNote:
      "Ce deck fait partie du catalogue de démonstration publié au lancement du site : il illustre le format et l'expérience d'achat.",
    cards: "Cartes",
    cardsLanguage: "Langue des cartes",
    format: "Format",
    formatValue: "Fichier Anki (.apkg)",
    delivery: "Livraison",
    deliveryValue: "Téléchargement immédiat",
    price: "Prix",
    vatNote: "TVA non applicable, art. 293 B du CGI",
    aboutTitle: "À propos de ce deck",
    objectivesTitle: "Ce que vous allez maîtriser",
    audienceTitle: "Pour qui ?",
    previewTitle: "Aperçu des cartes",
    previewLead:
      "Des cartes extraites du deck, telles que vous les verrez dans Anki. Cliquez sur une carte pour révéler sa réponse.",
    structureTitle: "Structure du deck",
    sectionCards: (n: number) => `${n} cartes`,
    topics: (list: string) => `Thèmes couverts : ${list}.`,
    faqTitle: "Questions sur ce deck",
    relatedTitle: "Dans la même catégorie",
    metaSuffix: "Deck Anki",
  },

  flashcard: {
    front: "Recto — Question",
    back: "Verso — Réponse",
    reveal: "Cliquer pour révéler la réponse ↺",
    hide: "Revoir la question ↺",
    ariaReveal: (i: number) => `Carte ${i} : révéler la réponse`,
    ariaHide: (i: number) => `Carte ${i} : voir la question`,
  },

  buy: {
    label: (price: string) => `Acheter — ${price}`,
    loading: "Redirection vers le paiement…",
    reassurance: "Paiement sécurisé par Stripe · Téléchargement immédiat",
    disabledNote:
      "La boutique ouvre très prochainement. Le paiement en ligne n'est pas encore activé sur cette version du site.",
    genericError: "Une erreur est survenue. Réessayez dans un instant.",
  },

  order: {
    metaTitle: "Merci pour votre achat",
    metaDescription:
      "Confirmation de commande et téléchargement de votre deck Anki.",
    verifying: "Vérification du paiement…",
    pendingTitle: "Paiement en cours de confirmation",
    pendingText:
      "Votre paiement est en cours de traitement. Rechargez cette page dans quelques instants — le lien de téléchargement apparaîtra dès la confirmation.",
    errorTitle: "Un problème est survenu",
    backToCatalogue: "Retour au catalogue",
    missingSession:
      "Référence de commande manquante. Si vous venez de payer, utilisez le lien de l'e-mail de confirmation.",
    verifyFailed:
      "Impossible de vérifier la commande. Réessayez dans un instant.",
    successTitle: "Merci pour votre achat",
    successText: (deck: string, email: string | null) =>
      `Votre paiement pour ${deck} est confirmé${
        email ? ` (reçu envoyé à ${email})` : ""
      }. Vous pouvez télécharger votre deck dès maintenant.`,
    download: "Télécharger le deck (.apkg)",
    linkValidUntil: (date: string) =>
      `Lien valable jusqu'au ${date}. Conservez cette page ou l'e-mail de confirmation.`,
    preparing:
      "Le lien de téléchargement est en cours de préparation. Rechargez la page dans quelques secondes.",
    installTitle: "Installer le deck dans Anki",
    installStep1a: "Installez Anki depuis",
    installStep1b: "si ce n'est pas déjà fait.",
    installStep2:
      "Double-cliquez sur le fichier .apkg téléchargé (ou Fichier → Importer).",
    installStep3: "Le deck apparaît dans votre collection : bonnes révisions.",
    problem: "Un problème ?",
    faqLink: "Consultez la FAQ",
  },

  // Clés alignées sur `CommerceErrorCode` (lib/commerce.ts).
  commerceErrors: {
    disabled: "La boutique n'est pas encore ouverte sur cette instance.",
    unavailable:
      "Le paiement en ligne est momentanément indisponible. Réessayez dans un instant.",
    not_found: "Ce deck est introuvable ou n'est plus disponible.",
    not_paid: "Le paiement n'a pas encore été confirmé.",
    expired: "Ce lien a expiré. Écrivez-nous pour en obtenir un nouveau.",
    invalid: "Requête invalide.",
    unknown: "Une erreur est survenue. Réessayez dans un instant.",
  },

  faqPage: {
    title: "Questions fréquentes",
    intro:
      "Anki, achat, installation, compatibilité, mises à jour : les réponses aux questions que l'on nous pose le plus.",
    metaTitle: "FAQ — questions fréquentes",
    metaDescription:
      "Tout savoir sur Anki, l'achat et l'installation de nos decks, les appareils compatibles, les mises à jour et la politique de remboursement.",
    contact1: "Vous n'avez pas trouvé votre réponse ? Écrivez-nous à",
    contact2: "— ou consultez",
    contactLink: "la page méthode",
    contact3: "pour comprendre comment tirer le meilleur de vos decks.",
  },

  notFound: {
    code: "Erreur 404",
    title: "Cette page n'existe pas",
    text: "La page demandée a peut-être été déplacée ou n'existe plus. Le catalogue, lui, est bien là.",
    home: "Retour à l'accueil",
    decks: "Voir les decks",
  },

  legal: {
    updated: "Dernière mise à jour :",
  },
};

export type UiDict = typeof uiFr;

export const uiEn: UiDict = {
  skipToContent: "Skip to content",

  nav: {
    home: "Home",
    decks: "Catalogue",
    categories: "Categories",
    method: "The method",
    faq: "FAQ",
    cta: "Browse decks",
    main: "Main navigation",
    mobile: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: "home",
    language: "Language",
    switchTo: "View this page in French",
  },

  footer: {
    tagline:
      "Carefully built Anki decks that help you learn faster, through spaced repetition and active recall.",
    categories: "Categories",
    navigation: "Navigation",
    legal: "Legal",
    allDecks: "All decks",
    contact: "Contact",
    legalNotice: "Legal notice",
    terms: "Terms of sale",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    ankiNote: (site: string) =>
      `Anki is free software, developed independently of ${site}.`,
  },

  home: {
    eyebrow: "Anki flashcards · Active recall · Spaced repetition",
    titleLine1: "Learn faster.",
    titleLine2: "Remember for good.",
    intro:
      "Carefully built Anki decks for demanding exams and professions: French business-school prépa, accountancy diplomas (DCG, DSCG), CFA, investment banking, financial due diligence, Excel and languages.",
    ctaPrimary: "Browse the decks",
    ctaSecondary: "Why it works",
    heroCardFront: "What is spaced repetition?",
    heroCardBack:
      "A learning method that schedules each review just before you were about to forget. The interval grows with every success: minutes, then days, then months — durable memory for a minimal time investment.",
    heroCardTag: "The method",
    heroCaption: "An Anki card: question, recall effort, answer.",
    categoriesTitle: "A catalogue by discipline",
    categoriesLead:
      "Every category is built to the same standard: atomic cards, faithful to the syllabus and to what the exam or the job actually demands.",
    featuredTitle: "Featured decks",
    allCatalogue: "See the full catalogue →",
    howTitle: "How it works",
    steps: [
      {
        title: "Choose your deck",
        text: "Each deck matches a syllabus, an exam or a precise skill, with a preview of its cards before you buy.",
      },
      {
        title: "Import it into Anki",
        text: "You get an .apkg file to open with Anki — free on desktop and Android. Two clicks and you are done.",
      },
      {
        title: "Review a few minutes a day",
        text: "Anki schedules every card at the optimal moment. You only review what needs reviewing, and the memory sticks.",
      },
    ],
    methodTitle: "A method backed by research",
    methodBody1: "",
    methodActiveRecall: "Active recall",
    methodBody2: " — testing yourself rather than rereading — and ",
    methodSpacedRepetition: "spaced repetition",
    methodBody3:
      " — reviewing at the right moment — are among the most robust learning techniques in cognitive psychology. Anki automates them; our decks provide the part that takes the most time: rigorous, structured content that is faithful to the syllabus.",
    methodCta: "Discover the method",
    methodPoints: [
      {
        title: "Atomic cards",
        text: "One card, one idea. That is what makes scheduling reliable and recall unambiguous.",
      },
      {
        title: "Faithful to the syllabus",
        text: "Every deck follows the official exam programme or documented professional expectations — no filler.",
      },
      {
        title: "Built to last",
        text: "Precise wording, clean tags, clear structure: decks that stay pleasant to review over months.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqMore: "More questions?",
    faqLink: "Read the full FAQ",
  },

  decksPage: {
    title: "Catalogue",
    intro:
      "All our Anki decks, sorted by discipline. Every deck shows a preview of its cards before you buy — and states the language the cards are written in.",
    metaTitle: "Anki deck catalogue",
    metaDescription:
      "Browse every Anki deck: French prépa, DCG, DSCG, CFA, investment banking, financial due diligence, Excel and languages. Search, filter by category and by card language.",
  },

  catalog: {
    searchLabel: "Search for a deck",
    searchPlaceholder: "Search a deck, a topic, an exam…",
    categoryLabel: "Filter by category",
    allCategories: "All categories",
    languageLabel: "Filter by card language",
    allLanguages: "All card languages",
    languageOption: (name: string) => `Cards in ${name}`,
    sortLabel: "Sort",
    sort: {
      recent: "Most recent",
      "price-asc": "Price: low to high",
      "price-desc": "Price: high to low",
      "cards-desc": "Number of cards",
      title: "Alphabetical",
    },
    results: (n: number) => `${n} deck${n > 1 ? "s" : ""}`,
    emptyTitle: "No deck matches",
    emptyText:
      "Try other keywords, or clear the category and language filters. The catalogue grows regularly.",
    reset: "Reset the search",
  },

  categoriesPage: {
    title: "Categories",
    intro:
      "Every discipline has its own demands. Our decks are built as close as possible to each syllabus and to what each field really expects.",
    metaDescription:
      "Our Anki decks by discipline: French prépa, DCG, DSCG, languages, Excel, investment banking, financial due diligence, accounting & IFRS, CFA, general knowledge and physics-chemistry.",
    deckCount: (n: number) => `${n} deck${n > 1 ? "s" : ""}`,
    breadcrumb: "Categories",
    emptyTitle: "Decks on the way",
    emptyText:
      "This category is being built. Its first decks will be published shortly.",
    emptyCta: "See the rest of the catalogue",
    aboutTitle: "About this category",
    metaSuffix: "Anki decks built on active recall and spaced repetition.",
  },

  deck: {
    breadcrumb: "Breadcrumb",
    catalogue: "Catalogue",
    demoBadge: "Demo deck",
    demoNote:
      "This deck is part of the demonstration catalogue published at launch: it illustrates the format and the buying experience.",
    cards: "Cards",
    cardsLanguage: "Card language",
    format: "Format",
    formatValue: "Anki file (.apkg)",
    delivery: "Delivery",
    deliveryValue: "Instant download",
    price: "Price",
    vatNote: "VAT not applicable, art. 293 B of the French tax code",
    aboutTitle: "About this deck",
    objectivesTitle: "What you will master",
    audienceTitle: "Who is it for?",
    previewTitle: "Card preview",
    previewLead:
      "Real cards taken from the deck, exactly as you will see them in Anki. Click a card to reveal its answer.",
    structureTitle: "Deck structure",
    sectionCards: (n: number) => `${n} cards`,
    topics: (list: string) => `Topics covered: ${list}.`,
    faqTitle: "Questions about this deck",
    relatedTitle: "In the same category",
    metaSuffix: "Anki deck",
  },

  flashcard: {
    front: "Front — Question",
    back: "Back — Answer",
    reveal: "Click to reveal the answer ↺",
    hide: "Back to the question ↺",
    ariaReveal: (i: number) => `Card ${i}: reveal the answer`,
    ariaHide: (i: number) => `Card ${i}: see the question`,
  },

  buy: {
    label: (price: string) => `Buy — ${price}`,
    loading: "Redirecting to payment…",
    reassurance: "Secure payment by Stripe · Instant download",
    disabledNote:
      "The shop is opening very soon. Online payment is not enabled yet on this version of the site.",
    genericError: "Something went wrong. Please try again in a moment.",
  },

  order: {
    metaTitle: "Thank you for your purchase",
    metaDescription: "Order confirmation and download of your Anki deck.",
    verifying: "Verifying the payment…",
    pendingTitle: "Payment being confirmed",
    pendingText:
      "Your payment is still being processed. Reload this page in a few moments — the download link will appear as soon as it is confirmed.",
    errorTitle: "Something went wrong",
    backToCatalogue: "Back to the catalogue",
    missingSession:
      "Order reference missing. If you have just paid, use the link from your confirmation e-mail.",
    verifyFailed: "Unable to verify the order. Please try again in a moment.",
    successTitle: "Thank you for your purchase",
    successText: (deck: string, email: string | null) =>
      `Your payment for ${deck} is confirmed${
        email ? ` (receipt sent to ${email})` : ""
      }. You can download your deck right away.`,
    download: "Download the deck (.apkg)",
    linkValidUntil: (date: string) =>
      `Link valid until ${date}. Keep this page or your confirmation e-mail.`,
    preparing:
      "The download link is being prepared. Reload the page in a few seconds.",
    installTitle: "Install the deck in Anki",
    installStep1a: "Install Anki from",
    installStep1b: "if you have not already.",
    installStep2:
      "Double-click the downloaded .apkg file (or File → Import).",
    installStep3: "The deck appears in your collection: happy reviewing.",
    problem: "Something wrong?",
    faqLink: "Check the FAQ",
  },

  commerceErrors: {
    disabled: "The shop is not open yet on this instance.",
    unavailable:
      "Online payment is temporarily unavailable. Please try again in a moment.",
    not_found: "This deck cannot be found or is no longer available.",
    not_paid: "The payment has not been confirmed yet.",
    expired: "This link has expired. Write to us and we will send a new one.",
    invalid: "Invalid request.",
    unknown: "Something went wrong. Please try again in a moment.",
  },

  faqPage: {
    title: "Frequently asked questions",
    intro:
      "Anki, buying, installing, device compatibility, updates: answers to the questions we are asked most.",
    metaTitle: "FAQ — frequently asked questions",
    metaDescription:
      "Everything about Anki, buying and installing our decks, supported devices, updates and the refund policy.",
    contact1: "Did not find your answer? Write to us at",
    contact2: "— or read",
    contactLink: "the method page",
    contact3: "to get the most out of your decks.",
  },

  notFound: {
    code: "Error 404",
    title: "This page does not exist",
    text: "The page you asked for may have moved or no longer exists. The catalogue, however, is right here.",
    home: "Back to home",
    decks: "Browse the decks",
  },

  legal: {
    updated: "Last updated:",
  },
};

const dictionaries: Record<Locale, UiDict> = { fr: uiFr, en: uiEn };

export function t(locale: Locale): UiDict {
  return dictionaries[locale];
}
