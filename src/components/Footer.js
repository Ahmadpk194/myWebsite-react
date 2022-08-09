import React from "react";
import styles from "./Sidebar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <>
      <div className={styles.socialIconsContainer}>
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://github.com/Ahmadpk194"
        >
          <GitHubIcon className={styles.socialIcon} />
        </a>
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://www.linkedin.com/in/ahmad-khan-974203a8/"
        >
          <LinkedInIcon className={styles.socialIcon} />
        </a>
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://facebook.com/Ahmadpk194"
        >
          <FacebookIcon className={styles.socialIcon} />
        </a>
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://twitter.com"
        >
          <TwitterIcon className={styles.socialIcon} />
        </a>
      </div>
      <div className={styles.footer}>
        <p>&copy; Created with 💖</p> <p>by Ahmad khan Jadoon</p>
      </div>
    </>
  );
}

export default Footer;
