"use client";
import AboutUsSection from "./_components/aboutus-section";
import HeroSecontion from "./_components/hero-section";
import OurTargtedAudianceSection from "./_components/our-targeted-audiance-section";
import ServicesSection from "./_components/services-section";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function Home() {
  return (
    <Parallax pages={5} className=" w-full h-full">
      <ParallaxLayer offset={0} className=" bg-main-gradient">
        <HeroSecontion />
      </ParallaxLayer>
      <ParallaxLayer offset={1} factor={4}>
        <div className=" flex flex-col">
          <AboutUsSection />
          <ServicesSection />
          <OurTargtedAudianceSection />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
