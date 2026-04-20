import { createFileRoute } from "@tanstack/react-router";
import { TrainTrack } from "lucide-react";
import metroImg from "../assets/metro-rail.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/metro-rail")({
  component: Page,
  head: () => ({ meta: [{ title: "Metro Rail — Jigisha Group" }, { name: "description", content: "Turnkey metro infrastructure across India's growing urban transit corridors." }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Metro Rail"
      tagline="Powering urban mobility across India's expanding metro network"
      overview="India's metro network is one of the world's fastest-growing urban transit programmes. Jigisha Group is an active partner to metro corporations — supplying rolling stock systems, third rail, CBTC sub-assemblies, AFC, PSDs, escalators and station MEP across operating and upcoming corridors."
      heroImage={metroImg}
      Icon={TrainTrack}
      stats={[{ value: "12+", label: "Metro Cities" }, { value: "CBTC", label: "Ready" }, { value: "PSD", label: "Integrated" }, { value: "FM", label: "O&M" }]}
      offerings={[
        { title: "Rolling Stock Components", desc: "Doors, HVAC, interiors, seats, PIDS, CCTV, lighting and electrical sub-assemblies for metro trainsets." },
        { title: "Station Electrical & MEP", desc: "LV/MV electricals, HVAC, plumbing, fire systems, BMS and complete station MEP packages." },
        { title: "Platform Screen Doors & CCTV", desc: "Full-height and half-height PSDs, gap fillers, IP CCTV, NVR/VMS and integrated security systems." },
        { title: "Depot Equipment & AMC", desc: "Bogie drop tables, wheel lathes, washing plants, lifting jacks and long-term depot O&M contracts." },
        { title: "Station Furniture & Accessibility", desc: "Benches, signage, tactile paving, ramps and inclusive design accessories for universal access." },
        { title: "Ticketing & Access Control", desc: "AFC gates, TVMs, NCMC card systems, QR ticketing and back-office clearing house integration." },
        { title: "Smart Passenger Info Systems", desc: "Dynamic LED maps, LCD displays, public address, intercom and integrated PIDS platforms." },
        { title: "Green Energy Integration", desc: "Solar rooftop, regenerative braking, energy-efficient lighting and sustainability retrofits for stations." },
      ]}
      capabilities={["EN 45545 fire-safe","IP65+ outdoor rated","CBTC sub-vendor","NCMC certified","BIM coordination","Tunnel logistics","Cleanroom assembly","Multi-city teams","FAT/SAT support","O&M training","Spares stocking","24x7 response"]}
      whyUs={[
        { title: "Metro-Specialized", desc: "Dedicated metro vertical with engineers experienced in CBTC, AFC, PSD and rolling stock." },
        { title: "Multi-Corridor Active", desc: "Live execution and supply across Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kochi and more." },
        { title: "Lifecycle Partner", desc: "DPR support to commissioning to long-term O&M — invested through the asset's full life." },
      ]}
    />
  );
}
