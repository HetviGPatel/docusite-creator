import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/healthcare-pharma")({
  component: Page,
  head: () => ({ meta: [{ title: "Healthcare & Pharma — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Healthcare & Pharma"
      tagline="APIs, medical devices, hospital procurement and pharma plant solutions"
      overview="Jigisha Group serves hospitals, pharma manufacturers, diagnostic labs and government health programmes with APIs, medical devices, lab equipment, surgical consumables, cold-chain logistics and complete CDSCO/WHO-GMP compliant supply."
      heroImage={warehouseImg}
      Icon={Heart}
      stats={[{ value: "CDSCO", label: "Licensed" }, { value: "WHO-GMP", label: "Sourced" }, { value: "Cold-Chain", label: "Validated" }, { value: "CGHS/ESIC", label: "Empanelled" }]}
      offerings={[
        { title: "Pharmaceutical Raw Materials & APIs", desc: "Active Pharmaceutical Ingredients, intermediates, excipients and packaging from WHO-GMP and US-FDA approved sources." },
        { title: "Medical Devices & Diagnostics", desc: "Patient monitors, ventilators, ECG, ultrasound, dialysis, IVD reagents, POC devices and surgical equipment." },
        { title: "Hospital Procurement Solutions", desc: "Single-window supply for tertiary care hospitals — equipment, consumables, services and rate-contract management." },
        { title: "Cold-Chain Logistics", desc: "Validated 2-8°C and -20°C transport, ILRs, deep freezers and IoT-monitored vaccine and biologic distribution." },
        { title: "CDSCO & WHO-GMP Compliance", desc: "Regulatory advisory, licensing support, technical dossiers and audit preparation for pharma plants." },
        { title: "Lab & Analytical Equipment", desc: "HPLC, GC, UV-Vis, FTIR, dissolution apparatus, autoclaves, microscopes and full QC lab packages." },
        { title: "Surgical Instruments & Consumables", desc: "Surgical disposables, sutures, instruments, IV sets, gloves, gauze and complete OT/ICU consumable supply." },
        { title: "Telemedicine Infrastructure", desc: "Telemedicine carts, video conferencing, peripheral devices, PACS, HIS integration and remote-care platforms." },
      ]}
      capabilities={["CDSCO licenses","WHO-GMP sourcing","Cold-chain validated","Hazmat handling","CGHS/ESIC tenders","DGFT export licenses","Pharmacovigilance","Lab installation","Medical equipment AMC","Bio-medical engineering","Validation & calibration","Govt programme support"]}
      whyUs={[
        { title: "Healthcare Specialists", desc: "Trained teams that understand hospitals, pharma plants and regulatory rigor — not generalist suppliers." },
        { title: "Compliance First", desc: "Every supply backed by CDSCO licensing, GMP sourcing, cold-chain validation and full documentation." },
        { title: "Mission-Critical Reliability", desc: "Patient lives depend on uptime — our supply, AMC and emergency response is built for that pressure." },
      ]}
    />
  );
}
