# Picker

在使用`use`方法导入组件库或单一组件时会把`Picker`类绑定到`Vue`原型链中，属性名为：`$Picker`

采用构造函数的方式调用`new $Picker()`。需要一个名称`(option)`为配置对象。

## 示例

定义选项的属性`data`是一个二维数组，第一层表示有多少列，第二层数组表示每列的选项。

### 单列

```javascript
new $Picker({
	data: [
		[
			{
				text: '技术',
				value: 'technology'
			},
			{
				text: '产品',
				value: 'product'
			},
			{
				text: '测试',
				value: 'test'
			},
			{
				text: '设计',
				value: 'design'
			}
		]
	],
	value: ['html'],
	onOk: (values, text, selectedIndex) => {
		this.value = values
	}
})
```

### 多列

```javascript
new $Picker({
	data: [
		[
			{
				text: '技术',
				value: 'technology'
			},
			{
				text: '产品',
				value: 'product'
			},
			{
				text: '测试',
				value: 'test'
			},
			{
				text: '设计',
				value: 'design'
			}
		],
		[
			{
				text: '北京',
				value: 'beijing'
			},
			{
				text: '上海',
				value: 'shanghai'
			},
			{
				text: '广州',
				value: 'guangzhou'
			},
			{
				text: '深圳',
				value: 'shenzhen'
			}
		]
	],
	value: ['html'],
	onOk: (values, text, selectedIndex) => {
		this.value = values
	}
})
```

## 级联选择

- 当前设置`cascade`参数为`true`开启级联选择模式。当改变其中一列的选中项时，会调用传入的`rule`函数（改变最后一列不会调用）。
  调用次数取决于当前需要级联的列数。
- 比如当前总共三列。改变第一列的值，会调用两次`rule`函数,改变第二列的值，会调用一次`rule`函数。改变第三列也就是最后一列的值，不会调用。
- 回调`rule`函数参数：`{column:Number,selectedIndex:Number,value:String}`，`column`：当前改变的列索引、`selectedIndex`：当前改变的列的选项索引、`value`：当前改变的列的选项值
- `rule`函数要返回需要级联选择的数组。例如：

```javascript
new this.$Picker({
	data: list,
	value: value,
	title: {
		text: '城市选择'
	},
	cascade: true,
	rule({ column, selectedIndex, value }) {
		return data.filter(item => {
			return item.parentId === value
		})
	},
	onOk: (values, text, selectedIndex) => {
		this.value = values
		this.text = text
	}
})
```

## Option

| 名称      | 类型     | 默认值  | 可选值     | 说明                                    |
| --------- | -------- | ------- | ---------- | --------------------------------------- |
| data      | Array    | []      |            | 二维数组                                |
| value     | Array    | []      |            | 数组每一项代表一个列的选中值            |
| dataValue | String   | "value" |            | `data`名称的数组对象中`value`属性的名字 |
| cascade   | Boolean  | false   | true/false | 是否为级联模式                          |
| rule      | Function |         |            | 级联模式下的回调函数                    |

## Event

| 事件名 | 描述     | 参数                                                                             |
| ------ | -------- | -------------------------------------------------------------------------------- |
| onOk   | 确定事件 | `values`选中的值(数组), `text`选中的 text(数组), `selectedIndex`选中的索引(数组) |
