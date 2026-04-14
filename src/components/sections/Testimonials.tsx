"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  return (
    <section id="testimonials" className="bg-forest py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-charcoal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-charcoal/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-eyebrow" style={{ color: "#C4914E" }}>
            What Our Clients Say
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-4">
            Trusted by Homeowners
          </h2>
          <p className="text-stone/70 max-w-lg mx-auto text-base leading-relaxed">
            Don&apos;t just take our word for it — here&apos;s what our
            customers have to say about working with ARTLandscapes.
          </p>
          <div className="w-14 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </AnimateOnScroll>

        {/* Desktop: 3 cards visible */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <AnimateOnScroll key={t.id} direction="up">
              <TestimonialCard testimonial={t} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile / tablet: carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                <TestimonialCard testimonial={testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-cream/20 text-cream/70 hover:text-cream hover:border-cream/50 flex items-center justify-center transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === activeIndex
                      ? "w-6 h-2 bg-gold"
                      : "w-2 h-2 bg-cream/30 hover:bg-cream/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-cream/20 text-cream/70 hover:text-cream hover:border-cream/50 flex items-center justify-center transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
