import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Technologies", to: "/technologies" },
  { label: "Industries", to: "/industries" },
  { label: "SVG Greentec", to: "/greentec" },
  { label: "Investors", to: "/investors" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-lg tracking-tight text-white mix-blend-difference">
          SVG Metals
        </Link>

        <nav
          className={`hidden items-center gap-5 rounded-full px-6 py-3 text-sm backdrop-blur-md transition-all lg:flex ${
            scrolled ? "bg-white/95 text-ink shadow-lg" : "bg-white/80 text-ink"
          }`}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline"
              activeProps={{ className: "font-medium text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
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
