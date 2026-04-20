import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import greenImg from "../assets/green-energy.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/environment")({
  component: Page,
  head: () => ({ meta: [{ title: "Environment & Sustainability — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Environment & Sustainability"
      tagline="ETP/STP, waste management, air pollution control, ESG and sustainability"
      overview="Jigisha Group delivers complete environment and sustainability solutions — water and wastewater treatment, solid waste management, air pollution control, environmental audits, ESG reporting and ISO compliance — helping industries and cities meet regulatory and net-zero goals."
      heroImage={greenImg}
      Icon={Leaf}
      stats={[{ value: "CPCB", label: "Approved" }, { value: "ISO", label: "14001/45001" }, { value: "ESG", label: "BRSR Reporting" }, { value: "Net-Zero", label: "Roadmaps" }]}
      offerings={[
        { title: "ETP/STP Design & Installation", desc: "Effluent and sewage treatment plants — design, EPC, O&M with MBR, MBBR, SBR and ZLD technologies." },
        { title: "Solid Waste Management", desc: "MSW collection, segregation, processing, composting, MRF, landfill management and waste-to-energy integration." },
        { title: "Air Pollution Control Systems", desc: "Bag filters, ESPs, scrubbers, FGD systems, low-NOx burners and CEMS for industrial emission compliance." },
        { title: "Environmental Impact Audits", desc: "EIA, EMP preparation, environmental clearance support and statutory compliance audits for projects." },
        { title: "ISO 14001/45001 Consulting", desc: "EMS and OHSMS implementation, certification advisory, surveillance audit support and improvement programmes." },
        { title: "Water Quality Monitoring", desc: "Online water quality sensors, lab analysis, NABL-accredited testing and IoT-based monitoring dashboards." },
        { title: "Carbon Footprint Assessment", desc: "GHG inventory (Scope 1, 2, 3), carbon accounting, science-based targets and net-zero pathway design." },
        { title: "Sustainability Reporting & ESG", desc: "BRSR, GRI, SASB, TCFD reporting, ESG strategy, materiality assessment and stakeholder engagement." },
      ]}
      capabilities={["CPCB/SPCB approvals","NABL-accredited labs","CEMS integration","ZLD specialists","ISO 14001/45001 advisors","BRSR consultants","GHG protocol experts","Net-zero modellers","Climate risk assessors","TCFD-aligned","SBTi-ready","Third-party assurance"]}
      whyUs={[
        { title: "Compliance to Strategy", desc: "Beyond meeting CPCB norms — we build long-term sustainability strategies and net-zero roadmaps." },
        { title: "Tech + Advisory", desc: "Engineering treatment plants and writing ESG reports — full-stack environment partner." },
        { title: "Investor-Grade Reporting", desc: "BRSR and GRI reports trusted by lenders, investors and regulators — full assurance support." },
      ]}
    />
  );
}
