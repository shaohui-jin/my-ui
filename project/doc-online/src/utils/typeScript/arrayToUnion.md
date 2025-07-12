---
outline: deep
---

# arrayToUnion 数组转联合类型 <Badge type="tip" text="typescript" />

将数组转换为联合类型。

## 基础用法

```typescript
const arr = ['option1', 'option2', 'option3'] as const
type typeB = arrayToUnion<typeof arr> // 'option1' | 'option2' | 'option3'
```

## 体操实现

```ts
type arrayToUnion<T extends readonly any[]> = T[number];
```
