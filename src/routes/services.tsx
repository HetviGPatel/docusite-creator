import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import { Train, Building2, Briefcase, Factory, Wrench, Cpu, Zap, Shield } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Jigisha Group of Companies" },
      { name: "description", content: "Comprehensive industrial services — Railway, Metro Rail, Defence, Manufacturing, ICBMRO, BMRO, AMC and more." },
      { property: "og:title", content: "Our Services — Jigisha Group" },
      { property: "og:description", content: "End-to-end industrial services across India's critical sectors." },
    ],
  }),
});

const railwayServices = [
  { title: "Rolling Stock", desc: "Supply of wheels, axles, bearings, brake systems, couplers, interiors, HVAC, LED lighting, fire detection. Installation, retrofitting, testing & commissioning. ICBMRO contracts & AMC services." },
  { title: "Production & Maintenance Unit Support", desc: "Fixtures, jigs, production tools, fabrication machinery. Depot equipment installation — wheel lathes, presses, turntables, drop tables. Maintenance platforms, pit lines, inspection bays." },
  { title: "Railway Signaling & Telecom (S&T)", desc: "Trackside and station signaling systems. Interlocking systems, point machines, relays, telecom panels. Fiber optics, GSM-R, Wi-Fi network maintenance." },
  { title: "OHE & Electrical Works", desc: "Design, supply, erection & commissioning of OHE structures. Masts, cantilevers, insulators, catenary and contact wires. OHE modification for electrification." },
  { title: "Station Electrification & Smart Energy", desc: "All lighting, poles, panels, and controls. LED/VFD/smart sensor retrofits. Solar power integration and energy audits." },
  { title: "KAWACH & Smart Railway", desc: "End-to-end KAWACH component supply and field integration. PM Gati Shakti infrastructure support. IoT, AI-based sensors, SCADA deployment." },
  { title: "Track Machines & SPART", desc: "Parts, calibration & AMC for Tamping Machines, Ballast Regulators. Maintenance of Tower Wagons, OHE Track Machines. Hydraulics, engines, rail gear." },
];

const metroServices = [
  "Metro rolling stock components — doors, HVAC, lighting, interiors, ATC systems",
  "SITC for metro station electrical, signaling, platform screen doors (PSDs), CCTV",
  "Maintenance and AMC for metro depot equipment",
  "Station infrastructure — furniture, flooring, accessibility, escalators, lifts",
  "Smart metro systems — passenger info, ticketing, access control, Wi-Fi",
  "Green metro solutions — solar panels, energy management, regenerative braking",
];

const otherServices = [
  { icon: Briefcase, title: "Commercial Services", items: ["Facility management for corporate offices & industrial campuses", "Office fit-outs, furnishing & interior works", "Security services, housekeeping & campus management", "IT and communication infrastructure"] },
  { icon: Factory, title: "Industrial Services", items: ["CNC machining, fabrication, precision engineering", "MRO supply and services for all sectors", "Industrial plant equipment installation", "Industrial automation — SCADA, PLC, DCS, robotics", "Quality control and inspection services"] },
  { icon: Wrench, title: "ICBMRO & BMRO", items: ["Inspection, Condition-Based Monitoring, Repair & Overhaul", "Breakdown Maintenance, Repair & Overhaul", "AMC contracts for railway and industrial assets", "1,000+ after-sales service centers across India"] },
  { icon: Shield, title: "Defence Supply", items: ["Defence-grade components for Indian Armed Forces", "Manufacturing for DRDO, HAL, BEL, BEML, Ordnance Factories", "Aerospace hardware and electronic sub-assemblies", "AS9100 quality management compliance"] },
];

function ServicesPage() {
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
          <SectionHeading title="Services for Indian Railways" subtitle="Comprehensive solutions for Production Units, Maintenance Sheds, Divisions, Zones, and Modernisation across the country" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {railwayServices.map(s => (
              <div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <Train className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-card-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Services for Metro Rail" center={false} />
              <ul className="mt-8 space-y-3">
                {metroServices.map(s => (
                  <li key={s} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gold shrink-0" />
                    <span className="text-sm text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={metroImg} alt="Metro rail" className="w-full h-80 object-cover" width={1280} height={720} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="More Services" subtitle="Commercial, industrial, and defence solutions" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherServices.map(s => (
              <div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{s.title}</h3>
                </div>
                <ul className="space-y-2">
                  {s.items.map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gold/60 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
