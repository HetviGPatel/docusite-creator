import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { Building2, Train, Shield, Zap, Factory, Globe, Users, ArrowRight, ChevronRight } from "lucide-react";
import heroImg from "../assets/hero-industrial.jpg";
import railwayImg from "../assets/railway-services.jpg";
import productsImg from "../assets/products-warehouse.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const stats = [
  { value: "3M+", label: "Products" },
  { value: "7,500+", label: "Vendors" },
  { value: "19", label: "Group Companies" },
  { value: "2,000+", label: "Service Nodes" },
  { value: "1,000+", label: "Service Centers" },
  { value: "200+", label: "Workshops" },
];

const services = [
  { icon: Train, title: "Railway Solutions", desc: "Complete supply, installation & maintenance for Indian Railways — rolling stock, signaling, OHE, KAWACH." },
  { icon: Building2, title: "Metro Rail Projects", desc: "End-to-end metro infrastructure — rolling stock, station systems, depot equipment, smart solutions." },
  { icon: Shield, title: "Defence & Aerospace", desc: "Defence-grade components, strategic materials, and manufacturing aligned with Make in India." },
  { icon: Factory, title: "Industrial Manufacturing", desc: "CNC machining, fabrication, precision engineering, and MRO supply across all industrial sectors." },
  { icon: Zap, title: "Green Energy", desc: "Solar, Bio-CNG, sustainability services, energy efficiency, and waste-to-energy solutions." },
  { icon: Globe, title: "International Trade", desc: "Import-export, overseas logistics, contract manufacturing, and global joint ventures." },
];

const companies = [
  "Jigisha Enterprises (Holding)", "Jigisha Railtech Pvt Ltd", "Jigisha International Pvt Ltd",
  "Jigisha Defense Technologies", "Jigisha Pharma & Healthcare", "Jigisha Retails Pvt Ltd",
  "Jigisha Industries Pvt Ltd", "Jigisha Infotech Pvt Ltd", "Jigisha Agro Industries",
  "Jigisha Electricals & Electronics", "Jigisha Automobiles Pvt Ltd", "Jigisha Green Pvt Ltd",
  "Jigisha Technologies Pvt Ltd", "Jigisha Media Vision Pvt Ltd", "Jigisha Engineering Pvt Ltd",
  "Jigisha Envirocare Pvt Ltd", "Jigisha Infin Pvt Ltd", "Jigisha Logistics Pvt Ltd",
  "Jigisha Industrial Services",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Jigisha Group industrial infrastructure" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-hero-gradient opacity-85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">The Industrial Universe</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-navy-foreground leading-tight">
              Jigisha Group<br />
              <span className="text-gold-gradient">of Companies</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-navy-foreground/80 max-w-xl leading-relaxed">
              India's Largest Industrial Supermarket — Serving Industries With Honesty, Pride & Honour. Over 3 Million Products across Railways, Metro, Defence, Manufacturing & more.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border border-navy-foreground/30 text-navy-foreground font-semibold rounded-lg hover:bg-navy-foreground/10 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-gold">{s.value}</div>
              <div className="text-sm text-navy-foreground/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="What We Do" subtitle="Comprehensive industrial solutions across India's most critical sectors" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow group border border-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <s.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition-colors">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="India's Industrial Supermarket" subtitle="" center={false} />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Jigisha Group of Companies is a rapidly growing, technology-enabled industrial conglomerate headquartered in Bhopal, Madhya Pradesh. With a supply network of over 3 million products and 7,500+ vendors, we serve as the single-source industrial procurement partner for India's most critical sectors.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From Railways and Metro Rail to Aerospace, Defence, Healthcare, Energy, and Agriculture — we don't just supply. We Buy, We Sell, We Maintain, We Build, We Design, We Deliver.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Railways", "Metro", "Defence", "Manufacturing", "Energy", "Agro", "Logistics", "Infotech"].map(s => (
                <span key={s} className="px-3 py-1 text-xs font-medium bg-navy/10 text-navy rounded-full">{s}</span>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition-colors">
              Learn More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={productsImg} alt="Industrial products warehouse" className="w-full h-80 object-cover" width={1280} height={720} loading="lazy" />
          </div>
        </div>
      </section>

      {/* 19 Companies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="19 Group Companies" subtitle="A diversified portfolio powering India's industrial ecosystem" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {companies.map((c, i) => (
              <div key={c} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-gold/40 transition-colors">
                <div className="w-8 h-8 rounded-md bg-navy flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <span className="text-sm font-medium text-card-foreground">{c}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/group" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition-colors">
              Explore All Companies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground">Ready to Partner With Us?</h2>
          <p className="mt-4 text-navy-foreground/70 max-w-xl mx-auto">
            Join 7,500+ vendors and thousands of institutional buyers across India. Get a quote or become a supplier today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Get a Quote</Link>
            <Link to="/careers" className="px-6 py-3 border border-navy-foreground/30 text-navy-foreground font-semibold rounded-lg hover:bg-navy-foreground/10 transition-colors">Join Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
