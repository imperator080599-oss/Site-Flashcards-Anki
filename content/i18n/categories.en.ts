import type { Category } from "@/content/types";

/**
 * Traduction anglaise des catégories. Les `slug` et l'ordre d'affichage
 * restent définis dans `content/categories.ts` — seul le texte est traduit.
 */
export type CategoryTranslation = Pick<
  Category,
  "name" | "title" | "lead" | "description"
>;

export const categoriesEn: Record<string, CategoryTranslation> = {
  "prepa-ecg": {
    name: "Prépa ECG",
    title: "Anki decks for the French business-school prépa (ECG)",
    lead: "Lock in the essentials of the ECG syllabus — concepts, thinkers, figures and key dates — without rereading your notes over and over.",
    description:
      "In a French classe préparatoire ECG, the sheer volume to retain in economics, geopolitics, languages and mathematics goes far beyond what rereading can anchor. Our decks break the syllabus into atomic cards designed for spaced repetition: you review each notion just before you would have forgotten it, and you reach the competitive exams on solid foundations.",
  },
  dcg: {
    name: "DCG",
    title: "Anki decks for the DCG (French accounting diploma)",
    lead: "The key notions of every DCG unit, structured so that they stay with you until exam day.",
    description:
      "The DCG requires mastering a large body of definitions, journal entries, tax rules and legal principles. Each deck covers one unit and turns the official syllabus into precise question-and-answer cards, so you can revise efficiently all year and secure the fundamentals on the day.",
  },
  dscg: {
    name: "DSCG",
    title: "Anki decks for the DSCG (French advanced accounting diploma)",
    lead: "Consolidate the technical core of the DSCG — advanced accounting, audit, finance, law — with master's-level cards.",
    description:
      "The DSCG demands both perspective and technical precision. Our decks isolate the points that actually earn marks: standards, consolidation adjustments, audit reasoning and financial mechanisms, phrased so that you can restate them under exam conditions.",
  },
  langues: {
    name: "Languages",
    title: "Anki decks for language learning",
    lead: "Targeted vocabulary and idiomatic structures, learned through spaced repetition — the most effective method there is for lexical memory.",
    description:
      "Vocabulary is the original use case for Anki: spaced repetition is devastatingly effective there. Our language decks favour genuinely useful lexis — current affairs, business language, collocations — with examples in context rather than isolated word lists.",
  },
  excel: {
    name: "Excel",
    title: "Anki decks to master Excel",
    lead: "Shortcuts, functions and modelling reflexes: automate the gestures that make the best analysts fast.",
    description:
      "Excel mastery is a matter of procedural memory: what makes the difference is the shortcuts and functions you use without thinking. These decks drill those reflexes — keyboard navigation, lookup functions, modelling best practice — until they become automatic.",
  },
  "investment-banking": {
    name: "Investment Banking",
    title: "Anki decks for investment banking",
    lead: "The technicals expected in M&A interviews — accounting, valuation, LBO — as question-and-answer drills.",
    description:
      "Investment banking interviews test precise knowledge that must be delivered fast and without hesitation. Our decks cover the classic technical questions — links between the financial statements, valuation methods, LBO mechanics — phrased the way they are asked in interviews, turning preparation into reflex.",
  },
  "transaction-services": {
    name: "Financial Due Diligence",
    title: "Anki decks for financial due diligence",
    lead: "The fundamentals of transaction services: adjusted EBITDA, normalised working capital, net debt — the concepts at the heart of FDD work.",
    description:
      "In transaction services, an analyst's value rests on precise concepts: EBITDA adjustments, working-capital normalisation, debt-like items, closing mechanisms. These decks structure that body of knowledge into rigorous cards, useful both for interviews and for your first engagements.",
  },
  "comptabilite-ifrs": {
    name: "Accounting & IFRS",
    title: "Anki decks for accounting and IFRS",
    lead: "French GAAP chart of accounts, the IFRS framework, IFRS 9: accounting standards turned into cards that actually stick.",
    description:
      "Accounting and international standards rest on precise frameworks you simply have to know: French chart-of-accounts numbers, the objective of each IAS/IFRS standard, the mechanics of IFRS 9. These decks turn those frameworks into systematic revision cards, useful to students and working professionals alike.",
  },
  "culture-generale": {
    name: "General knowledge",
    title: "Anki decks for general knowledge",
    lead: "French départements, world capitals, the UNESCO World Heritage list: the factual landmarks everyone should carry around.",
    description:
      "Some knowledge is simply foundational: the map of France, the world's capitals, the great World Heritage sites. Built on reference open data (Datagouv, UNESCO), these decks anchor those landmarks once and for all — for competitive exams as much as for personal culture.",
  },
  "physique-chimie": {
    name: "Physics & Chemistry",
    title: "Anki decks for physics and chemistry",
    lead: "The periodic table and the core landmarks of the physical sciences, built on reference data.",
    description:
      "The physical sciences rest on a foundation of exact knowledge: elements, symbols, atomic weights. Built on reference data such as IUPAC's, these decks install that foundation through spaced repetition — for school and university students, and for anyone with a scientific turn of mind.",
  },
  cfa: {
    name: "CFA",
    title: "Anki decks for the CFA programme",
    lead: "Formulas, definitions and key concepts from the CFA curriculum, cut into cards that hold up over months of preparation.",
    description:
      "CFA preparation runs over months, and forgetting is the candidate's main enemy. Spaced repetition is particularly well suited: our decks cover the essential formulas and concepts of the curriculum, in English — the language of the exam — so that what will be tested stays anchored.",
  },
};
