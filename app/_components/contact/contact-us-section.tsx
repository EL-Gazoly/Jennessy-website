import { Badge } from "@/components/ui/badge";
import Calendery from "@/public/calendery.svg";
import CalenderyLarage from "@/public/calendery-pc.svg";
import LinearPattern from "@/public/linear-pattern.svg";
import Image from "next/image";
const ContactUsSection = () => {
  return (
    <div className=" mt-14 flex flex-col gap-y-4  p-4 lg:px-10 xl:px-20 ">
      <Badge className=" rounded-lg text-base font-normal lg:text-lg">
        Get in Touch
      </Badge>
      <h2 className=" text-white text-3xl font-extrabold xl:text-5xl">
        Contact
      </h2>
      <p className="text-white text-xl font-semibold leading-[125%] mt-2.5 lg:mt-5 lg:text-3xl">
        <span className="text-[26px] text-[#007AFF] lg:text-4xl">D</span>o you
        need to pull a list of motivated sellers? Ready to take your real estate
        business to the next level? Contact us today to learn how Jennesy can
        help you generate high-quality leads and grow your client base. Let’s
        start a conversation
      </p>
      <div className=" relative flex w-full h-full items-center justify-center  mt-12 md:mt-[77px] lg:mt-[107px]">
        <div className=" absolute inset-0 self-center justify-self-center">
          <Image
            src={LinearPattern}
            alt="LinearPattern"
            className="object-cover"
          />
        </div>
        <Image
          src={Calendery}
          alt="Calendery"
          objectFit="cover"
          className=" w-full h-full max-h-[800px]  lg:hidden relative z-10"
        />
        <Image
          src={CalenderyLarage}
          alt="Calendery"
          objectFit="cover"
          className=" w-full h-full self-center max-w-[895px] max-h-[800px] hidden lg:block  relative z-10"
        />
      </div>
    </div>
  );
};

export default ContactUsSection;
