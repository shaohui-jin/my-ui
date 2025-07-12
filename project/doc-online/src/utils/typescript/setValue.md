---
outline: deep
---

# getValue 设置值 <Badge type="tip" text="typescript" />

获取对象setter方法。

## 基础用法

```typescript
interface typeA {
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
