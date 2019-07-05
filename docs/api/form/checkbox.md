# Checkbox

单选按钮

包含两个组件 `CheckboxGroup` 和 `Checkbox` 。包含在 `CheckboxGroup` 组件中的 `Checkbox` 组件为一个多选按钮组。

## 示例

- 默认

```vue
<CheckboxGroup v-model="value">
	<Checkbox value="css">CSS</Checkbox>
	<Checkbox value="html">HTML</Checkbox>
	<Checkbox value="javascript">JAVASCRIPT</Checkbox>
</CheckboxGroup>
```

- 标记位置

```vue
<CheckboxGroup v-model="value" right>
	<Checkbox value="css">CSS</Checkbox>
	<Checkbox value="html">HTML</Checkbox>
	<Checkbox value="javascript">JAVASCRIPT</Checkbox>
</CheckboxGroup>
```

- 水平样式

```vue
<CheckboxGroup v-model="value" horizontal>
	<Checkbox value="css">CSS</Checkbox>
	<Checkbox value="html">HTML</Checkbox>
	<Checkbox value="javascript">JAVASCRIPT</Checkbox>
</CheckboxGroup>
```

- 水平样式 + 标记位置

```vue
<CheckboxGroup v-model="value" horizontal right>
	<Checkbox value="css">CSS</Checkbox>
	<Checkbox value="html">HTML</Checkbox>
	<Checkbox value="javascript">JAVASCRIPT</Checkbox>
</CheckboxGroup>
```

- 不可用

```vue
<CheckboxGroup v-model="value">
	<Checkbox value="css">CSS</Checkbox>
	<Checkbox value="html">HTML</Checkbox>
	<Checkbox value="javascript" disabled>JAVASCRIPT</Checkbox>
</CheckboxGroup>
```

## Group Props

| 名称       | 类型            | 默认值 | 可选值     | 说明         |
| ---------- | --------------- | ------ | ---------- | ------------ |
| v-model    | [String,Number] |        |            | 双向绑定     |
| horizontal | Boolean         | false  | true/false | 是否水平样式 |
| right      | Boolean         | false  | true/false | 标记是否靠右 |

## Group Event

| 收件名   | 描述             | 名称         |
| -------- | ---------------- | ------------ |
| onChange | 当前值发生变化时 | 当前选中的值 |

## Checkbox Props

| 名称    | 类型            | 默认值    | 可选值     | 说明               |
| ------- | --------------- | --------- | ---------- | ------------------ |
| value   | [String,Number] | undefined | 无         | value 值，不可重复 |
| disable | Boolean         | false     | true/false | 是否不可用         |
