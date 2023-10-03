import React from "react";
import {StylesWrapper} from "./styles";
import {IconProps} from "./interface";
import "../../assets/fonts/iconfont.css";

const Icon: React.FC<IconProps> = (props: IconProps) => {
	const {name, color = "#999", size = 16} = props;

	return (
		<StylesWrapper>
			<i className={["iconfont", "icon-"+name].join(" ")}
			   style={{color, fontSize: size+"px"}}></i>
		</StylesWrapper>
	);
};

export default Icon;
