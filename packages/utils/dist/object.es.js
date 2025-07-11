const f = (t, r = "") => Object.keys(t).reduce(
  (s, e) => {
    const n = r.length ? r + "." : "";
    return typeof t[e] == "object" && t[e] !== null ? Object.assign(s, f(t[e], n + e)) : s[n + e] = t[e], s;
  },
  {}
), u = (t) => {
  const r = {};
  for (const s in t) {
    const e = s.split(".");
    let n = r;
    for (let l = 0; l < e.length - 1; l++)
      n[e[l]] || (n[e[l]] = {}), n = n[e[l]];
    n[e[e.length - 1]] = t[s];
  }
  return r;
};
function p(t, r) {
  if (!t || !r) return !1;
  const s = Object.getOwnPropertyNames(t), e = Object.getOwnPropertyNames(r);
  if (s.length != e.length) return !1;
  for (let n = 0; n < s.length; n++) {
    const l = s[n], c = t[l], o = r[l];
    if (!Object.prototype.hasOwnProperty.call(r, l)) return !1;
    if (c instanceof Object) {
      if (!p(c, o)) return !1;
    } else if (c !== o)
      return !1;
  }
  return !0;
}
const i = (t) => Object.keys(t).length === 0;
export {
  f as flattenObj,
  i as isEmpty,
  p as isEqual,
  u as unFlatten
};
