import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";

export const CookieConsent = () => {
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
        Ми використовуємо cookies для покращення вашого досвіду. Продовжуючи
        перегляд сайту, ви погоджуєтесь на використання cookies.
      </p>
      <button onClick={handleAccept}>Прийняти</button>
    </div>
  );
};
