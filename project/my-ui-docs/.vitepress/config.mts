import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "杂七杂八工具库",
  description: "A Personal Tool Site",
  base: '/my-ui/',
  srcDir: './src',
  outDir: './dist',
  cacheDir: './.cache',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://shaohui-jin.github.io/my-ui/',
    lastmodDateOnly: false
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '团队', link: '/team' },
    ],

    sidebar: [
      {
        text: '通用工具',
        items: [
          { text: 'number 数字工具', link: '/utils/common/number' },
          { text: 'color 颜色工具', link: '/utils/common/color' },
          {
            text: 'hooks 工具',
            items: [
              { text: 'debounce 防抖', link: '/utils/common/hooks/debounce' },
              { text: 'permission 权限', link: '/utils/common/hooks/permission' },

            ]
          },
          {
            text: 'typeScript 类型体操',
            items: [
              { text: 'getValue 获取值', link: '/utils/common/typeScript/getValue' },
              { text: 'setValue 设置值', link: '/utils/common/typeScript/setValue' },
              { text: 'getOptional 获取可选属性', link: '/utils/common/typeScript/getOptional' },
              { text: 'arrayToUnion 数组转联合', link: '/utils/common/typeScript/arrayToUnion' },
              { text: 'getCompType 获取组件ref', link: '/utils/common/typeScript/getCompType' },
            ]
          },
        ]
      },
      {
        text: '优化工具',
        items: [
          { text: 'concurRequest 并发请求', link: '/utils/optimize/concurRequest' },
          { text: 'performChunk 分片执行任务', link: '/utils/optimize/performChunk' },
        ]
      },
      {
        text: '组件工具',
        items: [
          {
            text: '文本',
            items: [
              { text: 'text-overflow-area 文本溢出', link: '/components/text/text-overflow-area' },
              { text: 'text-erase-area 文本擦除', link: '/components/text/text-erase-area' },
            ]
          },
          {
            text: '图片',
            items: [
              { text: 'image 图片', link: '/components/image/image' },
              { text: 'image-pointer 图片指针', link: '/components/image/image-pointer' },
              { text: 'image-avatar 图片头像', link: '/components/image/image-avatar' },
              { text: 'image-carousel 图片轮播', link: '/components/image/image-carousel' },
            ]
          },
          {
            text: '绘图',
            items: [
              { text: 'canvas-time 粒子时钟', link: '/components/canvas/canvas-time' },
           ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shaohui-jin/my-ui' }
    ],
    search: {
      provider: 'local'
    },
  },
  markdown: {
    lineNumbers: true
  }
})
