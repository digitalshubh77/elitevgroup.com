import ParticleField from "@/components/home/ParticleField";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative hero-gradient pt-[4.5rem] pb-4 sm:pb-5 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 solar-grid-bg opacity-20" />
      <ParticleField count={8} variant="hero" />

      <div className="absolute top-16 -left-20 w-64 h-64 bg-accent/12 rounded-full blur-[90px]" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-solar-green/10 rounded-full blur-[90px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {badge && (
          <span className="inline-block mb-2 px-3.5 py-1 rounded-full text-xs font-semibold glass-card-strong text-accent-light border border-accent/20 uppercase tracking-wide">
            {badge}
          </span>
        )}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-white/75 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-5 md:h-6">
          <path d="M0 60C240 20 480 80 720 50C960 20 1200 70 1440 40V80H0V60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
