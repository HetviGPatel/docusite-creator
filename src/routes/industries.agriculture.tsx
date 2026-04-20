import { createFileRoute } from "@tanstack/react-router";
import { Tractor } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/industries/agriculture")({
  component: Page,
  head: () => ({ meta: [{ title: "Agriculture — Jigisha Group" }] }),
});

function Page() {
  return (
    <DetailPage
      category="industries"
      title="Agriculture"
      tagline="Inputs, machinery, irrigation and FPO procurement for Indian farms"
      overview="Jigisha Group serves farmers, FPOs, agri-businesses and state agriculture departments with seeds, fertilizers, agro machinery, precision farming, cold storage, organic inputs and irrigation systems — supporting India's agricultural productivity and farmer prosperity goals."
      heroImage={warehouseImg}
      Icon={Tractor}
      stats={[{ value: "FCO/CIB", label: "Registered" }, { value: "PMKSY", label: "Specialist" }, { value: "FPO", label: "Procurement" }, { value: "Organic", label: "Certified" }]}
      offerings={[
        { title: "Seeds & Planting Material", desc: "Hybrid seeds, certified seeds, vegetable seeds, fruit saplings and tissue-cultured plants from approved producers." },
        { title: "Fertilizers & Crop Protection", desc: "Urea, DAP, NPK, micronutrients, biofertilizers, pesticides and bio-pesticides registered under FCO and CIB." },
        { title: "Agro Machinery & Implements", desc: "Tractors, power tillers, rotavators, seed drills, sprayers, harvesters, threshers and farm mechanization equipment." },
        { title: "Precision Farming Support", desc: "Soil testing, drone spraying, GPS-guided tractors, IoT soil sensors and data-driven crop advisory." },
        { title: "FPO Procurement Assistance", desc: "Bulk procurement, working capital tie-ups, tender support and direct-from-source supply for FPOs." },
        { title: "Cold Storage Solutions", desc: "Cold rooms, ripening chambers, blast freezers, reefer trucks and complete post-harvest cold chain." },
        { title: "Organic Farming Products", desc: "Organic inputs, bio-stimulants, compost, vermicompost, neem-based pesticides and organic certification support." },
        { title: "Irrigation Systems & Pumps", desc: "Drip irrigation, sprinklers, solar pumps under PM-KUSUM and complete PMKSY-aligned micro-irrigation packages." },
      ]}
      capabilities={["FCO/CIB registrations","PMKSY-empanelled","PM-KUSUM specialist","FPO partner network","Drone-spray operators","Soil-test labs","Cold-chain validated","Custom Hiring Centers","Subsidy documentation","Farmer training","Multi-state reach","Organic certification"]}
      whyUs={[
        { title: "Farm-to-Fork", desc: "Inputs, mechanization, irrigation, post-harvest — full value chain coverage under one partner." },
        { title: "Scheme Specialist", desc: "PM-KUSUM, PMKSY, PMFME and state subsidy navigation done end-to-end for farmers." },
        { title: "Quality Assured", desc: "Only registered, certified and tested inputs reach farms — protecting yield and soil health." },
      ]}
    />
  );
}
