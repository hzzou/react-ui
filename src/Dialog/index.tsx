import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import StylesWrapper, {GlobalStyle} from "./styles";
import {DialogProps} from "hzlzh-react-ui/Dialog/interface";
import Icon from "../Icon";


const Dialog:React.FC<DialogProps> = (props: DialogProps)=>{

	const {showDialog = false, width = 500, height = 300,
		title, content, footer, modal = true, onOpen, onClose} = props;

	const [show, setShow] = useState(false);

	// 监控来自父级的showDialog变化
	useEffect(() => {
		setShow(showDialog);
	}, [showDialog]);

	// 关闭弹窗
	const handleClose = (event: React.MouseEvent)=>{
		event.stopPropagation();

		setShow(false);
		onClose &&  onClose();
	};

	// modal为false时, 使用createPortal把Dialog插入body
	const Dialog = ()=>{
		return(
			show ?
				<div className="dialog"
					onClick={(event)=>event.stopPropagation()}
					style={{width: width, height: height}}>
					<header className="header">
						<div>{title || "标题"}</div>
						<div onClick={handleClose}>
							<Icon name={"close"} size={20} ></Icon>
						</div>
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
			{ modal ?
				<StylesWrapper >
					<div className={show ? "modal" : ""}  onClick={handleClose} >
						<Dialog  />
					</div>
				</StylesWrapper> :
				createPortal(<div className="no-modal" style={{width: width, height: height}}><Dialog  /></div>,  document.body)
			}
			{show && !modal ? <GlobalStyle /> : null}
		</>
	);
};

export default Dialog;
