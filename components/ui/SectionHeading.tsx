import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  light = false,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8",
        centered && "text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
            light
              ? "bg-white/10 text-accent-light border border-white/20"
              : "bg-accent/10 text-accent border border-accent/20"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-snug",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-2 text-base md:text-lg max-w-3xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/75" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
