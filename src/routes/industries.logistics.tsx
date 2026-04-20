import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/logistics")({
  component: Page,
  head: () => ({ meta: [{ title: "Logistics & Supply Chain — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Logistics & Supply Chain"
      tagline="Multimodal freight, warehousing, 3PL/4PL and last-mile across India"
      overview="Jigisha Group provides end-to-end logistics and supply chain solutions — multimodal freight, warehousing, cold chain, hazmat transport, last-mile delivery and supply chain consulting — serving manufacturers, retailers, e-commerce, pharma and government clients."
      heroImage={warehouseImg}
      Icon={Truck}
      stats={[{ value: "PAN-India", label: "Network" }, { value: "3PL/4PL", label: "Services" }, { value: "Cold-Chain", label: "Validated" }, { value: "WMS", label: "IT-Enabled" }]}
      offerings={[
        { title: "Multimodal Freight Management", desc: "Road, rail, air and sea freight orchestration with single-window visibility, customs clearance and door-to-door tracking." },
        { title: "Warehousing & Distribution", desc: "Grade-A warehouses, in-city fulfillment centers, bonded warehouses, racking, MHE and WMS-driven operations." },
        { title: "3PL/4PL Services", desc: "Outsourced logistics, control-tower 4PL, S&OP support, vendor onboarding and end-to-end supply chain management." },
        { title: "Cold Chain Logistics", desc: "Validated 2-8°C and -20°C transport for pharma, vaccines, dairy and frozen foods with IoT temperature monitoring." },
        { title: "Hazardous Goods Transport", desc: "DG-licensed vehicles, trained drivers, GPS-monitored fleet for chemicals, fuels, batteries and ADR-classified cargo." },
        { title: "Last-Mile Delivery", desc: "Same-day, next-day and scheduled deliveries with EV fleet, smart routing and POD digitization." },
        { title: "Fleet Management", desc: "GPS, telematics, fuel management, driver scoring, predictive maintenance and outsourced fleet operations." },
        { title: "Supply Chain Consulting", desc: "Network design, warehouse layout, S&OP transformation, digital supply chain and ESG-aligned logistics strategy." },
      ]}
      capabilities={["WMS/TMS platforms","IoT cargo tracking","Cold-chain qualified","Hazmat licensed","DG specialists","EV last-mile fleet","Customs broker","FTWZ operations","Reverse logistics","Predictive ETA","Green logistics","SLA-managed contracts"]}
      whyUs={[
        { title: "Tech-Forward", desc: "WMS, TMS, IoT and analytics built into every shipment for real-time visibility and control." },
        { title: "Specialty Capable", desc: "Cold-chain, hazmat and high-value cargo handled with proper certifications and trained crews." },
        { title: "PAN-India Coverage", desc: "Owned hubs and partner network spanning metros, tier-2/3 cities and remote locations." },
      ]}
    />
  );
}
