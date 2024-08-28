import { Badge } from "@/components/ui/badge";
import Calendery from "@/public/calendery.svg";
import CalenderyLarage from "@/public/calendery-pc.svg";
import LinearPattern from "@/public/linear-pattern.svg";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import TypingEffect from "@/hooks/use-typing-effect";
import { useState } from "react";

const ContactUsSection = () => {
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
    <div
      className="mt-14 flex flex-col gap-y-4 p-4 lg:px-10 xl:px-20"
      ref={ref}
    >
      <Badge className="rounded-lg text-base font-normal lg:text-lg">
        Get in Touch
      </Badge>
      <h2 className="text-white text-3xl font-extrabold xl:text-5xl">
        {isInView && (
          <TypingEffect
            text="  Contact Us:"
            speed={100}
            onComplete={handleTypingComplete}
            isTypingComplete={isTypingComplete}
          />
        )}
      </h2>
      {isTypingComplete && (
        <motion.p
          className="text-white text-xl font-semibold leading-[125%] mt-2.5 lg:mt-5 lg:text-3xl"
          initial="hidden"
          animate={isTypingComplete && isInView ? "visible" : "hidden"}
          variants={pVariants}
        >
          <span className="text-[26px] text-[#007AFF] lg:text-4xl">D</span>o you
          need to pull a list of motivated sellers? Ready to take your real
          estate business to the next level? Contact us today to learn how
          Jennesy can help you generate high-quality leads and grow your client
          base. Let’s start a conversation
        </motion.p>
      )}
      <div className="relative flex w-full h-full items-center justify-center mt-12 md:mt-[77px] lg:mt-[107px]">
        <div className="absolute inset-0 self-center justify-self-center">
          <Image
            src={LinearPattern}
            alt="LinearPattern"
            className="object-cover"
          />
        </div>
        <div className="z-10 max-w-[895px] max-h-[800px] self-center w-full h-full">
          <InlineWidget url="https://calendly.com/jennessy-support/30min" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
