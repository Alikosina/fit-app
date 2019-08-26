import * as React from "react";
import TargetBlock from "../../components/TargetBlock/TargetBlock";
import * as icon from "@img/ava.jpg";
import * as styles from "./MainPage.module.scss";

const MainPage = () => (
  <div className={styles.app}>
    <h1>Hello Fit App!</h1>
    <div className={styles.block}>
      <div className={styles.item}>
        <TargetBlock path="weight-form" image={icon} />
      </div>
      <div className={styles.item}>
        <TargetBlock disabled image="" />
      </div>
      <div className={styles.item}>
        <TargetBlock disabled image="" />
      </div>
    </div>
  </div>
);

export default MainPage;
