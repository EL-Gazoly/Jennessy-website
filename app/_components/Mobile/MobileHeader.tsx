import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "@/components/Logo";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" fixed top-0 left-0 w-full bg-transparent xl:hidden  data-[menu-open=true]:bg-background/70 data-[menu-open=true]:w-screen data-[menu-open=true]:mx-0"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <NavbarContent>
        <NavbarBrand className=" w-fit">
          <Logo />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="xl:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className="w-full"
            href="#"
            size="lg"
            onClick={(e) => handleScroll(e, "about-us")}
          >
            About Us
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            className="w-full"
            href="#"
            size="lg"
            onClick={(e) => handleScroll(e, "services")}
          >
            Services
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            className="w-full"
            href="#"
            size="lg"
            onClick={(e) => handleScroll(e, "our-targeted-audience")}
          >
            Who we Help
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            className="w-full"
            href="#"
            size="lg"
            onClick={(e) => handleScroll(e, "prices")}
          >
            Pricing
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            className="w-full"
            href="#"
            size="lg"
            onClick={(e) => handleScroll(e, "contact-us")}
          >
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
