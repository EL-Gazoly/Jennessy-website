import Logo from "@/components/Logo";
import Link from "next/link";
const Header = () => {
  return (
    <div className=" hidden lg:flex px-14 py-3 items-center justify-between bg-black/20 rounded-[14px]">
      <Logo />
      <div className="flex items-center gap-x-8 text-sm font-medium leading-5 text-white">
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>About Us</Link>
        <Link href={"#"}>Services</Link>
        <Link href={"#"}>Who we Help</Link>
        <Link href={"#"}>How it works</Link>
      </div>
    </div>
  );
};

export default Header;
