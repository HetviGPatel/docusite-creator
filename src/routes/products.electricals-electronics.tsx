import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/electricals-electronics")({
  component: Page,
  head: () => ({ meta: [{ title: "Electricals & Electronics — Jigisha Group" }, { name: "description", content: "400K+ electrical and electronic products — panels, switchgear, cables, LED, VFD, sensors." }] }),
});

const items = ["Panels & switchgear", "Cables & wires (LT/HT)", "LED lighting systems", "VFD drives & controllers", "Sensors & instrumentation", "Smart energy management systems", "UPS & power backup", "Transformers & stabilizers", "Solar inverters & charge controllers", "Industrial connectors & terminals"];

function Page() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link to="/products" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Products</Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Electricals & Electronics</h1>
          <p className="mt-2 text-navy-foreground/70">400K+ products</p>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(s => (<div key={s} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-card"><Zap className="w-5 h-5 text-gold mt-0.5 shrink-0" /><span className="text-muted-foreground">{s}</span></div>))}
          </div>
          <div className="mt-12 text-center"><Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90">Request Catalogue <ChevronRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
