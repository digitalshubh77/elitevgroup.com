import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { panelBrands, inverterBrands } from "@/lib/data";
import { Shield, Battery, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Panels & Inverter Brands",
  description:
    "Government-approved Made-in-India solar panels — Waaree, Tata Power Solar, Adani, ReNew, Vikram Solar. Polycab inverters with up to 30-year panel warranty from Elite Ventures.",
  keywords: [
    "Waaree solar panels",
    "Tata Power Solar",
    "Adani Solar",
    "ReNew solar",
    "Vikram Solar",
    "Polycab inverter",
    "government approved solar panels",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Solar Products & Brands | Elite Ventures",
    description:
      "Trusted Indian solar panel and inverter brands with up to 30-year warranty — approved for PM Surya Ghar subsidy.",
    url: "/products",
  },
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
                key={brand.name}
                className="bg-white rounded-xl p-3 border border-border text-center flex flex-col items-center justify-center gap-2 min-h-[120px]"
              >
                <div className="relative w-full h-12">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-bold text-foreground text-sm">{brand.name}</h3>
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
                key={brand.name}
                className="bg-white rounded-xl p-4 border border-border text-center flex flex-col items-center justify-center gap-2 min-h-[110px]"
              >
                <div className="relative w-full h-12">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-bold text-foreground text-base">{brand.name}</h3>
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
