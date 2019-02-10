const { resolve } = require('path')
const r = path => resolve(__dirname, path)

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia ||
      Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? r('components/AlgoliaSearchBox.vue')
        : r('noopModule.js')
    }
  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    // ['@vuepress/google-analytics', themeConfig.ga],
    // ['@vuepress/google-analytics', { 'ga': 'UA-130601883-3' }],
  ]
})
