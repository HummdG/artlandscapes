"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Lightbox from "@/components/ui/Lightbox";
import {
  FEATURED_IMAGES,
  GALLERY_FILTERS,
  GALLERY_PROJECTS,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

const TOTAL_IMAGES =
  FEATURED_IMAGES.length +
  GALLERY_PROJECTS.reduce((sum, p) => sum + p.images.length, 0);

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || lightbox) return;
    const interval = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % FEATURED_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, lightbox]);

  const openLightbox = useCallback((images: GalleryImage[], index: number) => {
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const visibleProjects =
    activeFilter === "all"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-charcoal min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-charcoal pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #F7F3EE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimateOnScroll>
            <span className="section-eyebrow" style={{ color: "#C4914E" }}>
              Our Portfolio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-bold mt-3 mb-5 leading-tight">
              Project Gallery
            </h1>
            <p className="text-stone/55 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Every project tells a story of transformation. Browse our completed
              work across South East England.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {[
                { value: String(TOTAL_IMAGES), label: "Photos" },
                { value: String(GALLERY_PROJECTS.length), label: "Projects" },
                { value: "5+", label: "Service Areas" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl text-gold font-bold leading-none">{value}</p>
                  <p className="text-stone/45 text-[11px] uppercase tracking-widest mt-1.5">{label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-gold/50 via-gold/20 to-transparent" />
        </div>
      </section>

      {/* ── Featured Work carousel ── */}
      <section className="pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-7">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-gold/70 uppercase tracking-[0.3em] font-bold">
                Featured Work
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.05}>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "16/9" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => openLightbox(FEATURED_IMAGES, carouselIndex)}
                >
                  <Image
                    src={FEATURED_IMAGES[carouselIndex].src}
                    alt={FEATURED_IMAGES[carouselIndex].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={carouselIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                  {/* Click hint */}
                  <div className="absolute bottom-14 right-5 z-10 hidden sm:flex items-center gap-1.5 text-white/40 text-[10px] font-medium">
                    Click to expand
                    <ArrowUpRight size={12} />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCarouselIndex((i) => (i - 1 + FEATURED_IMAGES.length) % FEATURED_IMAGES.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-charcoal/50 hover:bg-charcoal/80 border border-white/10 flex items-center justify-center text-cream transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Next arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCarouselIndex((i) => (i + 1) % FEATURED_IMAGES.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-charcoal/50 hover:bg-charcoal/80 border border-white/10 flex items-center justify-center text-cream transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-10">
                {FEATURED_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCarouselIndex(i); }}
                    className={cn(
                      "rounded-full transition-all duration-300",
                      i === carouselIndex
                        ? "w-5 h-1.5 bg-gold"
                        : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
                    )}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <AnimateOnScroll className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <span className="text-[10px] text-gold/70 uppercase tracking-[0.3em] font-bold">
                  Project Showcase
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream font-bold mt-2">
                  Our Projects
                </h2>
              </div>
              <p className="text-stone/40 text-sm max-w-xs lg:text-right leading-relaxed">
                Filter by service type to explore specific projects.
              </p>
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/50 via-gold/20 to-transparent" />
          </AnimateOnScroll>

          {/* Filter tabs */}
          <div className="mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
            <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap pb-1">
              {GALLERY_FILTERS.map((filter) => {
                const count =
                  filter.value === "all"
                    ? GALLERY_PROJECTS.length
                    : GALLERY_PROJECTS.filter((p) => p.category === filter.value).length;
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border",
                      isActive
                        ? "bg-gold text-charcoal border-gold"
                        : "bg-transparent text-stone/60 border-white/10 hover:border-white/25 hover:text-cream"
                    )}
                  >
                    {filter.label}
                    <span
                      className={cn(
                        "text-[11px] font-bold tabular-nums",
                        isActive ? "text-charcoal/55" : "text-stone/30"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated project list */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {visibleProjects.length === 0 ? (
              <p className="text-stone/35 text-sm py-16 text-center">
                No projects in this category yet.
              </p>
            ) : (
              <div className="space-y-16">
                {visibleProjects.map((project, projectIndex) => (
                  <AnimateOnScroll key={project.id} delay={Math.min(projectIndex * 0.06, 0.2)}>
                    {/* Project header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div className="flex-1">
                        <h3 className="font-display text-xl md:text-2xl text-cream font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-stone/55 text-sm leading-relaxed mt-1.5 max-w-lg">
                          {project.description}
                        </p>
                      </div>
                      <span className="self-start text-[10px] font-bold uppercase tracking-[0.18em] text-gold/60 bg-white/[0.04] border border-white/8 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {project.images.length} photos
                      </span>
                    </div>

                    {/* Photo grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                      {project.images.map((image, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => openLightbox(project.images, imgIndex)}
                          className="group relative aspect-[4/3] overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                          aria-label={`View ${image.alt}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {/* Gold hairline top */}
                          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                          {/* Index */}
                          <div className="absolute bottom-2.5 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span
                              className="font-display text-[11px] font-semibold"
                              style={{
                                color: "rgba(196,145,78,0.8)",
                                letterSpacing: "0.08em",
                                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                              }}
                            >
                              {String(imgIndex + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-forest/60 backdrop-blur-sm p-8 sm:p-12 text-center">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, #C4914E 1px, transparent 1px), radial-gradient(circle at 80% 50%, #C4914E 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden
              />
              <div className="relative z-10">
                <p className="text-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                  Start Your Project
                </p>
                <h3 className="font-display text-3xl sm:text-4xl text-cream font-semibold mb-3">
                  Ready for a Transformation?
                </h3>
                <p className="text-stone/55 text-sm max-w-md mx-auto leading-relaxed mb-8">
                  Get in touch for a free, no-obligation quote. We serve South &amp;
                  South East England.
                </p>
                <Link href="/#contact" className="btn-primary">
                  Get Your Free Quote
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            initialIndex={lightbox.index}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
