# Radio

单选按钮

包含两个组件 `l-radio-group` 和 `l-radio` 。若干包含在 `l-radio-group` 组件中的 `l-radio` 组件为一个单选按钮组。

## 示例

- 默认

```html
<l-radio-group v-model="value">
	<l-radio value="css">CSS</l-radio>
	<l-radio value="html">HTML</l-radio>
	<l-radio value="javascript">JAVASCRIPT</l-radio>
</l-radio-group>
```

- 标记位置

```html
<l-radio-group v-model="value" right>
	<l-radio value="css">CSS</l-radio>
	<l-radio value="html">HTML</l-radio>
	<l-radio value="javascript">JAVASCRIPT</l-radio>
</l-radio-group>
```

- 水平样式

```html
<l-radio-group v-model="value" horizontal>
	<l-radio value="css">CSS</l-radio>
	<l-radio value="html">HTML</l-radio>
	<l-radio value="javascript">JAVASCRIPT</l-radio>
</l-radio-group>
```

- 水平样式 + 标记位置

```html
<l-radio-group v-model="value" horizontal right>
	<l-radio value="css">CSS</l-radio>
	<l-radio value="html">HTML</l-radio>
	<l-radio value="javascript">JAVASCRIPT</l-radio>
</l-radio-group>
```

- 水平样式 + 不可用

```html
<l-radio-group v-model="value" horizontal>
	<l-radio value="css">CSS</l-radio>
	<l-radio value="html">HTML</l-radio>
	<l-radio value="javascript" disabled>JAVASCRIPT</l-radio>
</l-radio-group>
```

## group Props

| 参数       | 类型    | 默认值 | 可选值     | 说明         |
| ---------- | ------- | ------ | ---------- | ------------ |
| horizontal | Boolean | false  | true/false | 是否水平样式 |
| right      | Boolean | false  | true/false | 标记是否靠右 |

## group Event

| 收件名   | 描述             | 参数         |
| -------- | ---------------- | ------------ |
| onChange | 当前值发生变化时 | 当前选中的值 |

## radio Props

| 参数    | 类型            | 默认值    | 可选值     | 说明               |
| ------- | --------------- | --------- | ---------- | ------------------ |
| v-model | [String,Number] |           |            | 双向绑定           |
| value   | [String,Number] | undefined | 无         | value 值，不可重复 |
| disable | Boolean         | false     | true/false | 是否不可用         |
