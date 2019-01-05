<template>
  <section class="content" v-if="this.$page.frontmatter.noComment !== true">
    <!-- 添加 Valine -->
    <article id="vcomments"/>
  </section>
</template>

<script>
export default {
  mounted() {
    if (!window) {
      // ssr 忽略
      return
    }
    if (!Valine || !AV) {
      // 加载失败忽略
      return
    }
    this.$nextTick(() => {
      this.renderComment()
    })
  },
  methods: {
    renderComment() {
      const Valine = window.Valine || null
      const AV = window.AV || null
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
  },
  watch: {
    '$page.key'(val, old) {
      // 评论区防抖
      if (!val || old === val) {
        return
      }
      // 在页面变化时刷新评论区
      this.$nextTick(() => {
        this.renderComment()
      })
    }
  }
}
</script>
