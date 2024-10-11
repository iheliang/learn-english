# l-starRate
# ## 使用方法
配置easycom规则后，自动按需引入，无需`import`组件，直接引用即可。

```html
<template>
	<l-starRate v-model="star" :disabled="false"></l-starRate>
</template>
```
## 组件属性

| 属性 | 类型 | 默认值 | 说明 |
|:---:|:---:|:---:|---|
| value | Number | 0 | 选中星星数量 v-model双向绑定 |
| starNum | Number | 5 | 星星总数 |
| activeColor | String | #F2CB51 | 选中颜色 |
| unActiveColor | String | #B2B2B2 | 未选中时的颜色 |
| hollow | Boolean | false | 是否空心 |
| disabled | Boolean | false | 禁用点击 |

