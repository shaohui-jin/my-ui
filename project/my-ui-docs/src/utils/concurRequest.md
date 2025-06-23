---
outline: deep
---

# concurRequest 并发请求

concurRequest 被用来提供并发请求Get接口。

## 参数说明

```ts
/**
 * 并发请求
 * @param urls 请求集合
 * @param maxNum 并发数量
 * @return {Promise<any[]>}
 */
const concurRequest: (urls: string[], maxNum: number) => Promise<any[]>;
```

## example

```js
const res = concurRequest(["https://jsonplaceholder.typicode.com/posts"], 3)
```
