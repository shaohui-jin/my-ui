import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

const libDir = path.resolve(__dirname, 'lib')
const entries = Object.fromEntries(
  fs.readdirSync(libDir)
    .filter(f => f.endsWith('.ts'))
    .map(f => [f.replace(/\.ts$/, ''), path.resolve(libDir, f)])
)

export default defineConfig({
  build: {
    lib: {
      entry: entries,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`
    },
    rollupOptions: {
      // 保证每个工具单独打包
      input: entries,
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        // 输出到 dist/模块名/index.js
        // entryFileNames: '[name]/index.[format].js',
        entryFileNames: '[name].[format].js',
        preserveModules: true,
        preserveModulesRoot: 'lib'
      }
    },
    outDir: 'dist'
  },
})
