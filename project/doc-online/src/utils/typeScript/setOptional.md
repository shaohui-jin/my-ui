---
outline: deep
---

# getOptional 设置可选属性 <Badge type="tip" text="typescript" />

设置对象可选属性。

## 基础用法

```typescript
interface typeA {
  option1: string;
  option2: number;
  option3: boolean;
}
type typeB = setOptional<typeA> // { option1: string; option2?: number; option3?: boolean; }
```

## 体操实现

```ts
type setOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```
