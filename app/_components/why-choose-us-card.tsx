type WhyChooseUsCardProps = {
  title: string;
  body: string;
};
const WhyChooseUsCard = ({ title, body }: WhyChooseUsCardProps) => {
  return (
    <div className=" flex flex-col gap-y-4 max-w-[347px]">
      <h5 className=" text-xl lg:text-2xl font-semibold">
        <span className=" text-[#007AFF]">{title[0]}</span>
        {title.slice(1)}
      </h5>
      <p className=" text-base leading-6 text-gray-400">{body}</p>
    </div>
  );
};

export default WhyChooseUsCard;
