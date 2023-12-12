# Button
:::info{title=说明}
常用的操作按钮
:::

## **基础用法**
```tsx
import {Button} from "hzlzh-react-ui";

export default ()=>{
    
    return(
        <div style={{display: "grid", gridTemplateRows: "repeat(4, 1fr)", gridTemplateColumns: "repeat(5, 1fr)", placeItems: "center", gridGap: 20}}>
            <>
                <Button>默认按钮</Button>
                <Button type="primary">主要按钮</Button>
                <Button type="success">成功按钮</Button>
                <Button type="warning">警告按钮</Button>
                <Button type="danger">危险按钮</Button>
            </>
            <>
                <Button plain>朴素按钮</Button>
                <Button type="primary" plain>主要按钮</Button>
                <Button type="success" plain>成功按钮</Button>
                <Button type="warning" plain>警告按钮</Button>
                <Button type="danger" plain>危险按钮</Button>
            </>
            <>
                <Button round>圆角按钮</Button>
                <Button type="primary" round>主要按钮</Button>
                <Button type="success" round>成功按钮</Button>
                <Button type="warning" round>警告按钮</Button>
                <Button type="danger" round>危险按钮</Button>
            </>
            <>
                <Button circle iconName="search"></Button>
                <Button type="primary" circle iconName="edit"></Button>
                <Button type="success" circle iconName="add"></Button>
                <Button type="warning" circle iconName="warning"></Button>
                <Button type="danger" circle iconName="delete"></Button>
            </>
        </div>
    )
}
```

## **禁用状态**
:::info{title=说明}
按钮不可用状态，使用disabled属性来定义按钮是否可用，接受一个Boolean值
:::
```tsx
import {Button} from "hzlzh-react-ui";

export default ()=>{
    return(
        <div style={{display: "grid", gridTemplateRows: "repeat(2, 1fr)", gridTemplateColumns: "repeat(5, 1fr)", placeItems: "center", gridGap: 20}}>
            <>
                <Button disabled>默认按钮</Button>
                <Button type="primary" disabled>主要按钮</Button>
                <Button type="success" disabled>成功按钮</Button>
                <Button type="warning" disabled>警告按钮</Button>
                <Button type="danger" disabled>危险按钮</Button>
            </>
            <>
                <Button plain disabled>朴素按钮</Button>
                <Button type="primary" plain disabled>主要按钮</Button>
                <Button type="success" plain disabled>成功按钮</Button>
                <Button type="warning" plain  disabled>警告按钮</Button>
                <Button type="danger" plain disabled>危险按钮</Button>
            </>
        </div>
    )
}
```

## **图标按钮**
:::info{title=说明}
传入iconName属性即可，参考icon组件的name属性
:::
```tsx
import {Button} from "hzlzh-react-ui";

export default ()=>{
    return(
        <div style={{display:"grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 50, alignItems: "center"}}>
            <Button type="primary" iconName="edit"></Button>
            <Button type="primary" iconName="share"></Button>
            <Button type="primary" iconName="delete"></Button>
            <Button type="primary" iconName="search">搜索</Button>
        </div>
    )
}
```

## **加载中**
:::info{title=说明}
点击按钮后进行数据加载，按钮显示加载中的状态，只需设置loading属性为true即可
:::
```tsx
import {Button} from "hzlzh-react-ui";

export default ()=>{
    return(
        <>
            <Button type="primary" loading={true}>加载中</Button>
        </>
    )
}
```

## **不同尺寸**
:::info{title=说明}
默认尺寸是medium，还有small和large，通过size属性设置
:::

```tsx
import {Button} from "hzlzh-react-ui";

export default ()=>{
    return(
        <div style={{display:"grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: 50, alignItems: "center"}}>
            <Button size="small">小按钮</Button>
            <Button>默认按钮</Button>
            <Button size="large">大按钮</Button>
        </div>
    )
}
```

