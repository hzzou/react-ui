import React from "react";
import "@testing-library/jest-dom";
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VirtualList from "../index";
import {ItemObj} from "../interface";

describe("虚拟列表测试", ()=>{

	// beforeEach和afterEach在每个test之中
	// beforeAll和afterAll在所有test之前和之后
	let data: Array<ItemObj> = [];
	beforeAll(()=>{
		for (let i = 0; i < 10000; i++) {
			data.push({
				name: "name_" + (i + 1),
				date: "date_" + (i + 1),
				address: "address_" + (i + 1),
				state: "state_" + (i + 1),
			});
		}
	});

	beforeEach(()=>{
		console.log("测试开始");
	});

	afterEach(()=>{
		console.log("测试结束");
	});

	test("渲染测试", ()=>{
		const handleClick = jest.fn((event, item) => console.log("触发click:",item));
		const handleScroll = jest.fn((event)=>console.log("触发scroll:",event));
		const {container} = render(<VirtualList listData={data} onScroll={handleScroll} onClick={handleClick}></VirtualList>);

		fireEvent.click(screen.getByText("name_1"));
		expect(handleClick).toBeCalled();

		const element = container.querySelector(".virtual-list") as Element;
		fireEvent.scroll(element);
		expect(handleScroll).toBeCalled();
	});
	test("测试props", async()=>{
		const handleClick = jest.fn((event) => console.log("触发props的click:",event));
		const {container} = render(<VirtualList stripe={true} listData={data} onClick={handleClick}></VirtualList>);

		// 测试striped条纹后的selected
		await userEvent.click(screen.getByText("name_1")); // 奇数行click selected
		expect(container).toContainElement(container.querySelector(".selected"));
		await userEvent.click(screen.getByText("name_2")); //偶数行click selected
		expect(container).toContainElement(container.querySelector(".selected"));

		// 偶数行
		expect(container).toContainElement(container.querySelector(".list-item-even"));
		// 奇数行
		expect(container).toContainElement(container.querySelector(".list-item-odd"));
	});
});
