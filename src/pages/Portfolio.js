import React from "react";
import PortItem from "../components/PortItem";
import styles from "./Portfolio.module.css";
import bad from "../imgs/breakingbad.JPG";
import portfoliojs from "../imgs/portfoliojs.JPG";
import ecommerece from "../imgs/ecommerece.JPG";
import weatherApp from "../imgs/weatherApp.JPG";
import expensetracker from "../imgs/expensetracker.JPG";
import notetaking from "../imgs/notetaking.JPG";

function Portfolio() {
  return (
    <div className={styles.portWrapper}>
      <PortItem
        img={bad}
        caption="fun app to search for breaking-bad characters / REACT/AXIOS"
        link="https://breaking-bad-a58e4.web.app/"
        source__code="https://github.com/Ahmadpk194/breaking-bad"
      />
      <PortItem
        img={ecommerece}
        caption="A simple e-commerece demo site. /REACT"
        link="https://eshop-9a127.web.app/"
        source__code="https://github.com/Ahmadpk194/e-shop "
      />
      <PortItem
        img={portfoliojs}
        caption="Portfolio website in html/scss/javascript"
        link="https://ahmad-khan-portfolio.netlify.app/"
        source__code="https://github.com/Ahmadpk194/portfolio-js"
      />
      <PortItem
        img={weatherApp}
        caption="Search weather in different cities /REACT/REST API"
        link="https://weather-app-v32.netlify.app/"
        source__code="https://github.com/Ahmadpk194/weather-app-react"
      />
      <PortItem
        img={expensetracker}
        caption="Expenses tracker /REACT"
        link="https://expense-tracker-v12.netlify.app/"
        source__code="https://github.com/Ahmadpk194/expense-tracker-react"
      />
      <PortItem
        img={notetaking}
        caption="A simple noteTaking app /REACT"
        link="https://note-taking-app-3e954.web.app/"
        source__code="https://github.com/Ahmadpk194/note-taking-app"
      />
    </div>
  );
}

export default Portfolio;
