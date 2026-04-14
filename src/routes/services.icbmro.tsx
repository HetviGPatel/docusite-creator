import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services/icbmro")({
  component: IcbmroServicesPage,
  head: () => ({
    meta: [
      { title: "ICBMRO & BMRO Services — Jigisha Group" },
      { name: "description", content: "Inspection, Condition-Based Monitoring, Repair & Overhaul. 1,000+ after-sales service centers across India." },
    ],
  }),
});

const items = [
  "Inspection, Condition-Based Monitoring, Repair & Overhaul (ICBMRO)",
  "Breakdown Maintenance, Repair & Overhaul (BMRO)",
  "Annual Maintenance Contracts (AMC) for railway and industrial assets",
  "1,000+ after-sales service centers across India",
  "Predictive maintenance using IoT and AI sensors",
  "Lifecycle asset management and optimization",
  "On-site and depot-level repair capabilities",
  "Spare parts inventory management and logistics",
];

function IcbmroServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link to="/services" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Services</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">ICBMRO & BMRO</h1>
          <p className="mt-3 text-navy-foreground/70 max-w-lg mx-auto">Comprehensive maintenance, repair and overhaul services with nationwide coverage</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-4">
            {items.map(s => (
              <li key={s} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-card">
                <Wrench className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Request AMC Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
