
## 注意事项

编译utils时需要注意以下几点：

1. es版本指定：（tsconfig.json配置了，暂时没找到不生效的原因）
   - 需要指定为 `es6`，因为一些工具类使用了ES6的特性。
```
tsc --declaration --allowJs --target es6 --outDir dist index.ts
```

2. 部分工具使用了 elementPlus 组件

全量引入css： `import 'element-plus/dist/index.css'`

部分引入：

`
import 'element-plus/theme-chalk/el-message.css'
`
