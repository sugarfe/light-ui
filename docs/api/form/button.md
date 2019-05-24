# Button

按钮

## 示例

* 默认按钮

```html
<run-button>default</run-button>
```

* 尺寸 + 适应宽度

```html
<run-button block size="small">block small</run-button>
<run-button block size="default">block default</run-button>
<run-button block size="large">block large</run-button>
```

* 主题

```html
<run-button>dufault</run-button>
<run-button theme="primary">primary</run-button>
<run-button theme="success">success</run-button>
<run-button theme="warning">warning</run-button>
<run-button theme="alert">alert</run-button>
```
* 主题 + 简洁风格

```html
<run-button light>light default</run-button>
<run-button light theme="primary">light primary</run-button>
<run-button light theme="success">light success</run-button>
<run-button light theme="warning">light warning</run-button>
<run-button light theme="alert">light alert</run-button>
```
## Props 

| 参数 | 类型    | 默认值| 可选值| 说明|
| -- | ------- | ------- | --- | ---- |
|  block   | Boolean | false| true/false| 是否适应宽度|
|  light   | Boolean | false| true/false| 简洁风格|
|  size   | String | default| `default` `small` `large` | 尺寸|
|  theme   | String | default| `default` `primary` `success` `warning` `alert` | 主题|


