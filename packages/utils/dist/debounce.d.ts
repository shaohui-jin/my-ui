import { Ref } from 'vue';
/**
 * @description 防抖函数
 * @param fn {(...args: any[]) => any} - 需要防抖的函数
 * @param delay { number } - 防抖延迟时间，单位毫秒，默认300ms
 * @param immediate { boolean } 是否第一次执行
 * @return { (...args: any[]) => void } - 返回一个防抖后的函数
 * @example
 * const handleResize = debounce(() => {})
 */
export declare const debounce: (fn: (...args: any[]) => any, delay?: number, immediate?: boolean) => (...args: any[]) => void;
/**
 * @description 创建一个防抖的响应式引用
 * @param value { T } - 响应式数据
 * @param delay ｛ number ｝ - 防抖延迟时间，单位毫秒，默认300ms
 * @return { Ref<T> } - 返回一个响应式引用
 * @example
 * const demo = useDebounceRef(value, 500);
 */
export declare const useDebounceRef: <T>(value: T, delay?: number) => Ref<T>;
