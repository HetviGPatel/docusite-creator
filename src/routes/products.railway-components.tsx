import { createFileRoute } from "@tanstack/react-router";
import { Train } from "lucide-react";
import railwayImg from "../assets/railway-services.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/railway-components")({
  component: Page,
  head: () => ({ meta: [{ title: "Railway Components — Jigisha Group" }, { name: "description", content: "500K+ railway components — rolling stock parts, signaling equipment, OHE structures, KAWACH systems." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Railway Components"
      tagline="500K+ products for Indian Railways — rolling stock, S&T, OHE, KAWACH, depot equipment"
      overview="Jigisha Group is an RDSO-approved supplier offering one of India's widest catalogues of railway components — covering rolling stock parts, signaling equipment, OHE infrastructure, KAWACH systems, depot machinery, station materials and complete spares packages for Production Units and Workshops."
      heroImage={railwayImg}
      Icon={Train}
      stats={[
        { value: "500K+", label: "SKUs Catalogued" },
        { value: "RDSO", label: "Approved Items" },
        { value: "PAN-India", label: "Warehousing" },
        { value: "GeM/IREPS", label: "Empanelled" },
      ]}
      offerings={[
        { title: "Rolling Stock Components", desc: "Wheels, axles, wheelsets, roller bearings, brake blocks, brake cylinders, distributors, couplers, draft gear, springs, draw gear and complete bogie sub-assemblies for ICF, LHB, Vande Bharat and freight stock." },
        { title: "Coach Interiors & Furnishing", desc: "FRP/GRP panels, vinyl flooring, seats, berths, modular toilets, bio-tanks, gangways, doors, windows, panels, vestibules and complete interior fit-out kits to RDSO specs." },
        { title: "HVAC, Lighting & Electricals", desc: "Roof-mounted package units, split AC, evaporators, LED coach lights, distribution boards, batteries, alternators, dynamos, fans, mobile-charging sockets and pantry equipment." },
        { title: "Fire Detection & Suppression", desc: "Smoke detectors, heat sensors, control panels, hooters, fire extinguishers, water-mist systems and complete coach-grade fire safety kits compliant with RDSO standards." },
        { title: "Signaling Equipment", desc: "Electronic interlocking sub-assemblies, point machines, relays, axle counters, signaling cables, line wires, power supply units, surge protectors and station signaling kits." },
        { title: "OHE Materials & Hardware", desc: "Masts, cantilevers, droppers, jumpers, insulators, section insulators, contact wire, catenary wire, anti-creep and tensioning equipment for 25kV electrification." },
        { title: "KAWACH Components", desc: "On-board and trackside KAWACH (TCAS) sub-assemblies, RFID tags, station-side equipment, antennas, cables and integration kits for safety system roll-out." },
        { title: "Track Machine Spares", desc: "Spares for Tamping Machines, BCM, DTS, BRM, Tower Wagons — hydraulics, pneumatics, engines, transmissions, sensors and tooling consumables." },
        { title: "Depot & Workshop Equipment", desc: "Wheel lathes, axle journal lathes, bogie test rigs, drop tables, wheel presses, lifting jacks, hydraulic presses, EOT cranes and inspection equipment." },
        { title: "Station Infrastructure", desc: "Platform shelters, benches, signage, modular toilets, water booths, RO units, escalators, lifts, PA systems, CCTV and passenger amenities." },
      ]}
      capabilities={["RDSO vendor approvals","IRS specification compliant","ISO 9001 / 14001 / 45001","NABL-accredited testing","Type & routine test reports","BIS / IS / EN materials","PAN-India warehouses","GeM & IREPS supply","Custom kitting & packaging","Reverse logistics","OEM tie-ups","Just-in-time delivery"]}
      whyUs={[
        { title: "Vast Catalogue", desc: "500K+ SKUs in one place — single PO for diverse railway needs across coaches, signaling, OHE and infrastructure." },
        { title: "Approved & Compliant", desc: "RDSO-listed items, IRS-compliant materials, complete documentation and traceability for every supply." },
        { title: "Reliable Logistics", desc: "Strategically located warehouses ensure rapid dispatch to railway zones, depots and workshops nationwide." },
      ]}
    />
  );
}
