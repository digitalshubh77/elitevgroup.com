import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageSection from "@/components/layout/PageSection";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import CalculatorSection from "@/components/home/CalculatorSection";
import CTASection from "@/components/home/CTASection";
import TiltCard from "@/components/ui/TiltCard";
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
  MessageCircle,
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

      <PageSection variant="white" className="perspective-1000">
        <Container>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 md:mb-10">
            {quickActions.map((action, i) => (
              <ScrollReveal key={action.label} delay={i * 80}>
                <TiltCard innerClassName="h-full">
                  <a
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    className="block bg-white rounded-2xl p-5 md:p-6 border border-border shadow-lg card-3d shine-hover h-full group"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <action.icon className={`w-7 h-7 ${action.iconColor}`} />
                    </div>
                    <p className="text-sm font-semibold text-muted">{action.label}</p>
                    <p className="text-base font-bold text-foreground mt-1 break-all group-hover:text-primary transition-colors">
                      {action.value}
                    </p>
                  </a>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-5">
              <ScrollReveal direction="left">
                <TiltCard innerClassName="h-full">
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-xl card-3d relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-solar-green" />
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      Contact Details
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-colors card-3d">
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
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-colors group card-3d"
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
                          href={`mailto:${company.email}`}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-colors group card-3d"
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
                      <Clock className="w-5 h-5 text-accent shrink-0" />
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
                        className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 card-3d"
                        aria-label="Facebook"
                      >
                        <FacebookIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 card-3d"
                        aria-label="Instagram"
                      >
                        <InstagramIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://wa.me/91${company.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 card-3d"
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
                      className="w-full mt-6"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on Google Maps
                    </Button>
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100}>
                <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-primary/5 rounded-2xl p-6 md:p-7 border border-accent/20 shadow-lg card-3d">
                  <div className="flex items-center gap-2 mb-5">
                    <Gift className="w-5 h-5 text-accent" />
                    <h3 className="font-bold text-foreground text-lg">100% Free Services</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {freeServices.map((service) => (
                      <li
                        key={service}
                        className="text-sm text-muted flex items-center gap-3 bg-white/70 rounded-xl px-4 py-3 border border-white/50"
                      >
                        <span className="w-2 h-2 rounded-full bg-solar-green shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={200}>
                <a
                  href={`https://wa.me/91${company.whatsapp}?text=Hi Elite Ventures, I want a free solar consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold shadow-xl shadow-[#25D366]/30 hover:bg-[#20bd5a] card-3d transition-all duration-300"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Chat on WhatsApp Now
                </a>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection variant="muted" className="perspective-1000 pb-10 md:pb-14">
        <Container>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-5">
              <MessageCircle className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-foreground">Find Us on Map</h3>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border h-64 md:h-96 relative card-3d">
              <div className="absolute top-4 left-4 z-10 glass-card-strong rounded-xl px-4 py-2.5 flex items-center gap-2">
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
          </ScrollReveal>
        </Container>
      </PageSection>

      <CalculatorSection />
      <CTASection />
    </>
  );
}
