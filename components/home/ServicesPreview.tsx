import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function ServicesPreview() {
  return (
    <section className="py-4 sm:py-5 md:py-6 bg-white relative overflow-hidden">
      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            badge="Our Services"
            title="Complete Solar Solutions"
            subtitle="From residential rooftops to industrial plants — we handle everything from site visit to net metering."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <ScrollReveal key={service.slug} delay={i * 60}>
                <div className="group bg-background rounded-xl p-4 border border-border hover:border-primary/25 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-accent-light" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={150}>
          <div className="text-center mt-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
