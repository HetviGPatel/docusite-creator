import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import aboutImg from "../assets/about-office.jpg";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Jigisha Group of Companies" },
      { name: "description", content: "Learn about Jigisha Group — India's largest industrial supermarket with 19 subsidiaries, 3M+ products and 7500+ vendors." },
      { property: "og:title", content: "About Us — Jigisha Group" },
      { property: "og:description", content: "The Industrial Universe — Serving Industries With Honesty, Pride & Honour." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={aboutImg} alt="Jigisha Group headquarters" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase">The Industrial Universe</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">About Jigisha Group</h1>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="Who We Are" subtitle="The Real Story" />
          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Jigisha Group of Companies is a rapidly growing, technology-enabled industrial conglomerate headquartered in Bhopal, Madhya Pradesh, India, with its registered office in Ahmedabad, Gujarat. Born from a deep understanding of Indian industrial needs — particularly in the Railway, Metro, PSU, and large-scale manufacturing sectors — Jigisha Group is widely recognised as THE INDUSTRIAL UNIVERSE.
            </p>
            <p>
              After a very long period of working with Indian and multinational companies across Indian Railways, various Metro Rail projects, PSUs, and large organisations, the founders realised that too many organisations were looking for a partner with an Indian accent in their working — a real feel of family culture with accuracy in work, high quality consciousness, and a deep commitment to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="Group Identity At A Glance" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["Group Name", "JIGISHA GROUP OF COMPANIES"],
              ["Group Identity", "The Industrial Universe"],
              ["Tagline", "Serving Industries With Honesty, Pride & Honour"],
              ["Founder Chairman", "Thakur Umesh Singh"],
              ["Founder Directors", "Shashank Kumar | Vinod Kumar | Rajveer Singh"],
              ["Headquarters", "F 904, 10th Floor, Rachna Tower, Bhopal, MP – 462023"],
              ["Registered Office", "923, 9th Floor, I Square Corporate Park, Ahmedabad – 380060"],
              ["Works / Plant", "Plot No. 2 & 3, Radhe Dham, Bhanpur, Bhopal – 462023"],
              ["Products", "Over 3 Million Products Across Industries"],
              ["Vendors", "7,500+ Approved Vendors Pan-India"],
              ["Working Hours", "24 Hours — 7 Days a Week"],
              ["Operating Model", "HQ → 5 Regional Hubs → 36 State HQs → 2,000+ Nodes"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <span className="text-sm font-semibold text-foreground min-w-[140px] shrink-0">{label}</span>
                <span className="text-sm text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="Vision, Mission & Values" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "Our Vision", text: "To join our journey to make global markets reachable to everyone, and industrial operations more convenient and profitable for every stakeholder — big or small — across India and the world." },
              { icon: Target, title: "Our Mission", text: "To be a leading industrial supplier, manufacturer, and service provider for Indian Railways, Metro Rail, and various industries — making Jigisha a unique and renowned name for quality services." },
              { icon: Heart, title: "Our Promise", text: "Driven by Honesty, Pride, and Honour. We combine project-driven learning, technology-first culture, inclusive work environments, and nation-building purpose into everything we do." },
            ].map(v => (
              <div key={v.title} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="Who We Serve" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Government & PSUs — Indian Railways, Metro Rail, Defence",
              "EPC Majors — Engineering, Procurement, Construction",
              "OEMs and OSATs — Original Equipment Manufacturers",
              "Utilities — Power, Energy, Water",
              "MSMEs & Large Enterprises",
              "Cooperatives and FPOs",
              "International Partners via Jigisha International",
            ].map(s => (
              <div key={s} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <Users className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="How We Win" subtitle="Our Operating Model" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Design-to-Value", text: "Engineering rigor, supplier development, and should-costing to unlock TCO savings." },
              { icon: Target, title: "Execution at Scale", text: "Playbooked deployments, maker-checker controls, KPI governance (OTIF, FTF, PR/Uptime)." },
              { icon: Shield, title: "Risk & Compliance", text: "SoD matrices, quarterly recertifications, statutory calendars, and immutable audit trails." },
              { icon: Users, title: "Partner Ecosystem", text: "OEM collaborations, JV structures, and channel programs that compress time-to-capability." },
            ].map(m => (
              <div key={m.title} className="flex gap-4 p-5 bg-card rounded-lg border border-border shadow-card">
                <m.icon className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-card-foreground">{m.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
