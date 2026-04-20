import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import defenceImg from "../assets/defence-tech.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/defence-aerospace")({
  component: Page,
  head: () => ({ meta: [{ title: "Defence & Aerospace Products — Jigisha Group" }, { name: "description", content: "150K+ defence-grade products — precision parts, electronic sub-assemblies, strategic materials." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Defence & Aerospace"
      tagline="150K+ defence-grade products — precision parts, electronics, strategic materials"
      overview="Jigisha Group supplies a wide range of defence-grade and aerospace-qualified products to Indian Armed Forces, DRDO labs, DPSUs (HAL, BEL, BEML, BDL, MIDHANI), Ordnance Factories and tier-1 OEMs. All items are produced under AS9100, DGAQA and DGQA frameworks with full traceability and compliance documentation."
      heroImage={defenceImg}
      Icon={Shield}
      stats={[
        { value: "150K+", label: "SKUs" },
        { value: "AS9100", label: "QMS" },
        { value: "DGQA", label: "Approved" },
        { value: "MIL-STD", label: "Compliant" },
      ]}
      offerings={[
        { title: "Precision Machined Components", desc: "5-axis CNC machined parts, turn-mill components, micro-machined parts and complex sub-assemblies in aluminium, titanium, Inconel, stainless steels and special alloys." },
        { title: "Electronic Sub-Assemblies", desc: "PCB assemblies, ruggedized enclosures, cable harnesses, looms, connectors, junction boxes and integrated electronic LRUs for radar, EW, sonar and avionics applications." },
        { title: "Strategic & Specialty Materials", desc: "Maraging steels, titanium alloys, Inconel, super-alloys, composite materials, ballistic fabrics and specialty consumables sourced from approved mills with full mill TC." },
        { title: "Military Fasteners & Hardware", desc: "MIL-STD bolts, screws, rivets, inserts, captive fasteners, lockbolts and aerospace-grade fastening hardware in compliance with NAS, NSA and MIL specifications." },
        { title: "Aerospace Structural Components", desc: "Sheet metal sub-assemblies, machined frames, ribs, brackets, fittings and structural fasteners for fixed-wing, rotary-wing and UAV airframes." },
        { title: "Avionics Parts & Accessories", desc: "Avionics housings, mounting trays, cooling assemblies, EMI/RFI shielding, vibration isolators and ground-support accessories for cockpit and bay equipment." },
        { title: "Body Armour & Protection", desc: "Bullet-resistant plates, ballistic helmets, soft body armour, vehicle armour panels, armoured glass and personal protective gear meeting NIJ and BIS standards." },
        { title: "Communication & Surveillance Equipment", desc: "Tactical radios, antennas, surveillance cameras, thermal imagers, night-vision devices, optical sights and ruggedized communication accessories." },
      ]}
      capabilities={["AS9100D certified","DGAQA / DGQA / CEMILAC links","ITAR-aware processes","NDT (UT/RT/MPI/DPI)","Cleanroom packaging","FAI per AS9102","Conflict minerals compliance","Full material traceability","Security cleared workforce","Confidential vendor lists","Lifetime spares programmes","Offset partnership ready"]}
      whyUs={[
        { title: "Mission-Critical Quality", desc: "Every part backed by FAI, mill TC and complete batch traceability — built for life-safety and combat applications." },
        { title: "Trusted Defence Supplier", desc: "Long-running supply relationships with DPSUs and the Indian Armed Forces backed by stringent vetting." },
        { title: "Indigenization Partner", desc: "Active SRIJAN portal participant — converting imports to indigenous supply with proven case studies." },
      ]}
    />
  );
}
