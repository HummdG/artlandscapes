import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse ARTLandscapes' portfolio — Indian sandstone patios, artificial grass, resin driveways, turfing and landscaping across Kent, Essex, Surrey and South East England.",
  openGraph: {
    url: "https://artlandscapes.co.uk/gallery",
    images: [
      {
        url: "/assets/artlandscapes/gallery/carousel/img1.png",
        width: 1200,
        height: 800,
        alt: "ARTLandscapes project portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://artlandscapes.co.uk/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryClient />
      <Footer />
    </>
  );
}
