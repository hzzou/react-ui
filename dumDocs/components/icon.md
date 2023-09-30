# Icon
:::info{title=说明}
一些常用的字体图标
:::

## **基本用法**

```tsx
import {Icon} from "hzlzh-react-ui";

export default () => {
    return (
        <Icon
            name={'user'}
        ></Icon>
    );
};
```
## **Icon API**
### **Icon Attributes**

|   属性名   |  说明   |       类型        |   默认值    |
|:-------:|:-----:|:---------------:|:--------:|
|  name   |  名字   |     String      |    ""    |
|  color  |  颜色   |     String      |  "#999"  |
|  size   |  大小   |  String,Number  |    16    |

### **name的可选值**

<code src="../demo/icon/name.tsx"></code>

