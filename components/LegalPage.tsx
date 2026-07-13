import type { ReactNode } from "react";

/**
 * Gabarit des pages légales. Les informations d'identité de l'éditeur sont
 * des espaces réservés « [À COMPLÉTER : …] » à remplacer avant le lancement
 * commercial — voir LAUNCH_CHECKLIST.md.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="container-site py-14 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="heading text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-faint">Dernière mise à jour : {updated}</p>
      </header>
      <div className="prose-site mt-10">{children}</div>
    </div>
  );
}

export function Placeholder({ label }: { label: string }) {
  return (
    <mark className="rounded-xs bg-error-wash px-1.5 py-0.5 font-medium text-error">
      [À COMPLÉTER : {label}]
    </mark>
  );
}
