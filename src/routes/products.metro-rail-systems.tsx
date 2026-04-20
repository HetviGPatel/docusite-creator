import { createFileRoute } from "@tanstack/react-router";
import { TrainTrack } from "lucide-react";
import metroImg from "../assets/metro-rail.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/metro-rail-systems")({
  component: Page,
  head: () => ({ meta: [{ title: "Metro Rail Systems — Jigisha Group" }, { name: "description", content: "200K+ metro rail products — doors, HVAC, ATC, platform screen doors, escalators, ticketing." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Metro Rail Systems"
      tagline="200K+ products for urban transit — rolling stock, station, signaling and AFC systems"
      overview="A comprehensive product portfolio for metro corporations — covering rolling stock electrical and interior items, station MEP, signaling and telecom hardware, automatic fare collection, platform screen doors, escalators, lifts and complete passenger experience systems for both elevated and underground metros."
      heroImage={metroImg}
      Icon={TrainTrack}
      stats={[
        { value: "200K+", label: "SKUs" },
        { value: "EN 45545", label: "Fire Safe Materials" },
        { value: "IP65+", label: "Outdoor Rated" },
        { value: "NCMC", label: "Fare Media" },
      ]}
      offerings={[
        { title: "Automatic Doors & PSDs", desc: "Train sliding doors, plug doors, gangway doors and platform screen doors — full-height, half-height and gap-filler systems with controllers, sensors and obstacle detection." },
        { title: "HVAC & Climate Control", desc: "Roof-top air-conditioning packages, saloon HVAC, driver-cab AC, split units for stations and tunnel ventilation fans engineered for high passenger density." },
        { title: "ATC & Train Control Hardware", desc: "Sub-assemblies and accessories for CBTC ATC/ATO/ATP systems — antennas, balises, axle counters, on-board computers and trackside controllers." },
        { title: "Escalators, Lifts & Travelators", desc: "Heavy-duty public-transit escalators, hydraulic and traction lifts, panoramic lifts, travelators and complete vertical transportation packages with AMC support." },
        { title: "Automatic Fare Collection", desc: "AFC gates (flap, swing, retractable), ticket vending machines, customer service terminals, NCMC contactless cards, QR scanners and back-office software." },
        { title: "Passenger Information Systems", desc: "Dynamic LED route maps, LCD displays, TFT signage, public address, emergency intercom, talk-back units and integrated passenger info management." },
        { title: "CCTV & Surveillance", desc: "On-board and station CCTV, IP cameras, NVR/VMS, video analytics, intrusion detection and integration with metro security operation centers." },
        { title: "Interior Fit-out & Flooring", desc: "GFRP panels, anti-slip flooring, seats, grab handles, hand rails, perch seats, modesty panels and luggage racks meeting EN 45545 fire-safety standards." },
        { title: "Station Furniture & Accessibility", desc: "Benches, bins, signage, tactile paving, braille signage, accessible ramps, baby-care rooms and inclusive design accessories for universal accessibility." },
        { title: "Telecom & Communication Backbone", desc: "OFC cables, switches, routers, TETRA radio, IP-PABX, public Wi-Fi infrastructure and complete station-to-OCC communication hardware." },
      ]}
      capabilities={["EN 45545-2 fire-safe","IP65+ outdoor enclosures","Type-tested per EN/IEC","CBTC sub-vendor approvals","NCMC certified fare media","Multi-vendor integration","Spares stocking","O&M training","FAT/SAT support","BIM coordination","Cleanroom assembly","Tunnel-grade logistics"]}
      whyUs={[
        { title: "Metro-Specialized", desc: "Catalogue tailored for metro standards — not generic rail. Materials, fire ratings and form factors built for urban transit." },
        { title: "Multi-City Supply", desc: "Active deliveries to Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kochi, Lucknow and Ahmedabad metros." },
        { title: "AMC Backed", desc: "Every system supplied with available long-term AMC and spares — keeping metros running smoothly for decades." },
      ]}
    />
  );
}
