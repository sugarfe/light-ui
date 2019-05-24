# Radio
单选按钮

包含两个组件 `run-radio-group` 和 `run-radio` 。若干包含在 `run-radio-group` 组件中的 `run-radio` 组件为一个单选按钮组。

## 示例

* 默认

```html
<run-radio-group v-model="value">
    <run-radio value="css" >CSS</run-radio>
    <run-radio value="html" >HTML</run-radio>
    <run-radio value="javascript" >JAVASCRIPT</run-radio>
</run-radio-group>
```

* 标记位置

```html
<run-radio-group v-model="value" right>
    <run-radio value="css" >CSS</run-radio>
    <run-radio value="html" >HTML</run-radio>
    <run-radio value="javascript" >JAVASCRIPT</run-radio>
</run-radio-group>
```

* 水平样式

```html
<run-radio-group v-model="value" horizontal>
    <run-radio value="css" >CSS</run-radio>
    <run-radio value="html" >HTML</run-radio>
    <run-radio value="javascript" >JAVASCRIPT</run-radio>
</run-radio-group>
```
* 水平样式 + 标记位置

```html
<run-radio-group v-model="value" horizontal right>
    <run-radio value="css" >CSS</run-radio>
    <run-radio value="html" >HTML</run-radio>
    <run-radio value="javascript" >JAVASCRIPT</run-radio>
</run-radio-group>
```

* 水平样式 + 不可用

```html
<run-radio-group v-model="value" horizontal>
    <run-radio value="css" >CSS</run-radio>
    <run-radio value="html" >HTML</run-radio>
    <run-radio value="javascript" disabled>JAVASCRIPT</run-radio>
</run-radio-group>
```


## run-radio-group Props 

| 参数 | 类型    | 默认值| 可选值| 说明|
| -- | ------- | ------- | --- | ---- |
|  horizontal   | Boolean | false| true/false| 是否水平样式|
|  right   | Boolean | false| true/false| 标记是否靠右|

## run-radio-group Event

| 收件名 | 描述    | 参数|
| -- | ------- | ------- |
|  onChange   | 当前值发生变化时 | 当前选中的值| 


 ## run-radio Props 

| 参数 | 类型    | 默认值| 可选值| 说明|
| -- | ------- | ------- | --- | ---- |
|  value   | [String,Number] | undefined| 无| value值，不可重复|