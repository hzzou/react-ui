import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import VirtualTable from "../index";
import {ItemObj} from "../interface";

describe("测试虚拟table", ()=>{
	let tableData: Array<ItemObj> = [], len = 10000;
	beforeAll(()=>{
		for (let i = 0; i < len; i++) {
			tableData.push({
				name: "name_" + (i + 1),
				date: "date_" + (i + 1),
				address: "address_" + (i + 1),
				state: "state_" + (i + 1),
			});
		}
	});

	test("空渲染测试", ()=>{
		const {container} = render(<VirtualTable></VirtualTable>);
		expect(container).toContainElement(screen.getByText("暂无数据"));
	});


	test("非空渲染测试", ()=>{
		const handleScroll = jest.fn((event)=>console.log(event));
		const {container} = render(<VirtualTable tableData={tableData} onScroll={handleScroll}></VirtualTable>);

		const element = container.querySelector(".table") as Element;
		fireEvent.scroll(element);
		expect(handleScroll).toBeCalled();
	});

	test("单选测试", ()=>{
		const handleCheck = jest.fn((item)=>console.log(item));
		const {container} = render(<VirtualTable openSelect stripe={true} tableData={tableData} onCheck={handleCheck}></VirtualTable>);

		// 要设置stripe才有item-odd和item-even
		const element = container.querySelector(".item-odd") as Element;
		fireEvent.click(element);
		expect(handleCheck).toHaveBeenCalled(); // toBeCalled一样

		// 全选
		const ele = container.querySelector(".thead .tr") as Element;
		fireEvent.click(ele);
		expect(handleCheck).toHaveBeenCalled();
	});

	test("多选选测试", ()=>{
		const handleCheck = jest.fn((item)=>console.log(item));
		const {container} = render(<VirtualTable openSelect multiSelect stripe={true} tableData={tableData} onCheck={handleCheck}></VirtualTable>);

		// 要设置stripe才有item-odd和item-even
		const ele_1 = container.querySelector(".item-odd") as Element;
		const ele_2 = container.querySelector(".item-even") as Element;
		fireEvent.click(ele_1);
		expect(handleCheck).toHaveBeenCalled(); // toBeCalled一样
		fireEvent.click(ele_2);
		expect(handleCheck).toHaveBeenCalled(); // toBeCalled一样

		// 全选
		const ele = container.querySelector(".thead .tr") as Element;
		fireEvent.click(ele);
		expect(handleCheck).toHaveBeenCalled();


	});
});
