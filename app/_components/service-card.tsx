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
const ServiceCard = ({ title, body, badge, badgeColor }: ServiceCardProps) => {
  return (
    <Card className=" p-3 bg-gray-800 border border-gray-700 rounded-lg">
      <CardHeader className=" flex flex-col gap-y-3">
        <Badge
          className={cn(
            " bg-gray-700 hover:bg-gray-600  text-[7px] xl:text-[10px] font-medium  max-w-fit ",
            badgeColor === "green" ? "text-green-400" : " text-purple-400"
          )}
        >
          {badge}
        </Badge>
        <CardTitle className=" text-xl font-extrabold xl:text-3xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className=" text-sm xl:tex-base text-gray-400 font-normal max-h-[135px] overflow-y-auto">
        <p>{body}</p>
      </CardContent>
      <CardFooter className=" text-lg font-medium text-brand-500 flex items-center gap-x-2">
        <span>Read More</span>
        <MoveRightIcon size={20} />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
