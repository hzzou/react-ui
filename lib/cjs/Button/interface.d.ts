import React, { HTMLAttributes } from "react";
type customType = "button" | "submit" | "reset";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
    onClick: (event: React.MouseEvent) => void;
}
export {};
