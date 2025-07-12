---
outline: deep
---

# color 颜色工具 <Badge type="tip" text="color" />

## rgbaToHex

把rgba颜色(或rgb颜色)转成十六进制颜色

### 配置参数

```ts
declare const rgbaToHex: (color: string) => string;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  color   |  string  |   | rgba或rgb颜色字符串 |

### 示例

```js
const res = rgbaToHex('rgba(255, 0, 0, 1)'); // res = '#ff0000'
```

## hexToRGBA

把十六进制颜色转成rgba颜色(或rgb颜色)

### 配置参数

```ts
declare const hexToRGBA: (hex: string, alpha: number) => string;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  hex   |  string  |   | 十六进制颜色字符串，格式为#RRGGBB |
|  alpha   |  number  |   | 可选，透明度值，范围0-1 |

### 示例

```js
const res = hexToRGBA('#ff0000', 1); // res = 'rgba(255, 0, 0, 1)'
```


## colorToRGBA

把十六进制颜色转成rgba颜色对象

### 配置参数

```ts
declare const colorToRGBA: (hex: string) => {
  r: number;
  g: number;
  b: number;
};
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  hex   |  string  |   | 十六进制颜色字符串，格式为#RRGGBB |

### 示例

```js
colorToRGBA('#ff5733') // { r: 255, g: 87, b: 51 }
```
