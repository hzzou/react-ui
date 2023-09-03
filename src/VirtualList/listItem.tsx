//虚拟列表Item
import React from 'react';
import { ItemProps } from './interface';

const ListItem: React.FC<ItemProps> = ({
  idx,
  stripe,
  style,
  item,
}: ItemProps) => {
  return (
    <div
      className={
        stripe
          ? idx % 2
            ? 'list list-item-odd'
            : 'list list-item-even'
          : 'list'
      }
      style={style}
    >
      {item.name}
    </div>
  );
};

export default ListItem;
