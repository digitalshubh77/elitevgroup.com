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
    ? "text-foreground/90 hover:text-primary hover:bg-primary/5"
    : "text-white/90 hover:text-white hover:bg-white/10";

  const disabledClasses = scrolled
    ? "text-foreground/50 cursor-not-allowed"
    : "text-white/50 cursor-not-allowed";

  const mobileActiveClasses = scrolled
    ? "bg-accent/10 text-accent"
    : "bg-white/10 text-accent-light";

  const mobileEnabledClasses = scrolled
    ? "text-foreground hover:bg-primary/5"
    : "text-white/90 hover:bg-white/10";

  const mobileDisabledClasses = scrolled
    ? "text-foreground/50 cursor-not-allowed"
    : "text-white/50 cursor-not-allowed";

  const desktopClasses = mobile
    ? ""
    : "px-2.5 2xl:px-3 py-2 text-sm 2xl:text-base font-semibold rounded-lg whitespace-nowrap shrink-0";

  if (!enabled) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="Coming soon"
        className={cn(
          mobile
            ? "block px-4 py-3.5 rounded-xl text-base font-semibold select-none"
            : desktopClasses,
          "select-none",
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
          ? "block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors"
          : cn(desktopClasses, "transition-all duration-200"),
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
          : "bg-transparent py-3"
      )}
    >
      <nav className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8">
        {/* 3-column grid: logo | nav links | actions — prevents overlap */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 xl:gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 min-w-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-lg shrink-0">
              <Image
                src="/logo.svg"
                alt={`${company.shortName} logo`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden lg:block min-w-0">
              <p
                className={cn(
                  "font-extrabold text-lg xl:text-xl leading-tight transition-colors truncate",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                {company.shortName}
              </p>
              <p
                className={cn(
                  "text-xs xl:text-sm font-semibold tracking-wide truncate hidden xl:block",
                  scrolled ? "text-accent" : "text-accent-light"
                )}
              >
                {company.tagline}
              </p>
            </div>
          </Link>

          {/* Center nav — grouped with gap, never stretches into actions */}
          <div className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1 min-w-0 overflow-x-auto scrollbar-hide">
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

          {/* Right actions — fixed width, never overlapped */}
          <div className="flex items-center gap-2 shrink-0 justify-end">
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <a
                href={`tel:+91${company.phone}`}
                title={`Call ${company.phoneDisplay}`}
                className={cn(
                  "flex items-center gap-1.5 text-sm 2xl:text-base font-bold transition-colors whitespace-nowrap shrink-0",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                <Phone className="w-4 h-4 2xl:w-5 2xl:h-5 text-accent shrink-0" />
                <span className="hidden 2xl:inline">{company.phoneDisplay}</span>
              </a>
              <Button
                href={`https://wa.me/91${company.whatsapp}`}
                external
                variant="whatsapp"
                size="md"
                className="shrink-0 !px-3 2xl:!px-5"
              >
                <WhatsAppIcon className="w-4 h-4 2xl:w-5 2xl:h-5 shrink-0" />
                <span className="hidden 2xl:inline">WhatsApp</span>
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "xl:hidden p-2 rounded-lg transition-colors shrink-0",
                scrolled
                  ? "text-primary hover:bg-primary/5"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="xl:hidden mt-3 pb-2 animate-fade-up">
            <div
              className={cn(
                "rounded-xl p-3 space-y-0.5 shadow-xl max-h-[70vh] overflow-y-auto",
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
                    "flex items-center gap-2 px-4 py-3 text-base font-bold",
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
