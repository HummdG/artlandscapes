"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);

  const clamp = (val: number) => Math.max(2, Math.min(98, val));

  const calc = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    activeRef.current = true;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    calc(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!activeRef.current) return;
    calc(e.clientX);
  };
  const onPointerUp = () => {
    activeRef.current = false;
    setDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden rounded-2xl cursor-ew-resize touch-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* ── AFTER (base layer, img5) — always visible on the right ── */}
      <div className="absolute inset-0">
        <Image
          src="/assets/artlandscapes/carousel/img5.png"
          alt="After transformation — ARTLandscapes"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
        {/* After label — right side */}
        <div className="absolute top-5 right-5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-2.5 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2.5 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-charcoal/50 inline-block shrink-0" />
            After
          </span>
        </div>
      </div>

      {/* ── BEFORE (clipped layer, img6) — reveals from the left ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src="/assets/artlandscapes/carousel/img6.png"
          alt="Before transformation — ARTLandscapes"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
        {/* Before label — left side */}
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-flex items-center gap-2.5 bg-charcoal/75 backdrop-blur-md text-stone/90 text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-stone/50 inline-block shrink-0" />
            Before
          </span>
        </div>
      </div>

      {/* ── Divider + Handle ── */}
      <div
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Hairline */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-px w-px bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />

        {/* Drag handle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.35)] border border-stone/20 flex items-center justify-center"
          animate={{ scale: dragging ? 1.12 : 1 }}
          transition={{ duration: 0.15 }}
        >
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden>
            <path d="M6 6H1M1 6L4.5 2.5M1 6L4.5 9.5" stroke="#C4914E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 6H19M19 6L15.5 2.5M19 6L15.5 9.5" stroke="#C4914E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {/* ── Bottom caption strip ── */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent pt-16 pb-6 px-7 z-10 pointer-events-none">
        <p className="text-gold text-[10px] uppercase tracking-[0.25em] font-bold mb-1.5">
          Featured Transformation
        </p>
        <p className="text-cream font-display text-xl font-semibold leading-snug">
          After Paving &amp; Artificial Grass
        </p>
        <p className="text-stone/60 text-xs mt-1 font-medium">
          Drag to reveal — South East England
        </p>
      </div>
    </div>
  );
}
