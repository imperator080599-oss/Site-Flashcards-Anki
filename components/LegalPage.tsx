import type { ReactNode } from "react";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

/** Gabarit commun des pages légales (mentions, CGV, confidentialité). */
export function LegalPage({
  title,
  updated,
  locale = defaultLocale,
  children,
}: {
  title: string;
  updated: string;
  locale?: Locale;
  children: ReactNode;
}) {
  return (
    <div className="container-site py-14 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="heading text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-faint">
          {t(locale).legal.updated} {updated}
        </p>
      </header>
      <div className="prose-site mt-10">{children}</div>
    </div>
  );
}

/**
 * Information légale encore manquante. Volontairement voyante : aucune page
 * ne doit partir en production avec un bloc rouge.
 */
export function Placeholder({ label }: { label: string }) {
  return (
    <mark className="rounded-xs bg-error-wash px-1.5 py-0.5 font-medium text-error">
      [À COMPLÉTER : {label}]
    </mark>
  );
}
