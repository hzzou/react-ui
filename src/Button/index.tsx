import React from "react";
import styles from "./index.module.scss";
import {ButtonProps} from "hzlzh-react-ui/Button/interface";
import Icon from "../Icon";


const Button: React.FC<Partial<ButtonProps>> = (props: Partial<ButtonProps>)=>{

	const  { type = "default", nativeType = "button", size = "medium",
		iconName = "", loading = false, round = false, circle = false,
		plain  = false, disabled = false, children, ...rest} = props;

	// click事件(非原生元素组件，即使是原生click事件也需要用回调封装回传)
	// 也可用ButtonProps接口继承HTMLAttributes,使用...rest全部赋值在button上
	const handleClick = (event: React.MouseEvent)=>{
		// onClick && onClick(event);
	};


	return(
		<div className={styles["hz-button"]}>
			<button
				{...rest}
				className={[
					styles[type], styles[size],
					round ? styles["round"] : null,
					circle ? styles["circle"] : null,
					plain ? styles["plain"] : null,
					loading ? styles["loading"] : null
				].filter(ele=>ele!==null).join(" ")}
				type={nativeType}
				disabled={disabled}
			>
				{loading ? <span className={styles["pre-icon"]}><Icon className={[styles["icon-loading"], styles["hz-icon"]].join(" ")} name="loading" ></Icon></span> : null}
				{iconName && !loading ? <span className={styles["pre-icon"]}><Icon name={iconName} className={styles["hz-icon"]}></Icon></span> : null}
				{children ? <span>{children}</span> : null}
			</button>
		</div>
	);
};

export default Button;
