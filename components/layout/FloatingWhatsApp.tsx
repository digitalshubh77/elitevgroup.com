"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { company } from "@/lib/data";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi Elite Ventures, I am interested in rooftop solar installation. Please contact me."
  );

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-[60] flex flex-col items-center gap-3">
      <a
        href={`tel:+91${company.phone}`}
        aria-label={`Call ${company.phoneDisplay}`}
        className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-sm shadow-primary/30 hover:bg-primary-dark hover:scale-110 transition-all duration-300"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform" />
      </a>
      <a
        href={`https://wa.me/91${company.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${company.phoneDisplay}`}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-sm shadow-[#25D366]/40 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 whatsapp-float-btn"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-whatsapp-pulse" />
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
