import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Compass,
  GraduationCap,
  FileCheck2,
  Crown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
  Clock,
  Sparkles,
  PhoneCall,
  ClipboardList,
  Search,
  Handshake,
} from "lucide-react";

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
    tag: "Foundation",
    desc: "Discover the right career path with structured psychometric assessments and personalised mentor sessions led by experienced counsellors.",
    benefits: [
      "Personality & aptitude profiling",
      "Stream and career mapping",
      "Goal setting roadmap",
      "Parent counselling sessions",
    ],
  },
  {
    icon: GraduationCap,
    title: "Course & College Selection",
    tag: "Strategy",
    desc: "We help you shortlist the right colleges based on your scores, budget, location and long-term career aspirations — with data-backed recommendations.",
    benefits: [
      "CET / JEE / NEET score analysis",
      "Top college shortlisting",
      "Fee & ROI breakdown",
      "Placement insights",
    ],
  },
  {
    icon: FileCheck2,
    title: "Direct Admission Guidance",
    tag: "Execution",
    desc: "Hassle-free, ethical and fully transparent direct admission support across trusted colleges in Maharashtra — from documentation to seat confirmation.",
    benefits: [
      "Eligibility verification",
      "Documentation assistance",
      "Application handling",
      "Seat confirmation guidance",
    ],
  },
  {
    icon: Crown,
    title: "Management Quota Admission",
    tag: "Premium",
    desc: "Specialised guidance for management quota admissions with complete clarity on process, fees, and timelines — handled by senior advisors.",
    benefits: [
      "Verified college options",
      "Transparent fee structure",
      "End-to-end paperwork",
      "Expert negotiation support",
    ],
  },
];

const trustPoints = [
  { icon: ShieldCheck, title: "100% Transparent", desc: "No hidden fees. Documented process at every step." },
  { icon: Users, title: "15,000+ Students", desc: "Successfully placed across top institutions." },
  { icon: Award, title: "20+ Years Experience", desc: "Trusted advisory backed by deep expertise." },
  { icon: Clock, title: "Timely Support", desc: "Dedicated advisor through every deadline." },
];

const process = [
  { icon: PhoneCall, step: "01", title: "Connect", desc: "Book a free discovery call with our counsellor." },
  { icon: ClipboardList, step: "02", title: "Assess", desc: "Profile review, score analysis and goal mapping." },
  { icon: Search, step: "03", title: "Shortlist", desc: "Curated college and course recommendations." },
  { icon: Handshake, step: "04", title: "Admission", desc: "End-to-end documentation and seat confirmation." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Comprehensive <span className="text-gradient-gold">admission solutions</span></>}
        subtitle="From your first counselling session to seat confirmation — SRJ delivers structured, transparent and personalised guidance at every step."
      />

      {/* Trust Strip */}
      <section className="py-12 border-b border-border/50 bg-card/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-soft">
                  <t.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-navy">{t.title}</div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Services tailored to your <span className="text-gradient-gold">academic journey</span></>}
            subtitle="Four specialised pillars designed to take students from confusion to confident enrolment."
          />

          <div className="space-y-10">
            {services.map((s, i) => (
              <Card
                key={s.title}
                className="group overflow-hidden p-0 rounded-3xl border border-border/60 shadow-soft hover:shadow-elegant transition-all duration-500 bg-card"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft">
                        <s.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                          <span className="text-foreground/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button asChild className="bg-gradient-primary text-primary-foreground rounded-full">
                        <Link to="/counselling">
                          Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full border-navy/20 text-navy hover:bg-navy hover:text-primary-foreground">
                        <Link to="/contact">Talk to Advisor</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-hero relative min-h-[300px] grid place-items-center p-10 overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-10 left-10 h-44 w-44 rounded-full bg-gold/40 blur-3xl animate-blob" />
                      <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-primary/30 blur-3xl animate-blob" />
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-6 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
                      <div className="relative h-44 w-44 rounded-full bg-white/80 backdrop-blur grid place-items-center shadow-elegant border border-white">
                        <s.icon className="h-20 w-20 text-navy" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card/40 border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How It Works"
            title={<>A simple <span className="text-gradient-gold">4-step</span> journey</>}
            subtitle="Our proven framework keeps your admission process clear, structured and stress-free."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative bg-card rounded-2xl p-6 border border-border/60 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-3 -right-3 h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-display font-bold shadow-soft">
                  {p.step}
                </div>
                <div className="h-12 w-12 rounded-xl bg-accent grid place-items-center mb-4">
                  <p.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="relative rounded-3xl bg-gradient-navy p-10 md:p-16 text-center shadow-elegant overflow-hidden">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-gold" /> Free First Session
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Ready to take the next step?
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
                Speak with our senior counsellor and get a personalised admission roadmap — completely free, no obligations.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-gradient-gold text-navy rounded-full font-semibold hover:opacity-90">
                  <Link to="/counselling">Book Free Counselling <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-primary-foreground hover:bg-white/10 bg-transparent">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
