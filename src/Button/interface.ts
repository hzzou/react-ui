import React, {HTMLAttributes} from "react";


type customType = "button" | "submit" | "reset";

// HTMLAttributes让button支持html原生属性，事件等
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    type: string;
    nativeType: customType;
    size: string;
    iconName: string;
    loading: boolean;
    round: boolean;
    circle: boolean;
    plain: boolean;
    disabled: boolean;
    children: React.ReactNode;
    onClick: (event: React.MouseEvent)=>void;
}
