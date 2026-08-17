import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Field } from "@/components/site/Field";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const info = [
  { k: "Corporate Office", v: "803, DLH Park, S.V. Road, Goregaon West, Mumbai – 400104" },
  { k: "Factory Address", v: "Plot No. 35 & 36, Vitthal Industrial Complex, Aamgoan–Sanjan Road, Dongari, Talasari, District Palghar, Maharashtra – 401606" },
  { k: "Phone", v: "[[client to supply]]" },
  { k: "WhatsApp", v: "[[client to supply]]" },
  { k: "Email", v: "info@svgmetals.com" },
  { k: "Social Media", v: "[[LinkedIn / Instagram / Facebook links to be supplied]]" },
];

const faqs = [
  {
    q: "What products does SVG Metals Upcycling Limited manufacture?",
    a: "We manufacture a wide range of copper products (tubes, pipes, coils, flats, rods, wires, ingots, billets, anodes, nuggets, cathode) and brass products (wires, strips, tubes), plus fully customized products to specification.",
  },
  {
    q: "What raw materials does SVG Metals use for recycling?",
    a: "Our primary raw materials include copper scrap, used electrical wires and cables, industrial copper waste, processed e-waste, copper oxide and other copper-based material.",
  },
  {
    q: "Is SVG Metals ISO certified?",
    a: "Yes. Our operations are supported by ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified systems.",
  },
  {
    q: "Can SVG Metals manufacture products to custom specifications?",
    a: "Yes, our integrated manufacturing capabilities allow us to produce copper and brass products according to customer specifications in dimensions, grades and finishes.",
  },
  {
    q: "Which industries does SVG Metals serve?",
    a: "We serve power & electrical, EV & automotive, renewable energy, HVAC & refrigeration, construction & infrastructure, medical gas systems, energy storage, furnace & industrial, electrical components and general engineering.",
  },
  {
    q: "Where are SVG Metals' offices and factory located?",
    a: "Our corporate office is in Goregaon West, Mumbai, and our factory is located in Talasari, District Palghar, Maharashtra.",
  },
  {
    q: "Does SVG Metals supply to international markets?",
    a: "We are steadily extending our reach across domestic and global markets. Client to confirm specific countries/regions currently served.",
  },
  {
    q: "How can I request a product catalogue or quote?",
    a: "Use the enquiry form above, or reach us directly via phone, WhatsApp or email — our team will respond with the relevant catalogue and specifications.",
  },
];

function ContactPage() {
  return (
    <main className="bg-cream">
      <PageHero
        crumb="Contact Us"
        eyebrow="Contact Us"
        title="Let's Talk About Your Requirement."
        lead="Whether it's a standard product order or a custom specification, our team is ready to help."
        image="https://images.unsplash.com/photo-1621831337128-35676ca30868?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Modern glass office building exterior"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-ink">Get in Touch</h3>
            <ul className="mt-6 space-y-5">
              {info.map((i) => (
                <li key={i.k} className="border-b border-ink/10 pb-5">
                  <span className="block text-xs uppercase tracking-[0.2em] text-ink-soft">{i.k}</span>
                  <span className="mt-1 block text-ink">{i.v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              {["LinkedIn", "Instagram", "Facebook"].map((s) => (
                <span
                  key={s}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-xs text-ink-soft"
                >
                  {s.slice(0, 2)}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-ink">Send an Enquiry</h3>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" dark={false} />
                <Field label="Company Name" dark={false} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" type="email" dark={false} />
                <Field label="Phone" type="tel" dark={false} />
              </div>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-ink-soft">
                  Product / Requirement of Interest
                </span>
                <select className="w-full appearance-none rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none">
                  <option>Copper Products</option>
                  <option>Brass Products</option>
                  <option>Customized Products</option>
                  <option>General Enquiry</option>
                </select>
              </label>
              <Field label="Message" textarea dark={false} />
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-cream transition-transform hover:scale-[1.02]"
              >
                Send Enquiry
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece3] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-ink/10 bg-white text-ink-soft">
            <MapPin className="h-8 w-8 text-accent" />
            <span className="text-sm">Google Maps embed to be added — Corporate Office &amp; Factory locations</span>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">FAQs</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-ink/10 bg-white p-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                  {f.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
