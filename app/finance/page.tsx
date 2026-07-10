import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import CalculatorSection from "@/components/home/CalculatorSection";
import Button from "@/components/ui/Button";
import { company } from "@/lib/data";
import {
  CreditCard,
  Percent,
  FileCheck,
  TrendingDown,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Finance & EMI",
  description:
    "Go solar without a big payment — bank finance available at interest rates starting from 5.75%*. Free electricity bill analysis on WhatsApp.",
};

const financeFeatures = [
  {
    icon: Percent,
    title: "Low Interest Rate",
    description: "Interest rate starting from 5.75%* per year",
    color: "from-accent/10 to-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: CreditCard,
    title: "Simple Monthly EMI",
    description: "Easy monthly payments — no big upfront cost",
    color: "from-primary/10 to-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: FileCheck,
    title: "Loan Assistance",
    description: "We help with the complete loan process",
    color: "from-solar-green/10 to-solar-green/20",
    iconColor: "text-solar-green",
  },
  {
    icon: TrendingDown,
    title: "Start Saving Immediately",
    description: "Your EMI is often less than your electricity bill savings",
    color: "from-accent/10 to-primary/10",
    iconColor: "text-primary",
  },
];

export default function FinancePage() {
  return (
    <>
      <PageHero
        badge="Finance & EMI"
        title="Go Solar Without a Big Payment — Easy EMI Available"
        subtitle="Don't have the full amount right now? No problem. We help you get bank finance for your solar system."
      />

      <PageSection variant="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-5">
            {financeFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 md:p-7 border border-border shadow-xl card-hover card-glow shine-hover text-center animate-count-pop"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm max-w-2xl mx-auto bg-background rounded-xl px-6 py-4 border border-border">
            *Final interest rate, eligibility, and terms as per the bank&apos;s rules and regulations.
          </p>
        </div>
      </PageSection>

      <PageSection variant="muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-border shadow-2xl text-center relative overflow-hidden shine-hover">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#25D366] via-accent to-primary" />
            <SectionHeading
              badge="Free Analysis"
              title="Free Electricity Bill Analysis"
              subtitle={`Send your latest light bill on WhatsApp (${company.phoneDisplay}). We will tell you the right system size, your savings, and your subsidy — completely free.`}
            />
            <Button
              href={`https://wa.me/91${company.whatsapp}?text=Hi, I want a free electricity bill analysis for solar installation.`}
              external
              variant="whatsapp"
              size="lg"
              className="btn-shine"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Send Bill on WhatsApp
            </Button>
          </div>
        </div>
      </PageSection>

      <CalculatorSection />
      <CTASection />
    </>
  );
}
