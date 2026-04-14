import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppWidget />
      <StickyMobileCTA />
    </>
  );
}
