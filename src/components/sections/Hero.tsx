import Image from "next/image";
import { Phone, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/artlandscapes/hero.jpg"
        alt="Premium landscaping and groundwork project by ARTLandscapes"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
              South &amp; South East England
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream font-bold leading-[1.08] mb-6">
            Premium Driveways,{" "}
            <span className="italic text-gold">Patios</span>{" "}
            &amp; Landscaping
            <br className="hidden sm:block" /> Built to Last
          </h1>

          {/* Sub-copy */}
          <p className="text-stone/90 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            From driveways and resin surfaces to fencing and artificial grass —
            ARTLandscapes delivers premium outdoor transformations across Kent,
            Essex, Surrey and beyond.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <a href="tel:07703357185" className="btn-primary">
              <Phone size={17} strokeWidth={2.5} />
              Call Now
            </a>
            <a href="#contact" className="btn-outline-cream">
              <FileText size={17} strokeWidth={2} />
              Get a Free Quote
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              "5★ Rated on Google",
              "Free Quotes",
              "Fully Insured",
              "No Obligation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-stone/70">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream/10 to-transparent" />
    </section>
  );
}
