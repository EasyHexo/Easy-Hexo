/**
 * 插入 Gitalk
 * @param {VueRouter} router  Vuepress 路由对象
 * @param {*}         options 站点数据
 */
const integrateGitalk = (router, options) => {
  // 创建 gitalk 样式标签
  const elGitlakLink = document.createElement('link')
  elGitlakLink.href = 'https://unpkg.com/gitalk@1.4.1/dist/gitalk.css'
  elGitlakLink.rel = 'stylesheet'
  // 创建 gitalk 脚本标签
  const elGitalkScript = document.createElement('script')
  elGitalkScript.src = 'https://unpkg.com/gitalk@1.4.1/dist/gitalk.js'
  // 插入 gitalk 样式和脚本
  document.body.appendChild(elGitlakLink)
  document.body.appendChild(elGitalkScript)

  // 添加路由规则
  router.afterEach(({ fullPath }) => {
    if (fullPath === '/') {
      return
    }
    // 已被初始化则根据页面重新渲染评论区
    if (elGitalkScript.onload) {
      renderGitalk(fullPath, { ...options })
    } else {
      elGitalkScript.onload = () => {
        const elGitalkContainer = document.createElement('div')
        elGitalkContainer.id = 'gitalk-container'
        elGitalkContainer.classList.add('content')
        const elPage = document.querySelector('.page')
        if (elPage) {
          elPage.appendChild(elGitalkContainer)
          renderGitalk(fullPath, { ...options })
        }
      }
    }
  })
}

/**
 * 根据具体路径渲染 gitalk 评论区
 * @param {string} fullPath 当前页面的 url
 */
const renderGitalk = (fullPath, options) => {
  new Gitalk(Object.assign({}, { id: fullPath }, { ...options })).render('gitalk-container')
}

export default ({ Vue, options, router, siteData }) => {
  try {
    if (!document) {
      return
    }
    integrateGitalk(router, { ...siteData.themeConfig.gitalk })
  } catch (e) {
    if (e.message === 'document is not defined') {
      // just ignore it
      return
    }
    console.error(e.message)
  }
}
