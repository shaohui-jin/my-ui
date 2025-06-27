---
outline: deep
---

# image-pointer 图片指针

常用的多图片渲染组件。

## 基础用法

<script setup lang="ts">
const radomUrls = [
  'https://picsum.photos/seed/picsum1/250/200',
  'https://picsum.photos/seed/picsum2/150/200',
  'https://picsum.photos/seed/picsum3/200/200',
  'https://picsum.photos/seed/picsum4/200/200',
  'https://picsum.photos/seed/picsum5/150/200',
  'https://picsum.photos/seed/picsum6/250/200',
  'https://picsum.photos/seed/picsum7/200/200',
  'https://picsum.photos/seed/picsum8/200/200',
  'https://picsum.photos/seed/picsum9/200/200',
]
</script>
<LImagePointer :imageUrls="radomUrls"  />

代码如下： 
```vue
<script setup>
  const radomUrls = [
    'https://picsum.photos/seed/picsum1/250/200',
    'https://picsum.photos/seed/picsum2/150/200',
    'https://picsum.photos/seed/picsum3/200/200',
    'https://picsum.photos/seed/picsum4/200/200',
    'https://picsum.photos/seed/picsum5/150/200',
    'https://picsum.photos/seed/picsum6/250/200',
    'https://picsum.photos/seed/picsum7/200/200',
    'https://picsum.photos/seed/picsum8/200/200',
    'https://picsum.photos/seed/picsum9/200/200',
  ]
</script>
<LImagePointer :imageUrls="radomUrls" />
```

## image-pointer API

### Attributes


| 属性名          | 说明     | 类型       | 默认值 |
|--------------|--------|----------|-----|
| imageUrls          | 图片列表   | string[] |     |

