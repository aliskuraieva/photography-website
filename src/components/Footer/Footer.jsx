import { useState, useEffect } from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import styles from "./Footer.module.css";
import { useLanguage } from "../../hooks/useLanguage";

export const Footer = () => {
  const { language } = useLanguage();
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }

    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <footer
      className={`${styles.footer} ${showFooter ? styles.visible : styles.hidden}`}
    >
      <div className={styles.footerContent}>
        <p>
          {language === "ua"
            ? "Забронюй свою щасливу мить ✨"
            : "Book your happy moment ✨"}
        </p>
        <ul className={styles.footerLinks}>
          <li>
            <a
              className={styles.instagram}
              href="https://www.instagram.com/aliskuraieva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              className={styles.telegram}
              href="https://t.me/aliskuraieva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
