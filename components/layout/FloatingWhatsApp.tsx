"use client";

import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { company } from "@/lib/data";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi Elite Ventures, I am interested in rooftop solar installation. Please contact me."
  );

  return (
    <a
      href={`https://wa.me/91${company.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${company.phoneDisplay}`}
      className="group fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[60] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 whatsapp-float-btn"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-whatsapp-pulse" />
      <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 group-hover:scale-110 transition-transform" />
    </a>
  );
}
