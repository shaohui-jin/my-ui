type ObjectType = Record<string, any>;
/**
 * desc: 对象扁平化
 * @param obj 需要扁平化的对象
 * @param prefix 转义后的前缀
 * @example
 * flattenObj({ a: { b: 1 }, c: 2 }) // { "a.b": 1, "c": 2 }
 * flattenObj({ a: { b: 1 }, c: 2 }, 'a') // { a.a.b: 1, a.c: 2 }
 */
export declare const flattenObj: (obj: ObjectType, prefix?: string) => ObjectType;
/**
 * desc: 扁平化还原
 * @param obj 需要还原扁平化的对象
 * @example
 * unFlatten({ 'a.b': 1, 'c': 2 }) // { "a": { "b": 1 }, "c": 2 }
 */
export declare const unFlatten: (obj: ObjectType) => ObjectType;
/**
 * desc: 判断是否相同
 * @param obj1 要比较的对象一
 * @param obj2 要比较的对象二
 * @example
 * isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 2 } }) // true
 * isEqual({ a: 1 , b: { a: 2 } }, { a: 1 , b: { a: 1 } }) // false
 */
export declare function isEqual(obj1: ObjectType, obj2: ObjectType): boolean;
/***
 * desc: 判断是否为空
 * @param obj 需要判断的对象
 * @example
 * isObjectEmpty({}) // true
 * isObjectEmpty({ a: 1 }) // false
 */
export declare const isEmpty: (obj: ObjectType) => boolean;
export {};
