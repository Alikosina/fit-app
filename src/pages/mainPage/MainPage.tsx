import * as React from "react";
import TargetBlock from "../../components/TargetBlock/TargetBlock";
// @ts-ignore
import icon from '../../assets/images/icon.jpg'
import * as styles from "./MainPage.module.scss";



const MainPage = () => (
    <div className={styles.app}>
    <h1>Hello Fit App!</h1>
    <div>
      <TargetBlock image={icon} description="Показатели веса" />
    </div>
  </div>
);

export default MainPage;