import React from "react";
export interface ListProps {
    height?: number;
    width?: number | string;
    stripe?: boolean;
    itemHeight?: number;
    listData: Array<ItemObj>;
    onScroll?: (event: React.MouseEvent) => void;
    onClick?: (event: React.MouseEvent, item: ItemObj) => void;
}
export interface ItemObj {
    name: string;
    value?: string | number;
    [key: string]: any;
}
export interface ItemProps {
    idx: number;
    selected?: number;
    stripe?: boolean;
    style: object;
    item: ItemObj;
    onClick?: (event: React.MouseEvent, selected: number, item: ItemObj) => void;
}
