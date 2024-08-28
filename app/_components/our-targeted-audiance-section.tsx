import Pattern from "@/public/pattern.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import TargetAudianceCard from "./target-audiance-card";
import { useInView } from "@/hooks/use-in-view";
import TypingEffect from "@/hooks/use-typing-effect";
import { useState } from "react";
import { motion } from "framer-motion";

const OurTargtedAudianceSection = () => {
  const { ref, isInView } = useInView();
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const cardVariants = [
    {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.7, ease: "easeOut" },
      },
    },
    {
      hidden: { y: -100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.3, duration: 0.7, ease: "easeOut" },
      },
    },
    {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.4, duration: 0.7, ease: "easeOut" },
      },
    },
    {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5, duration: 0.7, ease: "easeOut" },
      },
    },
    {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.6, duration: 0.7, ease: "easeOut" },
      },
    },
  ];

  return (
    <div className="w-full h-full relative mt-14" ref={ref}>
      <div className="absolute inset-0 opacity-20">
        <Image src={Pattern} alt="Pattern" fill className="object-cover" />
      </div>
      <div className="relative w-full flex flex-col gap-4 p-4 px-11 md:px-4 lg:px-10 xl:px-20 z-10">
        <Badge className="text-base xl:text-lg w-fit rounded-lg font-normal text-[#31C48D]">
          Our Targeted Audience
        </Badge>
        <h2 className="text-3xl font-extrabold 2xl:text-5xl">
          {isInView && (
            <TypingEffect
              text="  Who We Serve:"
              speed={100}
              onComplete={handleTypingComplete}
            />
          )}
        </h2>
        <div className="mt-6 md:mt-8 xl:mt-14 max-w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-8">
          {[
            {
              title: "Roofing Companies",
              body: "We provide leads for homeowners in need of roofing services.",
            },
            {
              title: "Real Estate Agents",
              body: "We help increase your listings and set more appointments.",
            },
            {
              title: "Buy & Hold Investors",
              body: "We create campaigns to help you acquire more properties.",
            },
            {
              title: "Fix & Flippers",
              body: "We find prime zip codes and off-market deals for profitable flips.",
            },
            {
              title: "Sellers & Wholesalers",
              body: "We identify top markets and distressed sellers, providing over 100 leads daily.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isTypingComplete && isInView ? "visible" : "hidden"}
              variants={cardVariants[index]}
            >
              <TargetAudianceCard title={card.title} body={card.body} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTargtedAudianceSection;
