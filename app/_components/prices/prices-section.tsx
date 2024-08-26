import { Badge } from "@/components/ui/badge";
import PricePlanCard from "./price-plan-card";
const PricesSection = () => {
  return (
    <div className="p-4 lg:px-10 xl:px-20 flex flex-col gap-y-4 mt-20">
      <Badge className=" rounded-lg text-base font-normal lg:text-lg">
        Find the Perfect Plan for Your Journey
      </Badge>
      <h2 className=" text-white text-3xl font-extrabold xl:text-5xl">
        Pricing:
      </h2>
      <div className=" mt-9 lg:mt-12 flex flex-wrap  gap-5 lg:gap-8 xl:gap-10 justify-center lg:justify-start xl:justify-around ">
        <PricePlanCard
          name="Essential"
          price="$1050"
          features={[
            { name: "Experienced cold caller", isAvailable: true },
            { name: "Quality control management", isAvailable: true },
            { name: "Weekly reports", isAvailable: true },
            { name: "Client success manager", isAvailable: true },
            { name: "Data pulling – 15k records", isAvailable: false },
            { name: "Data skiptracing – 15k records", isAvailable: false },
            { name: "Readymode dialer", isAvailable: false },
          ]}
        />
        <PricePlanCard
          name="Standard"
          price="$1700"
          features={[
            { name: "Experienced cold caller", isAvailable: true },
            { name: "Quality control management", isAvailable: true },
            { name: "Weekly reports", isAvailable: true },
            { name: "Client success manager", isAvailable: true },
            { name: "Data pulling – 15k records", isAvailable: true },
            { name: "Data skiptracing – 15k records", isAvailable: true },
            { name: "Readymode dialer", isAvailable: true },
          ]}
        />
        <PricePlanCard
          name="Gold"
          price="$2800"
          features={[
            { name: "Experienced cold caller", isAvailable: true },
            { name: "Quality control management", isAvailable: true },
            { name: "Weekly reports", isAvailable: true },
            { name: "Client success manager", isAvailable: true },
            { name: "Data pulling – 30k records", isAvailable: true },
            { name: "Data skiptracing – 30k records", isAvailable: true },
            { name: "Readymode dialer", isAvailable: true },
          ]}
        />
      </div>
    </div>
  );
};

export default PricesSection;
