import { createFileRoute, Link } from "@tanstack/react-router";
import { useLayoutEffect, useRef } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Recycle,
  Award,
  ShieldCheck,
  Workflow,
  Factory,
  Layers,
} from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/scroll";
import { useRotator, SplitReveal, ScrollColorReveal, useScrollFade, RevealImage, useCountUp } from "@/components/site/motion";
import { CtaBand } from "@/components/site/CtaBand";

// welding / factory-sparks industrial images

const heroImg    = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=90&auto=format&fit=crop";
const aboutImg   = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop";

export const Route = createFileRoute("/")({
  component: Home,
});

const rotatingWords = [
  "Sustainable",
  "Integrated",
  "High-Purity",
  "Circular",
  "Resourceful",
  "Innovative",
];

function Hero() {
  const word = useRotator(rotatingWords);
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
    });
    tl.to(bgRef.current, { yPercent: 20, scale: 1.15, ease: "none" }, 0)
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
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent" />
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
          Copper & Non-Ferrous Metals Recycling
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
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-all hover:bg-accent hover:text-cream"
          >
            Explore Our Products
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
    tag: "01 — Products",
    title: "Copper & Brass, Engineered for Industry",
    body: "From raw scrap to precision-engineered finished products, we manufacture a comprehensive range of copper and brass products for power, electrical, automotive, construction and industrial applications.",
    cta: "View Our Products",
    to: "/products",
    bg: "#000000",
    fg: "text-cream",
    img: "https://images.unsplash.com/photo-1678119895596-411628b1f6be?w=1600&q=80&auto=format&fit=crop",
    imgAlt: "Braided high-purity copper cable",
  },
  {
    tag: "02 — Technologies",
    title: "Everything Under One Roof, From Scrap to Finished Product",
    body: "An integrated value chain — recycling, refining, processing and manufacturing — gives us greater control over the quality, purity, consistency and traceability of everything we make.",
    cta: "Discover Our Technology",
    to: "/technologies",
    bg: "#b26235",
    fg: "text-cream",
    img: "https://images.unsplash.com/photo-1722695694560-f452b0919d3a?w=1600&q=80&auto=format&fit=crop",
    imgAlt: "Scrap metal being processed at a recycling yard",
  },
  {
    tag: "03 — Industries",
    title: "Powering the Industries That Power the World",
    body: "From the power grid to the vehicles on the road, from renewable energy installations to hospital gas lines — our copper and brass products serve the industries building tomorrow.",
    cta: "See How We Serve You",
    to: "/industries",
    bg: "#f9f4f0",
    fg: "text-ink",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&auto=format&fit=crop",
    imgAlt: "High-voltage power transmission lines at sunset",
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
      <section id="products" className="relative w-full">
        {panels.map((p) => (
          <div
            key={p.title}
            className={`relative flex min-h-[70vh] items-center overflow-hidden ${p.fg}`}
            style={{ backgroundColor: p.bg }}
          >
            <img
              src={p.img}
              alt={p.imgAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(90deg, ${p.bg} 0%, ${p.bg}e6 45%, ${p.bg}00 90%)` }}
            />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.25em] opacity-70">{p.tag}</span>
                <h3 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">{p.title}</h3>
                <p className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">{p.body}</p>
                <Link
                  to={p.to}
                  className="mt-8 inline-flex items-center gap-2 border-b pb-1 text-sm transition-colors hover:opacity-70"
                >
                  {p.cta} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="products" ref={wrapperRef} className="relative h-screen w-full overflow-hidden">
      <div ref={bgRef} className="absolute inset-0" style={{ backgroundColor: panels[0].bg }} />
      {panels.map((p, i) => (
        <div
          key={p.title}
          ref={(el) => {
            contentRefs.current[i] = el;
          }}
          className={`absolute inset-0 z-10 flex items-center overflow-hidden ${p.fg}`}
        >
          <img
            src={p.img}
            alt={p.imgAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(90deg, ${p.bg} 0%, ${p.bg}e6 45%, ${p.bg}00 90%)` }}
          />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
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
            <RevealImage src={aboutImg} alt="SVG Metals manufacturing facility" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <ScrollColorReveal
            as="h2"
            className="font-display text-4xl leading-[1.1] md:text-6xl"
            from="rgba(249, 244, 240, 0.2)"
            to="#f9f4f0"
          >
            Since 1978, we&rsquo;ve grown from the Nakoda Group of Companies into an integrated
            copper and non-ferrous metals recycling and manufacturing company &mdash; transforming
            scrap into high-quality industrial products, entirely under one roof.
          </ScrollColorReveal>
          <ScrollColorReveal
            as="p"
            className="mt-10 max-w-2xl font-display text-2xl italic md:text-3xl"
            from="rgba(249, 244, 240, 0.2)"
            to="#b26235"
            start="top 85%"
            end="bottom 65%"
          >
            We don&rsquo;t just recycle metal. We transform it.
          </ScrollColorReveal>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm transition-colors hover:bg-cream hover:text-ink"
          >
            See What We Do <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { n: "1978", label: "Founded as the Nakoda Group of Companies" },
  { n: "3", label: "ISO-certified management systems" },
  { n: "13+", label: "Copper & brass product lines manufactured in-house" },
  { n: "10", label: "Industries powered by our products" },
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
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Our Biggest Strength</p>
            <SplitReveal
              as="h2"
              by="lines"
              className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl"
            >
              An integrated value chain, <br />
              <span className="italic text-accent">built under one roof.</span>
            </SplitReveal>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            From scrap to finished product, without ever leaving our control — giving us greater
            command over quality, purity and consistency at every stage.
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
  { icon: Recycle, title: "Recycling & Upcycling", body: "Copper scrap, cables, industrial waste and e-waste recovered and refined into high-purity raw material." },
  { icon: Factory, title: "Manufacturing & Technology", body: "In-house conversion of recycled copper into a full range of finished and semi-finished copper and brass products." },
  { icon: ShieldCheck, title: "Quality & Testing", body: "Quality embedded at every stage, from scrap sourcing and grading through to final product inspection." },
  { icon: Award, title: "Certified Systems", body: "Operations backed by ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certified systems." },
  { icon: Layers, title: "Customized Products", body: "Tailored dimensions, grades and finishes, engineered to your specific project or industrial requirement." },
  { icon: Workflow, title: "Integrated Value Chain", body: "Scrap, recycling, refining, processing and manufacturing — together under one roof, for full traceability." },
];

function Capabilities() {
  const gridRef = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.15, y: 20, scale: 0.95 });
  return (
    <section className="bg-[#e8dcc9] py-28 text-ink md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/60">Capabilities</p>
        <SplitReveal as="h2" className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl">
          Every step of the <span className="italic">value chain,</span> under one roof.
        </SplitReveal>

        <div
          ref={gridRef}
          className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-[#e8dcc9] p-8 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--accent)_15%,#e8dcc9)]"
            >
              <Icon className="h-8 w-8 text-accent transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{body}</p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-ink/40 transition-all group-hover:text-accent group-hover:rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const certs = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"];

function Certifications() {
  return (
    <section id="certifications" className="border-y border-ink/10 bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Certified Operations</p>
          <Link to="/contact" className="link-underline text-sm">Get in touch →</Link>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {[...certs, ...certs, ...certs].map((c, i) => (
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

function FinalCta() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <CtaBand
          title="Let's Build Something Sustainable, Together."
          body="Whether you need standard copper and brass products or a customized solution for your industry, our team is ready to help."
          buttons={[
            { label: "Contact Us", to: "/contact", primary: true },
            { label: "View Product Catalogue", to: "/products" },
          ]}
        />
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="bg-cream">
      <Hero />
      <ScrollPanels />
      <About />
      <Impact />
      <Capabilities />
      <Certifications />
      <FinalCta />
    </main>
  );
}
