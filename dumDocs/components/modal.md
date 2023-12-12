# Modal
:::info{title=说明}
使用React Hooks实现弹窗
:::

## **基本用法**
```tsx
import {Modal, Button} from "hzlzh-react-ui";
import {useState, useRef} from "react";
import Footer from "dumi/theme-default/slots/Footer";

export default () => {
    const modalRef = useRef(null);

    const handleShow = () => {
        modalRef && modalRef.current.handleOpen();
    }

    const handleClose = () => {
        modalRef && modalRef.current.handleClose();
    }

    const Footer = () => {
        return (
            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <Button onClick={handleClose}>取消</Button>
                <Button style={{marginLeft: '10px'}} type="primary" onClick={handleClose}>确定</Button>
            </div>
        )
    }
    
    return (
        <>
            <Button type="primary" onClick={handleShow}>展示弹窗</Button>
            <Modal
                ref={modalRef}
                content={<div>Modal内容部分</div>}
                footer={<Footer/>}
                onClose={handleClose}
            ></Modal>
        </>
    )
}

```

## **没有蒙层**
```tsx
import {Modal, Button} from "hzlzh-react-ui";
import {useState, useRef} from "react";

export default () => {
    const modalRef = useRef(null);
    
    const handleShow = ()=>{
        modalRef && modalRef.current.handleOpen();
    }
    
    const handleClose = ()=>{
        modalRef && modalRef.current.handleClose();
    }

    const Footer = () => {
        return (
            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <Button onClick={handleClose}>取消</Button>
                <Button style={{marginLeft: '10px'}} type="primary" onClick={handleClose}>确定</Button>
            </div>
        )
    }
    
    return (
        <>
            <Button type="primary" onClick={handleShow}>展示弹窗</Button>
            <Modal
                ref={modalRef}
                modal={false}
                content={<div>Modal内容部分</div>}
                footer={<Footer />}
                onClose={handleClose}
            ></Modal>
        </>
    )
}
```

## **自定义标题**
```tsx
import {Modal, Button} from "hzlzh-react-ui";
import {useState, useRef} from "react";

export default () => {
    const modalRef = useRef(null);
    
    const handleShow = ()=>{
        modalRef && modalRef.current.handleOpen();
    }
    
    const handleClose = ()=>{
        modalRef && modalRef.current.handleClose();
    }
    
    const Title = () => {
        return(
            <div>
                自定义标题部分
            </div>
        )
    }

    const Footer = () => {
        return (
            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <Button onClick={handleClose}>取消</Button>
                <Button style={{marginLeft: '10px'}} type="primary" onClick={handleClose}>确定</Button>
            </div>
        )
    }
    
    return (
        <>
            <Button type="primary" onClick={handleShow}>展示弹窗</Button>
            <Modal
                ref={modalRef}
                title={<Title />}
                content={<div>Modal内容部分</div>}
                footer={<Footer />}
                onClose={handleClose}
            ></Modal>
        </>
    )
}
```
