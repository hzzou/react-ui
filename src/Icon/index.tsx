import React from "react";
import {StylesWrapper} from "./styles";
import {IconProps} from "./interface";
import "../../assets/fonts/iconfont.css";

const Icon: React.FC<IconProps> = (props: IconProps) => {
	// 其实接口 那里不用继承也可以,只需要props这里实现...rest即可,只不过是为了更好的有提示
	const {name, color = "#999", size = 16, className, ...rest} = props;

	return (
		<StylesWrapper {...rest}>
			<i className={["hz-icon", "iconfont", "icon-"+name, className].join(" ")}
			   style={{color, fontSize: size+"px"}}></i>
		</StylesWrapper>
	);
};

export default Icon;
