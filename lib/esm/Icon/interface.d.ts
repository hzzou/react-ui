import { HTMLAttributes } from "react";
export interface IconProps extends HTMLAttributes<HTMLElement> {
    name: string;
    color?: string;
    size?: string | number;
    className?: string;
}
