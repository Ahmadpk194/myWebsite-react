import React from "react";
import styles from "./Home.module.css";
import ParticlesComp from "../components/Particles";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import pdf from "../assets/resume.pdf";

function Home() {
  function showCv() {
    window.open(pdf, "_blank");
  }

  return (
    <section className={styles.home}>
      <ParticlesComp />
      <div className={styles.homeContainer}>
        <h1>Hello.</h1>
        <h3>I,m Ahmad khan</h3>
        <div className={styles.typeWriter}>
          <Typewriter
            options={{
              strings: [
                "<h4>Web Developer</h4>",
                "<h4>Web Designer</h4>",
                "<h4>Graphics Designer</h4>",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          />
        </div>
        <div className={styles.btnContainer}>
          <Link to="/about" className={`${styles.aboutMeBtn} ${styles.btn}`}>
            About me
          </Link>
          <button
            className={`${styles.showCvBtn} ${styles.btn}`}
            onClick={showCv}
          >
            Show CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
