"use client";
import Image from "next/image";
import Pattern from "@/public/pattern.svg";
import { MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView, motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import { useDisclosure } from "@nextui-org/react";
import SendEmailModel from "./send-email-model";
import { TypeAnimation } from "react-type-animation";
import { toast } from "sonner";
const HeroSecontion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { width = 0, height = 0 } = useWindowSize();
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();
  const [emailValue, setEmailValue] = useState("");

  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handelSubmit = () => {
    //check if email is valid with regex
    //send email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(emailValue)) {
      toast.error("Please enter a valid email address");
      return;
    }
    onOpenChange();
  };

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
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

  const grandParentDivVariants = {
    hidden: { width: "60px", opacity: 0 },
    visible: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const parentDivVariants = {
    hidden: { width: "60px", opacity: 0 },
    visible: {
      width: "auto",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const inputVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: width > 768 ? "283px" : "227px",
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className={cn(
        " w-full h-full flex flex-col relative  transition-all duration-300 overflow-y-hidden"
      )}
      ref={ref}
    >
      <div className="absolute inset-0 z-10 ">
        <Image src={Pattern} alt="pattern" layout="fill" objectFit="cover" />
      </div>
      <div
        className={cn(
          " flex flex-col w-full z-20  h-full justify-between transition-all duration-150 mt-5"
        )}
      >
        <div className="w-full flex-1 flex flex-col items-center justify-center gap-y-6 px-4">
          <h1
            className={cn(
              "text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white text-center leading-9",
              !isTypingComplete && " mb-36"
            )}
          >
            <TypeAnimation
              sequence={[
                "Where Service Meets Success", // Types the text
                () => {
                  setIsTypingComplete(true); // Sets isTypingComplete to true
                },
              ]}
              speed={10}
            />
          </h1>
          {isTypingComplete && (
            <>
              <motion.p
                className="text-[#D1D5DB] text-center text-base leading-6 max-w-[768px]"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariants}
              >
                At Jennessy, we put our customers first, helping them grow and
                succeed. We believe in a brighter future with great service.
                Jennessy: Where service leads to success
              </motion.p>
              <motion.div
                className="flex items-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={grandParentDivVariants}
              >
                <motion.div
                  className="flex py-2 pr-2 pl-3 bg-gray-800 items-center rounded-lg border border-gray-700 h-12 "
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={parentDivVariants}
                >
                  <MailIcon className="w-5 h-5 text-gray-400" />

                  <motion.div
                    className="overflow-hidden w-[227px] md:w-[268px] lg:w-[283px]"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={inputVariants}
                  >
                    <Input
                      placeholder="Enter your email"
                      className="bg-transparent text-white text-sm border-transparent outline-none "
                      style={{ width: "100%" }}
                      value={emailValue}
                      onChange={handelOnChange}
                    />
                  </motion.div>
                  <Button
                    size={"sm"}
                    className="text-white h-8 w-16 rounded-lg text-xs"
                    onClick={handelSubmit}
                    disabled={!emailValue}
                  >
                    Send
                  </Button>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </div>
      <SendEmailModel
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        emailValue={emailValue}
        setEmailValue={setEmailValue}
      />
    </div>
  );
};

export default HeroSecontion;
