import { createFileRoute } from "@tanstack/react-router";
import { Building2, Package, Link2, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Notice } from "@/components/site/Notice";

export const Route = createFileRoute("/greentec")({
  component: GreentecPage,
});

const items = [
  { icon: Building2, title: "Company Overview", body: "What SVG Greentec (MehtaCop) does and how it relates to SVG Metals Upcycling Limited." },
  { icon: Package, title: "Products & Services", body: "The specific products or services offered under this entity." },
  { icon: Link2, title: "Position in the Value Chain", body: "How this entity fits into the group's overall integrated value chain." },
  { icon: Award, title: "Certifications & Leadership", body: "Any certifications, facilities or leadership specific to this entity." },
];

function GreentecPage() {
  return (
    <main className="bg-cream">
      <PageHero
        crumb="SVG Greentec"
        eyebrow="SVG Greentec Pvt. Ltd."
        title={
          <>
            SVG Greentec Pvt. Ltd. <span className="italic text-cream/60">(MehtaCop)</span>
          </>
        }
        lead="Part of the SVG Metals group."
        image="https://images.unsplash.com/photo-1722695694560-f452b0919d3a?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Scrap metal recycling yard"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Notice>
            The source brief lists this as a required page but includes no company details,
            product/service information, or description of the relationship to SVG Metals
            Upcycling Limited. The structure below is a placeholder — please supply the company
            profile, offerings and brand relationship copy.
          </Notice>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Suggested Content to Gather</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              What This Page Should Cover
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-ink/10 bg-white p-8">
                <Icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
