import React from "react";
import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            <HomeIcon className={styles.navIcon} />
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/portfolio" className={styles.navLink}>
            <BusinessCenterIcon className={styles.navIcon} />
            Portfolio
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/blog" className={styles.navLink}>
            <MessageIcon className={styles.navIcon} />
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
