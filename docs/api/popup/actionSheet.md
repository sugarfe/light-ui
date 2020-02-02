# ActionSheet

在使用`use`方法导入组件库或单一组件时会把`ActionSheet`类绑定到`Vue`原型链中，属性名为：`$ActionSheet`

## 示例

```javascript
new $ActionSheet({
	title: 'title',
	data: [
		{
			text: '是',
			value: 1
		},
		{
			text: '否',
			value: 0
		}
	],
	onChange: item => {}
})
```

`scopedSlots`参数可以实现自定义`item`,具体可参考[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html#%E6%8F%92%E6%A7%BD)

```javascript
new $ActionSheet({
	title: 'title',
	data: [
		{
			text: '是',
			value: 1
		},
		{
			text: '否',
			value: 0
		}
	],
	scopedSlots(h) {
		return {
			default: props => {
				return h('a', props.item.text)
			}
		}
	}
})
```

## Option

| 名称         | 类型    | 默认值  | 可选值     | 说明                                                                                           |
| ------------ | ------- | ------- | ---------- | ---------------------------------------------------------------------------------------------- |
| title        | String  |         |            | 标题                                                                                           |
| data         | Array   | []      |            | 数组对象，如果数组中不是对象如：`[1,2]`，那么会自动转换成`[{text:1,value:1},{text:2,value:2}]` |
| dataText     | String  | "text"  |            | `data`名称的数组对象中`text`属性的名字                                                         |
| dataValue    | String  | "value" |            | `data`名称的数组对象中`value`属性的名字                                                        |
| cancelText   | String  | "取消"  |            | 取消按钮的名称                                                                                 |
| isMaskClose  | Boolean | true    | true/false | 点击遮罩是否关闭                                                                               |
| itemBoxClass | String  |         |            | 设置包裹`item`容器的`class`                                                                    |

## Event

| 收件名   | 名称     | 描述           |
| -------- | -------- | -------------- |
| onChange | 选中事件 | `item`选中的项 |
