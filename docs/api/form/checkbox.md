# Checkbox

单选按钮

包含两个组件 `l-checkbox-group` 和 `l-checkbox` 。若干包含在 `l-checkbox-group` 组件中的 `l-checkbox` 组件为一个单选按钮组。

## 示例

- 默认

```html
<l-checkbox-group v-model="value">
	<l-checkbox value="css">CSS</l-checkbox>
	<l-checkbox value="html">HTML</l-checkbox>
	<l-checkbox value="javascript">JAVASCRIPT</l-checkbox>
</l-checkbox-group>
```

- 标记位置

```html
<l-checkbox-group v-model="value" right>
	<l-checkbox value="css">CSS</l-checkbox>
	<l-checkbox value="html">HTML</l-checkbox>
	<l-checkbox value="javascript">JAVASCRIPT</l-checkbox>
</l-checkbox-group>
```

- 水平样式

```html
<l-checkbox-group v-model="value" horizontal>
	<l-checkbox value="css">CSS</l-checkbox>
	<l-checkbox value="html">HTML</l-checkbox>
	<l-checkbox value="javascript">JAVASCRIPT</l-checkbox>
</l-checkbox-group>
```

- 水平样式 + 标记位置

```html
<l-checkbox-group v-model="value" horizontal right>
	<l-checkbox value="css">CSS</l-checkbox>
	<l-checkbox value="html">HTML</l-checkbox>
	<l-checkbox value="javascript">JAVASCRIPT</l-checkbox>
</l-checkbox-group>
```

- 水平样式 + 不可用

```html
<l-checkbox-group v-model="value" horizontal>
	<l-checkbox value="css">CSS</l-checkbox>
	<l-checkbox value="html">HTML</l-checkbox>
	<l-checkbox value="javascript" disabled>JAVASCRIPT</l-checkbox>
</l-checkbox-group>
```

## Group Props

| 参数       | 类型            | 默认值 | 可选值     | 说明         |
| ---------- | --------------- | ------ | ---------- | ------------ |
| v-model    | [String,Number] |        |            | 双向绑定     |
| horizontal | Boolean         | false  | true/false | 是否水平样式 |
| right      | Boolean         | false  | true/false | 标记是否靠右 |

## Group Event

| 收件名   | 描述             | 参数         |
| -------- | ---------------- | ------------ |
| onChange | 当前值发生变化时 | 当前选中的值 |

## Checkbox Props

| 参数    | 类型            | 默认值    | 可选值     | 说明               |
| ------- | --------------- | --------- | ---------- | ------------------ |
| value   | [String,Number] | undefined | 无         | value 值，不可重复 |
| disable | Boolean         | false     | true/false | 是否不可用         |
