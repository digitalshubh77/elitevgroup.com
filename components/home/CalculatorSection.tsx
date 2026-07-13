import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ElectricityCalculator from "@/components/calculator/ElectricityCalculator";

export default function CalculatorSection() {
  return (
    <section id="calculator" className="py-4 sm:py-5 md:py-6 bg-background relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Solar Calculator"
            title="Electricity Consumption Calculator"
            subtitle="Enter your monthly electricity bill and instantly see your recommended solar system size, subsidy amount, and estimated savings."
          />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ElectricityCalculator />
        </ScrollReveal>
      </div>
    </section>
  );
}
