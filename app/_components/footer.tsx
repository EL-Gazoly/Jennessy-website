" use client";
import Logo from "@/public/logo.svg";
import LogoText from "@/public/logo-text.svg";
import Image from "next/image";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/twitter.svg";
import Instagram from "@/public/instagram.svg";
import { LinkedinIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Divider } from "@nextui-org/react";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({ subsets: ["latin"] });
type FooterProps = {
  refernce?: React.RefObject<HTMLDivElement>;
};

const Footer = ({ refernce }: FooterProps) => {
  return (
    <div
      className={cn(
        " w-full flex flex-col gap-y-12 px-10 md:px-20 lg:px-32 pb-10",
        alexandria.className
      )}
    >
      <div className=" flex flex-col gap-3 items-center">
        <Image src={Logo} alt="Logo" width={49} height={69} />
        <div className=" flex items-end ">
          <Image src={LogoText} alt="Logo" width={152} height={34} />
          <span className=" text-sm">LLC</span>
        </div>
      </div>
      <div className=" flex flex-col gap-y-8">
        <Divider className=" bg-white/20" />
        <div className=" w-full flex flex-col md:flex-row gap-5 items-center justify-between text-xs md:text-sm text-white/75">
          <span> &copy; 2024 All rights reserved</span>
          <div className=" flex items-center gap-x-3">
            <Link href={"https://www.facebook.com/Jennessy.cc"} target="_blank">
              <Image
                src={Facebook}
                alt="Facebook"
                className=" w-5 h-5 lg:w-6 lg:h-6"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/jennessy"}
              target="_blank"
            >
              <LinkedinIcon className=" w-5 h-5 lg:w-6 lg:h-6 fill-white" />
            </Link>
            <Link
              href={"https://www.instagram.com/jennessy.cc/"}
              target="_blank"
            >
              <Image
                src={Instagram}
                alt="Instagram"
                className=" w-5 h-5 lg:w-6 lg:h-6"
              />
            </Link>
          </div>
          <div className=" flex items-center gap-x-5">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
