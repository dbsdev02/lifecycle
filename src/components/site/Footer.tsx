import { Link } from "@tanstack/react-router";
import { useScrollFade } from "@/components/site/motion";

const columns = [
  {
    h: "Company",
    l: [
      { label: "About Us", to: "/about" },
      { label: "Technologies", to: "/technologies" },
      { label: "Industries We Serve", to: "/industries" },
      { label: "Investors", to: "/investors" },
    ],
  },
  {
    h: "Products",
    l: [
      { label: "Copper Products", to: "/products" },
      { label: "Brass Products", to: "/products" },
      { label: "Customized Products", to: "/products" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  const ref = useScrollFade<HTMLDivElement>({ y: 40, duration: 0.9, start: "top 95%" });
  return (
    <footer ref={ref} className="bg-ink pb-10 pt-16 text-cream/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 border-b border-cream/10 pb-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-cream">
              <div className="grid h-9 w-9 place-items-center rounded-md border border-cream/40">
                <span className="font-display text-lg italic">S</span>
              </div>
              <span className="font-display text-lg">SVG Metals</span>
            </div>
            <p className="mt-4 max-w-sm text-sm">
              An integrated copper and non-ferrous metals recycling and manufacturing company,
              transforming scrap into high-quality industrial products.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.h}>
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-cream">{col.h}</div>
              <ul className="space-y-2 text-sm">
                {col.l.map((i) => (
                  <li key={i.label}>
                    <Link className="link-underline" to={i.to}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} SVG Metals Upcycling Limited. All rights reserved.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
