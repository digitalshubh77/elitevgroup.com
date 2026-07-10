import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import SubsidySection from "@/components/home/SubsidySection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessPreview from "@/components/home/ProcessPreview";
import CalculatorSection from "@/components/home/CalculatorSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <SubsidySection />
      <ServicesPreview />
      <CalculatorSection />
      <WhyChooseUs />
      <ProcessPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
