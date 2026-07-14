import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/home/CTASection";
import Button from "@/components/ui/Button";
import { company, founders } from "@/lib/data";
import {
  Calendar,
  Users,
  MapPin,
  Award,
  Sun,
  Target,
  Eye,
  Heart,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Solar Experts in Barshi, Maharashtra",
  description: `Learn about ${company.legalName} — rooftop solar installation experts in Barshi, Maharashtra with ${company.experience} years team experience and ${company.installations} installations. ${company.tagline}.`,
  keywords: [
    "about Elite Ventures",
    "solar company Barshi",
    "solar experts Maharashtra",
    "Elite Ventures Pvt Ltd",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${company.legalName}`,
    description: `Solar installation experts in Barshi, Maharashtra with ${company.experience} years team experience and ${company.installations} installations.`,
    url: "/about",
  },
};

const quickFacts = [
  { icon: Calendar, label: "Year Started", value: String(company.yearStarted) },
  { icon: Award, label: "Experience", value: `${company.experience} Years` },
  { icon: Sun, label: "Installations", value: `${company.installations} Completed` },
  { icon: MapPin, label: "Service Area", value: company.serviceArea },
];

const milestones = [
  "Complete solar solutions under one roof",
  "Government-approved panels only",
  "Free subsidy documentation support",
  "Serving entire Maharashtra",
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Make rooftop solar affordable and accessible for every home and business in Maharashtra with end-to-end support.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A future where every rooftop generates clean energy, cuts electricity bills, and builds a greener Maharashtra.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    description:
      "Transparent pricing, government-approved products, free site visits, and dedicated support from first call to net metering.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="About Elite Ventures Private Limited"
        subtitle="Lighting The Future — helping every home and business in Maharashtra save money using solar energy."
      />

      <PageSection variant="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            <ScrollReveal direction="left">
              <SectionHeading
                badge="Our Story"
                title="Your Trusted Solar Partner"
                centered={false}
                className="mb-3"
              />
              <div className="space-y-2.5 text-muted leading-relaxed">
                <p>
                  {company.name} is a solar installation company based in
                  Barshi, Dist. Solapur, Maharashtra. We started in{" "}
                  {company.yearStarted} with one simple goal — to help every
                  home and business in Maharashtra save money using solar energy.
                </p>
                <p>
                  Our team has more than {company.experience} years of combined
                  experience in the solar field. Together, we have completed{" "}
                  {company.installations} solar installations for happy customers.
                </p>
                <p>
                  We provide complete solar solutions — from the first site visit
                  to subsidy paperwork, installation, and net metering. Our
                  customers do not need to go anywhere else. We handle everything.
                </p>
                <p>
                  Our tagline is &ldquo;{company.tagline}&rdquo; — because we
                  believe every rooftop in Maharashtra can create clean energy,
                  save money, and build a better tomorrow.
                </p>
              </div>

              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {milestones.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-foreground px-1 py-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-solar-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3">
              {quickFacts.map((fact, i) => (
                <ScrollReveal key={fact.label} delay={i * 60}>
                  <div className="stat-card rounded-xl p-4 border border-border text-center h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3">
                      <fact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xl md:text-2xl font-extrabold text-primary">
                      {fact.value}
                    </p>
                    <p className="text-sm text-muted mt-1 font-medium">{fact.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="dark">
        <Container>
          <ScrollReveal>
            <SectionHeading
              badge="What We Stand For"
              title="Mission, Vision & Promise"
              subtitle="The values that guide every installation we complete across Maharashtra."
              light
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-3">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 70}>
                <div className="rounded-xl p-4 md:p-5 h-full text-center border border-white/10 bg-white/5">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <pillar.icon className="w-6 h-6 text-accent-light" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <ScrollReveal>
            <SectionHeading
              badge="Leadership"
              title="Our Founders"
              subtitle="Experienced professionals dedicated to bringing solar energy to every rooftop in Maharashtra."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {founders.map((founder, i) => (
              <ScrollReveal key={founder} delay={i * 60}>
                <div className="bg-white rounded-xl p-4 border border-border text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-accent-light" />
                  </div>
                  <h3 className="font-bold text-foreground text-base leading-snug">{founder}</h3>
                  <p className="text-sm text-accent font-semibold mt-1">Co-Founder</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="white">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="hero-gradient-static rounded-xl p-5 md:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 solar-grid-bg opacity-15" />
                <Target className="w-10 h-10 text-accent-light mx-auto mb-3 relative" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 relative text-center">
                  Head Office
                </h3>
                <p className="text-white/80 relative leading-relaxed text-center">
                  {company.address}
                </p>
                <div className="text-center mt-4 relative flex flex-col sm:flex-row gap-2.5 justify-center">
                  <Button href={company.mapLink} external variant="primary" size="lg">
                    <MapPin className="w-5 h-5" />
                    View on Google Maps
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </PageSection>

      <CTASection />
    </>
  );
}
