import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
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
import { gsap, SplitText, prefersReducedMotion } from "@/lib/scroll";

// welding / factory-sparks industrial images

const heroImg        = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&q=90&auto=format&fit=crop";
const datacenterImg  = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=85&auto=format&fit=crop";
const globalImg      = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop";

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

function SplitReveal({
  as: Tag = "p",
  children,
  className,
  start = "top 85%",
  slideUp = true,
  by = "words",
}: {
  as?: "h1" | "h2" | "h3" | "p";
  children: ReactNode;
  className?: string;
  start?: string;
  slideUp?: boolean;
  by?: "words" | "lines";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const split =
      by === "lines"
        ? new SplitText(el, { type: "lines", linesClass: "split-word", mask: "lines" })
        : new SplitText(el, { type: "words", wordsClass: "split-word" });
    const targets = by === "lines" ? split.lines : split.words;
    if (slideUp) gsap.set(targets, { yPercent: 100, opacity: 0 });
    else gsap.set(targets, { opacity: 0 });
    const tween = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start,
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, [start, slideUp, by]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

function useScrollFade<T extends HTMLElement>(opts?: {
  y?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  /** Animate the container's direct children instead of the container itself. */
  children?: boolean;
}) {
  const ref = useRef<T | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = opts?.children ? Array.from(el.children) : el;
    gsap.set(targets, { opacity: 0, y: opts?.y ?? 80, scale: opts?.scale ?? 1 });
    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: opts?.duration ?? 1,
      ease: opts?.ease ?? "power3.out",
      stagger: opts?.stagger ?? 0,
      scrollTrigger: {
        trigger: el,
        start: opts?.start ?? "top 85%",
        toggleActions: "play none none none",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

function RevealImage({
  src,
  alt,
  className,
  start = "top 90%",
}: {
  src: string;
  alt: string;
  className?: string;
  start?: string;
}) {
  const ref = useRef<HTMLImageElement | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.set(el, { scale: 1.15, opacity: 0, filter: "blur(16px)" });
    const tween = gsap.to(el, {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <img ref={ref} src={src} alt={alt} loading="lazy" className={className} />;
}

function useCountUp(target: string, start = "top 85%") {
  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = target.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const [, numStr, suffix] = match;
    const value = parseFloat(numStr);
    const decimals = (numStr.split(".")[1] || "").length;

    if (prefersReducedMotion()) {
      el.textContent = target;
      return;
    }

    const counter = { n: 0 };
    el.textContent = `0${suffix}`;
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
      onUpdate: () => {
        el.textContent = `${counter.n.toFixed(decimals)}${suffix}`;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, start]);
  return ref;
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
    });
    tl.to(bgRef.current, { yPercent: 20, scale: 1.15, ease: "none" }, 0)
      .to(overlayRef.current, { opacity: 0.15, ease: "none" }, 0)
      .to(contentRef.current, { yPercent: -35, opacity: 0.2, ease: "none" }, 0);
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef as never}
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink"
    >
      <div ref={bgRef} className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-90 animate-ken-burns"
        />
      </div>
      {/* Angled overlay panel like reference */}
      <div
        ref={overlayRef}
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
      />

      {/* Dot pattern */}
      <div
        aria-hidden
        className="absolute left-16 top-32 hidden h-40 w-40 opacity-40 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.58 0.12 48) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 md:pb-28"
      >
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

// hex equivalents of --ink/--accent/--cream: GSAP's color tween can't parse
// var()/oklch(), only hex/rgb/hsl.
const panels = [
  {
    tag: "01 — Business",
    title: "Global ITAD Made Easy",
    body: "Transform IT asset disposition to match your mission. Our Link portal puts control of your ITAD program at your fingertips — worldwide.",
    cta: "Transform Your Program",
    bg: "#1b0702",
    fg: "text-cream",
  },
  {
    tag: "02 — OEMs",
    title: "Connecting the Reverse & Forward Supply Chains",
    body: "As a driver of the circular economy, we help OEMs close the loop on their electronic supply chains — from take-back to recovered materials.",
    cta: "Explore More",
    bg: "#b26235",
    fg: "text-cream",
  },
  {
    tag: "03 — Data Center",
    title: "End-to-End Data Center Services",
    body: "Flexible, scalable solutions for decommissioning, server reconfiguration, and critical spare parts recovery — at any scale, on any timeline.",
    cta: "Discover Solutions",
    bg: "#f9f4f0",
    fg: "text-ink",
  },
];

function ScrollPanels() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = prefersReducedMotion();

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const bg = bgRef.current;
    const contents = contentRefs.current.filter((c): c is HTMLDivElement => c !== null);
    if (!wrapper || !bg || reduced || contents.length !== panels.length) return;

    // contents[0] stays as rendered (visible, in place); the rest start
    // off-screen below, hidden, and fade in as their predecessor exits.
    gsap.set(contents.slice(1), { y: "45vh", opacity: 0, pointerEvents: "none" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: () => `+=${(contents.length - 1) * window.innerHeight}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    contents.slice(1).forEach((el, i) => {
      const pos = i;
      // background morphs from the outgoing panel's color to the incoming one's.
      tl.to(bg, { backgroundColor: panels[i + 1].bg, ease: "none", duration: 1 }, pos);
      // outgoing heading slides up and disappears...
      tl.to(contents[i], { y: "-45vh", opacity: 0, ease: "none", duration: 0.5 }, pos);
      tl.set(contents[i], { pointerEvents: "none" }, pos);
      // ...then the incoming heading rises from below and fades in.
      tl.to(el, { y: 0, opacity: 1, ease: "none", duration: 0.6 }, pos + 0.3);
      tl.set(el, { pointerEvents: "auto" }, pos + 0.3);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [reduced]);

  if (reduced) {
    return (
      <section id="services" className="relative w-full">
        {panels.map((p) => (
          <div
            key={p.title}
            className={`relative flex min-h-[70vh] items-center ${p.fg}`}
            style={{ backgroundColor: p.bg }}
          >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.25em] opacity-70">{p.tag}</span>
                <h3 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">{p.title}</h3>
                <p className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">{p.body}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 border-b pb-1 text-sm transition-colors hover:opacity-70"
                >
                  {p.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="services" ref={wrapperRef} className="relative h-screen w-full overflow-hidden">
      <div ref={bgRef} className="absolute inset-0" style={{ backgroundColor: panels[0].bg }} />
      {panels.map((p, i) => (
        <div
          key={p.title}
          ref={(el) => {
            contentRefs.current[i] = el;
          }}
          className={`absolute inset-0 z-10 flex items-center ${p.fg}`}
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] opacity-70">{p.tag}</span>
              <h3 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">{p.title}</h3>
              <p className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">{p.body}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border-b pb-1 text-sm transition-colors hover:opacity-70"
              >
                {p.cta} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28 text-cream md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/60">About Us</p>
          <div className="mt-10 aspect-[4/5] overflow-hidden rounded-2xl">
            <RevealImage src={globalImg} alt="Global logistics" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <SplitReveal as="h2" className="font-display text-4xl leading-[1.1] md:text-6xl">
            With circular centers across the globe, our ecosystem supports the largest ITAD,
            e-waste, decommissioning, and recovery programs for businesses, OEMs, and data
            centers.
          </SplitReveal>
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

function StatTile({ s }: { s: (typeof stats)[number] }) {
  const countRef = useCountUp(s.n);
  return (
    <div>
      <div ref={countRef} className="font-display text-6xl text-ink md:text-7xl">
        {s.n}
      </div>
      <div className="mt-3 h-px w-10 bg-accent" />
      <p className="mt-4 text-sm text-ink-soft">{s.label}</p>
    </div>
  );
}

function Impact() {
  const statsRef = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.15, y: 30 });
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Impact</p>
            <SplitReveal
              as="h2"
              by="lines"
              className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl"
            >
              We focus on recovery <br />
              <span className="italic text-accent">at a large scale.</span>
            </SplitReveal>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            FY25 impact across our global circular network — measured, verified, and independently
            audited.
          </p>
        </div>

        <div
          ref={statsRef}
          className="mt-16 grid gap-8 border-t border-ink/10 pt-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <StatTile key={s.label} s={s} />
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
  const gridRef = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.15, y: 20, scale: 0.95 });
  return (
    <section className="bg-ink py-28 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/60">Capabilities</p>
        <SplitReveal as="h2" className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl">
          Every step of the <span className="italic">lifecycle,</span> under one program.
        </SplitReveal>

        <div
          ref={gridRef}
          className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-3"
        >
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
  const regionsRef = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.12, y: 24 });
  return (
    <section id="locations" className="relative overflow-hidden bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Global Coverage</p>
            <SplitReveal as="h2" className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              Globally coordinated. <br />
              <span className="italic text-accent">Locally responsive.</span>
            </SplitReveal>
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

          <div ref={regionsRef} className="space-y-3">
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
          <SplitReveal as="h2" by="lines" className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            Optimize your <br />
            asset decisions <br />
            <span className="italic text-accent">with us.</span>
          </SplitReveal>
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
  const ref = useScrollFade<HTMLDivElement>({ y: 40, duration: 0.9, start: "top 95%" });
  return (
    <footer ref={ref} className="bg-ink pb-10 pt-16 text-cream/70">
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
      <ScrollPanels />
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
