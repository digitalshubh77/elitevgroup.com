import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ElectricityCalculator from "@/components/calculator/ElectricityCalculator";

export default function CalculatorSection() {
  return (
    <section id="calculator" className="py-8 sm:py-10 md:py-12 relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Solar Calculator"
            title="Electricity Consumption Calculator"
            subtitle="Enter your monthly electricity bill and instantly see your recommended solar system size, subsidy amount, and estimated savings."
          />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="card-3d rounded-2xl">
            <ElectricityCalculator />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
