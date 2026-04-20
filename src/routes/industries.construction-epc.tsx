import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import officeImg from "../assets/about-office.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/construction-epc")({
  component: Page,
  head: () => ({ meta: [{ title: "Construction & EPC — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Construction & EPC"
      tagline="EPC for industrial plants, civil infrastructure, railways, power and buildings"
      overview="Jigisha Group delivers EPC and construction services across industrial plants, civil infrastructure, railway and metro stations, bridges, power infrastructure, commercial buildings and MEP — backed by in-house design, project management and skilled execution teams."
      heroImage={officeImg}
      Icon={Wrench}
      stats={[{ value: "EPC", label: "Turnkey" }, { value: "ISO", label: "9001/14001/45001" }, { value: "BIM", label: "Coordinated" }, { value: "PMC", label: "Services" }]}
      offerings={[
        { title: "EPC for Industrial Plants", desc: "Greenfield and brownfield process plants — civil, structural, mechanical, piping, E&I — single-source EPC delivery." },
        { title: "Civil Infrastructure Projects", desc: "Roads, bridges, water supply, sewerage, urban infrastructure and government civil works under PPP and EPC modes." },
        { title: "Railway Station Construction", desc: "Station buildings, platforms, FOBs, washable aprons, passenger amenities under station redevelopment programmes." },
        { title: "Bridge & Flyover Works", desc: "RCC, PSC, steel bridges, ROBs, RUBs, flyovers and grade separators with heavy lifting and erection capability." },
        { title: "Power Project Infrastructure", desc: "Sub-station civil and structural works, transmission tower foundations, switchyards and BoP for thermal and renewable plants." },
        { title: "DPR Preparation & PMC", desc: "Detailed Project Reports, feasibility studies, Project Management Consultancy and owner-engineer services." },
        { title: "Building Construction & Interiors", desc: "Commercial, institutional, hospitality and industrial buildings with complete fit-out and interiors." },
        { title: "MEP Services & Commissioning", desc: "Mechanical, electrical, plumbing, fire and BMS — design, install, test, commission and handover." },
      ]}
      capabilities={["In-house design teams","BIM Level 2 coordination","Heavy lifting & cranes","Pre-cast yards","RMC plants","Skilled trade workforce","Safety-first culture","Quality labs","ISO 9001/14001/45001","GeM & CPWD listed","SUB-contractor management","EPC commercials"]}
      whyUs={[
        { title: "Multi-Sector EPC", desc: "Industrial, civil, railways, power, buildings — diverse expertise reduces silos and improves outcomes." },
        { title: "Design-Led Delivery", desc: "Strong in-house design and BIM ensures buildable, optimized and constructable solutions." },
        { title: "Safety & Compliance", desc: "ISO 45001 culture, behavior-based safety, PTW systems — zero-harm goal on every site." },
      ]}
    />
  );
}
