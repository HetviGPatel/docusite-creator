import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import greenImg from "../assets/green-energy.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/green-energy")({
  component: Page,
  head: () => ({ meta: [{ title: "Green Energy Products — Jigisha Group" }, { name: "description", content: "100K+ green energy products — solar panels, bio-CNG, energy monitoring, waste-to-energy." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Green Energy"
      tagline="100K+ products — solar, bio-energy, storage, smart grid and energy efficiency"
      overview="Aligned with India's net-zero and renewable energy mission, Jigisha Group supplies a complete catalogue of green energy products — solar PV systems, bio-CNG plant equipment, energy storage, smart metering, EV charging and waste-to-energy systems for industrial, commercial, agricultural and utility customers."
      heroImage={greenImg}
      Icon={Leaf}
      stats={[
        { value: "100K+", label: "SKUs" },
        { value: "MNRE", label: "Approved" },
        { value: "ALMM", label: "Listed Modules" },
        { value: "BEE", label: "Star Rated" },
      ]}
      offerings={[
        { title: "Solar Panels & Modules", desc: "Mono-PERC, bifacial, TOPCon and HJT solar modules from ALMM-listed manufacturers ranging from 400W to 700W for rooftop, ground-mount and utility-scale projects." },
        { title: "Solar Pumps & Controllers", desc: "AC and DC solar water pumps under PM-KUSUM scheme — surface, submersible and centrifugal pumps with VFD controllers, mounting structures and complete BoS." },
        { title: "Bio-CNG Plant Equipment", desc: "Anaerobic digesters, gas holders, biogas upgradation skids, compressors, scrubbers, dispensing units and complete bio-CNG package plants for organic waste-to-fuel." },
        { title: "Energy Monitoring Systems", desc: "Smart energy meters, power quality analyzers, IoT-based energy dashboards, sub-metering, demand controllers and ISO 50001 EnMS-aligned platforms." },
        { title: "Waste-to-Energy Systems", desc: "Municipal solid waste incinerators, biomass gasifiers, RDF systems, ORC turbines and complete waste-to-power plant packages with emission control." },
        { title: "LED Energy-Efficient Lighting", desc: "BEE 5-star LED lights, smart streetlights, IoT-controlled industrial lighting and solar hybrid luminaires that cut lighting energy by up to 70%." },
        { title: "Battery Storage Systems", desc: "Lithium-ion battery packs, BMS, container BESS, residential storage, commercial storage and grid-scale energy storage with integration services." },
        { title: "Smart Meters & Grid Solutions", desc: "Single-phase, three-phase and CT-operated smart meters, AMI head-end systems, DCUs, LV monitors and prepaid metering for utilities and DISCOMs." },
        { title: "EV Charging Infrastructure", desc: "AC slow chargers, DC fast chargers, ultra-fast chargers, OCPP back-end software, billing platforms and complete EV charging station packages." },
        { title: "Solar BoS & Mounting", desc: "Module mounting structures, trackers, junction boxes, DC cables, fuses, surge protectors, lightning arresters and complete balance-of-system kits." },
      ]}
      capabilities={["MNRE approved equipment","ALMM-listed modules","BIS/IEC certified","Site survey & DPR","DISCOM net-metering liaison","CEIG approvals","O&M services","Performance monitoring","PM-KUSUM specialist","CFA documentation","CAPEX & RESCO models","ESG reporting"]}
      whyUs={[
        { title: "End-to-End Green Solutions", desc: "From product supply to design, installation and O&M — complete renewable energy lifecycle." },
        { title: "Scheme Specialists", desc: "Deep expertise in PM-KUSUM, PM Surya Ghar, MNRE schemes and net-metering processes nationwide." },
        { title: "Quality & Compliance", desc: "Only MNRE/ALMM-approved equipment with proper warranties and performance guarantees." },
      ]}
    />
  );
}
