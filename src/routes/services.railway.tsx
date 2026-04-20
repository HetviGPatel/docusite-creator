import { createFileRoute } from "@tanstack/react-router";
import { Train } from "lucide-react";
import railwayImg from "../assets/railway-services.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/services/railway")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Railway Services — Jigisha Group" },
      { name: "description", content: "Complete supply, installation, testing & commissioning for Indian Railways — rolling stock, signaling, OHE, KAWACH, track machines." },
    ],
  }),
});

function Page() {
  return (
    <DetailPage
      category="services"
      title="Railway Services"
      tagline="End-to-end engineering, supply, and lifecycle services for India's largest rail network"
      overview="Jigisha Group is a trusted partner to Indian Railways across Production Units, Maintenance Sheds, Divisions and Zones. From rolling stock components and signaling systems to KAWACH integration and OHE works, we deliver turnkey solutions backed by RDSO approvals, vendor codes, and decades of railway domain expertise."
      heroImage={railwayImg}
      Icon={Train}
      stats={[
        { value: "17", label: "Railway Zones Served" },
        { value: "500K+", label: "Components Supplied" },
        { value: "RDSO", label: "Approved Vendor" },
        { value: "24x7", label: "AMC Support" },
      ]}
      offerings={[
        { title: "Rolling Stock Solutions", desc: "Supply of wheels, axles, bearings, brake systems, couplers, coach interiors, HVAC, LED lighting, fire detection systems and complete pantry car equipment. Includes installation, retrofitting, testing & commissioning, ICBMRO contracts and full AMC services for LHB, ICF, Vande Bharat and EMU/MEMU rakes." },
        { title: "Production & Maintenance Unit Support", desc: "Custom fixtures, jigs, production tools and fabrication machinery for ICF, RCF, MCF, BLW, CLW. Depot equipment supply and installation — wheel lathes, hydraulic presses, turntables, drop tables, bogie test rigs, maintenance platforms and inspection pit lines." },
        { title: "Railway Signaling & Telecom (S&T)", desc: "Trackside and station signaling — interlocking systems, electronic point machines, relays, axle counters, signaling cables, telecom panels. Fiber optic backbone, GSM-R, Wi-Fi network roll-out, station data networks and SCADA integration." },
        { title: "OHE & Electrical Works", desc: "Design, supply, erection and commissioning of 25kV OHE — masts, cantilevers, insulators, catenary and contact wires, droppers, section insulators. OHE modification, electrification of new corridors, traction sub-station equipment and grounding works." },
        { title: "Station Electrification & Smart Energy", desc: "Complete station lighting, distribution panels, controls and BMS. LED retrofits, VFD installations, smart sensor automation, solar PV integration, energy audits and ECBC compliance for green station certification." },
        { title: "KAWACH & Smart Railway", desc: "End-to-end KAWACH (TCAS) component supply, on-board and trackside equipment integration, RFID tag deployment and field commissioning. PM Gati Shakti infrastructure support, IoT sensors, AI-based predictive maintenance and SCADA deployment." },
        { title: "Track Machines & SPART", desc: "OEM and aftermarket parts, calibration and AMC for Tamping Machines, Ballast Cleaning Machines, Dynamic Track Stabilizers, Ballast Regulators, Tower Wagons and OHE Track Machines. Hydraulics, diesel engines, transmissions and rail gear overhaul." },
        { title: "ICBMRO & Lifecycle Contracts", desc: "Integrated Coach Body Maintenance, Repair and Overhaul. Mid-life rehabilitation, coach refurbishment, periodic overhaul (POH), shell repairs, painting, upholstery and complete IT-enabled depot management contracts." },
      ]}
      capabilities={[
        "RDSO-approved vendor base",
        "PAN-India deployment teams",
        "Site survey & DPR preparation",
        "ISO 9001 / 14001 / 45001 certified",
        "GeM & IREPS empanelled",
        "EOT crane & heavy logistics",
        "Welding & fabrication shops",
        "Calibration labs & test rigs",
        "Fire & life safety compliance",
        "Skilled signal technicians",
        "OHE specialist crews",
        "AMC & spares warehousing",
      ]}
      whyUs={[
        { title: "Proven Track Record", desc: "Decades of execution across Indian Railways zones with consistent on-time, on-budget delivery and zero-defect commissioning." },
        { title: "Compliance & Safety", desc: "RDSO approvals, IRS specifications, IRSEM standards and rigorous QA/QC processes integrated into every project." },
        { title: "End-to-End Ownership", desc: "Single window for design, supply, erection, testing, commissioning and long-term AMC — no hand-off gaps." },
      ]}
    />
  );
}
