" use client";
type ServiceCardProps = {
  title: string;
  body: string;
  badge: string;
  badgeColor: string;
};
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { MoveRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ScrollShadow } from "@nextui-org/react";
import { useState } from "react";
const ServiceCard = ({ title, body, badge, badgeColor }: ServiceCardProps) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Card className=" p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg">
      <CardHeader className=" flex flex-col gap-y-3">
        <Badge
          className={cn(
            " bg-gray-700 hover:bg-gray-600  text-[6px] sm:text-[7px] xl:text-[10px] font-medium  max-w-fit ",
            badgeColor === "green" ? "text-green-400" : " text-purple-400"
          )}
        >
          {badge}
        </Badge>
        <CardTitle className=" text-xl font-extrabold xl:text-3xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className=" text-sm xl:tex-base text-gray-400 font-normal transition-all duration-300 ">
        {readMore ? (
          <p> {body}</p>
        ) : (
          <ScrollShadow
            hideScrollBar
            className=" max-h-[85px] lg:max-h-14 overflow-y-hidden"
          >
            {body}
          </ScrollShadow>
        )}
      </CardContent>
      <CardFooter
        className=" text-lg font-medium text-brand-500 flex items-center gap-x-2 cursor-pointer"
        onClick={() => setReadMore(!readMore)}
      >
        <span>Read More</span>
        <MoveRightIcon
          size={20}
          className={` transition-all duration-300 ${
            readMore && " -rotate-90 transform"
          }`}
        />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
