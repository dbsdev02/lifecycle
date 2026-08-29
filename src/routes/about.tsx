import { createFileRoute } from "@tanstack/react-router";
import {
  Compass,
  Target,
  ShieldCheck,
  CircleCheckBig,
  Recycle,
  Lightbulb,
  Handshake,
  ShieldAlert,
} from "lucide-react";
import { SplitReveal, useScrollFade } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { Notice } from "@/components/site/Notice";
import facilityImg from "@/assets/SVG Image (1).png";
import leaderPhoto1 from "@/assets/SVG Image (3).png";
import leaderPhoto2 from "@/assets/SVG Image (4).png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const timeline = [
  {
    year: "1978",
    title: "The Foundation",
    body: "Mr. Pyarchand B. Jain founded the Nakoda Group of Companies, laying the foundation of a business built on integrity, craftsmanship and a strong commitment to quality. What started as a vision grew steadily into a trusted name in the copper and non-ferrous metals industry.",
  },
  {
    year: "Next Generation",
    title: "Carrying the Legacy Forward",
    body: "Over the years, this legacy has been carried forward by Mr. Pravin Jain and Mr. Manish Jain, who have combined the values of the past with a forward-looking approach to build a modern and progressive enterprise.",
  },
  {
    year: "Today",
    title: "SVG Metals Upcycling Limited",
    body: "The Nakoda Group of Companies has evolved into SVG Metals Upcycling Limited, carrying forward a legacy built over decades while embracing a new era of growth and innovation. We have broadened our horizons, strengthened our capabilities, expanded our product portfolio, and are steadily extending our reach across domestic and global markets.",
  },
];

const leadership = [
  {
    initials: "PJ",
    photo: leaderPhoto1,
    name: "Pyarchand B. Jain",
    role: "Chairman",
    body: "Founder of the Nakoda Group of Companies, established in 1978 on a foundation of integrity, craftsmanship and quality.",
  },
  {
    initials: "MJ",
    photo: leaderPhoto2,
    name: "Manish Jain",
    role: "Managing Director",
    body: "Carries forward the group's legacy, combining decades of industry values with a forward-looking approach.",
  },
  {
    initials: "PJ",
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

function Timeline() {
  const ref = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.15, y: 30 });
  return (
    <div ref={ref} className="mt-14 grid gap-10 md:grid-cols-3">
      {timeline.map((t) => (
        <div key={t.title} className="border-t-2 border-accent pt-6">
          <div className="font-display text-2xl text-accent">{t.year}</div>
          <h3 className="mt-2 font-display text-2xl text-ink">{t.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.body}</p>
        </div>
      ))}
    </div>
  );
}

function AboutPage() {
  return (
    <main className="bg-cream">
      <PageHero
        crumb="About Us"
        eyebrow="About Us"
        title="A Legacy of Integrity, Craftsmanship and Quality Since 1978."
        lead="From the founding of the Nakoda Group of Companies to the evolution of SVG Metals Upcycling Limited, our story is one of steady growth built on values that never change."
        image={facilityImg}
        imageAlt="Workers and machinery at the SVG Metals scrap yard"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Story</p>
          <SplitReveal as="h2" className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] md:text-5xl">
            From Nakoda Group to SVG Metals Upcycling Limited
          </SplitReveal>
          <Timeline />
          <p className="mt-16 max-w-3xl font-display text-xl italic leading-relaxed text-ink md:text-2xl">
            While our business continues to evolve, the values that have shaped our journey remain
            unchanged — integrity, quality, reliability and a commitment to building lasting
            relationships.
          </p>
        </div>
      </section>

      <section className="bg-ink py-24 text-cream md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-8">
            <Compass className="h-8 w-8 text-accent" />
            <h3 className="mt-6 font-display text-3xl">Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              To become a globally trusted leader in sustainable copper and non-ferrous metal
              solutions, creating value through innovation, quality and responsible resource
              utilization.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              We envision a future where metal recycling goes beyond waste management to become an
              essential part of the world's industrial supply chain — creating a more sustainable,
              resource-efficient and circular economy.
            </p>
          </div>
          <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-8">
            <Target className="h-8 w-8 text-accent" />
            <h3 className="mt-6 font-display text-3xl">Mission</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              To transform recyclable metal resources into high-quality products through responsible
              recycling, advanced manufacturing and uncompromising quality.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {[
                "Delivering consistent quality that meets global industrial standards",
                "Driving sustainable manufacturing through efficient resource utilization",
                "Investing in technology and innovation",
                "Building long-term customer partnerships",
                "Expanding our global presence",
                "Creating value for all stakeholders, safely and ethically",
              ].map((li) => (
                <li key={li} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Leadership</p>
            <SplitReveal as="h2" className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">
              The People Behind SVG Metals
            </SplitReveal>
          </div>
          <div className="mt-8">
            <Notice>
              Individual leadership biographies (background, experience, philosophy) and
              professional photographs were not included in the source brief. Placeholder bios are
              shown below so the page structure is complete — please supply full bios and photos to
              replace this text.
            </Notice>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((p) => (
              <div key={p.name} className="rounded-2xl border border-ink/10 bg-white p-7">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-ink font-display text-lg text-cream">
                    {p.initials}
                  </div>
                )}
                <h4 className="mt-5 font-display text-xl text-ink">{p.name}</h4>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">{p.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece3] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Values</p>
            <SplitReveal as="h2" className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">
              What Guides Every Decision We Make
            </SplitReveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-ink/10 bg-white p-7">
                <Icon className="h-7 w-7 text-accent" />
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
