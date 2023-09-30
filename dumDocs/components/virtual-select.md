# VirtualSelect

:::info{title=说明}
虚拟下拉框,主要用数据过多的下拉框渲染
:::

## **基本使用**
```tsx
import { VirtualSelect } from "hzlzh-react-ui";
const listData = [],
    len = 100;
for (let i = 0; i < len; i++) {
    listData.push({
        name: 'name_' + (i + 1),
        value: 'value_' + (i + 1)
    });
}


// 选择事件
const handleSelect = (event, item) => {
    console.log('event:', event);
    console.log('item:', item);
}

export default () => {
    return (
        <VirtualSelect listData={listData} onSelect={handleSelect}>
        </VirtualSelect>
    )
}
```

## **VirtualSelect API**
### **VirtualSelect Attributes**

|    属性名     |        说明         |   类型    | 默认值 |
|:----------:|:-----------------:|:-------:|:---:|
|   height   |    虚拟Select高度     | Number  | 200 |
|   width    |    虚拟Select宽度     | Number  | 300 |
| itemHeight | 虚拟Select下拉item 高度 | Number  | 40  |
|  listData  |   虚拟Select下拉框数据   |  Array  | []  |

### **VirtualSelect Event**

|    名称    |     说明     |    类型    |           参数           | 
|:--------:|:----------:|:--------:|:----------------------:|
| onSelect | Select选中事件 | Function | mouseEvent，item(当前选中项) |
