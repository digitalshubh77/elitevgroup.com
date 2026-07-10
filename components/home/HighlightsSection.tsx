import { highlights } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function HighlightsSection() {
  return (
    <section className="py-10 md:py-12 -mt-2 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.label}
                className="stat-card rounded-2xl p-4 md:p-5 shadow-xl card-hover card-glow text-center animate-count-pop"
                style={{
                  animationDelay: `${0.1 + i * 0.12}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-solar-green/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {item.value}
                </p>
                <p className="text-sm text-muted mt-2 leading-snug font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
