import { createFileRoute } from "@tanstack/react-router";
import { Recycle, Factory, ShieldCheck, Award, MapPin } from "lucide-react";
import { SplitReveal, useScrollFade } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import facilityImg from "@/assets/svg-facility.jpg";
import furnaceImg from "@/assets/svg-furnace.jpg";
import industriesImg from "@/assets/svg-industries-16-9.jpg";

export const Route = createFileRoute("/technologies")({
  component: TechnologiesPage,
});

const chain = ["Scrap", "Recycling", "Refining", "Processing", "Manufacturing", "Finished Product"];

const cards = [
  {
    icon: Recycle,
    title: "Recycling & Upcycling",
    body: "Our primary raw materials include copper scrap, used electrical wires and cables, industrial copper waste, processed e-waste, copper oxide and other copper-based material. Through systematic collection, sorting and processing, we recover valuable copper content and convert it into high-purity raw material.",
    detail:
      "On the upstream side, this includes mechanical stripping and granulation of insulated cable scrap, and the pulverising and fire refining of low-grade copper dross, slag and dust with a copper content of 20% and above.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Technology",
    body: "Our manufacturing facilities are equipped to convert recycled and refined copper into a wide range of finished and semi-finished copper and brass products, supporting industries from power infrastructure to EV and automotive.",
    detail:
      "Induction and gas-fired melting furnaces, extrusion presses up to 1,600 tons, rod upcasters and wire-drawing lines run across our two manufacturing units — full equipment specifications are on our Process page.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Testing",
    body: "Quality is embedded at every stage of our value chain — from the sourcing and grading of scrap, through refining and processing, to the final inspection of finished products — ensuring every product that leaves our facility meets demanding industrial requirements.",
    detail:
      "Each unit runs its own chemical analysis lab, with conductivity meters and S1 MiniLab 150 spectrometers verifying purity and composition at every stage.",
  },
];

const units = [
  {
    name: "Unit 1 — Extrusion & Draw Bench",
    image: furnaceImg,
    imageAlt: "Molten copper glowing inside a melting furnace",
    address: "Plot No. 35 & 36, Vitthal Industrial Complex, Aamgoan–Sanjan Road, Dongari, Talasari, District Palghar, Maharashtra – 401606",
    body: "Established in 2023 with advanced extrusion and drawing machinery for seamless tubes, pipes, rods and busbars.",
  },
  {
    name: "Unit 2 — Upcasting & Wire Drawing",
    image: industriesImg,
    imageAlt: "High-purity copper cathode sheets lifted at an electrorefining plant",
    address: "Girgaon, Talasari, Palghar, Maharashtra — 8 acres of land, 60,000 sq. ft. covered area.",
    body: "Core operations here are anode casting and electrolytic cathode upcycling to 99.99% purity, alongside cable recycling and copper rod production.",
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
    <main className="bg-white">
      <PageHero
        crumb="Infrastructure"
        eyebrow="Infrastructure"
        title="Everything Under One Roof — From Scrap to Finished Product."
        lead="Our technology and processes are what set SVG Metals apart: an integrated system that takes metal from scrap to finished product without ever leaving our control."
        image={facilityImg}
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
                  <div className="mt-4 flex gap-2 text-xs leading-relaxed text-ink-soft">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {u.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2 text-sm text-ink-soft">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Corporate Office — 803, DLH Park, S.V. Road, Goregaon West, Mumbai – 400104
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map(({ icon: Icon, title, body, detail }) => (
              <div key={title} className="rounded-2xl border border-ink/10 bg-[#f3ece3] p-8">
                <Icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black">{body}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{detail}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-ink/10 bg-[#f3ece3] p-8">
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
                    className="rounded-full border border-ink/15 bg-white px-4 py-1.5 text-xs font-medium text-ink"
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
