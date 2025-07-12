---
outline: deep
---

# array 对象工具 <Badge type="tip" text="array" />

## flatten(集合扁平化)

### 配置参数

```ts
declare const flatten: (arr: any[], prefix?: string) => any[];
```

| 参数名 | 类型     | 默认值 | 描述         |
|-----|--------|-----|------------|
|  arr   | Array  |     | 原数组 |
|  prefix | string |     | 标识 |

### 示例

```js
// [
//   { "a": 1, "children": [{ "b": 11, "children": [] }, { "b": 12 }, { "b": 13 }] },
//   { "b": 11, "children": [] },
//   { "b": 12 },
//   { "b": 13 },
//   { "a": 2, "children": [] }
// ]
flatten([
  { "a": 1, "children": [{ "b": 11, "children": [] }, { "b": 12 }, { "b": 13 }] },
  { "a": 2, "children": [] }
])
```

## isEqual(判断是否相同)

### 配置参数

```ts
declare function isEqual(
  arr1: Array<string | number>, 
  arr2: Array<string | number>
): boolean;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  arr1   |  Array<string | number>  |     | 要比较的数组一 |
|  arr2   |  Array<string | number>  |     | 要比较的数组二 |

### 示例

```js
isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 2 } }) // true
isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 1 } }) // false
```
