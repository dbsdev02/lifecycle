import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CtaBand({
  title,
  body,
  buttons,
}: {
  title: ReactNode;
  body: string;
  buttons: { label: string; to: string; primary?: boolean }[];
}) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-accent to-[#8a4423] px-8 py-14 text-center text-cream md:px-16 md:py-20">
      <h2 className="font-display text-4xl leading-[1.05] md:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-xl text-cream/85">{body}</p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        {buttons.map((b) => (
          <Link
            key={b.label}
            to={b.to}
            className={
              b.primary
                ? "inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
                : "inline-flex items-center gap-2 rounded-full border border-cream/50 px-6 py-3 text-sm text-cream transition-colors hover:bg-cream/10"
            }
          >
            {b.label} <ArrowUpRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </div>
  );
}
