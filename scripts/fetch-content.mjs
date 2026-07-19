// Récupère les sources du site depuis la table de transfert Supabase
// (`bootstrap_files`) au moment du build Vercel. Mécanisme de déploiement
// utilisé lorsque le dépôt Git n'est pas accessible ; les fichiers sont
// vérifiés par empreinte md5 côté staging avant chaque déploiement.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const URL =
  "https://qgmtqxnopnffzcnigcpv.supabase.co/rest/v1/bootstrap_files?select=path,data&order=path.asc";
// Clé « anon » publique par conception.
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnbXRxeG5vcG5mZnpjbmlnY3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NjM1MjcsImV4cCI6MjA5OTUzOTUyN30.52VB2_oc-OO0n_J4eXzaM6NeWBvh6oAdt0TKmoaLI7k";

const res = await fetch(URL, {
  headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
});
if (!res.ok) {
  throw new Error(`Échec de récupération des sources : HTTP ${res.status}`);
}
const files = await res.json();
if (!Array.isArray(files) || files.length < 52) {
  throw new Error(
    `Sources incomplètes : ${Array.isArray(files) ? files.length : 0} fichiers (52 attendus).`
  );
}
for (const { path, data } of files) {
  if (path.includes("..") || path.startsWith("/")) {
    throw new Error(`Chemin refusé : ${path}`);
  }
  mkdirSync(dirname(path) || ".", { recursive: true });
  writeFileSync(path, data);
}
console.log(`${files.length} fichiers sources écrits.`);
