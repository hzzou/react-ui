import React from "react";
import {ItemObj} from "../VirtualList/interface";

export interface SelectProps {
    height: number;
    itemHeight: number;
    width: number | string;
    listData: Array<ItemObj>;
    onSelect: (event: React.MouseEvent, item: ItemObj) => void;
}
