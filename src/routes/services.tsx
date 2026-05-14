import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, GraduationCap, FileCheck2, Crown, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Career Counselling & Admission Guidance | SRJ Education" },
      { name: "description", content: "Explore SRJ's services: career counselling, course & college selection, direct admission guidance and management quota admission support across Pune." },
      { property: "og:title", content: "Services — SRJ Education Consultancy" },
      { property: "og:description", content: "End-to-end admission and career guidance services in Pune." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Compass,
    title: "Career Counselling",
    desc: "Discover the right career path with structured psychometric assessments and personalised mentor sessions.",
    benefits: ["Personality & aptitude profiling", "Stream and career mapping", "Goal setting roadmap", "Parent counselling sessions"],
  },
  {
    icon: GraduationCap,
    title: "Course & College Selection",
    desc: "We help you shortlist the right colleges based on your scores, budget, location and career goals.",
    benefits: ["CET/JEE/NEET score analysis", "Top college shortlisting", "Fee & ROI breakdown", "Placement insights"],
  },
  {
    icon: FileCheck2,
    title: "Direct Admission Guidance",
    desc: "Hassle-free, ethical and transparent direct admission support in trusted colleges across Maharashtra.",
    benefits: ["Eligibility verification", "Documentation assistance", "Application handling", "Seat confirmation guidance"],
  },
  {
    icon: Crown,
    title: "Management Quota Admission",
    desc: "Specialised guidance for management quota admissions with complete clarity on process and fees.",
    benefits: ["Verified college options", "Transparent fee structure", "End-to-end paperwork", "Expert negotiation support"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Comprehensive <span className="text-gradient-gold">admission solutions</span></>}
        subtitle="From the first counselling session to your seat confirmation, SRJ supports every step of your educational journey."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 space-y-10">
          {services.map((s, i) => (
            <Card key={s.title} className="overflow-hidden p-0 rounded-3xl border-0 shadow-soft bg-card">
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="p-8 md:p-12">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center mb-5 shadow-soft">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-3xl text-navy mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-7 bg-gradient-primary text-primary-foreground rounded-full">
                    <Link to="/counselling">Get this service <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
                <div className="bg-gradient-hero relative min-h-[280px] grid place-items-center p-10">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-gold/40 blur-2xl animate-blob" />
                    <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-primary/30 blur-2xl animate-blob" />
                  </div>
                  <div className="relative h-40 w-40 rounded-full bg-white/70 backdrop-blur grid place-items-center shadow-elegant">
                    <s.icon className="h-16 w-16 text-navy" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-gradient-navy p-10 md:p-14 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Not sure which service fits you?</h2>
            <p className="mt-3 text-primary-foreground/80">Talk to our counsellor — your first session is on us.</p>
            <Button asChild size="lg" className="mt-6 bg-gradient-primary text-primary-foreground rounded-full font-semibold">
              <Link to="/counselling">Book Free Counselling</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
