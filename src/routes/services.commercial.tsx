import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services/commercial")({
  component: CommercialServicesPage,
  head: () => ({
    meta: [
      { title: "Commercial Services — Jigisha Group" },
      { name: "description", content: "Facility management, office fit-outs, security services, housekeeping, IT and communication infrastructure." },
    ],
  }),
});

const items = [
  "Facility management for corporate offices & industrial campuses",
  "Office fit-outs, furnishing & interior works",
  "Security services, housekeeping & campus management",
  "IT and communication infrastructure",
  "Corporate event management and hospitality",
  "Fleet management and transportation services",
  "Catering and cafeteria management",
  "Energy management and green building consulting",
];

function CommercialServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link to="/services" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Services</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Commercial Services</h1>
          <p className="mt-3 text-navy-foreground/70 max-w-lg mx-auto">End-to-end commercial facility and infrastructure solutions</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-4">
            {items.map(s => (
              <li key={s} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-card">
                <Briefcase className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Get Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
