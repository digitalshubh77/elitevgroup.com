"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { navLinks, company } from "@/lib/data";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NavItemProps {
  href: string;
  label: string;
  enabled: boolean;
  pathname: string;
  scrolled: boolean;
  mobile?: boolean;
}

function NavItem({
  href,
  label,
  enabled,
  pathname,
  scrolled,
  mobile,
}: NavItemProps) {
  const isActive = pathname === href;

  const activeClasses = scrolled
    ? "text-accent nav-link-active"
    : "text-accent-light nav-link-active";

  const enabledClasses = scrolled
    ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
    : "text-white/85 hover:text-white hover:bg-white/10";

  const disabledClasses = scrolled
    ? "text-foreground/35 cursor-not-allowed"
    : "text-white/35 cursor-not-allowed";

  const mobileActiveClasses = scrolled
    ? "bg-accent/10 text-accent"
    : "bg-white/10 text-accent-light";

  const mobileEnabledClasses = scrolled
    ? "text-foreground hover:bg-primary/5"
    : "text-white/90 hover:bg-white/10";

  const mobileDisabledClasses = scrolled
    ? "text-foreground/35 cursor-not-allowed"
    : "text-white/35 cursor-not-allowed";

  if (!enabled) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="Coming soon"
        className={cn(
          mobile
            ? "block px-4 py-4 rounded-xl text-lg font-semibold select-none"
            : "px-2 xl:px-3 py-2 text-base xl:text-lg font-semibold rounded-lg select-none whitespace-nowrap",
          mobile ? mobileDisabledClasses : disabledClasses
        )}
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        mobile
          ? "block px-4 py-4 rounded-xl text-lg font-semibold transition-colors"
          : "px-2 xl:px-3 py-2 text-base xl:text-lg font-semibold rounded-lg transition-all duration-200 whitespace-nowrap",
        isActive
          ? mobile
            ? mobileActiveClasses
            : activeClasses
          : mobile
            ? mobileEnabledClasses
            : enabledClasses
      )}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 py-2"
          : "bg-transparent py-3 sm:py-3.5"
      )}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center w-full gap-4 xl:gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
              <Image
                src="/logo.svg"
                alt={`${company.shortName} logo`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden md:block">
              <p
                className={cn(
                  "font-extrabold text-xl xl:text-2xl leading-tight transition-colors whitespace-nowrap",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                {company.shortName}
              </p>
              <p
                className={cn(
                  "text-sm xl:text-base font-semibold tracking-wider whitespace-nowrap",
                  scrolled ? "text-accent" : "text-accent-light"
                )}
              >
                {company.tagline}
              </p>
            </div>
          </Link>

          <div className="hidden xl:flex flex-1 items-center justify-between px-4 2xl:px-8 min-w-0">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                enabled={link.enabled}
                pathname={pathname}
                scrolled={scrolled}
              />
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3 shrink-0 ml-auto">
            <a
              href={`tel:+91${company.phone}`}
              className={cn(
                "flex items-center gap-2 text-base xl:text-lg font-bold transition-colors whitespace-nowrap",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              <Phone className="w-5 h-5 text-accent shrink-0" />
              {company.phoneDisplay}
            </a>
            <Button
              href={`https://wa.me/91${company.whatsapp}`}
              external
              variant="whatsapp"
              size="lg"
              className="shrink-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "xl:hidden p-2 rounded-lg transition-colors shrink-0 ml-auto",
              scrolled
                ? "text-primary hover:bg-primary/5"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="xl:hidden mt-3 pb-2 animate-fade-up">
            <div
              className={cn(
                "rounded-xl p-3 space-y-1 shadow-xl max-h-[70vh] overflow-y-auto",
                scrolled ? "bg-white border border-border" : "glass-card"
              )}
            >
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  enabled={link.enabled}
                  pathname={pathname}
                  scrolled={scrolled}
                  mobile
                />
              ))}
              <div className="pt-3 mt-1 border-t border-white/10 space-y-2">
                <a
                  href={`tel:+91${company.phone}`}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-lg font-bold",
                    scrolled ? "text-primary" : "text-white"
                  )}
                >
                  <Phone className="w-5 h-5 text-accent" />
                  Call {company.phoneDisplay}
                </a>
                <Button
                  href={`https://wa.me/91${company.whatsapp}`}
                  external
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
