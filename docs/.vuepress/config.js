const { resolve } = require('path')
const { load } = require('yaml-loader')
const merge = require('lodash.merge')
const r = path => resolve(__dirname, path)

const config = load(r('_config.yml'))

const configureWebpack = {
  resolve: {
    alias: {
      '@img': r('img'),
    }
  }
}

const plugins = [
  ['sitemap', { hostname: 'https://easyhexo.com' }]
]

module.exports = merge(config, { configureWebpack, plugins })
