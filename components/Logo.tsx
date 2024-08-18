import Image from "next/image";
import logo from "@/public/logo.svg";
const Logo = () => {
  return (
    <div className=" flex items-center gap-x-2">
      <Image src={logo} alt="Logo" width={30} height={30} />
      <h1 className="text-2xl font-light  uppercase tracking-tighter">
        Jennessy
      </h1>
    </div>
  );
};

export default Logo;
