# VirtualTable

:::info{title=说明}
虚拟表格,主要用于数据量过多的表格渲染
:::

## **基本使用**
```tsx
import { VirtualTable } from 'hzlzh-react-ui';

const tableData = [],
  len = 10000;
for (let i = 0; i < len; i++) {
  tableData.push({
    name: 'name_' + (i + 1),
    date: 'date_' + (i + 1),
    address: 'address_' + (i + 1),
    state: 'state_' + (i + 1),
  });
}

// 滚动事件
const handleScroll = (event) => {
    console.log('event:', event);
};

// tableLayout的fixed需要配合固定宽度
export default () => {
  return (
    <VirtualTable
      headerAlign={'center'}
      align={'center'}
      height={300}
      tableData={tableData}
      onScroll={handleScroll}
    ></VirtualTable>
  );
};
```
:::warning{title=提示}
表格的滚动是相对于外层table，而非tbody
:::

## **带斑马纹理的表格**
```tsx
import { VirtualTable } from 'hzlzh-react-ui';

const tableData = [],
  len = 10000;
for (let i = 0; i < len; i++) {
  tableData.push({
    name: 'name_' + (i + 1),
    date: 'date_' + (i + 1),
    address: 'address_' + (i + 1),
    state: 'state_' + (i + 1),
  });
}


export default () => {
  return (
    <VirtualTable
      stripe
      headerAlign={'center'}
      align={'center'}
      height={300}
      tableData={tableData}
    ></VirtualTable>
  );
};
```

## **表格单选**
```tsx
import { VirtualTable } from 'hzlzh-react-ui';

const tableData = [],
  len = 10000;
for (let i = 0; i < len; i++) {
  tableData.push({
    name: 'name_' + (i + 1),
    date: 'date_' + (i + 1),
    address: 'address_' + (i + 1),
    state: 'state_' + (i + 1),
  });
}

// 选择事件
const handleCheck = (item) => {
    console.log('item:', item);
};

export default () => {
  return (
    <VirtualTable
      headerAlign={'center'}
      align={'center'}
      height={300}
      tableData={tableData}
      openSelect
      onCheck={handleCheck}
    ></VirtualTable>
  );
};
```

## **表格多选**
```tsx
import { VirtualTable } from 'hzlzh-react-ui';

const tableData = [],
  len = 10000;
for (let i = 0; i < len; i++) {
  tableData.push({
    name: 'name_' + (i + 1),
    date: 'date_' + (i + 1),
    address: 'address_' + (i + 1),
    state: 'state_' + (i + 1),
  });
}

// 选择事件
const handleCheck = (item) => {
    console.log('item:', item);
};

export default () => {
  return (
    <VirtualTable
      headerAlign={'center'}
      align={'center'}
      height={300}
      tableData={tableData}
      openSelect
      multiSelect
      onCheck={handleCheck}
    ></VirtualTable>
  );
};
```
## **VirtualTable API**
### **VirtualTable Attributes**

|     属性名     |        说明        |   类型    |  默认值  |
|:-----------:|:----------------:|:-------:|:-----:|
|   height    |      虚拟表格高度      | Number  |  400  |
| itemHeight  |   虚拟表格 item 高度   | Number  |  40   |
| showHeader  |      是否显示表头      | Boolean | true  |
|  tableData  |      虚拟表格数据      |  Array  |  []   |
|   stripe    |      是否斑马纹       | Boolean | false |
| headerAlign |   虚拟表格头部文字对齐方式   | String  | left  |
|   fixHead   |    虚拟表格头部是否固定    | Boolean | true  |
|    align    | 虚拟表格 body 文字对齐方式 | String  | left  |
| openSelect  |     虚拟表格开启选择     | Boolean | false |
| multiSelect | 虚拟表格开启选择后是否为多选模式 | Boolean | false |

### **VirtualTable Event**

|    名称    |   说明   |    类型    |     参数      | 
|:--------:|:------:|:--------:|:-----------:|
| onScroll | 表格滚动事件 | Function | mouseEvent  |
| onCheck  | 表格选中事件 | Function | item(当前选中项) |
