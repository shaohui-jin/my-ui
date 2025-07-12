const a = (o, n = "children") => o.reduce((c, t) => {
  c = c.concat(t);
  const e = n ? t[n] : t;
  return Array.isArray(e) ? c.concat(a(e, n)) : c;
}, []);
function i(o, n) {
  let c = 0;
  const t = n.length;
  for (const e in n)
    for (const r in o)
      n[e] === o[r] && c++;
  return c === t;
}
export {
  a as flatten,
  i as isEqual
};
