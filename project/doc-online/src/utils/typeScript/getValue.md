---
outline: deep
---

# getValue 获取值 <Badge type="tip" text="typescript" />

获取对象getter方法。

## 基础用法

```typescript
interface typeA {
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
