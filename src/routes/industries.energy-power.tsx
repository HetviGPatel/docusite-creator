import { createFileRoute } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import greenImg from "../assets/green-energy.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/energy-power")({
  component: Page,
  head: () => ({ meta: [{ title: "Energy & Power — Jigisha Group" }, { name: "description", content: "Solar, Bio-CNG, energy efficiency, smart grid and waste-to-energy solutions." }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Energy & Power"
      tagline="Renewable energy, smart grid and sustainability solutions for India's net-zero journey"
      overview="From utility-scale solar farms and bio-CNG plants to smart grid roll-outs and energy efficiency for industries, Jigisha Group delivers complete renewable and conventional energy solutions — supporting India's commitment to 500 GW non-fossil capacity by 2030."
      heroImage={greenImg}
      Icon={Zap}
      stats={[{ value: "MNRE", label: "Approved" }, { value: "ALMM", label: "Modules" }, { value: "PM-KUSUM", label: "Specialist" }, { value: "EnMS", label: "ISO 50001" }]}
      offerings={[
        { title: "Solar Power EPC & Installation", desc: "Rooftop, ground-mount and floating solar EPC — site survey to commissioning to long-term O&M with PPA and net-metering support." },
        { title: "Bio-CNG Plant Setup", desc: "Anaerobic digestion, biogas upgradation, CBG dispensing under SATAT scheme — turnkey plants from waste streams." },
        { title: "Energy Efficiency Audits", desc: "BEE-accredited energy audits, ECBC compliance, ISO 50001 implementation and demand-side management programmes." },
        { title: "Renewable Energy Consulting", desc: "Feasibility, DPR, scheme advisory (PM-KUSUM, PM Surya Ghar, RTC tenders), techno-commercial evaluation." },
        { title: "Waste-to-Energy Solutions", desc: "MSW incineration, biomass gasification, RDF, WTE plants with emission control and grid integration." },
        { title: "Smart Grid & Metering", desc: "AMI roll-out, smart meters, DCUs, prepaid metering, demand response and grid analytics for DISCOMs." },
        { title: "Power Distribution Equipment", desc: "Transformers, switchgear, RMUs, distribution automation and complete sub-station packages for utilities." },
        { title: "Green Building Certification", desc: "IGBC/LEED advisory, water management, daylighting, HVAC optimization and net-zero building projects." },
      ]}
      capabilities={["MNRE-approved equipment","ALMM-listed modules","CEIG/DISCOM liaison","PPA/REC structuring","BEE-certified auditors","Performance monitoring","CAPEX/RESCO models","ESG reporting","Carbon accounting","Net-metering specialists","Battery storage integration","EV-charging linked solar"]}
      whyUs={[
        { title: "Full Stack Renewable", desc: "Solar, bio-energy, storage, smart meters, EV charging — every renewable lever under one partner." },
        { title: "Scheme Expertise", desc: "Deep know-how of PM-KUSUM, PM Surya Ghar and central/state subsidy mechanics." },
        { title: "Performance Guaranteed", desc: "Long-term O&M with generation guarantees, IoT monitoring and transparent reporting." },
      ]}
    />
  );
}
