import { disabled } from "../Button.module.scss";

export namespace ButtonModel {
    export interface Props {
        description : string
        classname ?: string
        disabled ?: boolean
    }
}