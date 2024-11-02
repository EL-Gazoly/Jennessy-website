import { Badge } from "@/components/ui/badge";
import Calendery from "@/public/calendery.svg";
import CalenderyLarage from "@/public/calendery-pc.svg";
import LinearPattern from "@/public/linear-pattern.svg";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const ContactUsSection = () => {
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

  return (
    <div
      className="mt-14 h-full w-full  flex flex-col gap-y-4 p-4 lg:px-10 xl:px-20"
      ref={ref}
    >
      <Badge className="rounded-lg text-base font-normal lg:text-lg">
        Get in Touch
      </Badge>
      <h2 className="text-white text-3xl font-extrabold xl:text-5xl">
        {isInView && (
          <TypeAnimation
            sequence={[
              "Contact Us:",
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
        className="text-white text-xl font-semibold leading-[125%] mt-2.5 lg:mt-5 lg:text-[23px]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={pVariants}
      >
        <span className="text-[26px] text-[#007AFF] lg:text-2xl">R</span>eady to
        secure a list of motivated sellers and propel your real estate business
        to new heights? Get in touch with us today to find out how Jennessy can
        support you in generating top-tier leads and expanding your client
        network. Let’s connect.
      </motion.p>

      <div className="relative flex w-full h-full items-center justify-center mt-12 md:mt-[77px] lg:mt-[107px] mb-[70px]">
        <div className="absolute inset-0 self-center justify-self-center">
          <Image
            src={LinearPattern}
            alt="LinearPattern"
            className="object-cover"
          />
        </div>
        <div className="z-10 max-w-[1100px] h-auto  self-center w-full p-4 bg-white rounded-md">
          <InlineWidget
            url="https://calendly.com/jennessy-support/30min"
            styles={{
              minHeight: "auto",
              height: "700px",
              minWidth: "326px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
