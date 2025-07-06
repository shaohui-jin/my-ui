const l = (t = [], r = 3) => new Promise((h, u) => {
  let n = 0, o = 0;
  const c = [];
  function i() {
    if (n >= t.length)
      return;
    const e = n, f = t[n++];
    fetch(f).then((s) => {
      c[e] = s, o++, o === t.length && h(c), i();
    });
  }
  for (let e = 0; e < Math.min(r, t.length); e++)
    i();
});
export {
  l as concurRequest
};
