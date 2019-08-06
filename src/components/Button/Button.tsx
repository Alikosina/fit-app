import * as React from "react";
import * as styles from "./Button.module.scss";
import { ButtonModel } from "./models/ButtonModel";
import * as classnames from 'classnames';


const Button = (props: ButtonModel.Props) => {
    const buttonClassname =classnames(styles.button , { [styles.disabled] : props.disabled} ,{ [styles.active] : !props.disabled});
    const buttonDescriptionClassname = classnames(styles.description,  props.classname);
    return(
        <div className={buttonClassname}>
     <div className={buttonDescriptionClassname}>
             {props.description}  
     </div>
 </div>
    )

  
    };

export default Button;