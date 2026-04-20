import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/agro-pharma")({
  component: Page,
  head: () => ({ meta: [{ title: "Agro & Pharma Products — Jigisha Group" }, { name: "description", content: "200K+ agro and pharma products — seeds, fertilizers, machinery, APIs, medical devices, lab equipment." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Agro & Pharma"
      tagline="200K+ products for farms, FPOs, hospitals, pharma plants and labs"
      overview="A combined catalogue serving India's agriculture and healthcare value chains — from seeds, fertilizers and farm machinery to APIs, medical devices, lab equipment and hospital consumables. Jigisha Group is a single procurement partner for FPOs, agri-businesses, hospitals, pharma manufacturers and research labs."
      heroImage={warehouseImg}
      Icon={Heart}
      stats={[
        { value: "200K+", label: "SKUs" },
        { value: "CDSCO", label: "Compliant" },
        { value: "FCO/CIB", label: "Registered" },
        { value: "WHO-GMP", label: "Sourced" },
      ]}
      offerings={[
        { title: "Seeds & Planting Material", desc: "Hybrid seeds, certified seeds, vegetable seeds, fruit saplings, tissue-cultured plants, fodder seeds and complete planting kits sourced from approved producers." },
        { title: "Fertilizers & Crop Protection", desc: "Urea, DAP, NPK, micronutrients, biofertilizers, organic manures, pesticides, herbicides, fungicides and bio-pesticides registered under FCO and CIB." },
        { title: "Agro Machinery & Implements", desc: "Tractors, power tillers, rotavators, seed drills, sprayers, harvesters, threshers, drip-irrigation systems, sprinklers and complete farm mechanization equipment." },
        { title: "APIs & Excipients", desc: "Active Pharmaceutical Ingredients, intermediates, excipients, packaging materials and pharma-grade chemicals sourced from WHO-GMP and US-FDA approved manufacturers." },
        { title: "Medical Devices & Diagnostics", desc: "Patient monitors, ventilators, ECG machines, ultrasound, dialysis equipment, surgical instruments, diagnostic kits, IVD reagents and POC testing devices." },
        { title: "Lab & Analytical Equipment", desc: "HPLC, GC, UV-Vis, FTIR, dissolution apparatus, autoclaves, incubators, microscopes, centrifuges, lab consumables and full QC lab packages." },
        { title: "Cold Chain Packaging", desc: "Vaccine carriers, ice-lined refrigerators, deep freezers, cold boxes, qualified shipping containers and IoT-monitored cold-chain logistics for pharma." },
        { title: "Veterinary Products", desc: "Veterinary medicines, vaccines, feed supplements, animal health products, surgical instruments and dairy farm equipment for livestock and poultry." },
        { title: "Hospital Consumables", desc: "Surgical disposables, IV sets, syringes, gloves, masks, drapes, gauze, sutures, catheters and complete OT and ICU consumable packages." },
        { title: "Drip & Micro-Irrigation", desc: "Drip lines, emitters, sprinklers, filters, fertigation units, controllers and complete PMKSY-compliant micro-irrigation packages with installation." },
      ]}
      capabilities={["CDSCO licenses","FCO/CIB registrations","WHO-GMP sourcing","Cold-chain logistics","Hazmat handling","Tender supply (CGHS, ESIC, Govt)","FPO procurement support","Veterinary specialists","Lab installation","Calibration & validation","Pharmacovigilance support","Training & demo"]}
      whyUs={[
        { title: "Two-in-One Catalogue", desc: "Seamlessly serve agri and healthcare procurement under a single trusted partner with sector-specialist teams." },
        { title: "Compliance Strong", desc: "Full regulatory compliance — CDSCO, FCO, CIB, BIS, WHO-GMP — with documentation for every supply." },
        { title: "Last-Mile Cold Chain", desc: "Validated cold-chain logistics ensuring vaccine, biologic and seed integrity to remote locations." },
      ]}
    />
  );
}
