const d = (t) => {
  const r = {};
  return t.forEach((s, e) => {
    r[s] = 1 << e;
  }), {
    /**
     * @description 获取权限值
     * @param p ｛ Array<arrayToUnion<T>> ｝
     * @return { number } 权限值
     */
    getPermission: (s) => Array.from(new Set(s)).reduce((e, i) => e ^ r[i], 0),
    /**
     * @description 获取权限值
     * @param v ｛ number ｝ 当前权限值
     * @param p { T } 权限字段
     * @return { boolean } 是否有此权限
     */
    hasPermission: (s, e) => Object.prototype.hasOwnProperty.call(r, e) ? !!(s & r[e]) : (console.warn(`Permissions has not ${e}`), !1),
    /**
     * @description 切换权限
     * @param v ｛ number ｝ 当前权限值
     * @param p { T } 权限字段
     * @return { number } 权限值
     */
    switchPermission: (s, e) => s ^ r[e]
  };
}, { hasPermission: n, getPermission: a, switchPermission: l } = d(["add", "edit", "delete", "view"]);
let o = a(["add", "edit", "delete"]);
console.log(o);
console.log(n(o, "add"));
o = l(o, "add");
console.log(n(o, "add"));
console.log(n(o, "add1"));
export {
  d as usePermission
};
