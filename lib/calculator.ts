const AVG_UNIT_RATE = 7.5;
const UNITS_PER_KW_MONTHLY = 120;

export function getSubsidyAmount(kw: number): number {
  if (kw <= 1) return 30000;
  if (kw <= 2) return 60000;
  return 78000;
}

export function recommendSystemSize(monthlyBill: number): number {
  const estimatedUnits = monthlyBill / AVG_UNIT_RATE;
  const rawKw = estimatedUnits / UNITS_PER_KW_MONTHLY;
  return Math.min(Math.max(Math.ceil(rawKw), 1), 10);
}

export interface CalculatorResult {
  monthlyBill: number;
  estimatedUnits: number;
  recommendedKw: number;
  subsidyAmount: number;
  monthlySavings: number;
  annualSavings: number;
  paybackYears: number;
}

export function calculateSolarSavings(monthlyBill: number): CalculatorResult {
  const estimatedUnits = Math.round(monthlyBill / AVG_UNIT_RATE);
  const recommendedKw = recommendSystemSize(monthlyBill);
  const subsidyAmount = getSubsidyAmount(recommendedKw);
  const monthlyGeneration = recommendedKw * UNITS_PER_KW_MONTHLY;
  const monthlySavings = Math.min(
    Math.round(monthlyGeneration * AVG_UNIT_RATE),
    monthlyBill
  );
  const annualSavings = monthlySavings * 12;
  const estimatedCost = recommendedKw * 55000 - subsidyAmount;
  const paybackYears =
    estimatedCost > 0 ? Math.round((estimatedCost / annualSavings) * 10) / 10 : 0;

  return {
    monthlyBill,
    estimatedUnits,
    recommendedKw,
    subsidyAmount,
    monthlySavings,
    annualSavings,
    paybackYears,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
