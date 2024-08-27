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
1;
export default function Home() {
  return (
    <Parallax pages={12} className=" w-full h-full">
      <ParallaxLayer offset={0} className=" bg-main-gradient">
        <HeroSecontion />
      </ParallaxLayer>
      <ParallaxLayer offset={1} factor={11}>
        <div className=" flex flex-col">
          <AboutUsSection />
          <ServicesSection />
          <OurTargtedAudianceSection />
          <PricesSection />
          <WhyChooseUs />
          <ContactUsSection />
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
