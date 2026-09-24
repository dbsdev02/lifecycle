import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  CircleCheckBig,
  Recycle,
  Lightbulb,
  Handshake,
  ShieldAlert,
} from "lucide-react";
import { SplitReveal } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import factoryImg from "@/assets/svg-factory.jpg";
import leaderPyarchand from "@/assets/svg-leader-pyarchand.jpg";
import leaderManish from "@/assets/svg-leader-manish.jpg";
import leaderPravin from "@/assets/svg-leader-pravin.jpg";
import timelineImg from "@/assets/svg-timeline-transparent.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const leadership = [
  {
    initials: "PJ",
    photo: leaderPyarchand,
    name: "Pyarchand B. Jain",
    role: "Chairman",
    body: "Founder of the Nakoda Group of Companies, established in 1978 on a foundation of integrity, craftsmanship and quality.",
  },
  {
    initials: "MJ",
    photo: leaderManish,
    name: "Manish Jain",
    role: "Managing Director",
    body: "Carries forward the group's legacy, combining decades of industry values with a forward-looking approach.",
  },
  {
    initials: "PJ",
    photo: leaderPravin,
    name: "Pravin Jain",
    role: "Executive Director",
    body: "Brings deep industry expertise and a steady, hands-on leadership approach to operations and growth strategy.",
  },
  {
    initials: "CM",
    name: "Chirag Majithia",
    role: "CEO",
    body: "Leads day-to-day operations and strategic direction, driving the company's evolution as an integrated enterprise.",
  },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", body: "Doing business the right way, every time." },
  { icon: CircleCheckBig, title: "Quality", body: "Consistent, uncompromising standards across every product." },
  { icon: Recycle, title: "Sustainability", body: "Responsible recycling and resource efficiency at the core of what we do." },
  { icon: Lightbulb, title: "Innovation", body: "Continuous investment in technology to improve products and processes." },
  { icon: Handshake, title: "Reliability", body: "Long-term partnerships built on transparency and trust." },
  { icon: ShieldAlert, title: "Safety", body: "High standards of occupational health, safety and environmental responsibility." },
];


function AboutPage() {
  return (
    <main className="bg-white">
      <PageHero
        crumb="About Us"
        eyebrow="About Us"
        title="A Legacy of Integrity, Craftsmanship and Quality Since 1978."
        image={factoryImg}
        imageAlt="Workers and machinery at the SVG Metals scrap yard"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Story</p>
          <SplitReveal as="h2" className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl">
            From Nakoda Group to <span className="sm:whitespace-nowrap">SVG Metals Upcycling Limited</span>
          </SplitReveal>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Our story is one of steady growth built on values that never change.
          </p>
        </div>
        <img
          src={timelineImg}
          alt="Company milestones from 1978 to 2026, from the founding of the Nakoda Group of Companies through the establishment of the Mehta Copper Refinery"
          loading="lazy"
          className="mt-14 w-full"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mt-16 max-w-3xl font-display text-xl italic leading-relaxed text-ink md:text-2xl">
            While our business continues to evolve, the values that have shaped our journey remain
            unchanged — integrity, quality, reliability and a commitment to building lasting
            relationships.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Leadership</p>
            <SplitReveal as="h2" className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">
              The People Behind
              <br />
              SVG Metals
            </SplitReveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <div className="grid aspect-[4/5] w-full place-items-center bg-ink font-display text-4xl text-cream">
                    {p.initials}
                  </div>
                )}
                <div className="p-7">
                  <h4 className="font-display text-xl text-ink">{p.name}</h4>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">{p.role}</div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#90AF4E] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Values</p>
            <SplitReveal as="h2" className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">
              What Guides Every Decision We Make
            </SplitReveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-[#2D9D47]/20 bg-[#eaf6ed] p-7">
                <Icon className="h-7 w-7 text-[#2D9D47]" />
                <h4 className="mt-5 font-display text-xl text-ink">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
