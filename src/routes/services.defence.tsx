import { createFileRoute, Link } from "@tanstack/react-router";
import defenceImg from "../assets/defence-tech.jpg";
import { Shield, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services/defence")({
  component: DefenceServicesPage,
  head: () => ({
    meta: [
      { title: "Defence Supply Services — Jigisha Group" },
      { name: "description", content: "Defence-grade components for Indian Armed Forces, DRDO, HAL, BEL, BEML and Ordnance Factories." },
    ],
  }),
});

const items = [
  "Defence-grade components for Indian Armed Forces and paramilitary forces",
  "Manufacturing for DRDO, HAL, BEL, BEML, and Ordnance Factories",
  "Aerospace hardware and electronic sub-assemblies",
  "AS9100 quality management compliance",
  "Strategic materials and precision machined parts",
  "Aligned with Make in India and Atmanirbhar Bharat initiatives",
  "Defence Indigenisation and import substitution programs",
  "Complete supply chain management for defence procurement",
];

function DefenceServicesPage() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={defenceImg} alt="Defence" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/services" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Services</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Defence Supply</h1>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-4">
            {items.map(s => (
              <li key={s} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-card">
                <Shield className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Contact Defence Division <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
