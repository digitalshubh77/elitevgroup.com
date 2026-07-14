"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  mobile?: boolean;
  onNavigate?: () => void;
}

function NavItem({
  href,
  label,
  enabled,
  pathname,
  mobile,
  onNavigate,
}: NavItemProps) {
  const isActive = pathname === href;

  const desktopClasses =
    "px-2.5 2xl:px-3.5 py-2 text-xs 2xl:text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all duration-200";

  if (!enabled) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="Coming soon"
        className={cn(
          mobile
            ? "block px-4 py-3.5 rounded-xl text-sm font-semibold select-none text-foreground/50 cursor-not-allowed"
            : cn(desktopClasses, "text-foreground/50 cursor-not-allowed select-none")
        )}
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        mobile
          ? cn(
              "block px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors",
              isActive
                ? "bg-accent/10 text-accent"
                : "text-foreground hover:bg-primary/5"
            )
          : cn(
              desktopClasses,
              isActive
                ? "text-accent nav-link-active"
                : "text-foreground/90 hover:text-primary hover:bg-primary/5"
            )
      )}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md shadow-primary/5 py-2 transition-all duration-300">
      <nav className="w-full max-w-[100vw] px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto] xl:grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
          <Link href="/" className="flex items-center shrink-0" aria-label={company.legalName}>
            <Image
              src={company.logo}
              alt={company.legalName}
              width={662}
              height={352}
              className="h-11 w-auto sm:h-12 xl:h-[3.25rem] object-contain"
              priority
              unoptimized
              sizes="220px"
            />
          </Link>

          <div className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1.5 min-w-0 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                enabled={link.enabled}
                pathname={pathname}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 justify-end">
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <a
                href={`tel:+91${company.phone}`}
                title={`Call ${company.phoneDisplay}`}
                className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-primary/5 border border-primary/15 text-primary font-bold text-sm hover:bg-primary/10 transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>{company.phoneDisplay}</span>
              </a>
              <Button
                href={`https://wa.me/91${company.whatsapp}`}
                external
                variant="whatsapp"
                size="md"
                className="shrink-0 !px-4 !py-2.5"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                WhatsApp
              </Button>
            </div>

            <a
              href={`tel:+91${company.phone}`}
              aria-label={`Call ${company.phoneDisplay}`}
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
            </a>
            <a
              href={`https://wa.me/91${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="xl:hidden mt-3 pb-2 animate-fade-up">
            <div className="rounded-xl p-3 space-y-0.5 shadow-sm max-h-[70vh] overflow-y-auto bg-white border border-border">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  enabled={link.enabled}
                  pathname={pathname}
                  mobile
                  onNavigate={() => setIsOpen(false)}
                />
              ))}
              <div className="pt-3 mt-1 border-t border-border space-y-2">
                <a
                  href={`tel:+91${company.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-primary rounded-lg hover:bg-primary/5"
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
