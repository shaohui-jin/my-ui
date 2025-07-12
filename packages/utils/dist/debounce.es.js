import { customRef as l } from "vue";
const s = (t, o = 300, u = !1) => {
  let r = null;
  return function(...e) {
    if (u) {
      t.apply(this, e), u = !1;
      return;
    }
    r && clearTimeout(r), r = setTimeout(() => {
      t.apply(this, e);
    }, o);
  };
}, c = (t, o = 300) => l((u, r) => {
  let e = null;
  return {
    get() {
      return u(), t;
    },
    set(n) {
      e && clearTimeout(e), e = setTimeout(() => {
        t = n, r();
      }, o);
    }
  };
});
export {
  s as debounce,
  c as useDebounceRef
};
