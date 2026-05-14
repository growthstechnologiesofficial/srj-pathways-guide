import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SRJ Education Consultancy — Kharadi, Pune" },
      { name: "description", content: "Visit, call or message SRJ Education Consultancy in Kharadi, Pune. Office address, mobile, email and business hours." },
      { property: "og:title", content: "Contact — SRJ Education Consultancy" },
      { property: "og:description", content: "Get in touch with our team in Kharadi, Pune." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
  message: z.string().trim().min(5).max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll reply within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <span className="text-gradient-gold">hear from you</span></>}
        subtitle="Reach out for a free counselling session, admission queries or any guidance you need."
      />

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-6">
          {[
            { icon: MapPin, t: "Visit Us", d: "Office No. 10, 7th Floor, City Vista Business Park, Downtown Road, Kharadi, Pune – 411014" },
            { icon: Phone, t: "Call Us", d: "+91 90672 58278", href: "tel:+919067258278" },
            { icon: Mail, t: "Email Us", d: "info@srjeducationconsultancy.in", href: "mailto:info@srjeducationconsultancy.in" },
          ].map((c) => (
            <Card key={c.t} className="p-7 rounded-2xl border-0 shadow-soft bg-card">
              <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center mb-4"><c.icon className="h-5 w-5 text-primary-foreground" /></div>
              <h3 className="font-display text-lg text-navy mb-1">{c.t}</h3>
              {c.href ? (
                <a href={c.href} className="text-sm text-muted-foreground hover:text-gold break-words">{c.d}</a>
              ) : (
                <p className="text-sm text-muted-foreground">{c.d}</p>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8">
          <Card className="p-7 md:p-9 rounded-3xl border-0 shadow-elegant bg-card">
            <h2 className="font-display text-2xl md:text-3xl text-navy">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">We typically reply within a few hours during business time.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" maxLength={100} required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input id="mobile" name="mobile" type="tel" maxLength={10} required className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" maxLength={255} required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} maxLength={1000} required className="mt-1.5" />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-gradient-primary text-primary-foreground rounded-full shadow-soft">
                {submitting ? "Sending..." : (<><Send className="mr-2 h-4 w-4" /> Send Message</>)}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-7 rounded-3xl border-0 shadow-soft bg-card">
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-gold grid place-items-center"><Clock className="h-5 w-5 text-navy" /></div>
                <div>
                  <h3 className="font-display text-lg text-navy mb-2">Business Hours</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex justify-between"><span>Monday — Saturday</span><span className="font-semibold text-navy">10:00 AM — 7:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span className="font-semibold text-navy">By Appointment</span></li>
                  </ul>
                </div>
              </div>
            </Card>

            <a
              href="https://wa.me/919067258278"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl bg-[#25D366] text-white shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/20 grid place-items-center"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <div className="font-display text-lg">Chat on WhatsApp</div>
                  <div className="text-sm opacity-90">Quick replies during business hours</div>
                </div>
              </div>
            </a>

            <Card className="overflow-hidden rounded-3xl border-0 shadow-soft p-0">
              <iframe
                title="SRJ Education Consultancy Office Location"
                src="https://www.google.com/maps?q=City+Vista+Kharadi+Pune&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
