import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import Button from "@/components/ui/Button";
import {
  company,
  subsidyTiers,
  subsidyImportantPoints,
  subsidyHelpSteps,
} from "@/lib/data";
import { CheckCircle, IndianRupee, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "PM Surya Ghar Solar Subsidy up to ₹78,000",
  description:
    "Get government subsidy up to ₹78,000 under PM Surya Ghar: Muft Bijli Yojana for home rooftop solar in Maharashtra. Elite Ventures handles the full application free of cost.",
  keywords: [
    "PM Surya Ghar subsidy",
    "solar subsidy Maharashtra",
    "rooftop solar subsidy 78000",
    "Muft Bijli Yojana",
    "home solar subsidy",
  ],
  alternates: { canonical: "/subsidy" },
  openGraph: {
    title: "PM Surya Ghar Solar Subsidy up to ₹78,000",
    description:
      "Government subsidy for home rooftop solar — ₹30,000 / ₹60,000 / ₹78,000. Full free application support by Elite Ventures.",
    url: "/subsidy",
  },
};

export default function SubsidyPage() {
  return (
    <>
      <PageHero
        badge="PM Surya Ghar Yojana"
        title="Government Subsidy for Home Solar — Up to ₹78,000"
        subtitle="The Government of India gives a direct subsidy for rooftop solar under PM Surya Ghar: Muft Bijli Yojana. This makes solar very affordable for every home."
      />

      <PageSection variant="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Subsidy Amounts"
            title="How Much Subsidy Will You Get?"
          />

          <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-5">
            {subsidyTiers.map((tier, i) => (
              <div
                key={tier.size}
                className={`relative rounded-xl p-4 md:p-5 text-center overflow-hidden ${
                  i === 2
                    ? "subsidy-card-featured text-white border border-accent/30"
                    : "bg-white border border-border"
                }`}
              >
                {i === 2 && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-primary-dark text-xs font-bold rounded-full z-10">
                    MAX
                  </div>
                )}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                    i === 2 ? "bg-white/15" : "bg-accent/10"
                  }`}
                >
                  <IndianRupee
                    className={`w-8 h-8 ${i === 2 ? "text-accent-light" : "text-accent"}`}
                  />
                </div>
                <p className={`text-base font-semibold mb-2 ${i === 2 ? "text-white/80" : "text-muted"}`}>
                  {tier.size}
                </p>
                <p className={`text-2xl md:text-4xl font-extrabold ${i === 2 ? "text-accent-light" : "text-primary"}`}>
                  {tier.amount}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-border">
            <table className="w-full bg-white overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <th className="px-6 py-5 text-left font-semibold text-base">System Size</th>
                  <th className="px-6 py-5 text-left font-semibold text-base">Subsidy Amount</th>
                </tr>
              </thead>
              <tbody>
                {subsidyTiers.map((tier, i) => (
                  <tr
                    key={tier.size}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-background"} hover:bg-accent/5 transition-colors`}
                  >
                    <td className="px-6 py-5 font-semibold text-foreground">{tier.size}</td>
                    <td className="px-6 py-5 font-bold text-primary text-base">
                      {tier.amount}
                      {i === 2 && (
                        <span className="ml-2 text-xs font-normal text-muted">(maximum limit)</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageSection>

      <PageSection variant="muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-3 md:gap-5">
            <div>
              <SectionHeading
                badge="Important"
                title="Important Points"
                centered={false}
                className="mb-4"
              />
              <ul className="space-y-2">
                {subsidyImportantPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border border-border"
                  >
                    <CheckCircle className="w-5 h-5 text-solar-green shrink-0 mt-0.5" />
                    <span className="text-muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                badge="Our Support"
                title="How We Help You Get the Subsidy"
                centered={false}
                className="mb-4"
              />
              <ol className="space-y-2">
                {subsidyHelpSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border border-border"
                  >
                    <span className="w-7 h-7 rounded-md bg-accent text-primary-dark font-bold flex items-center justify-center shrink-0 text-sm">
                      {i + 1}
                    </span>
                    <span className="text-muted leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection variant="white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl p-4 md:p-5 border border-accent/20 shadow-sm">
            <IndianRupee className="w-14 h-14 text-accent mx-auto mb-5" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Want to know your exact subsidy?
            </h3>
            <p className="text-muted mb-5 text-base">
              Call or WhatsApp us — we&apos;ll calculate your subsidy based on your roof
              size and electricity usage, completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={`tel:+91${company.phone}`} external variant="primary" size="lg">
                <Phone className="w-5 h-5" />
                Call: {company.phoneDisplay}
              </Button>
              <Button
                href={`https://wa.me/91${company.whatsapp}?text=Hi, I want to know my solar subsidy amount.`}
                external
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      <CTASection />
    </>
  );
}
