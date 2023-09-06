# VirtualTable

:::info
虚拟表格,主要用于数据量过多的表格渲染
:::

```tsx
import { VirtualTable } from 'react-ui';

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

// tableLayout的fixed需要配合固定宽度
export default () => {
  return (
    <VirtualTable
      tableData={tableData}
      stripe
      headerAlign={'center'}
      align={'center'}
      height={300}
    ></VirtualTable>
  );
};
```
:::info
表格的滚动是相对于外层table，而非tbody
:::

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
|   fixHead   |    虚拟表格头部是否固定    | Boolean | false |
|    align    | 虚拟表格 body 文字对齐方式 | String  | left  |

### **VirtualTable Event**

|    名称    |   说明   |    类型    |
|:--------:|:------:|:--------:|
| onScroll | 表格滚动事件 | Function |
