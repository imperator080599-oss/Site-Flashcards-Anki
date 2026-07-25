-- Titre anglais des decks.
--
-- Affiché sur la page de paiement Stripe et dans la confirmation de commande
-- lorsque l'acheteur navigue sur la version anglaise du site (/en/).
-- Colonne nullable : en son absence, le backend retombe sur `title`
-- (français), ce qui garantit qu'un deck ajouté sans traduction reste
-- vendable.
alter table public.decks add column if not exists title_en text;

comment on column public.decks.title_en is
  'Titre anglais affiché à l''achat quand locale = en. Null => repli sur title.';

update decks d set title_en = v.t
from (values
  ("dscg-ue2-finance-manuel-3e-edition", "DSCG Unit 2 Finance \u2014 the whole syllabus in 3,977 cards"),
  ("dscg-ue4-comptabilite-audit-132-flashcards", "DSCG Unit 4 Accounting & Audit \u2014 128 summary cards"),
  ("dscg-ue6-anglais-des-affaires-manuel", "DSCG Unit 6 Business English \u2014 3,435 cards"),
  ("accounting-pcg-anc-2014-03-v2026", "French chart of accounts 2026 \u2014 837 accounts"),
  ("referentiel-ifrs-cncc", "The IFRS framework \u2014 the objective of every standard (42 cards)"),
  ("ifrs9-financial-instruments", "IFRS 9 Financial Instruments \u2014 691 cards"),
  ("ifrs9-hedge-accounting-in-practice", "IFRS 9 Hedge accounting \u2014 409 cards"),
  ("ratios-financiers-hec-montreal", "Financial ratios \u2014 28 key ratios"),
  ("investment-banking-valuation-lbo-ma-ipo", "Investment Banking \u2014 Valuation, LBO, M&A, IPO (2,330 cards)"),
  ("fdd-interview-preparation-pack", "FDD Interview Pack \u2014 284 cards"),
  ("fdd-tas", "Transaction Services \u2014 vocabulary and concepts (51 cards)"),
  ("excel-keyboard-shortcuts", "Excel \u2014 192 keyboard shortcuts"),
  ("excel-functions-alphabetical", "Excel \u2014 all 515 functions"),
  ("excel-mos-mo200", "Excel certification MO-200 \u2014 881 questions"),
  ("excel-mos-expert-mo201", "Excel Expert MO-201 \u2014 831 questions"),
  ("ecs-hgg-siecle-des-exces-reperes", "History & geopolitics \u2014 536 chronological landmarks (19th\u201320th c.)"),
  ("ecs-anglais-theme-grammatical", "French \u2192 English translation drills \u2014 500 sentences"),
  ("espagnol-vocabulaire-essentiel-3000", "Essential Spanish vocabulary \u2014 3,000 phrases \u00b7 9,000 words"),
  ("ecs-espagnol-theme-systematique", "Systematic French \u2192 Spanish translation \u2014 900 sentences"),
  ("latin-vocabulaire", "Latin vocabulary \u2014 733 words"),
  ("vietnamien-lexique-fr-vi", "Vietnamese lexicon \u2014 3,754 entries FR \u21c4 VI"),
  ("vietnamien-assimil", "Vietnamese \u2014 2,007 annotated sentences"),
  ("geographie-departements-de-france", "D\u00e9partements of France \u2014 180 cards"),
  ("geographie-regions-de-france", "Regions of France \u2014 12 cards"),
  ("geographie-etats-capitales-monde", "Countries and capitals of the world \u2014 197 cards"),
  ("geographie-paris-arrondissements", "The arrondissements of Paris \u2014 19 visual cards"),
  ("geographie-world-heritage-list", "UNESCO World Heritage \u2014 2,496 cards"),
  ("iupac-periodic-table", "IUPAC periodic table \u2014 118 elements")
) as v(slug, t)
where d.slug = v.slug;
