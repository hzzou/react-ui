import React, {useState} from "react";
import StylesWrapper from "./styles";
import VirtualList from "../VirtualList";
import Icon from "../Icon";
import {SelectProps} from "./interface";
import {ItemObj} from "../VirtualList/interface";

const VirtualSelect: React.FC<SelectProps> = (props: SelectProps) => {
	const {width = 300, itemHeight = 40, height = 200, listData, onSelect} = props;

	const [showOption, setShowOption] = useState(false),
		[inputValue, setInput] = useState("");

	// 显示下拉框
	const handleOption = ()=>{
		setShowOption(!showOption);
	};

	// 选择某一行
	const handleSelect = (event: React.MouseEvent, item: ItemObj)=>{
		setInput(item.name);
		onSelect && onSelect(event, item);

		setTimeout(()=>{
			setShowOption(false);
		}, 800);
	};

	// 失去焦点
	const handleBlur = (event: any)=>{
		const {value} = event.currentTarget;

		setTimeout(()=>{
			if(inputValue === value){
				setShowOption(false);
			}
		}, 800);
	};


	return(
		<StylesWrapper>
			<div className="virtual-select" style={{width}}>
				<input defaultValue={inputValue} onFocus={handleOption} onBlur={handleBlur} className="input" style={{width, height: itemHeight}}></input>
				<div className="icon" onClick={handleOption}>
					{   showOption ?
						<Icon name='arrow-up-bold'></Icon> :
						<Icon name='arrow-down-bold'></Icon>
					}
				</div>
				<div className="tip" style={{ display: showOption ? "block" : "none", top: itemHeight}}></div>
				<div className="tip-cover"style={{display: showOption ? "block" : "none", top: itemHeight+1}}></div>
				<div className="option" style={{
					display: showOption ? "block" : "none",
					width,
					top: itemHeight+10,
				}}>

					<VirtualList onClick={handleSelect} width={width} itemHeight={itemHeight} height={height} listData={listData} />
				</div>
			</div>
		</StylesWrapper>
	);
};

export default VirtualSelect;
