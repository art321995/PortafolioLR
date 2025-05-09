import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: ["es", "en"],
    ns: ["translate"],
    defaultNS: "translate",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
export default i18n;