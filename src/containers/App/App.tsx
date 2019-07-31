import * as React from "react";
import * as styles from "./App.module.scss";
import TargetBlock from "../../components/TargetBlock/TargetBlock";

const AppContainer = () => (
  <div className={styles.app}>
    <h1>Hello Fit App!</h1>
    <div>
      <TargetBlock image="some image" description="Показатели веса" />
    </div>
  </div>
);

export default AppContainer;
