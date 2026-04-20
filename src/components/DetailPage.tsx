import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  ShieldCheck,
  Search,
  PencilRuler,
  Cog,
  Truck,
  Headphones,
  BadgeCheck,
  Quote,
  HelpCircle,
  MapPin,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Offering = { title: string; desc: string };
export type Stat = { value: string; label: string };

export interface DetailPageProps {
  category: "services" | "products" | "industries";
  title: string;
  tagline: string;
  overview: string;
  heroImage: string;
  Icon: LucideIcon;
  offerings: Offering[];
  capabilities: string[];
  whyUs: { title: string; desc: string }[];
  stats?: Stat[];
  ctaLabel?: string;
}

const labels = {
  services: { back: "← All Services", cta: "Request Service Quote" },
  products: { back: "← All Products", cta: "Request Catalogue" },
  industries: { back: "← All Industries", cta: "Discuss Your Project" },
};

const processStepsByCategory = {
  services: [
    { Icon: Search, title: "Assess & Audit", desc: "On-site survey, scope study, asset condition mapping and SLA definition with the client team." },
    { Icon: PencilRuler, title: "Design & Plan", desc: "Engineering design, BOQ, manpower planning, safety plan and project schedule with milestones." },
    { Icon: Cog, title: "Mobilise & Execute", desc: "Trained crews, tools, spares and supervisors mobilised under documented HSE and quality protocols." },
    { Icon: BadgeCheck, title: "Test & Handover", desc: "FAT/SAT, calibration, documentation, training and formal handover with warranty cover." },
    { Icon: Headphones, title: "Support & Optimise", desc: "AMC, helpdesk, predictive monitoring and continuous improvement throughout the asset lifecycle." },
  ],
  products: [
    { Icon: Search, title: "Requirement Capture", desc: "Specification study, drawing review, sample evaluation and compliance / standards mapping." },
    { Icon: PencilRuler, title: "Sourcing & Engineering", desc: "OEM tie-ups, vendor development, value-engineering and material substitution where allowed." },
    { Icon: Cog, title: "Manufacture & QA", desc: "In-process inspection, NABL testing, type tests and third-party verification before despatch." },
    { Icon: Truck, title: "Logistics & Delivery", desc: "Pan-India warehousing, kitting, just-in-time despatch and project-site delivery." },
    { Icon: Headphones, title: "After-Sales Support", desc: "Warranty management, spares stocking, technical helpdesk and on-site service network." },
  ],
  industries: [
    { Icon: Search, title: "Sector Diagnosis", desc: "Understanding regulatory environment, key OEMs, buying processes and pain-points in the sector." },
    { Icon: PencilRuler, title: "Solution Design", desc: "Tailored package of products + services + financing aligned to the client's plant or project." },
    { Icon: Cog, title: "Execution", desc: "Specialised teams that speak the sector's language — RDSO, DGAQA, NABH, IGBC, MoEF and more." },
    { Icon: BadgeCheck, title: "Compliance & Audit", desc: "Documentation, statutory clearances, audits and traceability built into every deliverable." },
    { Icon: Headphones, title: "Long-Term Partnership", desc: "Multi-year contracts, AMC, performance reviews and continuous capability expansion." },
  ],
};

const industriesServedByCategory: Record<string, string[]> = {
  services: ["Indian Railways", "Metro Rail Corporations", "Defence & Aerospace", "Power & Energy", "Oil & Gas", "Steel & Cement", "Automotive OEMs", "Pharma & Healthcare", "FMCG & Food", "IT & Data Centres", "Logistics & Warehousing", "Government & PSUs"],
  products: ["Railways & Metro", "Defence & Aerospace", "Power Utilities", "Renewable Energy", "Construction & EPC", "Manufacturing & OEM", "Agriculture & Food", "Pharma & Hospitals", "Telecom & IT", "Automotive", "Mining & Minerals", "Public Procurement (GeM)"],
  industries: ["Central Government Departments", "State PSUs", "Private OEMs", "MSME Vendors", "Multinational EPC Players", "Research & Development Labs", "Educational & Training Institutes", "Smart City Projects"],
};

const standardsList = [
  "ISO 9001:2015 — Quality Management",
  "ISO 14001:2015 — Environment",
  "ISO 45001:2018 — Occupational H&S",
  "RDSO / IRS Approved Vendor",
  "DGAQA & DGQA Registered",
  "BIS / IS Compliant Supplies",
  "NABL Accredited Testing Partners",
  "GeM Verified Seller",
  "MSME & Startup India Registered",
];

const faqsByCategory = {
  services: [
    { q: "Do you provide pan-India service coverage?", a: "Yes. We operate through 1,000+ after-sales service centers and authorised partner workshops covering all states and major industrial corridors." },
    { q: "What contract models do you offer?", a: "We offer transactional service orders, fixed-price project contracts, AMC / CMC, performance-based contracts (uptime SLAs) and fully outsourced O&M models." },
    { q: "Are your teams certified for safety-critical work?", a: "All field crews are trained on ISO 45001, hot-work permits, height work, confined space and sector-specific safety standards (RDSO, OISD, NFPA, etc.)." },
    { q: "How quickly can you mobilise for an emergency breakdown?", a: "For AMC clients we guarantee response within 4–24 hours depending on location and SLA tier; emergency 24x7 helpdesk routes calls to the nearest service center." },
  ],
  products: [
    { q: "Are your products RDSO / BIS / OEM approved?", a: "Yes — wherever the application demands, we supply only from RDSO-approved, BIS-licensed or OEM-authorised sources, with traceable test certificates." },
    { q: "Do you handle bulk and project orders?", a: "We routinely execute large project supplies for railways, metros, defence and EPC majors with dedicated project managers, kitting and staged deliveries." },
    { q: "Can you supply through GeM and IREPS?", a: "Yes, we are registered on GeM, IREPS, DefProc and most state e-procurement portals, with experience in L1 bidding, reverse auctions and rate contracts." },
    { q: "What about warranty and after-sales support?", a: "All products carry OEM warranty plus our extended after-sales support through 1,000+ service centers and a centralised helpdesk." },
  ],
  industries: [
    { q: "Why work with a single partner across the sector?", a: "A consolidated partner reduces vendor count, simplifies compliance, improves accountability and unlocks better commercial terms across products, services and projects." },
    { q: "Do you understand sector-specific compliance?", a: "Our teams are organised by vertical and trained in the standards, statutory bodies and procurement processes specific to each industry we serve." },
    { q: "Can you support greenfield as well as brownfield projects?", a: "Yes — from DPR support and engineering through procurement, construction, commissioning and long-term O&M, we cover the entire project lifecycle." },
    { q: "Do you work with PSUs and government bodies?", a: "Extensively — we are empanelled with multiple PSUs, ministries and state governments, and are well-versed in tendering, BOQ, and contract management norms." },
  ],
};

const caseHighlightsByCategory = {
  services: [
    { metric: "98.6%", label: "Average Uptime", note: "Across active AMC/CMC contracts in railways, metros and process plants." },
    { metric: "30%", label: "Lower Breakdown Cost", note: "Achieved through IoT-led predictive maintenance vs traditional reactive models." },
    { metric: "1,000+", label: "Service Centers", note: "Pan-India after-sales footprint enabling rapid mobilisation 24x7." },
  ],
  products: [
    { metric: "3M+", label: "SKUs Catalogued", note: "Across railway, metro, defence, energy, electricals and industrial consumables." },
    { metric: "7,500+", label: "Vetted Vendors", note: "OEM and MSME ecosystem ensuring competitive pricing and continuity of supply." },
    { metric: "99%", label: "On-Time Despatch", note: "Project supplies tracked through digital warehouse and logistics control tower." },
  ],
  industries: [
    { metric: "25+", label: "Industry Verticals", note: "Dedicated sector teams aligned to OEMs, regulators and buying processes." },
    { metric: "500+", label: "Marquee Clients", note: "From Indian Railways and DRDO to private OEMs and global EPC majors." },
    { metric: "19", label: "Group Companies", note: "Specialised entities under Jigisha Group covering the full industrial value chain." },
  ],
};

export function DetailPage({
  category,
  title,
  tagline,
  overview,
  heroImage,
  Icon,
  offerings,
  capabilities,
  whyUs,
  stats,
  ctaLabel,
}: DetailPageProps) {
  const l = labels[category];
  const processSteps = processStepsByCategory[category];
  const industriesServed = industriesServedByCategory[category];
  const faqs = faqsByCategory[category];
  const cases = caseHighlightsByCategory[category];

  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <Link to={`/${category}`} className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">
              {l.back}
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy-foreground mt-3">{title}</h1>
            <p className="mt-4 text-navy-foreground/80 text-lg max-w-2xl mx-auto">{tagline}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" /> Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5">About {title}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
        </div>
      </section>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <section className="py-12 bg-navy">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gold">{s.value}</div>
                <div className="mt-1 text-navy-foreground/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Offerings */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Key Offerings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map(o => (
              <div key={o.title} className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-semibold text-card-foreground text-lg">{o.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">How We Work</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A proven five-stage delivery model built on engineering rigour, safety-first execution and long-term partnership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <div key={s.title} className="relative bg-card rounded-xl p-5 border border-border text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="w-12 h-12 mx-auto rounded-lg bg-navy flex items-center justify-center mt-2 mb-3">
                  <s.Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {capabilities.map(c => (
              <div key={c} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries / Sectors Served */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Sectors Served</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Where We Add Value</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Trusted by government bodies, PSUs, multinational OEMs and homegrown industry leaders.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industriesServed.map(i => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Highlights / Impact */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground mt-2">Proven Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map(c => (
              <div key={c.label} className="bg-navy-foreground/5 border border-gold/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold/15 flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <div className="text-3xl font-extrabold text-gold">{c.metric}</div>
                <div className="text-navy-foreground font-semibold mt-1">{c.label}</div>
                <p className="text-navy-foreground/70 text-sm mt-2 leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Quality & Compliance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Standards & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {standardsList.map(s => (
              <div key={s} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <BadgeCheck className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Why Jigisha</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((w, i) => {
              const Ic = [Award, ShieldCheck, Users][i % 3];
              return (
                <div key={w.title} className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-navy flex items-center justify-center mb-4">
                    <Ic className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-card text-center">
            <Quote className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
              "Jigisha Group has been a dependable partner for our {title.toLowerCase()} requirements — combining
              engineering depth, on-time delivery and a single-window experience that genuinely simplifies
              our procurement and operations."
            </p>
            <div className="mt-6">
              <div className="font-semibold text-card-foreground">Senior Procurement Head</div>
              <div className="text-sm text-muted-foreground">Leading Indian PSU</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-navy-foreground/80 mb-8">Talk to our specialists about {title.toLowerCase()} requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            {ctaLabel ?? l.cta} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
