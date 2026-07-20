/**
 * Registre des decks. Pour ajouter un deck :
 *   1. L'ajouter dans le fichier `catalogue-<catégorie>.ts` correspondant
 *      (ou créer `content/decks/<slug>.ts` pour un deck isolé).
 *   2. Vérifier qu'il est bien agrégé ci-dessous.
 *   3. Mettre à jour la table `decks` de Supabase (prix, storage_path).
 *
 * Les anciens decks de démonstration restent dans le dépôt avec
 * `draft: true` : ils ne sont ni affichés ni vendables.
 */
import type { Deck } from "../types";

import { decks as catalogueDscg } from "./catalogue-dscg";
import { decks as catalogueComptaIfrs } from "./catalogue-comptabilite-ifrs";
import { decks as catalogueFinance } from "./catalogue-finance";
import { decks as catalogueExcel } from "./catalogue-excel";
import { decks as cataloguePrepaLangues } from "./catalogue-prepa-langues";
import { decks as catalogueCultureGenerale } from "./catalogue-culture-generale";
import { decks as cataloguePhysiqueChimie } from "./catalogue-physique-chimie";

import { deck as eshConceptsFondamentaux } from "./esh-concepts-fondamentaux";
import { deck as geopolitiqueReperes } from "./geopolitique-reperes-essentiels";
import { deck as dcgUe9Comptabilite } from "./dcg-ue9-comptabilite";
import { deck as dscgUe4ComptabiliteAudit } from "./dscg-ue4-comptabilite-audit";
import { deck as anglaisDesAffaires } from "./anglais-des-affaires-b2-c1";
import { deck as espagnolVocabulaireConcours } from "./espagnol-vocabulaire-concours";
import { deck as excelRaccourcisFonctions } from "./excel-raccourcis-fonctions";
import { deck as ibTechnicals } from "./ib-technicals-entretiens";
import { deck as fddFondamentaux } from "./fdd-fondamentaux";
import { deck as cfaLevel1 } from "./cfa-level-1-essentials";

export const allDecks: Deck[] = [
  ...catalogueDscg,
  ...catalogueComptaIfrs,
  ...catalogueFinance,
  ...catalogueExcel,
  ...cataloguePrepaLangues,
  ...catalogueCultureGenerale,
  ...cataloguePhysiqueChimie,
  // Decks de démonstration (draft: true — non listés)
  eshConceptsFondamentaux,
  geopolitiqueReperes,
  dcgUe9Comptabilite,
  dscgUe4ComptabiliteAudit,
  anglaisDesAffaires,
  espagnolVocabulaireConcours,
  excelRaccourcisFonctions,
  ibTechnicals,
  fddFondamentaux,
  cfaLevel1,
];
