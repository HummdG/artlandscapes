"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#services",     label: "Services",  isRoute: false },
  { href: "#why-us",       label: "Why Us",    isRoute: false },
  { href: "/gallery",      label: "Gallery",   isRoute: true  },
  { href: "#testimonials", label: "Reviews",   isRoute: false },
  { href: "#contact",      label: "Contact",   isRoute: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/96 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" onClick={closeMobile} className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-forest">
              <Image
                src="/assets/artlandscapes/logo.png"
                alt="ARTLandscapes logo"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <span className="font-display font-semibold text-cream text-lg tracking-tight">
              ART<span className="text-gold">Landscapes</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href ? "text-cream" : "text-stone/80 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-stone/80 hover:text-cream text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:07703357185"
              className="flex items-center gap-2 text-stone/75 hover:text-cream text-sm font-medium transition-colors"
            >
              <Phone size={15} strokeWidth={2.5} />
              07703 357185
            </a>
            <a href="#contact" className="btn-primary text-sm px-5 py-2.5">
              Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-charcoal border-t border-white/10"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className={`py-3 text-base font-medium border-b border-white/5 transition-colors ${
                      pathname === link.href ? "text-cream" : "text-stone/80 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="text-stone/80 hover:text-cream py-3 text-base font-medium border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="tel:07703357185"
                onClick={closeMobile}
                className="flex items-center gap-2 text-gold font-semibold py-3 mt-1"
              >
                <Phone size={16} strokeWidth={2.5} />
                Call 07703 357185
              </a>
              <a
                href="#contact"
                onClick={closeMobile}
                className="btn-primary justify-center mt-2"
              >
                Get a Free Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
