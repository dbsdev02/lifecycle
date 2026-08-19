import { createFileRoute } from "@tanstack/react-router";
import { Zap, Car, Sun, Snowflake, Building2, Hospital, BatteryCharging, Flame, Cpu, Settings } from "lucide-react";
import { useScrollFade } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
});

const industries = [
  {
    icon: Zap,
    title: "Power & Electrical",
    body: "Reliable, high-conductivity copper is the backbone of power transmission and distribution infrastructure. Our copper wires, flats, rods and tubes support power infrastructure and electrical applications where consistency and purity are non-negotiable.",
    products: "Copper Wires, Copper Flats, Copper Rods, Copper Tubes & Pipes",
    image: "https://images.unsplash.com/photo-1658870901055-665c9621d7a9?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Car,
    title: "EV & Automotive",
    body: "As electric mobility accelerates, demand for high-purity copper in motors, wiring harnesses and battery systems is growing fast. SVG Metals supplies copper and brass products suited to the precision and performance demands of the EV and automotive industry.",
    products: "Copper Wires, Copper Rods, Brass Wires, Brass Strips",
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    body: "Solar, wind and other renewable energy systems rely on copper for efficient conduction and long-term durability. Our recycled and refined copper products support the infrastructure powering the transition to clean energy.",
    products: "Copper Wires, Copper Flats, Copper Coils",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Snowflake,
    title: "HVAC & Refrigeration",
    body: "Copper tubes and pipes are essential to heating, ventilation, air conditioning and refrigeration systems, prized for their thermal conductivity and durability. Our HVAC-grade copper tubing is manufactured for consistent performance.",
    products: "Copper Tubes & Pipes, Brass Tubes",
    image: "https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Construction & Infrastructure",
    body: "From plumbing to electrical wiring and structural fittings, copper and brass are foundational materials in modern construction and real estate. SVG Metals supplies a dependable range of products for the built environment.",
    products: "Copper Tubes & Pipes, Copper Wires, Brass Tubes, Brass Strips",
    image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Hospital,
    title: "Medical Gas Systems",
    body: "Purity and reliability are critical in medical gas piping systems. Our copper tubes are manufactured to meet the exacting standards required for hospital and healthcare infrastructure.",
    products: "Copper Tubes & Pipes",
    image: "https://images.unsplash.com/photo-1629410484397-a4dcd74088a0?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage",
    body: "Battery and energy storage technologies depend on high-conductivity copper components for efficient performance. We supply copper products suited to the evolving energy storage sector.",
    products: "Copper Wires, Copper Rods, Copper Flats",
    image: "https://images.unsplash.com/photo-1676337167629-d896b3ed5724?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Flame,
    title: "Furnace & Industrial",
    body: "Industrial furnace applications demand materials that can perform reliably under demanding conditions. Our copper and brass products serve a wide range of furnace and general industrial applications.",
    products: "Copper Rods, Copper Billets, Copper Ingots",
    image: "https://images.unsplash.com/photo-1613970351372-9804e380bd09?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Cpu,
    title: "Electrical Components",
    body: "Manufacturers of switches, connectors, terminals and other electrical components rely on consistent-quality copper and brass inputs. SVG Metals supplies raw and semi-finished material suited for precision component manufacturing.",
    products: "Brass Strips, Brass Wires, Copper Flats",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=900&q=75&auto=format&fit=crop",
  },
  {
    icon: Settings,
    title: "General Engineering",
    body: "Beyond specific industries, our copper and brass products serve a broad base of general engineering and fabrication applications, supported by our ability to customize products to specification.",
    products: "Customized Products, Copper Rods, Brass Tubes",
    image: "https://images.unsplash.com/photo-1613206485381-b028e578e791?w=900&q=75&auto=format&fit=crop",
  },
];

function IndustriesPage() {
  const ref = useScrollFade<HTMLDivElement>({ children: true, stagger: 0.06, y: 20 });
  return (
    <main className="bg-cream">
      <PageHero
        crumb="Industries"
        eyebrow="Industries We Serve"
        title="Powering the Industries That Power the World."
        lead="SVG Metals' copper and brass products power a wide range of industries — from the power grid to the vehicles on the road, from renewable energy installations to hospital gas lines."
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&auto=format&fit=crop"
        imageAlt="High-voltage power transmission lines at sunset"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div ref={ref} className="grid gap-6 md:grid-cols-2">
            {industries.map(({ icon: Icon, title, body, products, image }) => (
              <div key={title} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-cream/95">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-ink-soft/70">
                    Relevant products: {products}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CtaBand
            title="Don't See Your Industry?"
            body="Our integrated manufacturing capabilities mean we can adapt to a wide range of applications. Get in touch and let's discuss your requirement."
            buttons={[{ label: "Get in Touch", to: "/contact", primary: true }]}
          />
        </div>
      </section>
    </main>
  );
}
