---
outline: deep
---

# getOptional 获取可选属性 <Badge type="tip" text="typescript" />

获取对象可选属性。

## 基础用法

```typescript
interface typeA {
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
