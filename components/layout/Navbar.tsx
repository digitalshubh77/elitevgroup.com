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
  mobile?: boolean;
}

function NavItem({
  href,
  label,
  enabled,
  pathname,
  mobile,
}: NavItemProps) {
  const isActive = pathname === href;

  const desktopClasses =
    "px-3 2xl:px-4 py-2.5 text-sm 2xl:text-base font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all duration-200";

  if (!enabled) {
    return (
      <span
        role="link"
        aria-disabled="true"
        title="Coming soon"
        className={cn(
          mobile
            ? "block px-4 py-3.5 rounded-xl text-base font-semibold select-none text-foreground/50 cursor-not-allowed"
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
      className={cn(
        mobile
          ? cn(
              "block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors",
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md shadow-primary/5 py-2.5 transition-all duration-300">
      <nav className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 xl:gap-5">
          <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg shrink-0">
              <Image
                src="/logo.svg"
                alt={`${company.shortName} logo`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden lg:block min-w-0">
              <p className="font-extrabold text-xl xl:text-2xl leading-tight text-primary truncate">
                {company.shortName}
              </p>
              <p className="text-sm xl:text-base font-semibold tracking-wide text-accent truncate hidden xl:block">
                {company.tagline}
              </p>
            </div>
          </Link>

          <div className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2 min-w-0 overflow-x-auto scrollbar-hide">
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

          <div className="flex items-center gap-2 shrink-0 justify-end">
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
            <div className="rounded-xl p-3 space-y-0.5 shadow-xl max-h-[70vh] overflow-y-auto bg-white border border-border">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  enabled={link.enabled}
                  pathname={pathname}
                  mobile
                />
              ))}
              <div className="pt-3 mt-1 border-t border-border space-y-2">
                <a
                  href={`tel:+91${company.phone}`}
                  className="flex items-center gap-2 px-4 py-3 text-base font-bold text-primary"
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
