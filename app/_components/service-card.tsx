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
            " bg-gray-700 hover:bg-gray-600 tracking-tighter text-xs font-medium  max-w-fit ",
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
        <p> {body}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
