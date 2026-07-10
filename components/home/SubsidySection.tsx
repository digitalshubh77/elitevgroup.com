import { CheckCircle, IndianRupee } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { subsidyTiers } from "@/lib/data";

export default function SubsidySection() {
  return (
    <section className="py-12 md:py-16 section-pattern relative overflow-hidden">
      {/* Animated bg blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-aurora-2 pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PM Surya Ghar Yojana"
          title="Get Government Subsidy up to ₹78,000"
          subtitle="Under PM Surya Ghar: Muft Bijli Yojana, the government gives direct subsidy for home rooftop solar. The subsidy comes directly to your bank account after installation and inspection."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-6">
          {subsidyTiers.map((tier, i) => (
            <div
              key={tier.size}
                className={`relative rounded-2xl p-6 md:p-7 text-center card-hover shine-hover overflow-hidden ${
                i === 2
                  ? "subsidy-card-featured text-white shadow-2xl shadow-primary/40 md:scale-105 animate-border-glow border-2 border-accent/40"
                  : "bg-white border border-border shadow-xl"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {i === 2 && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-primary-dark text-xs font-bold rounded-full z-10">
                    MAX SUBSIDY
                  </div>
                </>
              )}

              <div
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                  i === 2 ? "bg-white/15" : "bg-accent/10"
                }`}
              >
                <IndianRupee
                  className={`w-8 h-8 ${i === 2 ? "text-accent-light" : "text-accent"}`}
                />
              </div>
              <p
                className={`text-lg font-semibold mb-2 ${i === 2 ? "text-white/80" : "text-muted"}`}
              >
                {tier.size}
              </p>
              <p
                className={`text-3xl md:text-5xl font-extrabold ${i === 2 ? "text-accent-light" : "text-primary"}`}
              >
                {tier.amount}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border shadow-xl max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-solar-green via-accent to-primary" />
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-solar-green shrink-0 mt-0.5" />
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
      </div>
    </section>
  );
}
