import {HTMLAttributes} from "react";

// 继承HTMLAttributes,以便让其支持原生事件和属性等
export interface IconProps extends HTMLAttributes<HTMLElement>{
    name: string;
    color?: string;
    size?: string | number;
    className?: string;
}
