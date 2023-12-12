import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import StylesWrapper, {GlobalStyle} from "./styles";
import {ModalForward, ModalProps} from "./interface";
import Icon from "../Icon";
import {createPortal} from "react-dom";

const Modal: React.FC<ModalProps> = forwardRef((props : ModalProps, ref : React.ForwardedRef<ModalForward>)=>{

	const {title, content, footer,
		width = 500, height = 300, modal = true, onOpen, onClose} =  props;

	const [show, setShow] = useState(false);


	// 打开弹窗
	const handleOpen = ()=>{
		setShow(true);

		onOpen && onOpen(true);
	};

	// 关闭弹窗
	const handleClose = ()=>{
		setShow(false);
	};

	useEffect(() => {
		onClose && onClose(false);
	}, [onClose]);

	// 可以不把ref转发到具体的html元素,而暴露自定义方法
	useImperativeHandle(ref, ()=> {
		return {
			handleOpen,
			handleClose
		};
	}, []);

	// modal为false时, 使用createPortal把Modal插入body
	const Dialog  = () =>{
		return(
			show ?
				<div className="hz-dialog"
				 onClick={(event)=>event.stopPropagation()}
				 style={{width: width, height: height}}
				>
					<header onClick={(event)=>event.stopPropagation()} className="header" >
						<div>{title || "标题"}</div>
						<Icon onClick={handleClose} name={"close"} size={20}></Icon>
					</header>
					<article onClick={(event)=>event.stopPropagation()} className="body">
						{content}
					</article>
					<footer onClick={(event)=>event.stopPropagation()} className="footer">
						{footer}
					</footer>
				</div> : null
		);
	};

	return(
		<>
			{modal ?
				<StylesWrapper>
					{/*此处click事件是点击蒙层时关闭弹窗*/}
					<div className={show ? "modal" : ""} onClick={handleClose}>
						<Dialog />
					</div>
				</StylesWrapper> :
				show && createPortal(<div className="no-modal"><Dialog /></div>, document.body)
			}
			{show && !modal ? <GlobalStyle /> : null}
		</>

	);
});

export default Modal;
