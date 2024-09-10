import { Badge } from "@/components/ui/badge";
import ServiceCard from "./service-card";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import TypingEffect from "@/hooks/use-typing-effect";
import { useInView } from "framer-motion";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const cardVariantsFromAbove = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariantsFromBelow = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="w-full h-full flex flex-col p-4 lg:px-10 xl:px-20 mt-16"
      ref={ref}
    >
      <Badge className="bg-gray-700 text-[#31C48D] font-normal w-fit text-[11.5px] xl:text-lg mb-3 rounded-lg">
        Entrust the task of list generation to our team of experts
      </Badge>
      <h2 className="text-3xl font-extrabold mb-6">
        {isInView && (
          <TypingEffect
            text="  Services:"
            speed={100}
            isTypingComplete={isTypingComplete}
            onComplete={handleTypingComplete}
          />
        )}
      </h2>
      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
        <motion.div
          className="xl:col-span-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariantsFromAbove}
        >
          <ServiceCard
            badge="Uncover Hidden Profits: The Key Tool for Top Real Estate Agents"
            title="Data management"
            body="We excel in developing tailored lists that align perfectly with your specific objectives and deliver them with promptness and precision. Our approach ensures both efficiency and effectiveness in achieving your strategic goals."
            badgeColor="green"
          />
        </motion.div>
        <motion.div
          className="xl:col-span-3"
          initial="hidden"
          animate={isInView && isInView ? "visible" : "hidden"}
          variants={cardVariantsFromAbove}
        >
          <ServiceCard
            badge="Streamlined Success: Effortless Dispositions, Expert ROI Maximization"
            title="Cold Calling"
            body="Transform your real estate operations with the expertise of our cold-calling professionals. We provide targeted, high-quality leads that match your strategic objectives, keeping your pipeline robust with valuable opportunities. Experience streamlined success through our efficient lead generation and refined ROI strategies."
            badgeColor="purple"
          />
        </motion.div>
        <motion.div
          className="xl:col-span-3"
          initial="hidden"
          animate={isInView && isInView ? "visible" : "hidden"}
          variants={cardVariantsFromBelow}
        >
          <ServiceCard
            badge="Streamlined Success: Effortless Dispositions, Expert ROI Maximization"
            title="Real Estate Acquisition & Disposition"
            body="Rely on us for all your real estate acquisition needs. We specialize in skilled negotiations to enhance your ROI and manage property dispositions with efficiency and accuracy, ensuring swift and effective deal closures. Experience streamlined success with seamless dispositions and expert ROI optimization."
            badgeColor="purple"
          />
        </motion.div>
        <motion.div
          className="xl:col-span-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariantsFromBelow}
        >
          <ServiceCard
            badge="Speed up finding the right contacts with our expert skip tracing services."
            title="Skip Tracing"
            body="Expedite your search for key contacts with our expert skip tracing services. We specialize in identifying hard-to-reach individuals and delivering precise, current contact information to optimize your outreach efforts."
            badgeColor="green"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
