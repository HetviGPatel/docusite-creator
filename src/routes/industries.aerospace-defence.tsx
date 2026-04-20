import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import defenceImg from "../assets/defence-tech.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/aerospace-defence")({
  component: Page,
  head: () => ({ meta: [{ title: "Aerospace & Defence — Jigisha Group" }, { name: "description", content: "Defence-grade engineering, MRO and indigenization for Armed Forces, DRDO, HAL, BEL." }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Aerospace & Defence"
      tagline="Make-in-India partner to Armed Forces, DRDO, DPSUs and global OEMs"
      overview="Jigisha Group's aerospace & defence vertical supports India's strategic autonomy through indigenization, precision manufacturing, MRO services and supply of defence-grade components — aligned with Make in India, Atmanirbhar Bharat and SRIJAN portal initiatives."
      heroImage={defenceImg}
      Icon={Shield}
      stats={[{ value: "AS9100", label: "Certified" }, { value: "DGQA", label: "Approved" }, { value: "MoD", label: "Empanelled" }, { value: "SRIJAN", label: "Active" }]}
      offerings={[
        { title: "Defence-Grade Components", desc: "Precision parts, electronic sub-assemblies, fasteners, specialty materials for armoured vehicles, aircraft, naval platforms and missile programmes." },
        { title: "DRDO, HAL, BEL, BEML Partnerships", desc: "Vendor relationships across DPSUs for sustained supply, indigenization and engineering support." },
        { title: "Aerospace Hardware Manufacturing", desc: "AS9100-compliant machined and sheet-metal aerospace parts for fixed-wing, rotary-wing and UAV platforms." },
        { title: "Electronic Sub-Assemblies", desc: "PCB assemblies, harnesses, ruggedized enclosures for radar, EW, sonar and communication systems." },
        { title: "AS9100 Quality Compliance", desc: "Full aerospace QMS, FAI per AS9102, traceability, conflict-minerals compliance and ITAR-aware processes." },
        { title: "Make in India & Atmanirbhar Bharat", desc: "SRIJAN portal participation, import-substitution success stories and offset-partnership readiness." },
        { title: "Defence Indigenisation", desc: "Reverse engineering, sample qualification, vendor development and Type Approval for imported sub-systems." },
        { title: "Ordnance Factory Supplies", desc: "Machined components, fuze parts, casings and quality-controlled supply for ordnance manufacturers." },
      ]}
      capabilities={["DGAQA/CEMILAC links","Cleanroom assembly","5-axis CNC","NABL testing","NDT inspection","MIL-STD ruggedization","EMI/EMC support","Security cleared staff","Lifetime spares","Confidential vendor lists","Offset-partner ready","Strategic vetting"]}
      whyUs={[
        { title: "Strategic Trust", desc: "Long-standing DPSU and Armed Forces relationships built on confidentiality and quality." },
        { title: "Indigenization Proven", desc: "Track record of converting imports to indigenous supply via SRIJAN, iDEX and offset routes." },
        { title: "End-to-End Capability", desc: "Engineering, manufacturing, MRO and lifecycle support — single accountable partner." },
      ]}
    />
  );
}
