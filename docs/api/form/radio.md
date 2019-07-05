# Radio

单选按钮

包含两个组件 `RadioGroup` 和 `Radio` 。包含在 `RadioGroup` 组件中的 `Radio` 组件为一个单选按钮组。

## 示例

- 默认

```vue
<RadioGroup v-model="value">
	<Radio value="css">CSS</Radio>
	<Radio value="html">HTML</Radio>
	<Radio value="javascript">JAVASCRIPT</Radio>
</RadioGroup>
```

- 标记位置

```vue
<RadioGroup v-model="value" right>
	<Radio value="css">CSS</Radio>
	<Radio value="html">HTML</Radio>
	<Radio value="javascript">JAVASCRIPT</Radio>
</RadioGroup>
```

- 水平样式

```vue
<RadioGroup v-model="value" horizontal>
	<Radio value="css">CSS</Radio>
	<Radio value="html">HTML</Radio>
	<Radio value="javascript">JAVASCRIPT</Radio>
</RadioGroup>
```

- 水平样式 + 标记位置

```vue
<RadioGroup v-model="value" horizontal right>
	<Radio value="css">CSS</Radio>
	<Radio value="html">HTML</Radio>
	<Radio value="javascript">JAVASCRIPT</Radio>
</RadioGroup>
```

- 水平样式 + 不可用

```vue
<RadioGroup v-model="value" horizontal>
	<Radio value="css">CSS</Radio>
	<Radio value="html">HTML</Radio>
	<Radio value="javascript" disabled>JAVASCRIPT</Radio>
</RadioGroup>
```

## Group Props

| 名称       | 类型    | 默认值 | 可选值     | 说明         |
| ---------- | ------- | ------ | ---------- | ------------ |
| horizontal | Boolean | false  | true/false | 是否水平样式 |
| right      | Boolean | false  | true/false | 标记是否靠右 |

## Group Event

| 收件名   | 描述             | 名称         |
| -------- | ---------------- | ------------ |
| onChange | 当前值发生变化时 | 当前选中的值 |

## Radio Props

| 名称    | 类型            | 默认值    | 可选值     | 说明               |
| ------- | --------------- | --------- | ---------- | ------------------ |
| v-model | [String,Number] |           |            | 双向绑定           |
| value   | [String,Number] | undefined | 无         | value 值，不可重复 |
| disable | Boolean         | false     | true/false | 是否不可用         |
