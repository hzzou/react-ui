# Dialog
:::info{title=说明}
使用函数回调触发事件的方式实现弹窗
:::

## **基本用法**
```tsx
import {Dialog, Button} from "hzlzh-react-ui";
import {useState} from "react";

export default () => {
    const [show, setShow] = useState(false);
    
    const handleShow = ()=>{
        setShow(true);
    }
    
    const handleClose = (ev)=>{
        console.log(ev)
        setShow(false);
    }
    
    const Footer = ()=>{
        return(
            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <Button onClick={handleClose}>取消</Button>
                <Button style={{marginLeft: '10px'}} type="primary" onClick={handleClose}>确定</Button>
            </div>
        )
    }
    
    return (
        <>
            <Button type="primary" onClick={handleShow}>展示弹窗</Button>
            <Dialog
                showDialog={show}
                content={<div>Dialog内容部分</div>}
                footer={<Footer />}
                onClose={handleClose}
            ></Dialog>
        </>
    )
}
```

## **没有蒙层**
```tsx
import {Dialog, Button} from "hzlzh-react-ui";
import {useState} from "react";

export default () => {
    const [show, setShow] = useState(false);
    
    const handleShow = ()=>{
        setShow(true);
    }
    
    const handleClose = (ev)=>{
        console.log(ev)
        setShow(false);
    }
    
    const Footer = ()=>{
        return(
            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <Button onClick={handleClose}>取消</Button>
                <Button style={{marginLeft: '10px'}} type="primary" onClick={handleClose}>确定</Button>
            </div>
        )
    }
    
    return (
        <>
            <Button type="primary" onClick={handleShow}>展示弹窗</Button>
            <Dialog
                showDialog={show}
                modal={false}
                content={<div>Dialog内容部分</div>}
                footer={<Footer />}
                onClose={handleClose}
            ></Dialog>
        </>
    )
}

```


## **自定义标题**
```tsx
import {Dialog, Button} from "hzlzh-react-ui";
import {useState} from "react";

export default () => {
    const [show, setShow] = useState(false);
    
    const handleShow = ()=>{
        setShow(true);
    }
    
    const handleClose = (ev)=>{
        console.log(ev)
        setShow(false);
    }

    const Title = () => {
        return(
            <div>
                自定义标题部分
            </div>
        )
    }
    
    const Footer = ()=>{
        return(
            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <Button onClick={handleClose}>取消</Button>
                <Button style={{marginLeft: '10px'}} type="primary" onClick={handleClose}>确定</Button>
            </div>
        )
    }
    
    return (
        <>
            <Button type="primary" onClick={handleShow}>展示弹窗</Button>
            <Dialog
                showDialog={show}
                content={<div>Dialog内容部分</div>}
                title={<Title />}
                footer={<Footer />}
                onClose={handleClose}
            ></Dialog>
        </>
    )
}
```
