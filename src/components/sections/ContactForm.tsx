"use client";

import { useState } from "react";
import { Send, Phone, Mail, CheckCircle } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const SERVICE_OPTIONS = [
  "Driveways",
  "Patios",
  "Resin",
  "Block Paving",
  "Artificial Grass",
  "Fencing",
  "Concreting",
  "Footings",
  "Tarmac",
  "Other / Not Sure",
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-stone bg-white text-charcoal placeholder:text-charcoal/35 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors duration-200 text-sm";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const body = [
      `Name: ${name}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    const subject = `Enquiry from ${name} — ${service}`;

    window.location.href = `mailto:ashley@artlandscapes.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="bg-stone py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — text */}
          <AnimateOnScroll direction="left">
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal font-bold mb-5 leading-tight">
              Start Your Project Today
            </h2>
            <p className="text-charcoal/65 text-base leading-relaxed mb-8">
              Fill in the form and we&apos;ll get back to you promptly. Or if
              you prefer, give us a call — Artur is always happy to chat
              through your requirements.
            </p>

            {/* Direct contact details */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:07703357185"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-200">
                  <Phone size={18} className="text-cream" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-charcoal/45 uppercase tracking-wide">
                    Call us
                  </p>
                  <p className="text-charcoal font-semibold text-lg">
                    07703 357185
                  </p>
                </div>
              </a>
              <a
                href="mailto:ashley@artlandscapes.co.uk"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-200">
                  <Mail size={18} className="text-cream" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs text-charcoal/45 uppercase tracking-wide">
                    Email us
                  </p>
                  <p className="text-charcoal font-medium text-sm break-all">
                    ashley@artlandscapes.co.uk
                  </p>
                </div>
              </a>
            </div>

            {/* Service area */}
            <div className="p-5 bg-forest/8 rounded-xl border border-forest/15">
              <p className="text-charcoal/70 text-sm leading-relaxed">
                <span className="font-semibold text-charcoal">
                  Serving South &amp; South East England:
                </span>{" "}
                Kent, Essex, Sussex, Surrey, Hampshire, Berkshire, London, Dover
                and surrounding areas.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right — form */}
          <AnimateOnScroll direction="right">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-sage" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal font-semibold mb-2">
                    Email Client Opened!
                  </h3>
                  <p className="text-charcoal/60 text-sm">
                    Your email client should have opened with your enquiry
                    pre-filled. Just hit send and we&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl text-charcoal font-semibold mb-1">
                    Free Quote Request
                  </h3>
                  <p className="text-charcoal/50 text-sm mb-5">
                    No obligation — we&apos;ll get back to you quickly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="07xxx xxxxxx"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-1.5"
                    >
                      Service Required
                    </label>
                    <select id="service" name="service" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wide mb-1.5"
                    >
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Briefly describe what you have in mind — location, size, any other details…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={16} strokeWidth={2} />
                    Send Enquiry
                  </button>

                  <p className="text-charcoal/35 text-xs text-center">
                    By submitting you agree to be contacted about your enquiry.
                    No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
