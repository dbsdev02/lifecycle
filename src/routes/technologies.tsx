import { createFileRoute } from "@tanstack/react-router";
import { SplitReveal, useScrollFade } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import factoryImg from "@/assets/svg-factory.jpg";
import furnaceImg from "@/assets/svg-furnace.jpg";
import industriesImg from "@/assets/svg-industries-16-9.jpg";

export const Route = createFileRoute("/technologies")({
  component: TechnologiesPage,
});

const chain = ["Scrap", "Recycling", "Refining", "Processing", "Manufacturing", "Finished Product"];

const units = [
  {
    name: "Unit 1 — Extrusion & Draw Bench",
    image: furnaceImg,
    imageAlt: "Molten copper glowing inside a melting furnace",
    body: "Established in 2023 with advanced extrusion and drawing machinery for seamless tubes, pipes, rods and busbars.",
  },
  {
    name: "Unit 2 — Upcasting & Wire Drawing",
    image: industriesImg,
    imageAlt: "High-purity copper cathode sheets lifted at an electrorefining plant",
    body: "Core operations here are anode casting and electrolytic cathode upcycling to 99.99% purity, alongside cable recycling and copper rod production.",
  },
];

const infrastructure = [
  {
    title: "Melting & Casting",
    items: ["Induction Furnace — 450 kW / 1,200 kg × 2", "Gas Fired Furnace — 1,100 kg × 3"],
  },
  { title: "Extrusion", items: ["Extrusion Hydraulic Press — 1,600 MT"] },
  {
    title: "Annealing Furnace",
    items: [
      "Gas Fired Billet Heating Furnace",
      "Gas Fired Roller-Type Annealing Furnace",
      "Electric Pot Bright Annealing Furnace",
    ],
  },
  {
    title: "Drawing Facility",
    items: [
      "Pilger Mill LG 75",
      "Pilger Mill LG 30",
      "Bullblock × 2",
      "Heavy Draw Bench × 4",
      "Semi Heavy Draw Bench × 4",
      "Light Draw Bench × 4",
    ],
  },
  {
    title: "Allied Equipment",
    items: [
      "Pointing, cutting, swaging, polishing & finishing machinery",
      "Workshop machinery — lathe, milling, drilling, grinding, shearing & welding",
    ],
  },
  {
    title: "Testing Facilities (incl. Chemical Analysis)",
    items: [
      "Spectrometer — S3 MINI LAB 300",
      "Eddy current testing",
      "Hydrostatic testing",
      "Pneumatic testing",
      "Hardness testing",
      "Tensile testing (UTS)",
      "Residue testing",
      "Conductivity testing",
      "Hydrogen embrittlement furnace — 1,100 °C",
      "Microscope",
      "Straight edge testing",
    ],
  },
  { title: "Captive Power", items: ["D.G. Set — 500 kVA × 1", "D.G. Set — 125 kVA × 1"] },
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
    <main className="bg-white">
      <PageHero
        crumb="Infrastructure"
        eyebrow="Infrastructure"
        title="Everything Under One Roof — From Scrap to Finished Product."
        lead="Our technology and processes are what set SVG Metals apart: an integrated system that takes metal from scrap to finished product without ever leaving our control."
        image={factoryImg}
        imageFit
        imageAlt="Workers and machinery at the SVG Metals scrap yard"
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
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Facilities</p>
          <SplitReveal as="h2" className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-5xl">
            A Two-Unit Manufacturing Footprint
          </SplitReveal>
          <p className="mt-5 max-w-3xl text-black">
            Our two-unit manufacturing footprint sits on the Maharashtra–Gujarat border, on the NH-48
            industrial corridor, with our corporate office in Mumbai.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {units.map((u) => (
              <div key={u.name} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={u.image}
                    alt={u.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-ink">{u.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">{u.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Infrastructure</p>
          <SplitReveal as="h2" className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl">
            SVG Metals Upcycling Pvt Ltd
          </SplitReveal>
          <p className="mt-5 max-w-3xl text-black">Spread around 2.5 acres.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infrastructure.map((g) => (
              <div key={g.title} className="rounded-2xl border border-ink/10 bg-white p-8">
                <h3 className="font-display text-xl text-ink">{g.title}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-black">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
