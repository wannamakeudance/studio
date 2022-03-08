import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      CN: {
        translations: require('../assets/lang/ch.json'),
      },
      EN: {
        translations: require('../assets/lang/en.json'),
      },
    },
    fallbackLng: localStorage.getItem("lang") === "CN" ? "CN" : "EN",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true
    }
  });

export default i18n;