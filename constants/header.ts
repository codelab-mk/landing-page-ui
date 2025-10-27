import { ERouteMap } from "@/constants/routes";

export const menuItems: {
  key: ERouteMap;
  label: string;
  url: string;
  subMenu?: { key: string; label: string; url: string }[];
}[] = [
  { key: ERouteMap.Home, label: "Почетна", url: `/${ERouteMap.Home}` },
  {
    key: ERouteMap.Courses,
    label: "Курсеви",
    url: `/${ERouteMap.Courses}`,
  },
  {
    key: ERouteMap.About,
    label: "За Нас",
    url: `/${ERouteMap.About}`,
    subMenu: [
      { key: ERouteMap.About, label: "За CodeLab", url: `/${ERouteMap.About}` },
      { key: ERouteMap.Team, label: "Нашииот Тим", url: `/${ERouteMap.Team}` },
      { key: ERouteMap.FAQ, label: "ЧПП", url: `/${ERouteMap.FAQ}` },
      { key: ERouteMap.Policy, label: "Политика за приватност", url: `/${ERouteMap.Policy}` },
    ],
  },
  { key: ERouteMap.Contact, label: "Контакт", url: `/${ERouteMap.Contact}` },
];
