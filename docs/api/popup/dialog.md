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

## props

| 参数       | 类型    | 默认值 | 可选值     | 说明                 |
| ---------- | ------- | ------ | ---------- | -------------------- |
| title      | String  |        |            | 标题                 |
| text       | String  |        |            | 内容                 |
| confirm    | Boolean | false  | true/false | 是否为 `confirm`模式 |
| okText     | String  | '确认' |            | 确认按钮名称         |
| cancelText | String  | '取消' |            | 取消按钮名称         |
