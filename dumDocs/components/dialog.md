# Dialog
:::info{title=说明}
使用函数回调触发事件的方式实现弹窗
:::

## **基本用法**

```tsx
import {Dialog} from "hzlzh-react-ui";
import {useState} from "react";

export default () => {
    const [show, setShow] = useState(false);
    
    const handleShow = ()=>{
        setShow(true);
    }
    
    const handleClose = ()=>{
        setShow(false);
    }
    return (
        <>
            <button onClick={handleShow}>展示弹窗</button>
            <Dialog
                showDialog={show}
                content={<div>内容部分</div>}
                footer={
                    <div style={{display: "flex", justifyContent: 'flex-end'}}>
                        <button onClick={handleClose}>取消</button>
                        <button style={{marginLeft: '10px'}} onClick={handleClose}>确定</button>
                    </div>
                }
                onClose={handleClose}
            ></Dialog>
        </>
    )
}

```
