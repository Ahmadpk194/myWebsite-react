import React from "react";
import styles from "./Sidebar.module.css";
import profileImg from "../assets/profile.JPG";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <figure className={styles.profile__figure}>
        <img
          src={profileImg}
          alt="profile image"
          className={styles.profileImg}
        />
        <figcaption>Ahmad Khan</figcaption>
      </figure>
      <Navbar />
      <Footer />
    </aside>
  );
}

export default Sidebar;
