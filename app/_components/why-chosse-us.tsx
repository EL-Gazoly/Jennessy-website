import { Badge } from "@/components/ui/badge";
import Pattern from "@/public/pattern.svg";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="relative mt-14 md:mt-28">
      <div className="absolute inset-0 opacity-20">
        <Image src={Pattern} alt="Pattern" layout="fill" objectFit="cover" />
      </div>
      <div className="relative p-4 lg:px-10 xl:px-20 flex flex-col gap-y-7 z-10 pb-20 lg:pb-28">
        <Badge className="rounded-lg text-base font-normal lg:text-lg">
          Experience the Jennesy advantage today.
        </Badge>
        <h2 className="text-white text-3xl font-extrabold xl:text-5xl">
          Why Choose Us:
        </h2>
        <p className="text-white text-xl font-semibold leading-[125%] mt-2 lg:mt-5 lg:text-3xl">
          <span className="text-[26px] text-[#007AFF] lg:text-4xl">A</span>re
          you a real estate professional striving for excellence? Partner with
          us for support in wholesaling, fixing and flipping, and property
          acquisitions, elevating your business to new heights.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
