import {HTMLAttributes} from "react";

// 让其支持原生相关属性和事件等
export interface CalendarProps extends HTMLAttributes<HTMLDivElement>{
    date: Date,
    onSelectDay?: (time: object) => void,
}


export interface DateTime{
    date: number;
    ChDate: string
}
