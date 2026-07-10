import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import CTASection from "@/components/home/CTASection";
import { processSteps } from "@/lib/data";
import { Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Installation Process",
  description:
    "Our 5-step solar installation process — from site visit to net metering in about 8 days.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        badge="Installation Process"
        title="From First Call to Solar Power — In About 8 Days"
        subtitle="Our streamlined 5-step process makes going solar simple, fast, and hassle-free."
      />

      <PageSection variant="white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent font-bold text-sm border border-accent/20">
              <Zap className="w-4 h-4" />
              Total Timeline: ~8 Days
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-10 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-accent via-primary to-solar-green timeline-line" />

            <div className="space-y-5">
              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="relative flex gap-6 md:gap-8 animate-fade-up"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-light text-primary-dark font-bold text-2xl flex items-center justify-center shrink-0 shadow-xl shadow-accent/30 relative z-10 card-hover">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-5 md:p-6 border border-border shadow-xl card-hover card-glow shine-hover">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-bold border border-primary/10">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection variant="pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="hero-gradient-static rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 solar-grid-bg opacity-10" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-white/75 relative text-lg max-w-xl mx-auto">
              Book a free site visit today and our team will guide you through every step.
            </p>
          </div>
        </div>
      </PageSection>

      <CTASection />
    </>
  );
}
