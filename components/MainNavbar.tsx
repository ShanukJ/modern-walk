import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    // <HeroUINavbar isBordered maxWidth="full" className="fixed top-0 left-0 w-full z-50">
    <HeroUINavbar isBordered maxWidth="full" position="sticky">
      <NavbarContent className="basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit text-2xl font-serif">
              Modern Walk
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
