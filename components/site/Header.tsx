"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE_NAME } from "@/lib/site";
import {
  alternatePath,
  defaultLocale,
  path,
  type Locale,
} from "@/lib/i18n";
import { t } from "@/content/i18n/ui";

export function Header({ locale = defaultLocale }: { locale?: Locale }) {
  const ui = t(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Referme le menu mobile à chaque navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
    { href: path("decks", locale), label: ui.nav.decks },
    { href: path("categories", locale), label: ui.nav.categories },
    { href: path("method", locale), label: ui.nav.method },
    { href: path("faq", locale), label: ui.nav.faq },
  ];

  const other: Locale = locale === "fr" ? "en" : "fr";
  const otherHref = alternatePath(pathname, other);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link
          href={path("home", locale)}
          className="heading text-xl tracking-tight"
          aria-label={`${SITE_NAME} — ${ui.nav.homeAria}`}
        >
          {SITE_NAME}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={ui.nav.main}>
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href.replace(/\/$/, ""));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-ink ${
                  active ? "font-medium text-ink" : "text-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <LanguageSwitcher current={locale} href={otherHref} label={ui.nav.switchTo} />
          <Link
            href={path("decks", locale)}
            className="rounded-sm bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            {ui.nav.cta}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher current={locale} href={otherHref} label={ui.nav.switchTo} />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-full bg-ink transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label={ui.nav.mobile}
          className="border-t border-line bg-paper md:hidden"
        >
          <div className="container-site flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-[15px] text-ink last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/**
 * Sélecteur de langue : deux codes, celui de la page courante en évidence.
 * Le lien pointe vers la page équivalente et non vers l'accueil.
 */
function LanguageSwitcher({
  current,
  href,
  label,
}: {
  current: Locale;
  href: string;
  label: string;
}) {
  const other: Locale = current === "fr" ? "en" : "fr";
  return (
    <Link
      href={href}
      hrefLang={other}
      title={label}
      aria-label={label}
      className="flex items-center rounded-sm border border-line text-[11px] font-semibold uppercase tracking-wide"
    >
      <span className="bg-ink px-1.5 py-1 text-white">{current}</span>
      <span className="px-1.5 py-1 text-soft transition-colors hover:text-ink">
        {other}
      </span>
    </Link>
  );
}
