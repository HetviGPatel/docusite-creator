import { createFileRoute, Link } from "@tanstack/react-router";
import metroImg from "../assets/metro-rail.jpg";
import { Building2, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/industries/metro-rail")({
  component: Page,
  head: () => ({ meta: [{ title: "Metro Rail — Jigisha Group" }, { name: "description", content: "End-to-end metro infrastructure — rolling stock, station systems, depot equipment, smart and green metro." }] }),
});

const items = ["Metro rolling stock components", "Station electrical & MEP", "Platform screen doors & CCTV", "Depot equipment & AMC", "Station furniture & accessibility", "Ticketing & access control", "Smart passenger info systems", "Green energy integration"];

function Page() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={metroImg} alt="Metro Rail" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/industries" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Industries</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Metro Rail</h1>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(s => (<div key={s} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-card"><Building2 className="w-5 h-5 text-gold mt-0.5 shrink-0" /><span className="text-muted-foreground">{s}</span></div>))}
          </div>
          <div className="mt-12 text-center"><Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90">Get in Touch <ChevronRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
