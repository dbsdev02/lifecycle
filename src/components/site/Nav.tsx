import { Link } from "@tanstack/react-router";
import { Globe, ChevronDown } from "lucide-react";
import svgLogo from "@/assets/svglogoheader.png";

const links = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Our Story", to: "/about" },
      { label: "Industries We Serve", to: "/industries" },
      { label: "Infrastructure", to: "/technologies" },
    ],
  },
  
  { label: "Products", to: "/products" },
  { label: "Process", to: "/process" },
  { label: "Mehta Cop", to: "/greentec" },
  { label: "Investors", to: "/investors" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img
            src={svgLogo}
            alt="SVG Metals Upcycling"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-5 rounded-full bg-white/80 px-6 py-3 text-sm text-ink backdrop-blur-md lg:flex">
          {links.map((l) =>
            "children" in l ? (
              <div key={l.to} className="group relative">
                <Link
                  to={l.to}
                  className="link-underline flex items-center gap-1"
                  activeProps={{ className: "font-medium text-accent" }}
                >
                  {l.label}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 translate-y-1 rounded-2xl border border-ink/10 bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                  {l.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block rounded-xl px-4 py-2.5 text-sm text-ink transition-colors hover:bg-ink/5"
                      activeProps={{ className: "font-medium text-accent" }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline"
                activeProps={{ className: "font-medium text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm text-ink backdrop-blur md:flex">
            <Globe className="h-4 w-4" /> ENG <ChevronDown className="h-3 w-3" />
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition-transform hover:scale-[1.03]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
