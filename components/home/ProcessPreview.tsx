import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { processSteps } from "@/lib/data";

export default function ProcessPreview() {
  return (
    <section className="py-4 sm:py-5 md:py-6 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="How It Works"
            title="From First Call to Solar Power — In About 8 Days"
            subtitle="Our streamlined 5-step process makes going solar simple and hassle-free."
          />
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 70}>
                <div className="relative text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent text-primary-dark font-bold text-base flex items-center justify-center mx-auto mb-3 relative z-10">
                    {step.step}
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary/5 text-primary text-xs font-bold mb-2">
                    {step.duration}
                  </span>
                  <h3 className="font-bold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={150}>
          <div className="text-center mt-6">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
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
