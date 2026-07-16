import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const highlights = [
  "Real rooftop installation completed by our team",
  "Strong elevated structure for long-term durability",
  "Suitable layout planning for residential rooftops",
];

export default function InstallationShowcase() {
  return (
    <section className="py-4 sm:py-5 md:py-6 bg-background">
      <Container>
        <ScrollReveal>
          <SectionHeading
            badge="Recent Work"
            title="Recent Rooftop Solar Installation"
            subtitle="A real site installation from Barshi, Maharashtra showing the quality and structure of our rooftop solar work."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4 lg:gap-6 items-center">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <Image
                src="/home-installation-barshi.png"
                alt="Recent rooftop solar installation in Barshi, Maharashtra"
                width={1024}
                height={576}
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="rounded-2xl border border-border bg-white p-5 md:p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
                <MapPin className="h-4 w-4 text-accent" />
                Barshi, Maharashtra
              </div>

              <h3 className="mt-4 text-xl font-bold text-foreground">
                Clean setup, strong structure, professional finish
              </h3>

              <p className="mt-3 text-sm md:text-base leading-relaxed text-muted">
                We design and install rooftop solar systems with proper structure,
                safe fitting, and neat execution so the system performs well and
                looks professional on site.
              </p>

              <div className="mt-4 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-solar-green" />
                    <p className="text-sm md:text-base text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
