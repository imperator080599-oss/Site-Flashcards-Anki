import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/site";
import { categoryPath, defaultLocale, path, type Locale } from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function Footer({ locale = defaultLocale }: { locale?: Locale }) {
  const ui = t(locale);
  const categories = getCategories(locale);
  const linkClass = "text-sm text-soft transition-colors hover:text-ink";

  return (
    <footer className="mt-24 border-t border-line bg-wash">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <p className="heading text-lg">
            {SITE_NAME}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-soft">
            {ui.footer.tagline}
          </p>
        </div>

        <nav aria-label={ui.footer.categories}>
          <p className="text-xs font-semibold uppercase tracking-wider text-faint">
            {ui.footer.categories}
          </p>
          <ul className="mt-4 space-y-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={categoryPath(c.slug, locale)} className={linkClass}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={ui.footer.navigation}>
          <p className="text-xs font-semibold uppercase tracking-wider text-faint">
            {ui.footer.navigation}
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href={path("decks", locale)} className={linkClass}>
                {ui.footer.allDecks}
              </Link>
            </li>
            <li>
              <Link href={path("method", locale)} className={linkClass}>
                {ui.nav.method}
              </Link>
            </li>
            <li>
              <Link href={path("faq", locale)} className={linkClass}>
                {ui.nav.faq}
              </Link>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                {ui.footer.contact}
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label={ui.footer.legal}>
          <p className="text-xs font-semibold uppercase tracking-wider text-faint">
            {ui.footer.legal}
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href={path("legalNotice", locale)} className={linkClass}>
                {ui.footer.legalNotice}
              </Link>
            </li>
            <li>
              <Link href={path("terms", locale)} className={linkClass}>
                {ui.footer.terms}
              </Link>
            </li>
            <li>
              <Link href={path("privacy", locale)} className={linkClass}>
                {ui.footer.privacy}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. {ui.footer.rights}
          </p>
          <p>{ui.footer.ankiNote(SITE_NAME)}</p>
        </div>
      </div>
    </footer>
  );
}
