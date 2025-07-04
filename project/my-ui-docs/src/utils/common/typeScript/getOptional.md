---
outline: deep
---

# getOptional 获取可选属性

生成一个类型，将对象类型“T”的可选属性转换为新的类型。

## 基础用法

```typescript
import { getOptional } from 'sla-utils/typeScript'
type typeA = {
  option1: string;
  option2?: number;
  option3?: boolean;
}
type typeB = getOptional<typeA> // { option2?: number; option3?: boolean; }
```

## 体操实现

```ts
type getOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
}
```
