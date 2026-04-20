import { createFileRoute } from "@tanstack/react-router";
import { Train } from "lucide-react";
import railwayImg from "../assets/railway-services.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/indian-railways")({
  component: Page,
  head: () => ({ meta: [{ title: "Indian Railways — Jigisha Group" }, { name: "description", content: "End-to-end solutions for Indian Railways — Production Units, Maintenance Sheds, Divisions and Zones." }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Indian Railways"
      tagline="Trusted partner across Production Units, Sheds, Divisions and all 17 Zones"
      overview="Indian Railways is the backbone of national mobility, and Jigisha Group is one of its trusted partners — supplying components, executing turnkey projects, running ICBMRO contracts and integrating next-generation technologies like KAWACH and PM Gati Shakti across the network."
      heroImage={railwayImg}
      Icon={Train}
      stats={[{ value: "17", label: "Zones Served" }, { value: "RDSO", label: "Approved" }, { value: "500K+", label: "Components" }, { value: "24x7", label: "Support" }]}
      offerings={[
        { title: "Rolling Stock Supply & Maintenance", desc: "Wheels, axles, bogies, brakes, couplers, HVAC, interiors, lighting and complete coach maintenance for ICF, LHB, Vande Bharat and EMU/MEMU rakes." },
        { title: "Signaling & Telecom (S&T) Systems", desc: "Interlocking, point machines, axle counters, OFC backbone, GSM-R, Wi-Fi and complete station and trackside S&T integration." },
        { title: "OHE Erection & Commissioning", desc: "Design, supply and erection of 25kV OHE — masts, cantilevers, contact wire, droppers and complete electrification corridors." },
        { title: "KAWACH Implementation", desc: "On-board and trackside KAWACH (TCAS) component supply, RFID deployment, integration and commissioning support." },
        { title: "Station Modernization & Electrification", desc: "Station redevelopment, lighting, MEP, accessibility, signage, passenger amenities and energy-efficient station retrofits." },
        { title: "Track Machine AMC", desc: "Spares and maintenance for Tamping, BCM, DTS, BRM, Tower Wagons and complete track machine fleet upkeep." },
        { title: "Depot Equipment", desc: "Wheel lathes, drop tables, presses, lifting jacks, bogie test rigs and complete depot machinery installation." },
        { title: "ICBMRO & POH Contracts", desc: "Integrated Coach Body Maintenance, Repair, Overhaul, Periodic Overhaul and Mid-Life Rehabilitation programmes." },
      ]}
      capabilities={["RDSO vendor approvals","IRS specifications","ISO 9001/14001/45001","GeM & IREPS empanelled","PAN-India deployment","Skilled S&T crews","OHE specialists","Heavy logistics","Calibration labs","Spares warehousing","24x7 AMC support","DPR & survey teams"]}
      whyUs={[
        { title: "Deep Railway DNA", desc: "Decades of working with IR — we understand zones, divisions, formats, timelines and culture." },
        { title: "Approved Supplier", desc: "RDSO listings, IRS compliance and proven vendor performance across multiple zones." },
        { title: "Future-Ready", desc: "Active in KAWACH, PM Gati Shakti, Vande Bharat, smart stations and IoT-driven railway transformation." },
      ]}
    />
  );
}
