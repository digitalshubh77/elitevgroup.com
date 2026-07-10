import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ParticleField from "@/components/home/ParticleField";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 hero-gradient-static relative overflow-hidden">
      <div className="absolute inset-0 solar-grid-bg-animated opacity-15" />
      <ParticleField count={15} variant="hero" />

      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-solar-green/10 rounded-full blur-3xl animate-aurora-2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Trusted Solar Partner in Maharashtra"
          subtitle="We combine 20+ years of experience with government-approved products and end-to-end support."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {whyChooseUs.map((item, i) => (
            <div
              key={item}
              className="glass-card-strong rounded-xl p-4 md:p-5 flex items-start gap-3 card-hover shine-hover animate-fade-up"
              style={{
                animationDelay: `${0.1 + i * 0.08}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="w-9 h-9 rounded-xl bg-accent/25 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent-light" />
              </div>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-6">
          *Final interest rate as per bank&apos;s rules and regulations.
        </p>
      </div>
    </section>
  );
}
