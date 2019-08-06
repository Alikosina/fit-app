import * as React from "react";
import * as styles from "./TargetBlock.module.scss";
import { TargetBlockModel } from "./models/TargetBlockModel";
import  Button from "../Button/Button"
import * as classnames from 'classnames';



const TargetBlock = (props: TargetBlockModel.Props) => {
  const targetClassname = classnames(props.classname);
  return(
    <div className={styles.target}>
    <div className={styles.img}>
      <img src={props.image} alt="" />
    </div>
    <Button classname={targetClassname}  disabled={props.disabled} description="Весовые показатели"/>
  
  </div>
  ) 
  };

export default TargetBlock;
