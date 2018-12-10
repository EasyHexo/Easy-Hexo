<template>
  <!-- 添加 Valine -->
  <div id="vcomments"></div>
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
          el: '#vcomments',
          notify: true,
          verify: true,
          avatar: 'mm',
          placeholder: '🦜 来说话啊~',
        }),
        { ...this.$site.themeConfig.valine }
      );
    });
  }
};
</script>
