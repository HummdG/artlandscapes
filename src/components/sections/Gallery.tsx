import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

/* ─────────────────────────────────────────
   Project grid photos (img1–4, img7–10)
   img5 / img6 are reserved for the
   before-after transformation feature.
───────────────────────────────────────── */
const projects = [
  {
    src: "/assets/artlandscapes/gallery/carousel/img1.png",
    num: "01",
    caption: "Resin Driveway",
    location: "Kent",
    // Desktop grid: spans 2 cols + 2 rows — hero position
    cls: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/assets/artlandscapes/gallery/carousel/img2.png",
    num: "02",
    caption: "Natural Stone Patio",
    location: "Surrey",
    cls: "",
  },
  {
    src: "/assets/artlandscapes/gallery/carousel/img3.png",
    num: "03",
    caption: "Block Paving",
    location: "Essex",
    cls: "",
  },
  {
    src: "/assets/artlandscapes/gallery/carousel/img4.png",
    num: "04",
    caption: "Garden Landscaping",
    location: "Sussex",
    cls: "",
  },
  {
    src: "/assets/artlandscapes/gallery/carousel/img7.png",
    num: "05",
    caption: "Artificial Lawn",
    location: "Hampshire",
    cls: "",
  },
  {
    src: "/assets/artlandscapes/gallery/carousel/img8.png",
    num: "06",
    caption: "Concreting & Groundwork",
    location: "London",
    cls: "",
  },
  {
    src: "/assets/artlandscapes/gallery/carousel/img9.png",
    num: "07",
    caption: "Premium Driveway",
    location: "Berkshire",
    // Desktop grid: spans 2 cols — wide feature
    cls: "lg:col-span-2",
  },
  {
    src: "/assets/artlandscapes/gallery/carousel/img10.png",
    num: "08",
    caption: "Outdoor Transformation",
    location: "Kent",
    cls: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-charcoal py-20 lg:py-28 overflow-hidden">

      {/* Subtle grain / dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F7F3EE 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section header ── */}
        <AnimateOnScroll className="mb-14 lg:mb-18">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="section-eyebrow" style={{ color: "#C4914E" }}>
                Our Work
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mt-2 mb-0 leading-tight">
                Projects
              </h2>
            </div>
            <p className="text-stone/55 max-w-md text-sm leading-relaxed lg:text-right">
              Every project is a transformation — here&apos;s a glimpse of what
              we&apos;ve delivered across South East England.
            </p>
          </div>
          {/* Gold rule */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/50 via-gold/20 to-transparent" />
        </AnimateOnScroll>

        {/* ── Before / After transformation feature ── */}
        <AnimateOnScroll direction="up" delay={0.05} className="mb-5">
          <div className="relative" style={{ height: "clamp(320px, 55vh, 600px)" }}>
            {/* Corner label — absolutely positioned outside the slider */}
            <div className="absolute -top-3.5 left-5 z-30 flex items-center gap-2">
              <span className="text-[10px] text-gold/70 uppercase tracking-[0.3em] font-bold">
                Transformation
              </span>
              <div className="h-px w-10 bg-gold/30" />
            </div>
            <BeforeAfterSlider />
          </div>
        </AnimateOnScroll>

        {/* ── Project grid ── */}
        {/*
          Desktop (3 cols, auto-rows 260px):
            img1  img1  img2
            img1  img1  img3
            img4  img5  img6
            img7  img7  img8
        */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
          style={{ gridAutoRows: "260px" }}
        >
          {projects.map((p, i) => (
            <AnimateOnScroll
              key={p.num}
              delay={Math.min(i * 0.05, 0.25)}
              direction="up"
              className={`group relative overflow-hidden rounded-xl ${p.cls}`}
            >
              {/* Photo */}
              <Image
                src={p.src}
                alt={`${p.caption} — ARTLandscapes project, ${p.location}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Permanent subtle gradient so number is always legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-charcoal/20" />

              {/* Gold hairline top — slides in on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Project number — top-left */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  className="font-display text-sm font-semibold leading-none"
                  style={{
                    color: "rgba(196,145,78,0.75)",
                    textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.num}
                </span>
              </div>

              {/* Caption — slides up on hover */}
              <div className="absolute bottom-0 inset-x-0 z-10 px-5 py-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                  {p.location}
                </p>
                <p className="text-cream font-display text-base font-semibold leading-snug">
                  {p.caption}
                </p>
              </div>

              {/* Hover overlay intensifier */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </AnimateOnScroll>
          ))}
        </div>

        {/* ── Instagram CTA ── */}
        <AnimateOnScroll direction="up" delay={0.1} className="mt-5">
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-forest/60 backdrop-blur-sm p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Background dot texture */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, #C4914E 1px, transparent 1px), radial-gradient(circle at 80% 50%, #C4914E 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden
            />
            <div className="relative z-10 text-center sm:text-left">
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                See More of Our Work
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-cream font-semibold mb-2">
                Follow Us on Instagram
              </h3>
              <p className="text-stone/55 text-sm max-w-sm leading-relaxed">
                We post regular project updates, before &amp; after photos, and
                behind-the-scenes from across South East England.
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center sm:items-end gap-4 shrink-0">
              <a
                href="https://www.instagram.com/artlandscapes__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/8 hover:bg-white/15 border border-white/12 hover:border-white/25 text-cream font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group"
              >
                <FaInstagram size={20} />
                @artlandscapes__
                <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-stone/35 text-xs">More project photos added regularly</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* ── Bottom CTA ── */}
        <AnimateOnScroll className="text-center mt-14" delay={0.05}>
          <p className="text-stone/45 mb-5 text-sm">
            Want results like these for your property?
          </p>
          <a href="#contact" className="btn-primary">
            Get Your Free Quote
          </a>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
