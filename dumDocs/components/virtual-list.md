# VirtualList

:::info{title=说明}
虚拟列表,主要用于数据量过多的渲染
:::

## **基本使用**
```tsx
import { VirtualList } from 'hzlzh-react-ui';

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
      listData={listData}
      onScroll={handleScroll}
    ></VirtualList>
  );
};
```

## **带条纹的列表**
```tsx
import { VirtualList } from 'hzlzh-react-ui';

const listData = [],
  len = 100;
for (let i = 0; i < len; i++) {
  listData.push({
    name: 'name_' + (i + 1),
  });
}


export default () => {
  return (
    <VirtualList
      height={200}
      width={300}
      itemHeight={50}
      stripe
      listData={listData}
    ></VirtualList>
  );
};
```

## **选择某一行**
```tsx
import { VirtualList } from 'hzlzh-react-ui';

const listData = [],
  len = 100;
for (let i = 0; i < len; i++) {
  listData.push({
    name: 'name_' + (i + 1),
  });
}

// 点击事件
const handleClick = (event, item) => {
    console.log('event:', event);
    console.log('item:', item);
}

export default () => {
  return (
    <VirtualList
      height={200}
      width={300}
      itemHeight={50}
      listData={listData}
      onClick={handleClick}
    ></VirtualList>
  );
};
```

## **VirtualList API**
### **VirtualList Attributes**

|    属性名     |      说明      |       类型       |  默认值  |
|:----------:|:------------:|:--------------:|:-----:|
|   width    |   虚拟列表容器宽度   | Number, String |  600  |
|   height   |   虚拟列表容器高度   |     Number     |  300  |
| itemHeight | 虚拟列表 item 高度 |     Number     |  30   |
|   stripe   |    是否斑马纹     |    Boolean     | false |
|  listData  |    虚拟列表数据    |     Array      |  []   |

### **VirtualList Event**

|    名称    |   说明   |    类型    |           参数           |
|:--------:|:------:|:--------:|:----------------------:|
| onScroll | 列表滚动事件 | Function |       mouseEvent       |
| onClick  | 列表点击事件 | Function | mouseEvent,item(当前选中项) |
