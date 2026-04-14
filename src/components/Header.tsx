import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "The Group", to: "/group" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            {navItems.map(item => (
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
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card p-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md"
                  activeProps={{ className: "px-3 py-2.5 text-sm font-medium text-primary bg-accent rounded-md" }}
                >
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
