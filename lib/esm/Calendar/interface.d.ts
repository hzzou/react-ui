import { HTMLAttributes } from "react";
export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
    date: Date;
    onSelectDay?: (time: object) => void;
}
export interface DateTime {
    date: number;
    ChDate: string;
}
