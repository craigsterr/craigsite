import Image from "next/image";
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "animate.css";

export default function NavBar() {
  return (
    <header className="mt-4 fixed animate__animated animate__fadeInDown">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="#">
              <Image
                src="./craig-logo.png"
                alt="Craig's logo"
                width={75}
                height={75}
                className="rounded-full mr-3 drop-shadow-[0_8px_24px_rgba(0,0,0,1)] transition-transform duration-300 hover:scale-120 animate__animated animate__fadeInDown"
              />
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Home{" "}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#projects"
              className={navigationMenuTriggerStyle()}
            >
              Projects{" "}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#skills"
              className={navigationMenuTriggerStyle()}
            >
              Skills{" "}
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#contact"
              className={navigationMenuTriggerStyle()}
            >
              Contact{" "}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
