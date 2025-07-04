import { arrayToUnion } from './typeScript';
/**
 * @description 权限hooks
 * @template T extends readonly string[]
 * @param {T} permissions 权限字段列表
 * @returns {｛
 *   getPermission(p: Array<arrayToUnion<T>>): number,
 *   hasPermission(v: number, p: arrayToUnion<T>): boolean,
 *   switchPermission(v: number, p: arrayToUnion<T>): number
 * ｝}
 *
 * @example
 * const { hasPermission, getPermission, switchPermission } = usePermission(['add', 'edit', 'delete', 'view']);
 * let a = getPermission(['add', 'edit', 'delete'])
 * console.log(a); // 7
 * console.log(hasPermission(a, 'add')); // true
 * a = switchPermission(a, 'add'); // 6
 * console.log(hasPermission(a, 'add')); // false
 * console.log(hasPermission(a, 'add1')); // false
 */
export declare const usePermission: <T extends readonly string[]>(permissions: T) => {
    /**
     * @description 获取权限值
     * @param p ｛ Array<arrayToUnion<T>> ｝
     * @return { number } 权限值
     */
    getPermission: (p: Array<arrayToUnion<T>>) => number;
    /**
     * @description 获取权限值
     * @param v ｛ number ｝ 当前权限值
     * @param p { T } 权限字段
     * @return { boolean } 是否有此权限
     */
    hasPermission: (v: number, p: arrayToUnion<T>) => boolean;
    /**
     * @description 切换权限
     * @param v ｛ number ｝ 当前权限值
     * @param p { T } 权限字段
     * @return { number } 权限值
     */
    switchPermission: (v: number, p: arrayToUnion<T>) => number;
};
