import React, { useState } from "react";
import {ItemObj, ListProps} from "./interface";
import ListItem from "./listItem";
import StylesWrapper from "./styles";

// 虚拟列表
const VirtualList: React.FC<ListProps> = (props: ListProps) => {
	const { height = 300, width = 600, itemHeight = 30, stripe = false, listData, onScroll, onClick} = props;

	// 记录滚动高度
	const [scrollOffset, setScrollOffset] = useState(0),
		itemCount = listData.length,
		[selected, setSelected] = useState(-1); // 有为0的情况,所以初始值设为-1

	// 点击选择事件
	const handleClick = (event: React.MouseEvent, selected: number, item: ItemObj)=>{
		setSelected(selected);
		onClick && onClick(event, item);
	};

	// 每当滚动scrollOffset更新时，重新计算当前items
	const getChildren = () => {
		const startIdx = Math.floor(scrollOffset / itemHeight), // 可视区起始索引
			finialStartIdx = Math.max(0, startIdx - 2), // 上缓冲区起始索引
			numVisible = Math.ceil(height / itemHeight), // 可视区能展示的最大元素个数
			endIdx = Math.min(itemCount, startIdx + numVisible + 3), // 下缓冲区结束索引
			items = [];

		// 根据上面计算的索引值，不断给container添加元素
		for (let i = finialStartIdx; i < endIdx; i++) {
			const itemStyle = {
				height: itemHeight,
				top: itemHeight * i, // 计算每个元素在container中的top值
			};
			items.push(
				<ListItem
					key={i}
					idx={i}
					selected={selected}
					stripe={stripe}
					style={itemStyle}
					item={listData[i]}
					onClick={handleClick}
				/>,
			);
		}

		return items;
	};

	// 获取距离顶部的滚动值
	const handleScroll = (event: any) => {
		const { scrollTop } = event.currentTarget;
		setScrollOffset(scrollTop);
		onScroll && onScroll(event); //函数回调，即是事件触发
	};

	return (
		<StylesWrapper>
			<div
				className="virtual-list"
				style={{ width, height }}
				onScroll={handleScroll}
			>
				{getChildren()}
			</div>
		</StylesWrapper>
	);
};

export default VirtualList;
