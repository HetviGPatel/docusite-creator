import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import officeImg from "../assets/about-office.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/services/commercial")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Commercial & Institutional Services — Jigisha Group" },
      { name: "description", content: "Interior fit-outs, MEP, facility management, smart building automation and procurement for offices, campuses and institutions." },
    ],
  }),
});

function Page() {
  return (
    <DetailPage
      category="services"
      title="Commercial Services"
      tagline="Fit-outs, MEP, automation and FM for offices, campuses and institutions"
      overview="From corporate workplaces and IT parks to educational campuses, hospitals and government complexes, Jigisha Group delivers turnkey interior fit-outs, MEP services, smart-building automation, integrated facility management and institutional procurement — all under one accountable partner."
      heroImage={officeImg}
      Icon={Building2}
      stats={[
        { value: "10M+", label: "Sq.Ft Delivered" },
        { value: "IGBC", label: "Green Certified" },
        { value: "BMS", label: "Smart Buildings" },
        { value: "FM", label: "PAN-India" },
      ]}
      offerings={[
        { title: "Interior Fit-out & Workplace", desc: "Design-build interior fit-outs for corporates, IT parks, retail and hospitality — civil, partitions, ceilings, flooring, joinery, loose furniture, branding and complete handover with snag-free quality." },
        { title: "MEP — Electrical, HVAC, Plumbing, Fire", desc: "Complete MEP design and execution including LV/MV electricals, HVAC (VRF/chilled water), plumbing, fire detection and suppression, public health engineering and integration with BMS." },
        { title: "Smart Building & Automation", desc: "BMS, lighting controls, access control, CCTV, IBMS dashboards, energy meters, occupancy sensors, IoT integrations and command-center setups for intelligent facilities." },
        { title: "Integrated Facility Management", desc: "Hard FM (HVAC, electrical, plumbing, civil), soft FM (housekeeping, pantry, landscaping), security, helpdesk and CAFM-driven asset management for offices and campuses." },
        { title: "Institutional Procurement", desc: "Furniture, IT hardware, lab equipment, audio-visual systems, signage and consumables supply for educational institutions, hospitals, government offices and PSUs via GeM and direct contracts." },
        { title: "Energy & Sustainability", desc: "IGBC/LEED green building advisory, energy audits, solar rooftop integration, water recycling, waste segregation and ESG reporting support." },
        { title: "AV, IT & Security Systems", desc: "Video conferencing, digital signage, structured cabling, Wi-Fi, server rooms, access control, CCTV, intrusion alarm and integrated command centers." },
        { title: "Repair & Renovation", desc: "Refurbishment of existing offices, retail outlets, bank branches and institutional spaces with minimal business disruption and phased execution." },
      ]}
      capabilities={["Design-build delivery","BIM coordination","IGBC/LEED advisors","MEP project managers","Licensed electricians","HVAC technicians","Fire-system installers","BMS/IBMS integrators","AV/IT specialists","FM software (CAFM)","Trained housekeeping","Security manpower"]}
      whyUs={[
        { title: "Single Accountability", desc: "Architecture, MEP, automation, FM — under one contract, one PM, one SLA." },
        { title: "Green & Smart by Default", desc: "Sustainability, energy efficiency and smart building tech baked into every project, not bolted on." },
        { title: "PAN-India Reach", desc: "Self-performing teams across metros and tier-2 cities for consistent delivery and rapid FM response." },
      ]}
    />
  );
}
