import type { Service } from "@/types";

// accent values are inline style hex colours used as overlay tints on the real project photo
export const services: Service[] = [
  {
    id: "driveways",
    title: "Driveways",
    description:
      "Transform your home's entrance with a stunning, durable driveway built to handle daily use and the British weather.",
    benefit: "Boosts kerb appeal and adds lasting property value",
    accent: "#1C2524",
    icon: "car",
    image: "/assets/artlandscapes/services/driveway.webp",
  },
  {
    id: "patios",
    title: "Patios",
    description:
      "Create the perfect outdoor living space — beautifully crafted and ideal for entertaining, relaxing, and enjoying your garden.",
    benefit: "Extends your living space outdoors all year round",
    accent: "#2C3B36",
    icon: "sun",
    image: "/assets/artlandscapes/services/patios.webp",
  },
  {
    id: "resin",
    title: "Resin Surfaces",
    description:
      "Smooth, modern, and virtually maintenance-free. Resin bound surfaces are SuDS-compliant and available in a wide range of colours.",
    benefit: "Permeable, frost-resistant and weed-resistant",
    accent: "#3D4F3A",
    icon: "droplets",
    image: "/assets/artlandscapes/services/resin.webp",
  },
  {
    id: "block-paving",
    title: "Block Paving",
    description:
      "Classic and versatile block paving adds structure and style to any driveway or path — available in multiple patterns and colours.",
    benefit: "Timeless look that increases kerb appeal",
    accent: "#1C2524",
    icon: "grid",
    image: "/assets/artlandscapes/services/block%20paving.webp",
  },
  {
    id: "artificial-grass",
    title: "Artificial Grass",
    description:
      "Enjoy a lush, green lawn without the upkeep. Our premium artificial grass looks and feels natural all year round.",
    benefit: "Low maintenance, pet-friendly, and evergreen",
    accent: "#2C3D28",
    icon: "leaf",
    image: "/assets/artlandscapes/services/artifical%20grass.webp",
  },
  {
    id: "fencing",
    title: "Fencing",
    description:
      "Define your boundaries and boost your privacy with quality fencing — from close-board panels to decorative timber styles.",
    benefit: "Improves security, privacy and garden aesthetics",
    accent: "#2C3B36",
    icon: "shield",
    image: "/assets/artlandscapes/services/fencing.webp",
  },
  {
    id: "concreting",
    title: "Concreting",
    description:
      "From garage floors to outdoor slabs, our concrete work delivers a strong, level, and long-lasting surface for any application.",
    benefit: "Strong, durable and low-maintenance base surface",
    accent: "#1C2524",
    icon: "layers",
    image: "/assets/artlandscapes/services/concreting.webp",
  },
  {
    id: "footings",
    title: "Footings",
    description:
      "Every great structure starts with solid foundations. We dig and pour precise footings for walls, extensions, and outbuildings.",
    benefit: "Engineered to support your build for decades",
    accent: "#2C3B36",
    icon: "building",
    image: "/assets/artlandscapes/services/footings.webp",
  },
  {
    id: "tarmac",
    title: "Tarmac",
    description:
      "A smooth, professional tarmac finish is hard-wearing, fast to install, and ideal for driveways, car parks, and access roads.",
    benefit: "Durable, quick to lay and cost-effective",
    accent: "#1C2524",
    icon: "route",
    image: "/assets/artlandscapes/services/tramac.webp",
  },
];
