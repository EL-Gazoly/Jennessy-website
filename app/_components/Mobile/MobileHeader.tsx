import React from "react";
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

type MobileHeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};
export const MobileHeader = ({
  isMenuOpen,
  setIsMenuOpen,
}: MobileHeaderProps) => {
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
      className=" bg-transparent backdrop:blur-none lg:hidden backdrop-filter-none data-[menu-open=true]:bg-background/70 data-[menu-open=true]:w-screen data-[menu-open=true]:mx-0"
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
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
