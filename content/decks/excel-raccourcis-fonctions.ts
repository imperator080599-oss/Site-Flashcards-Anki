import type { Deck } from "../types";

export const deck: Deck = {
  slug: "excel-raccourcis-fonctions",
  title: "Excel — Raccourcis et fonctions essentielles",
  categorySlug: "excel",
  level: "Intermédiaire à avancé",
  shortDescription:
    "Travaillez sans souris : les raccourcis Windows et les fonctions indispensables, entraînés jusqu'au réflexe.",
  description: [
    "En finance comme ailleurs, la vitesse sur Excel vient de la mémoire procédurale : les raccourcis et fonctions doivent sortir sans réfléchir. Ce deck entraîne précisément cela, avec des cartes « geste » (quel raccourci pour… ?) et des cartes « fonction » (syntaxe, pièges, cas d'usage).",
    "Les raccourcis couvrent Excel pour Windows — le standard en entreprise. Chaque fonction est présentée avec sa syntaxe exacte et un exemple concret, y compris les pièges classiques (références figées, erreurs #N/A, correspondance approchée).",
  ],
  objectives: [
    "Naviguer, sélectionner et mettre en forme entièrement au clavier",
    "Maîtriser les fonctions de recherche (RECHERCHEX, INDEX/EQUIV) et leurs pièges",
    "Écrire des formules conditionnelles et d'agrégation robustes",
    "Adopter les réflexes de construction propres à la modélisation financière",
  ],
  audience: [
    "Étudiants préparant des stages en finance, audit ou conseil",
    "Analystes voulant passer au « zéro souris »",
    "Contrôleurs de gestion et comptables",
  ],
  topics: [
    "Raccourcis de navigation et de sélection",
    "Mise en forme et manipulation au clavier",
    "Fonctions de recherche et de référence",
    "Fonctions logiques, texte et dates",
    "Bonnes pratiques de modélisation",
  ],
  cardLanguages: ["fr"],
  cardCount: 350,
  priceCents: 1900,
  sampleCards: [
    {
      front: "Raccourci (Windows) : figer/basculer les références dans une formule ($A$1 → A$1 → $A1…) ?",
      back: "F4 — en mode édition de formule, F4 fait défiler les quatre combinaisons d'ancrage de la référence sélectionnée. Réflexe indispensable en modélisation.",
      tag: "Raccourcis",
    },
    {
      front: "Syntaxe de RECHERCHEX (XLOOKUP) et avantage clé sur RECHERCHEV ?",
      back: "=RECHERCHEX(valeur_cherchée ; tableau_recherche ; tableau_renvoyé ; [si_non_trouvé] ; [mode_correspondance] ; [mode_recherche]). Avantages : recherche vers la gauche possible, correspondance exacte par défaut, argument natif si_non_trouvé (plus besoin de SIERREUR).",
      tag: "Fonctions",
    },
    {
      front: "Pourquoi éviter une RECHERCHEV avec 4e argument omis ?",
      back: "L'argument omis vaut VRAI : correspondance approchée sur une plage supposée triée — source silencieuse de résultats faux. Toujours expliciter FAUX (correspondance exacte), ou préférer RECHERCHEX.",
      tag: "Pièges",
    },
  ],
  structure: [
    { name: "Navigation et sélection au clavier", cards: 70 },
    { name: "Mise en forme et manipulation", cards: 60 },
    { name: "Fonctions de recherche et référence", cards: 80 },
    { name: "Fonctions logiques, texte, dates", cards: 90 },
    { name: "Modélisation : réflexes et pièges", cards: 50 },
  ],
  demo: true,
  draft: true,
  publishedAt: "2026-07-08",
};
