/**
 * Traduction anglaise des fiches produit.
 *
 * Seul le texte éditorial est traduit : les `sampleCards` restent tels quels
 * puisqu'ils reproduisent le contenu réel des cartes. Chaque description
 * anglaise indique explicitement la langue des cartes — un acheteur
 * anglophone doit savoir qu'il achète, le cas échéant, un deck en français.
 */
export interface DeckTranslation {
  title: string;
  shortDescription: string;
  description: string[];
  objectives: string[];
  audience: string[];
  topics: string[];
  /** Noms des sections, dans l'ordre de `structure` côté français. */
  structure: string[];
}

export const decksEn: Record<string, DeckTranslation> = {
  // ---------------------------------------------------------------- DSCG
  "dscg-ue2-finance-manuel-3e-edition": {
    title: "DSCG Unit 2 Finance — the whole syllabus in 3,977 cards",
    shortDescription:
      "3,977 question-and-answer cards in French covering the entire DSCG finance syllabus: markets, valuation, capital structure, financial engineering.",
    description: [
      "The most complete deck in the catalogue: 3,977 question-and-answer cards sweeping the full Unit 2 syllabus, from market mechanics (primary market, auctions, market capitalisation) through to financial engineering.",
      "Every card is referenced to its source page in the textbook, so you can retrieve the context of a notion instantly. A long-haul tool built to carry you all the way to the exam.",
      "The cards are written in French, the language of the exam.",
    ],
    objectives: [
      "Cover the entire Unit 2 finance syllabus",
      "Restate definitions and mechanisms in exam wording",
      "Revise through spaced repetition across the whole year",
    ],
    audience: [
      "DSCG candidates (Unit 2 Finance)",
      "Students on French CCA or finance master's programmes",
    ],
    topics: [
      "Financial markets and instruments",
      "Valuation and financial policy",
      "Funding structure and engineering",
    ],
    structure: ["Unit 2 Finance syllabus (page-referenced cards)"],
  },
  "dscg-ue4-comptabilite-audit-132-flashcards": {
    title: "DSCG Unit 4 Accounting & Audit — 128 summary cards",
    shortDescription:
      "The essentials of Unit 4 in 128 summary cards in French: IFRS, consolidation, mergers and audit — for fast, effective revision.",
    description: [
      "A deliberately tight format: 128 summary cards condensing the structuring notions of Unit 4 — IFRS definitions (leases, investment property, financial statements), consolidation mechanics and audit landmarks.",
      "Ideal alongside a full preparation, for quick revision passes in the weeks before the exam. The cards are written in French.",
    ],
    objectives: [
      "Revise the key Unit 4 definitions in limited time",
      "Anchor the unavoidable IFRS notions",
      "Run fast revision passes before the exam",
    ],
    audience: ["DSCG candidates (Unit 4)", "Students on French CCA master's programmes"],
    topics: ["IFRS standards", "Consolidation", "Audit"],
    structure: ["Unit 4 summary — IFRS, consolidation, audit"],
  },
  "dscg-ue6-anglais-des-affaires-manuel": {
    title: "DSCG Unit 6 Business English — 3,435 cards",
    shortDescription:
      "3,435 question-and-answer cards, entirely in English, on the Unit 6 business themes: strategy, marketing, innovation, management.",
    description: [
      "A massive corpus of 3,435 cards in English covering the economic and managerial themes of the business-English exam: innovation, digital marketing, corporate strategy, organisations.",
      "Cards are page-referenced and written entirely in English: you work on the language and the substance at the same time, exactly as the exam requires.",
    ],
    objectives: [
      "Absorb the exam's business vocabulary in context",
      "Revise management and strategy concepts in English",
      "Prepare both the written and oral parts of Unit 6 over time",
    ],
    audience: [
      "DSCG candidates (Unit 6)",
      "Anyone building solid business English",
    ],
    topics: ["Business & strategy", "Marketing and digital", "Innovation and organisations"],
    structure: ["Business English — page-referenced cards"],
  },

  // ------------------------------------------------- Accounting & IFRS
  "accounting-pcg-anc-2014-03-v2026": {
    title: "French chart of accounts 2026 — 837 accounts",
    shortDescription:
      "The French general chart of accounts (ANC regulation 2014-03, 2026 version) in 837 cards: number → caption, class by class. Cards in French.",
    description: [
      "Knowing your account numbers without hesitating saves time permanently, in exams as much as in practice. This deck covers the French chart of accounts in its 2026 version: 837 cards spanning classes 1 to 8, from account “10 Capital and reserves” down to the fine subdivisions.",
      "The numbering is worked in both directions (number → caption), with the class hierarchy to structure memorisation. The cards are in French, as is the standard itself.",
    ],
    objectives: [
      "Memorise the chart of accounts class by class",
      "Post entries without looking up account numbers",
      "Save valuable time in the DCG, the DSCG and in practice",
    ],
    audience: [
      "French accounting students (DCG, DSCG, BTS CG, BUT GEA)",
      "Accounting staff and apprentices in practice",
    ],
    topics: [
      "Classes 1 to 8",
      "Accounts and subdivisions",
      "ANC regulation 2014-03 (2026 version)",
    ],
    structure: ["Chart of accounts — classes 1 to 8"],
  },
  "referentiel-ifrs-cncc": {
    title: "The IFRS framework — the objective of every standard (42 cards)",
    shortDescription:
      "42 cards to know the objective of every IAS/IFRS standard — the basic reflex of any finance professional. Cards in French.",
    description: [
      "Knowing instantly what IAS 1, IAS 7 or IFRS 15 covers is the foundation of any practice of international standards. This compact deck pairs each standard in the framework with its objective.",
      "A short format you can master in a few days, and which makes every other piece of IFRS learning easier. The cards are written in French.",
    ],
    objectives: [
      "Match every IAS/IFRS standard to its purpose",
      "Structure your overall view of the framework",
      "Answer without hesitation in an interview or an exam",
    ],
    audience: [
      "DSCG and accounting master's students",
      "Junior auditors and consolidation staff",
    ],
    topics: ["IAS standards", "IFRS standards", "Objectives and scope"],
    structure: ["The IAS/IFRS framework"],
  },
  "ifrs9-financial-instruments": {
    title: "IFRS 9 Financial Instruments — 691 cards",
    shortDescription:
      "691 cloze cards in English on IFRS 9: classification, impairment (ECL), credit risk — page-referenced.",
    description: [
      "IFRS 9 is one of the most technical standards in the framework. This deck works it in depth: 691 cloze cards in English covering the classification of instruments, the expected credit loss (ECL) impairment model and credit-risk monitoring.",
      "Every card is referenced to its source page so you can retrieve the context. A professional-grade tool for technical accounting teams, audit and banking.",
    ],
    objectives: [
      "Master the vocabulary and mechanics of IFRS 9",
      "Anchor the ECL model and credit-risk notions",
      "Prepare for a role or engagement exposed to financial instruments",
    ],
    audience: [
      "Banking, audit and consolidation professionals",
      "Finance or accounting master's students targeting those roles",
    ],
    topics: ["Classification and measurement", "Expected credit losses", "Credit risk"],
    structure: ["IFRS 9 — cloze cards (page-referenced)"],
  },
  "ifrs9-hedge-accounting-in-practice": {
    title: "IFRS 9 Hedge accounting — 409 cards",
    shortDescription:
      "409 cards in English on IFRS 9 hedge accounting: designations, cash flow hedges, cost of hedging.",
    description: [
      "Hedge accounting is a specialism in its own right. This deck covers it in practice: spot and forward designations, cash flow hedge mechanics, the cost of hedging reserve, worked numerical illustrations.",
      "409 page-referenced cards in English, for professionals dealing with derivatives and their accounting treatment.",
    ],
    objectives: [
      "Master designation types and their effect on profit or loss",
      "Understand the mechanics of hedging reserves",
      "Handle the classic practical cases (swaps, forwards, options)",
    ],
    audience: [
      "Technical accounting, treasury and consolidation teams",
      "Auditors of hedged groups",
    ],
    topics: ["Hedge designations", "Cash flow hedge", "Cost of hedging"],
    structure: ["Hedge accounting in practice"],
  },
  "ratios-financiers-hec-montreal": {
    title: "Financial ratios — 28 key ratios",
    shortDescription:
      "28 cards to know the financial-analysis ratios by heart: profitability, margins, capital structure, liquidity. Cards in French.",
    description: [
      "Financial ratios are the basic language of statement analysis. This compact deck pairs each ratio with its exact formula: return on assets, net margin, structure and liquidity ratios.",
      "An essential you can master in a few days, useful from the internship interview to daily practice. The cards are written in French.",
    ],
    objectives: [
      "Restate ratio formulas without hesitation",
      "Read financial statements quickly",
      "Secure the basic questions in finance interviews",
    ],
    audience: [
      "Finance, accounting and business-school students",
      "Candidates preparing finance interviews",
    ],
    topics: ["Profitability", "Margins", "Structure and liquidity"],
    structure: ["Financial analysis ratios"],
  },

  // ------------------------------------------------------------- Finance
  "investment-banking-valuation-lbo-ma-ipo": {
    title: "Investment Banking — Valuation, LBO, M&A, IPO (2,330 cards)",
    shortDescription:
      "2,330 cards in English covering the analyst's complete toolkit: comps, DCF, step-by-step LBO mechanics, M&A and IPO processes.",
    description: [
      "The flagship deck of the catalogue for investment banking: 2,330 cards in English that methodically work through valuation (trading comps, precedent transactions, DCF), building an LBO model step by step, sell-side and buy-side M&A processes, and IPOs.",
      "Cards are page-referenced and follow a teaching progression: ideal to prepare technical interviews, then to keep the corpus fresh during the internship.",
    ],
    objectives: [
      "Master the three valuation methods and their pitfalls",
      "Walk through an LBO build (five steps) without hesitation",
      "Know how M&A and IPO processes actually unfold",
      "Answer fast and correctly in technical interviews",
    ],
    audience: [
      "Candidates for M&A and leveraged finance internships and graduate programmes",
      "Analysts in post consolidating their technical base",
    ],
    topics: [
      "Comparable companies & precedent transactions",
      "DCF",
      "LBO analysis",
      "M&A sell-side / buy-side",
      "IPO",
    ],
    structure: ["Valuation · LBO · M&A · IPO (page-referenced)"],
  },
  "fdd-interview-preparation-pack": {
    title: "FDD Interview Pack — 284 cards",
    shortDescription:
      "284 cards in English for financial due diligence interviews: net debt, trapped cash, debt-like items, NWC — with MCQs and cloze cards.",
    description: [
      "A practice pack dedicated to transaction services interviews: 284 cards in English organised in three formats (question and answer, multiple choice, cloze) covering the concepts recruiters actually test — net debt and debt-like items, trapped cash, working capital treatment, the equity bridge.",
      "Answers are detailed and justified, exactly as you are expected to argue them in an interview.",
    ],
    objectives: [
      "Master net debt / debt-like / NWC reasoning",
      "Practise in three complementary formats (Q&A, MCQ, cloze)",
      "Walk into an FDD interview with structured answers",
    ],
    audience: [
      "Candidates for transaction services internships and graduate roles",
      "Auditors preparing a move into transaction services",
    ],
    topics: ["Net debt & debt-like items", "Trapped cash", "Net working capital", "Equity bridge"],
    structure: ["Basic flashcards", "MCQ flashcards", "Cloze flashcards"],
  },
  "fdd-tas": {
    title: "Transaction Services — vocabulary and concepts (51 cards)",
    shortDescription:
      "51 cards in French on transaction services vocabulary: carve-outs, mandates, restructuring, disposal mechanisms.",
    description: [
      "The vocabulary of transaction services as used in France: carve-outs, mandat ad hoc and conciliation, disposal and restructuring mechanisms. 51 precise cards so you speak the language of the job from day one.",
      "The cards are written in French — an ideal complement to the FDD Interview Pack for anyone targeting the French market.",
    ],
    objectives: [
      "Master the French vocabulary of transaction services",
      "Understand disposal and restructuring mechanisms",
      "Prepare for interviews with French advisory firms",
    ],
    audience: [
      "Candidates for TS/FDD roles in France",
      "Finance or audit master's students",
    ],
    topics: ["Carve-outs", "Amicable proceedings", "Deal vocabulary"],
    structure: ["Transaction services vocabulary and concepts"],
  },

  // --------------------------------------------------------------- Excel
  "excel-keyboard-shortcuts": {
    title: "Excel — 192 keyboard shortcuts",
    shortDescription:
      "192 Excel shortcuts (Windows) organised by use: navigation, ribbon, formatting, paste special — drilled until they are reflexes.",
    description: [
      "Working mouse-free is a learnable skill: 192 cards covering Excel shortcuts for Windows, structured by family — frequently used shortcuts, ribbon navigation, moving within cells, formatting, the Paste Special dialog.",
      "Cards are in English (the official command labels), with immediate answers: the perfect format to turn every gesture into a reflex.",
    ],
    objectives: [
      "Work in Excel without touching the mouse",
      "Memorise shortcuts by family of use",
      "Gain visible speed within the first few weeks",
    ],
    audience: [
      "Students targeting finance, audit or consulting",
      "Any daily Excel user",
    ],
    topics: ["Frequent shortcuts", "Ribbon and navigation", "Formatting", "Paste special"],
    structure: [
      "Frequently used shortcuts",
      "Ribbon & navigation",
      "Formatting & Paste Special",
    ],
  },
  "excel-functions-alphabetical": {
    title: "Excel — all 515 functions",
    shortDescription:
      "All 515 Excel functions as cards: name → category and purpose. The complete general knowledge of the spreadsheet. Cards in English.",
    description: [
      "Exhaustive coverage: every Excel function (ABS, ACCRINT, ACOS… all the way to Z) paired with its category and what it does. 515 cards in English, the language of the documentation.",
      "Knowing that a function exists is already halfway to solving the problem: this deck builds the mental index that advanced users carry around.",
    ],
    objectives: [
      "Know what every Excel function does",
      "Immediately identify the right function for a problem",
      "Revise by category (financial, text, lookup, maths…)",
    ],
    audience: [
      "Analysts, controllers and accountants",
      "Candidates for Excel certifications",
    ],
    topics: [
      "Financial functions",
      "Lookup and reference",
      "Text, dates, logic",
      "Maths and statistics",
    ],
    structure: ["Functions A → Z"],
  },
  "excel-mos-mo200": {
    title: "Excel certification MO-200 — 881 questions",
    shortDescription:
      "881 practice questions for the Excel Associate certification (MO-200): corrected and explained MCQs, page-referenced. Cards in English.",
    description: [
      "Intensive preparation for the Microsoft Office Specialist Excel Associate certification (MO-200): 881 cards in English in MCQ format with the correct answer and its explanation — conditional formatting, charts, sparklines, data management.",
      "The question → explained answer format helps you understand the logic of the exam, not just memorise it.",
    ],
    objectives: [
      "Cover the MO-200 exam objectives",
      "Practise on corrected and explained MCQs",
      "Spot your gaps before booking the exam",
    ],
    audience: [
      "MO-200 certification candidates",
      "Students putting Excel on their CV",
    ],
    topics: ["Conditional formatting", "Charts and sparklines", "Data management", "Formulas"],
    structure: ["Corrected MO-200 MCQs (page-referenced)"],
  },
  "excel-mos-expert-mo201": {
    title: "Excel Expert MO-201 — 831 questions",
    shortDescription:
      "831 questions for the Excel Expert certification (MO-201): macros, advanced functions, data analysis — corrected and explained. Cards in English.",
    description: [
      "The Expert level of the Microsoft certification: 831 cards in English covering macros and macro recording, the VBA editor, advanced functions and data analysis — every question corrected, explained and page-referenced.",
      "The logical sequel to MO-200, to make Excel a genuine professional differentiator.",
    ],
    objectives: [
      "Cover the MO-201 exam objectives",
      "Master macros, basic VBA and advanced functions",
      "Sit the exam with systematic preparation",
    ],
    audience: ["MO-201 certification candidates", "Advanced Excel users"],
    topics: ["Macros and VBA", "Advanced functions", "Data analysis", "Templates and formula auditing"],
    structure: ["Corrected MO-201 MCQs (page-referenced)"],
  },

  // --------------------------------------------------- Prépa & languages
  "ecs-hgg-siecle-des-exces-reperes": {
    title: "History & geopolitics — 536 chronological landmarks (19th–20th c.)",
    shortDescription:
      "536 date → event cards in French covering the 19th and 20th centuries: the chronological skeleton of your history essays.",
    description: [
      "A massive, systematic chronology: 536 date → event cards, from the opening of the Suez Canal (1869) to the end of the 20th century, taking in crises, innovations and geopolitical turning points.",
      "Exact landmarks are what separates a good paper from an average one: this deck installs them durably, through spaced repetition, across the two years of prépa. The cards are written in French.",
    ],
    objectives: [
      "Memorise 536 structuring dates of the 19th and 20th centuries",
      "Date precisely the events you use in essays",
      "Build a solid mental timeline of the contemporary world",
    ],
    audience: [
      "French prépa ECG students (history and geopolitics)",
      "Candidates for IEP entrance exams and teaching competitions",
    ],
    topics: [
      "Industrialisation and globalisations",
      "Crises and conflicts",
      "Innovation and society",
    ],
    structure: ["Chronological landmarks, 19th–20th centuries"],
  },
  "ecs-anglais-theme-grammatical": {
    title: "French → English translation drills — 500 sentences",
    shortDescription:
      "500 translation sentences from French into English, each built around the grammar point that earns marks in competitive exams.",
    description: [
      "The flagship exercise of French language exam preparation: 500 sentences to translate, each built around a precise grammar point (tenses, modals, idiomatic structures), with its reference translation.",
      "Drilled through spaced repetition, these 500 sentences install translation reflexes — exactly what examiners reward. Cards are bilingual: French prompt, English answer.",
    ],
    objectives: [
      "Automate the grammatical structures of the exercise",
      "Eliminate the classic mistakes French speakers make in English",
      "Gain speed and confidence on exam day",
    ],
    audience: [
      "French prépa students (business and humanities)",
      "IEP entrance exam candidates",
    ],
    topics: ["Tense and aspect", "Modals", "Idiomatic structures"],
    structure: ["Graded translation sentences"],
  },
  "espagnol-vocabulaire-essentiel-3000": {
    title: "Essential Spanish vocabulary — 3,000 phrases · 9,000 words",
    shortDescription:
      "12,491 two-way cards (24,943 in total) covering the whole Spanish lexicon in 41 thematic chapters. Text-only version, no audio. French ⇄ Spanish.",
    description: [
      "The most complete Spanish vocabulary deck in the catalogue: 12,491 entries organised in 41 thematic chapters — thought and feelings, body and health, school and university, business, economics, media, environment, history… Each entry is two-way: Spanish is prompted from French and vice versa, for 24,943 cards in total.",
      "Entries group related words and phrases (“pensar, opinar, creer” → “to think”), with opposites and nuances (“preocupado ≠ despreocupado”), which builds an organised lexicon rather than a flat list.",
      "Lightened text version: the audio files from the original have been removed for a light import (under 8 MB) — every card is preserved. Note that the prompts are in French.",
    ],
    objectives: [
      "Build a broad, organised Spanish vocabulary",
      "Work both translation directions",
      "Cover every lexical field of exams and daily life",
    ],
    audience: [
      "French prépa students (first and second language Spanish)",
      "Intermediate to advanced learners of Spanish",
    ],
    topics: [
      "41 thematic chapters",
      "Two-way ES ⇄ FR cards",
      "Synonyms, opposites and nuances",
    ],
    structure: [
      "41 thematic chapters (thought, body, health, school, economics, media…)",
    ],
  },
  "ecs-espagnol-theme-systematique": {
    title: "Systematic French → Spanish translation — 900 sentences",
    shortDescription:
      "900 translation sentences from French into Spanish to systematise the grammar and turns of phrase expected in competitive exams.",
    description: [
      "The Spanish counterpart of the grammar translation drill, and even larger: 900 French → Spanish sentences systematically covering the structures (subjunctive, idiomatic turns, prepositions) that trip candidates up.",
      "Deep practice that turns learned grammar into translation reflexes. Cards are bilingual: French prompt, Spanish answer.",
    ],
    objectives: [
      "Systematise Spanish grammar through translation",
      "Automate the expected idiomatic turns",
      "Secure both written and oral exams",
    ],
    audience: [
      "French prépa students (first and second language Spanish)",
      "IEP entrance exam candidates",
    ],
    topics: ["Subjunctive and sequence of tenses", "Idiomatic turns", "Prepositions and government"],
    structure: ["Systematic translation sentences"],
  },
  "latin-vocabulaire": {
    title: "Latin vocabulary — 733 words",
    shortDescription:
      "733 Latin vocabulary cards with declensions and genders: the core lexicon of the classical texts. Latin → French.",
    description: [
      "Fundamental Latin vocabulary: 733 entries presented with their declension pattern and gender (agricola, ae, m.), exactly as you need to know them for translation.",
      "A tool for Latin students from secondary school upwards, and for anyone who loves the ancient languages. Note that the translations are given in French.",
    ],
    objectives: [
      "Memorise core Latin vocabulary with declensions",
      "Translate classical texts more fluently",
      "Revise efficiently for school and university exams",
    ],
    audience: [
      "Secondary school and university Latin students",
      "Candidates for humanities competitive exams",
    ],
    topics: ["Nouns and declensions", "Common verbs", "Lexicon of the classical texts"],
    structure: ["Core Latin vocabulary"],
  },
  "vietnamien-lexique-fr-vi": {
    title: "Vietnamese lexicon — 3,754 entries FR ⇄ VI",
    shortDescription:
      "A complete learner's dictionary: 3,754 French → Vietnamese cards, from everyday expressions to advanced vocabulary.",
    description: [
      "One of the most complete Vietnamese lexicons available in Anki format: 3,754 French → Vietnamese entries covering everyday expressions (“at every moment”, “next to…”) through to advanced vocabulary.",
      "The ideal long-term tool to build a rich vocabulary alongside a course or method. Prompts are in French.",
    ],
    objectives: [
      "Build an extensive Vietnamese vocabulary",
      "Revise daily with spaced repetition",
      "Move vocabulary from passive to active",
    ],
    audience: [
      "Learners of Vietnamese at any level",
      "Families and long-stay travellers",
    ],
    topics: ["Everyday expressions", "Thematic vocabulary", "Advanced lexicon"],
    structure: ["FR ⇄ VI lexicon"],
  },
  "vietnamien-assimil": {
    title: "Vietnamese — 2,007 annotated sentences",
    shortDescription:
      "2,007 Vietnamese → French sentences with detailed grammar notes: learning the language through complete sentences.",
    description: [
      "Learning through sentences: 2,007 Vietnamese → French cards, each with its literal translation and detailed grammar notes (question formation, particles, registers).",
      "This sentence-based approach develops an intuition for syntax that no word list can give. The natural complement to the FR ⇄ VI lexicon. Translations and notes are in French.",
    ],
    objectives: [
      "Internalise Vietnamese syntax through sentences",
      "Understand constructions thanks to the grammar notes",
      "Develop comprehension and expression in parallel",
    ],
    audience: [
      "Beginner to intermediate learners",
      "Self-taught learners looking for a structured progression",
    ],
    topics: ["Everyday sentences", "Grammar notes", "Literal translations"],
    structure: ["Annotated VI → FR sentences"],
  },

  // ---------------------------------------------------- General knowledge
  "geographie-departements-de-france": {
    title: "Départements of France — 180 cards",
    shortDescription:
      "Number ⇄ département, built on French open data: the 01 → Ain, 02 → Aisne reflex, finally acquired for good. Cards in French.",
    description: [
      "Built on official open data (data.gouv.fr): 180 cards pairing each département number with its name, plus location cards.",
      "A classic of French administrative competitive exams, of quizzes — and of everyday life. The cards are in French.",
    ],
    objectives: [
      "Match every number to its département without hesitating",
      "Place the départements on the map",
    ],
    audience: [
      "Candidates for French administrative competitive exams",
      "Quiz enthusiasts and the merely curious",
    ],
    topics: ["Numbers and names", "Location"],
    structure: ["Départements (open data)"],
  },
  "geographie-regions-de-france": {
    title: "Regions of France — 12 cards",
    shortDescription:
      "The regions of metropolitan France as cards, built on French open data. Cards in French.",
    description: [
      "France's regional map in one short deck, built on official open data (data.gouv.fr).",
      "Best combined with the départements deck for a complete mental map of France. The cards are in French.",
    ],
    objectives: [
      "Know the metropolitan regions",
      "Complete your mental map of France",
    ],
    audience: ["Competitive exam candidates", "The curious"],
    topics: ["Metropolitan regions"],
    structure: ["Regions (open data)"],
  },
  "geographie-etats-capitales-monde": {
    title: "Countries and capitals of the world — 197 cards",
    shortDescription:
      "197 country → capital cards, from Afghanistan → Kabul to Zimbabwe → Harare, built on public data. Cards in French.",
    description: [
      "Every country in the world and its capital: 197 country → capital cards built on public data.",
      "The bedrock of geopolitical general knowledge — useful in exams, in interviews and in daily life. Country and capital names are given in French.",
    ],
    objectives: [
      "Know the capital of every country",
      "Consolidate your geopolitical general knowledge",
    ],
    audience: [
      "Prépa and political science students",
      "Competitive exam and quiz candidates",
    ],
    topics: ["World capitals"],
    structure: ["Countries and capitals"],
  },
  "geographie-paris-arrondissements": {
    title: "The arrondissements of Paris — 19 visual cards",
    shortDescription:
      "Place every Paris arrondissement on the map: 19 visual location cards. Cards in French.",
    description: [
      "A visual deck: each card shows the map of Paris and asks you to place an arrondissement, built on French open data.",
      "Perfect for newcomers to Paris, for drivers, for competitive exams — and for your pride at dinner parties.",
    ],
    objectives: [
      "Place every arrondissement instantly",
      "Memorise the Parisian spiral",
    ],
    audience: ["Newcomers to Paris", "The curious"],
    topics: ["Arrondissements", "Location cards"],
    structure: ["Visual cards (open data)"],
  },
  "geographie-world-heritage-list": {
    title: "UNESCO World Heritage — 2,496 cards",
    shortDescription:
      "The World Heritage list as cards: 2,496 sites → country, from Antigua Naval Dockyard to the Ohrid region. Cards in French.",
    description: [
      "The entire World Heritage list as site → country cards: 2,496 entries covering cultural and natural heritage worldwide.",
      "A long-haul journey through general knowledge that turns every review session into a discovery. Site and country names are given in French.",
    ],
    objectives: [
      "Match the great sites to their country",
      "Build a global heritage culture",
    ],
    audience: [
      "Lovers of general knowledge and travel",
      "Competitive exam and quiz candidates",
    ],
    topics: ["Cultural sites", "Natural sites", "Transboundary sites"],
    structure: ["The World Heritage list"],
  },

  // --------------------------------------------------- Physics & chemistry
  "iupac-periodic-table": {
    title: "IUPAC periodic table — 118 elements",
    shortDescription:
      "The 118 chemical elements: number, symbol, name and atomic weight, from IUPAC/CIAAW 2024 data. Cards in French.",
    description: [
      "The complete periodic table as cards, built on official IUPAC/CIAAW data (Abridged Standard Atomic Weights 2024): atomic number, symbol, name and atomic weight of every element.",
      "For science students, teachers — and anyone who wants to finally remember past oxygen. Element names are given in French; symbols and figures are universal.",
    ],
    objectives: [
      "Match number, symbol and name for every element",
      "Memorise the common atomic weights",
    ],
    audience: ["Chemistry students at school and university", "Teachers and the curious"],
    topics: ["118 elements", "IUPAC/CIAAW 2024 data"],
    structure: ["Elements 1 → 118"],
  },
};
