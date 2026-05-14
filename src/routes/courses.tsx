import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import engImg from "@/assets/course-engineering.jpg";
import pharmImg from "@/assets/course-pharmacy.jpg";
import medImg from "@/assets/course-medical.jpg";
import mgmtImg from "@/assets/course-management.jpg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses We Guide For — Engineering, Pharmacy, Medical & MBA | SRJ Education" },
      { name: "description", content: "Get expert admission guidance for Engineering, Pharmacy, Medical and Management courses across top colleges in Pune and Maharashtra." },
      { property: "og:title", content: "Courses — SRJ Education Consultancy" },
      { property: "og:description", content: "Engineering, Pharmacy, Medical, MBA admission guidance." },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

const courses = [
  {
    title: "Engineering",
    img: engImg,
    overview: "B.E, B.Tech and Diploma admissions across leading Pune and Maharashtra colleges. Streams include Computer, IT, AI/ML, Mechanical, Civil, E&TC and more.",
    careers: ["Software Engineer", "Data Scientist", "Civil/Mech Engineer", "Embedded Engineer", "Product Manager"],
    colleges: ["COEP Pune", "VIT Pune", "PICT", "MIT-WPU", "Sinhgad", "PCCOE"],
    eligibility: "12th PCM with valid MHT-CET / JEE Main score. Diploma students eligible for direct second year.",
  },
  {
    title: "Pharmacy",
    img: pharmImg,
    overview: "B.Pharm, D.Pharm and Pharm.D admission guidance with eligibility analysis and structured college matching.",
    careers: ["Hospital Pharmacist", "R&D Scientist", "Clinical Research", "Medical Writer", "Pharma Marketing"],
    colleges: ["Poona College of Pharmacy", "AISSMS", "MIT", "Modern College", "Sinhgad"],
    eligibility: "12th PCB / PCM with MHT-CET (PCB/PCM) — minimum 50% aggregate.",
  },
  {
    title: "Medical",
    img: medImg,
    overview: "MBBS, BDS, BAMS, BHMS counselling and end-to-end admission support including state and management quota guidance.",
    careers: ["Doctor (MBBS)", "Dentist", "Ayurvedic Practitioner", "Homeopath", "Medical Researcher"],
    colleges: ["BJ Medical College", "AFMC", "DY Patil", "Bharati Vidyapeeth", "Symbiosis"],
    eligibility: "12th PCB with valid NEET UG score. Cut-offs vary by college and category.",
  },
  {
    title: "Management",
    img: mgmtImg,
    overview: "MBA, BBA, PGDM with specialisation guidance — from Marketing and Finance to HR, Operations and Business Analytics.",
    careers: ["Business Analyst", "Marketing Manager", "Investment Banker", "HR Lead", "Operations Manager"],
    colleges: ["SIBM Pune", "SCMHRD", "MIT-SOB", "Indira", "Welingkar"],
    eligibility: "Graduation in any stream with valid CAT/MAT/CMAT/MAH-CET score.",
  },
];

function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title={<>Find the right course for <span className="text-gradient-gold">your future</span></>}
        subtitle="Detailed guidance for India's most sought-after professional courses — with the colleges, careers and clarity you need."
      />

      <section className="py-20 space-y-10">
        <div className="container mx-auto max-w-7xl px-4 space-y-10">
          {courses.map((c, i) => (
            <Card key={c.title} className="overflow-hidden p-0 rounded-3xl border-0 shadow-soft bg-card">
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[280px]">
                  <img src={c.img} alt={c.title} loading="lazy" width={1024} height={768} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 px-3 py-1 rounded-full bg-gold text-navy text-xs font-semibold uppercase tracking-wider">{c.title}</div>
                </div>
                <div className="p-8 md:p-12">
                  <h2 className="font-display text-3xl text-navy mb-3">{c.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{c.overview}</p>

                  <div className="mt-6">
                    <h3 className="font-display text-sm uppercase tracking-wider text-gold mb-2">Career Opportunities</h3>
                    <div className="flex flex-wrap gap-2">
                      {c.careers.map((x) => <span key={x} className="text-xs px-3 py-1 rounded-full bg-accent text-navy">{x}</span>)}
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-display text-sm uppercase tracking-wider text-gold mb-2">Popular Colleges</h3>
                    <div className="flex flex-wrap gap-2">
                      {c.colleges.map((x) => <span key={x} className="text-xs px-3 py-1 rounded-full border border-navy/15 text-navy">{x}</span>)}
                    </div>
                  </div>

                  <div className="mt-5 p-4 rounded-2xl bg-secondary/60 flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-navy text-sm">Eligibility</div>
                      <div className="text-sm text-muted-foreground">{c.eligibility}</div>
                    </div>
                  </div>

                  <Button asChild className="mt-6 bg-gradient-primary text-primary-foreground rounded-full">
                    <Link to="/counselling">Get admission guidance <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
