import { Badge } from "@/components/ui/badge";
import PricePlanCard from "./price-plan-card";
import TypingEffect from "@/hooks/use-typing-effect";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";
import { motion } from "framer-motion";

const PricesSection = () => {
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
  ];

  return (
    <div
      className="p-4 lg:px-10 xl:px-20 flex flex-col gap-y-4 mt-20"
      ref={ref}
    >
      <Badge className="rounded-lg text-base font-normal lg:text-lg">
        Find the Perfect Plan for Your Journey
      </Badge>
      <h2 className="text-white text-3xl font-extrabold xl:text-5xl">
        {isInView && (
          <TypingEffect
            text="  Pricing:"
            speed={100}
            isTypingComplete={isTypingComplete}
            onComplete={handleTypingComplete}
          />
        )}
      </h2>
      <div className="mt-9 lg:mt-12 flex flex-wrap gap-5 lg:gap-8 xl:gap-10 justify-center lg:justify-start xl:justify-around">
        {[
          {
            name: "Essential",
            price: "$1050",
            features: [
              { name: "Experienced cold caller", isAvailable: true },
              { name: "Quality control management", isAvailable: true },
              { name: "Weekly reports", isAvailable: true },
              { name: "Client success manager", isAvailable: true },
              { name: "Data pulling – 15k records", isAvailable: false },
              { name: "Data skiptracing – 15k records", isAvailable: false },
              { name: "Readymode dialer", isAvailable: false },
            ],
          },
          {
            name: "Standard",
            price: "$1700",
            features: [
              { name: "Experienced cold caller", isAvailable: true },
              { name: "Quality control management", isAvailable: true },
              { name: "Weekly reports", isAvailable: true },
              { name: "Client success manager", isAvailable: true },
              { name: "Data pulling – 15k records", isAvailable: true },
              { name: "Data skiptracing – 15k records", isAvailable: true },
              { name: "Readymode dialer", isAvailable: true },
            ],
          },
          {
            name: "Gold",
            price: "$2800",
            features: [
              { name: "Experienced cold caller", isAvailable: true },
              { name: "Quality control management", isAvailable: true },
              { name: "Weekly reports", isAvailable: true },
              { name: "Client success manager", isAvailable: true },
              { name: "Data pulling – 30k records", isAvailable: true },
              { name: "Data skiptracing – 30k records", isAvailable: true },
              { name: "Readymode dialer", isAvailable: true },
            ],
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isTypingComplete && isInView ? "visible" : "hidden"}
            variants={cardVariants[index]}
          >
            <PricePlanCard
              name={card.name}
              price={card.price}
              features={card.features}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricesSection;
