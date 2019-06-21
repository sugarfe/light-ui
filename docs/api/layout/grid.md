# Grid

网格布局

共分为两个组件`<l-grid>`和`<l-grid-item>`

## 示例

```html
<l-grid ref="grid" :col="3" :square="true" spacing="1px" vertical="1px">
	<l-grid-item>1</l-grid-item>
	<l-grid-item>2</l-grid-item>
	<l-grid-item>3</l-grid-item>
	<l-grid-item>4</l-grid-item>
</l-grid>
```

## Grid Props

| 参数     | 类型    | 默认值 | 可选值     | 说明               |
| -------- | ------- | ------ | ---------- | ------------------ |
| col      | Number  | 1      |            | 定义列的数量       |
| square   | Boolean | true   | true/false | 高度是否为宽度一致 |
| spacing  | String  |        |            | 定义左右间隙       |
| vertical | String  |        |            | 定义上下间隙       |
