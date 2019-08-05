import * as React from "react";
import * as styles from "./TargetBlock.module.scss";
import { TargetBlockModel } from "./models/TargetBlockModel";
import { Link } from "react-router-dom";



const TargetBlock = (props: TargetBlockModel.Props) => (
  
  <div className={styles.target}>
    {" "}
   
    <Link to="/mainPage">
      Click
    </Link>
  
    
    BLOCK <span className={styles.targetItem}>MyText</span>
    <div>
      <img src={props.image} alt="" />
    </div>
    <div>{props.description}</div>
  
  </div>
  
);

export default TargetBlock;
