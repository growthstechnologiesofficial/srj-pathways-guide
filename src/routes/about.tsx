import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Counter } from "@/components/site/Counter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, HeartHandshake, ShieldCheck, Sparkles, ArrowRight, User } from "lucide-react";
import aboutImg from "@/assets/about-office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SRJ Education Consultancy — Trusted Educational Consultants in Pune" },
      { name: "description", content: "Learn about SRJ Education Consultancy — our story, mission, founders and the team guiding thousands of students to the right colleges." },
      { property: "og:title", content: "About SRJ Education Consultancy" },
      { property: "og:description", content: "A decade of trusted career counselling and admission guidance in Pune." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Sunil Jadhav", role: "Founder & CEO" },
  { name: "Sanjay Patil", role: "Co-Founder & Senior Career Counsellor" },
  { name: "Priya Kulkarni", role: "Admission Guidance Specialist" },
  { name: "Neha Joshi", role: "Career Counsellor" },
  { name: "Priyanka Sharma", role: "Course & College Advisor" },
  { name: "Rohit Shinde", role: "Career Guidance Specialist" },
  { name: "Rahul Deshmukh", role: "Sales & Marketing Manager" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Guiding Pune students toward <span className="text-gradient-gold">brighter futures</span></>}
        subtitle="For over a decade SRJ Education Consultancy has helped thousands of students discover the right course, connect with the right college and confidently start the right career."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img src={aboutImg} alt="SRJ Education Consultancy office" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={<>A consultancy built on <span className="text-gradient-gold">trust and results</span></>}
              subtitle="What started as a small initiative to help local students choose the right path has grown into one of Pune's most trusted educational consultancies. Our philosophy is simple — put the student first, always."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { v: 5000, s: "+", l: "Students Guided" },
                { v: 150, s: "+", l: "Partner Colleges" },
                { v: 12, s: "+", l: "Years Experience" },
              ].map((c) => (
                <div key={c.l} className="p-5 rounded-2xl bg-secondary/60 text-center">
                  <div className="font-display text-2xl font-bold text-navy"><Counter to={c.v} suffix={c.s} /></div>
                  <div className="text-xs text-muted-foreground mt-1">{c.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, t: "Our Vision", d: "To be Maharashtra's most trusted partner in shaping student futures through transparent, expert guidance." },
            { icon: HeartHandshake, t: "Our Mission", d: "Empowering every student with honest counselling and reliable admission support, regardless of background." },
            { icon: ShieldCheck, t: "Our Values", d: "Integrity, transparency, empathy, expertise and a relentless commitment to student success." },
          ].map((b) => (
            <Card key={b.t} className="p-7 rounded-2xl border-0 shadow-soft bg-card">
              <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center mb-4"><b.icon className="h-5 w-5 text-primary-foreground" /></div>
              <h3 className="font-display text-xl text-navy mb-2">{b.t}</h3>
              <p className="text-sm text-muted-foreground">{b.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Founder" title={<>A message from our <span className="text-gradient-gold">founder</span></>} />
          <Card className="p-8 md:p-12 rounded-3xl border-0 shadow-elegant bg-card grid md:grid-cols-[200px_1fr] gap-8 items-center">
            <div className="mx-auto md:mx-0 h-44 w-44 rounded-full bg-gradient-primary grid place-items-center shadow-soft border-4 border-gold/30">
              <User className="h-20 w-20 text-primary-foreground/60" />
            </div>
            <div>
              <Sparkles className="h-6 w-6 text-gold mb-3" />
              <p className="font-display text-xl md:text-2xl text-navy leading-relaxed">
                "Committed to guiding students toward the right educational and career opportunities through expert counselling, transparent guidance and personalised support."
              </p>
              <div className="mt-5">
                <div className="font-semibold text-navy">Sunil Jadhav</div>
                <div className="text-sm text-gold font-medium">Founder & CEO — SRJ Education Consultancy</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Our Team" title={<>Meet the people <span className="text-gradient-gold">behind every success</span></>} subtitle="A passionate team of counsellors, advisors and admission specialists working together for your future." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <Card key={m.name} className="p-6 rounded-2xl border-0 shadow-soft bg-card text-center hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-secondary to-accent grid place-items-center mb-4 border-4 border-gold/20">
                  <User className="h-12 w-12 text-navy/30" />
                </div>
                <h3 className="font-display text-lg text-navy">{m.name}</h3>
                <p className="text-sm text-gold font-medium mt-1">{m.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-gradient-primary p-10 md:p-14 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Ready to plan your future with us?</h2>
            <p className="mt-3 text-primary-foreground/80">Book a free counselling session and meet our team.</p>
            <Button asChild size="lg" className="mt-6 bg-gradient-gold text-navy rounded-full font-semibold">
              <Link to="/counselling">Book Free Counselling <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
