const s = (e, o, f) => {
  let t = [];
  if (typeof e == "number" ? t = new Array(e).fill(e) : t = e, t.length === 0)
    return;
  let n = 0;
  function r() {
    n !== t.length && f((i) => {
      for (; i() && n < t.length; )
        o(t[n], n), n++;
      r();
    });
  }
  r();
}, g = (e = [], o = 3) => new Promise((f, t) => {
  let n = 0, r = 0;
  const i = [];
  function h() {
    if (n >= e.length)
      return;
    const l = n, u = e[n++];
    fetch(u).then((c) => {
      i[l] = c, r++, r === e.length && f(i), h();
    });
  }
  for (let l = 0; l < Math.min(o, e.length); l++)
    h();
});
export {
  g as concurRequest,
  s as performChunk
};
