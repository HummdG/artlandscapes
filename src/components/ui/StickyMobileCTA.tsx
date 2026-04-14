"use client";

import { Phone, MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/447703357185?text=Hi%20ARTLandscapes%2C%20I%E2%80%99m%20interested%20in%20a%20free%20quote.";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-white/10 bg-charcoal grid grid-cols-2 safe-area-pb">
      <a
        href="tel:07703357185"
        className="flex items-center justify-center gap-2 py-4 text-cream text-sm font-semibold border-r border-white/10 active:bg-white/5 transition-colors"
      >
        <Phone size={17} className="text-gold" strokeWidth={2.5} />
        Call Now
      </a>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-cream text-sm font-semibold active:bg-white/5 transition-colors"
      >
        <MessageCircle size={17} className="text-[#25D366]" strokeWidth={2.5} />
        WhatsApp
      </a>
    </div>
  );
}
