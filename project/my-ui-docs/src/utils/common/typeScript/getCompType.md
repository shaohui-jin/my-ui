---
outline: deep
---

# getCompType 获取组件类型

生成一个响应式ref，类型为组件原型。

## 基础用法

```typescript
import { ElForm } from 'element-plus';
const formRef = getCompType(ElForm)
await formRef.value.validate()
```

等同于(非函数函数封装)：

```typescript
import { ElForm } from 'element-plus';
const formRef = ref<InstanceType<typeof ElForm>>()
await formRef.value.validate()
```

## 体操实现

```ts
export function getCompType<T extends abstract new (...args: any) => any>(_comp: T) {
  return ref<InstanceType<T>>()
}
```
