# Calendar
:::info{title=说明}
日历组件, 支持农历, 支持原始HTML元素属性和事件
:::

## **基础用法**
```tsx
import {Calendar} from "hzlzh-react-ui";

export default ()=>{
    const handleClick = ()=>{
        console.log("直接添加在组件上的事件，需要props继承原生属性")
    }
    
    // 选择某个日期
    const handleSelect = (time)=>{
        console.log("time:", time)
    }
    
    return(
        <Calendar onClick={handleClick} onSelectDay={handleSelect} />
    )
}
```

## **Calendar API**
###  **Calendar Attributes**

| 属性名  |   说明    |  类型  | 默认值  |
|:----:|:-------:|:----:|:----:|
| date | 日历初始化时间 | Date | 当前时间 |

### **Calendar Events**
|     名称      |     说明      |    类型    |                          参数                           |
|:-----------:|:-----------:|:--------:|:-----------------------------------------------------:|
| onSelectDay | 选取某个日期(含农历) | Function | { year, month, date, lunarYear,lunarMonth, lunarDate} |
