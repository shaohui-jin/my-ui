---
outline: deep
---

# hooks 工具

## useDebounceRef 防抖ref

创建一个防抖的响应式引用

### 基础用法

<script lang="ts" setup>
import { useDebounceRef } from 'sla-utils'; 
const demo = useDebounceRef('', 1000);
</script>

<div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
    请输入： <input v-model="demo" placeholder="输入内容，1秒后更新" />
    <br>
    防抖响应式数据： {{ demo }}
</div>

代码如下：

```vue
<script lang="ts" setup>
  import { useDebounceRef } from 'sla-utils';
  const demo = useDebounceRef('', 1000);
</script>

<div style="background: #f0f0f0; padding: 10px; border-radius: 5px;">
  请输入： <input v-model="demo" placeholder="输入内容，1秒后更新" />
  <br>
  防抖响应式数据： {{ demo }}
</div>
```

### 配置参数

```ts
declare const useDebounceRef: <T>(value: T, delay?: number) => Ref<T>;
```

| 参数名 | 类型     | 默认值 | 描述         |
|-----|--------|-----|------------|
|  value   | T      |   | 响应式数据 |
|  delay   | number | 300  | 防抖延迟时间，单位毫秒，默认300ms |
