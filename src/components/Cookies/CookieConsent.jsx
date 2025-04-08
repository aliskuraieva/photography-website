import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";
import { useLanguage } from "../../hooks/useLanguage";

export const CookieConsent = () => {
  const { language } = useLanguage();
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (accepted === "true") {
      setCookiesAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setCookiesAccepted(true);
  };

  if (cookiesAccepted) {
    return null;
  }

  return (
    <div className={styles["cookie-consent"]}>
      <p>
        {language === "ua"
          ? "Ми використовуємо cookies для покращення вашого досвіду. Продовжуючи перегляд сайту, ви погоджуєтесь на використання cookies."
          : "We use cookies to enhance your experience. By continuing to browse the site, you agree to our use of cookies."}
      </p>
      <button onClick={handleAccept}>
        {language === "ua" ? "Прийняти" : "Accept"}
      </button>
    </div>
  );
};
