import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SplitReveal } from "@/components/site/motion";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumb,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  crumb: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-cream md:pb-20 md:pt-44">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-ink/25 to-transparent" />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute right-0 top-0 h-full w-1/2 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #2d41d3 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage: "linear-gradient(to left, black, transparent)",
          }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/50">
          <Link to="/" className="hover:text-cream">
            Home
          </Link>
          <span>/</span>
          <span className="text-cream/70">{crumb}</span>
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <SplitReveal
          as="h1"
          className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl"
        >
          {title}
        </SplitReveal>
        {lead && <p className="mt-6 max-w-2xl text-base text-cream/70 md:text-lg">{lead}</p>}
      </div>
    </section>
  );
}
