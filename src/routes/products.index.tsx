import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import productsImg from "../assets/products-warehouse.jpg";
import { Package, Search, FileText, ShoppingCart, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/")({
  component: ProductsIndexPage,
  head: () => ({
    meta: [
      { title: "Products — India's Largest Industrial Supermarket" },
      { name: "description", content: "Over 3 Million products across Railways, Metro, Defence, Manufacturing, Energy and more." },
      { property: "og:title", content: "Products — Jigisha Industrial Supermarket" },
      { property: "og:description", content: "3M+ products across diverse industries." },
    ],
  }),
});

const categories = [
  { name: "Railway Components", count: "500K+", to: "/products/railway-components", items: ["Rolling stock parts", "Signaling equipment", "OHE structures", "KAWACH systems", "Track machines", "Station infrastructure"] },
  { name: "Metro Rail Systems", count: "200K+", to: "/products/metro-rail-systems", items: ["Doors & HVAC", "ATC systems", "Platform screen doors", "Escalators & lifts", "Ticketing systems"] },
  { name: "Defence & Aerospace", count: "150K+", to: "/products/defence-aerospace", items: ["Precision machined parts", "Electronic sub-assemblies", "Strategic materials", "Military components"] },
  { name: "Electricals & Electronics", count: "400K+", to: "/products/electricals-electronics", items: ["Panels & switchgear", "Cables & wires", "LED lighting", "VFD & sensors", "Smart energy systems"] },
  { name: "Industrial Machinery", count: "300K+", to: "/products/industrial-machinery", items: ["CNC machines", "Fabrication tools", "Material handling", "Conveyor systems", "Automation equipment"] },
  { name: "Automobile Parts", count: "250K+", to: "/products/automobile-parts", items: ["Spares & accessories", "EV components", "Lubricants", "Tyres & brakes", "Fleet supplies"] },
  { name: "Green Energy", count: "100K+", to: "/products/green-energy", items: ["Solar panels & pumps", "Bio-CNG systems", "Energy monitoring", "Waste-to-energy", "Sustainability products"] },
  { name: "Agro & Pharma", count: "200K+", to: "/products/agro-pharma", items: ["Seeds & fertilizers", "Agro machinery", "APIs & excipients", "Medical devices", "Lab equipment"] },
];

function ProductsIndexPage() {
  return (
    <>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={productsImg} alt="Industrial products warehouse" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase">India's Largest</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Industrial Supermarket</h1>
            <p className="mt-3 text-navy-foreground/70">Over 3 Million Products Across Industries</p>
          </div>
        </div>
      </section>

      <section className="bg-navy-gradient py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Package, value: "3M+", label: "Products" },
            { icon: Search, value: "7,500+", label: "Vendors" },
            { icon: FileText, value: "GeM/IREPS", label: "Compliant" },
            { icon: ShoppingCart, value: "B2B & B2C", label: "Platforms" },
          ].map(h => (
            <div key={h.label} className="text-center">
              <h.icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-navy-foreground">{h.value}</div>
              <div className="text-xs text-navy-foreground/60">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Product Categories" subtitle="Browse our comprehensive industrial catalogue by category" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(c => (
              <Link key={c.to} to={c.to as any} className="group bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover hover:border-gold/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm text-card-foreground">{c.name}</h3>
                  <span className="text-xs font-bold text-gold">{c.count}</span>
                </div>
                <ul className="space-y-1.5">
                  {c.items.map(i => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-gold/50" /> {i}
                    </li>
                  ))}
                </ul>
                <span className="mt-3 inline-block text-xs font-semibold text-primary group-hover:text-gold transition-colors">View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading title="Procurement Platforms" subtitle="Multiple channels for your industrial procurement needs" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "GeM Portal", desc: "Government e-Marketplace compliant procurement" },
              { name: "IREPS", desc: "Indian Railway E-Procurement System products" },
              { name: "Direct Supply", desc: "OEM supply via vendor portal at jigisha.store" },
            ].map(p => (
              <div key={p.name} className="bg-card rounded-xl p-5 border border-border shadow-card">
                <h4 className="font-semibold text-card-foreground">{p.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition-colors">
            Request Product Catalogue <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
