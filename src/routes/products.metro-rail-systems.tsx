import { createFileRoute, Link } from "@tanstack/react-router";
import metroImg from "../assets/metro-rail.jpg";
import { Building2, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/metro-rail-systems")({
  component: Page,
  head: () => ({ meta: [{ title: "Metro Rail Systems — Jigisha Group" }, { name: "description", content: "200K+ metro rail products — doors, HVAC, ATC, platform screen doors, escalators, ticketing." }] }),
});

const items = ["Automatic doors & platform screen doors", "HVAC & climate control systems", "ATC & train control systems", "Escalators & elevators", "Ticketing & access control", "Passenger information displays", "CCTV & surveillance systems", "Interior furnishing & flooring", "Station furniture & accessibility aids", "Communication backbone equipment"];

function Page() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={metroImg} alt="Metro Rail Systems" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/products" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Products</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Metro Rail Systems</h1>
            <p className="mt-2 text-navy-foreground/70">200K+ products</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(s => (<div key={s} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-card"><Building2 className="w-5 h-5 text-gold mt-0.5 shrink-0" /><span className="text-muted-foreground">{s}</span></div>))}
          </div>
          <div className="mt-12 text-center"><Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90">Request Catalogue <ChevronRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
