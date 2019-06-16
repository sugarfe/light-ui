# Popup

弹出组件。这是一个基础组件，所有弹出类组件都基于此组件实现。

在使用`use`方法导入组件库或单一组件时会把`Popup`类绑定到`Vue`原型链中，属性名为：`$Popup`

采用构造函数的方式调用`new $Popup()`。需要两个参数。第一个参数为一个组件对象`(VueComponent)`，也就是弹出时展示的内容。第二个参数也是一个对象`(option)`为配置参数。

## 示例

```javascript
new $Popup(MyComponent, {
	position: 'top',
	size: '50px'
})
```

## Option

| 参数        | 类型    | 默认值   | 可选值                                     | 说明             |
| ----------- | ------- | -------- | ------------------------------------------ | ---------------- |
| position    | String  | `center` | `center`、`top`、`bottom`、`left`、`right` | 弹出的方向       |
| isMask      | Boolean | true     | true/false                                 | 是否出现遮罩层   |
| isMaskClose | Boolean | true     | true/false                                 | 点击遮罩是否关闭 |

## Event

| 收件名  | 描述     | 参数 |
| ------- | -------- | ---- |
| onClose | 关闭事件 |      |
