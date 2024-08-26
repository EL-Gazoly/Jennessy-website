import Pattern from "@/public/pattern.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import TargetAudianceCard from "./target-audiance-card";

const OurTargtedAudianceSection = () => {
  return (
    <div className="w-full h-full relative mt-14">
      <div className="absolute inset-0 opacity-20">
        <Image src={Pattern} alt="Pattern" fill className="object-cover" />
      </div>
      <div className="relative w-full flex flex-col gap-4 p-4 px-11 md:px-4 lg:px-10 xl:px-20 z-10">
        <Badge className="text-base xl:text-lg w-fit rounded-lg font-normal text-[#31C48D]">
          Our Targeted Audience
        </Badge>
        <h2 className="text-3xl font-extrabold 2xl:text-5xl">Who We Help :</h2>
        <div className="mt-6 md:mt-8 xl:mt-14 max-w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-8">
          <TargetAudianceCard
            title="Roofing Companies"
            body="We provide leads for homeowners in need of roofing services."
          />
          <TargetAudianceCard
            title="Real Estate Agents"
            body="We help increase your listings and set more appointments."
          />
          <TargetAudianceCard
            title="Buy & Hold Investors"
            body="We create campaigns to help you acquire more properties."
          />
          <TargetAudianceCard
            title="Fix & Flippers"
            body="We find prime zip codes and off-market deals for profitable flips."
          />
          <TargetAudianceCard
            title="Sellers & Wholesalers"
            body="We identify top markets and distressed sellers, providing over 100 leads daily."
          />
        </div>
      </div>
    </div>
  );
};

export default OurTargtedAudianceSection;
