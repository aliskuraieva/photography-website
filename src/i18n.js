import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        portfolio: "Portfolio",
        prices: "Prices",
        about: "About me",
        contacts: "Contacts"
      },
    },
    uk: {
      translation: {
        home: "Головна",
        portfolio: "Портфоліо",
        prices: "Ціни",
        about: "Про мене",
        contacts: "Контакти"
      },
    },
  },
  lng: "uk",
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
