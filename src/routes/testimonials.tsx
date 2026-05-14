import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Testimonials & Success Stories | SRJ Education Consultancy" },
      { name: "description", content: "Read 30+ honest reviews and success stories from students who got their dream colleges with SRJ Education Consultancy's career counselling and admission guidance." },
      { property: "og:title", content: "Testimonials — SRJ Education" },
      { property: "og:description", content: "Real student success stories." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const reviews = [
  ["Rahul Patil", "Engineering Student", "SRJ Education Consultancy guided me throughout the admission process and helped me choose the right engineering college according to my CET score. Their counselling was professional, transparent and very supportive."],
  ["Sneha Kulkarni", "MBA Student", "I was confused between multiple MBA colleges, but the SRJ team explained every option clearly. Their career counselling helped me make the right decision for my future."],
  ["Aman Sharma", "Pharmacy Student", "The counselling process was smooth and stress-free. SRJ Education Consultancy helped me secure admission in a reputed pharmacy college with proper guidance."],
  ["Priya Deshmukh", "Medical Aspirant", "Excellent support from the SRJ team. They guided me with documentation, college selection and admission procedures professionally. Highly recommended for medical admissions."],
  ["Rohit Jadhav", "Engineering Student", "Very genuine consultancy with knowledgeable counsellors. They explained every college in detail and helped me choose the best option within my budget."],
  ["Pooja Verma", "Management Student", "I had a wonderful experience with SRJ Education Consultancy. Their team was always available to answer my questions and guide me during the admission process."],
  ["Akash More", "B.Tech Student", "Professional counselling and quick support. Because of SRJ Education Consultancy, I got admission to a good engineering college without confusion or stress."],
  ["Neha Joshi", "Pharmacy Student", "The team provided proper career guidance and helped me understand the future opportunities in pharmacy. Their counselling session was extremely helpful."],
  ["Saurabh Shinde", "MBA Student", "SRJ Education Consultancy helped me shortlist the best MBA colleges based on my profile and career goals. Their support made the process simple and easy."],
  ["Anjali Pawar", "Medical Student", "I am thankful to SRJ Education Consultancy for their continuous support during my admission journey. Their guidance was honest and professional."],
  ["Vikas Yadav", "Engineering Student", "The best part about SRJ Education Consultancy is their transparency. They guided me step-by-step and helped me secure admission in a reputed college."],
  ["Komal Patil", "BBA Student", "The counsellors were very polite and knowledgeable. They helped me select the right management course according to my interests and future plans."],
  ["Nitin Chavan", "Diploma to Engineering", "I was confused about direct second-year engineering admission, but SRJ Consultancy guided me properly and completed the process smoothly."],
  ["Riya Gupta", "Pharmacy Student", "Very supportive team with excellent counselling services. I received complete guidance regarding colleges, fees and admission procedures."],
  ["Harshvardhan Kale", "MBA Student", "Professional consultancy with proper career guidance. I appreciate their honest advice and quick response throughout the admission process."],
  ["Sakshi Singh", "Engineering Student", "SRJ Education Consultancy made my college admission process easy and hassle-free. Their counselling sessions helped me gain clarity about my career."],
  ["Aditya Mane", "Medical Aspirant", "Great experience with SRJ Consultancy. Their team explained every admission step clearly and helped me choose the right medical college."],
  ["Shweta More", "Management Student", "I highly recommend SRJ Education Consultancy for students looking for professional career counselling and admission support."],
  ["Kunal Agarwal", "Engineering Student", "The SRJ team provided excellent guidance for engineering admissions. Their support and communication were outstanding."],
  ["Meera Kulkarni", "Pharmacy Student", "From counselling to admission confirmation, the entire process was managed professionally. Thank you SRJ Education Consultancy for your valuable support."],
  ["Yash Patankar", "Engineering Student", "SRJ Education Consultancy helped me understand the complete admission process and guided me towards the right engineering college."],
  ["Tanvi Shah", "MBA Student", "I was searching for proper career guidance after graduation, and SRJ Consultancy provided excellent counselling that helped me choose the best MBA specialization."],
  ["Omkar Salunkhe", "Pharmacy Student", "The counsellors at SRJ Education Consultancy were very supportive and knowledgeable. They explained every detail clearly."],
  ["Aarti Mishra", "Medical Student", "I had a very positive experience with SRJ Consultancy. Their guidance regarding medical admissions and college selection was accurate and professional."],
  ["Deepak Jagtap", "Engineering Student", "Very trusted consultancy for engineering admissions. The team helped me compare colleges and choose the best option for my career goals."],
  ["Rutuja Patil", "Management Student", "SRJ Education Consultancy provided personalized counselling and helped me gain confidence about my future career decisions."],
  ["Mohit Verma", "B.Tech Student", "The admission process became much easier because of SRJ Consultancy. Their team handled everything professionally and provided timely updates."],
  ["Ishita Kulkarni", "Pharmacy Student", "I appreciate the honest guidance and student-friendly approach of SRJ Education Consultancy."],
  ["Pratik Desai", "MBA Student", "The counsellors understood my career goals and recommended colleges that matched my profile perfectly. Thank you SRJ Consultancy."],
  ["Simran Kaur", "Medical Aspirant", "SRJ Education Consultancy guided me step-by-step during my admission journey. Their professional counselling and quick support made the entire process stress-free."],
] as const;

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>Trusted by <span className="text-gradient-gold">thousands of students</span></>}
        subtitle="Honest reviews from students and parents whose journeys we've had the privilege to be part of."
      />

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Reviews" title={<>What students <span className="text-gradient-gold">say about us</span></>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map(([name, role, text]) => (
              <Card key={name} className="p-6 rounded-2xl border-0 shadow-soft bg-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <Quote className="h-7 w-7 text-gold/40 mb-2" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">"{text}"</p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-display">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{name}</div>
                    <div className="text-xs text-muted-foreground">{role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-gradient-navy p-10 md:p-14 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Be our next success story</h2>
            <p className="mt-3 text-primary-foreground/80">Start with a free counselling session today.</p>
            <Button asChild size="lg" className="mt-6 bg-gradient-primary text-primary-foreground rounded-full font-semibold">
              <Link to="/counselling">Book Free Counselling <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
