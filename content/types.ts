/**
 * Modèle de contenu du catalogue.
 *
 * Le contenu éditorial vit dans le dépôt (`content/`) : ajouter un deck ou
 * une catégorie = ajouter une entrée typée + commit. Les données commerciales
 * (prix, fichier) sont synchronisées vers Supabase via `scripts/sync-decks.mjs`,
 * qui reste la source de vérité côté serveur au moment du paiement.
 */

export interface Category {
  slug: string;
  /** Nom court affiché dans la navigation et les filtres. */
  name: string;
  /** Titre long de la page catégorie. */
  title: string;
  /** Une phrase de positionnement (hero de la page catégorie). */
  lead: string;
  /** Paragraphe(s) de description — page catégorie et SEO. */
  description: string;
  /** Ordre d'affichage. */
  order: number;
}

export interface SampleCard {
  front: string;
  back: string;
  /** Contexte optionnel affiché sous la carte (tag, source…). */
  tag?: string;
}

export interface DeckSection {
  name: string;
  cards: number;
}

export interface DeckFaqItem {
  question: string;
  answer: string;
}

export interface Deck {
  slug: string;
  title: string;
  categorySlug: string;
  /** Sous-catégorie ou épreuve (ex. « UE9 », « Level I »). */
  subcategory?: string;
  /** Niveau lorsque pertinent (ex. « 1re et 2e année », « B2–C1 »). */
  level?: string;
  /** Positionnement en une phrase — cartes catalogue et meta description. */
  shortDescription: string;
  /** Description détaillée (paragraphes). */
  description: string[];
  objectives: string[];
  audience: string[];
  topics: string[];
  cardCount: number;
  /** Prix TTC en centimes d'euro. */
  priceCents: number;
  sampleCards: SampleCard[];
  structure: DeckSection[];
  faq?: DeckFaqItem[];
  featured?: boolean;
  /**
   * Deck de démonstration : affiché avec un badge explicite et vendu comme
   * tel. À retirer (ou passer à `false`) quand les vrais decks sont en ligne.
   */
  demo?: boolean;
  /** Brouillon : jamais listé ni généré. */
  draft?: boolean;
  /** Date de publication ISO (tri « nouveautés » et sitemap). */
  publishedAt: string;
}
