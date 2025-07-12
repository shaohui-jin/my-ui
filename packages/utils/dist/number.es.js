const r = (t, o) => Math.floor(Math.random() * (o + 1 - t) + t), a = (t = "0", o = 2) => Number.parseFloat(t).toFixed(o);
export {
  r as getRandom,
  a as scaleFormat
};
