import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en.json";
import mk from "./locales/mk.json";

i18n
  .use(LanguageDetector) // 👈 detect language & save in localStorage
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mk: { translation: mk },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // 👇 Configure detection
      order: ["localStorage", "navigator"], // check localStorage first, then browser
      caches: ["localStorage"], // save in localStorage
    },
  });

export default i18n;
