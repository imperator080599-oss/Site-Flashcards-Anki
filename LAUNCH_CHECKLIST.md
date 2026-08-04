# Checklist de lancement — actions qui vous reviennent

Le site est **en ligne et encaisse réellement** :
https://imperator080599.github.io/Site-Flashcards-Anki/
(déploiement automatique à chaque push sur la branche).

> ## ⚠️ À faire en priorité : votre compte GitHub a été renommé
>
> `imperator080599-oss` est devenu `imperator080599`, donc **l'URL du site a
> changé**. Le dépôt est à jour (canonical, sitemap, hreflang pointent
> désormais vers la nouvelle adresse), mais deux réglages extérieurs au code
> doivent être repris, sinon :
>
> 1. **Le paiement échoue depuis la nouvelle URL.** La fonction
>    `create-checkout` n'autorise les retours de paiement que vers une liste
>    d'adresses, et celle qui est déployée contient encore l'ancienne.
>    **Correctif sans redéploiement** : Supabase → Edge Functions → Secrets →
>    ajoutez `SITE_URL` avec la valeur
>    `https://imperator080599.github.io/Site-Flashcards-Anki,https://imperator080599-oss.github.io/Site-Flashcards-Anki`
>    (les deux adresses, séparées par une virgule, sans slash final).
> 2. **Google Search Console suit l'ancienne adresse.** Ajoutez une nouvelle
>    propriété « Préfixe d'URL » sur
>    `https://imperator080599.github.io/Site-Flashcards-Anki/`, revérifiez
>    (le fichier `google1848307294717ee0.html` est toujours servi), puis
>    soumettez à nouveau `sitemap.xml`.
>
> Tant que le point 1 n'est pas fait, **testez un achat** avant de
> communiquer sur le site.

> **État au 20/07/2026** : Stripe est en mode **live** — la clé `sk_live_…`
> et le secret du webhook live (`we_1TvLnwDM4eYIOmUoxceSQO0K`, événements
> `checkout.session.completed` + `checkout.session.async_payment_succeeded`)
> sont stockés dans la table `app_config` (verrouillée par RLS, lue
> uniquement par les Edge Functions). L'ancien webhook de test a été
> supprimé. 28 des 29 decks Drive sont dans le bucket `deck-files` sous
> `drive/` ; « Espagnol 3000 phrases » y est en version texte allégée
> (7,9 Mo au lieu de 327 Mo). Seul « mathkang » (208 Mo) reste hors ligne —
> le plan gratuit de Supabase limite chaque fichier à 50 Mo.
>
> **Hygiène de sécurité recommandée** : la clé live a transité par le chat.
> Quand vous voulez, faites-la tourner (Dashboard Stripe → Clés API →
> « Roll key ») puis mettez à jour la valeur dans Supabase → SQL Editor :
> `update app_config set value = 'sk_live_NOUVELLE' where key = 'STRIPE_SECRET_KEY';`
> (le webhook et son secret ne changent pas).

## 1. Activer les paiements Stripe (~15 min) — ✅ FAIT (mode test)

1. Créez un compte sur https://stripe.com (ou connectez-vous) et activez-le
   (informations d'entreprise + coordonnées bancaires).
2. Dashboard Stripe → **Developers → API keys** : copiez la **clé secrète**
   (`sk_test_…` pour tester, `sk_live_…` pour encaisser).
3. Dashboard Stripe → **Developers → Webhooks → Add endpoint** :
   - URL : `https://idefatdlpdqlcshakejp.supabase.co/functions/v1/stripe-webhook`
   - Événements : `checkout.session.completed` et
     `checkout.session.async_payment_succeeded`
   - Copiez le **signing secret** (`whsec_…`).
4. https://supabase.com/dashboard/project/idefatdlpdqlcshakejp/functions/secrets :
   ajoutez :
   - `STRIPE_SECRET_KEY` = votre `sk_…`
   - `STRIPE_WEBHOOK_SECRET` = votre `whsec_…`
5. Testez en mode test : achetez un deck avec la carte `4242 4242 4242 4242`
   (date future, CVC libre). Vous devez arriver sur la page « Merci » avec
   un lien de téléchargement fonctionnel.

## 2. Téléverser les fichiers des decks (~5 min) — ✅ FAIT

1. https://supabase.com/dashboard/project/idefatdlpdqlcshakejp/storage/buckets/deck-files
2. Téléversez un fichier `.apkg` par deck, nommé exactement `<slug>.apkg`
   (ex. `dcg-ue9-comptabilite.apkg`). Pour générer les fichiers de
   démonstration actuels :
   ```bash
   npm install && pip3 install genanki
   npx tsx scripts/export-decks-json.ts /tmp/decks.json
   python3 scripts/build-demo-apkg.py /tmp/decks.json dist-decks/
   ```
   puis téléversez le contenu de `dist-decks/`.

## 3. Compléter les informations légales — ✅ FAIT

Identité de l'éditeur/vendeur, SIREN, TVA (art. 293 B), directeur de la
publication, responsable du traitement, adresse de l'établissement
(92500 Rueil-Malmaison) et médiateur de la consommation (CM2C,
14 rue Saint-Jean, 75017 Paris — cm2c.net) sont renseignés. Plus aucun
bloc « [À COMPLÉTER : …] » sur le site.

Deux points de vigilance :

- **Adhésion CM2C** : afficher le médiateur ne suffit pas, il faut être
  effectivement adhérent (convention signée, cotisation annuelle) —
  vérifiez que votre adhésion est active sur cm2c.net.
- **Adresse** : les mentions légales exigent en principe l'adresse
  complète de l'établissement (n° et rue). Complétez-la quand vous le
  souhaitez.

## 4. Vérifications finales (~10 min)

- [x] Passer les clés Stripe en mode **live** — fait le 20/07/2026
      (session de paiement live vérifiée de bout en bout)
- [ ] **Premier achat réel** : achetez vous-même un petit deck (4,90 €)
      avec une vraie carte — paiement → page « Merci » → téléchargement →
      import dans Anki. C'est le seul test qui valide toute la chaîne en
      conditions réelles (vous pouvez ensuite vous rembourser depuis le
      Dashboard Stripe, sans frais).
- [ ] E-mail de reçu Stripe bien reçu (activez les reçus : Dashboard →
      Settings → Emails → « Successful payments »)
- [ ] Lien de téléchargement : réutilisable, puis expire comme prévu

## 5. Finaliser la version anglaise côté serveur (~5 min)

Le site est bilingue et pleinement fonctionnel en l'état : un acheteur
anglophone peut acheter et télécharger normalement. Restent deux finitions
qui demandent un accès en écriture au projet Supabase — le code est écrit et
versionné, il n'attend que d'être appliqué :

1. **Migration** : exécutez `supabase/migrations/0003_deck_title_en.sql` dans
   https://supabase.com/dashboard/project/idefatdlpdqlcshakejp/sql
   (ajoute la colonne `title_en` et y écrit les 28 titres anglais).
2. **Fonctions** : redéployez `create-checkout`, `confirm-order` et
   `download` depuis `supabase/functions/` (Dashboard → Edge Functions, ou
   `supabase functions deploy <nom>`).

Effet : la page de paiement Stripe s'affiche en anglais avec le titre du deck
en anglais, la confirmation reprend ce titre, et les pages d'erreur de
téléchargement (lien expiré, quota atteint) sont traduites. Sans cette
étape, ces trois écrans restent en français — le reste du parcours anglais
fonctionne déjà.

## 6. Optionnel, quand vous voulez

- **Hébergement Vercel** (URL plus courte, sans sous-chemin) : dans votre
  dashboard Vercel, projet `rappel-anki` → Settings → Git → connectez le
  dépôt GitHub `Site-Flashcards-Anki`. Vercel déploiera alors à chaque push,
  comme GitHub Pages.

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
