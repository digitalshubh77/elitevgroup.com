"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTACard from "@/components/home/CTACard";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FAQCTASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-4 sm:py-5 md:py-6 bg-background relative overflow-hidden">
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 items-start">
          <div>
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Got questions about solar? Here are answers to the most common ones."
              centered={false}
              className="text-left"
            />

            <div className="bg-white rounded-xl border border-border divide-y divide-border overflow-hidden">
              {faqs.map((faq, i) => (
                <div key={faq.question}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-background/70 transition-colors gap-3"
                  >
                    <span className="font-semibold text-foreground text-sm md:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-accent shrink-0 transition-transform duration-300",
                        openIndex === i && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="px-4 pb-4 text-muted leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <CTACard />
          </div>
        </div>
      </Container>
    </section>
  );
}
