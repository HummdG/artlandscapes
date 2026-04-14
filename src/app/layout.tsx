import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#2C3B36",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://artlandscapes.co.uk"),
  title: {
    default:
      "ARTLandscapes | Expert Driveways, Patios & Landscaping — South East England",
    template: "%s | ARTLandscapes",
  },
  description:
    "Premium driveways, patios, resin, block paving, artificial grass, fencing, concreting, footings and tarmac across Kent, Essex, Sussex, Surrey, Hampshire, Berkshire and London. Free quotes available.",
  keywords: [
    "driveways",
    "patios",
    "resin driveways",
    "block paving",
    "artificial grass",
    "fencing",
    "tarmac",
    "landscaping",
    "groundwork",
    "Kent",
    "Essex",
    "Surrey",
    "Sussex",
    "South East England",
    "London",
  ],
  authors: [{ name: "ARTLandscapes" }],
  creator: "ARTLandscapes",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://artlandscapes.co.uk",
    siteName: "ARTLandscapes",
    title: "ARTLandscapes | Driveways, Patios & Landscaping Specialists",
    description:
      "Professional driveways, patios, fencing, resin, tarmac and landscaping services with high-quality workmanship and a premium finish.",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "ARTLandscapes — Expert Groundwork & Landscaping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTLandscapes | Expert Groundwork & Landscaping",
    description:
      "Premium driveways, patios, resin, fencing and landscaping across South & South East England.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ARTLandscapes",
  description:
    "Expert groundwork and landscaping services across South & South East England",
  url: "https://artlandscapes.co.uk",
  telephone: "+447703357185",
  email: "ashley@artlandscapes.co.uk",
  address: {
    "@type": "PostalAddress",
    addressRegion: "South East England",
    addressCountry: "GB",
  },
  areaServed: [
    "Kent",
    "Essex",
    "Sussex",
    "Surrey",
    "Hampshire",
    "Berkshire",
    "London",
    "Dover",
  ],
  serviceType: [
    "Driveways",
    "Patios",
    "Resin",
    "Block Paving",
    "Artificial Grass",
    "Fencing",
    "Concreting",
    "Footings",
    "Tarmac",
  ],
  priceRange: "££",
  sameAs: [
    "https://www.facebook.com/747414905127730",
    "https://www.instagram.com/artlandscapes__",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans bg-cream text-charcoal antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
