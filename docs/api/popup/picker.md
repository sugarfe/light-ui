# Picker

在使用`use`方法导入组件库或单一组件时会把`Picker`类绑定到`Vue`原型链中，属性名为：`$Picker`

采用构造函数的方式调用`new $Picker()`。需要一个名称`(option)`为配置对象。

## 示例

定义选项的属性`data`是一个二维数组，第一维度代表了有多少列，第二维度代表每列有哪些选项。

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

## Option

| 名称        | 类型    | 默认值  | 可选值     | 说明                                    |
| ----------- | ------- | ------- | ---------- | --------------------------------------- |
| data        | Array   | []      |            | 2 维数组                                |
| value       | Array   | []      |            | 数组每一项代表一个列的选中值            |
| dataValue   | String  | "value" |            | `data`名称的数组对象中`value`属性的名字 |
| cancelText  | String  | "取消"  |            | 取消按钮的名称                          |
| isMaskClose | Boolean | true    | true/false | 点击遮罩是否关闭                        |

## Event

| 事件名 | 描述     | 名称                                                                             |
| ------ | -------- | -------------------------------------------------------------------------------- |
| onOk   | 确定事件 | `values`选中的值(数组), `text`选中的 text(数组), `selectedIndex`选中的索引(数组) |
