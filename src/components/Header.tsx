import { Link, useLocation } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const serviceDropdown = [
  { label: "Railway Services", to: "/services/railway" },
  { label: "Metro Rail Services", to: "/services/metro-rail" },
  { label: "Defence Supply", to: "/services/defence" },
  { label: "Commercial Services", to: "/services/commercial" },
  { label: "Industrial Services", to: "/services/industrial" },
  { label: "ICBMRO & BMRO", to: "/services/icbmro" },
];

const productDropdown = [
  { label: "Railway Components", to: "/products/railway-components" },
  { label: "Metro Rail Systems", to: "/products/metro-rail-systems" },
  { label: "Defence & Aerospace", to: "/products/defence-aerospace" },
  { label: "Electricals & Electronics", to: "/products/electricals-electronics" },
  { label: "Industrial Machinery", to: "/products/industrial-machinery" },
  { label: "Automobile Parts", to: "/products/automobile-parts" },
  { label: "Green Energy", to: "/products/green-energy" },
  { label: "Agro & Pharma", to: "/products/agro-pharma" },
];

const industryDropdown = [
  { label: "Indian Railways", to: "/industries/indian-railways" },
  { label: "Metro Rail", to: "/industries/metro-rail" },
  { label: "Aerospace & Defence", to: "/industries/aerospace-defence" },
  { label: "Energy & Power", to: "/industries/energy-power" },
  { label: "Healthcare & Pharma", to: "/industries/healthcare-pharma" },
  { label: "Agriculture", to: "/industries/agriculture" },
  { label: "Manufacturing", to: "/industries/manufacturing" },
  { label: "Construction & EPC", to: "/industries/construction-epc" },
  { label: "Logistics & Supply Chain", to: "/industries/logistics" },
  { label: "Infotech & Digital", to: "/industries/infotech" },
  { label: "Media & Communications", to: "/industries/media" },
  { label: "Environment & Sustainability", to: "/industries/environment" },
];

type DropdownItem = { label: string; to: string };

interface NavDropdownProps {
  label: string;
  to: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function NavDropdown({ label, to, items, isOpen, onToggle, onClose }: NavDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-60 bg-card border border-border rounded-xl shadow-xl py-2 z-50 animate-fade-in">
          <Link
            to={to as any}
            onClick={onClose}
            className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-accent transition-colors"
          >
            View All {label}
          </Link>
          <div className="border-t border-border my-1" />
          {items.map(item => (
            <Link
              key={item.to}
              to={item.to as any}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const simpleNavItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "The Group", to: "/group" },
] as const;

const trailingNavItems = [
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleDropdown = (name: string) => setOpenDropdown(prev => prev === name ? null : name);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> (+91) 8989167888</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> info@jigisha.in</span>
          </div>
          <div className="flex items-center gap-4">
            <span>24/7 — Open All Days</span>
            <span className="text-gold">THE INDUSTRIAL UNIVERSE</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
              <span className="text-gold font-bold text-lg">J</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-sm text-foreground tracking-wide">JIGISHA GROUP</span>
              <span className="block text-[10px] text-muted-foreground tracking-widest">OF COMPANIES</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {simpleNavItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "px-3 py-2 text-sm font-medium text-primary bg-accent rounded-md" }}
              >
                {item.label}
              </Link>
            ))}
            <NavDropdown label="Services" to="/services" items={serviceDropdown} isOpen={openDropdown === "services"} onToggle={() => toggleDropdown("services")} onClose={() => setOpenDropdown(null)} />
            <NavDropdown label="Products" to="/products" items={productDropdown} isOpen={openDropdown === "products"} onToggle={() => toggleDropdown("products")} onClose={() => setOpenDropdown(null)} />
            <NavDropdown label="Industries" to="/industries" items={industryDropdown} isOpen={openDropdown === "industries"} onToggle={() => toggleDropdown("industries")} onClose={() => setOpenDropdown(null)} />
            {trailingNavItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent"
                activeProps={{ className: "px-3 py-2 text-sm font-medium text-primary bg-accent rounded-md" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 text-sm font-semibold bg-gold text-gold-foreground rounded-lg hover:opacity-90 transition-opacity">
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card p-4 animate-fade-in max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {simpleNavItems.map(item => (
                <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md" activeProps={{ className: "px-3 py-2.5 text-sm font-medium text-primary bg-accent rounded-md" }}>
                  {item.label}
                </Link>
              ))}

              {/* Mobile dropdowns */}
              {([
                { label: "Services", to: "/services", items: serviceDropdown },
                { label: "Products", to: "/products", items: productDropdown },
                { label: "Industries", to: "/industries", items: industryDropdown },
              ] as const).map(section => (
                <div key={section.label}>
                  <button
                    onClick={() => setMobileExpanded(prev => prev === section.label ? null : section.label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md"
                  >
                    {section.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === section.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === section.label && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      <Link to={section.to as any} onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm font-semibold text-primary hover:bg-accent rounded-md">
                        View All
                      </Link>
                      {section.items.map(item => (
                        <Link key={item.to} to={item.to as any} onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-accent rounded-md">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {trailingNavItems.map(item => (
                <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md" activeProps={{ className: "px-3 py-2.5 text-sm font-medium text-primary bg-accent rounded-md" }}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-3 block text-center px-4 py-2.5 text-sm font-semibold bg-gold text-gold-foreground rounded-lg">
              Get Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
