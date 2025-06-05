import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden md:block fixed top-0 left-1/2 h-[110px] translate-x-[-50%] bg-black opacity-80 rounded-2xl transition-all duration-500 overflow-hidden ${
          scrolled ? "w-[120%]" : "w-0"
        }`}
      />
      <nav className="flex flex-row items-center fixed animate__animated animate__fadeInDown">
        <a href="#">
          <Image
            src="./craig-logo.png"
            alt="Craig's logo"
            width={75}
            height={75}
            className="m-5 rounded-full mr-3 transition-transform duration-300 hover:scale-120 animate__animated animate__fadeInDown"
          />
        </a>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem></NavigationMenuItem>

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
        </div>
      </nav>
    </>
  );
}
