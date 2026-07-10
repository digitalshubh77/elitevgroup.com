import Container from "@/components/layout/Container";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { highlights } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function HighlightsSection() {
  return (
    <section className="py-5 sm:py-6 relative z-10 perspective-1000">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <ScrollReveal key={item.label} delay={i * 80}>
                <TiltCard innerClassName="h-full">
                  <div className="stat-card card-3d rounded-xl p-3 sm:p-4 shadow-md text-center h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-inner">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <p className="relative text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">
                      {item.value}
                    </p>
                    <p className="relative text-sm text-muted mt-1 leading-snug">
                      {item.label}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
