import type { Metadata } from "next";
import { rootMetadata, SiteShell } from "@/lib/layout";
import "../globals.css";

export const metadata: Metadata = rootMetadata("fr");

export default function FrenchLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="fr">{children}</SiteShell>;
}
