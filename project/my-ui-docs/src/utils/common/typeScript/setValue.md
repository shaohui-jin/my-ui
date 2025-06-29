---
outline: deep
---

# getValue 设置值

生成一个类型，将对象类型“T”的键转换为setter方法。

## 基础用法

```typescript
import { setValue } from 'sla-utils'
type typeA = {
  age: number,
  name: string,
}
type typeB = setValue<typeA> // { setAge: number; setName: string; }
```

## 体操实现

```ts
type setValue<T> = {
  [K in keyof T as `set${Capitalize<K & string>}`]: T[K];
}
```
