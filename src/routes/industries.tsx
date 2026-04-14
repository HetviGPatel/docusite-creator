import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import defenceImg from "../assets/defence-tech.jpg";
import greenImg from "../assets/green-energy.jpg";
import { Train, Building2, Shield, Zap, Factory, Cpu, Leaf, Heart, Truck, Radio, Tractor, Wrench } from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
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
  { icon: Train, name: "Indian Railways", desc: "Complete supply, installation, testing & commissioning for production units, maintenance sheds, divisions and zones. KAWACH, S&T, OHE, rolling stock, and ICBMRO services.", img: railwayImg },
  { icon: Building2, name: "Metro Rail", desc: "End-to-end metro infrastructure — rolling stock components, station systems, depot equipment, smart metro solutions, and green energy integration.", img: metroImg },
  { icon: Shield, name: "Aerospace & Defence", desc: "Defence-grade components for Indian Armed Forces and paramilitary. Aligned with Make in India, Atmanirbhar Bharat, and Defence Indigenisation.", img: defenceImg },
  { icon: Zap, name: "Energy & Power", desc: "Solar, Bio-CNG, sustainability services, energy efficiency, renewable energy EPC, and waste-to-energy solutions for industrial clients.", img: greenImg },
  { icon: Heart, name: "Healthcare & Pharma", desc: "Pharmaceutical raw materials, APIs, medical devices, hospital procurement, cold-chain logistics with CDSCO and WHO-GMP compliance.", img: null },
  { icon: Tractor, name: "Agriculture", desc: "Seeds, fertilizers, crop-care products, agro machinery, precision farming support, and FPO procurement and supply chain assistance.", img: null },
  { icon: Factory, name: "Manufacturing", desc: "CNC machining, fabrication, precision engineering, industrial consumables, MRO products, and contract manufacturing for OEM clients.", img: null },
  { icon: Wrench, name: "Construction & EPC", desc: "EPC for industrial plants, civil infrastructure, railway stations, bridges, and power projects. DPR preparation and project management consultancy.", img: null },
  { icon: Truck, name: "Logistics & Supply Chain", desc: "Multimodal freight, warehousing, 3PL/4PL, cold chain, hazardous goods transport, last-mile delivery, and fleet management.", img: null },
  { icon: Cpu, name: "Infotech & Digital", desc: "ERP/CRM, IoT, AI solutions, cybersecurity, cloud migration, custom software, digital twins, and industrial automation.", img: null },
  { icon: Radio, name: "Media & Communications", desc: "Integrated marketing, digital media production, events, In-News platform, corporate PR, and industrial magazine publication.", img: null },
  { icon: Leaf, name: "Environment & Sustainability", desc: "ETP/STP design, solid waste management, air pollution control, environmental audits, ISO 14001/45001 consulting, and water quality monitoring.", img: null },
];

function IndustriesPage() {
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
            <div key={ind.name} className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-shadow">
              {ind.img && (
                <img src={ind.img} alt={ind.name} className="w-full h-44 object-cover" loading="lazy" />
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <ind.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-semibold text-lg text-card-foreground">{ind.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
