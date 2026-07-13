/**
 * Exporte le catalogue en JSON pour les outils externes
 * (ex. scripts/build-demo-apkg.py). Usage : npx tsx scripts/export-decks-json.ts <sortie.json>
 */
import { writeFileSync } from "node:fs";
import { allDecks } from "../content/decks";

const outPath = process.argv[2];
if (!outPath) {
  console.error("Usage : tsx scripts/export-decks-json.ts <sortie.json>");
  process.exit(1);
}

writeFileSync(outPath, JSON.stringify(allDecks, null, 2));
console.log(`${allDecks.length} decks exportés vers ${outPath}`);
