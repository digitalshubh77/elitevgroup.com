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
  muted: "bg-background",
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
        "py-4 sm:py-5 md:py-6 relative overflow-hidden",
        variants[variant],
        className
      )}
    >
      <div className="relative">{children}</div>
    </section>
  );
}
