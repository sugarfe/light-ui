# Button

按钮

## 示例

- 默认按钮

```html
<l-button>default</l-button>
```

- 尺寸 + 适应宽度

```html
<l-button block size="small">block small</l-button>
<l-button block size="default">block default</l-button>
<l-button block size="large">block large</l-button>
```

- 主题

```html
<l-button>dufault</l-button>
<l-button theme="primary">primary</l-button>
<l-button theme="success">success</l-button>
<l-button theme="warning">warning</l-button>
<l-button theme="alert">alert</l-button>
```

- 主题 + 简洁风格

```html
<l-button light>light default</l-button>
<l-button light theme="primary">light primary</l-button>
<l-button light theme="success">light success</l-button>
<l-button light theme="warning">light warning</l-button>
<l-button light theme="alert">light alert</l-button>
```

## Props

| 参数    | 类型    | 默认值  | 可选值                                          | 说明         |
| ------- | ------- | ------- | ----------------------------------------------- | ------------ |
| block   | Boolean | false   | true/false                                      | 是否适应宽度 |
| disable | Boolean | false   | true/false                                      | 是否不可用   |
| light   | Boolean | false   | true/false                                      | 简洁风格     |
| size    | String  | default | `default` `small` `large`                       | 尺寸         |
| theme   | String  | default | `default` `primary` `success` `warning` `alert` | 主题         |
