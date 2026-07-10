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

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5 py-1.5"
          : "bg-transparent py-3"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
              <Image
                src="/logo.svg"
                alt={`${company.shortName} logo`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={cn(
                  "font-bold text-lg leading-tight transition-colors",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                {company.shortName}
              </p>
              <p
                className={cn(
                  "text-xs font-medium tracking-wider",
                  scrolled ? "text-accent" : "text-accent-light"
                )}
              >
                {company.tagline}
              </p>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? scrolled
                      ? "text-accent nav-link-active"
                      : "text-accent-light nav-link-active"
                    : scrolled
                      ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:+91${company.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              <Phone className="w-4 h-4 text-accent" />
              {company.phoneDisplay}
            </a>
            <Button
              href={`https://wa.me/91${company.whatsapp}`}
              external
              variant="whatsapp"
              size="sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
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
          <div className="lg:hidden mt-4 pb-4 animate-fade-up">
            <div
              className={cn(
                "rounded-2xl p-4 space-y-1 shadow-xl",
                scrolled ? "bg-white border border-border" : "glass-card"
              )}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? scrolled
                        ? "bg-accent/10 text-accent"
                        : "bg-white/10 text-accent-light"
                      : scrolled
                        ? "text-foreground hover:bg-primary/5"
                        : "text-white/90 hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <a
                  href={`tel:+91${company.phone}`}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-semibold",
                    scrolled ? "text-primary" : "text-white"
                  )}
                >
                  <Phone className="w-4 h-4 text-accent" />
                  Call {company.phoneDisplay}
                </a>
                <Button
                  href={`https://wa.me/91${company.whatsapp}`}
                  external
                  variant="whatsapp"
                  size="sm"
                  className="w-full"
                >
                  <WhatsAppIcon className="w-4 h-4" />
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
