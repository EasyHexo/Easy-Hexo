const _ = require('lodash')
const fs = require('fs')
const yaml = require('js-yaml')
const { normalizeHead, normalizeNavigator, normalizeSidebar } = require('./normalize')

const pick = (object, ...props) => _.pick(object, ...props)
const merge = (object, ...sources) => _.merge(object, ...sources)

function load(path) {
  if (!fs.existsSync(path)) {
    throw new Error(`${path} is not exist!`)
  }
  const raw = yaml.safeLoad(fs.readFileSync(path))
  const { head, themeConfig } = pick(raw, 'head', 'themeConfig')
  const normHead = normalizeHead(head)
  const { nav, sidebar } = pick(themeConfig, 'nav', 'sidebar')
  const normNav = normalizeNavigator(nav)
  const normSidebar = normalizeSidebar(sidebar)
  merge(themeConfig, {
    nav: normNav,
    sidebar: normSidebar
  })
  return merge(raw, { head: normHead }, { themeConfig })
}

exports = module.exports = { load }
exports.load = load
