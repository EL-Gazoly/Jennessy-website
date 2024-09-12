import Pattern from "@/public/pattern.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import TargetAudianceCard from "./target-audiance-card";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import TypingEffect from "@/hooks/use-typing-effect";
import { useState } from "react";
import RoofingIcon from "@/public/roofting.svg";
import RealEstateIcon from "@/public/real-state.svg";
import BuyHoldIcon from "@/public/buy-hold.svg";
import FixFlipIcon from "@/public/fix-flippers.svg";
import SellersIcon from "@/public/salers.svg";

const OurTargtedAudianceSection = () => {
  const { ref, isInView } = useInView();
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

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
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <TargetAudianceCard
              image={RoofingIcon}
              title="Roofing Companies"
              body="Our service delivers qualified leads to homeowners requiring roofing solutions."
            />
          </motion.div>
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <TargetAudianceCard
              image={RealEstateIcon}
              title="Real Estate Agents"
              body="Our approach focuses on elevating your listing performance and optimizing the scheduling of appointments."
            />
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <TargetAudianceCard
              image={BuyHoldIcon}
              title="Buy & Hold Investors"
              body="We develop targeted campaigns designed to assist buy-and-hold investors in acquiring additional properties."
            />
          </motion.div>
          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <TargetAudianceCard
              image={FixFlipIcon}
              title="Fix & Flippers"
              body="We source prime zip codes and exclusive off-market deals to facilitate profitable fix-and-flip projects."
            />
          </motion.div>
          <motion.div
            custom={4}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <TargetAudianceCard
              image={SellersIcon}
              title="Sellers & Wholesalers"
              body="We identify top markets and distressed sellers, providing over 100 leads daily."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurTargtedAudianceSection;
