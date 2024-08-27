import MobileHeader from "./Mobile/MobileHeader";
import Image from "next/image";
import Pattern from "@/public/pattern.svg";
import { MailIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "./Header";
const HeroSecontion = () => {
  return (
    <div className=" w-full h-full flex flex-col relative px-4">
      <div className="absolute inset-0 z-10 opacity-65">
        <Image src={Pattern} alt="pattern" layout="fill" objectFit="cover" />
      </div>
      <div className=" flex flex-col w-full z-20  h-full justify-between mt-5">
        <Header />
        <MobileHeader />
        <div className="w-full flex-1 flex flex-col items-center justify-center gap-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white text-center leading-9">
            Where Service Meets Success
          </h1>
          <p className=" text-[#D1D5DB] text-center text-base leading-6 max-w-[768px]">
            At Jenessy, we put our customers first, helping them grow and
            succeed. We believe in a brighter future with great service.
            Jenessy: Where service leads to success
          </p>
          <div className=" flex py-2 pr-2 pl-3 bg-gray-800 items-center rounded-lg border border-gray-700 h-12">
            <MailIcon className="w-5 h-5 text-gray-400" />
            <Input
              placeholder="Enter your email"
              className=" bg-transparent text-white text-sm border-transparent w-[227px] md:w-[268px] lg:w-[283px] outline-none"
            />
            <Button
              size={"sm"}
              className="  text-white h-8 w-16 rounded-lg text-xs"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecontion;
