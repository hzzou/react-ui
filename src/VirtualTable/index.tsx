import React, { useState } from 'react';
import { TableProps } from './interface';
import { StylesWrapper } from './styles';
import VirtualColumn from './virtualColumn';

const VirtualTable: React.FC<TableProps> = (props: TableProps) => {
  const {
    itemHeight = 40,
    showHeader = true,
    stripe = false,
    tableData,
    height = 300,
    fixHead = false,
    style,
    headerAlign = 'left',
    align = 'left',
  } = props;

  const thHead: any = [],
    [scrollOffset, setScrollOffset] = useState(0),
    itemCount = tableData.length;

  // 表头
  const head = Object.keys(tableData[0]);
  head.forEach((item) => {
    thHead.push(
      <div
        className="th"
        style={{ width: (1 / head.length) * 100 + '%', height: itemHeight }}
        key={item}
      >
        {item}
      </div>,
    );
  });

  // 获取距离顶部的滚动距离
  const handleScroll = (event: any) => {
    // 虽然浏览器上看currentTarget是null但是能拿到
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
  };

  // 获取可视区元素
  const getClientChildren = () => {
    const starIdx = Math.floor(scrollOffset / itemHeight), // 可视区起始索引
      finialStartIdx = Math.max(0, starIdx - 2), // 上缓冲区起始索引
      numVisible = Math.ceil(height / itemHeight), // 可视区展示的元素个数
      endIdx = Math.min(itemCount, starIdx + numVisible + 3), // 下缓冲区结束索引
      item = [];

    // 根据动态算出的起始索引，获取需要显示的元素
    for (let i = finialStartIdx; i < endIdx; i++) {
      const itemStyle = {
        textAlign: align,
        height: itemHeight,
        top: itemHeight * i, // 计算每个元素的top
      };
      item.push(
        <VirtualColumn
          key={i + Math.random()}
          idx={i}
          stripe={stripe}
          item={tableData[i]}
          style={itemStyle}
        />,
      );
    }
    return item;
  };

  return (
    <StylesWrapper>
      <div className="virtual-table">
        <div
          style={{ ...style, height }}
          onScroll={handleScroll}
          className="table"
        >
          {showHeader && (
            <div
              className="thead"
              style={{ position: fixHead ? 'sticky' : 'relative' }}
            >
              <div className="tr" style={{ textAlign: headerAlign }}>
                {thHead}
              </div>
            </div>
          )}
          <div className="tbody">{getClientChildren()}</div>
        </div>
      </div>
    </StylesWrapper>
  );
};

export default VirtualTable;
