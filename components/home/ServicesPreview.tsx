import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function ServicesPreview() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-aurora-2 pointer-events-none" />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            badge="Our Services"
            title="Complete Solar Solutions"
            subtitle="From residential rooftops to industrial plants — we handle everything from site visit to net metering."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <ScrollReveal key={service.slug} delay={i * 80}>
                <TiltCard innerClassName="h-full">
                  <div className="group relative bg-background rounded-xl p-4 sm:p-5 border border-border card-3d shine-hover hover:border-accent/30 overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full transition-all group-hover:from-accent/15" />

                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                      <Icon className="w-7 h-7 text-accent-light" />
                    </div>
                    <h3 className="relative text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="relative text-sm text-muted leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className="relative mt-4 flex items-center gap-1 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark shadow-md transition-all card-3d"
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
