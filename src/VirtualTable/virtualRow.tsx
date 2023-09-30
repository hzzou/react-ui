import React from "react";
import { ColumnProps } from "./interface";

const VirtualRow: React.FC<ColumnProps> = (props: ColumnProps) => {
	const { stripe, item, style, idx, openSelect, checked, onCheck } = props;
	const td: any = [], tdItem = Object.keys(item);

	tdItem.forEach((ele, idx) => {
		td.push(
			<li
				className="td"
				style={{
					width: (1 / tdItem.length) * 100 + "%",
					height: (style as any)!.height,
				}}
				key={idx}
			>
				{item[ele]}
			</li>,
		);
	});

	// 选择
	const handleCheck = ()=>{
		onCheck && onCheck(item, idx);
	};

	openSelect && td.unshift(
		<li className="td" key={"checkbox"}>
			<input type="checkbox" readOnly={true} checked={checked} />
		</li>
	);


	return (
		<ul
			style={style}
			onClick={handleCheck}
			className={stripe ? (idx % 2 ? "tr item-even" : "tr item-odd") : "tr"}
		>
			{td}
		</ul>
	);
};

export default VirtualRow;
