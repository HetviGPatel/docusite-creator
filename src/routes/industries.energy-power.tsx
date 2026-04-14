import { createFileRoute, Link } from "@tanstack/react-router";
import greenImg from "../assets/green-energy.jpg";
import { Zap, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/industries/energy-power")({
  component: Page,
  head: () => ({ meta: [{ title: "Energy & Power — Jigisha Group" }, { name: "description", content: "Solar, Bio-CNG, sustainability services, energy efficiency, renewable energy EPC and waste-to-energy solutions." }] }),
});

const items = ["Solar power EPC & installation", "Bio-CNG plant setup", "Energy efficiency audits", "Renewable energy consulting", "Waste-to-energy solutions", "Smart grid & metering", "Power distribution equipment", "Green building certification"];

function Page() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={greenImg} alt="Energy & Power" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/industries" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Industries</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Energy & Power</h1>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(s => (<div key={s} className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border shadow-card"><Zap className="w-5 h-5 text-gold mt-0.5 shrink-0" /><span className="text-muted-foreground">{s}</span></div>))}
          </div>
          <div className="mt-12 text-center"><Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90">Get in Touch <ChevronRight className="w-4 h-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
