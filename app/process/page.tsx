import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
import CTASection from "@/components/home/CTASection";
import { processSteps } from "@/lib/data";
import { Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Installation Process in About 8 Days",
  description:
    "Elite Ventures 5-step solar installation process in Maharashtra — free site visit, quotation, subsidy paperwork, installation and net metering in about 8 days.",
  keywords: [
    "solar installation process",
    "8 days solar install",
    "net metering process Maharashtra",
    "rooftop solar steps",
  ],
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Solar Installation Process | Elite Ventures",
    description:
      "From first call to solar power in about 8 days — site visit, subsidy docs, install and net metering.",
    url: "/process",
  },
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
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm border border-accent/20">
                <Zap className="w-4 h-4" />
                Total Timeline: ~8 Days
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />

              <div className="space-y-3">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent text-primary-dark font-bold text-base flex items-center justify-center shrink-0 relative z-10">
                      {step.step}
                    </div>
                    <div className="flex-1 pb-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/5 text-primary text-xs font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <div className="max-w-3xl mx-auto hero-gradient-static rounded-xl p-5 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 solar-grid-bg opacity-10" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 relative">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-white/75 relative max-w-xl mx-auto">
              Book a free site visit today and our team will guide you through every step.
            </p>
          </div>
        </Container>
      </PageSection>

      <CTASection />
    </>
  );
}
