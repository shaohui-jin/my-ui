---
outline: deep
---

# image-avatar 图片头像

常用的图片渲染组件。

## 基础用法

<LImageAvatar src="https://picsum.photos/seed/picsum/300/300"/>

代码如下： 
```vue
<LImageAvatar src="https://picsum.photos/seed/picsum/300/300"/>
```

## image API

### Attributes


| 属性名          | 说明     | 类型     | 默认值                                       |
|--------------|--------|--------|-------------------------------------------|
| src    | 图片地址   | string | https://picsum.photos/seed/picsum/300/300 |
| uploadFn  | 保存头像回调 | PropType<(file: File) => void | () => {}                                  |

