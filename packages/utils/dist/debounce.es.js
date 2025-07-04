import { customRef as i } from "vue";
const c = (t, r = 300) => {
  let e = null;
  return function(...u) {
    e && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, u);
    }, r);
  };
}, l = (t, r = 300) => i((e, u) => {
  let o = null;
  return {
    get() {
      return e(), t;
    },
    set(n) {
      o && clearTimeout(o), o = setTimeout(() => {
        t = n, u();
      }, r);
    }
  };
});
export {
  c as debounce,
  l as useDebounceRef
};
