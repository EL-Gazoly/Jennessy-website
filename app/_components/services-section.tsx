import { Badge } from "@/components/ui/badge";
import ServiceCard from "./service-card";
const ServicesSection = () => {
  return (
    <div className=" w-full h-full flex flex-col p-4 lg:px-10 xl:px-20">
      <Badge className=" bg-gray-700 text-green-300 w-fit text-[11.5px] mb-3">
        Entrust the task of list generation to our team of experts
      </Badge>
      <h2 className=" text-3xl font-extrabold mb-6">Services:</h2>
      <div className=" max-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
        <div className=" xl:col-span-2">
          <ServiceCard
            badge=" Unlock Hidden Profits: The Secret Weapon of Leading Real Estate Agents"
            title="Data Generation"
            body="We specialize in compiling personalized lists tailored to your specific objectives and delivering them promptly.
Our approach ensures efficiency and effectiveness in achieving your goals."
            badgeColor="green"
          />
        </div>
        <div className=" xl:col-span-3">
          <ServiceCard
            badge=" Streamlined Success: Effortless Dispositions, Expert ROI Maximization"
            title="Cold Calling"
            body="Elevate your real estate business with a seasoned cold calling professional. Our experts generate high-quality leads precisely aligned with your objectives, ensuring your pipeline is consistently filled with promising opportunities.
Streamlined Success: Effortless Dispositions, Expert ROI Maximization"
            badgeColor="purple"
          />
        </div>
        <div className=" xl:col-span-3">
          <ServiceCard
            badge=" Streamlined Success: Effortless Dispositions, Expert ROI Maximization"
            title="Real Estate Acquisition & Disposition "
            body="Entrust us with your real estate acquisition needs. We excel in negotiations to maximize your ROI and efficiently manage dispositions to expedite your deals with precision and speed.
Streamlined Success: Effortless Dispositions, Expert ROI Maximization."
            badgeColor="purple"
          />
        </div>
        <div className=" xl:col-span-2">
          <ServiceCard
            badge=" Accelerate your search for the right contacts with our professional skip tracing services"
            title="Skip Tracing"
            body="Accelerate your search for the right contacts with our professional skip tracing services
We specialize in locating hard-to-find individuals and providing accurate, up-to-date contact information to enhance your outreach efforts."
            badgeColor="green"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
