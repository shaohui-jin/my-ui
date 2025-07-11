---
outline: deep
---

# image-carousel 图片轮播

常用的多图片渲染组件。

## 基础用法

<script setup>
const urls = [
  'https://picsum.photos/seed/picsum/400/300',
  'https://picsum.photos/seed/picsum2/400/300',
  'https://picsum.photos/seed/picsum3/400/300',
  'https://picsum.photos/seed/picsum4/400/300',
  'https://picsum.photos/seed/picsum5/400/300'
]
</script>
<LImageCarousel :imageUrls="urls" :defaultIndex="2" />

代码如下： 
```vue
<script setup>
  const urls = [
    'https://picsum.photos/seed/picsum/400/300',
    'https://picsum.photos/seed/picsum2/400/300',
    'https://picsum.photos/seed/picsum3/400/300',
    'https://picsum.photos/seed/picsum4/400/300',
    'https://picsum.photos/seed/picsum5/400/300'
  ]
</script>
<LImageCarousel :imageUrls="urls" :defaultIndex="2" />
```

## image-carousel API

### Attributes


| 属性名 | 说明     | 类型       | 默认值 |
|-----|--------|----------|-----|
|  imageUrls   | 图片列表   | string[] |     |
|  defaultIndex   | 默认选中下标 | number   | 0   |

