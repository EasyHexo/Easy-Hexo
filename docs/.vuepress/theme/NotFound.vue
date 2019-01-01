<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">回去的路。</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这儿啥都没有，快回去吧。`,
  `我们怎么来到这里的？`,
  `这是一个 404。`,
  `你似乎触碰了禁地，回去！`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
