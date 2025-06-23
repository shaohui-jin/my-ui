---
outline: deep
---

# text-overflow-area 文本溢出区域

常用的长文本渲染组件。

## 基础用法

<script setup>
const content = `
    this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.
`
</script>
<LTextOverflowArea :content="content"/>

代码如下： 
```vue
<script setup>
const content = `
    this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.
`
</script>
<LTextOverflowArea :content="content"/>
```

## text-overflow-area API

### text-overflow-area Attributes


| 属性名 | 说明      | 类型     | 默认值 |
|-----|---------|--------|-----|
|  height   | 文本区域高度  | number | 100 |
|  width   | 文本区域内宽度 | number | 100 |
|  padding   | 文本区域内边距 | number | 10  |
|  content   | 文本区域内容  | string |     |

