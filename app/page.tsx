"use client";
import HeroSecontion from "./_components/hero-section";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function Home() {
  return (
    <Parallax pages={2} className=" w-full h-full">
      <ParallaxLayer offset={0} className=" bg-main-gradient">
        <HeroSecontion />
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <HeroSecontion />
      </ParallaxLayer>
    </Parallax>
  );
}
