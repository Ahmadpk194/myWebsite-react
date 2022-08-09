import React, { useState } from "react";
import styles from "./Tabs.module.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.aboutTabContainer}>
      <div className={styles.blocTabs}>
        <div
          className={
            toggleState === 1
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => toggleTab(1)}
        >
          Main Skills
        </div>
        <div
          className={
            toggleState === 2
              ? `${styles.tabs} ${styles.activeTabs}`
              : `${styles.tabs}`
          }
          onClick={() => toggleTab(2)}
        >
          Education
        </div>
      </div>

      <div className={styles.contentTabs}>
        <div
          className={
            toggleState === 1
              ? `${styles.content} ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <table>
            <tr>
              <td>
                {" "}
                <strong>Web Development &nbsp;-&nbsp;</strong> Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Debitis tempore delectus
                ipsum dolore magnam ad ducimus cupiditate, id, consequatur nisi
                fugiat.
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <strong>Graphic Designing &nbsp;-&nbsp;</strong> Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Debitis tempore
                delectus ipsum...
              </td>
            </tr>
          </table>
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles.content} ${styles.activeContent}`
              : `${styles.content}`
          }
        >
          <table>
            <tr>
              <td>
                {" "}
                <strong>BS Software Engineering &nbsp;-&nbsp; </strong> Hazara
                University, Mansehra <br />
                <small>2017-2022</small>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <strong>FSc Pre Engineering &nbsp;-&nbsp; </strong> From
                Pakistan Higher Secondary School, Swabi <br />
                <small>2015-2017</small>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
