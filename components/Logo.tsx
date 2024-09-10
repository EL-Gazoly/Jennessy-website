import Image from "next/image";
import logo from "@/public/logo.svg";
import LogoText from "@/public/logo-text.svg";
const Logo = () => {
  return (
    <div className=" flex items-center gap-x-3">
      <Image src={logo} alt="Logo" width={30} height={30} />
      <Image src={LogoText} alt="Logo" width={100} height={30} />
    </div>
  );
};

export default Logo;
