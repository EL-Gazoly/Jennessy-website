import Image from "next/image";
type TargetAudianceCardProps = {
  image: string;
  title: string;
  body: string;
};
const TargetAudianceCard = ({
  image,
  title,
  body,
}: TargetAudianceCardProps) => {
  return (
    <div className=" flex flex-col gap-y-4">
      <Image
        src={image}
        alt="Target Audiance"
        width={48}
        height={48}
        className=" w-8 h-8 lg:w-12 lg:h-12"
      />
      <h3 className=" text-base lg:text-3xl text-white">
        <span className=" text-[#007AFF]">{title[0]}</span>
        {title.slice(1).split(" ")[0]}
        <br />
        {title.slice(1).split(" ").slice(1).join(" ")}
      </h3>
      <p className=" text-sm lg:text-lg text-gray-400 max-w-[115px] lg:max-w-[245px]">
        {body}
      </p>
    </div>
  );
};

export default TargetAudianceCard;
