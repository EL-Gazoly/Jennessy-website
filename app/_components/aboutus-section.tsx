"use client";
import BuildingImage from "@/public/building.svg";
import Image from "next/image";
import ClapperboardPlay from "@/public/clapperboard-play.svg";
import { Badge } from "@/components/ui/badge";
import { MoveRightIcon } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import TypingEffect from "@/hooks/use-typing-effect";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollShadow } from "@nextui-org/react";
const AboutUsSection = () => {
  const { ref, isInView } = useInView();
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className={cn(
        "flex flex-row flex-wrap lg:flex-nowrap gap-x-10 xl:gap-x-20 items-center justify-center  p-4 lg:px-10 xl:px-20 transition-opacity duration-1000 ease-in-out"
      )}
      ref={ref}
    >
      <div className="relative w-full h-[344px] max-w-[737px]">
        <Image
          src={BuildingImage}
          alt="Building"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-[#111928]/60 rounded-lg px-8 flex flex-col py-7">
          <div className="w-full h-full flex flex-col lg:hidden items-center justify-center">
            <div>
              <Badge className="text-[#D09138] bg-[#D09138]/25 mb-2">
                Watch our story
              </Badge>
              <h3 className="text-2xl font-extrabold mb-1">About US</h3>
              <p className="text-sm mb-6">
                {isClient ? (
                  <p>
                    Are you a knowledgeable real estate professional aiming to
                    excel in your market? Your search ends here! At JENNESSY, we
                    go beyond being a mere call center, we serve as your
                    strategic ally in achieving success.
                  </p>
                ) : null}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col max-w-[500px] justify-center mt-12">
        <Badge className="text-[#D09138] bg-[#D09138]/25 mb-2 hover:bg-[#D09138]/50 w-fit">
          Get to know use well
        </Badge>
        <h3 className="text-2xl font-extrabold mb-1">
          {isInView && (
            <TypingEffect
              text="  About Us"
              speed={100}
              isTypingComplete={isTypingComplete}
              onComplete={handleTypingComplete}
            />
          )}
        </h3>
        <motion.p
          className="text-sm mb-6 leading-7 transition-all duration-700"
          initial="hidden"
          animate={isTypingComplete && isInView ? "visible" : "hidden"}
          variants={pVariants}
        >
          {isClient ? (
            <p>
              Are you a knowledgeable real estate professional aiming to excel
              in your market? Your search ends here! At JENNESSY, we go beyond
              being a mere call center, we serve as your strategic ally in
              achieving success.
            </p>
          ) : null}
        </motion.p>
        <div className="flex items-center gap-x-2 text-brand-400 font-medium text-base"></div>
      </div>
    </div>
  );
};

export default AboutUsSection;
