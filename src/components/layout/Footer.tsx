import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const services = [
  "Driveways",
  "Patios",
  "Resin",
  "Block Paving",
  "Artificial Grass",
  "Fencing",
  "Concreting",
  "Footings",
  "Tarmac",
];

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "/gallery", label: "Gallery", isRoute: true as const },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-forest shrink-0">
                <Image
                  src="/assets/artlandscapes/logo.png"
                  alt="ARTLandscapes logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-display font-semibold text-cream text-lg tracking-tight">
                ART<span className="text-gold">Landscapes</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Expert groundwork and landscaping specialists serving South &amp;
              South East England. Quality you can see, reliability you can count on.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/747414905127730"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ARTLandscapes on Facebook"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-[#1877F2] flex items-center justify-center text-stone/70 hover:text-white transition-all duration-200"
              >
                <FaFacebook size={17} />
              </a>
              <a
                href="https://www.instagram.com/artlandscapes__"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ARTLandscapes on Instagram"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-[#E1306C] flex items-center justify-center text-stone/70 hover:text-white transition-all duration-200"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="https://wa.me/447703357185"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ARTLandscapes on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-[#25D366] flex items-center justify-center text-stone/70 hover:text-white transition-all duration-200"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {"isRoute" in link ? (
                    <Link
                      href={link.href}
                      className="text-sm hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm hover:text-cream transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-widest mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:07703357185"
                  className="flex items-start gap-3 text-sm hover:text-cream transition-colors group"
                >
                  <Phone
                    size={15}
                    className="text-gold mt-0.5 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span>07703 357185</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ashley@artlandscapes.co.uk"
                  className="flex items-start gap-3 text-sm hover:text-cream transition-colors group break-all"
                >
                  <Mail
                    size={15}
                    className="text-gold mt-0.5 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span>ashley@artlandscapes.co.uk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin
                    size={15}
                    className="text-gold mt-0.5 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span>
                    Kent · Essex · Sussex · Surrey
                    <br />
                    Hampshire · Berkshire · London
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone/45 text-center sm:text-left">
            © {new Date().getFullYear()} ARTLandscapes. All rights reserved.
          </p>
          <p className="text-xs text-stone/35 text-center">
            Serving Kent · Essex · Sussex · Surrey · Hampshire · Berkshire ·
            London · Dover
          </p>
        </div>
      </div>
    </footer>
  );
}
