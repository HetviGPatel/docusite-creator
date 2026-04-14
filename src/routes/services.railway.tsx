import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../../components/SectionHeading";
import railwayImg from "../../assets/railway-services.jpg";
import { Train, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services/railway")({
  component: RailwayServicesPage,
  head: () => ({
    meta: [
      { title: "Railway Services — Jigisha Group" },
      { name: "description", content: "Complete supply, installation, testing & commissioning for Indian Railways — rolling stock, signaling, OHE, KAWACH, track machines." },
    ],
  }),
});

const services = [
  { title: "Rolling Stock", desc: "Supply of wheels, axles, bearings, brake systems, couplers, interiors, HVAC, LED lighting, fire detection. Installation, retrofitting, testing & commissioning. ICBMRO contracts & AMC services." },
  { title: "Production & Maintenance Unit Support", desc: "Fixtures, jigs, production tools, fabrication machinery. Depot equipment installation — wheel lathes, presses, turntables, drop tables. Maintenance platforms, pit lines, inspection bays." },
  { title: "Railway Signaling & Telecom (S&T)", desc: "Trackside and station signaling systems. Interlocking systems, point machines, relays, telecom panels. Fiber optics, GSM-R, Wi-Fi network maintenance." },
  { title: "OHE & Electrical Works", desc: "Design, supply, erection & commissioning of OHE structures. Masts, cantilevers, insulators, catenary and contact wires. OHE modification for electrification." },
  { title: "Station Electrification & Smart Energy", desc: "All lighting, poles, panels, and controls. LED/VFD/smart sensor retrofits. Solar power integration and energy audits." },
  { title: "KAWACH & Smart Railway", desc: "End-to-end KAWACH component supply and field integration. PM Gati Shakti infrastructure support. IoT, AI-based sensors, SCADA deployment." },
  { title: "Track Machines & SPART", desc: "Parts, calibration & AMC for Tamping Machines, Ballast Regulators. Maintenance of Tower Wagons, OHE Track Machines. Hydraulics, engines, rail gear." },
];

function RailwayServicesPage() {
  return (
    <>
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img src={railwayImg} alt="Railway Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <Link to="/services" className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">← All Services</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Railway Services</h1>
            <p className="mt-3 text-navy-foreground/70 max-w-lg mx-auto">Comprehensive solutions for Production Units, Maintenance Sheds, Divisions, and Zones</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <Train className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold text-card-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-1 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Request Railway Services Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
