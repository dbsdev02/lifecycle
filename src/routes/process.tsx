import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, ShieldCheck, Factory, Layers } from "lucide-react";
import { SplitReveal, useScrollFade } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import furnaceImg from "@/assets/svg-furnace.jpg";
import processFlowImg from "@/assets/svg-process-flow.jpg";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
});

const chain = ["Scrap", "Recycling", "Refining", "Processing", "Manufacturing", "Finished Product"];

const steps = [
  {
    step: "01",
    title: "Scrap",
    body: "We begin with copper scrap, used electrical wires and cables, industrial copper waste and processed e-waste — material with plenty of life left in it.",
  },
  {
    step: "02",
    title: "Recycling",
    body: "We recover and sort it, separating true copper content from the insulation, coatings and debris that hitch a ride with it.",
  },
  {
    step: "03",
    title: "Refining",
    body: "We refine the recovered copper until it meets the purity that demanding industrial applications require.",
  },
];

const glance = [
  "A specialised, integrated non-ferrous metals manufacturer — processing, refining and recycling under one operation",
  "Upstream capability most competitors don't have in-house: cable scrap stripping/granulation and low-grade dross refining",
  "99.99% purity copper cathodes, produced through electrolytic refining",
  "Two-unit manufacturing footprint on the Maharashtra–Gujarat border, on the NH-48 industrial corridor",
  "A global and domestic raw material procurement network spanning North America, Europe, the Middle East and Africa",
  "Nearly five decades of operating history, tracing back to 1978",
];

const facilities = [
  {
    unit: "Unit 1",
    title: "Extrusion & Draw Bench",
    groups: [
      { h: "Melting & Casting", items: ["Induction Furnace — 450 kW / 1,200 kg"] },
      { h: "Extrusion", items: ["1,600 Ton Extrusion Press"] },
      {
        h: "Annealing Furnaces",
        items: [
          "Gas-Fired Billet Heating Furnace",
          "Gas-Fired Roller-Type Annealing Furnace",
          "Bright Electric Pot Annealing Furnace",
        ],
      },
      {
        h: "Allied Equipment",
        items: [
          "Pointing, cutting, swaging, polishing & finishing machinery",
          "Workshop machinery — lathe, milling, drilling, grinding, shearing & welding",
          "Heavy-duty draw bench",
        ],
      },
      { h: "Captive Power", items: ["500 kVA D.G. Set, 125 kVA D.G. Set"] },
      { h: "Testing", items: ["Chemical analysis lab", "Spectrometer — S1 MiniLab 150"] },
    ],
  },
  {
    unit: "Unit 2",
    title: "Extrusion / Upcasting Machine",
    groups: [
      {
        h: "Melting & Casting",
        items: ["Gas-Fired Melting Furnace — 1,500 kg × 2", "Gas-Fired Melting Furnace — 1,000 kg × 2"],
      },
      { h: "Extrusion Press", items: ["600 Ton Extrusion Press"] },
      { h: "Upcaster", items: ["16-Line Rod Upcaster Unit × 2"] },
      {
        h: "Wire Drawing",
        items: [
          "Rod breakdown machine",
          "Medium wire drawing machine",
          "Fine wire drawing machine",
          "Heavy-duty draw bench × 6",
        ],
      },
      {
        h: "Annealing Furnaces",
        items: ["Vacuum Bright Pot Annealing Furnace (electrical)", "Gas-Fired Annealing Furnace"],
      },
      { h: "Captive Power", items: ["62.5 kVA D.G. Set"] },
      { h: "Testing", items: ["Chemical analysis lab", "Conductivity meter & spectrometer — S1 MiniLab 150"] },
    ],
  },
];

function Chain({ activeFrom, activeTo }: { activeFrom: number; activeTo: number }) {
  const ref = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.06, y: 16 });
  return (
    <div ref={ref} className="mt-14 flex flex-wrap items-center justify-center gap-3">
      {chain.map((step, i) => {
        const active = i >= activeFrom && i <= activeTo;
        return (
          <div key={step} className="flex items-center gap-3">
            <span
              className={`rounded-full border px-5 py-2.5 text-sm font-medium ${
                active ? "border-accent bg-accent text-cream" : "border-ink/15 bg-white text-ink-soft"
              }`}
            >
              {step}
            </span>
            {i < chain.length - 1 && <span className="text-accent">→</span>}
          </div>
        );
      })}
    </div>
  );
}

function ProcessPage() {
  return (
    <main className="bg-white">
      <PageHero
        crumb="Process"
        eyebrow="Our Process"
        title="We Built Our Own Supply Chain, End to End."
        lead="Ask most manufacturers where their raw material comes from, and you'll usually get a shrug and a supplier's name — someone several steps removed from the factory floor. We wanted better answers than that, so we built our own supply chain instead."
        image={furnaceImg}
        imageAlt="Molten copper glowing inside a melting furnace"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">One Continuous Line</p>
          <SplitReveal as="h2" className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl">
            From Scrap to Refined Copper, Entirely In-House
          </SplitReveal>
          <p className="mx-auto mt-5 max-w-3xl text-ink-soft">
            Our process moves as one continuous line, entirely in our hands. This page covers the
            first three stages — where raw scrap becomes refined, industrial-grade copper.
          </p>
          <Chain activeFrom={0} activeTo={2} />
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Step by Step</p>
          <SplitReveal as="h2" className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl">
            The Full Manufacturing Flow
          </SplitReveal>
          <p className="mx-auto mt-5 max-w-3xl text-ink-soft">
            From raw material to a shipped, tested product — every stage our metal passes through on
            the way to becoming a finished tube, pipe or rod.
          </p>
        </div>
        <img
          src={processFlowImg}
          alt="Manufacturing process flow: raw materials, melting, casting, billet cutting, billet heating, extrusion, drawing/reducing, annealing, pickling, coating, straightening, cutting and end debarring, hydro pressure and eddy current testing, stress relieving, final inspection, packing and shipping"
          loading="lazy"
          className="mx-auto mt-12 max-w-6xl px-4 sm:px-6"
        />
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-ink/10 bg-cream p-8">
                <span className="font-display text-3xl text-accent">{s.step}</span>
                <h3 className="mt-4 font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-3xl text-left text-pretty font-display text-xl italic leading-relaxed text-ink md:text-2xl">
            On the upstream side, our infrastructure handles the parts of this process most
            manufacturers never touch directly —
            <br />
            mechanical stripping and granulation of insulated cable scrap,
            <br />
            and the pulverising and fire refining of low-grade copper dross, slag and dust
            <br />
            with a copper content of 20% and above.
            <br />
            Through physical separation, extraction and electrolytic refining,
            <br />
            we convert these secondary materials into intermediate copper anodes,
            <br />
            and upcycle them further into high-purity refined copper cathodes — 99.99% pure.
          </p>
        </div>
      </section>

      <section className="bg-[#f3ece3] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">At a Glance</p>
          <SplitReveal as="h2" className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-5xl">
            The Infrastructure Behind the Purity
          </SplitReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {glance.map((g) => (
              <div key={g} className="flex gap-3 rounded-xl border border-ink/10 bg-white p-5">
                <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-ink-soft">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Facilities</p>
          <SplitReveal as="h2" className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-5xl">
            Equipped for Every Stage
          </SplitReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {facilities.map((f) => (
              <div key={f.unit} className="rounded-2xl border border-ink/10 bg-cream p-8">
                <div className="flex items-center gap-3">
                  <Factory className="h-6 w-6 text-accent" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-accent">{f.unit}</div>
                    <h3 className="font-display text-2xl text-ink">{f.title}</h3>
                  </div>
                </div>
                <div className="mt-6 space-y-5">
                  {f.groups.map((g) => (
                    <div key={g.h}>
                      <div className="text-xs font-medium uppercase tracking-[0.15em] text-ink">{g.h}</div>
                      <ul className="mt-2 space-y-1">
                        {g.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                            <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/70" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece3] py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <Globe2 className="h-8 w-8 text-accent" />
          <p className="max-w-2xl text-ink-soft">
            A global and domestic raw material procurement network spanning North America, Europe,
            the Middle East and Africa keeps this line running.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-cream transition-transform hover:scale-[1.03]"
          >
            See the Finished Products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white pb-24 pt-16 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CtaBand
            title="Curious How Your Requirement Fits This Line?"
            body="Talk to us about your copper or brass requirement and we'll walk you through exactly where it enters our process."
            buttons={[{ label: "Contact Us", to: "/contact", primary: true }]}
          />
        </div>
      </section>
    </main>
  );
}
