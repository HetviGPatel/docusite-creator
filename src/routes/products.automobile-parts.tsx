import { createFileRoute } from "@tanstack/react-router";
import { Car } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/automobile-parts")({
  component: Page,
  head: () => ({ meta: [{ title: "Automobile Parts — Jigisha Group" }, { name: "description", content: "250K+ automobile products — spares, EV components, lubricants, tyres, fleet supplies." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Automobile Parts"
      tagline="250K+ products — IC engine spares, EV components, lubricants, tyres, fleet supplies"
      overview="Jigisha Group is a trusted multi-brand auto parts and fleet-supply partner for OEMs, dealers, fleet operators, transport corporations and after-market workshops. Our portfolio spans IC engine spares, EV components, batteries, tyres, lubricants and complete fleet maintenance kits with rapid PAN-India distribution."
      heroImage={warehouseImg}
      Icon={Car}
      stats={[
        { value: "250K+", label: "SKUs" },
        { value: "Multi-brand", label: "Coverage" },
        { value: "OEM", label: "Authorized" },
        { value: "Same-day", label: "Dispatch" },
      ]}
      offerings={[
        { title: "Engine Spares & Accessories", desc: "Pistons, rings, liners, gaskets, bearings, crankshafts, camshafts, valves, timing chains, water pumps, oil pumps and complete engine overhaul kits for cars, CVs and tractors." },
        { title: "EV Components & Batteries", desc: "Lithium-ion batteries, BMS, motor controllers, traction motors, on-board chargers, DC-DC converters, EV cables and complete EV powertrain components." },
        { title: "Lubricants & Coolants", desc: "Engine oils, gear oils, transmission fluids, hydraulic oils, brake fluids, coolants, greases and specialty lubricants from leading brands with bulk supply options." },
        { title: "Tyres, Tubes & Brakes", desc: "Passenger, commercial vehicle, off-highway and two-wheeler tyres; brake pads, brake shoes, brake discs, master cylinders, calipers and complete brake-system parts." },
        { title: "Fleet Maintenance Supplies", desc: "Filters (oil, air, fuel, cabin), wipers, bulbs, batteries, belts, hoses, fuses, fuses, mirrors and complete fleet upkeep consumables with VMI for large operators." },
        { title: "Body Parts & Panels", desc: "Bumpers, fenders, doors, bonnets, windscreens, lamp assemblies, mirrors, door handles and exterior body trim for popular Indian car and CV models." },
        { title: "Electrical & Lighting", desc: "Starters, alternators, ignition coils, spark plugs, sensors, headlamps, tail lamps, fog lamps, indicators, horns, wiring harnesses and ECUs." },
        { title: "Filters & Consumables", desc: "Oil filters, air filters, fuel filters, cabin filters, hydraulic filters, fuel additives, cleaners, polishes and complete service-kit supplies for workshops." },
      ]}
      capabilities={["OEM authorized distribution","ARAI/BIS compliant parts","Multi-brand catalogue","Bulk fleet supply","Workshop kitting","E-commerce ready","Cold-chain for batteries","Hazmat handling","Reverse logistics","Warranty management","Technical training","Pan-India dealer network"]}
      whyUs={[
        { title: "Vast Catalogue", desc: "Genuine and OE-equivalent parts across all major Indian and global vehicle brands under one roof." },
        { title: "Fleet Specialist", desc: "Dedicated VMI and fleet-supply contracts for transport corporations, logistics fleets and bus operators." },
        { title: "EV-Future Ready", desc: "Comprehensive EV component portfolio supporting India's electric mobility transition." },
      ]}
    />
  );
}
