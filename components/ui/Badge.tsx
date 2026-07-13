import type { ReactNode } from "react";

const tones = {
  neutral: "border-line bg-wash text-soft",
  accent: "border-accent/20 bg-accent-wash text-accent",
  demo: "border-line-strong bg-card text-soft",
} as const;

export function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-xs border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
