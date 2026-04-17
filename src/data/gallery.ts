export type GalleryCategory =
  | "all"
  | "patios"
  | "artificial-grass"
  | "resin"
  | "landscaping"
  | "turfing";

export interface GalleryFilter {
  value: GalleryCategory;
  label: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  description: string;
  category: Exclude<GalleryCategory, "all">;
  coverIndex: number;
  images: GalleryImage[];
}

export const GALLERY_FILTERS: GalleryFilter[] = [
  { value: "all",              label: "All Projects"     },
  { value: "patios",           label: "Patios"           },
  { value: "artificial-grass", label: "Artificial Grass" },
  { value: "resin",            label: "Resin"            },
  { value: "landscaping",      label: "Landscaping"      },
  { value: "turfing",          label: "Turfing"          },
];

const BASE = "/assets/artlandscapes/gallery";

export const FEATURED_IMAGES: GalleryImage[] = Array.from({ length: 10 }, (_, i) => ({
  src: `${BASE}/carousel/img${i + 1}.png`,
  alt: `ARTLandscapes featured project ${i + 1}`,
}));

const GARDEN_BASE  = `${BASE}/garden dig and artificial lawn`;
const DIG_BASE     = `${BASE}/dig out turf and landscaping`;
const PATIO_BASE   = `${BASE}/indian sanstone patio`;
const RESIN_BASE   = `${BASE}/resin front porch area and balcony`;
const TURF_BASE    = `${BASE}/turfing job`;

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "garden-dig-artificial-lawn",
    title: "Garden Dig & Artificial Lawn",
    description:
      "Full garden excavation and artificial lawn installation. Old turf removed, sub-base prepared, and premium artificial grass laid for a clean, low-maintenance finish.",
    category: "artificial-grass",
    coverIndex: 0,
    images: [
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39.jpg`,    alt: "Garden dig and artificial lawn — overview"        },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_1.jpg`,  alt: "Garden dig and artificial lawn — stage 1"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_2.jpg`,  alt: "Garden dig and artificial lawn — stage 2"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_3.jpg`,  alt: "Garden dig and artificial lawn — stage 3"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_4.jpg`,  alt: "Garden dig and artificial lawn — stage 4"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_5.jpg`,  alt: "Garden dig and artificial lawn — stage 5"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_6.jpg`,  alt: "Garden dig and artificial lawn — stage 6"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_7.jpg`,  alt: "Garden dig and artificial lawn — stage 7"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_8.jpg`,  alt: "Garden dig and artificial lawn — stage 8"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_9.jpg`,  alt: "Garden dig and artificial lawn — stage 9"         },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-39_10.jpg`, alt: "Garden dig and artificial lawn — stage 10"        },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-40.jpg`,    alt: "Garden dig and artificial lawn — completion 1"    },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-42-40_1.jpg`,  alt: "Garden dig and artificial lawn — completion 2"    },
      { src: `${GARDEN_BASE}/PHOTO-2026-04-17-14-54-19.jpg`,    alt: "Garden dig and artificial lawn — finished result" },
    ],
  },
  {
    id: "dig-out-turf-landscaping",
    title: "Dig Out, Turf & Landscaping",
    description:
      "Complete turf dig-out and garden landscaping transformation. Groundwork cleared and levels corrected to create a clean canvas for the full garden redesign.",
    category: "landscaping",
    coverIndex: 0,
    images: [
      { src: `${DIG_BASE}/PHOTO-2026-04-17-14-54-19.jpg`,   alt: "Dig out turf and landscaping — overview"    },
      { src: `${DIG_BASE}/PHOTO-2026-04-17-14-54-30.jpg`,   alt: "Dig out turf and landscaping — excavation"  },
      { src: `${DIG_BASE}/PHOTO-2026-04-17-14-54-35.jpg`,   alt: "Dig out turf and landscaping — preparation" },
      { src: `${DIG_BASE}/PHOTO-2026-04-17-14-54-35_1.jpg`, alt: "Dig out turf and landscaping — progress 1"  },
      { src: `${DIG_BASE}/PHOTO-2026-04-17-14-54-35_2.jpg`, alt: "Dig out turf and landscaping — progress 2"  },
      { src: `${DIG_BASE}/PHOTO-2026-04-17-14-54-35_3.jpg`, alt: "Dig out turf and landscaping — finished"    },
    ],
  },
  {
    id: "indian-sandstone-patio",
    title: "Indian Sandstone Patio",
    description:
      "Indian sandstone patio installation with precision pointing and mortar bedding. Natural stone chosen for its durability and timeless character.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${PATIO_BASE}/PHOTO-2026-04-17-14-55-26.jpg`,   alt: "Indian sandstone patio — overview"  },
      { src: `${PATIO_BASE}/PHOTO-2026-04-17-14-55-26_1.jpg`, alt: "Indian sandstone patio — detail 1"  },
      { src: `${PATIO_BASE}/PHOTO-2026-04-17-14-55-26_2.jpg`, alt: "Indian sandstone patio — detail 2"  },
      { src: `${PATIO_BASE}/PHOTO-2026-04-17-14-55-26_3.jpg`, alt: "Indian sandstone patio — finished"  },
    ],
  },
  {
    id: "resin-front-porch-balcony",
    title: "Resin Front Porch & Balcony",
    description:
      "Resin-bound surfacing applied to a front porch and balcony area. Seamless, anti-slip finish in a complementary colour blend that enhances the property's kerb appeal.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_BASE}/PHOTO-2026-04-17-14-42-37.jpg`,   alt: "Resin front porch and balcony — overview"  },
      { src: `${RESIN_BASE}/PHOTO-2026-04-17-14-42-38.jpg`,   alt: "Resin front porch and balcony — detail 1"  },
      { src: `${RESIN_BASE}/PHOTO-2026-04-17-14-42-38_1.jpg`, alt: "Resin front porch and balcony — detail 2"  },
      { src: `${RESIN_BASE}/PHOTO-2026-04-17-14-42-38_2.jpg`, alt: "Resin front porch and balcony — finished"  },
    ],
  },
  {
    id: "turfing-job",
    title: "Turfing",
    description:
      "Premium turfing project from preparation to perfect finish. Soil conditioned, levelled, and high-quality turf laid for an instant, lush green lawn.",
    category: "turfing",
    coverIndex: 0,
    images: [
      { src: `${TURF_BASE}/PHOTO-2026-04-17-14-56-18.jpg`,   alt: "Turfing job — overview"  },
      { src: `${TURF_BASE}/PHOTO-2026-04-17-14-56-18_1.jpg`, alt: "Turfing job — stage 1"   },
      { src: `${TURF_BASE}/PHOTO-2026-04-17-14-56-18_2.jpg`, alt: "Turfing job — stage 2"   },
      { src: `${TURF_BASE}/PHOTO-2026-04-17-14-56-18_3.jpg`, alt: "Turfing job — stage 3"   },
      { src: `${TURF_BASE}/PHOTO-2026-04-17-14-56-18_4.jpg`, alt: "Turfing job — finished"  },
    ],
  },
];
