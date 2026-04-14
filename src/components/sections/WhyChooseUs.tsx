import { Award, Clock, MessageCircle, Users, BadgePoundSterling, Sparkles } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Materials and craftsmanship that stand the test of time and the British weather — every single job.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description:
      "We respect your schedule. Projects are planned carefully and delivered when we say they will be.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "No jargon, no surprises. We discuss every challenge openly and keep you informed throughout.",
  },
  {
    icon: Users,
    title: "Friendly Professional Team",
    description:
      "Approachable, courteous professionals who treat your home and garden with the utmost care.",
  },
  {
    icon: BadgePoundSterling,
    title: "Competitive Pricing",
    description:
      "Exceptional quality doesn't have to cost the earth. We offer honest, transparent quotes with no hidden extras.",
  },
  {
    icon: Sparkles,
    title: "Immaculate Finish",
    description:
      "We leave your space cleaner than we found it. A great result and a tidy site — every time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-stone py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-eyebrow">Why ARTLandscapes</span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-4">
            Built on Trust &amp; Quality
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto text-base leading-relaxed">
            We believe great outdoor work starts with great people. Here&apos;s
            what sets us apart from the competition.
          </p>
          <div className="w-14 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </AnimateOnScroll>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <AnimateOnScroll
                key={reason.title}
                delay={Math.min(i * 0.07, 0.3)}
                direction="up"
              >
                <div className="bg-white rounded-xl p-7 h-full shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-forest/8 flex items-center justify-center mb-5 group-hover:bg-forest transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-forest group-hover:text-cream transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display text-lg text-charcoal font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
