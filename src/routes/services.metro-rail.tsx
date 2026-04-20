import { createFileRoute } from "@tanstack/react-router";
import { TrainTrack } from "lucide-react";
import metroImg from "../assets/metro-rail.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/services/metro-rail")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Metro Rail Services — Jigisha Group" },
      { name: "description", content: "Turnkey metro rail solutions — rolling stock, third rail, signaling, AFC, depot equipment and station systems for urban transit." },
    ],
  }),
});

function Page() {
  return (
    <DetailPage
      category="services"
      title="Metro Rail Services"
      tagline="Modern urban transit — rolling stock, signaling, AFC and station infrastructure"
      overview="We partner with metro corporations across India — Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kochi, Lucknow, Ahmedabad and more — for turnkey delivery of rolling stock components, third rail systems, CBTC signaling, automatic fare collection, depot equipment, station finishes and integrated facility management."
      heroImage={metroImg}
      Icon={TrainTrack}
      stats={[
        { value: "12+", label: "Metro Cities" },
        { value: "CBTC", label: "Signaling Ready" },
        { value: "750V", label: "Third Rail DC" },
        { value: "FM", label: "O&M Services" },
      ]}
      offerings={[
        { title: "Rolling Stock & Interiors", desc: "Stainless steel coach bodies, GFRP interiors, passenger seats, grab handles, dynamic route maps, PIDS, CCTV, HVAC, LED lighting and complete passenger information systems for driverless and manned metro trainsets." },
        { title: "Third Rail & Traction Systems", desc: "750V DC third rail conductor bars, end-approach ramps, insulators, current collector shoes, bonding cables and traction sub-station equipment with SCADA integration." },
        { title: "CBTC Signaling & Telecom", desc: "Communication-Based Train Control component supply, ATS/ATO/ATP integration support, balises, axle counters, OFC backbone, TETRA radio and station telecom equipment." },
        { title: "Automatic Fare Collection", desc: "AFC gates, ticket vending machines, customer service terminals, NCMC card stock, QR ticketing and back-office clearing house integration." },
        { title: "Depot & Workshop Equipment", desc: "Bogie drop tables, wheel lathes, body lifting jacks, washing plants, sanding plants, fueling stations, automated wheel profile measurement and complete depot machinery installation." },
        { title: "Station Architecture & MEP", desc: "Platform screen doors (PSD), façades, claddings, false ceilings, station signage, escalators and elevators, ECS, fire detection, BMS and complete electrical and plumbing works." },
        { title: "Tunnel Ventilation & Safety", desc: "TVS fans, jet fans, smoke extraction systems, emergency lighting, evacuation walkways, fire suppression and tunnel SCADA — designed for NFPA 130 compliance." },
        { title: "O&M and Facility Management", desc: "Long-term operations & maintenance contracts, integrated facility management, housekeeping, security, MEP upkeep, spare parts management and predictive maintenance using IoT." },
      ]}
      capabilities={["Metro-grade material certifications","EN/IEC standards compliant","Fire-safe NFPA 130 designs","PSD & gap-filler integration","NCMC fare media expertise","BIM-based design coordination","Multi-disciplinary site teams","Tunnel & viaduct logistics","Cleanroom assembly facilities","24x7 O&M response","Spares & consumables stocking","Type tests & FAT support"]}
      whyUs={[
        { title: "Urban Transit Specialists", desc: "Dedicated metro vertical with engineers experienced across CBTC, AFC, PSD and rolling stock — aligned to international metro standards." },
        { title: "Multi-City Footprint", desc: "Active project execution and warehousing across India's major metro corridors enabling rapid mobilization." },
        { title: "Lifecycle Partnership", desc: "From DPR support to commissioning to long-term O&M — we stay invested through the asset's full life." },
      ]}
    />
  );
}
