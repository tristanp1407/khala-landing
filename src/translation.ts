import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend"; // Import the new HTTP backend

import translationEn from "./locales/en/translation.json";
import translationEs from "./locales/es/translation.json";

i18n
  .use(HttpBackend) // Use HttpBackend instead of XHR
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",

    // Add backend configuration
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to your locale files
      // other options like crossDomain might be needed depending on your setup
    },

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      es: {
        translations: translationEs,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
