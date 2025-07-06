---
outline: deep
---

# text-erase-area 文本擦除区域

常用的长文本渲染组件。

## 基础用法

<script setup>
const content = `
    this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.
`
</script>
<LTextEraseArea :content="content" class="demo"/>

代码如下： 
```vue
<script setup>
const content = `
    this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.this is a long text.
`
</script>

<LTextEraseArea :content="content" class="demo"/>
```

## text-erase-area API

### Attributes


| 属性名 | 说明      | 类型     | 默认值 |
|-----|---------|--------|-----|
|  content   | 文本区域内容  | string |     |

