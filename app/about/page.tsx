import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
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
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — solar installation experts in Barshi, Maharashtra with 20+ years experience and 100+ installations.`,
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

      <PageSection variant="white" className="perspective-1000">
        <Container>
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-center">
            <ScrollReveal direction="left">
              <SectionHeading
                badge="Our Story"
                title="Your Trusted Solar Partner"
                centered={false}
                className="mb-4"
              />
              <div className="space-y-3 text-muted leading-relaxed">
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

              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {milestones.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground bg-background rounded-xl px-4 py-3 border border-border card-3d"
                  >
                    <CheckCircle2 className="w-4 h-4 text-solar-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {quickFacts.map((fact, i) => (
                <ScrollReveal key={fact.label} delay={i * 80}>
                  <TiltCard innerClassName="h-full">
                    <div className="stat-card card-3d rounded-2xl p-4 md:p-5 border border-border shadow-xl text-center h-full shine-hover">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                        <fact.icon className="w-7 h-7 text-primary" />
                      </div>
                      <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {fact.value}
                      </p>
                      <p className="text-sm text-muted mt-2 font-medium">{fact.label}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="dark" className="perspective-1000">
        <Container>
          <ScrollReveal>
            <SectionHeading
              badge="What We Stand For"
              title="Mission, Vision & Promise"
              subtitle="The values that guide every installation we complete across Maharashtra."
              light
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-3 md:gap-5">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 100}>
                <TiltCard maxTilt={8} innerClassName="h-full">
                  <div className="glass-card-strong rounded-2xl p-4 md:p-5 card-3d shine-hover h-full text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-5">
                      <pillar.icon className="w-8 h-8 text-accent-light" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted" className="perspective-1000">
        <Container>
          <ScrollReveal>
            <SectionHeading
              badge="Leadership"
              title="Our Founders"
              subtitle="Experienced professionals dedicated to bringing solar energy to every rooftop in Maharashtra."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {founders.map((founder, i) => (
              <ScrollReveal key={founder} delay={i * 80}>
                <TiltCard innerClassName="h-full">
                  <div className="bg-white rounded-2xl p-4 md:p-5 border border-border shadow-xl card-3d shine-hover text-center h-full">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                      <Users className="w-10 h-10 text-accent-light" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg leading-snug">{founder}</h3>
                    <p className="text-sm text-accent font-semibold mt-2">Co-Founder</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Elite Ventures
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="white" className="perspective-1000">
        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <TiltCard maxTilt={6}>
                <div className="hero-gradient-static rounded-2xl p-5 md:p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/20 card-3d">
                  <div className="absolute inset-0 solar-grid-bg-animated opacity-15" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-aurora-1" />
                  <Target className="w-14 h-14 text-accent-light mx-auto mb-5 relative" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 relative text-center">
                    Head Office
                  </h3>
                  <p className="text-white/80 relative leading-relaxed text-center text-lg">
                    {company.address}
                  </p>
                  <div className="text-center mt-5 relative flex flex-col sm:flex-row gap-3 justify-center">
                    <Button href={company.mapLink} external variant="primary" size="lg">
                      <MapPin className="w-5 h-5" />
                      View on Google Maps
                    </Button>
                    <Button href="/contact" variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        </Container>
      </PageSection>

      <CTASection />
    </>
  );
}
