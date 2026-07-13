import Container from "@/components/layout/Container";
import { CheckCircle, IndianRupee } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { subsidyTiers } from "@/lib/data";

export default function SubsidySection() {
  return (
    <section className="py-4 sm:py-5 md:py-6 bg-background relative overflow-hidden">
      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            badge="PM Surya Ghar Yojana"
            title="Get Government Subsidy up to ₹78,000"
            subtitle="Under PM Surya Ghar: Muft Bijli Yojana, the government gives direct subsidy for home rooftop solar. The subsidy comes directly to your bank account after installation and inspection."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-3 mb-5">
          {subsidyTiers.map((tier, i) => (
            <ScrollReveal key={tier.size} delay={i * 80}>
              <div
                className={`relative rounded-xl p-4 md:p-5 text-center h-full border ${
                  i === 2
                    ? "subsidy-card-featured text-white border-accent/30"
                    : "bg-white border-border"
                }`}
              >
                {i === 2 && (
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-accent text-primary-dark text-xs font-bold rounded-full">
                    MAX
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    i === 2 ? "bg-white/15" : "bg-accent/10"
                  }`}
                >
                  <IndianRupee
                    className={`w-6 h-6 ${i === 2 ? "text-accent-light" : "text-accent"}`}
                  />
                </div>
                <p className={`text-base font-semibold mb-1 ${i === 2 ? "text-white/80" : "text-muted"}`}>
                  {tier.size}
                </p>
                <p
                  className={`text-2xl md:text-3xl font-extrabold ${
                    i === 2 ? "text-accent-light" : "text-primary"
                  }`}
                >
                  {tier.amount}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="bg-white rounded-xl p-4 border border-border max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-solar-green shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  We help you with the full subsidy process — free of cost.
                </p>
                <p className="text-sm text-muted">
                  Note: This subsidy is only for residential (home) solar systems,
                  as per government rules.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
