# Rappel — boutique de decks Anki

Site e-commerce minimaliste et premium dédié à la vente de decks de
flashcards Anki (prépa ECG, DCG, DSCG, langues, Excel, Investment Banking,
Financial Due Diligence, CFA).

**Production** : https://imperator080599.github.io/Site-Flashcards-Anki/

> « Rappel » est un nom de marque provisoire : tout est centralisé dans
> `lib/site.ts` (`SITE_NAME`) pour le changer en une ligne.

## Stack technique

| Couche | Choix | Rôle |
| --- | --- | --- |
| Frontend | Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 | Site statique exporté (`output: "export"`) |
| Hébergement | GitHub Pages via GitHub Actions | Build + déploiement à chaque push |
| Backend | Supabase (projet `idefatdlpdqlcshakejp`, région Paris) | Postgres, Storage privé, Edge Functions |
| Paiement | Stripe Checkout (page hébergée) | Aucun secret côté client |
| Contenu | Fichiers TypeScript versionnés (`content/`) | « CMS git » : un deck = un fichier |

### Architecture

```
Navigateur ── site statique (GitHub Pages)
   │
   ├─ POST /functions/v1/create-checkout   → prix lu en base, session Stripe
   │        ← URL Stripe Checkout (redirection)
   ├─ Stripe ── webhook → /functions/v1/stripe-webhook (signature vérifiée)
   │                       → commande payée + jeton de téléchargement
   ├─ POST /functions/v1/confirm-order     → vérif session côté Stripe,
   │        ← statut + jeton                 rattrapage si webhook en retard
   └─ GET  /functions/v1/download?token=…  → jeton validé (expiration,
            ← 302 vers URL signée (120 s)     quota) puis URL signée Storage
```

Tables Postgres (RLS activé, **aucune** policy publique — accès uniquement
par les Edge Functions en service_role) :

- `decks` — slug, titre, prix (centimes), chemin du fichier, actif
- `orders` — session Stripe, deck, e-mail, statut (pending/paid/failed)
- `download_tokens` — jeton UUID, expiration (7 j), quota (10 téléchargements)

Le bucket Storage `deck-files` est **privé** ; les fichiers ne sont servis
que via URL signée de 120 secondes émise par la fonction `download`.

## Développement local

```bash
npm install
cp .env.example .env.local   # compléter si besoin
npm run dev                  # http://localhost:3000
```

Commandes :

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (export statique dans `out/`) |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript strict |
| `npm run sync-decks` | Synchronise `content/decks` vers la table `decks` |

## Variables d'environnement

Voir `.env.example`. Les variables `NEXT_PUBLIC_*` sont **publiques**
(embarquées dans le bundle) ; elles sont définies en dur dans le workflow
de déploiement. La clé `SUPABASE_SERVICE_ROLE_KEY` (secrète) n'est utilisée
que par `npm run sync-decks`, en local.

Secrets des Edge Functions (Dashboard Supabase → Edge Functions → Secrets) :

- `STRIPE_SECRET_KEY` — clé secrète Stripe (`sk_live_…` ou `sk_test_…`)
- `STRIPE_WEBHOOK_SECRET` — secret de signature du webhook (`whsec_…`)
- `SITE_URL` — optionnel, défaut : URL GitHub Pages (à définir si domaine personnalisé)

## Gestion du catalogue

### Ajouter un deck

1. Créer `content/decks/<slug>.ts` en copiant un deck existant (type `Deck`
   documenté dans `content/types.ts` : titre, catégorie, prix, description,
   objectifs, cartes d'exemple, structure…).
2. L'enregistrer dans `content/decks/index.ts`.
3. Générer le fichier produit `.apkg` (ou l'exporter depuis Anki), puis le
   téléverser dans le bucket `deck-files` sous le nom `<slug>.apkg`
   (Dashboard Supabase → Storage). Pour les decks de démonstration :
   `npx tsx scripts/export-decks-json.ts /tmp/decks.json && python3 scripts/build-demo-apkg.py /tmp/decks.json dist-decks/`.
4. Synchroniser la base : `npm run sync-decks` (avec `SUPABASE_URL` et
   `SUPABASE_SERVICE_ROLE_KEY` dans l'environnement).
5. Commit + push : le site se redéploie automatiquement.

### Modifier un prix

Changer `priceCents` dans le fichier du deck, puis `npm run sync-decks`
et push. Le prix facturé est **toujours** celui de la base au moment du
paiement.

### Publier / dépublier un deck

Mettre `draft: true` dans le fichier du deck (retiré du site **et**
désactivé à la vente après `sync-decks` + push). Le badge « démo » se
retire avec `demo: false`.

### Ajouter une catégorie

Ajouter une entrée dans `content/categories.ts` : la page catégorie, la
navigation, les filtres et le sitemap la prennent en compte automatiquement.

## Bilingue (français / anglais)

Le français vit à la racine (`/decks/…`), l'anglais sous `/en/` (`/en/decks/…`).
Les deux langues partagent les mêmes `slug`, donc la même fiche produit et la
même ligne en base : seul le texte change.

- **Routage** : `lib/i18n.ts` est la source unique des chemins par langue
  (`path()`, `deckPath()`, `alternatePath()`). Un groupe de routes par langue
  (`app/(fr)`, `app/(en)`) donne à chacune son propre layout racine, donc le
  bon `<html lang>`. Les `hreflang` et le sitemap bilingue en découlent.
- **Interface** : `content/i18n/ui.ts`. Le dictionnaire français fait foi et
  `UiDict` en dérive : oublier une clé anglaise casse la compilation.
- **Contenu** : `content/i18n/decks.en.ts`, `categories.en.ts`, `faq.en.ts`.
  Une traduction absente retombe silencieusement sur le français, donc un
  deck ajouté sans traduction reste vendable.
- **Prose** (méthode, pages légales) : un composant par langue plutôt qu'un
  gabarit à trous — voir `components/views/MethodView.tsx` et `LegalEn.tsx`.
  Les pages légales anglaises portent une clause de primauté du français.

### Langue des cartes

À ne pas confondre avec la langue du site : `cardLanguages` (dans le type
`Deck`) décrit la langue du **contenu des cartes**, par exemple `["en"]` ou
`["fr", "es"]` pour un deck bilingue. Elle alimente le badge des cartes du
catalogue, la ligne « Langue des cartes » de la fiche produit et le filtre du
catalogue ; un deck bilingue apparaît sous chacune de ses deux langues.
C'est une information d'achat : elle doit être exacte.

## Paiement et webhook Stripe

1. Créer le produit côté Stripe n'est **pas** nécessaire : les sessions
   Checkout sont créées dynamiquement avec le prix lu en base.
2. Configurer le webhook : Dashboard Stripe → Developers → Webhooks →
   endpoint `https://idefatdlpdqlcshakejp.supabase.co/functions/v1/stripe-webhook`,
   événement `checkout.session.completed` (+ `checkout.session.async_payment_succeeded`).
3. Copier le `whsec_…` dans les secrets de la fonction (voir plus haut).

La livraison ne dépend pas exclusivement du webhook : la page de merci
vérifie la session directement auprès de Stripe (`confirm-order`), le
webhook servant de second canal.

## Déploiement

Chaque push sur `claude/anki-deck-ecommerce-9nko5v` déclenche
`.github/workflows/deploy.yml` : lint → typecheck → build → déploiement
GitHub Pages, plus un job de smoke-tests du backend. Le déploiement manuel
est possible via « Run workflow » (workflow_dispatch).

Pour un domaine personnalisé : configurer le domaine dans Settings → Pages,
puis mettre à jour `NEXT_PUBLIC_SITE_URL` (et vider `NEXT_PUBLIC_BASE_PATH`)
dans le workflow, et le secret `SITE_URL` des Edge Functions.

## Tests

- `npm run lint` + `npm run typecheck` + build de production dans la CI.
- Smoke-tests navigateur (Playwright) exécutés pendant le développement :
  navigation, recherche, filtres, tri, aperçu recto/verso, checkout
  (états d'erreur), 404, liens internes, mobile.
- Smoke-tests backend dans la CI : réponses contrôlées des 4 Edge Functions.

## Sécurité

- Aucun secret dans le dépôt (la clé « anon » Supabase est publique par
  conception ; RLS refuse tout accès direct aux tables).
- Prix lus exclusivement en base côté serveur.
- Webhook Stripe : signature HMAC vérifiée (tolérance 5 min, comparaison
  en temps constant).
- Fichiers vendus : bucket privé + jeton d'achat (UUID, expiration, quota)
  + URL signée éphémère. Pas d'accès anonyme possible.
- Entrées validées (slug, session Stripe, UUID) ; URLs de retour Checkout
  restreintes au domaine du site.
