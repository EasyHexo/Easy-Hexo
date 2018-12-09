<template>
  <div class="dplayer">
    <button
      class="btn-show-player"
      v-show="!shouldShowPlayer"
      @click="shouldShowPlayer = true">
      点击加载播放器
    </button>
    <div v-show="shouldShowPlayer" ref="container"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: null,
    screenshot: false,
    subtitle: null,
    autoplay: false,
    theme: '#b7daff',
    loop: false,
    hotkey: true,
    preload: 'auto',
    logo: '',
    mutex: true,
  },
  data () {
    return {
      shouldShowPlayer: false,
    }
  },
  mounted () {
    if (!window) {
      // ssr 时忽略这个组件
      return
    }
    const DPlayer = window.DPlayer || null
    if (!DPlayer) {
      // 加载失败时忽略这个组件
      return
    }
    // const url = import(this.src)
    // console.log(url)
    this.$nextTick(() => {
      new DPlayer({
        container: this.$refs.container,
        autoplay: this.autoplay,
        theme: this.theme,
        loop: this.loop,
        screenshot: this.screenshot,
        hotkey: this.hotkey,
        preload: this.preload,
        logo: this.logo,
        video: {
          url: this.src,
        },
        subtitle: {
          url: this.subtitle,
        },
        mutex: this.mutex,
      })
    })
  }
}
</script>

<style scoped>
button.btn-show-player {
  margin-top: .75rem;
  border: 2px solid #4dba87;
  background-color: #fff;
  cursor: pointer;
  outline: none;
  border-radius: 33px;
  padding: 5px 16px;
  font-size: 13px;
  font-weight: 700;
  transition: background-color .3s ease;
  color: #4dba87;
}
</style>
