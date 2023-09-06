import React from "react";
import { ColumnProps } from "./interface";

const VirtualRow: React.FC<ColumnProps> = (props: ColumnProps) => {
	const { stripe, item, style, idx } = props;
	const td: any = [];
	const tdItem = Object.keys(item);

	tdItem.forEach((ele, idx) => {
		td.push(
			<li
				className="td"
				style={{
					width: (1 / tdItem.length) * 100 + "%",
					height: (style as any)!.height,
				}}
				key={idx + Math.random()}
			>
				{item[ele]}
			</li>,
		);
	});

	return (
		<ul
			style={style}
			className={stripe ? (idx % 2 ? "tr item-even" : "tr item-odd") : "tr"}
		>
			{td}
		</ul>
	);
};

export default VirtualRow;
