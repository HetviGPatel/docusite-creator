import { createFileRoute } from "@tanstack/react-router";
import { Factory } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";
import { DetailPage } from "../components/DetailPage";

export const Route = createFileRoute("/products/industrial-machinery")({
  component: Page,
  head: () => ({ meta: [{ title: "Industrial Machinery — Jigisha Group" }, { name: "description", content: "300K+ industrial machinery products — CNC machines, fabrication tools, conveyors, automation." }] }),
});

function Page() {
  return (
    <DetailPage
      category="products"
      title="Industrial Machinery"
      tagline="300K+ machines, tools and automation systems for manufacturing & process industries"
      overview="Jigisha Group offers a comprehensive catalogue of industrial machinery for plants across steel, automotive, cement, chemicals, FMCG, pharma and engineering sectors. From CNC machines and fabrication tools to conveyor systems, pumps, compressors and complete automation packages — we deliver the equipment that runs Indian factories."
      heroImage={warehouseImg}
      Icon={Factory}
      stats={[
        { value: "300K+", label: "SKUs" },
        { value: "OEM", label: "Tie-ups" },
        { value: "CE/BIS", label: "Certified" },
        { value: "Turnkey", label: "Installation" },
      ]}
      offerings={[
        { title: "CNC Machines & Lathes", desc: "VMC, HMC, CNC turning centers, conventional lathes, milling machines, grinders, EDM, wire-cut and special-purpose machines from leading domestic and global brands." },
        { title: "Fabrication & Welding Equipment", desc: "MIG, TIG, SAW, plasma cutting, laser cutting, press brakes, shearing machines, rolling machines, ironworkers, welding manipulators and complete fab-shop packages." },
        { title: "Material Handling Cranes & Hoists", desc: "EOT cranes, gantry cranes, jib cranes, electric chain hoists, wire rope hoists, monorails, telphers and complete material handling solutions." },
        { title: "Conveyor Systems & Belts", desc: "Belt conveyors, roller conveyors, chain conveyors, screw conveyors, pneumatic conveying, AGVs, slat conveyors and conveyor belts in fabric and steel." },
        { title: "Automation & Robotics", desc: "Industrial robots (6-axis, SCARA, delta), cobots, robot end-effectors, machine vision, automation cells, AGVs, AS/RS and Industry 4.0 integration." },
        { title: "Compressors & Pneumatic Tools", desc: "Screw compressors, reciprocating compressors, oil-free compressors, dryers, filters, FRLs, pneumatic tools, impact wrenches and complete compressed-air systems." },
        { title: "Pumps & Valves", desc: "Centrifugal, positive displacement, gear, screw, peristaltic, vacuum pumps; ball, gate, globe, check, butterfly, control valves for water, chemical and slurry duty." },
        { title: "Industrial Safety Equipment", desc: "PPE, fall protection, eye/face/hearing protection, respirators, gas detectors, fire safety, lockout-tagout, safety signage and emergency response equipment." },
        { title: "Process Equipment", desc: "Reactors, mixers, agitators, dryers, evaporators, crystallizers, filters, centrifuges, heat exchangers and complete unit operations equipment for process plants." },
        { title: "Tooling & Workshop Tools", desc: "Cutting tools, drilling, tapping, hand tools, power tools, measuring instruments, gauges, calibrators and complete workshop tooling packages." },
      ]}
      capabilities={["OEM authorized partner","CE/BIS/UL certified machines","Turnkey installation","Foundation & alignment","Operator training","AMC & spares contracts","Reverse engineering","Used machinery refurb","Plant layout consulting","Energy-efficient retrofit","Industry 4.0 enablement","Project finance support"]}
      whyUs={[
        { title: "Engineered Supply", desc: "We don't just sell machines — we engineer the right capacity, layout and integration for your application." },
        { title: "Trusted Brands", desc: "Authorized partnerships with top OEMs ensuring genuine equipment, proper warranty and OEM support." },
        { title: "Lifetime Support", desc: "Installation, commissioning, training, AMC and spares — full lifecycle support beyond the sale." },
      ]}
    />
  );
}
