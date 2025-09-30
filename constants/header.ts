import { RouteKey } from "@/components/LangLink";

export const menuItems: {
  key: RouteKey;
  label: string;
  subMenu?: { key: RouteKey; label: string }[];
}[] = [
  { key: "home", label: "Home" },
  {
    key: "courses",
    label: "Courses",
  },
  {
    key: "about",
    label: "About",
    subMenu: [
      { key: "about", label: "About Us" },
      { key: "instructors", label: "Our Team" },
    ],
  },
  { key: "contact", label: "Contact" },
];
