import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "./locales/en.json";
import mk from "./locales/mk.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mk: { translation: mk },
  },
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
