import { createFileRoute } from "@tanstack/react-router";
import { Recycle, Factory, ShieldCheck, Award } from "lucide-react";
import { SplitReveal, useScrollFade } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { Notice } from "@/components/site/Notice";
import furnaceImg from "@/assets/svg-furnace.jpg";

export const Route = createFileRoute("/technologies")({
  component: TechnologiesPage,
});

const chain = ["Scrap", "Recycling", "Refining", "Processing", "Manufacturing", "Finished Product"];

const cards = [
  {
    icon: Recycle,
    title: "Recycling & Upcycling",
    body: "Our primary raw materials include copper scrap, used electrical wires and cables, industrial copper waste, processed e-waste, copper oxide and other copper-based material. Through systematic collection, sorting and processing, we recover valuable copper content and convert it into high-purity raw material.",
    notice: "Specific process details, technology/equipment used in recycling, and recovery-rate figures were not provided in the brief.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Technology",
    body: "Our manufacturing facility is equipped to convert recycled and refined copper into a wide range of finished and semi-finished copper and brass products, supporting industries from power infrastructure to EV and automotive.",
    notice: "Details on machinery, production capacity, plant infrastructure and specific manufacturing technologies were not included in the brief — a facility tour/photography session is recommended.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Testing",
    body: "Quality is embedded at every stage of our value chain — from the sourcing and grading of scrap, through refining and processing, to the final inspection of finished products — ensuring every product that leaves our facility meets demanding industrial requirements.",
    notice: "Specific testing equipment, lab capabilities, sampling protocols and quality benchmarks were not detailed in the brief.",
  },
];

function Chain() {
  const ref = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.06, y: 16 });
  return (
    <div ref={ref} className="mt-14 flex flex-wrap items-center justify-center gap-3">
      {chain.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <span className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink">
            {step}
          </span>
          {i < chain.length - 1 && <span className="text-accent">→</span>}
        </div>
      ))}
    </div>
  );
}

function TechnologiesPage() {
  return (
    <main className="bg-cream">
      <PageHero
        crumb="Technologies"
        eyebrow="Technologies"
        title="Everything Under One Roof — From Scrap to Finished Product."
        lead="Our technology and processes are what set SVG Metals apart: an integrated system that takes metal from scrap to finished product without ever leaving our control."
        image={furnaceImg}
        imageAlt="Molten copper glowing inside a melting furnace"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-black">Our Biggest Strength</p>
          <SplitReveal as="h2" className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl">
            Integrated Value Chain
          </SplitReveal>
          <p className="mx-auto mt-5 max-w-3xl text-black">
            Our journey begins with metal scrap, which we recycle, recover and refine to produce
            high-quality raw material — giving us greater control over the quality, purity,
            consistency and traceability of our inputs. We then take this recycled metal through our
            advanced manufacturing processes to produce a wide range of finished and semi-finished
            products.
          </p>
          <Chain />
          <p className="mx-auto mt-10 max-w-2xl text-black">
            This integrated approach gives us greater control over quality, efficiency and
            consistency, while enabling customized solutions and greater value creation at every
            stage.
          </p>
        </div>
      </section>

      <section className="bg-[#f3ece3] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map(({ icon: Icon, title, body, notice }) => (
              <div key={title} className="rounded-2xl border border-ink/10 bg-white p-8">
                <Icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black">{body}</p>
                <div className="mt-5">
                  <Notice>{notice}</Notice>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-ink/10 bg-white p-8">
              <Award className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-display text-2xl text-ink">Certifications</h3>
              <p className="mt-3 text-sm leading-relaxed text-black">
                Our operations are supported by internationally recognized certified systems,
                reflecting our commitment to quality, environmental responsibility and occupational
                health &amp; safety.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink/15 bg-cream px-4 py-1.5 text-xs font-medium text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
