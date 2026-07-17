import Image from "next/image";
import { MapPin, Sun } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const recentImages = [
  {
    src: "/recents/recent-1.jpeg",
    alt: "Rooftop solar panels installed on a residential building",
    label: "Rooftop Array",
  },
  {
    src: "/recents/recent-2.jpeg",
    alt: "Elevated solar mounting structure on site",
    label: "Strong Structure",
  },
  {
    src: "/recents/recent-3.jpeg",
    alt: "Completed solar installation project",
    label: "Completed Project",
  },
  {
    src: "/recents/recent-4.jpeg",
    alt: "Solar panels fitted across rooftop surface",
    label: "Panel Layout",
  },
  {
    src: "/recents/recent-5.jpeg",
    alt: "On-site solar installation work in progress",
    label: "On-site Work",
  },
  {
    src: "/recents/recent-6.jpeg",
    alt: "Finished rooftop solar system ready for use",
    label: "Ready to Power",
  },
];

export default function RecentInstallations() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 md:py-10 bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 10% 0%, rgba(12,74,110,0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 100%, rgba(245,158,11,0.1), transparent 50%)",
        }}
      />

      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            badge="Recent Work"
            title="Our Recent Solar Installations"
            subtitle="Real rooftop projects completed across Maharashtra — clean setup, strong structure, and professional finish."
          />
        </ScrollReveal>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Maharashtra Sites
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-solar-green/20 bg-white px-3 py-1.5 text-xs font-semibold text-solar-green shadow-sm">
            <Sun className="h-3.5 w-3.5" />
            Live Installations
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-4">
          {recentImages.map((image, i) => (
            <ScrollReveal
              key={image.src}
              delay={i * 50}
              className={i === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : undefined}
            >
              <article
                className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_40px_rgba(12,74,110,0.14)] ${
                  i === 0 ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[320px]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-light sm:text-xs">
                        Elite Ventures
                      </p>
                      <h3
                        className={`mt-0.5 font-bold text-white ${
                          i === 0 ? "text-base sm:text-xl" : "text-sm sm:text-base"
                        }`}
                      >
                        {image.label}
                      </h3>
                    </div>
                    <span className="hidden shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:inline-flex">
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-2 h-0.5 w-10 origin-left scale-x-75 rounded-full bg-accent transition-transform duration-500 group-hover:scale-x-100 sm:w-12" />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
