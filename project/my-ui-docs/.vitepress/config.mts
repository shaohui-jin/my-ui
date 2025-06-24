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
          { text: 'concurRequest 并发请求', link: '/utils/concurRequest' },
          { text: 'performChunk 分片执行任务', link: '/utils/performChunk' },
        ]
      },
      {
        text: 'sla-components',
        items: [
          { text: 'text-overflow-area 文本溢出', link: '/components/text-overflow-area' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
