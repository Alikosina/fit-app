import { disabled, active } from "../../Button/Button.module.scss";

export namespace TargetBlockModel {
    export interface Props {
        image : string
        description ?: string
        classname ?: string
        disabled ?: boolean
    }
}