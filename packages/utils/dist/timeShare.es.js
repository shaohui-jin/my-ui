const u = (n, t, f) => {
  let e = [];
  if (typeof n == "number" ? e = new Array(n).fill(n) : e = n, e.length === 0)
    return;
  let r = 0;
  function l() {
    r !== e.length && f((i) => {
      for (; i() && r < e.length; )
        t(e[r], r), r++;
      l();
    });
  }
  l();
};
export {
  u as performChunk
};
