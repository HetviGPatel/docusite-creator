import { createFileRoute, Link } from "@tanstack/react-router";
import railwayImg from "../assets/railway-services.jpg";
import { Train, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/railway-components")({
  component: Page,
  head: () => ({ meta: [{ title: "Railway Components — Jigisha Group" }, { name: "description", content: "500K+ railway components — rolling stock parts, signaling equipment, OHE structures, KAWACH systems." }] }),
});

const items = ["Wheels, axles & bearings", "Brake systems & couplers", "Coach interiors & furnishing", "HVAC & LED lighting systems", "Fire detection & suppression", "Signaling equipment & relays", "Point machines & interlocking", "OHE masts, cantilevers & insulators", "Catenary & contact wires", "KAWACH components", "Track machine parts & spares", "Station infrastructure materials"];

function Page() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={railwayImg} alt="Railway Components" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/products" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Products</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Railway Components</h1>
            <p className="mt-2 text-navy-foreground/70">500K+ products for Indian Railways</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(s => (
              <div key={s} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-card">
                <Train className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90">Request Catalogue <ChevronRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
