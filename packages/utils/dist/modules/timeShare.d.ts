/**
 * 分片执行任务
 * @param data {number | any[]} 任务数据，可以是数字或数组
 * @param taskHandler {Function} 任务处理函数，接收当前任务数据和索引
 * @param scheduler {Function} 调度函数，用于控制任务执行的时机
 * @example
 * const taskHandler = (item: any, index: number) => {
 *   console.log(item, index)
 * }
 *
 * const scheduler = (task: Function) => {
 *   setTimeout(() => {
 *     const now = performance.now()
 *     task(() => performance.now() - now <= 10)
 *   }, 1000)
 * }
 * performChunk(100000, taskHandler, scheduler)
 */
export declare const performChunk: (data: number | any[], taskHandler: Function, scheduler: Function) => void;
