import { Badge } from "@/components/ui/badge";
import Pattern from "@/public/pattern.svg";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";
import { motion } from "framer-motion";
import WhyChooseUsCard from "./why-choose-us-card";
import Proven from "@/public/proven.svg";
import specialized from "@/public/specialized.svg";
import Dedicated from "@/public/dedicated.svg";
import Cutting from "@/public/cutting.svg";

const WhyChooseUs = () => {
  const { ref, isInView } = useInView();
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [cursor, setCursor] = useState(true);

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
    <div className="relative mt-14 md:mt-28" ref={ref}>
      <div className="absolute inset-0 opacity-20">
        <Image src={Pattern} alt="Pattern" layout="fill" objectFit="cover" />
      </div>
      <div className="relative p-4 lg:px-10 xl:px-20 flex flex-col gap-y-7 z-10 pb-20 lg:pb-28">
        <Badge className="rounded-lg text-base font-normal lg:text-lg">
          Experience the Jennessy advantage today.
        </Badge>
        <h2 className="text-white text-3xl font-extrabold xl:text-5xl">
          {isInView && (
            <TypeAnimation
              sequence={[
                "Why Choose Us:",
                () => {
                  setIsTypingComplete(true);
                  setCursor(false);
                },
              ]}
              speed={10}
              cursor={cursor}
            />
          )}
        </h2>
        <motion.p
          className="text-white text-xl font-semibold leading-[125%] mt-2 lg:mt-5 lg:text-[23px]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={pVariants}
        >
          <span className="text-lg text-[#007AFF] lg:text-2xl">D</span>edicated
          to real estate excellence? Join forces with us to refine your
          wholesaling, property flipping, acquisition efforts and elevate your
          business to unprecedented levels. Experience the Jennessy advantage
          today.
        </motion.p>

        <div className="mt-9 md:mt-16 lg:mt-14 gap-y-5 gap-x-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center justify-items-center sm:justify-items-start md:justify-items-center xl:justify-around">
          {[
            "Specialized Expertise",
            "Proven Results",
            "Dedicated Support",
            "Cutting-Edge Technology",
          ].map((title, index) => (
            <motion.div
              key={title}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <WhyChooseUsCard
                icon={
                  title === "Specialized Expertise"
                    ? specialized
                    : title === "Proven Results"
                    ? Proven
                    : title === "Dedicated Support"
                    ? Dedicated
                    : Cutting
                }
                title={title}
                body={
                  title === "Specialized Expertise"
                    ? "Unlike generic call centers, we focus exclusively on the real estate market, ensuring we understand your unique needs and challenges."
                    : title === "Proven Results"
                    ? "Our approach is data-driven and results-oriented, helping clients achieve a significant return on investment."
                    : title === "Dedicated Support"
                    ? "We provide personalized support, weekly updates and meetings to keep you informed about the progress of your campaigns."
                    : "Utilizing the latest in CRM and call-tracking technology, we maximize efficiency and effectiveness in every campaign."
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
