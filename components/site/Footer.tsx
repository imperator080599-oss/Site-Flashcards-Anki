import Link from "next/link";
import { categories } from "@/content/categories";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-wash">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <p className="heading text-lg">
            {SITE_NAME}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-soft">
            Des decks Anki soigneusement construits pour apprendre plus vite,
            grâce à la répétition espacée et au rappel actif.
          </p>
        </div>

        <nav aria-label="Catégories">
          <p className="text-xs font-semibold uppercase tracking-wider text-faint">
            Catégories
          </p>
          <ul className="mt-4 space-y-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/categories/${c.slug}/`}
                  className="text-sm text-soft transition-colors hover:text-ink"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navigation">
          <p className="text-xs font-semibold uppercase tracking-wider text-faint">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/decks/" className="text-sm text-soft transition-colors hover:text-ink">
                Tous les decks
              </Link>
            </li>
            <li>
              <Link href="/methode/" className="text-sm text-soft transition-colors hover:text-ink">
                La méthode
              </Link>
            </li>
            <li>
              <Link href="/faq/" className="text-sm text-soft transition-colors hover:text-ink">
                FAQ
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-soft transition-colors hover:text-ink"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Informations légales">
          <p className="text-xs font-semibold uppercase tracking-wider text-faint">
            Légal
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/mentions-legales/" className="text-sm text-soft transition-colors hover:text-ink">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv/" className="text-sm text-soft transition-colors hover:text-ink">
                Conditions générales de vente
              </Link>
            </li>
            <li>
              <Link href="/confidentialite/" className="text-sm text-soft transition-colors hover:text-ink">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
          </p>
          <p>
            Anki est un logiciel libre développé indépendamment de {SITE_NAME}.
          </p>
        </div>
      </div>
    </footer>
  );
}
