import Logo from "@/components/Logo";
import Link from "next/link";

const Header = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:flex px-14 py-3 items-center justify-between bg-black/20 rounded-[14px]">
      <Logo />
      <div className="flex items-center gap-x-8 text-sm font-medium leading-5 text-white">
        <Link href={"#"} onClick={(e) => handleScroll(e, "about-us")}>
          About Us
        </Link>
        <Link href={"#"} onClick={(e) => handleScroll(e, "services")}>
          Services
        </Link>
        <Link
          href={"#"}
          onClick={(e) => handleScroll(e, "our-targeted-audience")}
        >
          Who we Help
        </Link>
        <Link href={"#"} onClick={(e) => handleScroll(e, "prices")}>
          Pricing
        </Link>
        <Link href={"#"} onClick={(e) => handleScroll(e, "contact-us")}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
