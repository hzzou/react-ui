import React from 'react';
import { ColumnProps } from './interface';

const VirtualColumn: React.FC<ColumnProps> = (props: ColumnProps) => {
  const { stripe, item, style, idx } = props;
  const td: any = [];
  const tdItem = Object.keys(item);

  tdItem.forEach((ele, idx) => {
    td.push(
      <div
        className="td"
        style={{
          width: (1 / tdItem.length) * 100 + '%',
          height: (style as any)!.height,
        }}
        key={idx + Math.random()}
      >
        {item[ele]}
      </div>,
    );
  });

  return (
    <div
      style={style}
      className={stripe ? (idx % 2 ? 'tr item-odd' : 'tr item-even') : 'tr'}
    >
      {td}
    </div>
  );
};

export default VirtualColumn;
