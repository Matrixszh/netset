"use client";

import { usePathname } from "next/navigation";
import StaggeredMenu from "@/components/StaggeredMenu";

type SiteNavbarProps = {
  colors?: string[];
  accentColor?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  logoUrl?: string;
};

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about IQRATI", link: "/about" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const navbarThemes = {
  "/about": {
    colors: ["#f0eee8", "#7C3AED"],
    accentColor: "#7C3AED",
    menuButtonColor: "#171717",
    openMenuButtonColor: "#7C3AED",
  },
  "/contact": {
    colors: ["#fbefef", "#EF4444"],
    accentColor: "#b42318",
    menuButtonColor: "#171717",
    openMenuButtonColor: "#b42318",
  },
  "/": {
    colors: ["#f3f0e4", "#FFD700"],
    accentColor: "#806000",
    menuButtonColor: "#171717",
    openMenuButtonColor: "#806000",
  },
} as const;

export default function SiteNavbar({
  colors,
  accentColor,
  menuButtonColor,
  openMenuButtonColor,
  logoUrl = "/Logo.png",
}: SiteNavbarProps) {
  const pathname = usePathname();
  const theme = navbarThemes[pathname as keyof typeof navbarThemes] ?? navbarThemes["/"];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering={true}
      menuButtonColor={menuButtonColor ?? theme.menuButtonColor}
      openMenuButtonColor={openMenuButtonColor ?? theme.openMenuButtonColor}
      changeMenuColorOnOpen={true}
      colors={colors ?? [...theme.colors]}
      logoUrl={logoUrl}
      accentColor={accentColor ?? theme.accentColor}
      isFixed={true}
    />
  );
}
