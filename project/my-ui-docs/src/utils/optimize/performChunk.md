---
outline: deep
---

# performChunk 分片执行任务

concurRequest 被用来提供并发请求Get接口。

## 配置参数

```ts
declare const performChunk: (data: number | any[], taskHandler: Function, scheduler: Function) => void;
```

| 参数名 | 类型             | 默认值 | 描述         |
|-----|----------------|-----|------------|
|  data   | number 或 any[] | 无   | 任务数据，可以是数字或数组 |
|  taskHandler   | Function       |   无  | 任务处理函数，接收当前任务数据和索引   |
|  scheduler   | Function       |  无   | 调度函数，用于控制任务执行的时机   |


## 示例

```js
const taskHandler = (item: any, index: number) => {
  console.log(item, index)
}

const scheduler = (task: Function) => {
  setTimeout(() => {
    const now = performance.now()
    task(() => performance.now() - now <= 10)
  }, 1000)
}

performChunk(100000, taskHandler, scheduler)
```
