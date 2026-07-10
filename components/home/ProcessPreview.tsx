import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { processSteps } from "@/lib/data";

export default function ProcessPreview() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-background relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 section-pattern pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="How It Works"
            title="From First Call to Solar Power — In About 8 Days"
            subtitle="Our streamlined 5-step process makes going solar simple and hassle-free."
          />
        </ScrollReveal>

        <div className="relative preserve-3d">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-1 rounded-full timeline-line" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="relative text-center group">
                  <div className="step-3d w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light text-primary-dark font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-accent/30 relative z-10">
                    {step.step}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold mb-2 border border-primary/10">
                    {step.duration}
                  </span>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-8">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 card-3d"
            >
              View Full Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
