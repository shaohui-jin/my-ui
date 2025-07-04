const n = (r) => {
  let t = r.replace(/rgba?\(/, "").replace(/\)/, "").replace(/[\s+]/g, "").split(","), e = parseFloat(t[3] || "1"), l = Math.floor(e * parseInt(t[0]) + (1 - e) * 255), s = Math.floor(e * parseInt(t[1]) + (1 - e) * 255), a = Math.floor(e * parseInt(t[2]) + (1 - e) * 255);
  return "#" + ("0" + l.toString(16)).slice(-2) + ("0" + s.toString(16)).slice(-2) + ("0" + a.toString(16)).slice(-2);
}, o = (r, t) => {
  let e = parseInt(r.slice(1, 3), 16), l = parseInt(r.slice(3, 5), 16), s = parseInt(r.slice(5, 7), 16);
  return t ? "rgba(" + e + ", " + l + ", " + s + ", " + t + ")" : "rgb(" + e + ", " + l + ", " + s + ")";
}, c = (r) => {
  let t = parseInt(r.slice(1, 3), 16), e = parseInt(r.slice(3, 5), 16), l = parseInt(r.slice(5, 7), 16);
  return { r: t, g: e, b: l };
};
export {
  c as colorToRGBA,
  o as hexToRGBA,
  n as rgbaToHex
};
