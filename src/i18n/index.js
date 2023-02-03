import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBrJson from "../i18n/translations/ptBR.json";
import enJson from "../i18n/translations/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    ptBR: ptBrJson,
  },
});

export default i18n;
