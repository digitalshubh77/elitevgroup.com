import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { services, systemSizes } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Solar Installation Services in Maharashtra",
  description:
    "Complete solar solutions across Maharashtra — residential, commercial and industrial rooftop installation, maintenance, net metering, and free subsidy documentation by Elite Ventures.",
  keywords: [
    "solar installation services",
    "residential solar Maharashtra",
    "commercial solar Barshi",
    "industrial solar Solapur",
    "net metering help",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Solar Installation Services | Elite Ventures",
    description:
      "Residential, commercial and industrial solar installation with maintenance, net metering and subsidy support across Maharashtra.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Complete Solar Solutions — One Team"
        subtitle="From residential rooftops to industrial plants — we provide end-to-end solar services across Maharashtra."
      />

      <PageSection variant="white">
        <Container>
          <div className="bg-white rounded-xl border border-border divide-y divide-border overflow-hidden">
            {services.map((service, i) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.slug}
                  className="flex flex-col sm:flex-row gap-4 items-start p-4 md:p-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-accent uppercase tracking-wide mb-1">
                      Service {i + 1}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container className="text-center">
          <SectionHeading
            badge="System Sizes"
            title="System Sizes We Install"
            subtitle="We design and install solar systems tailored to your electricity consumption and roof space."
          />
          <div className="flex flex-wrap justify-center gap-2.5">
            {systemSizes.map((size) => (
              <div
                key={size}
                className="px-5 py-3 rounded-lg bg-white border border-border text-primary font-extrabold text-lg md:text-xl"
              >
                {size}
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <CTASection />
    </>
  );
}
