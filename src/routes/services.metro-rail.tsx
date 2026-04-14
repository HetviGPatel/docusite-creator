import { createFileRoute, Link } from "@tanstack/react-router";
import metroImg from "../../assets/metro-rail.jpg";
import { Building2, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services/metro-rail")({
  component: MetroRailServicesPage,
  head: () => ({
    meta: [
      { title: "Metro Rail Services — Jigisha Group" },
      { name: "description", content: "End-to-end metro infrastructure — rolling stock, station systems, depot equipment, smart and green metro solutions." },
    ],
  }),
});

const items = [
  "Metro rolling stock components — doors, HVAC, lighting, interiors, ATC systems",
  "SITC for metro station electrical, signaling, platform screen doors (PSDs), CCTV",
  "Maintenance and AMC for metro depot equipment",
  "Station infrastructure — furniture, flooring, accessibility, escalators, lifts",
  "Smart metro systems — passenger info, ticketing, access control, Wi-Fi",
  "Green metro solutions — solar panels, energy management, regenerative braking",
  "Turnkey station electrical and MEP works",
  "Metro rolling stock interior refurbishment and upgrades",
];

function MetroRailServicesPage() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={metroImg} alt="Metro Rail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/services" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Services</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Metro Rail Services</h1>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-4">
            {items.map(s => (
              <li key={s} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-card">
                <Building2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
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
