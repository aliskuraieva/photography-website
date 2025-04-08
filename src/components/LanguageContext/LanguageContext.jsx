import { createContext, useState} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ua");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ua" ? "en" : "ua"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };