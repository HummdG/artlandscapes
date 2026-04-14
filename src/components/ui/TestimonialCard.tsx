import type { Testimonial } from "@/types";
import { Star } from "lucide-react";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <article className="bg-white rounded-2xl p-8 shadow-md border border-stone relative flex flex-col h-full">
      {/* Decorative quote mark */}
      <span className="absolute top-4 right-6 text-gold/15 font-display text-8xl leading-none select-none">
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-gold fill-gold"
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-charcoal/80 leading-relaxed text-sm mb-6 flex-1 relative z-10">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-cream font-semibold text-sm shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-charcoal text-sm">
            {testimonial.name}
          </p>
          {testimonial.service && (
            <p className="text-charcoal/45 text-xs">{testimonial.service}</p>
          )}
        </div>
      </div>
    </article>
  );
}
