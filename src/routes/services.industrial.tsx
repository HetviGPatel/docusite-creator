import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services/industrial")({
  component: IndustrialServicesPage,
  head: () => ({
    meta: [
      { title: "Industrial Services — Jigisha Group" },
      { name: "description", content: "CNC machining, fabrication, MRO supply, plant equipment installation, automation and quality control." },
    ],
  }),
});

const items = [
  "CNC machining, fabrication, precision engineering",
  "MRO supply and services for all sectors",
  "Industrial plant equipment installation",
  "Industrial automation — SCADA, PLC, DCS, robotics",
  "Quality control and inspection services",
  "Turnkey project execution for manufacturing plants",
  "Contract manufacturing for OEM clients",
  "Industrial consumables and spares procurement",
];

function IndustrialServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link to="/services" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Services</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Industrial Services</h1>
          <p className="mt-3 text-navy-foreground/70 max-w-lg mx-auto">End-to-end industrial manufacturing, automation and quality solutions</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-4">
            {items.map(s => (
              <li key={s} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-card">
                <Factory className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Request Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
