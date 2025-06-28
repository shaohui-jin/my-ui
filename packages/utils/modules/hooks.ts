import { customRef, Ref } from 'vue';

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
