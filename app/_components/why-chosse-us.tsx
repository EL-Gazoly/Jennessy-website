import { Badge } from "@/components/ui/badge";
import Pattern from "@/public/pattern.svg";
import Image from "next/image";
import TypingEffect from "@/hooks/use-typing-effect";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const { ref, isInView } = useInView();
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };
  const pVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative mt-14 md:mt-28" ref={ref}>
      <div className="absolute inset-0 opacity-20">
        <Image src={Pattern} alt="Pattern" layout="fill" objectFit="cover" />
      </div>
      <div className="relative p-4 lg:px-10 xl:px-20 flex flex-col gap-y-7 z-10 pb-20 lg:pb-28">
        <Badge className="rounded-lg text-base font-normal lg:text-lg">
          Experience the Jennesy advantage today.
        </Badge>
        <h2 className="text-white text-3xl font-extrabold xl:text-5xl">
          {isInView && (
            <TypingEffect
              text="  Why Choose Us:"
              speed={100}
              isTypingComplete={isTypingComplete}
              onComplete={handleTypingComplete}
            />
          )}
        </h2>
        <motion.p
          className="text-white text-xl font-semibold leading-[125%] mt-2 lg:mt-5 lg:text-3xl"
          initial="hidden"
          animate={isTypingComplete && isInView ? "visible" : "hidden"}
          variants={pVariants}
        >
          <span className="text-[26px] text-[#007AFF] lg:text-4xl">A</span>re
          you a real estate professional striving for excellence? Partner with
          us for support in wholesaling, fixing and flipping, and property
          acquisitions, elevating your business to new heights.
        </motion.p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
