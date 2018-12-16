<template>
  <section class="content" v-if="this.$page.frontmatter.noComment !== true">
    <!-- 添加 Valine -->
    <article id="vcomments"/>
  </section>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
    const prePath = from.path
    const path = to.path
    if (!prePath || prePath === path) {
      next()
    }
    this.$nextTick(() => {
      this.$forceUpdate()
    })
    next()
  },
  mounted() {
    if (!window) {
      // ssr 忽略
      return
    }
    const Valine = window.Valine || null
    const AV = window.AV || null
    if (!Valine || !AV) {
      // 加载失败忽略
      return
    }
    this.$nextTick(() => {
      this.$forceUpdate()
    })
  },
  updated() {
    this.$nextTick(() => {
      new Valine(
        Object.assign({
          av: AV,
          el: '#vcomments',
          path: this.$page.path
        },
        { ...this.$site.themeConfig.valine })
      )
    })
  }
}
</script>
