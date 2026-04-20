import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import defenceImg from "../assets/defence-tech.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/services/defence")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Defence & Aerospace Services — Jigisha Group" },
      { name: "description", content: "Defence and aerospace engineering, MRO, indigenization and supply services for DRDO, HAL, BEL, Indian Armed Forces and OEMs." },
    ],
  }),
});

function Page() {
  return (
    <DetailPage
      category="services"
      title="Defence & Aerospace"
      tagline="Mission-critical engineering, indigenization and MRO for armed forces and OEMs"
      overview="Aligned with the Make in India and Atmanirbhar Bharat vision, Jigisha Group delivers defence and aerospace engineering services, indigenization of imported sub-systems, MRO support, and precision component supply to DRDO, HAL, BEL, BDL, Indian Army, Navy, Air Force, Coast Guard and tier-1 global OEMs."
      heroImage={defenceImg}
      Icon={Shield}
      stats={[
        { value: "DGQA", label: "Approved" },
        { value: "AS9100", label: "Aerospace QMS" },
        { value: "ITAR", label: "Aware Processes" },
        { value: "MoD", label: "Empanelled" },
      ]}
      offerings={[
        { title: "Indigenization & Import Substitution", desc: "Reverse engineering, sample qualification, vendor development and Type Approval support for indigenization of imported sub-systems for armoured vehicles, aircraft, naval platforms and missile programmes under SRIJAN portal." },
        { title: "Aerospace Component Manufacturing", desc: "Precision-machined parts, sheet metal assemblies, looms and harnesses, ground support equipment for fixed-wing, rotary-wing and UAV platforms — produced under AS9100 quality systems." },
        { title: "MRO for Land, Air & Naval Systems", desc: "Overhaul of armoured vehicle sub-systems, aircraft LRUs, naval propulsion auxiliaries, gearboxes, hydraulics and avionics line-replaceable units with full traceability." },
        { title: "Electronic Warfare & C4ISR Support", desc: "Sub-assembly manufacture, cable harnesses, ruggedized enclosures and integration support for radar, EW, communication and surveillance systems supplied to BEL, ECIL and DPSUs." },
        { title: "Ammunition & Ordnance Components", desc: "Machined components, fuze parts, casings, propellant handling fixtures and quality-controlled supply for Ordnance Factories and private ammunition manufacturers." },
        { title: "Naval & Marine Engineering", desc: "Auxiliary machinery refurbishment, valves, pumps, HVAC and damage-control equipment supply for Indian Navy and Coast Guard ships, submarines and offshore patrol vessels." },
        { title: "Test Rigs & Ground Support Equipment", desc: "Custom design and fabrication of hydraulic, pneumatic and electrical test benches, GSE trolleys, towing tractors and platform jigs for armed forces depots." },
        { title: "Strategic Programme Support", desc: "Confidential vendor support to strategic programmes including space, missile and nuclear domains under appropriate security clearances and ITAR-aware processes." },
      ]}
      capabilities={["DGAQA / DGQA / CEMILAC links","AS9100 aerospace QMS","Cleanroom assembly","5-axis CNC machining","NABL-accredited testing","NDT — UT, RT, MPI, DPI","Ruggedization & MIL-STD","EMI/EMC test support","Security cleared workforce","Lifetime spares programme","Confidential vendor lists","Offset partnership ready"]}
      whyUs={[
        { title: "Strategic Trust", desc: "Long-standing relationships with DPSUs, OFB successors and strategic establishments built on confidentiality and consistent quality." },
        { title: "Make-in-India Aligned", desc: "Active participant in indigenization programmes via SRIJAN, iDEX and offset routes with proven import-substitution case studies." },
        { title: "End-to-End Capability", desc: "From engineering and manufacturing to MRO and lifecycle support — single accountable partner for complex defence programmes." },
      ]}
    />
  );
}
