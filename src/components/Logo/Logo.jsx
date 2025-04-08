import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoText}>
        <Link to="/">Alisa Kuraieva</Link>
      </div>
    </div>
  );
};
