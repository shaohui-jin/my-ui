import e from "clipboard";
import { ElMessage as t } from "element-plus";
const n = () => {
  t.success("复制成功");
}, a = () => {
  t.error("复制失败");
}, l = (c, o) => {
  const s = o.target;
  if (!s) return;
  const r = new e(s, {
    text: () => c
  });
  r.on("success", () => {
    n(), r.destroy();
  }), r.on("error", () => {
    a(), r.destroy();
  }), r.onClick(o);
};
export {
  l as handleClipboard
};
