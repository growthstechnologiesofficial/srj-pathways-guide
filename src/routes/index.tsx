import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, GraduationCap, Compass, FileCheck2, Sparkles, Users, Trophy,
  Building2, ShieldCheck, HeartHandshake, Eye, ClipboardList,
  Stethoscope, FlaskConical, Briefcase, Cpu, Star, Quote, Phone, Calendar,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero-students.jpg";
import engImg from "@/assets/course-engineering.jpg";
import pharmImg from "@/assets/course-pharmacy.jpg";
import medImg from "@/assets/course-medical.jpg";
import mgmtImg from "@/assets/course-management.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SRJ Education Consultancy — Career Counselling & Admission Guidance in Pune" },
      { name: "description", content: "Pune's trusted educational consultancy. Expert career counselling, course & college selection and direct admission guidance for Engineering, Pharmacy, Medical and MBA." },
      { property: "og:title", content: "SRJ Education Consultancy — Pune" },
      { property: "og:description", content: "Right Course. Right College. Bright Future." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Compass, title: "Career Counselling", desc: "One-on-one guidance to help you discover the right career path aligned with your strengths and interests." },
  { icon: GraduationCap, title: "Course & College Selection", desc: "Personalised shortlisting based on your CET/JEE/NEET score, budget, location and career goals." },
  { icon: FileCheck2, title: "Direct Admission Guidance", desc: "End-to-end support for management quota and direct admissions in top Maharashtra colleges." },
];

const courses = [
  { title: "Engineering", img: engImg, icon: Cpu, desc: "B.E / B.Tech & Diploma admissions across leading Pune & Maharashtra colleges.", to: "/courses" },
  { title: "Pharmacy", img: pharmImg, icon: FlaskConical, desc: "B.Pharm, D.Pharm & Pharm.D guidance with eligibility & college matching.", to: "/courses" },
  { title: "Medical", img: medImg, icon: Stethoscope, desc: "MBBS, BDS, BAMS, BHMS counselling and end-to-end admission support.", to: "/courses" },
  { title: "Management", img: mgmtImg, icon: Briefcase, desc: "MBA, BBA, PGDM with specialisation guidance from expert mentors.", to: "/courses" },
];

const why = [
  { icon: HeartHandshake, title: "Personalized Counselling", desc: "Sessions tailored to each student's profile and ambitions." },
  { icon: Sparkles, title: "Expert Career Guidance", desc: "Mentors with years of admission and industry experience." },
  { icon: ShieldCheck, title: "Trusted Admission Support", desc: "Transparent, ethical and reliable end-to-end assistance." },
  { icon: Building2, title: "Maharashtra College Network", desc: "Strong relationships with top colleges across the state." },
  { icon: Users, title: "Student-Centric Approach", desc: "Your goals come first — always." },
  { icon: Eye, title: "Transparent Process", desc: "Clear fees, clear timelines and honest advice." },
];

const steps = [
  { icon: Users, t: "Career Counselling", d: "Understanding your profile, interests, and future goals", color: "#14B8A6" },
  { icon: GraduationCap, t: "Course & College Selection", d: "Shortlisting the best-fit options for you", color: "#4F46E5" },
  { icon: ClipboardList, t: "Application & Documentation", d: "End-to-end support with forms and paperwork", color: "#DC2626" },
  { icon: CheckCircle2, t: "Admission Confirmation", d: "Finalizing your admission and guiding you through reporting", color: "#0F766E" },
];

const testimonials = [
  { name: "Rahul Patil", course: "Engineering", text: "SRJ guided me throughout the admission process and helped me choose the right engineering college according to my CET score. Professional, transparent and supportive." },
  { name: "Sneha Kulkarni", course: "MBA", text: "I was confused between multiple MBA colleges, but the SRJ team explained every option clearly. Their counselling helped me make the right decision." },
  { name: "Aman Sharma", course: "Pharmacy", text: "The counselling process was smooth and stress-free. SRJ helped me secure admission in a reputed pharmacy college with proper guidance." },
  { name: "Priya Deshmukh", course: "Medical", text: "Excellent support from the SRJ team. They guided me with documentation, college selection and admission procedures professionally." },
];

const faqs = [
  { q: "How does career counselling help students?", a: "It clarifies your strengths, interests and goals so you can choose a course and college that genuinely fit your future." },
  { q: "Which courses do you provide guidance for?", a: "Engineering, Pharmacy, Medical and Management — at undergraduate and postgraduate levels." },
  { q: "Do you help with direct admissions?", a: "Yes. We provide ethical, transparent guidance for direct and management quota admissions in select colleges." },
  { q: "Which colleges do you work with?", a: "We have a strong network across Pune and Maharashtra including reputed engineering, pharmacy, medical and B-schools." },
  { q: "Is counselling available online?", a: "Absolutely. You can choose online or in-person sessions at our Kharadi, Pune office." },
  { q: "How can students contact SRJ Education Consultancy?", a: "Call +91 90672 58278, email info@srjeducationconsultancy.in or use the enquiry form on the Counselling page." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-24 bg-secondary/40 overflow-hidden">
        <div className="absolute -top-12 -right-12 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="flex flex-col gap-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-card border border-border shadow-soft">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Trusted by 5,000+ Students in Maharashtra</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-navy leading-[1.05] tracking-tight">
                Build Your Career With <span className="text-primary">Expert</span>
                <span className="block mt-2 italic font-medium text-navy/90">Educational Guidance</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We help students choose the right course, college and career path through data-driven professional counselling and end-to-end admission guidance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all rounded-xl shadow-elegant font-bold">
                <Link to="/counselling">Book Free Counselling <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-card text-navy border-border hover:bg-secondary rounded-xl font-bold">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 pt-8 border-t border-border">
              {[
                { v: 100, s: "+", l: "Students Guided", divider: false },
                { v: 98, s: "%", l: "Success Rate", divider: true },
                { v: 2, s: "+", l: "Years Experience", divider: false },
              ].map((c) => (
                <div key={c.l} className={c.divider ? "border-x border-border px-6" : "px-2"}>
                  <div className="font-display text-3xl font-extrabold text-navy">
                    <Counter to={c.v} suffix={c.s} />
                  </div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mt-1">{c.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-navy/10 rounded-full blur-3xl" />

            <div className="relative z-10 p-4 bg-card rounded-[2.5rem] shadow-elegant border border-border">
              <div className="rounded-[2rem] overflow-hidden bg-secondary aspect-[5/4]">
                <img
                  src={heroImg}
                  alt="Indian college students with laptops smiling"
                  width={1600}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="hidden md:flex absolute -top-6 -left-8 bg-card/90 backdrop-blur-xl p-5 rounded-2xl shadow-elegant border border-border items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Admission Status</p>
                  <p className="text-lg font-extrabold text-navy">98% Confirmed</p>
                </div>
              </div>

              <div className="hidden md:flex absolute -bottom-4 -right-8 bg-navy/95 backdrop-blur-xl p-5 rounded-2xl shadow-elegant items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary grid place-items-center shadow-soft">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Premium Access</p>
                  <p className="text-lg font-extrabold text-white">15+ Top Mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About SRJ"
              title={<>A consultancy built around <span className="text-gradient-gold">student success</span></>}
              subtitle="SRJ Education Consultancy is Pune's trusted name for ethical, expert and personalised admission guidance. For over a decade we have helped students transform confusion into clarity and ambition into admission."
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border bg-card shadow-soft">
                <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center mb-3"><Eye className="h-5 w-5 text-navy" /></div>
                <h3 className="font-display text-lg text-navy mb-1">Our Vision</h3>
                <p className="text-sm text-muted-foreground">To be Maharashtra's most trusted partner in shaping student futures.</p>
              </div>
              <div className="p-5 rounded-2xl border bg-card shadow-soft">
                <div className="h-10 w-10 rounded-xl bg-accent grid place-items-center mb-3"><HeartHandshake className="h-5 w-5 text-navy" /></div>
                <h3 className="font-display text-lg text-navy mb-1">Our Mission</h3>
                <p className="text-sm text-muted-foreground">Empowering every student with honest counselling and reliable admission support.</p>
              </div>
            </div>
            <Button asChild className="mt-6 bg-gradient-primary text-primary-foreground rounded-full">
              <Link to="/about">Learn more about us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-elegant">
              <img src={engImg} alt="Engineering campus" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-soft hidden md:block">
              <div className="flex items-center gap-2 text-gold"><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /></div>
              <p className="text-sm text-navy font-semibold mt-1">Rated 4.9 / 5 by students</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Services" title={<>Everything you need, <span className="text-gradient-gold">under one roof</span></>} subtitle="From career discovery to admission confirmation, we walk every step with you." />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="group p-7 rounded-2xl border-0 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 bg-card">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center mb-5 shadow-soft group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-navy hover:text-gold transition">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Courses" title={<>Courses we <span className="text-gradient-gold">guide you for</span></>} subtitle="Choose from professional streams across India's most in-demand fields." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <Card key={c.title} className="group overflow-hidden rounded-2xl border-0 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 bg-card p-0">
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute top-3 left-3 h-9 w-9 rounded-xl bg-white/90 grid place-items-center"><c.icon className="h-4 w-4 text-navy" /></div>
                  <h3 className="absolute bottom-3 left-3 right-3 font-display text-xl text-white">{c.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                  <Link to={c.to} className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-navy hover:text-gold">View details <ArrowRight className="h-3.5 w-3.5" /></Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Why Choose Us" title={<>Built on <span className="text-gradient-gold">trust, results and care</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {why.map((w) => (
              <div key={w.title} className="p-6 rounded-2xl border bg-card hover:border-gold transition-all hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center shrink-0"><w.icon className="h-5 w-5 text-navy" /></div>
                  <div>
                    <h3 className="font-display text-lg text-navy mb-1">{w.title}</h3>
                    <p className="text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Process" title={<>A simple, structured approach to your <span className="text-gradient-gold">admission journey</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-3 items-stretch">
            {steps.map((s, i) => (
              <div key={s.t} className="relative flex items-stretch animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div
                  className="flex-1 rounded-3xl bg-card p-6 text-center shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 border-2"
                  style={{ borderColor: s.color }}
                >
                  <div
                    className="mx-auto h-14 w-14 rounded-2xl grid place-items-center mb-4"
                    style={{ backgroundColor: `${s.color}1A`, color: s.color }}
                  >
                    <s.icon className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2" style={{ color: s.color }}>{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center px-1 shrink-0" aria-hidden>
                    <ArrowRight className="h-7 w-7" style={{ color: s.color, opacity: 0.7 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Testimonials" title={<>Real stories from <span className="text-gradient-gold">real students</span></>} />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-7 rounded-2xl border-0 shadow-soft bg-card">
                <Quote className="h-8 w-8 text-gold/40 mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t">
                  <div className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-display text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.course} Student</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full border-navy/20">
              <Link to="/testimonials">Read all testimonials <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient-gold">questions</span></>} />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="border rounded-2xl bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-left font-display text-base text-navy hover:no-underline py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                  Need expert career guidance?
                </h2>
                <p className="mt-3 text-primary-foreground/80 max-w-xl">
                  Book a free counselling session today and take the first confident step towards your dream college.
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-gold">
                  <CheckCircle2 className="h-4 w-4" /> No obligations &nbsp;
                  <CheckCircle2 className="h-4 w-4" /> Free first session
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:opacity-90">
                  <a href="tel:+919067258278"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                  <Link to="/counselling"><Calendar className="mr-2 h-4 w-4" /> Book Free Counselling</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// suppress unused warnings for icon imports kept for consistency
void ClipboardList;
