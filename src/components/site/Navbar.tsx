import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-soft">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
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
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  active
                    ? "text-navy bg-accent"
                    : "text-foreground/70 hover:text-navy hover:bg-accent/60"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="tel:+919067258278" className="text-sm font-semibold text-navy flex items-center gap-2">
            <Phone className="h-4 w-4 text-gold" /> +91 90672 58278
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
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-fade-in">
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
