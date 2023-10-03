import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import VirtualSelect from "../index";
import {ItemObj} from "../../VirtualList/interface";

describe("测试虚拟select", ()=>{
	let data: Array<ItemObj> = [];
	beforeAll(()=>{
		for(let i = 0; i < 10000; i++){
			data.push({
				name: "name_" + (i + 1),
				date: "date_" + (i + 1),
				address: "address_" + (i + 1),
				state: "state_" + (i + 1)
			});
		}
	});

	test("选择测试", ()=>{
		const handleSelect = jest.fn((event, item)=>console.log("item:", item));
		const {container, debug, queryByText} = render(<VirtualSelect listData={data} onSelect={handleSelect}></VirtualSelect>);

		// 也可以 screen.queryByText
		const icon = container.querySelector(".icon") as Element;
		fireEvent.click(icon);

		// debug();
		// 测试下拉框是否展开
		expect(container).toContainElement(queryByText("name_2"));
		// 测试选择
		fireEvent.click(queryByText("name_3") as Element);
		expect(handleSelect).toBeCalled();


	});
});

