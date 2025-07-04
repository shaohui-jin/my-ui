import { customRef, Ref } from 'vue';

/**
 * @description 防抖函数
 * @param fn {(...args: any[]) => any} - 需要防抖的函数
 * @param delay { number } - 防抖延迟时间，单位毫秒，默认300ms
 * @return { (...args: any[]) => void } - 返回一个防抖后的函数
 * @example
 * const handleResize = debounce(() => {})
 */
export const debounce = (fn: (...args: any[]) => any, delay: number = 300): (...args: any[]) => void => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * @description 创建一个防抖的响应式引用
 * @param value { T } - 响应式数据
 * @param delay ｛ number ｝ - 防抖延迟时间，单位毫秒，默认300ms
 * @return { Ref<T> } - 返回一个响应式引用
 * @example
 * const demo = useDebounceRef(value, 500);
 */
export const useDebounceRef = <T>(value: T, delay: number = 300): Ref<T> => {
  return customRef<T>((track: () => void, trigger: () => void) => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return {
      get() {
        track();
        return value;
      },
      set(newValue: T) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue
          trigger();
        }, delay);
      }
    };
  });
}

