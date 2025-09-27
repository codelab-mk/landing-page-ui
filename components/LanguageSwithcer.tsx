"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { routeMap } from "@/app/i18n/routes";

type Lang = keyof typeof routeMap; // "en" | "mk"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLanguageMenu = () => setOpen(!open);

  const changeLanguage = async (lang: Lang) => {
    if (i18n.language === lang) return;

    // change UI language
    await i18n.changeLanguage(lang);

    // save to cookie via API
    await fetch("/api/set-locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: lang }),
    });

    // redirect to same route with new language
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/").slice(2); // remove /[lang]
    const currentRoute = segments.join("/");

    // find translated route key
    const routeKey = Object.keys(routeMap["en"]).find((key) => routeMap[i18n.language as Lang][key as keyof (typeof routeMap)["en"]] === currentRoute) as keyof (typeof routeMap)["en"];

    const translatedPath = routeKey ? routeMap[lang][routeKey] : "";
    window.location.href = `/${lang}/${translatedPath}`;
    setOpen(false);
  };

  const currentLang = mounted ? i18n.language.toUpperCase() : "…";

  return (
    <div className="language-switcher" style={{ position: "relative" }}>
      <button
        type="button"
        onClick={toggleLanguageMenu}
        className="language-btn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "5px 10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          background: "transparent",
          cursor: "pointer",
        }}>
        🌐 {currentLang}
      </button>

      {open && (
        <ul
          className="language-menu"
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            listStyle: "none",
            padding: "5px 0",
            margin: 0,
            width: "100%",
            zIndex: 1000,
          }}>
          {(["en", "mk"] as Lang[]).map((l) => (
            <li key={l}>
              <button
                onClick={() => changeLanguage(l)}
                style={{
                  width: "100%",
                  padding: "5px 10px",
                  background: "transparent",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                }}>
                {l.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
