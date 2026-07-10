import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import SubsidySection from "@/components/home/SubsidySection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessPreview from "@/components/home/ProcessPreview";
import CalculatorSection from "@/components/home/CalculatorSection";
import FAQCTASection from "@/components/home/FAQCTASection";

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
      <FAQCTASection />
    </>
  );
}
