# VirtualList

:::info
虚拟列表,主要用于数据量过多的渲染
:::

```tsx
import { VirtualList } from 'react-ui';

const listData = [],
  len = 100;
for (let i = 0; i < len; i++) {
  listData.push({
    name: 'name_' + (i + 1),
  });
}

// 滚动事件
const handleScroll = (event) => {
  console.log('event:', event);
};

export default () => {
  return (
    <VirtualList
      height={200}
      width={300}
      itemHeight={50}
      stripe
      listData={listData}
      onScroll={handleScroll}
    ></VirtualList>
  );
};
```

## **VirtualList API**

### **VirtualList Attributes**

|    属性名     |      说明      |   类型    |  默认值  |
|:----------:|:------------:|:-------:|:-----:|
|   width    |   虚拟列表容器宽度   | Number  |  600  |
|   height   |   虚拟列表容器高度   | Number  |  300  |
| itemHeight | 虚拟列表 item 高度 | Number  |  30   |
|   stripe   |    是否斑马纹     | Boolean | false |
|  listData  |    虚拟列表数据    |  Array  |  []   |

### **VirtualList Event**

|    名称    |   说明   |    类型    |
|:--------:|:------:|:--------:|
| onScroll | 列表滚动事件 | Function |
