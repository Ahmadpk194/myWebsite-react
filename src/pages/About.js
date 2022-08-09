import React from "react";
import styles from "./About.module.css";
import avatar from "../assets/avatar.jpg";
import Tabs from "../components/Tabs";

function About() {
  return (
    <section className={styles.about}>
      <h1>About me</h1>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutTop}>
          <img src={avatar} alt="avatar" className={styles.aboutImg} />
          <p>
            I’m a web developer and graphic designer living in Swabi, Pakistan.
            I spend my days with my hands in many different areas of web
            development from front end engineering (HTML, CSS/SASS, BOOTSTRAP
            Javascript and REACT), to backend Programming (nodejs, Express,
            mongodb, mySQL) user experience and visual design. I’m extremely
            passionate about web development and design in all it’s forms and
            helping small businesses and artisans build and improve their online
            presence. <br />
            <br /> <strong>Mob :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>{" "}
            +923476444129 <br /> <strong>E-mail :&nbsp;&nbsp;&nbsp;</strong>
            Ahmadpk194@gmail.com
          </p>
        </div>
        <Tabs />
      </div>
    </section>
  );
}

export default About;
