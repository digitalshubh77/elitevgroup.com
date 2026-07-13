import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
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
        <Container>
          <SectionHeading
            badge="Solar Panels"
            title="Solar Panel Brands"
            subtitle="Government-approved Made-in-India panels eligible for PM Surya Ghar subsidy."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {panelBrands.map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-xl p-4 border border-border text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2.5">
                  <Sun className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground">{brand}</h3>
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <SectionHeading
            badge="Inverters"
            title="Inverter Brands"
            subtitle="Reliable inverters for maximum energy conversion and long-term performance."
          />
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {inverterBrands.map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-xl p-4 border border-border text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2.5">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-base">{brand}</h3>
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      <PageSection variant="white">
        <Container>
          <SectionHeading
            badge="Batteries"
            title="Battery Options"
            subtitle="All battery brands available — fully as per customer's choice."
          />
          <div className="max-w-lg mx-auto bg-white rounded-xl p-5 border border-border text-center">
            <div className="w-12 h-12 rounded-xl bg-solar-green/10 flex items-center justify-center mx-auto mb-3">
              <Battery className="w-6 h-6 text-solar-green" />
            </div>
            <p className="text-muted leading-relaxed">
              All battery brands available — fully as per customer&apos;s choice.
              We help you select the best option based on your backup needs and budget.
            </p>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted">
        <Container>
          <div className="max-w-3xl mx-auto hero-gradient-static rounded-xl p-5 md:p-6 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 solar-grid-bg opacity-10" />
            <Shield className="w-10 h-10 text-accent-light mx-auto mb-3 relative" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 relative">
              Up to 30 Year Panel Warranty
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto relative leading-relaxed mb-4">
              Solar panel warranty up to 30 years (as per company policy). Full
              warranty details are given with your quotation.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 relative">
              {["Made in India", "Govt. Approved", "Premium Quality"].map((tag) => (
                <li
                  key={tag}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-light" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </PageSection>

      <CTASection />
    </>
  );
}
