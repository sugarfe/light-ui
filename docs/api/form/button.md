# Button

按钮

## 示例

- 默认按钮

```vue
<Button>default</Button>
```

- 尺寸 + 适应宽度

```vue
<Button block size="small">block small</Button>
<Button block size="default">block default</Button>
<Button block size="large">block large</Button>
```

- 主题

```vue
<Button>dufault</Button>
<Button theme="primary">primary</Button>
<Button theme="success">success</Button>
<Button theme="warning">warning</Button>
<Button theme="alert">alert</Button>
```

- 主题 + 简洁风格

```vue
<Button light>light default</Button>
<Button light theme="primary">light primary</Button>
<Button light theme="success">light success</Button>
<Button light theme="warning">light warning</Button>
<Button light theme="alert">light alert</Button>
```

## Props

| 名称    | 类型    | 默认值  | 可选值                                          | 说明         |
| ------- | ------- | ------- | ----------------------------------------------- | ------------ |
| block   | Boolean | false   | true/false                                      | 是否适应宽度 |
| disable | Boolean | false   | true/false                                      | 是否不可用   |
| light   | Boolean | false   | true/false                                      | 简洁风格     |
| size    | String  | default | `default` `small` `large`                       | 尺寸         |
| theme   | String  | default | `default` `primary` `success` `warning` `alert` | 主题         |
