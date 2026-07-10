import {
  Sun,
  Zap,
  Shield,
  TrendingDown,
  Phone,
  ArrowRight,
  Sparkles,
  ChevronDown,
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
      <section className="relative min-h-[88vh] hero-gradient overflow-hidden flex items-center">
        {/* Animated background layers */}
        <div className="absolute inset-0 solar-grid-bg-animated opacity-30" />
        <ParticleField count={25} variant="hero" />

        {/* Aurora orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-aurora-1" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-solar-green/15 rounded-full blur-[120px] animate-aurora-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[80px] animate-aurora-3" />

        {/* Light beams from top */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-accent/30 via-accent/5 to-transparent animate-beam" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white/10 via-transparent to-transparent animate-beam delay-300" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-accent/20 via-transparent to-transparent animate-beam delay-500" />

        {/* Floating info cards - desktop */}
        <div className="absolute top-36 right-[6%] hidden xl:block animate-float">
          <div className="glass-card-strong rounded-2xl p-4 flex items-center gap-3 shine-hover">
            <div className="w-11 h-11 rounded-xl bg-accent/25 flex items-center justify-center">
              <Sun className="w-5 h-5 text-accent-light" />
            </div>
            <div>
              <p className="text-white font-bold">100+ Projects</p>
              <p className="text-white/50 text-xs">Across Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-48 left-[5%] hidden xl:block animate-float-reverse">
          <div className="glass-card-strong rounded-2xl p-4 flex items-center gap-3 shine-hover">
            <div className="w-11 h-11 rounded-xl bg-solar-green/25 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-solar-green" />
            </div>
            <div>
              <p className="text-white font-bold">Up to ₹78,000</p>
              <p className="text-white/50 text-xs">Govt. Subsidy</p>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-strong text-accent-light text-sm font-semibold mb-6 animate-fade-up border border-accent/20">
                <Sparkles className="w-4 h-4 animate-pulse-glow" />
                {company.tagline}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight animate-fade-up delay-100">
                Turn Your Rooftop Into a{" "}
                <span className="gradient-text block sm:inline mt-1 sm:mt-0">
                  Power Plant
                </span>
              </h1>

              <p className="mt-4 text-base md:text-lg text-white/75 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up delay-200">
                Save your electricity bill with government-approved rooftop solar.
                We install solar systems for homes, shops, and industries across
                Maharashtra.
              </p>

              <div className="mt-6 flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start animate-fade-up delay-300">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto min-h-[56px] px-6 md:px-8"
                >
                  Book Free Site Visit
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Button>
                <Button
                  href={`https://wa.me/91${company.whatsapp}`}
                  external
                  variant="whatsapp"
                  size="lg"
                  className="w-full md:w-auto min-h-[56px] px-6 md:px-8"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span className="md:hidden">WhatsApp Us</span>
                  <span className="hidden md:inline">
                    WhatsApp: {company.phoneDisplay}
                  </span>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up delay-400">
                {[
                  { icon: Shield, text: "Govt. Approved" },
                  { icon: Zap, text: "8 Days Install" },
                  { icon: Phone, text: "Free Consultation" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/80 text-sm font-medium"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative animate-fade-up delay-500">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float z-10">
          <span className="text-white/40 text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-accent/60" />
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-14">
            <path
              d="M0 60C240 20 480 80 720 50C960 20 1200 70 1440 40V100H0V60Z"
              fill="#f8fafc"
              className="animate-wave"
            />
            <path
              d="M0 70C360 30 720 90 1080 55C1260 40 1380 50 1440 45V100H0V70Z"
              fill="#f8fafc"
              opacity="0.5"
            />
          </svg>
        </div>
      </section>

      <MarqueeBanner />
    </>
  );
}
