type PricePlanCardProps = {
  name: string;
  price: string;
  features: features[];
};
type features = {
  name: string;
  isAvailable: boolean;
};
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";
const PricePlanCard = ({ name, price, features }: PricePlanCardProps) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Card
      className=" w-[352px] h-[505] lg:w-[390px] rounded-lg bg-gray-800 border border-gray-700 p-2"
      style={{
        boxShadow:
          "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <CardHeader className=" flex flex-col gap-y-4">
        <CardTitle className="  text-white text-2xl font-extrabold flex items-center gap-x-[2px] ">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col gap-y-[18px]">
        {features.map((feature, index) => (
          <div key={index} className=" flex items-center gap-x-3">
            {feature.isAvailable ? (
              <CircleCheckIcon
                className=" text-gray-800 fill-[#1C64F2]"
                size={20}
              />
            ) : (
              <CircleCheckIcon
                className=" text-gray-800 fill-gray-500"
                size={20}
              />
            )}
            {feature.isAvailable ? (
              <span className=" text-gray-400 text-sm font-normal">
                {feature.name}
              </span>
            ) : (
              <span className=" text-gray-500 line-through text-sm font-normal">
                {feature.name}
              </span>
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter className=" w-full">
        <Button
          variant={"outline"}
          className=" w-full border border-white rounded-lg bg-transparent text-white"
          onClick={(e) => handleScroll(e, "contact-us")}
        >
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricePlanCard;
