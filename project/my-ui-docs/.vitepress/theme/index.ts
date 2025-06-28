// @ts-ignore
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import {
  LTextOverflowArea, LTextEraseArea,
  LImage, LImagePointer, LImageCarousel,
  LCanvasTime
} from 'sla-lemon'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('LTextOverflowArea', LTextOverflowArea)
    app.component('LTextEraseArea', LTextEraseArea)
    app.component('LImage', LImage)
    app.component('LImagePointer', LImagePointer)
    app.component('LImageCarousel', LImageCarousel)
    app.component('LCanvasTime', LCanvasTime)
  }
} satisfies Theme
