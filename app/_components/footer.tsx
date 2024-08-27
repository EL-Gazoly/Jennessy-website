import Logo from "@/public/logo.svg";
import Image from "next/image";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/twitter.svg";
import Instagram from "@/public/instagram.svg";
import { Montserrat, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const Footer = () => {
  return (
    <div
      className={cn(
        " flex-1 h-screen mt-8 md:mt-28 lg:mt-36 bg-gray-700 py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-14 items-center  gap-x-28",
        montserrat.className
      )}
    >
      <div className=" flex flex-col items-center gap-y-3">
        <Image src={Logo} alt="Logo" className=" w-[83px] h-[87px]" />
        <h3 className={cn(" text-2xl font-light", inter.className)}>
          JENNESSY
        </h3>
      </div>
      <div className=" hidden lg:flex flex-col gap-y-5 font-bold text-xs">
        <h3 className=" text-2xl leading-8 tracking-[0.1px]">About US</h3>
        <span className=" tracking-[0.2px] leading-6">
          Are you a knowledgeable real estate professional aiming to excel in
          your market? Your search ends here! At JENNESY, we go beyond being a
          mere call center, we serve as your strategic ally in achieving
          success.
        </span>
      </div>
      <div className=" flex flex-col gap-y-5 font-bold self-center items-center md:items-start text-left">
        <h3 className=" text-white text-2xl "> Company info</h3>
        <div className=" flex flex-col gap-y-2.5 text-sm ">
          <span>About Us</span>
          <span>Services</span>
          <span>Who We Help</span>
          <span>How it works</span>
          <span>Pricing</span>
        </div>
      </div>
      <div className=" flex flex-col gap-y-6 items-center md:items-start text-left ">
        <h3 className=" text-2xl font-bold">Get In Touch</h3>
        <p className=" leading-5 font-normal text-sm max-w-[205px] text-center md:text-left">
          We are the future and you will be there with us.
        </p>
        <div className="flex items-center gap-x-5">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Twitter} alt="Twitter" />
          <Image src={Instagram} alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
