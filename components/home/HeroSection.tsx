import {
  Zap,
  Shield,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import Button from "@/components/ui/Button";
import ParticleField from "@/components/home/ParticleField";
import HeroVisual from "@/components/home/HeroVisual";
import MarqueeBanner from "@/components/home/MarqueeBanner";
import { company } from "@/lib/data";

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary-dark/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/65 to-primary-dark/45" />
        </div>

        <div className="absolute inset-0 solar-grid-bg-animated opacity-20 z-[1]" />
        <ParticleField count={16} variant="hero" />

        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-accent/15 rounded-full blur-[80px] animate-aurora-1 pointer-events-none z-[1]" />
        <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-solar-green/10 rounded-full blur-[80px] animate-aurora-2 pointer-events-none z-[1]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-14 z-10 perspective-1000">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="text-center lg:text-left preserve-3d">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-strong text-accent-light text-sm font-semibold mb-4 border border-accent/20 animate-fade-up card-3d">
                <Sparkles className="w-4 h-4 animate-pulse-glow" />
                {company.tagline}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight animate-fade-up delay-100 text-3d-glow">
                Turn Your Rooftop Into a{" "}
                <span className="gradient-text block sm:inline mt-1 sm:mt-0">
                  Power Plant
                </span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-white/75 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up delay-200">
                Save your electricity bill with government-approved rooftop solar.
                We install solar systems for homes, shops, and industries across
                Maharashtra.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start animate-fade-up delay-300">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book Free Site Visit
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Button>
                <Button
                  href={`https://wa.me/91${company.whatsapp}`}
                  external
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span className="md:hidden">WhatsApp Us</span>
                  <span className="hidden md:inline">
                    WhatsApp: {company.phoneDisplay}
                  </span>
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up delay-400">
                {[
                  { icon: Shield, text: "Govt. Approved" },
                  { icon: Zap, text: "8 Days Install" },
                  { icon: Phone, text: "Free Consultation" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="flex items-center gap-2 px-3 py-2 rounded-full glass-card text-white/80 text-sm font-medium card-3d"
                  >
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-sm lg:max-w-none mx-auto w-full animate-fade-up delay-500 preserve-3d">
              <HeroVisual />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-10">
            <path d="M0 60C240 20 480 80 720 50C960 20 1200 70 1440 40V80H0V60Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
