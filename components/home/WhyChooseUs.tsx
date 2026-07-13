import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="py-4 sm:py-5 md:py-6 hero-gradient-static relative overflow-hidden">
      <div className="absolute inset-0 solar-grid-bg opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Why Choose Us"
            title="Trusted Solar Partner in Maharashtra"
            subtitle="We combine 20+ years of experience with government-approved products and end-to-end support."
            light
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item} delay={i * 50}>
              <div className="rounded-xl px-4 py-3.5 flex items-start gap-3 border border-white/10 bg-white/5 h-full">
                <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-5">
          *Final interest rate as per bank&apos;s rules and regulations.
        </p>
      </div>
    </section>
  );
}
