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

const GARDEN_BASE        = `${BASE}/garden dig and artificial lawn`;
const DIG_BASE           = `${BASE}/dig out turf and landscaping`;
const PATIO_BASE         = `${BASE}/indian sanstone patio`;
const RESIN_BASE         = `${BASE}/resin front porch area and balcony`;
const TURF_BASE          = `${BASE}/turfing job`;

const CRAZY_GARDEN_BASE  = `${BASE}/crazy garden renovation with curved path and curved kerb`;
const ITALIAN_BASE       = `${BASE}/entrance to an italian resturaunt`;
const GARDEN_SS_BASE     = `${BASE}/garden transform with sandstone patio`;
const TRANSFORM_BASE     = `${BASE}/garden transform`;
const HOUSE_EXT_BASE     = `${BASE}/house extensions`;
const PORC_LIGHT_BASE    = `${BASE}/porcelain patio with lighting`;
const PORC_TILE_BASE     = `${BASE}/porcelain tile garen transform`;
const RESIN_CY_BASE      = `${BASE}/resin driveway cyprus`;
const RESIN_KERB_BASE    = `${BASE}/resin driveway with k kerb planter`;
const RESIN_DW_BASE      = `${BASE}/resin driveway`;
const RESIN_DW2_BASE     = `${BASE}/resin driveyway 2`;
const RESIN_THAI_BASE    = `${BASE}/resin entrance thai restaurant in cyprus`;
const RESIN_PATIO_BASE   = `${BASE}/resin front patio and planters`;
const RESIN_POOL_BASE    = `${BASE}/resin pool cyprus`;
const SS_GRASS_BASE      = `${BASE}/sandstone patio with artificial grass`;
const SS_PATIO_BASE      = `${BASE}/sandstone patio`;
const SS_BBQ_BASE        = `${BASE}/full-garden-transformation-indian-sandstone-patio-bbq`;
const GREY_KANDLA_BASE   = `${BASE}/grey-kandla-sandstone-patio-fencing-aircon-installation`;

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
  {
    id: "crazy-garden-renovation",
    title: "Garden Renovation with Curved Path & Kerb",
    description:
      "Cyprus garden renovation — full dig out of existing crazy paved footpaths, new crazy paved driveway, drop kerb installation, and a concrete finish drive.",
    category: "landscaping",
    coverIndex: 0,
    images: [
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.33.jpeg`,      alt: "Garden renovation with curved path — overview"   },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.33 (1).jpeg`,  alt: "Garden renovation with curved path — detail 1"   },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34.jpeg`,      alt: "Garden renovation with curved path — stage 1"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (1).jpeg`,  alt: "Garden renovation with curved path — stage 2"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (2).jpeg`,  alt: "Garden renovation with curved path — stage 3"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (3).jpeg`,  alt: "Garden renovation with curved path — stage 4"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (4).jpeg`,  alt: "Garden renovation with curved path — stage 5"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (5).jpeg`,  alt: "Garden renovation with curved path — stage 6"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (6).jpeg`,  alt: "Garden renovation with curved path — stage 7"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (7).jpeg`,  alt: "Garden renovation with curved path — stage 8"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (8).jpeg`,  alt: "Garden renovation with curved path — stage 9"    },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (9).jpeg`,  alt: "Garden renovation with curved path — stage 10"   },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (10).jpeg`, alt: "Garden renovation with curved path — stage 11"   },
      { src: `${CRAZY_GARDEN_BASE}/WhatsApp Image 2026-04-28 at 10.28.34 (11).jpeg`, alt: "Garden renovation with curved path — finished"   },
    ],
  },
  {
    id: "italian-restaurant-entrance",
    title: "Italian Restaurant Entrance",
    description:
      "Resin-bound entrance installation for an Italian restaurant in Cyprus. Dark resin surface laid over the existing entrance, creating a smart and durable finish for high-footfall commercial use.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${ITALIAN_BASE}/WhatsApp Image 2026-04-28 at 10.01.41.jpeg`,      alt: "Italian restaurant entrance — overview" },
      { src: `${ITALIAN_BASE}/WhatsApp Image 2026-04-28 at 10.01.41 (1).jpeg`,  alt: "Italian restaurant entrance — detail 1" },
      { src: `${ITALIAN_BASE}/WhatsApp Image 2026-04-28 at 10.01.41 (2).jpeg`,  alt: "Italian restaurant entrance — finished" },
    ],
  },
  {
    id: "garden-transform-sandstone-patio",
    title: "Garden Transform with Sandstone Patio",
    description:
      "Full garden transformation centred around a beautifully laid sandstone patio. Existing garden cleared and redesigned to create a cohesive, low-maintenance outdoor living space.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.52.jpeg`,      alt: "Garden transform with sandstone patio — overview"    },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.52 (1).jpeg`,  alt: "Garden transform with sandstone patio — stage 1"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.52 (2).jpeg`,  alt: "Garden transform with sandstone patio — stage 2"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.52 (3).jpeg`,  alt: "Garden transform with sandstone patio — stage 3"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53.jpeg`,      alt: "Garden transform with sandstone patio — stage 4"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53 (1).jpeg`,  alt: "Garden transform with sandstone patio — stage 5"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53 (2).jpeg`,  alt: "Garden transform with sandstone patio — stage 6"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53 (3).jpeg`,  alt: "Garden transform with sandstone patio — stage 7"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53 (4).jpeg`,  alt: "Garden transform with sandstone patio — stage 8"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53 (5).jpeg`,  alt: "Garden transform with sandstone patio — stage 9"     },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53 (6).jpeg`,  alt: "Garden transform with sandstone patio — stage 10"    },
      { src: `${GARDEN_SS_BASE}/WhatsApp Image 2026-04-28 at 09.58.53 (7).jpeg`,  alt: "Garden transform with sandstone patio — finished"    },
    ],
  },
  {
    id: "garden-transform",
    title: "Garden Transform",
    description:
      "Full grade garden transformation including a resin patio with LED lighting strip border and new turf. Groundworks completed in full before the finished surfaces were installed.",
    category: "landscaping",
    coverIndex: 0,
    images: [
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.27.jpeg`,      alt: "Garden transform — overview"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.27 (1).jpeg`,  alt: "Garden transform — stage 1"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28.jpeg`,      alt: "Garden transform — stage 2"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (1).jpeg`,  alt: "Garden transform — stage 3"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (2).jpeg`,  alt: "Garden transform — stage 4"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (3).jpeg`,  alt: "Garden transform — stage 5"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (4).jpeg`,  alt: "Garden transform — stage 6"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (5).jpeg`,  alt: "Garden transform — stage 7"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (6).jpeg`,  alt: "Garden transform — stage 8"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (7).jpeg`,  alt: "Garden transform — stage 9"    },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (8).jpeg`,  alt: "Garden transform — stage 10"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (9).jpeg`,  alt: "Garden transform — stage 11"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (10).jpeg`, alt: "Garden transform — stage 12"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (11).jpeg`, alt: "Garden transform — stage 13"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (12).jpeg`, alt: "Garden transform — stage 14"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (13).jpeg`, alt: "Garden transform — stage 15"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (14).jpeg`, alt: "Garden transform — stage 16"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (15).jpeg`, alt: "Garden transform — stage 17"   },
      { src: `${TRANSFORM_BASE}/WhatsApp Image 2026-04-28 at 09.44.28 (16).jpeg`, alt: "Garden transform — finished"   },
    ],
  },
  {
    id: "house-extensions",
    title: "House Extensions",
    description:
      "Groundworks and hard landscaping to complement a house extension project.",
    category: "landscaping",
    coverIndex: 0,
    images: [
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37.jpeg`,      alt: "House extensions landscaping — overview"   },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (1).jpeg`,  alt: "House extensions landscaping — stage 1"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (2).jpeg`,  alt: "House extensions landscaping — stage 2"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (3).jpeg`,  alt: "House extensions landscaping — stage 3"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (4).jpeg`,  alt: "House extensions landscaping — stage 4"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (5).jpeg`,  alt: "House extensions landscaping — stage 5"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (6).jpeg`,  alt: "House extensions landscaping — stage 6"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (7).jpeg`,  alt: "House extensions landscaping — stage 7"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (8).jpeg`,  alt: "House extensions landscaping — stage 8"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (9).jpeg`,  alt: "House extensions landscaping — stage 9"    },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (10).jpeg`, alt: "House extensions landscaping — stage 10"   },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (11).jpeg`, alt: "House extensions landscaping — stage 11"   },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (12).jpeg`, alt: "House extensions landscaping — stage 12"   },
      { src: `${HOUSE_EXT_BASE}/WhatsApp Image 2026-04-28 at 09.45.37 (13).jpeg`, alt: "House extensions landscaping — finished"   },
    ],
  },
  {
    id: "porcelain-patio-lighting",
    title: "Porcelain Patio with Lighting",
    description:
      "Contemporary porcelain patio with integrated outdoor lighting. Large-format tiles laid to a precision finish, with lighting recessed to extend the usable outdoor space into the evening.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${PORC_LIGHT_BASE}/WhatsApp Image 2026-04-28 at 09.56.13.jpeg`,      alt: "Porcelain patio with lighting — overview"  },
      { src: `${PORC_LIGHT_BASE}/WhatsApp Image 2026-04-28 at 09.56.14.jpeg`,      alt: "Porcelain patio with lighting — detail 1"  },
      { src: `${PORC_LIGHT_BASE}/WhatsApp Image 2026-04-28 at 09.56.14 (1).jpeg`,  alt: "Porcelain patio with lighting — detail 2"  },
      { src: `${PORC_LIGHT_BASE}/WhatsApp Image 2026-04-28 at 09.56.14 (2).jpeg`,  alt: "Porcelain patio with lighting — detail 3"  },
      { src: `${PORC_LIGHT_BASE}/WhatsApp Image 2026-04-28 at 09.56.14 (3).jpeg`,  alt: "Porcelain patio with lighting — finished"  },
    ],
  },
  {
    id: "porcelain-tile-garden-transform",
    title: "Porcelain Tile Garden Transform",
    description:
      "Full garden transformation with porcelain tiles, artificial grass, a K-render seating area, and a K-render finish on the back of the house.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36.jpeg`,      alt: "Porcelain tile garden transform — overview"  },
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36 (1).jpeg`,  alt: "Porcelain tile garden transform — stage 1"   },
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36 (2).jpeg`,  alt: "Porcelain tile garden transform — stage 2"   },
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36 (3).jpeg`,  alt: "Porcelain tile garden transform — stage 3"   },
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36 (4).jpeg`,  alt: "Porcelain tile garden transform — stage 4"   },
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36 (5).jpeg`,  alt: "Porcelain tile garden transform — stage 5"   },
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36 (6).jpeg`,  alt: "Porcelain tile garden transform — stage 6"   },
      { src: `${PORC_TILE_BASE}/WhatsApp Image 2026-04-28 at 09.41.36 (7).jpeg`,  alt: "Porcelain tile garden transform — stage 7"   },
      { src: `${PORC_TILE_BASE}/PHOTO-2026-05-19-11-02-38.jpg`,                   alt: "Porcelain tile garden transform — stage 8"   },
      { src: `${PORC_TILE_BASE}/PHOTO-2026-05-19-11-02-38_1.jpg`,                 alt: "Porcelain tile garden transform — stage 9"   },
      { src: `${PORC_TILE_BASE}/PHOTO-2026-05-19-11-02-38_2.jpg`,                 alt: "Porcelain tile garden transform — finished"  },
      { src: `${PORC_TILE_BASE}/porcelain-pic1.jpg`,                 alt: "Porcelain tile garden transform — finished1"  },
      { src: `${PORC_TILE_BASE}/porcelain-pic2.jpg`,                 alt: "Porcelain tile garden transform — finished2"  },
      { src: `${PORC_TILE_BASE}/porcelain-pic3.jpg`,                 alt: "Porcelain tile garden transform — finished3"  },
      { src: `${PORC_TILE_BASE}/porcelain-pic4.jpg`,                 alt: "Porcelain tile garden transform — finished4"  },
      { src: `${PORC_TILE_BASE}/porcelain-pic5.jpg`,                 alt: "Porcelain tile garden transform — finished5"  },
      { src: `${PORC_TILE_BASE}/porcelain-pic6.jpg`,                 alt: "Porcelain tile garden transform — finished6"  },
      { src: `${PORC_TILE_BASE}/porcelain-pic7.jpg`,                 alt: "Porcelain tile garden transform — finished7"  },
      { src: `${PORC_TILE_BASE}/pocelain-pic8.jpg`,                 alt: "Porcelain tile garden transform — finished8"  },
    ],
  },
  {
    id: "resin-driveway-cyprus",
    title: "Resin Driveway — Cyprus",
    description:
      "Resin-bound driveway installation completed in Cyprus. Heat-resistant resin blend applied over a prepared base, delivering a smart, long-lasting finish suited to the Mediterranean climate.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_CY_BASE}/WhatsApp Image 2026-04-28 at 09.57.22.jpeg`,      alt: "Resin driveway Cyprus — overview"  },
      { src: `${RESIN_CY_BASE}/WhatsApp Image 2026-04-28 at 09.57.23.jpeg`,      alt: "Resin driveway Cyprus — detail 1"  },
      { src: `${RESIN_CY_BASE}/WhatsApp Image 2026-04-28 at 09.57.23 (1).jpeg`,  alt: "Resin driveway Cyprus — detail 2"  },
      { src: `${RESIN_CY_BASE}/WhatsApp Image 2026-04-28 at 09.57.23 (2).jpeg`,  alt: "Resin driveway Cyprus — detail 3"  },
      { src: `${RESIN_CY_BASE}/WhatsApp Image 2026-04-28 at 09.57.24.jpeg`,      alt: "Resin driveway Cyprus — finished"  },
    ],
  },
  {
    id: "resin-driveway-k-kerb-planter",
    title: "Resin Driveway with K-Kerb & Planter",
    description:
      "Resin driveway installation finished with crisp K-kerb edging and an integrated planter feature. Clean lines and complementary stone tones elevate the front-of-house appearance.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_KERB_BASE}/WhatsApp Image 2026-04-28 at 09.54.51.jpeg`,      alt: "Resin driveway with K-kerb and planter — overview"  },
      { src: `${RESIN_KERB_BASE}/WhatsApp Image 2026-04-28 at 09.54.51 (1).jpeg`,  alt: "Resin driveway with K-kerb and planter — detail 1"  },
      { src: `${RESIN_KERB_BASE}/WhatsApp Image 2026-04-28 at 09.54.51 (2).jpeg`,  alt: "Resin driveway with K-kerb and planter — detail 2"  },
      { src: `${RESIN_KERB_BASE}/WhatsApp Image 2026-04-28 at 09.54.52.jpeg`,      alt: "Resin driveway with K-kerb and planter — detail 3"  },
      { src: `${RESIN_KERB_BASE}/WhatsApp Image 2026-04-28 at 09.54.52 (1).jpeg`,  alt: "Resin driveway with K-kerb and planter — finished"  },
    ],
  },
  {
    id: "resin-driveway",
    title: "Resin Driveway",
    description:
      "Large-scale resin-bound driveway installation. Full dig-out, MOT sub-base, and resin surface applied to create a seamless, permeable driveway with outstanding kerb appeal.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.53.jpeg`,       alt: "Resin driveway — overview"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.53 (1).jpeg`,   alt: "Resin driveway — stage 1"     },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (4).jpeg`,   alt: "Resin driveway — stage 14"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (5).jpeg`,   alt: "Resin driveway — stage 15"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (6).jpeg`,   alt: "Resin driveway — stage 16"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (7).jpeg`,   alt: "Resin driveway — stage 17"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (9).jpeg`,   alt: "Resin driveway — stage 19"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (10).jpeg`,  alt: "Resin driveway — stage 20"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (16).jpeg`,  alt: "Resin driveway — stage 26"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (17).jpeg`,  alt: "Resin driveway — stage 27"    },
      
      
    ],
  },
  {
    id: "resin-driveway-2",
    title: "Resin Driveway 2",
    description:
      "Second resin driveway installation showcasing a different aggregate blend and layout. Permeable surface installed over a compacted sub-base for a premium, long-lasting result.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_DW2_BASE}/WhatsApp Image 2026-04-28 at 09.53.30.jpeg`,      alt: "Resin driveway 2 — overview"  },
      { src: `${RESIN_DW2_BASE}/WhatsApp Image 2026-04-28 at 09.53.30 (1).jpeg`,  alt: "Resin driveway 2 — stage 1"   },
      { src: `${RESIN_DW2_BASE}/WhatsApp Image 2026-04-28 at 09.53.30 (2).jpeg`,  alt: "Resin driveway 2 — stage 2"   },
      { src: `${RESIN_DW2_BASE}/WhatsApp Image 2026-04-28 at 09.53.30 (3).jpeg`,  alt: "Resin driveway 2 — stage 3"   },
      { src: `${RESIN_DW2_BASE}/WhatsApp Image 2026-04-28 at 09.53.30 (4).jpeg`,  alt: "Resin driveway 2 — stage 4"   },
      { src: `${RESIN_DW2_BASE}/WhatsApp Image 2026-04-28 at 09.53.31.jpeg`,      alt: "Resin driveway 2 — finished"  },
    ],
  },
  {
    id: "resin-entrance-thai-restaurant-cyprus",
    title: "Thai Restaurant Entrance — Cyprus",
    description:
      "Resin-bound entrance installation for a Thai restaurant in Cyprus. Hard-wearing, UV-stable surface finished to an immaculate standard for high-footfall commercial use.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_THAI_BASE}/WhatsApp Image 2026-04-28 at 10.23.15.jpeg`,      alt: "Thai restaurant entrance Cyprus — overview"  },
      { src: `${RESIN_THAI_BASE}/WhatsApp Image 2026-04-28 at 10.23.15 (1).jpeg`,  alt: "Thai restaurant entrance Cyprus — detail 1"  },
      { src: `${RESIN_THAI_BASE}/WhatsApp Image 2026-04-28 at 10.23.15 (2).jpeg`,  alt: "Thai restaurant entrance Cyprus — detail 2"  },
      { src: `${RESIN_THAI_BASE}/WhatsApp Image 2026-04-28 at 10.23.15 (3).jpeg`,  alt: "Thai restaurant entrance Cyprus — detail 3"  },
      { src: `${RESIN_THAI_BASE}/WhatsApp Image 2026-04-28 at 10.23.15 (4).jpeg`,  alt: "Thai restaurant entrance Cyprus — detail 4"  },
      { src: `${RESIN_THAI_BASE}/WhatsApp Image 2026-04-28 at 10.23.15 (5).jpeg`,  alt: "Thai restaurant entrance Cyprus — finished"  },
    ],
  },
  {
    id: "resin-front-patio-planters",
    title: "Resin Front Patio & Planters",
    description:
      "Resin-bound front patio with matching planter surrounds. Cohesive design ties the surfacing and landscaping together for a polished, low-maintenance front garden.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.38.58.jpeg`,      alt: "Resin front patio and planters — overview"  },
      { src: `${RESIN_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.38.58 (1).jpeg`,  alt: "Resin front patio and planters — stage 1"   },
      { src: `${RESIN_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.38.58 (2).jpeg`,  alt: "Resin front patio and planters — stage 2"   },
      { src: `${RESIN_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.38.58 (3).jpeg`,  alt: "Resin front patio and planters — stage 3"   },
      { src: `${RESIN_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.38.58 (4).jpeg`,  alt: "Resin front patio and planters — stage 4"   },
      { src: `${RESIN_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.38.58 (5).jpeg`,  alt: "Resin front patio and planters — stage 5"   },
      { src: `${RESIN_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.38.58 (6).jpeg`,  alt: "Resin front patio and planters — finished"  },
    ],
  },
  {
    id: "resin-pool-cyprus",
    title: "Resin Pool Surround — Cyprus",
    description:
      "Resin-bound pool surround installed in Cyprus. Slip-resistant, water-tolerant surface laid around the pool perimeter, providing a safe, attractive finish that withstands the heat.",
    category: "resin",
    coverIndex: 0,
    images: [
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.56.36.jpeg`,      alt: "Resin pool surround Cyprus — overview"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.56.36 (1).jpeg`,  alt: "Resin pool surround Cyprus — detail 1"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.56.36 (2).jpeg`,  alt: "Resin pool surround Cyprus — detail 2"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.56.37.jpeg`,      alt: "Resin pool surround Cyprus — detail 3"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 10.18.41.jpeg`,      alt: "Resin pool surround Cyprus — detail 4"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 10.19.58.jpeg`,      alt: "Resin pool surround Cyprus — detail 5"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 10.19.59.jpeg`,      alt: "Resin pool surround Cyprus — detail 6"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 10.19.59 (1).jpeg`,  alt: "Resin pool surround Cyprus — detail 7"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (18).jpeg`,  alt: "Resin pool surround Cyprus — detail 8"   },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (19).jpeg`,  alt: "Resin pool surround Cyprus — detail 9"   },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (20).jpeg`,  alt: "Resin pool surround Cyprus — detail 10"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (21).jpeg`,  alt: "Resin pool surround Cyprus — detail 11"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (22).jpeg`,  alt: "Resin pool surround Cyprus — detail 12"  },
      { src: `${RESIN_POOL_BASE}/WhatsApp Image 2026-04-28 at 10.19.59 (2).jpeg`,  alt: "Resin pool surround Cyprus — finished"  },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (3).jpeg`,   alt: "Resin driveway — stage 13"    },
      { src: `${RESIN_DW_BASE}/WhatsApp Image 2026-04-28 at 09.44.54 (2).jpeg`,   alt: "Resin driveway — stage 12"    },
      
    ],
  },
  {
    id: "sandstone-patio-artificial-grass",
    title: "Sandstone Patio with Artificial Grass",
    description:
      "Sandstone patio paired with premium artificial grass for the perfect balance of natural stone and low-maintenance lawn. Crisp edging and tight jointing throughout.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51.jpeg`,      alt: "Sandstone patio with artificial grass — overview"  },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (1).jpeg`,  alt: "Sandstone patio with artificial grass — stage 1"   },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (2).jpeg`,  alt: "Sandstone patio with artificial grass — stage 2"   },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (3).jpeg`,  alt: "Sandstone patio with artificial grass — stage 3"   },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (4).jpeg`,  alt: "Sandstone patio with artificial grass — stage 4"   },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (5).jpeg`,  alt: "Sandstone patio with artificial grass — stage 5"   },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (6).jpeg`,  alt: "Sandstone patio with artificial grass — stage 6"   },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (7).jpeg`,  alt: "Sandstone patio with artificial grass — stage 7"   },
      { src: `${SS_GRASS_BASE}/WhatsApp Image 2026-04-28 at 10.00.51 (8).jpeg`,  alt: "Sandstone patio with artificial grass — finished"  },
    ],
  },
  {
    id: "sandstone-patio",
    title: "Sandstone Patio",
    description:
      "Extensive sandstone patio installation with full sub-base preparation, mortar bedding, and precision pointing. A classic natural stone finish built to last decades.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.52.jpeg`,       alt: "Sandstone patio — overview"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.54.jpeg`,       alt: "Sandstone patio — stage 1"    },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.54 (1).jpeg`,   alt: "Sandstone patio — stage 2"    },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.54 (2).jpeg`,   alt: "Sandstone patio — stage 3"    },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.54 (3).jpeg`,   alt: "Sandstone patio — stage 4"    },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.54 (4).jpeg`,   alt: "Sandstone patio — stage 5"    },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.54 (5).jpeg`,   alt: "Sandstone patio — stage 6"    },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.54 (6).jpeg`,   alt: "Sandstone patio — stage 7"    },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59.jpeg`,       alt: "Sandstone patio — stage 14"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (1).jpeg`,   alt: "Sandstone patio — stage 15"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (2).jpeg`,   alt: "Sandstone patio — stage 16"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (3).jpeg`,   alt: "Sandstone patio — stage 17"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (4).jpeg`,   alt: "Sandstone patio — stage 18"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (5).jpeg`,   alt: "Sandstone patio — stage 19"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (6).jpeg`,   alt: "Sandstone patio — stage 20"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (7).jpeg`,   alt: "Sandstone patio — stage 21"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (8).jpeg`,   alt: "Sandstone patio — stage 22"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (9).jpeg`,   alt: "Sandstone patio — stage 23"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (10).jpeg`,  alt: "Sandstone patio — stage 24"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (11).jpeg`,  alt: "Sandstone patio — stage 25"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (12).jpeg`,  alt: "Sandstone patio — stage 26"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (13).jpeg`,  alt: "Sandstone patio — stage 27"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.45.59 (14).jpeg`,  alt: "Sandstone patio — stage 28"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.46.00.jpeg`,       alt: "Sandstone patio — stage 29"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.46.00 (1).jpeg`,   alt: "Sandstone patio — stage 30"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.46.00 (2).jpeg`,   alt: "Sandstone patio — stage 31"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.46.00 (3).jpeg`,   alt: "Sandstone patio — stage 32"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.46.00 (4).jpeg`,   alt: "Sandstone patio — stage 33"   },
      { src: `${SS_PATIO_BASE}/WhatsApp Image 2026-04-28 at 09.46.00 (5).jpeg`,   alt: "Sandstone patio — finished"   },
    ],
  },
  {
    id: "indian-sandstone-patio-bbq-transformation",
    title: "Indian Sandstone Patio & BBQ Garden Transformation",
    description:
      "Full garden transformation featuring an Indian sandstone patio, artificial grass, detailed brick walls, a brick-built garden fire and a brick-built BBQ area with lighting.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-13.jpg`,    alt: "Indian sandstone patio and BBQ transformation — overview"    },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-13_1.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 1"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-13_2.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 2"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-13_3.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 3"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14.jpg`,    alt: "Indian sandstone patio and BBQ transformation — stage 4"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_1.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 5"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_2.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 6"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_3.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 7"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_4.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 8"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_5.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 9"     },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_6.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 10"    },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_7.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 11"    },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_8.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 12"    },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_9.jpg`,  alt: "Indian sandstone patio and BBQ transformation — stage 13"    },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_10.jpg`, alt: "Indian sandstone patio and BBQ transformation — stage 14"    },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-19-10-42-14_11.jpg`, alt: "Indian sandstone patio and BBQ transformation — stage 15"    },
      { src: `${SS_BBQ_BASE}/PHOTO-2026-05-22-05-37-21.jpg`,    alt: "Indian sandstone patio and BBQ transformation — finished"    },
    ],
  },
  {
    id: "grey-kandla-sandstone-patio-aircon",
    title: "Grey Kandla Sandstone Patio, Fencing & Air Con",
    description:
      "Full garden transformation featuring a grey Kandla Indian sandstone patio and new fencing, with a new air conditioning system fitted inside the house.",
    category: "patios",
    coverIndex: 0,
    images: [
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-38.jpg`,    alt: "Grey Kandla sandstone patio and air con — overview"  },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-38_1.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 1"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-38_2.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 2"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-38_3.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 3"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-38_4.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 4"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-39.jpg`,    alt: "Grey Kandla sandstone patio and air con — stage 5"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-39_1.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 6"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-39_2.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 7"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-39_3.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 8"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-34-39_4.jpg`,  alt: "Grey Kandla sandstone patio and air con — stage 9"   },
      { src: `${GREY_KANDLA_BASE}/PHOTO-2026-05-22-05-37-21.jpg`,    alt: "Grey Kandla sandstone patio and air con — finished"  },
    ],
  },
];
