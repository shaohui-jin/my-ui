---
outline: deep
---

# debounce 防抖 <Badge type="tip" text="debounce" />

## debounce 防抖函数

### 基础用法

<script lang="ts" setup>
import { ref } from 'vue';
import { debounce, useDebounceRef } from 'sla-utils/debounce';
const demo = ref(0);
const demo1 = useDebounceRef('', 1000);
const handleClick= debounce(() => {
  demo.value += 1
}, 1000);
</script>

<div class="demo">
  <button @click="handleClick" >快速点击，1秒后加1</button>
  <br>
  防抖响应式数据： {{ demo }}
</div>

代码如下：

```vue
<script lang="ts" setup>
  import { ref } from 'vue';
  import { debounce, useDebounceRef } from 'sla-utils/debounce';
  const demo = ref(0);
  const handleClick= debounce(() => {
    demo.value += 1
  }, 1000);
</script>

<div class="demo">
  <button @click="handleClick" >快速点击，1秒后加1</button>
  <br>
  防抖响应式数据： {{ demo }}
</div>
```

### 配置参数

```ts
declare const debounce: (
  fn: (...args: any[]) => any, 
  delay?: number, 
  immediate?: boolean
) => (...args: any[]) => void;
```

| 参数名 | 类型            | 默认值   | 描述            |
|-----|-------------------------|-------|---------------------|
|  fn   | (...args: any[]) => any |   | 需要防抖的函数     |
|  delay   | number  | 300   | 防抖延迟时间，单位毫秒，默认300ms |
|  immediate   | boolean   | false | 是否第一次执行     |


## useDebounceRef 防抖ref

创建一个防抖的响应式引用

### 基础用法

<div class="demo">
  请输入： <input v-model="demo1" placeholder="输入内容，1秒后更新" />
  <br>
  防抖响应式数据： {{ demo1 }}
</div>

代码如下：

```vue
<script lang="ts" setup>
  import { useDebounceRef } from 'sla-utils/debounce';
  const demo1 = useDebounceRef('', 1000);
</script>

<div class="demo">
  请输入： <input v-model="demo1" placeholder="输入内容，1秒后更新" />
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
