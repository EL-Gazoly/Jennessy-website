type TargetAudianceCardProps = {
  title: string;
  body: string;
};
const TargetAudianceCard = ({ title, body }: TargetAudianceCardProps) => {
  return (
    <div className=" flex flex-col gap-y-4">
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
