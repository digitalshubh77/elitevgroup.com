import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { company, navLinks, freeServices } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label={company.legalName}>
              <div className="inline-flex items-center rounded-lg bg-white px-3 py-2">
                <Image
                  src={company.logo}
                  alt={company.legalName}
                  width={662}
                  height={352}
                  className="h-12 w-auto object-contain"
                  sizes="220px"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Government-approved rooftop solar installation across Maharashtra.
              Save electricity bills with subsidy up to ₹78,000.
            </p>
            <div className="flex gap-3">
              <a
                href={company.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/91${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-accent-light">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-accent-light">
              Free Services
            </h3>
            <ul className="space-y-3">
              {freeServices.map((service) => (
                <li
                  key={service}
                  className="text-white/70 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-solar-green shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-accent-light">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </li>
              <li>
                <a
                  href={`tel:+91${company.phone}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-accent-light transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  +91 {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-accent-light transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-center text-white/90 font-medium mb-3">
            © {new Date().getFullYear()} {company.name} | {company.tagline}
          </p>
          <p className="text-center text-white/50 text-xs leading-relaxed max-w-4xl mx-auto">
            Subsidy amounts are under the central PM Surya Ghar: Muft Bijli
            Yojana for eligible residential consumers, subject to government
            scheme rules and approval. Warranty as per manufacturer/company
            policy. Finance subject to bank&apos;s rules and eligibility.
          </p>
        </div>
      </div>
    </footer>
  );
}
