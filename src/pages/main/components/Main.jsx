import React from "react";
import styles from "../style/main.module.css";
import Fade from "react-reveal/Fade";

const Main = () => {
  return (
    <div className={styles.main}>
      <Fade big cascade>
        <div className={styles.container}>
          <div className={styles.intro}>
            <span>Hi</span>
            <span>
              {" "}
              it is <span> Super Online Shop</span>
            </span>
            <span>
              <h1> we are best of the best </h1>
            </span>
          </div>

          <div className={styles.photo} />
        </div>
      </Fade>
    </div>
  );
};

export default Main;
