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

const plugins = [
  ['sitemap', { hostname: 'https://easyhexo.com' }],
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }],
  ['@vuepress/medium-zoom']
]

module.exports = merge(config, { configureWebpack, plugins })
