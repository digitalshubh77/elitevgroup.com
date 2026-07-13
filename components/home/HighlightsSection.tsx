import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { highlights } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function HighlightsSection() {
  return (
    <section className="py-4 sm:py-5 relative z-10">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <ScrollReveal key={item.label} delay={i * 60}>
                <div className="stat-card rounded-xl p-3 sm:p-4 text-center h-full">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-extrabold text-primary leading-none">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted mt-1 leading-snug">{item.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
