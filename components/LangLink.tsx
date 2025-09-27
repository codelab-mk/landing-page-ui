"use client";

import Link, { LinkProps } from "next/link";
import { useTranslation } from "react-i18next";
import { routeMap } from "@/app/i18n/routes";

export type Lang = keyof typeof routeMap; // "en" | "mk"
export type RouteKey = keyof (typeof routeMap)["en"]; // "home" | "about" | ...

interface Props extends Omit<LinkProps, "href"> {
  // allow all Next.js Link props except href
  to: RouteKey;
  children: React.ReactNode;
  className?: string; // allow className now
}

export const LangLink = ({ to, children, className, ...props }: Props) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Lang) || "en";

  const href = `/${lang}/${routeMap[lang][to]}`;

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};
