import { createFileRoute } from "@tanstack/react-router";
import { Building2, TrendingUp, PieChart, Users, Megaphone, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/investors")({
  component: InvestorsPage,
});

const items = [
  { icon: Building2, title: "Company Overview", body: "Overview of the business for investors." },
  { icon: TrendingUp, title: "Financial Highlights", body: "Annual reports and key financial metrics." },
  { icon: PieChart, title: "Shareholding Pattern", body: "Ownership and shareholding structure." },
  { icon: Users, title: "Board & Governance", body: "Board of Directors and governance framework." },
  { icon: Megaphone, title: "Announcements & Disclosures", body: "Investor announcements and regulatory disclosures." },
  { icon: Phone, title: "Investor Contact", body: "Dedicated contact / grievance redressal channel." },
];

function InvestorsPage() {
  return (
    <main className="bg-white">
      <PageHero
        crumb="Investors"
        eyebrow="Investors"
        title="Investing in a Sustainable Metals Future."
        lead="Information for current and prospective investors in SVG Metals Upcycling Limited."
        image="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Modern corporate office building"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-ink/10 bg-white p-8">
                <Icon className="h-8 w-8 text-accent" />
                <h4 className="mt-5 font-display text-xl text-ink">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {body} <em className="text-ink-soft/70">Content pending.</em>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
