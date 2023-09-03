import React from 'react';

export interface ListProps {
  height: number;
  width: number;
  stripe: boolean;
  itemHeight: number;
  listData: Array<any>;
  onScroll: (event: React.MouseEvent) => void;
}

export interface ItemProps {
  idx: number;
  stripe: boolean;
  style: object;
  item: any;
}
