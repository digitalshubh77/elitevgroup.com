import { Phone, Gift } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import Button from "@/components/ui/Button";
import ParticleField from "@/components/home/ParticleField";
import { company, freeServices } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 hero-gradient animate-gradient-shift" />
          <div className="absolute inset-0 solar-grid-bg-animated opacity-15" />
          <ParticleField count={12} variant="hero" />

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/25 rounded-full blur-3xl animate-aurora-1" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-solar-green/15 rounded-full blur-3xl animate-aurora-2" />

          <div className="relative p-6 md:p-10 lg:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card-strong text-accent-light text-sm font-semibold mb-6 border border-accent/20">
              <Gift className="w-4 h-4" />
              100% Free Services
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
              Start Saving From{" "}
              <span className="gradient-text">This Month&apos;s Bill!</span>
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto mb-5">
              We offer — completely FREE:
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {freeServices.map((service, i) => (
                <span
                  key={service}
                  className="px-5 py-2.5 rounded-full glass-card text-white text-sm font-medium border border-white/10 shine-hover animate-fade-up"
                  style={{
                    animationDelay: `${0.2 + i * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  ✦ {service}
                </span>
              ))}
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 justify-center">
              <Button
                href={`tel:+91${company.phone}`}
                external
                variant="primary"
                size="lg"
                className="w-full md:w-auto min-h-[56px]"
              >
                <Phone className="w-5 h-5 shrink-0" />
                Call: {company.phoneDisplay}
              </Button>
              <Button
                href={`https://wa.me/91${company.whatsapp}`}
                external
                variant="whatsapp"
                size="lg"
                className="w-full md:w-auto min-h-[56px]"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span className="md:hidden">WhatsApp Us</span>
                <span className="hidden md:inline">
                  WhatsApp: {company.phoneDisplay}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
