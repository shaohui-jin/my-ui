import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Tool Project",
  description: "A Personal Tool Site",
  base: '/my-ui/',
  srcDir: './src',
  outDir: './dist',
  cacheDir: './.cache',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'sla-utils',
        items: [
          { text: 'concurRequest 并发请求', link: '/utils/concurRequest' },
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
    ]
  }
})
