import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
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
  CheckCircle2,
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="About Elite Ventures Private Limited"
        subtitle="Lighting The Future — helping every home and business in Maharashtra save money using solar energy."
      />

      <PageSection variant="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="Your Trusted Solar Partner"
                centered={false}
                className="mb-6"
              />
              <div className="space-y-4 text-muted leading-relaxed">
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

              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {milestones.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground bg-background rounded-xl px-4 py-3 border border-border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-solar-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {quickFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className="stat-card rounded-2xl p-6 md:p-7 border border-border shadow-xl card-hover card-glow text-center animate-count-pop shine-hover"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                    <fact.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {fact.value}
                  </p>
                  <p className="text-sm text-muted mt-2 font-medium">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection variant="muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership"
            title="Our Founders"
            subtitle="Experienced professionals dedicated to bringing solar energy to every rooftop in Maharashtra."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {founders.map((founder, i) => (
              <div
                key={founder}
                className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-xl card-hover card-glow shine-hover text-center animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                  <Users className="w-10 h-10 text-accent-light" />
                </div>
                <h3 className="font-bold text-foreground text-lg">{founder}</h3>
                <p className="text-sm text-accent font-semibold mt-1">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection variant="white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient-static rounded-2xl p-6 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 solar-grid-bg-animated opacity-15" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-aurora-1" />
            <Target className="w-14 h-14 text-accent-light mx-auto mb-5 relative" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative text-center">
              Head Office
            </h3>
            <p className="text-white/80 relative leading-relaxed text-center text-lg">
              {company.address}
            </p>
            <div className="text-center mt-8 relative">
              <Button href={company.mapLink} external variant="primary" size="md">
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      <CTASection />
    </>
  );
}
