import { services } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4">
            Our Services
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto text-base leading-relaxed">
            We cover the full spectrum of outdoor transformations — from the
            foundations up. Every job is delivered to the same premium standard.
          </p>
          <div className="w-14 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </AnimateOnScroll>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimateOnScroll
              key={service.id}
              delay={Math.min(i * 0.06, 0.3)}
              direction="up"
            >
              <ServiceCard service={service} index={i} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll className="text-center mt-14">
          <p className="text-charcoal/55 mb-5 text-sm">
            Not sure which service you need? We&apos;ll advise you for free.
          </p>
          <a href="#contact" className="btn-outline-forest">
            Talk to an Expert
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
