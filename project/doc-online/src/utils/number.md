---
outline: deep
---

# number 数字工具 <Badge type="tip" text="number" />

## getRandom

获取指定范围内的随机整数

### 配置参数

```ts
declare const getRandom: (min: number, max: number) => number;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  min   |  number  |   | 最小值 |
|  max   |  number  |   | 最大值 |

### 示例

```js
getRandom(1, 10) // 返回1到10之间的随机整数
```

## scaleFormat

格式化小数。

### 配置参数

```ts
declare const scaleFormat: (value?: string, scale?: number) => string;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|----|------------|
|  value   |  string  | 0  | 待格式化数据 |
|  scale   |  number  | 2  | 格式化位数 |

### 示例

```js
scaleFormat((0.1+0.2).toString()) // '0.30'
```
