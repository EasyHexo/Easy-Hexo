const debug = require('debug')('yaml-loader:normalize')
const _ = require('lodash')

const autoprefixer = require('./autoprefixer')

const isArray = v => _.isArray(v)

exports.normalizeHead = function normalizeHead(raw) {
  if (!isArray(raw)) {
    throw new Error(`expect an array but got a(n) ${typeof raw}: ${raw}`)
  }
  const head = []
  for (const item of raw) {
    const { type, ...options } = item
    const prefixer = autoprefixer([type, options], 'prefetch')
    if (prefixer) {
      head.push(prefixer)
    }
    head.push([type, options])
  }
  debug(head)
  return head
}

exports.normalizeNavigator = function normalizeNavigator(raw) {
  const nav = []
  const keys = Object.keys(raw)
  for (const text of keys) {
    const link = raw[text]
    if (typeof link === 'string') {
      nav.push({ text, link })
    } else if (typeof link === 'object') {
      const items = normalizeNavigator(link)
      nav.push({ text, items })
    } else {
      throw new Error(`expect string or object but got a(n) ${typeof link}: ${link}`)
    }
  }
  debug(nav)
  return nav
}

exports.normalizeSidebar = function normalizeSidebar(raw) {
  const sidebar = {}
  const keys = Object.keys(raw)
  for (const key of keys) {
    const item = raw[key]
    if (typeof item === 'string') {
      // shallow sidebar
      if (sidebar[key]) {
        sidebar[key].unshift('')
      } else {
        sidebar[key] = ['']
      }
    } else if (isArray(item)) {
      // normal sidebar
      if (sidebar[key]) {
        sidebar[key] = sidebar[key].concat(item)
      } else {
        sidebar[key] = [''].concat(item)
      }
    } else if (typeof item === 'object') {
      // ???
    } else {
      throw new Error(`expect string or array but got a(n) ${typeof item}: ${item}`)
    }
  }
  debug(sidebar)
  return sidebar
}
