import { createFileRoute } from "@tanstack/react-router";
import { SplitReveal } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import mehtacopImg from "@/assets/svg-mehtacop-factory.jpg";

export const Route = createFileRoute("/greentec")({
  component: GreentecPage,
});

function GreentecPage() {
  return (
    <main className="bg-white">
      <PageHero
        crumb="SVG Greentec"
        eyebrow="SVG Greentec Pvt. Ltd."
        title={
          <>
            SVG Greentec Pvt. Ltd. <span className="italic text-cream/60">(MehtaCop)</span>
          </>
        }
        lead="Part of the SVG Metals group."
        image={mehtacopImg}
        imageAlt="Mehta Copper Refinery factory"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">About Mehta Cop</p>
          <SplitReveal as="h2" className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Integrated Copper Recycling &amp; Refining
          </SplitReveal>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              We operate an integrated non-ferrous metal recycling and refining facility focused on
              the recovery and upcycling of copper from secondary raw materials. Our operations
              encompass the mechanical stripping and granulation of insulated cable scrap, along
              with the processing of low-grade copper-bearing materials such as dross, slag and dust
              containing 20% and above copper content.
            </p>
            <p>
              Through systematic processing, physical separation, extraction, fire refining and
              electrolytic refining, we recover valuable copper from secondary materials and convert
              it into intermediate copper anodes and high-purity refined copper cathodes with purity
              up to 99.99%.
            </p>
            <p>
              Our integrated approach enables efficient resource recovery while minimizing material
              waste, transforming copper-bearing scrap and industrial residues into high-value
              refined metal and supporting a more sustainable circular economy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
