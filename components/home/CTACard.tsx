import { Phone, Gift } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import Button from "@/components/ui/Button";
import { company, freeServices } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CTACardProps {
  className?: string;
}

export default function CTACard({ className }: CTACardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden h-full border border-primary/20",
        className
      )}
    >
      <div className="absolute inset-0 hero-gradient-static" />
      <div className="absolute inset-0 solar-grid-bg opacity-10" />

      <div className="relative p-5 md:p-6 text-center flex flex-col justify-center h-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card-strong text-accent-light text-sm font-semibold mb-3 border border-accent/20 mx-auto">
          <Gift className="w-4 h-4" />
          100% Free Services
        </div>

        <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
          Start Saving From{" "}
          <span className="gradient-text">This Month&apos;s Bill!</span>
        </h2>
        <p className="text-white/70 text-base mb-3">We offer — completely FREE:</p>

        <ul className="space-y-1.5 mb-5 text-left max-w-sm mx-auto w-full">
          {freeServices.map((service) => (
            <li
              key={service}
              className="flex items-center gap-2 text-white/90 text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {service}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 justify-center mt-auto">
          <Button
            href={`tel:+91${company.phone}`}
            external
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone className="w-5 h-5 shrink-0" />
            Call: {company.phoneDisplay}
          </Button>
          <Button
            href={`https://wa.me/91${company.whatsapp}`}
            external
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span className="sm:hidden">WhatsApp Us</span>
            <span className="hidden sm:inline">WhatsApp: {company.phoneDisplay}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
