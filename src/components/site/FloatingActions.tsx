import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.png";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919272324562?text=Hi%20SRJ%20Education%20Consultancy%2C%20I%27d%20like%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="block h-14 w-14 rounded-full shadow-elegant hover:scale-110 transition-transform animate-float"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="h-14 w-14 rounded-full" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="h-12 w-12 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft hover:scale-110 transition-transform animate-fade-in"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
