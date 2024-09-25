import Image from "next/image";
type WhyChooseUsCardProps = {
  icon: string;
  title: string;
  body: string;
};
const WhyChooseUsCard = ({ icon, title, body }: WhyChooseUsCardProps) => {
  return (
    <div className=" flex flex-col gap-y-4 max-w-[347px]">
      <div className="flex items-center gap-x-4">
        <Image src={icon} alt="" className=" w-10 h-10 xl:w-14 xl:h-14" />
        <h5 className=" text-xl lg:text-2xl font-semibold">
          <span className=" text-[#007AFF]">{title[0]}</span>
          {title.slice(1)}
        </h5>
      </div>
      <p className=" text-base leading-6 text-gray-400">{body}</p>
    </div>
  );
};

export default WhyChooseUsCard;
