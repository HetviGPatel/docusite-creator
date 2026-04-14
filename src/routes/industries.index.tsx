import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import defenceImg from "../assets/defence-tech.jpg";
import greenImg from "../assets/green-energy.jpg";
import { Train, Building2, Shield, Zap, Factory, Cpu, Leaf, Heart, Truck, Radio, Tractor, Wrench } from "lucide-react";

export const Route = createFileRoute("/industries/")({
  component: IndustriesIndexPage,
  head: () => ({
    meta: [
      { title: "Industries We Serve — Jigisha Group" },
      { name: "description", content: "Jigisha Group serves Railways, Metro Rail, Defence, Energy, Healthcare, Agriculture, Construction, Manufacturing, Logistics and more." },
      { property: "og:title", content: "Industries — Jigisha Group" },
      { property: "og:description", content: "Industry-specific solutions for India's most critical sectors." },
    ],
  }),
});

const industries = [
  { icon: Train, name: "Indian Railways", desc: "Complete supply, installation, testing & commissioning for production units, maintenance sheds, divisions and zones.", img: railwayImg, to: "/industries/indian-railways" },
  { icon: Building2, name: "Metro Rail", desc: "End-to-end metro infrastructure — rolling stock components, station systems, depot equipment, smart metro solutions.", img: metroImg, to: "/industries/metro-rail" },
  { icon: Shield, name: "Aerospace & Defence", desc: "Defence-grade components for Indian Armed Forces and paramilitary. Aligned with Make in India.", img: defenceImg, to: "/industries/aerospace-defence" },
  { icon: Zap, name: "Energy & Power", desc: "Solar, Bio-CNG, sustainability services, energy efficiency, renewable energy EPC.", img: greenImg, to: "/industries/energy-power" },
  { icon: Heart, name: "Healthcare & Pharma", desc: "Pharmaceutical raw materials, APIs, medical devices, hospital procurement, cold-chain logistics.", img: null, to: "/industries/healthcare-pharma" },
  { icon: Tractor, name: "Agriculture", desc: "Seeds, fertilizers, crop-care products, agro machinery, precision farming support.", img: null, to: "/industries/agriculture" },
  { icon: Factory, name: "Manufacturing", desc: "CNC machining, fabrication, precision engineering, industrial consumables, MRO products.", img: null, to: "/industries/manufacturing" },
  { icon: Wrench, name: "Construction & EPC", desc: "EPC for industrial plants, civil infrastructure, railway stations, bridges, and power projects.", img: null, to: "/industries/construction-epc" },
  { icon: Truck, name: "Logistics & Supply Chain", desc: "Multimodal freight, warehousing, 3PL/4PL, cold chain, hazardous goods transport.", img: null, to: "/industries/logistics" },
  { icon: Cpu, name: "Infotech & Digital", desc: "ERP/CRM, IoT, AI solutions, cybersecurity, cloud migration, custom software.", img: null, to: "/industries/infotech" },
  { icon: Radio, name: "Media & Communications", desc: "Integrated marketing, digital media production, events, In-News platform, corporate PR.", img: null, to: "/industries/media" },
  { icon: Leaf, name: "Environment & Sustainability", desc: "ETP/STP design, solid waste management, air pollution control, environmental audits.", img: null, to: "/industries/environment" },
];

function IndustriesIndexPage() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase">Sector Coverage</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Industries We Serve</h1>
          <p className="mt-4 text-navy-foreground/70 max-w-xl mx-auto">
            From Railways and Defence to Agriculture and Green Energy — comprehensive solutions for every sector.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map(ind => (
            <Link key={ind.to} to={ind.to as any} className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:border-gold/30 transition-all">
              {ind.img && (
                <img src={ind.img} alt={ind.name} className="w-full h-44 object-cover" loading="lazy" />
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <ind.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground">{ind.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-primary group-hover:text-gold transition-colors">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
