import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import StylesWrapper, {GlobalStyle} from "./styles";
import {DialogProps} from "hzlzh-react-ui/Dialog/interface";
import Icon from "../Icon";


const Dialog: React.FC<DialogProps> = (props: DialogProps)=>{

	const {showDialog = false, width = 500, height = 300,
		title, content, footer, modal = true, onOpen, onClose} = props;

	const [show, setShow] = useState(false);

	// 监控多次来自父级的showDialog变化，
	// 本身关闭时，通过父级二次传进来
	useEffect(() => {
		setShow(showDialog);
		// 打开时触发
		if(showDialog){
			onOpen && onOpen(showDialog);
		}
	}, [showDialog]);

	// 关闭弹窗
	const handleClose = (event: React.MouseEvent)=>{
		event.stopPropagation();

		setShow(false);
		onClose && onClose(event);
	};

	// modal为false时, 使用createPortal把Dialog插入body
	const Dialog = ()=>{
		return(
			show ?
				<div className="hz-dialog"
					 style={{width: width, height: height}}
					 onClick={(event)=>event.stopPropagation()}>
					<header className="header">
						<div>{title || "标题"}</div>
						<Icon onClick={handleClose} name={"close"} size={20} ></Icon>
					</header>
					<article className="body">
						{content}
					</article>
					<footer className="footer">
						{footer}
					</footer>
				</div> :  null
		);
	};

	return(
		<>
			{modal ?
				<StylesWrapper >
					{/*此处click事件是点击蒙层时关闭弹窗*/}
					<div className={show ? "modal" : ""} onClick={handleClose}>
						<Dialog  />
					</div>
				</StylesWrapper> :
				show && createPortal(<div className="no-modal"><Dialog  /></div>, document.body)
			}
			{show && !modal ? <GlobalStyle /> : null}
		</>
	);
};

export default Dialog;
