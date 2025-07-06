const t = (n) => {
  const s = {};
  return n.forEach((e, r) => {
    s[e] = 1 << r;
  }), {
    /**
     * @description 获取权限值
     * @param p 当前权限列表数据
     * @return 权限值
     */
    getPermission: (e) => Array.from(new Set(e)).reduce((r, o) => r ^ s[o], 0),
    /**
     * @description 获取权限值
     * @param v 当前权限值
     * @param p 权限字段
     * @return 是否有此权限
     */
    hasPermission: (e, r) => Object.prototype.hasOwnProperty.call(s, r) ? !!(e & s[r]) : (console.warn(`Permissions has not ${r}`), !1),
    /**
     * @description 切换权限
     * @param v 当前权限值
     * @param p 权限字段
     * @return 权限值
     */
    switchPermission: (e, r) => e ^ s[r]
  };
};
export {
  t as usePermission
};
