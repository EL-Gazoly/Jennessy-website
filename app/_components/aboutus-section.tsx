import BuildingImage from "@/public/building.png";
import Image from "next/image";
import ClapperboardPlay from "@/public/clapperboard-play.svg";
import { Badge } from "@/components/ui/badge";
import { MoveRightIcon } from "lucide-react";
const AboutUsSection = () => {
  return (
    <div className=" flex flex-row flex-wrap lg:flex-nowrap gap-x-10 xl:gap-x-20  items-center justify-center lg:items-start p-4 lg:px-10 xl:px-20">
      <div className=" relative  w-full h-[344px] max-w-[737px] ">
        <Image
          src={BuildingImage}
          alt="Building"
          fill
          className=" object-cover rounded-lg"
        />
        <div className=" absolute inset-0 bg-[#111928]/60 rounded-lg px-8 flex flex-col py-7">
          <div className=" w-full h-full flex flex-col  lg:hidden">
            <div className=" flex items-center gap-x-2.5 mb-4 ">
              <Image src={ClapperboardPlay} alt="Clapperboard Play" />
              <span className=" text-white text-base font-semibold">
                Watch More
              </span>
            </div>
            <div>
              <Badge className=" text-[#D09138] bg-[#D09138]/25 mb-2">
                Watch our story
              </Badge>
              <h3 className=" text-2xl font-extrabold mb-1">About US</h3>
              <p className=" text-sm mb-6">
                Are you a knowledgeable real estate professional aiming to excel
                in your market? Your search ends here! At JENNESSY, we go beyond
                being a mere call center, we serve as your strategic ally in
                achieving success.
              </p>
              <div className=" flex items-center gap-x-2  text-brand-400 font-medium text-base">
                <span>Read More </span>
                <MoveRightIcon className=" h-4 w-4" />
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full hidden lg:block">
            <div className=" absolute bottom-0 left-0">
              <div className=" flex items-center gap-x-2.5 ">
                <Image src={ClapperboardPlay} alt="Clapperboard Play" />
                <span className=" text-white text-base font-semibold">
                  Watch More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex flex-col max-w-[500px] justify-center mt-12 ">
        <Badge className=" text-[#D09138] bg-[#D09138]/25 mb-2 hover:bg-[#D09138]/50 w-fit">
          Get to know use well
        </Badge>
        <h3 className=" text-2xl font-extrabold mb-1">About Us</h3>
        <p className=" text-sm mb-6">
          Are you a knowledgeable real estate professional aiming to excel in
          your market? Your search ends here! At JENNESSY, we go beyond being a
          mere call center, we serve as your strategic ally in achieving
          success.
        </p>
        <div className=" flex items-center gap-x-2  text-brand-400 font-medium text-base">
          <span>Read More </span>
          <MoveRightIcon className=" h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
