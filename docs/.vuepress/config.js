const { resolve } = require('path')
const { load } = require('yaml-loader')
const merge = require('lodash.merge')
const debug = require('debug')('easyhexo:config')
const r = path => resolve(__dirname, path)

const config = load(r('_config.yml'))
debug(config)

const configureWebpack = {
  resolve: {
    alias: {
      '@img': r('img'),
    }
  }
}

<<<<<<< HEAD
const markdown = {
  extendMarkdown: md => {
    md.use(require("markdown-it-task-lists"));
    md.use(require('markdown-it-imsize'));
  }
};

const plugins = [
  ['sitemap', { hostname: 'https://easyhexo.com' }],
  ["@vuepress/google-analytics", { ga: 'UA-130601883-3' }],
  ['vuepress-plugin-pangu'],
  ['@vuepress/medium-zoom', { selector: '.theme-macgs-content :not(a) >img' }],
=======
const plugins = [
  ['sitemap', { hostname: 'https://easyhexo.com' }],
>>>>>>> 32b71b26b27d2fd3a122f559e45da25e0e0ed1eb
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }]
]

<<<<<<< HEAD
module.exports = merge(config, { configureWebpack, markdown, plugins })
=======
module.exports = merge(config, { configureWebpack, plugins })
>>>>>>> 32b71b26b27d2fd3a122f559e45da25e0e0ed1eb
