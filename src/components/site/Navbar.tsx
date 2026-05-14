import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/srj-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/counselling", label: "Counselling" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass shadow-soft py-2">
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="SRJ Education Consultancy logo" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-navy">SRJ Education</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold">Consultancy</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-colors",
                  active
                    ? "text-navy bg-accent"
                    : "text-navy/80 hover:text-navy hover:bg-accent/60"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="tel:+919272324562" className="text-sm font-semibold text-navy flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" /> +91 92723 24562
          </a>
          <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-full shadow-soft">
            <Link to="/counselling">Book Free Counselling</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 rounded-md text-navy"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background mt-2 mx-4 rounded-2xl p-4 animate-fade-in shadow-soft border border-border">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-3 rounded-lg text-sm font-semibold text-navy hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="bg-gradient-primary text-primary-foreground mt-2 rounded-full">
              <Link to="/counselling">Book Free Counselling</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
