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


## **Modal API**
### **Modal Attributes**
|  属性名   |      说明       |        类型        | 默认值  |
|:------:|:-------------:|:----------------:|:----:|
|  ref   | 组件暴露给父级获取DOM等 | React.forwardRef |      |
| modal  |    是否展示蒙层     |     Boolean      | true |
| width  |     弹窗宽度      |  String, Number  | 500  |
| height |     弹窗高度      |  String, Number  | 300  |

### **Modal Events**
|   名称    |   说明    |    类型    |       参数       |
|:-------:|:-------:|:--------:|:--------------:|
| onOpen  | 打开弹窗的回调 | Function | value: boolean |
| onClose | 关闭弹窗的回调 | Function | value: boolean |

### **Modal Slots**
|  插槽名称   |             说明             |
|:-------:|:--------------------------:|
|  title  | 对话框标题的内容,会替换标题部分，但不会移除关闭按钮 |
| content |        弹窗主体部分自定义内容         |
| footer  |       弹窗底部按钮操作区自定义内容       |
