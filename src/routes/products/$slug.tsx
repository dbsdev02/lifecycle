import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, CircleCheck } from "lucide-react";
import { RevealImage, SplitReveal } from "@/components/site/motion";
import { CtaBand } from "@/components/site/CtaBand";
import { products, getProduct, type Product } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
});

function ProductDetailPage() {
  const product = Route.useLoaderData() as Product;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const categoryLabel = product.category === "copper" ? "Copper" : "Brass";

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-cream md:pb-20 md:pt-44">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <p className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/50">
            <Link to="/" className="hover:text-cream">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-cream">Products</Link>
            <span>/</span>
            <span className="text-cream/70">{product.title}</span>
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">{categoryLabel} Products</p>
              <SplitReveal as="h1" className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">
                {product.title}
              </SplitReveal>
              <p className="mt-6 max-w-lg text-base text-cream/70 md:text-lg">{product.tagline}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-cream transition-transform hover:scale-[1.03]"
                >
                  Enquire About This Product <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm text-cream transition-colors hover:bg-cream/10"
                >
                  <ArrowLeft className="h-4 w-4" /> All Products
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <RevealImage
                src={product.image}
                alt={product.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Overview</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.15] text-ink md:text-4xl">
                {product.tagline}
              </h2>
              <p className="mt-6 max-w-2xl text-ink-soft">{product.detail}</p>
              {product.brand && (
                <p className="mt-5 max-w-2xl text-xs uppercase tracking-[0.15em] text-accent">{product.brand}</p>
              )}
              {product.sections?.map((sec) => (
                <div key={sec.title} className="mt-10 max-w-2xl">
                  <h3 className="font-display text-xl text-ink">{sec.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {sec.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {product.gallery && product.gallery.length > 0 && (
                <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
                  {product.gallery.map((g, i) => (
                    <img
                      key={g}
                      src={g}
                      alt={`${product.title} ${i + 2}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Applications</p>
              <ul className="mt-5 space-y-3">
                {product.applications.map((a: string) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-ink">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#f3ece3] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-soft">Related</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.15] text-ink md:text-4xl">
              More {categoryLabel} Products
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CtaBand
            title="Need This to a Custom Specification?"
            body="Our integrated manufacturing capabilities allow us to produce this product to your dimensions, grade and finish. Tell us what you need."
            buttons={[{ label: "Talk to Us", to: "/contact", primary: true }]}
          />
        </div>
      </section>
    </main>
  );
}
