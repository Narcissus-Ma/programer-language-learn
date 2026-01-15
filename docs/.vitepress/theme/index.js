import DefaultTheme from 'vitepress/theme'
// import { HtmlPreview } from '@miletorix/vitepress-html-preview'
import AutoHeightPreview from './components/auto-height-preview.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('HtmlPreview', AutoHeightPreview)
  }
}