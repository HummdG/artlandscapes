import { Phone, Mail } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-charcoal">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/60 via-charcoal to-charcoal" />
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <span className="section-eyebrow" style={{ color: "#C4914E" }}>
            Free No-Obligation Quote
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-bold mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="italic text-gold">Your Outdoor Space?</span>
          </h2>
          <p className="text-stone/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Get in touch today and we&apos;ll visit your property, discuss your
            vision, and give you a clear, honest quote — completely free and
            with no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07703357185" className="btn-primary">
              <Phone size={18} strokeWidth={2.5} />
              Call 07703 357185
            </a>
            <a href="#contact" className="btn-outline-cream">
              <Mail size={18} strokeWidth={2} />
              Send an Enquiry
            </a>
          </div>
        </AnimateOnScroll>

        {/* Service area tags */}
        <AnimateOnScroll delay={0.15} className="mt-14">
          <p className="text-stone/40 text-xs uppercase tracking-widest mb-3">
            Covering
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Kent",
              "Essex",
              "Sussex",
              "Surrey",
              "Hampshire",
              "Berkshire",
              "London",
              "Dover",
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full border border-stone/15 text-stone/50 text-xs"
              >
                {area}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
