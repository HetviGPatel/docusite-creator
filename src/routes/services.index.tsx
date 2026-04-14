import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import { Train, Building2, Briefcase, Factory, Wrench, Shield } from "lucide-react";

export const Route = createFileRoute("/services/")({
  component: ServicesIndexPage,
  head: () => ({
    meta: [
      { title: "Services — Jigisha Group of Companies" },
      { name: "description", content: "Comprehensive industrial services — Railway, Metro Rail, Defence, Manufacturing, ICBMRO, BMRO, AMC and more." },
      { property: "og:title", content: "Our Services — Jigisha Group" },
      { property: "og:description", content: "End-to-end industrial services across India's critical sectors." },
    ],
  }),
});

const serviceCards = [
  { icon: Train, title: "Railway Services", desc: "Rolling stock, signaling, OHE, KAWACH, track machines, station electrification and more for Indian Railways.", to: "/services/railway" },
  { icon: Building2, title: "Metro Rail Services", desc: "Metro rolling stock, station infrastructure, depot equipment, smart metro and green solutions.", to: "/services/metro-rail" },
  { icon: Shield, title: "Defence Supply", desc: "Defence-grade components for Armed Forces, DRDO, HAL, BEL, BEML and Ordnance Factories.", to: "/services/defence" },
  { icon: Briefcase, title: "Commercial Services", desc: "Facility management, office fit-outs, security, housekeeping, IT and communication infrastructure.", to: "/services/commercial" },
  { icon: Factory, title: "Industrial Services", desc: "CNC machining, fabrication, MRO supply, plant equipment installation, automation and QC.", to: "/services/industrial" },
  { icon: Wrench, title: "ICBMRO & BMRO", desc: "Inspection, condition-based monitoring, repair, overhaul, AMC contracts, 1000+ service centers.", to: "/services/icbmro" },
];

function ServicesIndexPage() {
  return (
    <>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={railwayImg} alt="Railway services" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase">Complete Service Catalogue</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Our Services</h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="All Services" subtitle="Explore our comprehensive service offerings across sectors" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map(s => (
              <Link key={s.to} to={s.to as any} className="group bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover hover:border-gold/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <s.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:text-gold transition-colors">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
