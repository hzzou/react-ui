import React from 'react';
type TextAlign = 'left' | 'center' | 'right';
export interface TableProps {
  style: object;
  height: number;
  itemHeight: number;
  showHeader: boolean;
  tableData: Array<any>;
  stripe: boolean;
  headerAlign: TextAlign;
  align: TextAlign;
  fixHead: boolean;
  onScroll: (event: React.MouseEvent) => void;
}
export interface ColumnProps {
  stripe: boolean;
  idx: number;
  item: any;
  style: object;
}
export {};
