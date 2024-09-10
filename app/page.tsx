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
import { useElementDimensions } from "@/hooks/use-elements-dimentions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./_components/Header";
import { MobileHeader } from "./_components/Mobile/MobileHeader";

export default function Home() {
  const { ref, dimensions } = useElementDimensions();
  return (
    <div className=" w-full h-full flex flex-col">
      <Header />
      <MobileHeader />
      <div className="w-full h-full bg-[#111928] relative z-10 ">
        <div className="relative w-full h-screen">
          <Parallax pages={1} className="w-full h-full">
            <ParallaxLayer offset={0} className="bg-main-gradient">
              <HeroSecontion />
            </ParallaxLayer>
          </Parallax>
        </div>

        {/* Regular sections with IDs */}
        <div className="flex flex-col relative">
          <section id="about-us">
            <AboutUsSection />
          </section>
          <section id="services">
            <ServicesSection />
          </section>
          <section id="our-targeted-audience">
            <OurTargtedAudianceSection />
          </section>
          <section id="prices">
            <PricesSection />
          </section>
          <section id="why-choose-us">
            <WhyChooseUs />
          </section>
          <section id="contact-us">
            <ContactUsSection />
          </section>
          <Footer refernce={ref} />
        </div>
      </div>
    </div>
  );
}
