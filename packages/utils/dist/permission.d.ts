import { arrayToUnion } from './typescript';
/**
 * @tyedef UsePermissionReturn
 * @type {object}
 * @property {(p: Array<arrayToUnion<T>>) => number} getPermission 获取权限值
 * @property {(v: number, p: arrayToUnion<T>) => boolean} hasPermission 判断是否有权限
 * @property {(v: number, p: arrayToUnion<T>) => number} switchPermission 切换权限
 */
/**
 * @template T extends readonly string[]
 * @description 权限hooks
 * @param {T} permissions 权限字段列表
 * @returns {UsePermissionReturn<T>} 权限操作方法
 *
 * @example
 *  const { hasPermission, getPermission, switchPermission } = usePermission(['add', 'edit', 'delete', 'view']);
 *  let a = getPermission(['add', 'edit', 'delete'])
 *  console.log(a); // 7
 *  console.log(hasPermission(a, 'add')); // true
 *  a = switchPermission(a, 'add'); // 6
 *  console.log(hasPermission(a, 'add')); // false
 *  console.log(hasPermission(a, 'add1')); // false

 */
export declare const usePermission: <T extends readonly string[]>(permissions: T) => {
    /**
     * @description 获取权限值
     * @param p 当前权限列表数据
     * @return 权限值
     */
    getPermission: (p: Array<arrayToUnion<T>>) => number;
    /**
     * @description 获取权限值
     * @param v 当前权限值
     * @param p 权限字段
     * @return 是否有此权限
     */
    hasPermission: (v: number, p: arrayToUnion<T>) => boolean;
    /**
     * @description 切换权限
     * @param v 当前权限值
     * @param p 权限字段
     * @return 权限值
     */
    switchPermission: (v: number, p: arrayToUnion<T>) => number;
};
