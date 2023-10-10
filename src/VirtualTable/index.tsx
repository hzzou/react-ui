import React, {useEffect, useRef, useState} from "react";
import {ItemObj, TableProps} from "./interface";
import StylesWrapper from "./styles";
import VirtualRow from "./virtualRow";

const VirtualTable: React.FC<TableProps> = (props: TableProps) => {
	const {
		itemHeight = 40,
		showHeader = true,
		stripe = false,
		tableData = [],
		height = 400,
		fixHead = true,
		headerAlign = "left",
		align = "left",
		openSelect = false,
		multiSelect = false,
		onCheck,
		onScroll
	} = props;

	const inputRef = useRef<HTMLInputElement>(null);

	const thHead: any = [],
		[scrollOffset, setScrollOffset] = useState(0),
		[currentIdx, setCurrentIdx] = useState(-1), // 单选的当前索引
		[selected, setSelected] = useState<number[]>([]), // 多选的标记索引数组
		[selectedItem, setSelectedItem] = useState<Array<ItemObj>>([]), // 多选选中多行的item数组
		itemCount = tableData.length;

	// 表头
	const head = tableData.length > 0 ? Object.keys(tableData[0]) : [];
	head.forEach((item) => {
		thHead.push(
			<li
				className="th"
				style={{ width: (1 / head.length) * 100 + "%", height: itemHeight }}
				key={item}
			>
				{item}
			</li>,
		);
	});

	// 开启选择框
	openSelect && thHead.unshift(
		<li className="th" key={"checkbox"}>
			<input type="checkbox" ref={inputRef} />
		</li>
	);

	// 此处Effect是为了监控设置input的半选和全选
	useEffect(()=>{
		if(openSelect){
			if(multiSelect){
				const len = selected.length;
				if(len === 0){
					inputRef!.current!.indeterminate = false;
					inputRef!.current!.checked = false;
				}
				else if(len > 0 && len < itemCount){
					inputRef!.current!.indeterminate = true;
				}
				else if(len === itemCount){
					inputRef!.current!.indeterminate = false;
					inputRef!.current!.checked = true;
				}
			}
			else{
				currentIdx > -1 ? inputRef!.current!.indeterminate = true : inputRef!.current!.indeterminate = false;
			}
		}
	}, [inputRef, multiSelect, openSelect, currentIdx, selected]);


	// 获取距离顶部的滚动距离
	// 滚动事件不能添加到tbody上,会影响到fixHead固定头部属性
	const handleScroll = (event: any) => {
		// 虽然浏览器上看currentTarget是null但是能拿到
		const { scrollTop } = event.currentTarget;
		setScrollOffset(scrollTop);
		onScroll && onScroll(event); //函数回调，即是事件触发
	};

	// 行选中
	const handleCheck = (item: ItemObj, current: number) => {
		if(multiSelect){
			const arr = selected.includes(current) ? selected.filter(ele=>ele!==current) : [...selected, current];
			const itemArr = selectedItem.includes(item) ? selectedItem.filter(ele=>ele!==item) : [...selectedItem, item];

			setSelected(arr);
			setSelectedItem(itemArr);
			openSelect && onCheck && onCheck(itemArr);
		}
		else{
			const idx = currentIdx === current ? -1 : current;
			setCurrentIdx(idx);
			openSelect && onCheck && onCheck( idx === -1 ? {} as ItemObj : item);
		}

	};

	// 全选中
	const handleAllSelect = ()=>{
		if(multiSelect){
			inputRef!.current!.checked = false;
			const arr = selected.length > 0 ? [] : tableData.map((ele, idx)=>idx);
			const itemArr = selectedItem.length > 0 ? [] : tableData;
			setSelected(arr);
			setSelectedItem(itemArr);
			onCheck && onCheck(itemArr);
		}
		else{
			inputRef!.current!.checked = false;
			inputRef!.current!.indeterminate = false;
			setCurrentIdx(-1);
		}

	};

	// 获取可视区元素
	const getClientChildren = () => {
		const starIdx = Math.floor(scrollOffset / itemHeight), // 可视区起始索引
			finialStartIdx = Math.max(0, starIdx - 2), // 上缓冲区起始索引
			numVisible = Math.ceil(height / itemHeight), // 可视区展示的元素个数
			endIdx = Math.min(itemCount, starIdx + numVisible + 1), // 下缓冲区结束索引
			item = [];

		// 根据动态算出的起始索引，获取需要显示的元素
		for (let i = finialStartIdx; i < endIdx; i++) {
			const itemStyle = {
				textAlign: align,
				height: itemHeight,
				top: showHeader ? itemHeight + itemHeight * i : itemHeight * i, // 计算每个元素的top
			};
			item.push(
				<VirtualRow
					key={i}
					idx={i}
					stripe={stripe}
					item={tableData[i]}
					style={itemStyle}
					checked={multiSelect ?
						selected.includes(i) ? true: false :
						currentIdx === i ? true : false}
					openSelect={openSelect}
					onCheck={handleCheck}
				/>,
			);
		}
		return item;
	};

	return (
		<StylesWrapper>
			<div className="virtual-table">
				<article
					style={{ height }}
					onScroll={handleScroll}
					className="table"
				>
					{showHeader && (
						<header
							className="thead"
							style={{ position: fixHead ? "sticky" : "relative" }}
						>
							<ul onClick={handleAllSelect} className="tr" style={{ textAlign: headerAlign }}>
								{thHead}
							</ul>
						</header>
					)}
					<section className="tbody" style={{height: showHeader ? height-itemHeight : height}}>

						{
							tableData.length > 0 ?
								<>
									{getClientChildren()}
								</>
								:
								<div className="default">
									暂无数据
								</div>

						}
					</section>
				</article>
			</div>
		</StylesWrapper>
	);
};

export default VirtualTable;
