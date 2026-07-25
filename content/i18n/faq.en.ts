import type { AccordionItem } from "@/components/Accordion";

/** FAQ affichée sur la page d'accueil anglaise (sous-ensemble). */
export const homeFaqEn: AccordionItem[] = [
  {
    question: "What is Anki?",
    answer:
      "Anki is free flashcard software built on spaced repetition: it schedules each review at the optimal moment for your memory. It is free on desktop (Windows, macOS, Linux) and Android; the official iOS app, AnkiMobile, is paid.",
  },
  {
    question: "How is my deck delivered after purchase?",
    answer:
      "Immediately after payment you are shown a secure download link, which also remains reachable from your confirmation e-mail. You download an .apkg file, Anki's standard format.",
  },
  {
    question: "How do I install a deck in Anki?",
    answer:
      "Open Anki, then File → Import and select the downloaded .apkg file (or simply double-click the file). The deck appears with its structure and cards, ready to review.",
  },
  {
    question: "Which language are the cards written in?",
    answer:
      "It depends on the deck, and every product page states it explicitly with a badge — “Cards in French”, “Cards in English” or a bilingual pair such as “FR ⇄ ES”. You can also filter the whole catalogue by card language. Many decks in accounting, investment banking and Excel are entirely in English; the French exam decks are, naturally, in French.",
  },
  {
    question: "Are the decks updated?",
    answer:
      "Yes. When a deck is improved (corrections, additions, a syllabus update), the new version is made available through your purchase link.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Decks are digital content delivered immediately: under European law the right of withdrawal no longer applies once the download has started, which you accept at checkout. If a deck does not match its description or you hit a technical problem, contact us — we will find a solution.",
  },
];

/** FAQ complète anglaise (page /en/faq). */
export const fullFaqEn: { section: string; items: AccordionItem[] }[] = [
  {
    section: "Anki and the method",
    items: [
      {
        question: "What is Anki?",
        answer:
          "Anki is free flashcard software built on spaced repetition: it schedules each review at the optimal moment for your memory. It is the reference tool of medical students, competitive exam candidates and language learners.",
      },
      {
        question: "Do I need Anki to use your decks?",
        answer:
          "Yes. Our decks are .apkg files, Anki's native format. Anki is free on Windows, macOS, Linux and Android (AnkiDroid). On iPhone and iPad the official AnkiMobile app is paid; you can also review for free through AnkiWeb in your browser.",
      },
      {
        question: "Why is spaced repetition effective?",
        answer:
          "Because it exploits the spacing effect, one of the most replicated findings in memory research: reviewing information at growing intervals, just before you forget it, produces far more durable retention than massed rereading. Combined with active recall (testing yourself rather than rereading), it is the most efficient memorisation strategy known.",
      },
      {
        question: "How much time does it take each day?",
        answer:
          "Once you are up to speed, 10 to 30 minutes a day is enough for most decks. Anki only shows you the cards that are due, so the daily load stays manageable as long as you are regular.",
      },
    ],
  },
  {
    section: "Card language",
    items: [
      {
        question: "Are the cards in English or in French?",
        answer:
          "Both, depending on the deck — and it is always stated up front. Every deck carries a card-language badge (“Cards in English”, “Cards in French”, or a bilingual pair such as “FR ⇄ EN”), shown on the catalogue card and on the product page. The investment banking, financial due diligence, Excel, IFRS 9 and DSCG business-English decks are written entirely in English. The French exam decks (DSCG finance, French chart of accounts, history and geopolitics) are in French, as are the general-knowledge decks.",
      },
      {
        question: "Can I filter the catalogue by card language?",
        answer:
          "Yes. The catalogue has a “Filter by card language” selector: choose English and you only see decks whose cards are written in English. Bilingual decks appear under each of their two languages.",
      },
      {
        question: "The site is in English — does that change the decks?",
        answer:
          "No. The English site translates the shop: navigation, product descriptions, checkout and legal information. The cards themselves are unchanged, which is exactly why every deck states its card language explicitly.",
      },
    ],
  },
  {
    section: "Buying and delivery",
    items: [
      {
        question: "How will I receive my deck?",
        answer:
          "Payment is by card through Stripe, on a secure payment page. Immediately afterwards you reach a secure download page; the link also appears in the Stripe confirmation e-mail.",
      },
      {
        question: "How do I install the downloaded deck?",
        answer:
          "Open the .apkg file with Anki (double-click, or File → Import). The deck is added to your collection with its structure, tags and all its cards. Your other decks are untouched.",
      },
      {
        question: "Which devices can I use my deck on?",
        answer:
          "Anywhere Anki runs: Windows, macOS, Linux, Android, iOS, and in the browser through AnkiWeb. Create a free AnkiWeb account to sync your progress across devices.",
      },
      {
        question: "My download link has expired, what now?",
        answer:
          "Write to us from the e-mail address you used at purchase and we will send a fresh link. Links are limited in time and in number of downloads to protect the content.",
      },
      {
        question: "Are the decks updated?",
        answer:
          "Yes. Corrections and additions are included: when a new version of a deck you own is published, you can download it again through your purchase link or by contacting us.",
      },
      {
        question: "Which currency do you charge in?",
        answer:
          "All prices are in euros (EUR) and are charged in euros, wherever you buy from. Your bank handles any conversion at its own rate.",
      },
    ],
  },
  {
    section: "Refunds and support",
    items: [
      {
        question: "What is the refund policy?",
        answer:
          "As these are digital contents supplied immediately, the 14-day right of withdrawal ceases to apply as soon as the download starts, with your express agreement given at checkout (article L221-28 of the French Consumer Code). If a deck does not match its description, or a technical problem blocks you, contact us: refund or fix, whichever you prefer.",
      },
      {
        question: "I have a technical problem with a deck.",
        answer:
          "First check that your Anki version is up to date (recent .apkg files need Anki 2.1.50 or later). If the problem persists, write to us describing your device, your Anki version and the error message: we answer quickly.",
      },
      {
        question: "Do you offer licences for schools or companies?",
        answer:
          "Purchases on the site cover individual use. To equip a class, a cohort or a team, contact us for a suitable licence.",
      },
    ],
  },
];
