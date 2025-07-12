/**
 * desc: 集合扁平化
 * @param arr 原数组
 * @param prefix 标识
 * @return 扁平化后的数组
 * @example
 * flatten([
 *   { "a": 1, "children": [{ "b": 11, "children": [] }, { "b": 12 }, { "b": 13 }] },
 *   { "a": 2, "children": [] }
 * ])
 * 结果：
 * [
 *   { "a": 1, "children": [{ "b": 11, "children": [] }, { "b": 12 }, { "b": 13 }] },
 *   { "b": 11, "children": [] },
 *   { "b": 12 },
 *   { "b": 13 },
 *   { "a": 2, "children": [] }
 * ]
 */
export declare const flatten: (arr: any[], prefix?: string) => any[];
/**
 * desc: 判断是否相同
 * @param arr1 要比较的数组一
 * @param arr2 要比较的数组二
 * @example
 * isEqual([1,'2',3,'4'], [1,'2',3,'4']) // true
 * isEqual([1,'2',3,'4'], [1,'2','3','4']) // false
 */
export declare function isEqual(arr1: Array<string | number>, arr2: Array<string | number>): boolean;
