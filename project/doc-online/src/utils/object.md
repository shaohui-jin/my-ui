---
outline: deep
---

# object 对象工具

## flatten(对象扁平化)

### 配置参数

```ts
declare const flatten: (obj: ObjectType, prefix?: string) => ObjectType;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  obj   |  Record<string, any>  |     | 需要扁平化的对象 |
|  prefix |  string  |     | 转义后的前缀 |

### 示例

```js
flatten({ a: { b: 1 }, c: 2 }) // { "a.b": 1, "c": 2 }
flatten({ a: { b: 1 }, c: 2 }, 'a') // { a.a.b: 1, a.c: 2 }
```

## unFlatten(扁平化还原)

### 配置参数

```ts
declare const unFlatten: (obj: ObjectType) => ObjectType;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  obj   |  Record<string, any>  |     | 需要还原扁平化的对象 |

### 示例

```js
unFlatten({ 'a.b': 1, 'c': 2 }) // { "a": { "b": 1 }, "c": 2 }
```

## isEqual(判断是否相同)

### 配置参数

```ts
declare function isEqual(obj1: ObjectType, obj2: ObjectType): boolean;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  obj1   |  Record<string, any>  |     | 要比较的对象一 |
|  obj2   |  Record<string, any>  |     | 要比较的对象二 |

### 示例

```js
isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 2 } }) // true
isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 1 } }) // false
```


## isEmpty(判断是否为空)

### 配置参数

```ts
export declare const isEmpty: (obj: ObjectType) => boolean;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  obj   |  Record<string, any>  |     | 需要判断的对象 |

### 示例

```js
isObjectEmpty({}) // true
isObjectEmpty({ a: 1 }) // false
```
