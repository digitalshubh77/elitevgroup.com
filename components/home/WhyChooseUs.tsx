import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ParticleField from "@/components/home/ParticleField";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-10 md:py-12 hero-gradient-static relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 solar-grid-bg-animated opacity-15" />
      <ParticleField count={15} variant="hero" />

      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-solar-green/10 rounded-full blur-3xl animate-aurora-2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Why Choose Us"
            title="Trusted Solar Partner in Maharashtra"
            subtitle="We combine 20+ years of experience with government-approved products and end-to-end support."
            light
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item} delay={i * 70}>
              <TiltCard maxTilt={8} innerClassName="h-full">
                <div className="glass-card-strong rounded-xl p-4 md:p-5 flex items-start gap-3 card-3d shine-hover h-full">
                  <div className="w-9 h-9 rounded-xl bg-accent/25 flex items-center justify-center shrink-0 shadow-inner">
                    <CheckCircle2 className="w-5 h-5 text-accent-light" />
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-6">
          *Final interest rate as per bank&apos;s rules and regulations.
        </p>
      </div>
    </section>
  );
}
