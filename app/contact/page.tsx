import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import ContactForm from "@/components/contact/ContactForm";
import CalculatorSection from "@/components/home/CalculatorSection";
import CTASection from "@/components/home/CTASection";
import Button from "@/components/ui/Button";
import { company, freeServices } from "@/lib/data";
import {
  MapPin,
  Phone,
  Mail,
  Gift,
  ExternalLink,
  Clock,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${company.name} for free site visit, quotation, and solar subsidy guidance. Call ${company.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get In Touch — We Are Ready to Help"
        subtitle="Book a free site visit, get a quotation, or ask about government subsidy — we're here for you."
      />

      <PageSection variant="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-xl card-glow relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-solar-green" />
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Contact Details
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted mt-1 leading-relaxed">
                        {company.address}
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      href={`tel:+91${company.phone}`}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          Phone
                        </p>
                        <p className="text-sm text-muted mt-1">
                          +91 {company.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/91${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#25D366]/5 transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-[#25D366] transition-colors">
                          WhatsApp
                        </p>
                        <p className="text-sm text-muted mt-1">
                          {company.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          Email
                        </p>
                        <p className="text-sm text-muted mt-1 break-all">
                          {company.email}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Service Area</p>
                    <p className="text-sm text-muted">{company.serviceArea}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={company.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/91${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                </div>

                <Button
                  href={company.mapLink}
                  external
                  variant="secondary"
                  size="sm"
                  className="w-full mt-6"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Google Maps
                </Button>
              </div>

              <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-primary/5 rounded-3xl p-6 md:p-7 border border-accent/20 shadow-lg">
                <div className="flex items-center gap-2 mb-5">
                  <Gift className="w-5 h-5 text-accent" />
                  <h3 className="font-bold text-foreground text-lg">Free Services</h3>
                </div>
                <ul className="space-y-3">
                  {freeServices.map((service) => (
                    <li
                      key={service}
                      className="text-sm text-muted flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-solar-green shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/91${company.whatsapp}?text=Hi Elite Ventures, I want a free solar consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold shadow-xl shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:scale-[1.02] transition-all duration-300"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Chat on WhatsApp Now
              </a>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection variant="muted" className="pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border h-64 md:h-80 relative">
            <div className="absolute top-4 left-4 z-10 glass-card-strong rounded-xl px-4 py-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-white text-sm font-semibold">Our Office — Barshi</span>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=C/o+K+T+Tractors,+Latur+Road,+Barshi,+Dist.+Solapur,+Maharashtra+413401&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Ventures Office Location"
            />
          </div>
        </div>
      </PageSection>

      <CalculatorSection />
      <CTASection />
    </>
  );
}
