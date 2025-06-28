import { Ref } from 'vue';
/**
 * @description 创建一个防抖的响应式引用
 * @param value { T } - 响应式数据
 * @param delay ｛ number ｝ - 防抖延迟时间，单位毫秒，默认300ms
 * @return { Ref<T> } - 返回一个响应式引用
 * @example
 * const demo = useDebounceRef(value, 500);
 */
export declare const useDebounceRef: <T>(value: T, delay?: number) => Ref<T>;
