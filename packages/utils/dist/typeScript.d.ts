/**
 * @description 生成一个类型，将对象类型“T”的键转换为大写。
 * @example
 * type typeA = {
 *   age: number;
 *   name: string;
 * }
 *
/**
 * @description 生成一个类型，将对象类型“T”的键转换为getter方法。
 * @example
 * type typeA = {
 *   age: number;
 *   name: string;
 * }
 * type typeB = getValue<typeA> // { getAge: number; getName: string; }
 */
export type getValue<T> = {
    [K in keyof T as `get${Capitalize<K & string>}`]: T[K];
};
/**
 * @description 生成一个类型，将对象类型“T”的键转换为setter方法。
 * @example
 * type typeA = {
 *   age: number;
 *   name: string;
 * }
 * type typeB = setValue<typeA> // { setAge: number; setName: string; }
 */
export type setValue<T> = {
    [K in keyof T as `set${Capitalize<K & string>}`]: T[K];
};
/**
 * @description 生成一个类型，将对象类型“T”的可选属性转换为新的类型。
 * @example
 * type typeA = {
 *   option1: string;
 *   option2?: number;
 *   option3?: boolean;
 * }
 * type typeB = getOptional<typeA> // { option2?: number; option3?: boolean; }
 */
export type getOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
/**
 * @description 生成一个类型，将数组“T”转换为联合类型。
 * @example
 * const arr = ['option1', 'option2', 'option3'] as const
 * type typeB = arrayToUnion<typeof arr> // 'option1' | 'option2' | 'option3'
 */
export type arrayToUnion<T extends readonly any[]> = T[number];
/**
 * @description 生成一个响应式ref，类型为组件原型。
 * @param _comp 组件
 * @example
 * const formRef = getCompType(ElForm)
 * await formRef.value.validate()
 */
export declare function getCompType<T extends abstract new (...args: any) => any>(_comp: T): import("vue").Ref<InstanceType<T> | undefined, InstanceType<T> | undefined>;
