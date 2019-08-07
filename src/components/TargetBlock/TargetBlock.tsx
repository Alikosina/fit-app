import * as React from "react";
import * as styles from "./TargetBlock.module.scss";
import { TargetBlockModel } from "./models/TargetBlockModel";
import  Button from "../Button/Button"
import * as classnames from 'classnames';
import { Link } from "react-router-dom"



const TargetBlock = (props: TargetBlockModel.Props) => {
  const targetClassname = classnames(props.classname);
  return(
    <div className={styles.target}>
    <div className={styles.img}>
      <img src={props.image} alt="" />
    </div>
    <Link to={props.path ? props.path : ''}>
      <Button classname={targetClassname}  disabled={props.disabled} description="Весовые показатели"/>
    </Link>

  
  </div>
  ) 
  };

export default TargetBlock;
