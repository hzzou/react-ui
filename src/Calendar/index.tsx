import React, {useEffect, useRef, useState} from "react";
import StylesWrapper from "./styles";
import Button from "hzlzh-react-ui/Button";
import {CalendarProps, DateTime} from "hzlzh-react-ui/Calendar/interface";
import {Solar, Lunar} from "lunar-typescript";

const Calendar: React.FC<Partial<CalendarProps>> = (props: Partial<CalendarProps>) => {

	const {date = new Date(), onSelectDay, ...rest} = props;
	const weeks = ["日", "一", "二", "三", "四", "五", "六"];
	const now = useRef(date);
	// 获取本月有多少天的小技巧
	const days = useRef(new Date(now.current.getFullYear(), now.current.getMonth()+1, 0).getDate()); // 获取本月有多少天
	const [dateObj, setDateArr] = useState<DateTime[]>([]);
	const [firstDateDay, setFirstDateDay] = useState(
		new Date(now.current.getFullYear(), now.current.getMonth(), 1).getDay()
	); // 获取每个月的第一天是周几
	const [currentDate, setCurrentDate] = useState({
		year: now.current.getFullYear(), month: now.current.getMonth()+1,
	}); // 当前页面显示的年月
	const realDate = {
		year: new Date().getFullYear(),
		month: new Date().getMonth()+1,
		day: new Date().getDate()
	}; // 今天的年月日，用于高亮显示今天

	useEffect(()=>{
		handleLunar();
	}, [days,currentDate]);

	// 设置农历
	const handleLunar = () => {
		let arr: DateTime[] = [];
		Array(days.current).fill("").map((_,  idx)=>{
			let time = Solar.fromYmd(currentDate.year,currentDate.month , idx+1);
			let lunarTime = Lunar.fromSolar(time).getDayInChinese();
			let lunarMonth = lunarTime === "初一" ? Lunar.fromSolar(time).getMonthInChinese()+"月" : lunarTime;
			arr.push({
				date: idx+1,
				ChDate: lunarTime === "初一" ? lunarMonth : lunarTime
			});
		});
		setDateArr(arr);
	};

	// 前一个月份
	const handlePreMonth = () => {
		// 更新当前now
		now.current = new Date(now.current.getFullYear(), now.current.getMonth() -  1, now.current.getDate());
		handleUpdate();
	};
	
	// 下一个月份
	const handleNextMonth = () => {
		now.current = new Date(now.current.getFullYear(), now.current.getMonth() + 1, now.current.getDate());
		// now已经是更新后的
		handleUpdate();
	};

	// 今天
	const handleToday = () => {
		now.current = new Date();
		handleUpdate();
	};

	const handleUpdate = () => {
		days.current = new Date(now.current.getFullYear(), now.current.getMonth()+1, 0).getDate();
		// now已经是更新后的
		setFirstDateDay(new Date(now.current.getFullYear(), now.current.getMonth(), 1).getDay());
		setCurrentDate({year: now.current.getFullYear(), month: now.current.getMonth()+1});
	};

	// 选择当前日期
	const handleSelectDay = (date: DateTime) => {
		let time = Solar.fromYmd(currentDate.year,currentDate.month , date.date);
		onSelectDay && onSelectDay ({
			year: currentDate.year,
			month: currentDate.month,
			date: date.date,
			lunarYear: Lunar.fromSolar(time).getYearInChinese(),
			lunarMonth: Lunar.fromSolar(time).getMonthInChinese(),
			lunarDate: date.ChDate
		});
	};

	return(
		<StylesWrapper {...rest}>
			<div className="calendar">
				<header>
					<div className="title">{currentDate.year}年{currentDate.month}月</div>
					<div className="btns">
						<Button onClick={handlePreMonth}>&lt;</Button>
						<Button onClick={handleToday}>今天</Button>
						<Button onClick={handleNextMonth}>&gt;</Button>
					</div>
				</header>
				<main className="body">
					{weeks.map(ele => <div key={ele} className="item header">{"周" + ele}</div>)}
					{/*firstDateDay使用数组循环占位，把第一天推到指定的周几去*/}
					{Array(firstDateDay).fill("").map((_, idx) => <div key={idx + 1} className="first"></div>)}
					{dateObj.map((ele, idx) => <div key={ele.date} className={["item", realDate.day === (ele.date)
					&& realDate.month === currentDate.month && realDate.year === currentDate.year ? "today" : ""].join(" ")}
					onClick={()=>handleSelectDay(ele)}>
						<div>{ele.date}</div>
						<div>{ele.ChDate}</div>
					</div>)}
				</main>
			</div>
		</StylesWrapper>
	);
};

export default Calendar;
