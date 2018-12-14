<template>
  <div class="comment content" v-if="!this.$page.frontmatter.noComment==true?true:false">
    <!-- 添加 Valine -->
    <div id="vcomments"/>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!window) {
      // ssr 忽略
      return
    }
    const Valine = window.Valine || null
    if (!Valine) {
      // 加载失败忽略
      return
    }
    this.$nextTick(() => {
      new Valine(
        Object.assign({
          av: AV,
          el: '#vcomments',
          path: this.$page.path
        },
        { ...this.$site.themeConfig.valine })
      );
    });
  }
};
</script>
