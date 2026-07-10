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
        "py-10 md:py-14 relative overflow-hidden",
        variants[variant],
        className
      )}
    >
      {variant === "muted" && (
        <>
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-aurora-2 pointer-events-none" />
        </>
      )}
      {variant === "pattern" && (
        <>
          <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
