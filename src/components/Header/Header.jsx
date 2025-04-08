import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { useLanguage } from "../../hooks/useLanguage";

export const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/">{language === "ua" ? "Головна" : "Home"}</a>
          </li>
          <li className={styles.navItem}>
            <a href="/portfolio">
              {language === "ua" ? "Портфоліо" : "Portfolio"}
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/prices">{language === "ua" ? "Ціни" : "Prices"}</a>
          </li>
        </ul>

        <Logo />

        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/about">{language === "ua" ? "Про мене" : "About Me"}</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contacts">
              {language === "ua" ? "Контакти" : "Contacts"}
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.languageSelector} onClick={toggleLanguage}>
        {language === "ua" ? "UA" : "EN"}
      </button>
    </header>
  );
};
