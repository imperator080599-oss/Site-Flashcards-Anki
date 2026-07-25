import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Newsreader } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import {
  alternatesFor,
  htmlLang,
  locales,
  ogLocale,
  path,
  type Locale,
  type RouteKey,
} from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

/**
 * Racine partagée par les deux langues.
 *
 * Chaque langue a son propre layout racine (groupes `(fr)` et `(en)`) afin de
 * porter le bon attribut `lang` sur `<html>` : c'est ce qui permet aux
 * lecteurs d'écran de prononcer correctement la page et à Google d'identifier
 * la langue sans ambiguïté.
 */
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteDescription: Record<Locale, string> = {
  fr: "Decks Anki premium pour la prépa ECG, le DCG, le DSCG, le CFA, l'Investment Banking, la Financial Due Diligence, Excel et les langues. Apprenez plus vite grâce à la répétition espacée.",
  en: "Premium Anki decks for French prépa, DCG, DSCG, CFA, investment banking, financial due diligence, Excel and languages. Learn faster with spaced repetition.",
};

const siteTagline: Record<Locale, string> = {
  fr: "Decks Anki premium pour apprendre plus vite",
  en: "Premium Anki decks to learn faster",
};

export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — ${siteTagline[locale]}`,
      template: `%s — ${SITE_NAME}`,
    },
    description: siteDescription[locale],
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      siteName: SITE_NAME,
      url: absoluteUrl(path("home", locale)),
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Balises `hreflang` d'une page : chaque langue déclare l'URL de son
 * équivalent, plus un `x-default` pointant vers le français.
 */
export function languageAlternates(
  key: RouteKey
): Record<string, string> {
  const paths = alternatesFor(key);
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[htmlLang[l]] = absoluteUrl(paths[l]);
  }
  languages["x-default"] = absoluteUrl(paths.fr);
  return languages;
}

/** Alternates d'une page dynamique (deck ou catégorie), à partir des chemins. */
export function languageAlternatesFor(
  paths: Record<Locale, string>
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[htmlLang[l]] = absoluteUrl(paths[l]);
  }
  languages["x-default"] = absoluteUrl(paths.fr);
  return languages;
}

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={htmlLang[locale]}>
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          {t(locale).skipToContent}
        </a>
        <Header locale={locale} />
        <main id="contenu" className="min-h-[60vh]">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
