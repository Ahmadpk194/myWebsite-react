import React from "react";
import styles from "../pages/Portfolio.module.css";

function PortItem({ img, caption, link, source__code }) {
  return (
    <div className={styles.portCard}>
      <figure className={styles.portItem}>
        <img src={img} alt="port image" />
      </figure>
      <div className={styles.caption}>{caption}</div>
      <div className={styles.buttons__item}>
        <a href={link} target="_blank" className={styles.demo}>
          Demo
        </a>
        <a
          href={source__code}
          target="_blank"
          className={`${styles.source__code}`}
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default PortItem;
