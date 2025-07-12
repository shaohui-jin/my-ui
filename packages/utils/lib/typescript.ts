import { ref } from 'vue';

/**
 * @description 获取对象getter方法。
 * @example
 * interface typeA {
 *   age: number;
 *   name: string;
 * }
 * type typeB = getValue<typeA> // { getAge: number; getName: string; }
 */
export type getValue<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: T[K];
}

/**
 * @description 获取对象setter方法。
 * @example
 * interface typeA {
 *   age: number;
 *   name: string;
 * }
 * type typeB = setValue<typeA> // { setAge: number; setName: string; }
 */
export type setValue<T> = {
  [K in keyof T as `set${Capitalize<K & string>}`]: T[K];
}

/**
 * @description 获取对象可选属性。
 * @example
 * interface typeA {
 *   option1: string;
 *   option2?: number;
 *   option3?: boolean;
 * }
 * type typeB = getOptional<typeA> // { option2?: number; option3?: boolean; }
 */
export type getOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
}

/**
 * @description 设置对象可选属性
 * @example
 * interface typeA {
 *   option1: string;
 *   option2: number;
 *   option3: boolean;
 * }
 * type typeB = setOptional<typeA, 'option2' | 'option3'> // { option1: string; option2?: number; option3?: boolean; }
 */
export type setOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * @description 将数组转换为联合类型。
 * @example
 * const arr = ['option1', 'option2', 'option3'] as const
 * type typeB = arrayToUnion<typeof arr> // 'option1' | 'option2' | 'option3'
 */
export type arrayToUnion<T extends readonly any[]> = T[number];

/**
 * @description 获取一个组件ref。
 * @param _comp 组件
 * @example
 * const formRef = getCompType(ElForm)
 * await formRef.value.validate()
 */
export function getCompType<T extends abstract new (...args: any) => any>(_comp: T) {
  return ref<InstanceType<T>>()
}
