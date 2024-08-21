import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "src/Locale/English.json";
import geTranslation from "src/Locale/Georgian.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ge: { translation: geTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
