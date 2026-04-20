import { createFileRoute } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/electricals-electronics")({
  component: Page,
  head: () => ({ meta: [{ title: "Electricals & Electronics — Jigisha Group" }, { name: "description", content: "400K+ electrical and electronic products — panels, switchgear, cables, LED, VFD, sensors." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Electricals & Electronics"
      tagline="400K+ products — panels, switchgear, cables, lighting, drives, automation"
      overview="Jigisha Group offers an end-to-end electrical and electronics catalogue for industrial, commercial, infrastructure and railway applications — from LV/MV switchgear and cables to LED lighting, VFDs, sensors, smart energy management and complete control panel solutions."
      heroImage={warehouseImg}
      Icon={Zap}
      stats={[
        { value: "400K+", label: "SKUs" },
        { value: "BIS/CE", label: "Certified" },
        { value: "OEM", label: "Authorized Distributor" },
        { value: "PAN-India", label: "Warehouses" },
      ]}
      offerings={[
        { title: "Panels & Switchgear", desc: "PCC, MCC, APFC, control panels, distribution boards, MV switchgear, ACBs, MCCBs, MCBs, RCCBs, contactors, relays and complete electrical cubicles built to IEC/IS standards." },
        { title: "Cables & Wires (LT/HT)", desc: "XLPE/PVC LT cables, HT cables up to 33kV, control cables, instrumentation cables, fire-survival cables, building wires and special-purpose railway and solar cables." },
        { title: "LED Lighting Systems", desc: "Industrial high-bays, street lights, flood lights, panel lights, downlighters, smart lighting, solar street lights and architectural lighting with BEE star ratings." },
        { title: "VFD Drives & Soft Starters", desc: "Variable frequency drives, soft starters, servo drives, motion controllers from leading OEMs for pumps, fans, compressors, conveyors and machine tools." },
        { title: "Sensors & Instrumentation", desc: "Temperature, pressure, flow, level, vibration, proximity sensors; transmitters, indicators, recorders, gas analyzers and process instrumentation." },
        { title: "Smart Energy Management", desc: "Smart meters, energy management systems, power quality analyzers, harmonic filters, capacitor banks and IoT-based energy dashboards." },
        { title: "UPS & Power Backup", desc: "Online UPS, line-interactive UPS, industrial UPS, battery banks, lithium-ion storage, inverters and complete data-center power solutions." },
        { title: "Transformers & Stabilizers", desc: "Distribution transformers, isolation transformers, control transformers, servo voltage stabilizers and dry-type transformers for industrial use." },
        { title: "Solar Inverters & Controllers", desc: "String inverters, central inverters, micro-inverters, MPPT charge controllers, hybrid inverters and complete solar BoS components." },
        { title: "Industrial Connectors & Terminals", desc: "Heavy-duty connectors, terminal blocks, cable glands, lugs, ferrules, junction boxes, plugs and sockets for industrial wiring applications." },
      ]}
      capabilities={["BIS/CE/UL certified","IEC/IS compliant","Authorized OEM distributor","Custom panel manufacturing","Type-tested assemblies","NABL-accredited testing","FAT & SAT support","Site commissioning","AMC services","E-catalogue & quick quote","GeM listed","Project-wise BoQ pricing"]}
      whyUs={[
        { title: "One-Stop Electrical Catalogue", desc: "Switchgear to sensors, cables to controllers — single window cuts vendor count and procurement overhead." },
        { title: "Genuine OEM Products", desc: "Authorized distribution agreements ensure original products with full warranty and OEM support." },
        { title: "Project Engineering", desc: "Beyond supply — we engineer panels, design cabling, commission systems and provide training." },
      ]}
    />
  );
}
