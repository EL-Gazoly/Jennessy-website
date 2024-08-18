import Logo from "@/components/Logo";
import { MenuIcon } from "lucide-react";

const MobileHeader = () => {
  return (
    <div className="w-full flex lg:hidden items-center justify-between">
      <Logo />
      <MenuIcon className="w-7 h-7 text-white" />
    </div>
  );
};

export default MobileHeader;
