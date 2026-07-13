"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE_NAME } from "@/lib/site";

const navItems = [
  { href: "/decks/", label: "Catalogue" },
  { href: "/categories/", label: "Catégories" },
  { href: "/methode/", label: "La méthode" },
  { href: "/faq/", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Referme le menu mobile à chaque navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container-site flex h-16 items-center justify-between">
        <Link
          href="/"
          className="heading text-xl tracking-tight"
          aria-label={`${SITE_NAME} — accueil`}
        >
          {SITE_NAME}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navItems.map((item) => {
            const active =
              item.href === "/decks/"
                ? pathname.startsWith("/decks")
                : pathname.startsWith(item.href.replace(/\/$/, ""));
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
          <Link
            href="/decks/"
            className="rounded-sm bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Voir les decks
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
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
