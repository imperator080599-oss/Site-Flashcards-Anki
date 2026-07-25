import { ButtonLink } from "@/components/ui/Button";
import { inter, newsreader } from "@/lib/layout";
import { path } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";
import "./globals.css";

/**
 * 404 globale. Le site ayant deux layouts racines (un par langue), cette page
 * vit en dehors des deux groupes et doit donc rendre elle-même `<html>`.
 * Elle est bilingue : une URL inconnue peut venir de l'une ou l'autre version.
 */
export default function NotFound() {
  const fr = t("fr").notFound;
  const en = t("en").notFound;

  return (
    <html lang="fr">
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        <div className="container-site flex min-h-screen flex-col items-center justify-center py-20 text-center">
          <p className="heading text-sm text-accent">{fr.code}</p>
          <h1 className="heading mt-3 text-4xl">{fr.title}</h1>
          <p className="mt-4 max-w-md text-soft">{fr.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={path("home", "fr")}>{fr.home}</ButtonLink>
            <ButtonLink href={path("decks", "fr")} variant="secondary">
              {fr.decks}
            </ButtonLink>
          </div>

          <div className="mt-14 border-t border-line pt-10" lang="en">
            <h2 className="heading text-2xl">{en.title}</h2>
            <p className="mx-auto mt-3 max-w-md text-soft">{en.text}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href={path("home", "en")}>{en.home}</ButtonLink>
              <ButtonLink href={path("decks", "en")} variant="secondary">
                {en.decks}
              </ButtonLink>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
