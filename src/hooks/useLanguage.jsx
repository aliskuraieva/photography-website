import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext/LanguageContext";

export const useLanguage = () => {
  return useContext(LanguageContext);
};
