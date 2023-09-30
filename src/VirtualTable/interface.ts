import React from "react";

type TextAlign = "left" | "center" | "right";

export interface ItemObj{
  name: string;
  value: string | number;
  [key: string]: any;
}

export interface TableProps {
  style?: object;
  height: number;
  itemHeight: number;
  showHeader?: boolean;
  openSelect?: boolean;
  multiSelect?: boolean;
  tableData: Array<ItemObj>;
  stripe: boolean;
  headerAlign: TextAlign;
  align: TextAlign;
  fixHead: boolean;
  onScroll?: (event: React.MouseEvent) => void; // 函数回调
  onCheck?: (item: ItemObj | Array<ItemObj>) => void;
};

export interface ColumnProps {
  stripe: boolean;
  idx: number;
  openSelect?: boolean;
  checked?: boolean;
  item: ItemObj;
  style: object;
  onCheck?: (item: ItemObj, currentIdx: number) => void;
};
