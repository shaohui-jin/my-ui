---
outline: deep
---

# getValue 获取值

生成一个类型，将对象类型“T”的键转换为getter方法。

## 基础用法

```typescript
import { getValue } from 'sla-utils/typeScript'
type typeA = {
  age: number,
  name: string,
}
type typeB = getValue<typeA> // { getAge: number; getName: string; }
```

## 体操实现

```ts
type getValue<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: T[K];
}
```
