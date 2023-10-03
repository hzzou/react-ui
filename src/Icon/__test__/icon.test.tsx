import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom"; //引入dom
import Icon from "../index";

describe("测试Icon", function () {

	test("测试属性", ()=>{
		const {container, debug} = render(<Icon name={"user"} size={20} color={"#f00"}></Icon>);

		// debug();
		expect(container).toContainElement(container.querySelector(".icon-user"));
	});
});
