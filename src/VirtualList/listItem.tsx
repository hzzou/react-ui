//虚拟列表Item
import React from "react";
import {ItemObj, ItemProps} from "./interface";

const ListItem: React.FC<ItemProps> = ({
	idx,
	selected,
	stripe,
	style,
	item,
	onClick
}: ItemProps) => {

	const handleClick = (event: React.MouseEvent, idx: number, item: ItemObj)=>{
		onClick && onClick(event, idx, item);
	};

	// event => handleClick(event)
	return (
		<div
			onClick={event=>handleClick(event, idx, item)}
			className={
				stripe
					? idx % 2
						? selected === idx ? "selected list list-item-even" : "list list-item-even"
						: selected === idx ? "selected list list-item-odd" : "list list-item-odd"
					: selected === idx ? "selected list" : "list"
			}
			style={style}
		>
			{item.name}
		</div>
	);
};

export default ListItem;
