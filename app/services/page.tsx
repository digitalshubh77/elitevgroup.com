import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { services, systemSizes } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Complete solar solutions — residential, commercial, industrial installation, maintenance, net metering, and subsidy documentation help.",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.slug}
                className={`group relative flex flex-col md:flex-row gap-5 md:gap-8 items-start bg-white rounded-2xl p-4 md:p-6 border border-border shadow-xl card-hover card-glow shine-hover overflow-hidden ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 md:w-11 md:h-11 text-accent-light" />
                </div>
                <div className="relative flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs mb-3">
                    Service {i + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>

      <PageSection variant="pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="System Sizes"
            title="System Sizes We Install"
            subtitle="We design and install solar systems tailored to your electricity consumption and roof space."
          />
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {systemSizes.map((size, i) => (
              <div
                key={size}
                className="px-8 md:px-10 py-5 rounded-2xl bg-white border-2 border-primary/10 text-primary font-extrabold text-xl md:text-2xl shadow-lg card-hover shine-hover animate-count-pop"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <CTASection />
    </>
  );
}
