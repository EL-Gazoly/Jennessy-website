"use client";
import AboutUsSection from "./_components/aboutus-section";
import HeroSecontion from "./_components/hero-section";
import OurTargtedAudianceSection from "./_components/our-targeted-audiance-section";
import PricesSection from "./_components/prices/prices-section";
import ServicesSection from "./_components/services-section";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import WhyChooseUs from "./_components/why-chosse-us";
import ContactUsSection from "./_components/contact/contact-us-section";
import Footer from "./_components/footer";
import { useWindowSize } from "usehooks-ts";

export default function Home() {
  const { width = 0, height = 0 } = useWindowSize();
  return (
    <div className="w-full h-full">
      {/* Parallax effect only for the Hero section */}
      <div className="relative w-full h-screen">
        <Parallax pages={1} className="w-full h-full">
          <ParallaxLayer offset={0} className="bg-main-gradient">
            <HeroSecontion />
          </ParallaxLayer>
        </Parallax>
      </div>

      {/* Regular sections without parallax */}
      <div className="flex flex-col">
        <AboutUsSection />
        <ServicesSection />
        <OurTargtedAudianceSection />
        <PricesSection />
        <WhyChooseUs />
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
}
