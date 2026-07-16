import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import SubsidySection from "@/components/home/SubsidySection";
import ServicesPreview from "@/components/home/ServicesPreview";
import InstallationShowcase from "@/components/home/InstallationShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessPreview from "@/components/home/ProcessPreview";
import CalculatorSection from "@/components/home/CalculatorSection";
import FAQCTASection from "@/components/home/FAQCTASection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Rooftop Solar Installation in Maharashtra`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | Rooftop Solar Installation in Maharashtra`,
    description: siteConfig.description,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <SubsidySection />
      <ServicesPreview />
      <InstallationShowcase />
      <CalculatorSection />
      <WhyChooseUs />
      <ProcessPreview />
      <FAQCTASection />
    </>
  );
}
