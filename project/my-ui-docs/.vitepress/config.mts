import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Tool Project",
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
        text: 'sla-utils',
        items: [
          {
            text: '通用工具',
            items: [
              { text: 'color 颜色工具', link: '/utils/common/color' },
            ]
          },
          {
            text: '优化工具',
            items: [
              { text: 'concurRequest 并发请求', link: '/utils/optimize/concurRequest' },
              { text: 'performChunk 分片执行任务', link: '/utils/optimize/performChunk' },
            ]
          },
        ]
      },
      {
        text: 'sla-components',
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
              { text: 'image-carousel 图片轮播', link: '/components/image/image-carousel' },
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
