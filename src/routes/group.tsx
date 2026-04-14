import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/group")({
  component: GroupPage,
  head: () => ({
    meta: [
      { title: "19 Group Companies — Jigisha Group" },
      { name: "description", content: "Explore all 19 subsidiary companies under Jigisha Group — spanning Railways, Defence, IT, Agro, Green Energy and more." },
      { property: "og:title", content: "The Group — Jigisha Group of Companies" },
      { property: "og:description", content: "19 subsidiaries powering India's industrial ecosystem." },
    ],
  }),
});

const subsidiaries = [
  { id: "01", name: "Jigisha Enterprises", type: "Holding & Strategic Management", sector: "Industrial Supermarket, ICBMRO, Procurement", website: "www.jigisha.in", desc: "Apex holding company for all 19 entities. Drives design-to-delivery industrial ecosystem across 7,500+ vendors and 3M+ products." },
  { id: "02", name: "Jigisha Railtech Pvt Ltd", type: "Railway Technology", sector: "Railway, Metro Rail, High-Speed Rail, Rolling Stock", website: "www.jigisharailtech.com", desc: "Dedicated railway technology arm. R&D, manufacturing, supply, SITC of signaling, OHE, KAWACH, and rolling stock components." },
  { id: "03", name: "Jigisha International Pvt Ltd", type: "Global Trade", sector: "Import, Export, Cross-Border Trade, Joint Ventures", website: "www.jigisha.global", desc: "International business operations — import/export, overseas logistics, contract manufacturing, and global partnerships across 15+ countries." },
  { id: "04", name: "Jigisha Defense Technologies", type: "Defence & Aerospace", sector: "Defence Supply, Military Components, Strategic Tech", website: "", desc: "Supply of defence-grade components for Indian Armed Forces, partnerships with international defence OEMs. Aligned with Make in India." },
  { id: "05", name: "Jigisha Pharma & Healthcare", type: "Pharmaceutical", sector: "Pharma Raw Materials, Medical Devices, Nutraceuticals", website: "", desc: "Pharmaceutical raw materials, APIs, medical devices, hospital procurement, cold-chain logistics with CDSCO and WHO-GMP compliance." },
  { id: "06", name: "Jigisha Retails Pvt Ltd", type: "B2C & B2B Retail", sector: "E-Commerce, Industrial Retail, International Shipping", website: "www.jigisharetail.com", desc: "Online retail of industrial products via B2C e-commerce with private-label products and international shipping capability." },
  { id: "07", name: "Jigisha Industries Pvt Ltd", type: "Manufacturing", sector: "Industrial Manufacturing, Supply, Engineering Products", website: "", desc: "CNC machining, fabrication, precision manufacturing, and industrial product development for OEM clients." },
  { id: "08", name: "Jigisha Infotech Pvt Ltd", type: "IT Solutions", sector: "Industrial IT, Web Dev, ERP/CRM, AI, IoT", website: "www.jigishainfotech.com", desc: "Digital transformation, JiSHAbot AI assistant, cybersecurity, cloud migration, and 25+ website ecosystem management." },
  { id: "09", name: "Jigisha Agro Industries", type: "Agriculture", sector: "Agricultural Inputs, Agro Machinery, CSP", website: "www.jigishaagro.com", desc: "Seeds, fertilizers, crop-care products, agro machinery, FPO procurement and supply chain support." },
  { id: "10", name: "Jigisha Electricals & Electronics", type: "Electrical", sector: "Electrical Products, Electronic Components", website: "www.jigishaelectricals.com", desc: "Domestic, commercial, and industrial electrical goods. LED, VFD, smart sensors, and energy monitoring systems." },
  { id: "11", name: "Jigisha Automobiles Pvt Ltd", type: "Automotive", sector: "Automobile Parts, Vehicle Accessories, EV", website: "www.jigishaautomobiles.com", desc: "Automobile parts, accessories, fleet supply, EV charging infrastructure components, and automotive consumables." },
  { id: "12", name: "Jigisha Green Pvt Ltd", type: "Renewable Energy", sector: "Solar, Bio-CNG, Sustainability, Green Tech", website: "www.jigisha.green", desc: "Solar pumps, Bio-CNG projects, ESG advisory, green infrastructure, waste-to-energy, and energy efficiency solutions." },
  { id: "13", name: "Jigisha Technologies Pvt Ltd", type: "Hi-Tech", sector: "Semiconductors, Advanced Materials, Robotics", website: "www.jigisha.technology", desc: "OSAT semiconductor packaging, graphene-based materials, industrial automation, robotics, and smart manufacturing solutions." },
  { id: "14", name: "Jigisha Media Vision Pvt Ltd", type: "Media & Marketing", sector: "Marketing, Media, Content, Events, News", website: "www.jigisha.media", desc: "Integrated marketing, digital media production, In-News platform, corporate communications, and PR services." },
  { id: "15", name: "Jigisha Engineering Pvt Ltd", type: "EPC & Infrastructure", sector: "EPC, Civil Infrastructure, Industrial Plants, Marine", website: "www.jigisha.engineering", desc: "Engineering, Procurement, Construction for industrial plants, railway stations, bridges, and infrastructure projects." },
  { id: "16", name: "Jigisha Envirocare Pvt Ltd", type: "Environment", sector: "Waste Management, Water Treatment, EHS", website: "www.jigishaenviro.com", desc: "ETP/STP design, solid waste management, air pollution control, environmental audits, and ISO certification consulting." },
  { id: "17", name: "Jigisha Infin Pvt Ltd", type: "Finance & Consulting", sector: "Trade Finance, Project Finance, Risk Advisory", website: "", desc: "Strategy and project management consultancy, trade and project finance advisory, risk management, and financial compliance." },
  { id: "18", name: "Jigisha Logistics Pvt Ltd", type: "Logistics", sector: "Freight, Warehousing, 3PL/4PL, Cold Chain", website: "", desc: "Multimodal freight, project logistics, warehousing, cold chain, hazardous goods transport, and fleet management." },
  { id: "19", name: "Jigisha Industrial Services", type: "Services", sector: "Installation, Maintenance, AMC, Manpower", website: "www.jigisha.services", desc: "Multi-disciplinary industrial services — electrical, mechanical, fabrication, furnishing, HSE compliance, and 1,000+ service centres." },
];

function GroupPage() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase">The Industrial Universe</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">19 Group Companies</h1>
          <p className="mt-4 text-navy-foreground/70 max-w-xl mx-auto">
            Jigisha Enterprises is the holding company overseeing the entire portfolio across multiple industries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {subsidiaries.map(s => (
            <div key={s.id} className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-gold">{s.id}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-card-foreground">{s.name}</h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-gold/10 text-gold rounded-full">{s.type}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{s.sector}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  {s.website && (
                    <a href={`https://${s.website}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-gold transition-colors">
                      {s.website} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
