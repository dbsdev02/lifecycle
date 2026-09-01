import { Link } from "@tanstack/react-router";
import { useScrollFade } from "@/components/site/motion";
import svgLogo from "@/assets/svg-logo-website-c.png";

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
    <footer ref={ref} className="bg-[#FBF9F5] pb-10 pt-16 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 border-b border-[#8E401A]/15 pb-14 md:grid-cols-4">
            <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <img
                src={svgLogo}
                alt="SVG Metals Upcycling"
                className="h-20 w-auto sm:h-24"
              />
            </Link>
            <p className="mt-4 max-w-sm text-base md:text-lg">
              An integrated copper and non-ferrous metals recycling and manufacturing company,
              transforming scrap into high-quality industrial products.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.h}>
              <div className="mb-4 text-sm uppercase tracking-[0.25em] text-black">{col.h}</div>
              <ul className="space-y-2.5 text-base md:text-lg">
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
        <div className="mt-8 flex flex-col justify-between gap-4 text-sm text-black/60 md:flex-row">
          <p>© {new Date().getFullYear()} SVG Metals Upcycling Limited. All rights reserved.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
