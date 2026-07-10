import { cn } from "@/lib/utils";

type PageSectionVariant = "white" | "muted" | "pattern" | "dark";

interface PageSectionProps {
  children: React.ReactNode;
  variant?: PageSectionVariant;
  className?: string;
  id?: string;
}

const variants: Record<PageSectionVariant, string> = {
  white: "bg-white",
  muted: "bg-background section-pattern",
  pattern: "bg-background section-pattern",
  dark: "hero-gradient-static text-white",
};

export default function PageSection({
  children,
  variant = "white",
  className,
  id,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-8 sm:py-10 md:py-12 relative overflow-hidden",
        variants[variant],
        className
      )}
    >
      {variant === "muted" && (
        <>
          <div className="absolute top-6 left-6 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-aurora-2 pointer-events-none" />
        </>
      )}
      {variant === "pattern" && (
        <>
          <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
