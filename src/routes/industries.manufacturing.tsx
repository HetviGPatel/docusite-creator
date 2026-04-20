import { createFileRoute } from "@tanstack/react-router";
import { Factory } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/manufacturing")({
  component: Page,
  head: () => ({ meta: [{ title: "Manufacturing — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Manufacturing"
      tagline="CNC machining, fabrication, MRO and contract manufacturing for OEMs"
      overview="Jigisha Group serves Indian and global OEMs across automotive, capital goods, electronics and industrial equipment — offering precision machining, fabrication, surface treatment, contract manufacturing, quality control and MRO supply with full traceability."
      heroImage={warehouseImg}
      Icon={Factory}
      stats={[{ value: "AS9100/IATF", label: "Ready" }, { value: "5-Axis", label: "CNC" }, { value: "NABL", label: "Testing" }, { value: "OEM", label: "Approved" }]}
      offerings={[
        { title: "CNC Machining & Precision Engineering", desc: "5-axis CNC, turn-mill, micro-machining of complex parts in steels, aluminium, titanium and special alloys." },
        { title: "Fabrication & Welding Services", desc: "Sheet metal, structural and pressure-vessel fabrication with TIG, MIG, SAW capability and PWHT." },
        { title: "Industrial Consumables & MRO", desc: "Bearings, fasteners, lubricants, tooling, abrasives, PPE and complete consumable supply with VMI." },
        { title: "Contract Manufacturing for OEMs", desc: "Build-to-print, build-to-spec sub-assembly and full product manufacturing under OEM quality systems." },
        { title: "Quality Control & Inspection", desc: "CMM, vision inspection, NDT, NABL-accredited metrology and PPAP/APQP-driven quality processes." },
        { title: "Tool Room & Die Making", desc: "Press tools, injection moulds, gauges, fixtures and rapid tooling for automotive and consumer products." },
        { title: "Surface Treatment & Finishing", desc: "Plating, anodizing, painting, powder coating, heat treatment, PVD/CVD and specialty coatings." },
        { title: "Assembly & Sub-Assembly", desc: "Mechanical, electro-mechanical and electronic assembly under cleanroom or controlled-environment conditions." },
      ]}
      capabilities={["IATF 16949 ready","AS9100 systems","NABL metrology","CMM & vision inspection","PPAP/APQP","5-axis CNC capability","Welder qualifications","Heat-treat shops","Plating lines","Cleanroom assembly","Reverse engineering","Lean & Six Sigma"]}
      whyUs={[
        { title: "OEM-Quality Mindset", desc: "Built for tier-1/tier-2 supply with statistical quality control, traceability and PPAP discipline." },
        { title: "Engineering Capable", desc: "DFM/DFA inputs, value engineering and design optimization — not just job-shop machining." },
        { title: "Single-Source Convenience", desc: "Machining, fabrication, surface treatment, assembly under one roof — fewer vendors, faster delivery." },
      ]}
    />
  );
}
