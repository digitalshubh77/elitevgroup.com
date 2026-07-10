import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { panelBrands, inverterBrands } from "@/lib/data";
import { Shield, Sun, Battery, Zap, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Brands",
  description:
    "Trusted Indian solar panel brands — Waaree, Tata, Adani, ReNew, Vikram. Polycab inverters. Up to 30-year panel warranty.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="Products"
        title="Trusted Indian Brands — Your Choice"
        subtitle="We use only government-approved, high-quality solar panels and inverters from India's leading manufacturers."
      />

      <PageSection variant="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Solar Panels"
            title="Solar Panel Brands"
            subtitle="Government-approved Made-in-India panels eligible for PM Surya Ghar subsidy."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {panelBrands.map((brand, i) => (
              <div
                key={brand}
                className="bg-white rounded-2xl p-6 md:p-7 border border-border shadow-xl card-hover card-glow shine-hover text-center group animate-count-pop"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sun className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {brand}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection variant="muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Inverters"
            title="Inverter Brands"
            subtitle="Reliable inverters for maximum energy conversion and long-term performance."
          />
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {inverterBrands.map((brand, i) => (
              <div
                key={brand}
                className="bg-white rounded-2xl p-8 border border-border shadow-xl card-hover shine-hover text-center animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection variant="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Batteries"
            title="Battery Options"
            subtitle="All battery brands available — fully as per customer's choice."
          />
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 md:p-10 border border-border shadow-xl text-center card-hover shine-hover">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-solar-green/10 to-solar-green/20 flex items-center justify-center mx-auto mb-5">
              <Battery className="w-10 h-10 text-solar-green" />
            </div>
            <p className="text-muted leading-relaxed text-lg">
              All battery brands available — fully as per customer&apos;s choice.
              We help you select the best option based on your backup needs and budget.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection variant="pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient-static rounded-3xl p-8 md:p-14 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 solar-grid-bg-animated opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-aurora-1" />
            <Shield className="w-14 h-14 text-accent-light mx-auto mb-5 relative" />
            <h3 className="text-2xl md:text-4xl font-bold mb-4 relative">
              Up to 30 Year Panel Warranty
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto relative leading-relaxed text-lg mb-6">
              Solar panel warranty up to 30 years (as per company policy). Full
              warranty details are given with your quotation.
            </p>
            <ul className="flex flex-wrap justify-center gap-4 relative">
              {["Made in India", "Govt. Approved", "Premium Quality"].map((tag) => (
                <li
                  key={tag}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-light" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      <CTASection />
    </>
  );
}
