import { arrayToUnion } from './typeScript';

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
export const usePermission = <T extends readonly string[]>(permissions: T) => {
  type Permission = arrayToUnion<T>;
  const permissionEnums: Record<Permission, number> = {} as any
  permissions.forEach((p: Permission, i: number) => {
    permissionEnums[p] = 1 << i;
  })
  return {
    /**
     * @description 获取权限值
     * @param p 当前权限列表数据
     * @return 权限值
     */
    getPermission: (p: Array<Permission>): number => {
      return Array.from(new Set(p)).reduce((acc, cur: Permission) => {
        return acc ^ permissionEnums[cur]
      }, 0);
    },
    /**
     * @description 获取权限值
     * @param v 当前权限值
     * @param p 权限字段
     * @return 是否有此权限
     */
    hasPermission: (v: number, p: Permission): boolean => {
      if (!Object.prototype.hasOwnProperty.call(permissionEnums, p)) {
        console.warn(`Permissions has not ${p}`);
        return false;
      }
      return !!(v & permissionEnums[p]);
    },
    /**
     * @description 切换权限
     * @param v 当前权限值
     * @param p 权限字段
     * @return 权限值
     */
    switchPermission: (v: number, p: Permission): number => {
      return v ^ permissionEnums[p]
    }
  }
}
