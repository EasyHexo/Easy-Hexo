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
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }]
]

module.exports = merge(config, { configureWebpack, markdown, plugins })
