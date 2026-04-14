"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Car, Sun, Droplets, Grid, Leaf, Shield, Layers, Building, Route } from "lucide-react";
import type { Service } from "@/types";

// Map icon string → lucide component
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  car: Car,
  sun: Sun,
  droplets: Droplets,
  grid: Grid,
  leaf: Leaf,
  shield: Shield,
  layers: Layers,
  building: Building,
  route: Route,
};

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = iconMap[service.icon] ?? Layers;

  return (
    <motion.article
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-default"
      style={{ minHeight: 320 }}
    >
      {/* Service-specific photo */}
      <Image
        src={service.image}
        alt={`${service.title} project by ARTLandscapes`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradient overlay — dark at bottom for text, translucent at top to show photo */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom, ${service.accent}99 0%, ${service.accent}e6 55%, ${service.accent}f5 100%)`,
        }}
      />

      {/* Subtle vignette so photo reads through the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

      {/* Gold accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div className="relative z-10 p-7 flex flex-col flex-1">
        {/* Icon badge */}
        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
          <Icon size={22} strokeWidth={1.75} className="text-gold" />
        </div>

        {/* Service name */}
        <h3 className="font-display text-xl text-cream font-semibold mb-3 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-cream/70 text-sm leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Benefit */}
        <div className="flex items-start gap-2 text-gold/90 text-xs font-semibold uppercase tracking-wide">
          <CheckCircle size={13} strokeWidth={2.5} className="shrink-0 mt-0.5" />
          <span>{service.benefit}</span>
        </div>
      </div>
    </motion.article>
  );
}
