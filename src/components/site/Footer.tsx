import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/srj-logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground mt-24">
      <div className="container mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-white grid place-items-center p-1.5">
              <img src={logo} alt="SRJ Education Consultancy logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="font-display text-lg font-bold">SRJ Education</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold">Consultancy</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Guiding students towards successful careers through expert counselling, transparent guidance and trusted admission support across Maharashtra.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-navy transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/services", l: "Services" },
              { to: "/counselling", l: "Counselling" },
              { to: "/testimonials", l: "Testimonials" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-gold transition">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Courses</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {["Engineering", "Pharmacy", "Medical", "Management"].map((c) => (
              <li key={c}><Link to="/courses" className="hover:text-gold transition">{c}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Office No. 10, 7th Floor, City Vista Business Park, Downtown Road, Kharadi, Pune – 411014</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="tel:+919272324562">+91 92723 24562</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="mailto:info@srjeducationconsultancy.in">info@srjeducationconsultancy.in</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row gap-2 justify-between">
          <span>© 2026 SRJ Education Consultancy. All Rights Reserved.</span>
          <span>Crafted with care for Pune students.</span>
        </div>
      </div>
    </footer>
  );
}
