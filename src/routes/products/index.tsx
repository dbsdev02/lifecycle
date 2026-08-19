import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SplitReveal, useScrollFade } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { Notice } from "@/components/site/Notice";
import { CtaBand } from "@/components/site/CtaBand";
import { products, type Product } from "@/data/products";

export const Route = createFileRoute("/products/")({
  component: ProductsPage,
});

const copperProducts = products.filter((p) => p.category === "copper");
const brassProducts = products.filter((p) => p.category === "brass");

function ProductGrid({ items }: { items: Product[] }) {
  const ref = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.06, y: 20 });
  return (
    <div ref={ref} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <Link
          key={p.slug}
          to="/products/$slug"
          params={{ slug: p.slug }}
          className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-lg"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={p.image}
              alt={p.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h4 className="font-display text-xl text-ink">{p.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              View Details
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ProductsPage() {
  return (
    <main className="bg-cream">
      <PageHero
        crumb="Products"
        eyebrow="Products"
        title="Copper & Brass Products, Manufactured for Industry."
        lead="From raw scrap to precision-engineered finished products, SVG Metals manufactures a comprehensive range of copper and brass products for industrial applications across power, electrical, automotive, construction, energy and engineering sectors."
        image="https://plus.unsplash.com/premium_photo-1746430499149-4e744be8ac2f?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Woven copper metal texture"
      />

      <section id="copper" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Copper Products</p>
          <SplitReveal as="h2" className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-5xl">
            High-Purity Copper, Manufactured In-House
          </SplitReveal>
          <p className="mt-5 max-w-2xl text-ink-soft">
            High-purity copper products manufactured through our integrated recycling-to-manufacturing
            process, suited for power, electrical, HVAC, construction and industrial applications.
          </p>
          <ProductGrid items={copperProducts} />
        </div>
      </section>

      <section id="brass" className="bg-[#f3ece3] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Brass Products</p>
          <SplitReveal as="h2" className="mt-4 max-w-2xl font-display text-4xl leading-[1.1] md:text-5xl">
            A Dependable Range of Brass Products
          </SplitReveal>
          <p className="mt-5 max-w-2xl text-ink-soft">
            Manufactured to serve electrical, engineering, plumbing and industrial applications.
          </p>
          <ProductGrid items={brassProducts} />
          <div className="mt-10">
            <Notice>
              Additional brass SKUs and detailed technical specifications (alloys, grades,
              tolerances) were not included in the brief — please supply for a complete product
              datasheet.
            </Notice>
          </div>
        </div>
      </section>

      <section id="custom" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Customized Products</p>
            <SplitReveal as="h2" className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">
              Built to Your Specification
            </SplitReveal>
            <p className="mt-5 text-ink-soft">
              Every industry has different requirements — and every application has its own
              tolerances, alloys and finishes. Our integrated manufacturing capabilities allow us to
              produce copper and brass products according to customer specifications, offering
              tailored solutions in dimensions, grades and finishes to meet specific project or
              industrial requirements.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-cream transition-transform hover:scale-[1.03]"
            >
              Talk to Us About a Custom Requirement <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1713371398484-cc4e4f6a262a?w=1200&q=80&auto=format&fit=crop"
              alt="CNC machine precision-cutting a metal component"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="catalogue" className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CtaBand
            title="Product Catalogue"
            body="Download our complete product catalogue for detailed specifications across our copper and brass product range. (Catalogue file to be supplied by client.)"
            buttons={[{ label: "Contact Us for the Catalogue", to: "/contact", primary: true }]}
          />
        </div>
      </section>
    </main>
  );
}
