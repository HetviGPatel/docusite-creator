import { createFileRoute } from "@tanstack/react-router";
import { Cpu } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/infotech")({
  component: Page,
  head: () => ({ meta: [{ title: "Infotech & Digital — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Infotech & Digital"
      tagline="ERP, IoT, AI, cybersecurity and Industry 4.0 for digital transformation"
      overview="Jigisha Group's infotech vertical delivers enterprise software, industrial IoT, AI solutions, cloud, cybersecurity, custom development and SCADA integration — bridging operational technology and information technology across factories, infrastructure and government."
      heroImage={warehouseImg}
      Icon={Cpu}
      stats={[{ value: "ISO 27001", label: "Certified" }, { value: "MeitY", label: "Empanelled" }, { value: "Cloud", label: "AWS/Azure" }, { value: "OT/IT", label: "Convergence" }]}
      offerings={[
        { title: "ERP & CRM Implementation", desc: "SAP, Oracle, Microsoft Dynamics, Odoo, Salesforce — implementation, customization, integration and AMS support." },
        { title: "IoT & Industrial IoT", desc: "Sensor networks, edge gateways, MQTT/OPC-UA connectivity, IoT platforms and IIoT-driven OEE and predictive maintenance." },
        { title: "AI & Machine Learning", desc: "Computer vision, predictive analytics, NLP, generative AI, LLM-based applications and ML-Ops pipelines." },
        { title: "Cybersecurity Services", desc: "VAPT, SOC, SIEM, IT/OT security, ISO 27001 advisory, DPDP compliance and incident response." },
        { title: "Cloud Migration & DevOps", desc: "AWS/Azure/GCP migration, containerization, Kubernetes, CI/CD, FinOps and cloud-native re-architecture." },
        { title: "Custom Software Development", desc: "Web, mobile, microservices, APIs, low-code platforms and enterprise application engineering." },
        { title: "Digital Twins & Simulation", desc: "Asset and process digital twins for plants, infrastructure and rolling stock with real-time data binding." },
        { title: "Industrial Automation & SCADA", desc: "PLC, DCS, SCADA, HMI, MES integration and Industry 4.0 connectivity bridging OT and IT layers." },
      ]}
      capabilities={["ISO 27001 / 9001","MeitY empanelment","CMMI mature","AWS/Azure/GCP partners","DevOps & SRE teams","Data engineering","ML-Ops","OT cybersecurity","DPDP compliance","Agile delivery","24x7 NOC/SOC","Multi-vertical experience"]}
      whyUs={[
        { title: "OT + IT Native", desc: "We speak both factory floor and enterprise stack — rare convergence expertise." },
        { title: "Outcome-Driven", desc: "Engagements measured on business outcomes — OEE lift, downtime reduction, revenue growth." },
        { title: "Secure by Design", desc: "Cybersecurity baked into every solution, not bolted on — DPDP and ISO 27001 aligned." },
      ]}
    />
  );
}
