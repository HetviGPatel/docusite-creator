import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import railwayImg from "../assets/railway-services.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/services/icbmro")({
  component: Page,
  head: () => ({
    meta: [
      { title: "ICBMRO & BMRO Services — Jigisha Group" },
      { name: "description", content: "Inspection, Condition-Based Monitoring, Repair & Overhaul services with 1,000+ after-sales service centers across India." },
    ],
  }),
});

function Page() {
  return (
    <DetailPage
      category="services"
      title="ICBMRO & BMRO"
      tagline="Inspection, Condition-Based Monitoring, Repair & Overhaul — nationwide coverage"
      overview="Jigisha Group operates one of India's largest distributed MRO networks — covering railway rolling stock, industrial machinery, defence assets, metro fleets and energy plants. With 1,000+ after-sales service centers, IoT-driven condition monitoring and OEM-grade overhaul shops, we keep mission-critical assets running at peak reliability."
      heroImage={railwayImg}
      Icon={Wrench}
      stats={[
        { value: "1,000+", label: "Service Centers" },
        { value: "ICBMRO", label: "Full Lifecycle" },
        { value: "IoT", label: "Predictive AI" },
        { value: "AMC", label: "Long-term Contracts" },
      ]}
      offerings={[
        { title: "Inspection & Condition Monitoring", desc: "Periodic inspection, vibration analysis, thermography, oil analysis, motor circuit testing and online condition monitoring with cloud dashboards and alert systems." },
        { title: "Breakdown Repair (BMRO)", desc: "24x7 emergency response, on-site root-cause analysis, expedited spares logistics, on-the-spot repairs and rapid asset return-to-service to minimize production loss." },
        { title: "Overhaul & Refurbishment", desc: "Full strip-down overhaul of motors, gearboxes, hydraulics, pumps, engines and rotating equipment in OEM-grade shops with load testing and warranty." },
        { title: "Annual Maintenance Contracts", desc: "Comprehensive AMC and CMC contracts with defined SLAs, embedded manpower, spares stocking, periodic preventive maintenance and uptime guarantees." },
        { title: "Predictive Maintenance Platform", desc: "IoT sensors, edge gateways, AI/ML-based failure prediction, RCM studies and a unified asset performance management platform across plants." },
        { title: "Spares Inventory Management", desc: "Vendor-managed inventory, critical-spare stocking, OEM equivalents, kitting, just-in-time logistics and end-to-end spare parts lifecycle management." },
        { title: "Depot-Level Repair", desc: "Heavy overhaul facilities for railway coaches, metro bogies, defence sub-systems and large industrial assemblies with calibrated test rigs." },
        { title: "Lifecycle Asset Optimization", desc: "Reliability engineering, mid-life upgrades, technology obsolescence management, energy-efficiency retrofits and end-of-life disposal advisory." },
      ]}
      capabilities={["Multi-skilled technicians","OEM-trained engineers","NDT inspection capability","IoT & data analytics","AMC/CMC contract teams","Spares warehousing","Pan-India logistics","Calibration & test rigs","Cloud monitoring platforms","SLA management","24x7 helpdesk","Mobile workshops"]}
      whyUs={[
        { title: "Largest Network", desc: "1,000+ service centers giving us the country's deepest after-sales footprint for any MRO partner." },
        { title: "Predictive by Design", desc: "IoT and AI baked into every contract — moving from reactive break-fix to predictive uptime." },
        { title: "OEM-Grade Quality", desc: "Original-spec overhauls with proper test rigs, calibrated tooling and certified workmanship." },
      ]}
    />
  );
}
