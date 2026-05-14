import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Sparkles, Users, Video, Brain, Calendar, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/counselling")({
  head: () => ({
    meta: [
      { title: "Book Free Counselling — SRJ Education Consultancy Pune" },
      { name: "description", content: "Book a free one-on-one counselling session with SRJ's expert career counsellors. Online and offline sessions available in Pune." },
      { property: "og:title", content: "Book Free Counselling — SRJ Education" },
      { property: "og:description", content: "Talk to an expert career counsellor today." },
    ],
    links: [{ rel: "canonical", href: "/counselling" }],
  }),
  component: CounsellingPage,
});

const benefits = [
  { icon: Users, t: "One-on-One Guidance", d: "Dedicated mentor sessions tailored to your profile and goals." },
  { icon: Video, t: "Online & Offline", d: "Choose video sessions or visit our Kharadi, Pune office." },
  { icon: Brain, t: "Career Assessment", d: "Structured aptitude and personality profiling included." },
  { icon: Sparkles, t: "Expert Mentors", d: "Guidance from counsellors with 10+ years of experience." },
];

const process = [
  "Submit your enquiry below",
  "Schedule a slot with our team",
  "Attend the counselling session",
  "Receive a personalised roadmap",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Enter a valid 10-digit number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  course: z.string().trim().min(2, "Please mention your course interest").max(100),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function CounsellingPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Our counsellor will reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <PageHero
        eyebrow="Counselling"
        title={<>Free <span className="text-gradient-gold">career counselling</span> for every student</>}
        subtitle="Book a 1:1 session with our expert counsellors and gain clarity about your course, college and career."
      />

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why book a session"
              title={<>What you'll get from <span className="text-gradient-gold">your session</span></>}
            />
            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
                <Card key={b.t} className="p-6 rounded-2xl border-0 shadow-soft bg-card">
                  <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center mb-3"><b.icon className="h-5 w-5 text-navy" /></div>
                  <h3 className="font-display text-lg text-navy mb-1">{b.t}</h3>
                  <p className="text-sm text-muted-foreground">{b.d}</p>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xl text-navy mb-4">Counselling Process</h3>
              <ol className="space-y-3">
                {process.map((p, i) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="h-7 w-7 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center text-xs font-bold shrink-0">{i + 1}</span>
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <Card className="p-7 md:p-9 rounded-3xl border-0 shadow-elegant bg-card relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent text-navy text-xs font-semibold">
                <Calendar className="h-3.5 w-3.5 text-gold" /> Free Enquiry
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-navy">Book your free session</h2>
              <p className="text-sm text-muted-foreground mt-1">Fill the form — we'll call you within 24 hours.</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <Label htmlFor="name">Student Name</Label>
                  <Input id="name" name="name" placeholder="Your full name" maxLength={100} required className="mt-1.5" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" name="mobile" type="tel" placeholder="10-digit mobile" maxLength={10} required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@email.com" maxLength={255} required className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="course">Course Interested In</Label>
                  <Input id="course" name="course" placeholder="e.g. B.E Computer, MBA, B.Pharm" maxLength={100} required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea id="message" name="message" rows={4} placeholder="Tell us a little about your goals" maxLength={1000} className="mt-1.5" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full bg-gradient-primary text-primary-foreground rounded-full shadow-soft hover:shadow-elegant">
                  {submitting ? "Submitting..." : (<><Send className="mr-2 h-4 w-4" /> Submit Enquiry</>)}
                </Button>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Your details are safe and confidential.
                </div>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
