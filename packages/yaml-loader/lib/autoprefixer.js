const rels = ['prefetch', 'preload']

exports.rels = rels
exports = module.exports = function autoprefetcher(raw, prefixer) {
  const [, { rel, href }] = raw
  if (rels.includes(rel)) {
    // already a prefetecher. do nothing
    return false
  }
  if (rel === 'stylesheet') {
    if (prefixer === 'preload') {
      return ['link', { rel: prefixer, href, as: 'style' }]
    } else {
      return ['link', { rel: prefixer, href }]
    }
  } else if (rel === 'script') {
    if (prefixer === 'preload') {
      return ['link', { rel: prefixer, href, as: 'script' }]
    } else {
      return ['link', { rel: prefixer, href }]
    }
  } else {
    // unexpected type. do nothing
  }
  return false
}
