# Grid

网格布局

共分为两个组件`<Grid>`和`<GridItem>`

## 示例

```vue
<Grid ref="grid" :col="3" :square="true" spacing="1px" vertical="1px">
	<GridItem>1</GridItem>
	<GridItem>2</GridItem>
	<GridItem>3</GridItem>
	<GridItem>4</GridItem>
</Grid>
```

## Grid Props

| 名称     | 类型    | 默认值 | 可选值     | 说明               |
| -------- | ------- | ------ | ---------- | ------------------ |
| col      | Number  | 1      |            | 定义列的数量       |
| square   | Boolean | true   | true/false | 高度是自动匹配宽度 |
| spacing  | String  |        |            | 定义左右间隙       |
| vertical | String  |        |            | 定义上下间隙       |
