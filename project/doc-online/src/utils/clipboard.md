---
outline: deep
---

# clipboard 剪切板工具 <Badge type="tip" text="clipboard" />

## handleClipboard

处理剪贴板复制

### 配置参数

```ts
declare const handleClipboard: (text: string, event: Event) => void;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  text   |  string  |   | 复制文案 |
|  event   |  Event  |   | 来源元素 |

### 示例

<div class="demo">
  <span class="wait-copy">这是一会要复制的内容</span> 
  <br>
  <button @click="handleClick">点击复制上面文案</button>
</div>

<script setup lang="ts">
import { handleClipboard } from 'sla-utils/clipboard';

const handleClick = (e) => {
  const text = document.querySelector('.wait-copy').innerText;
  handleClipboard(text, e)
};
</script>

```vue
<div class="demo">
  <span class="wait-copy">这是一会要复制的内容</span>
  <br>
  <button @click="handleClick">点击复制上面文案</button>
</div>

<script setup lang="ts">
import { handleClipboard } from 'sla-utils/clipboard';

const handleClick = (e) => {
  const text = document.querySelector('.wait-copy').innerText;
  handleClipboard(text, e)
};
</script>
```
