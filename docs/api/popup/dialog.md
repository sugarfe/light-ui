# Dialog

模态框组件

在使用`use`方法导入组件库或单一组件时会把`Popup`类绑定到`Vue`原型链中，属性名为：`$Dialog`

## 示例

```javascript
new this.$Dialog({
	title: '提示',
	text: 'hello'
})
```

## 延迟关闭

如果定义了`delayClose`值为`true`，在点击确定按钮触发`onOk`事件时会传递一个函数用来延迟关闭时调用。

```javascript
new this.$Dialog({
	title: '提示',
	text: 'hello',
	delayClose: true,
	onOk: done => {
		setTimeout(() => {
			done()
		}, 1500)
	}
})
```

## 使用`render`函数定义内容模版

```javascript
new this.$Dialog({
	title: '提示',
	text: 'hello',
	render: h => {
		return h('input', {
			class: 'dialog-input',
			domProps: {
				placeholder: '请输入'
			}
		})
	}
})
```

如果同时定义了`render`和`text`会忽略`text`的定义。

## props

| 名称       | 类型    | 默认值 | 可选值     | 说明                         |
| ---------- | ------- | ------ | ---------- | ---------------------------- |
| title      | String  |        |            | 标题                         |
| text       | String  |        |            | 内容                         |
| confirm    | Boolean | false  | true/false | 是否为 `confirm`模式         |
| okText     | String  | '确认' |            | 确认按钮名称                 |
| cancelText | String  | '取消' |            | 取消按钮名称                 |
| delayClose | Boolean | false  |            | 开启延迟关闭                 |
| render     | Object  | -      |            | 使用 render 函数定义内容模版 |

## Event

| 收件名   | 名称     | 描述               |
| -------- | -------- | ------------------ |
| onOk     | 确认事件 | 点击确定按钮时触发 |
| onCancel | 取消事件 | 点击取消按钮时触发 |
| onHandle | 处理事件 | 点击任意按钮时触发 |
