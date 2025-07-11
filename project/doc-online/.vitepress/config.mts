import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "杂七杂八工具库",
  description: "A Personal Tool Site",
  base: '/my-tool/',
  srcDir: './src',
  outDir: './dist',
  cacheDir: './.cache',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://shaohui-jin.github.io/my-tool/',
    lastmodDateOnly: false
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '通用工具', link: '/utils/number', activeMatch: '/utils/' },
      { text: '组件工具', link: '/comp/text/text-overflow-area', activeMatch: '/comp/' },
      { text: '样式工具', link: '/css/loader/classic', activeMatch: '/css/' },
      { text: '团队', link: '/team' },
    ],

    sidebar: {
      '/utils/': [
        { text: 'number 数字工具', link: '/utils/number' },
        { text: 'object 对象工具', link: '/utils/object' },
        { text: 'color 颜色工具', link: '/utils/color' },
        { text: 'clipboard 剪切板工具', link: '/utils/clipboard' },
        {
          text: 'hooks 工具',
          items: [
            { text: 'debounce 防抖', link: '/utils/hooks/debounce' },
            { text: 'permission 权限', link: '/utils/hooks/permission' },

          ]
        },
        {
          text: 'typeScript 类型体操',
          items: [
            { text: 'getValue 获取值', link: '/utils/typeScript/getValue' },
            { text: 'setValue 设置值', link: '/utils/typeScript/setValue' },
            { text: 'getOptional 获取可选属性', link: '/utils/typeScript/getOptional' },
            { text: 'arrayToUnion 数组转联合', link: '/utils/typeScript/arrayToUnion' },
            { text: 'getCompType 获取组件ref', link: '/utils/typeScript/getCompType' },
          ]
        },
        {
          text: '优化工具',
          items: [
            { text: 'concurRequest 并发请求', link: '/utils/concurRequest' },
            { text: 'performChunk 分片执行任务', link: '/utils/performChunk' },
          ]
        }
      ],
      '/comp/': [
        {
          text: '文本',
          items: [
            { text: 'text-overflow-area 文本溢出', link: '/comp/text/text-overflow-area' },
            { text: 'text-erase-area 文本擦除', link: '/comp/text/text-erase-area' },
          ]
        },
        {
          text: '图片',
          items: [
            { text: 'image 图片', link: '/comp/image/image' },
            { text: 'image-pointer 图片指针', link: '/comp/image/image-pointer' },
            { text: 'image-avatar 图片头像', link: '/comp/image/image-avatar' },
            { text: 'image-carousel 图片轮播', link: '/comp/image/image-carousel' },
          ]
        },
        {
          text: '绘图',
          items: [
            { text: 'canvas-time 粒子时钟', link: '/comp/canvas/canvas-time' },
          ]
        },
      ],
      '/css/': [
        {
          text: '加载中',
          items: [
            { text: 'classic 经典', link: '/css/loader/classic' },
            { text: 'dots 点缀', link: '/css/loader/dots' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shaohui-jin/my-tool' }
    ],
    search: {
      provider: 'local'
    },
  },
  markdown: {
    lineNumbers: true
  }
})
