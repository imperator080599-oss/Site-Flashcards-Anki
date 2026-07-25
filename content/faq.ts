import type { AccordionItem } from "@/components/Accordion";

/** FAQ affichée sur la page d'accueil (sous-ensemble). */
export const homeFaq: AccordionItem[] = [
  {
    question: "Qu'est-ce qu'Anki ?",
    answer:
      "Anki est un logiciel libre de flashcards fondé sur la répétition espacée : il planifie chaque révision au moment optimal pour votre mémoire. Il est gratuit sur ordinateur (Windows, macOS, Linux) et Android ; l'application iOS officielle, AnkiMobile, est payante.",
  },
  {
    question: "Comment est livré mon deck après l'achat ?",
    answer:
      "Immédiatement après le paiement, un lien de téléchargement sécurisé vous est présenté et reste accessible depuis votre e-mail de confirmation. Vous téléchargez un fichier .apkg, le format standard d'Anki.",
  },
  {
    question: "Comment installer un deck dans Anki ?",
    answer:
      "Ouvrez Anki, puis Fichier → Importer et sélectionnez le fichier .apkg téléchargé (ou double-cliquez simplement sur le fichier). Le deck apparaît avec sa structure et ses cartes, prêt à réviser.",
  },
  {
    question: "Les cartes sont-elles en français ou en anglais ?",
    answer:
      "Cela dépend du deck, et c'est toujours indiqué : chaque deck porte un badge de langue des cartes (« Cartes en français », « Cartes en anglais », ou une paire bilingue comme « FR ⇄ ES »), visible dans le catalogue comme sur la fiche produit. Le catalogue est aussi filtrable par langue des cartes. Les decks Investment Banking, FDD, Excel, IFRS 9 et l'anglais des affaires du DSCG sont rédigés en anglais ; les decks de concours français sont en français.",
  },
  {
    question: "Les decks sont-ils mis à jour ?",
    answer:
      "Oui. Lorsqu'un deck est amélioré (corrections, ajouts, mise à jour d'un programme), la nouvelle version est proposée au téléchargement via votre lien d'achat.",
  },
  {
    question: "Puis-je être remboursé ?",
    answer:
      "Les decks sont des contenus numériques livrés immédiatement : conformément au droit européen, le droit de rétractation ne s'applique plus une fois le téléchargement commencé, ce que vous acceptez à la commande. En cas de problème technique ou de deck non conforme à sa description, contactez-nous : nous trouvons une solution.",
  },
];

/** FAQ complète (page /faq). */
export const fullFaq: { section: string; items: AccordionItem[] }[] = [
  {
    section: "Anki et la méthode",
    items: [
      {
        question: "Qu'est-ce qu'Anki ?",
        answer:
          "Anki est un logiciel libre de flashcards fondé sur la répétition espacée : il planifie chaque révision au moment optimal pour votre mémoire. C'est l'outil de référence des étudiants en médecine, des candidats aux concours et des apprenants de langues.",
      },
      {
        question: "Ai-je besoin d'Anki pour utiliser vos decks ?",
        answer:
          "Oui. Nos decks sont des fichiers .apkg, le format natif d'Anki. Anki est gratuit sur Windows, macOS, Linux et Android (AnkiDroid). Sur iPhone/iPad, l'application officielle AnkiMobile est payante ; vous pouvez aussi réviser gratuitement via AnkiWeb dans le navigateur.",
      },
      {
        question: "Pourquoi la répétition espacée est-elle efficace ?",
        answer:
          "Parce qu'elle exploite l'effet d'espacement, un des résultats les plus répliqués de la psychologie de la mémoire : revoir une information à intervalles croissants, juste avant l'oubli, produit un ancrage bien plus durable que des relectures massées. Combinée au rappel actif (se tester plutôt que relire), c'est la stratégie de mémorisation la plus efficiente connue.",
      },
      {
        question: "Combien de temps faut-il y consacrer chaque jour ?",
        answer:
          "En rythme de croisière, 10 à 30 minutes par jour suffisent pour la plupart des decks. Anki ne vous montre que les cartes arrivées à échéance : la charge quotidienne reste maîtrisée si vous êtes régulier.",
      },
    ],
  },
  {
    section: "Langue des cartes",
    items: [
      {
        question: "Les cartes sont-elles en français ou en anglais ?",
        answer:
          "Les deux, selon le deck — et c'est toujours annoncé avant l'achat. Chaque deck porte un badge de langue des cartes (« Cartes en français », « Cartes en anglais », ou une paire bilingue comme « FR ⇄ EN »), affiché sur la carte du catalogue et sur la fiche produit. Les decks Investment Banking, Financial Due Diligence, Excel, IFRS 9 et l'anglais des affaires du DSCG sont rédigés intégralement en anglais. Les decks de concours français (DSCG finance, plan comptable, HGG) et de culture générale sont en français.",
      },
      {
        question: "Puis-je filtrer le catalogue par langue des cartes ?",
        answer:
          "Oui. Le catalogue propose un sélecteur « Filtrer par langue des cartes » : choisissez l'anglais et vous ne voyez que les decks dont les cartes sont en anglais. Les decks bilingues apparaissent sous chacune de leurs deux langues.",
      },
      {
        question: "Le site existe-t-il en anglais ?",
        answer:
          "Oui : une version anglaise complète du site est disponible sous /en/, accessible depuis le sélecteur de langue en haut de page. Elle traduit la boutique (navigation, fiches produit, paiement, informations légales) — le contenu des cartes, lui, reste dans sa langue d'origine, ce qui est précisément la raison d'être du badge de langue.",
      },
    ],
  },
  {
    section: "Achat et livraison",
    items: [
      {
        question: "Comment recevrai-je mon deck ?",
        answer:
          "Le paiement s'effectue par carte via Stripe, sur une page de paiement sécurisée. Immédiatement après, vous accédez à une page de téléchargement sécurisée ; le lien figure aussi dans l'e-mail de confirmation Stripe.",
      },
      {
        question: "Comment installer le deck téléchargé ?",
        answer:
          "Ouvrez le fichier .apkg avec Anki (double-clic, ou Fichier → Importer). Le deck s'ajoute à votre collection avec sa structure, ses tags et l'intégralité des cartes. Vos autres decks ne sont pas affectés.",
      },
      {
        question: "Sur quels appareils puis-je utiliser mon deck ?",
        answer:
          "Partout où Anki fonctionne : Windows, macOS, Linux, Android, iOS, et dans le navigateur via AnkiWeb. Créez un compte AnkiWeb gratuit pour synchroniser votre progression entre appareils.",
      },
      {
        question: "Mon lien de téléchargement a expiré, que faire ?",
        answer:
          "Écrivez-nous avec l'adresse e-mail utilisée lors de l'achat : nous vous renvoyons un lien valide. Les liens sont limités dans le temps et en nombre de téléchargements pour protéger les contenus.",
      },
      {
        question: "Les decks sont-ils mis à jour ?",
        answer:
          "Oui. Les corrections et enrichissements sont inclus : lorsqu'une nouvelle version d'un deck que vous avez acheté paraît, vous pouvez la retélécharger via votre lien d'achat ou en nous contactant.",
      },
    ],
  },
  {
    section: "Remboursement et support",
    items: [
      {
        question: "Quelle est la politique de remboursement ?",
        answer:
          "S'agissant de contenus numériques fournis immédiatement, le droit de rétractation de 14 jours cesse de s'appliquer dès que le téléchargement commence, avec votre accord exprès donné à la commande (article L221-28 du Code de la consommation). En cas de deck non conforme à sa description ou de problème technique bloquant, contactez-nous : remboursement ou correction, selon votre préférence.",
      },
      {
        question: "J'ai un problème technique avec un deck.",
        answer:
          "Vérifiez d'abord que votre version d'Anki est à jour (les .apkg récents nécessitent Anki 2.1.50+). Si le problème persiste, écrivez-nous en décrivant l'appareil, la version d'Anki et le message d'erreur : nous répondons rapidement.",
      },
      {
        question: "Proposez-vous des licences pour les écoles ou les entreprises ?",
        answer:
          "Les achats sur le site couvrent un usage individuel. Pour équiper une classe, une promotion ou une équipe, contactez-nous pour une licence adaptée.",
      },
    ],
  },
];
