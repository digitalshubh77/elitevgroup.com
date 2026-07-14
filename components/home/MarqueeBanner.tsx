import { Sun, Shield, Zap, Award, MapPin } from "lucide-react";

const items = [
  { icon: Award, text: "20+ Years Team Experience" },
  { icon: Award, text: "100+ Installations Completed" },
  { icon: MapPin, text: "Serving Entire Maharashtra" },
  { icon: Sun, text: "Government Approved Solar Panels" },
  { icon: Shield, text: "30 Year Panel Warranty" },
  { icon: Zap, text: "8 Days Installation" },
  { icon: Sun, text: "PM Surya Ghar Subsidy up to ₹78,000" },
  { icon: Shield, text: "Free Site Visit & Quotation" },
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div className="relative bg-primary-dark border-y border-white/10 overflow-hidden py-2.5">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary-dark to-transparent z-10" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-8 text-white/80 text-sm font-medium whitespace-nowrap"
          >
            <item.icon className="w-4 h-4 text-accent shrink-0" />
            <span>{item.text}</span>
            <span className="text-accent/40 mx-2">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
