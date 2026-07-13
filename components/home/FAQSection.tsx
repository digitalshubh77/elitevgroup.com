"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-4 sm:py-5 md:py-6 section-pattern relative overflow-hidden">
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-aurora-1 pointer-events-none" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-aurora-2 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Got questions about solar? Here are answers to the most common ones."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={cn(
                "bg-white rounded-2xl border overflow-hidden shadow-sm transition-all duration-300",
                openIndex === i
                  ? "border-accent/40"
                  : "border-border hover:border-accent/20"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-background/50 transition-colors gap-4"
              >
                <span className="flex items-center gap-3 font-semibold text-foreground">
                  <HelpCircle
                    className={cn(
                      "w-5 h-5 shrink-0 transition-colors",
                      openIndex === i ? "text-accent" : "text-muted"
                    )}
                  />
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
                  "overflow-hidden transition-all duration-400 ease-in-out",
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted leading-relaxed border-t border-border/50 pt-4 mx-5 md:ml-14">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
