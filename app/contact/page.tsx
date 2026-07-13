import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import CalculatorSection from "@/components/home/CalculatorSection";
import CTASection from "@/components/home/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
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

const quickActions = [
  {
    icon: Phone,
    label: "Call Us",
    value: `+91 ${company.phoneDisplay}`,
    href: `tel:+91${company.phone}`,
    color: "from-primary/10 to-accent/10",
    iconColor: "text-primary",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: company.phoneDisplay,
    href: `https://wa.me/91${company.whatsapp}?text=Hi Elite Ventures, I want a free solar consultation.`,
    color: "from-[#25D366]/10 to-[#25D366]/5",
    iconColor: "text-[#25D366]",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    color: "from-primary/10 to-solar-green/10",
    iconColor: "text-accent",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get In Touch — We Are Ready to Help"
        subtitle="Book a free site visit, get a quotation, or ask about government subsidy — we're here for you."
      />

      <PageSection variant="white">
        <Container>
          <div className="grid sm:grid-cols-3 gap-3 mb-4 md:mb-5">
            {quickActions.map((action, i) => (
              <ScrollReveal key={action.label} delay={i * 60}>
                <a
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className="block bg-white rounded-xl p-4 border border-border h-full group hover:border-primary/25 transition-colors"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}
                  >
                    <action.icon className={`w-5 h-5 ${action.iconColor}`} />
                  </div>
                  <p className="text-sm font-semibold text-muted">{action.label}</p>
                  <p className="text-base font-bold text-foreground mt-0.5 break-all group-hover:text-primary transition-colors">
                    {action.value}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-xl p-4 md:p-5 border border-border h-full">
                  <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Contact Details
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-3 p-2.5 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p className="text-sm text-muted mt-0.5 leading-relaxed">
                          {company.address}
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        href={`tel:+91${company.phone}`}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-background transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            Phone
                          </p>
                          <p className="text-sm text-muted mt-0.5">
                            +91 {company.phoneDisplay}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${company.email}`}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-background transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            Email
                          </p>
                          <p className="text-sm text-muted mt-0.5 break-all">
                            {company.email}
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <div className="mt-3 pt-3 border-t border-border flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Service Area</p>
                      <p className="text-sm text-muted">{company.serviceArea}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <a
                      href={company.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={company.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://wa.me/91${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </div>

                  <Button
                    href={company.mapLink}
                    external
                    variant="secondary"
                    size="md"
                    className="w-full mt-3"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Google Maps
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-[3fr_7fr] gap-3 items-stretch mt-4">
              <div className="space-y-3 flex flex-col min-w-0">
                <div className="bg-accent/5 rounded-xl p-4 md:p-5 border border-accent/15 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-foreground text-base">100% Free Services</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {freeServices.map((service) => (
                      <li
                        key={service}
                        className="text-sm text-muted flex items-center gap-2.5 px-1 py-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-solar-green shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/91${company.whatsapp}?text=Hi Elite Ventures, I want a free solar consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat on WhatsApp Now
                </a>
              </div>

              <div className="rounded-xl overflow-hidden border border-border min-h-[220px] md:min-h-[280px] h-full relative">
                <div className="absolute top-3 left-3 z-10 bg-white rounded-md px-2.5 py-1 flex items-center gap-1.5 shadow-sm border border-border">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span className="text-foreground text-xs font-semibold">Our Office — Barshi</span>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=C/o+K+T+Tractors,+Latur+Road,+Barshi,+Dist.+Solapur,+Maharashtra+413401&output=embed"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elite Ventures Office Location"
                />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </PageSection>

      <CalculatorSection />
      <CTASection />
    </>
  );
}
