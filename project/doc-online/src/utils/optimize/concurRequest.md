---
outline: deep
---

# concurRequest 并发请求 <Badge type="tip" text="optimize" />

concurRequest 被用来提供并发请求Get接口。

## 配置参数

```ts
declare function concurRequest: (urls: string[], maxNum: number) => Promise<any[]>;
```

| 参数名 | 类型 | 默认值 | 描述         |
|-----|----|-----|------------|
|  urls   |  string[]  | []  | get请求url集合 |
|  maxNum   | number   | 3   | 最大并发请求数量   |


## 示例

```js
const res = concurRequest(["https://jsonplaceholder.typicode.com/posts"], 3)
```
