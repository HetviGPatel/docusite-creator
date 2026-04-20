import { createFileRoute } from "@tanstack/react-router";
import { Factory } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/services/industrial")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Industrial MRO Services — Jigisha Group" },
      { name: "description", content: "Industrial MRO, plant maintenance, EPC support, automation, utilities and turnaround services for manufacturing and process industries." },
    ],
  }),
});

function Page() {
  return (
    <DetailPage
      category="services"
      title="Industrial Services"
      tagline="Plant maintenance, EPC, automation and utilities for manufacturing & process industries"
      overview="Jigisha Group provides full-spectrum industrial maintenance, repair and operations (MRO) services to steel, cement, automotive, chemicals, power, oil & gas, FMCG and engineering plants across India. Our offering spans planned shutdowns, capital projects, automation upgrades, utility management and integrated plant facility services."
      heroImage={warehouseImg}
      Icon={Factory}
      stats={[
        { value: "500+", label: "Plants Served" },
        { value: "25+", label: "Industry Verticals" },
        { value: "ISO", label: "9001/14001/45001" },
        { value: "24x7", label: "Emergency Response" },
      ]}
      offerings={[
        { title: "Plant Maintenance & Shutdowns", desc: "Annualized contract maintenance, planned and emergency shutdowns, turnaround management, mechanical overhaul of pumps, compressors, gearboxes, blowers, fans and rotating equipment with vibration analytics." },
        { title: "EPC & Brownfield Expansion", desc: "Engineering, procurement, construction and commissioning for new lines, capacity expansions, retrofits and de-bottlenecking projects — civil, structural, mechanical, piping, E&I and pre-commissioning." },
        { title: "Industrial Automation & SCADA", desc: "PLC, DCS, SCADA, HMI deployment and migration, Industry 4.0 connectivity, MES, OEE dashboards, energy management systems and IIoT-based predictive maintenance solutions." },
        { title: "Utilities & Energy Management", desc: "Boilers, chillers, cooling towers, compressed air, DG sets, transformers, switchgear and complete utility O&M with energy audits and ECBC-aligned conservation programs." },
        { title: "Fabrication & Piping", desc: "Workshop and on-site fabrication of pressure vessels, tanks, ducting, structural steel and process piping with ASME/IBR welder qualifications, NDT and PWHT capabilities." },
        { title: "Material Handling & Conveyors", desc: "Belt, screw, drag, bucket and pneumatic conveying systems, EOT cranes, hoists, AGVs and conveyor refurbishment with predictive monitoring." },
        { title: "Predictive Maintenance & Reliability", desc: "Vibration analysis, thermography, oil tribology, ultrasound testing, motor circuit analysis, RCM studies, FMEA and reliability-centered maintenance programmes." },
        { title: "Industrial Consumables Supply", desc: "Single-window MRO supply — bearings, lubricants, fasteners, abrasives, electricals, safety PPE, hand tools, hydraulics and pneumatics — with VMI and just-in-time logistics." },
      ]}
      capabilities={["Skilled trade technicians","ASME / IBR welders","NDT Level II/III inspectors","Vibration analysts","Certified electricians","Instrumentation engineers","Crane & rigging crews","Confined-space teams","Hot-work permit systems","Vendor-managed inventory","Plant warehousing & MRO kitting","Industry 4.0 integration"]}
      whyUs={[
        { title: "Cross-Industry Depth", desc: "Engineering teams that have worked across steel, cement, auto, power, oil & gas — delivering best practices to every plant." },
        { title: "Safety-First Culture", desc: "Zero-harm goal driven by ISO 45001, behavior-based safety programmes and comprehensive PTW systems." },
        { title: "Single-Window MRO", desc: "From spares supply to skilled manpower to engineering — one partner replacing dozens of vendors." },
      ]}
    />
  );
}
