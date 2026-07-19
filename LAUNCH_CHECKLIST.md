# Checklist de lancement — actions qui vous reviennent

Le site est **en ligne** : https://imperator080599-oss.github.io/Site-Flashcards-Anki/
(déploiement automatique à chaque push sur la branche). Il est en mode
« pré-ouverture » : bouton d'achat actif, paiement répondant « pas encore
activé » tant que Stripe n'est pas branché. Voici, dans l'ordre, ce qu'il
vous reste à faire.

> **État au 19/07/2026** : les étapes 1 (Stripe, en mode **test**) et 2
> (fichiers des decks) sont **faites**. La clé `sk_test_…` et le secret du
> webhook (`we_1TuxeyDQg5fciZAs1GKfajgh`) sont stockés dans la table
> `app_config` (verrouillée par RLS, lue uniquement par les Edge Functions).
> 27 de vos 29 decks Drive sont dans le bucket `deck-files` sous `drive/` ;
> les 2 fichiers trop volumineux pour l'import automatique (« Espagnol 3000
> phrases », 327 Mo, et « mathkang », 208 Mo) restent à glisser-déposer dans
> le bucket si besoin. Pour passer en production : remplacez la valeur
> `STRIPE_SECRET_KEY` dans `app_config` par votre clé `sk_live_…` et créez un
> webhook live (mêmes événements). Pensez à faire tourner la clé de test qui
> a transité par le chat.

## 1. Activer les paiements Stripe (~15 min) — ✅ FAIT (mode test)

1. Créez un compte sur https://stripe.com (ou connectez-vous) et activez-le
   (informations d'entreprise + coordonnées bancaires).
2. Dashboard Stripe → **Developers → API keys** : copiez la **clé secrète**
   (`sk_test_…` pour tester, `sk_live_…` pour encaisser).
3. Dashboard Stripe → **Developers → Webhooks → Add endpoint** :
   - URL : `https://qgmtqxnopnffzcnigcpv.supabase.co/functions/v1/stripe-webhook`
   - Événements : `checkout.session.completed` et
     `checkout.session.async_payment_succeeded`
   - Copiez le **signing secret** (`whsec_…`).
4. https://supabase.com/dashboard/project/qgmtqxnopnffzcnigcpv/functions/secrets :
   ajoutez :
   - `STRIPE_SECRET_KEY` = votre `sk_…`
   - `STRIPE_WEBHOOK_SECRET` = votre `whsec_…`
5. Testez en mode test : achetez un deck avec la carte `4242 4242 4242 4242`
   (date future, CVC libre). Vous devez arriver sur la page « Merci » avec
   un lien de téléchargement fonctionnel.

## 2. Téléverser les fichiers des decks (~5 min) — ✅ FAIT

1. https://supabase.com/dashboard/project/qgmtqxnopnffzcnigcpv/storage/buckets/deck-files
2. Téléversez un fichier `.apkg` par deck, nommé exactement `<slug>.apkg`
   (ex. `dcg-ue9-comptabilite.apkg`). Pour générer les fichiers de
   démonstration actuels :
   ```bash
   npm install && pip3 install genanki
   npx tsx scripts/export-decks-json.ts /tmp/decks.json
   python3 scripts/build-demo-apkg.py /tmp/decks.json dist-decks/
   ```
   puis téléversez le contenu de `dist-decks/`.

## 3. Compléter les informations légales (obligatoire avant encaissement)

Remplacez les blocs « [À COMPLÉTER : …] » (affichés en rouge) dans :

- `app/mentions-legales/page.tsx` — identité de l'éditeur, SIREN/SIRET,
  TVA, directeur de la publication
- `app/cgv/page.tsx` — identité du vendeur, médiateur de la consommation
- `app/confidentialite/page.tsx` — responsable du traitement

Puis commit + push (le site se redéploie tout seul).

## 4. Vérifications finales (~10 min)

- [ ] Achat test complet (paiement test → téléchargement → import dans Anki)
- [ ] E-mail de reçu Stripe bien reçu
- [ ] Lien de téléchargement : réutilisable, puis expire comme prévu
- [ ] Passer les clés Stripe en mode **live** quand tout est validé

## 5. Optionnel, quand vous voulez

- **Hébergement Vercel** (URL plus courte, sans sous-chemin) : dans votre
  dashboard Vercel, projet `rappel-anki` → Settings → Git → connectez le
  dépôt GitHub `Site-Flashcards-Anki`. Vercel déploiera alors à chaque push,
  comme GitHub Pages. (Le script `scripts/fetch-content.mjs` était un
  mécanisme de dépannage, il n'est plus nécessaire.)

- **Domaine personnalisé** : Settings → Pages du dépôt GitHub → Custom
  domain ; puis mettez à jour `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_BASE_PATH`
  dans `.github/workflows/deploy.yml` et ajoutez le secret `SITE_URL` aux
  Edge Functions.
- **Nom de marque** : remplacez « Rappel » dans `lib/site.ts`.
- **Vrais decks** : remplacez les decks de démonstration (retirez
  `demo: true`, mettez les vrais contenus et fichiers) — voir README,
  section « Gestion du catalogue ».
- **E-mail pro** : `NEXT_PUBLIC_CONTACT_EMAIL` dans le workflow (actuellement
  votre Gmail).
