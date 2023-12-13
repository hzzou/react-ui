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


## **Dialog API**
### **Dialog Attributes**
|    属性名     |   说明   |       类型       |  默认值  |
|:----------:|:------:|:--------------:|:-----:|
| showDialog | 是否显示弹窗 |    Boolean     | false |
|   modal    | 是否展示蒙层 |    Boolean     | true  |
|   width    |  弹窗宽度  | String, Number |  500  |
|   height   |  弹窗高度  | String, Number |  300  |

### **Dialog Events**
|   名称    |   说明    |     类型     |       参数       |
|:-------:|:-------:|:----------:|:--------------:|
| onOpen  | 打开弹窗的回调 |  Function  | value: boolean |
| onClose | 关闭弹窗的回调 |  Function  |   mouseEvent   |

### **Dialog Slots**
|  插槽名称   |             说明             |
|:-------:|:--------------------------:|
|  title  | 对话框标题的内容,会替换标题部分，但不会移除关闭按钮 |
| content |        弹窗主体部分自定义内容         |
| footer  |       弹窗底部按钮操作区自定义内容       |
