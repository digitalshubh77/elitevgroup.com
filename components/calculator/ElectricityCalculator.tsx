"use client";

import { useState } from "react";
import {
  Calculator,
  Zap,
  IndianRupee,
  TrendingDown,
  Sun,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { calculateSolarSavings, formatCurrency } from "@/lib/calculator";
import { company } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function ElectricityCalculator() {
  const [bill, setBill] = useState<string>("3000");
  const monthlyBill = parseInt(bill) || 0;
  const result =
    monthlyBill > 0 ? calculateSolarSavings(monthlyBill) : null;

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-xl border border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Electricity Bill Calculator
            </h3>
            <p className="text-sm text-muted">
              Find your ideal solar system size
            </p>
          </div>
        </div>

        <label className="block mb-6">
          <span className="text-sm font-semibold text-foreground mb-2 block">
            Monthly Electricity Bill (₹)
          </span>
          <div className="relative">
            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="range"
              min="500"
              max="20000"
              step="100"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full mb-3 accent-accent"
            />
            <input
              type="number"
              min="500"
              max="50000"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-lg font-semibold transition-all"
              placeholder="Enter monthly bill"
            />
          </div>
        </label>

        <div className="grid grid-cols-2 gap-3">
          {[1500, 3000, 5000, 8000].map((amount) => (
            <button
              key={amount}
              onClick={() => setBill(String(amount))}
              className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                bill === String(amount)
                  ? "bg-accent text-primary-dark shadow-md"
                  : "bg-background border border-border hover:border-accent/50"
              }`}
            >
              ₹{amount.toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted leading-relaxed">
          *Estimates based on average Maharashtra electricity rates (~₹7.5/unit)
          and typical solar generation. Actual savings may vary.
        </p>
      </div>

      {result && (
        <div className="space-y-4 animate-fade-up">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <Sun className="w-6 h-6 text-accent-light" />
                <span className="text-accent-light font-semibold">
                  Recommended System
                </span>
              </div>
              <p className="text-5xl md:text-6xl font-bold mb-2">
                {result.recommendedKw} kW
              </p>
              <p className="text-white/70">
                Based on ~{result.estimatedUnits} units/month consumption
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-border card-hover">
              <IndianRupee className="w-5 h-5 text-solar-green mb-2" />
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(result.subsidyAmount)}
              </p>
              <p className="text-sm text-muted">Govt. Subsidy</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border card-hover">
              <TrendingDown className="w-5 h-5 text-accent mb-2" />
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(result.monthlySavings)}
              </p>
              <p className="text-sm text-muted">Monthly Savings</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border card-hover">
              <Zap className="w-5 h-5 text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(result.annualSavings)}
              </p>
              <p className="text-sm text-muted">Annual Savings</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-border card-hover">
              <Calculator className="w-5 h-5 text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">
                ~{result.paybackYears} yrs
              </p>
              <p className="text-sm text-muted">Payback Period</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="flex-1"
            >
              Get Free Quote
            </Button>
            <Button
              href={`https://wa.me/91${company.whatsapp}?text=Hi, my monthly electricity bill is ₹${monthlyBill}. Please share solar details.`}
              external
              variant="whatsapp"
              size="md"
              className="flex-1"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Analysis
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
