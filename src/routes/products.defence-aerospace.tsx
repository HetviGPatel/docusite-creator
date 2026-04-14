import { createFileRoute, Link } from "@tanstack/react-router";
import defenceImg from "../assets/defence-tech.jpg";
import { Shield, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/defence-aerospace")({
  component: Page,
  head: () => ({ meta: [{ title: "Defence & Aerospace Products — Jigisha Group" }, { name: "description", content: "150K+ defence-grade products — precision parts, electronic sub-assemblies, strategic materials." }] }),
});

const items = ["Precision machined components", "Electronic sub-assemblies", "Strategic & specialty materials", "Military-grade fasteners & hardware", "Aerospace structural components", "Avionics parts & accessories", "Body armour & protection systems", "Communication & surveillance equipment"];

function Page() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={defenceImg} alt="Defence & Aerospace" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/products" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Products</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Defence & Aerospace</h1>
            <p className="mt-2 text-navy-foreground/70">150K+ products</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(s => (<div key={s} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-card"><Shield className="w-5 h-5 text-gold mt-0.5 shrink-0" /><span className="text-muted-foreground">{s}</span></div>))}
          </div>
          <div className="mt-12 text-center"><Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90">Request Catalogue <ChevronRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
