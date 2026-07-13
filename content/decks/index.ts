/**
 * Registre des decks. Pour ajouter un deck :
 *   1. Créer `content/decks/<slug>.ts` (copier un deck existant comme modèle).
 *   2. L'importer et l'ajouter au tableau ci-dessous.
 *   3. `npm run sync-decks` pour pousser prix et statut vers Supabase.
 */
import type { Deck } from "../types";

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
