# ActionSheet

在使用`use`方法导入组件库或单一组件时会把`ActionSheet`类绑定到`Vue`原型链中，属性名为：`$ActionSheet`

采用构造函数的方式调用`new $ActionSheet()`。需要一个参数`(option)`为配置对象。

## 示例

```javascript
new $ActionSheet(MyComponent, {
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
	onChange: item => {
		console.log(item)
	}
})
```

## Option

| 参数        | 类型    | 默认值  | 可选值     | 说明                                                                                           |
| ----------- | ------- | ------- | ---------- | ---------------------------------------------------------------------------------------------- |
| title       | String  |         |            | 标题                                                                                           |
| data        | Array   | []      |            | 数组对象，如果数组中不是对象如：`[1,2]`，那么会自动转换成`[{text:1,value:1},{text:2,value:2}]` |
| dataText    | String  | "text"  |            | `data`参数的数组对象中`text`属性的名字                                                         |
| dataValue   | String  | "value" |            | `data`参数的数组对象中`value`属性的名字                                                        |
| cancelText  | String  | "取消"  |            | 取消按钮的名称                                                                                 |
| isMaskClose | Boolean | true    | true/false | 点击遮罩是否关闭                                                                               |

## Event

| 收件名   | 描述     | 参数           |
| -------- | -------- | -------------- |
| onChange | 选中事件 | `item`选中的项 |
