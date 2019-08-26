import * as React from "react";
import * as styles from "./WeightPage.module.scss";
import { connect } from "react-redux";
import { addWeight } from "../../store/weight/weightActions";

const WeightPage = (props: any) => {
  const addWeights = () => {
    props.addWeight(" 80 kg");
  };

  return (
    <div className={styles.block} onClick={addWeights}>
      <input type="text" />
    </div>
  );
};

// @ts-ignore
const mapStateToProps = store => {
  return {
    weight: store.weight
  };
};

// @ts-ignore
const mapDispatchToProps = dispatch => ({
  // @ts-ignore
  addWeight: v => {
    dispatch(addWeight(v));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeightPage);
