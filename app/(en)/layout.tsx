import type { Metadata } from "next";
import { rootMetadata, SiteShell } from "@/lib/layout";
import "../globals.css";

export const metadata: Metadata = rootMetadata("en");

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
