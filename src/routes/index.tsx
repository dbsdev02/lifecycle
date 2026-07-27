import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Globe,
  ChevronDown,
  Recycle,
  Server,
  ShieldCheck,
  Truck,
  Factory,
  Layers,
  MapPin,
} from "lucide-react";

import datacenterImg from "@/assets/datacenter.jpg";
import itadImg from "@/assets/itad.jpg";
import destructionImg from "@/assets/destruction.jpg";
import globalImg from "@/assets/global.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const rotatingWords = [
  "Circular",
  "Scalable",
  "Sustainable",
  "Global",
  "Resourceful",
  "Innovative",
];

function useRotator(words: string[], interval = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return words[i];
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Data Center", "Business", "OEMs", "About", "Locations", "Resources"];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-white mix-blend-difference">
          <div className="grid h-9 w-9 place-items-center rounded-md border border-white/40">
            <span className="font-display text-lg italic">L</span>
          </div>
          <span className="hidden font-display text-lg tracking-tight sm:block">
            Lifecycle Services
          </span>
        </a>

        <nav
          className={`hidden items-center gap-8 rounded-full px-6 py-3 text-sm backdrop-blur-md transition-all lg:flex ${
            scrolled ? "bg-white/95 text-ink shadow-lg" : "bg-white/80 text-ink"
          }`}
        >
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="link-underline">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm text-ink backdrop-blur md:flex">
            <Globe className="h-4 w-4" /> ENG <ChevronDown className="h-3 w-3" />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition-transform hover:scale-[1.03]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const word = useRotator(rotatingWords);
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink">
      <img
        src={datacenterImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-90 animate-ken-burns"
      />
      {/* Angled overlay panel like reference */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
      />

      {/* Dot pattern */}
      <div
        aria-hidden
        className="absolute left-16 top-32 hidden h-40 w-40 opacity-40 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.55 0.14 235) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 md:pb-28">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/80 animate-fade-in">
          <span className="h-px w-10 bg-cream/60" />
          Global ITAD & Data Center Services
        </p>
        <h1 className="font-display text-[13vw] leading-[0.95] text-cream md:text-[8vw]">
          <span className="block animate-fade-up">Delivering</span>
          <span className="relative block h-[1.05em] overflow-hidden italic text-cream">
            <span
              key={word}
              className="absolute inset-0 block"
              style={{ animation: "word-cycle 2.4s cubic-bezier(0.16,1,0.3,1) both" }}
            >
              {word}
            </span>
          </span>
          <span
            className="block animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Solutions
          </span>
        </h1>

        <div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-all hover:bg-accent hover:text-cream"
          >
            Explore Our Services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-sm text-cream transition-colors hover:bg-cream/10"
          >
            About the Company
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 animate-fade-in">
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}

const cards = [
  {
    tag: "01 — Business",
    title: "Global ITAD Made Easy",
    body: "Transform IT asset disposition to match your mission. Our Link portal puts control of your ITAD program at your fingertips — worldwide.",
    cta: "Transform Your Program",
    img: itadImg,
  },
  {
    tag: "02 — OEMs",
    title: "Connecting the Reverse & Forward Supply Chains",
    body: "As a driver of the circular economy, we help OEMs close the loop on their electronic supply chains — from take-back to recovered materials.",
    cta: "Explore More",
    img: destructionImg,
  },
  {
    tag: "03 — Data Center",
    title: "End-to-End Data Center Services",
    body: "Flexible, scalable solutions for decommissioning, server reconfiguration, and critical spare parts recovery — at any scale, on any timeline.",
    cta: "Discover Solutions",
    img: datacenterImg,
  },
];

function ServiceCard({ c, i }: { c: (typeof cards)[number]; i: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`hover-lift group relative overflow-hidden rounded-2xl bg-ink text-cream transition-all duration-1000 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${i * 120}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={c.img}
          alt={c.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-70 transition-transform duration-[1500ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <span className="absolute left-6 top-6 text-xs uppercase tracking-[0.25em] text-cream/80">
          {c.tag}
        </span>
      </div>
      <div className="p-8">
        <h3 className="font-display text-3xl md:text-4xl">{c.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-cream/70">{c.body}</p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 border-b border-cream/40 pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          {c.cta} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function ServicesCards() {
  return (
    <section id="services" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <ServiceCard key={c.title} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/60">About Us</p>
          <div className="mt-10 aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={globalImg}
              alt="Global logistics"
              loading="lazy"
              className={`h-full w-full object-cover transition-transform duration-[2000ms] ${
                visible ? "scale-100" : "scale-110"
              }`}
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <h2 className="font-display text-4xl leading-[1.1] md:text-6xl">
            {"With circular centers across the globe, our ecosystem supports the largest ITAD, e-waste, decommissioning, and recovery programs for businesses, OEMs, and data centers."
              .split(" ")
              .map((w, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 25}ms`,
                  }}
                >
                  {w}&nbsp;
                </span>
              ))}
          </h2>
          <p className="mt-10 max-w-2xl font-display text-2xl italic text-cream/80 md:text-3xl">
            We are reliably hands on — so you can be hands off.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm transition-colors hover:bg-cream hover:text-ink"
          >
            See What We Do <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { n: "8.8M", label: "Assets refurbished for reuse" },
  { n: "21M", label: "Kilograms processed globally" },
  { n: "440K", label: "Tonnes CO₂e emissions avoided" },
  { n: "60+", label: "Circular centers worldwide" },
];

function Impact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Impact</p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
              We focus on recovery <br />
              <span className="italic text-accent">at a large scale.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            FY25 impact across our global circular network — measured, verified, and independently
            audited.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-ink/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="transition-all duration-1000"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="font-display text-6xl text-ink md:text-7xl">{s.n}</div>
              <div className="mt-3 h-px w-10 bg-accent" />
              <p className="mt-4 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  { icon: ShieldCheck, title: "Certified Data Destruction", body: "On-site & off-site shredding, degaussing, and NIST-compliant wiping with full chain-of-custody reporting." },
  { icon: Server, title: "Data Center Decommissioning", body: "Turn-key racking, wiping, packing, and logistics — from a single cabinet to full-hall exits." },
  { icon: Recycle, title: "Reuse & Refurbishment", body: "Maximize residual value through remarketing and refurbishment across a global buyer network." },
  { icon: Truck, title: "Secure Logistics", body: "GPS-tracked, sealed vehicles and audited packaging for high-risk, high-value asset movement." },
  { icon: Factory, title: "Downstream Recycling", body: "R2v3 and ISO-certified downstream partners closing the loop on end-of-life electronics." },
  { icon: Layers, title: "Link Reporting Portal", body: "Live inventory, settlement, and sustainability reporting — one dashboard, every region." },
];

function Capabilities() {
  return (
    <section className="bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/60">Capabilities</p>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl">
          Every step of the <span className="italic">lifecycle,</span> under one program.
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--accent)_15%,var(--ink))]"
            >
              <Icon className="h-8 w-8 text-accent transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{body}</p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-cream/40 transition-all group-hover:text-accent group-hover:rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const regions = [
  { name: "Americas", cities: "New York · Chicago · Dallas · São Paulo · Toronto" },
  { name: "EMEA", cities: "London · Amsterdam · Frankfurt · Dubai · Johannesburg" },
  { name: "APAC", cities: "Singapore · Sydney · Tokyo · Mumbai · Shanghai" },
];

function GlobalCoverage() {
  return (
    <section id="locations" className="relative overflow-hidden bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Global Coverage</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              Globally coordinated. <br />
              <span className="italic text-accent">Locally responsive.</span>
            </h2>
            <p className="mt-6 max-w-lg text-ink-soft">
              We simplify complex projects by providing one reliable IT asset disposition partner
              worldwide. Clients save time, avoid headaches, and benefit from a single, consistent
              program across every location.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-cream transition-transform hover:scale-[1.03]"
            >
              Explore Our Locations <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-3">
            {regions.map((r, i) => (
              <details
                key={r.name}
                className="group rounded-2xl border border-ink/10 bg-white p-6 transition-all open:bg-ink open:text-cream"
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="font-display text-2xl">{r.name}</span>
                  </div>
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 pl-9 text-sm opacity-80">{r.cities}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const certs = ["R2v3", "ISO 27001", "ISO 9001", "ISO 14001", "ISO 45001", "DIPCOG", "Microsoft AR", "AS/NZS 5377", "AS/NZS 4801"];

function Certifications() {
  return (
    <section className="border-y border-ink/10 bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Recognition for our work</p>
          <a href="#" className="link-underline text-sm">View all certifications →</a>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {[...certs, ...certs].map((c, i) => (
              <div
                key={i}
                className="flex h-16 min-w-[160px] items-center justify-center rounded-lg border border-ink/10 bg-white px-6 font-display text-xl text-ink-soft"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36">
      <img
        src={datacenterImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-20 animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cream/60">Contact Us Today</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            Optimize your <br />
            asset decisions <br />
            <span className="italic text-accent">with us.</span>
          </h2>
          <p className="mt-8 max-w-md text-cream/70">
            Need a global solution? Tell us about your program and a regional specialist will be in
            touch within one business day.
          </p>
          <div className="mt-10 space-y-2 text-sm text-cream/60">
            <p>hello@lifecycleservices.example</p>
            <p>+1 (555) 010 2040</p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 backdrop-blur"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" />
            <Field label="Last name" />
          </div>
          <Field label="Work email" type="email" />
          <Field label="Company" />
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-cream/60">
              I'm interested in
            </label>
            <select className="w-full appearance-none rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream focus:border-accent focus:outline-none">
              <option className="bg-ink">ITAD services</option>
              <option className="bg-ink">Data center decommissioning</option>
              <option className="bg-ink">Purchasing equipment</option>
              <option className="bg-ink">Other</option>
            </select>
          </div>
          <Field label="Tell us about your project" textarea />
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-cream transition-transform hover:scale-[1.02]"
          >
            Send inquiry
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  textarea,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-cream/60">{label}</span>
      {textarea ? (
        <textarea
          rows={3}
          className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
        />
      ) : (
        <input
          type={type}
          className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
        />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-cream/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 border-b border-cream/10 pb-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-cream">
              <div className="grid h-9 w-9 place-items-center rounded-md border border-cream/40">
                <span className="font-display text-lg italic">L</span>
              </div>
              <span className="font-display text-lg">Lifecycle Services</span>
            </div>
            <p className="mt-4 max-w-sm text-sm">
              A world without waste — creating circular value for businesses, OEMs, and data centers.
            </p>
          </div>
          {[
            { h: "Services", l: ["Data Center", "Business", "OEMs", "Recycling"] },
            { h: "Company", l: ["About", "Locations", "Resources", "Contact"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-cream">{col.h}</div>
              <ul className="space-y-2 text-sm">
                {col.l.map((i) => (
                  <li key={i}>
                    <a className="link-underline" href="#">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Lifecycle Services. All rights reserved.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-cream">
      <Nav />
      <Hero />
      <ServicesCards />
      <About />
      <Impact />
      <Capabilities />
      <GlobalCoverage />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
