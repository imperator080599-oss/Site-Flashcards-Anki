import type { Deck } from "../types";

export const deck: Deck = {
  slug: "ib-technicals-entretiens",
  title: "IB Technicals — M&A, valorisation, LBO",
  categorySlug: "investment-banking",
  level: "Stage / Analyst",
  shortDescription:
    "Les questions techniques des entretiens en banque d'affaires, formulées comme en process — avec les réponses attendues.",
  description: [
    "Les entretiens en M&A testent un corpus technique bien identifié : liens entre les trois états financiers, méthodes de valorisation, mécanique des LBO, notions d'accretion/dilution. Ce deck reprend ces questions telles qu'elles sont posées en process, avec des réponses structurées comme un bon candidat doit les dérouler.",
    "Les cartes sont rédigées en anglais — la langue des entretiens — avec, quand c'est utile, une note en français sur les attentes de l'intervieweur. L'objectif : répondre vite, juste, et dans le bon ordre.",
  ],
  objectives: [
    "Dérouler sans hésiter les liens entre income statement, balance sheet et cash flow statement",
    "Maîtriser DCF, comparables et transactions précédentes — hypothèses et limites",
    "Expliquer la mécanique d'un LBO et ses leviers de création de valeur",
    "Répondre aux questions pièges classiques (dépréciation, BFR, accretion/dilution)",
  ],
  audience: [
    "Candidats aux stages et graduate programs en M&A, ECM/DCM, leveraged finance",
    "Étudiants en écoles de commerce et d'ingénieurs visant l'IB",
    "Professionnels préparant un lateral move",
  ],
  topics: [
    "Accounting : les trois états financiers et leurs liens",
    "Valuation : DCF, trading comps, transaction comps",
    "M&A : accretion/dilution, synergies, structures d'offre",
    "LBO : mécanique, returns, exit",
  ],
  cardCount: 520,
  priceCents: 4900,
  sampleCards: [
    {
      front: "Walk me through what happens to the three statements when depreciation increases by $10 (40% tax rate).",
      back: "IS: EBIT −10, taxes −4, net income −6. CFS: net income −6, add back depreciation +10 → cash +4. BS: cash +4, PP&E −10 → assets −6; retained earnings −6 → balanced. Point clé : commencer par l'income statement, finir par l'équilibre du bilan.",
      tag: "Accounting",
    },
    {
      front: "Which of the three main valuation methodologies typically yields the highest value, and why?",
      back: "Precedent transactions, en général : les prix payés incluent une prime de contrôle et des synergies anticipées. Le DCF peut donner plus ou moins selon les hypothèses ; les trading comps reflètent des participations minoritaires sans prime. À nuancer : cela dépend du cycle et des hypothèses.",
      tag: "Valuation",
    },
    {
      front: "What are the main value creation levers in an LBO?",
      back: "1) Deleveraging : le cash-flow rembourse la dette et transfère la valeur vers l'equity. 2) EBITDA growth : croissance organique et build-ups. 3) Multiple expansion : sortie à un multiple supérieur. Les fonds souscrivent surtout aux deux premiers ; le troisième est du market timing.",
      tag: "LBO",
    },
  ],
  structure: [
    { name: "Accounting & three statements", cards: 130 },
    { name: "Enterprise value & equity value", cards: 60 },
    { name: "Valuation : DCF", cards: 90 },
    { name: "Valuation : comps & precedents", cards: 70 },
    { name: "M&A : accretion/dilution & process", cards: 90 },
    { name: "LBO", cards: 80 },
  ],
  faq: [
    {
      question: "Les cartes sont-elles en anglais ou en français ?",
      answer:
        "Les questions et réponses sont en anglais, comme en entretien. Des notes en français précisent les attentes de l'intervieweur quand c'est pertinent.",
    },
    {
      question: "Ce deck suffit-il pour préparer les entretiens ?",
      answer:
        "Il couvre le corpus technique standard (accounting, valuation, M&A, LBO). Il ne remplace pas la préparation du fit ni la connaissance de l'actualité des deals, qui restent indispensables.",
    },
  ],
  featured: true,
  demo: true,
  draft: true,
  publishedAt: "2026-07-10",
};
