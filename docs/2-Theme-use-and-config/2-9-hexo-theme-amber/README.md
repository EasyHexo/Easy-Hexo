---
title: hexo-theme-amber
---

# hexo-theme-amber

[![maintainer][maintainer-img]][maintainer-url]
[![author][author-img]][author-url]
[![juejin][juejin-img]][juejin-url]

[maintainer-img]: https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square
[maintainer-url]: https://github.com/EasyHexo/Easy-Hexo
[author-img]: https://img.shields.io/badge/Author-Mitscherlich-blue.svg?longCache=true&style=flat-square
[author-url]: https://github.com/Mitscherlich
[juejin-img]: https://badge.juejin.im/entry/5c1b515ff265da61193bcc21/likes.svg?style=flat-square
[juejin-url]: https://juejin.im/post/5c1b4b69f265da611c26ef7c

::: warning 注意
这个主题仍处于开发中，此阶段会有测试性的功能加入或移除，这篇文章也可能在将来的某个时间被修改，请以最新的文档为准。
:::

[Amber 主题地址][theme-url]

[theme-url]: https://github.com/Mitscherlich/hexo-theme-amber

:tada: 基于 Bootstrap + Vue 诞生的一款单页主题。

## Amber 主题演示

![amber](@img/2/2-9/1.png)

在线演示：

[Mitscherlich's Blog](https://mitscherlich.me)

## 下载 Amber 主题

1. 进入 Github，直接下载默认分支；

![amber](@img/2/2-9/2.png)

2. 将下载的文件解压并将得到的文件夹重命名为 `amber`；

3. 将这个文件夹放到你的博客根目录下的 `themes` 文件夹下。

![amber](@img/2/2-9/3.png)

如果你熟悉 `git` 的使用，可以直接克隆源码仓库：

```bash
$ cd /path/to/your/blog # 进入你的博客地址
$ cd themes             # 进入 `themes` 文件夹
$ git clone --depth 1 https://github.com/Mitscherlich/hexo-theme-amber.git amber # 克隆主题
```

## 启用 Amber 主题

非常简单，只需要在博客根目录下的 `_config.yml` 文件中将主题选项配置为 `amber`:

```yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: amber
```

你可以在本地运行你的博客，或者重新生成它：

```bash
$ hexo clean && hexo s # 本地运行你的博客
# 或者重新生成它！
$ hexo clean && hexo g && hexo s -s # 这只会展示生成的静态文件
# 或者你偏爱 `serve` 也行！
$ serve public -p 8080
```

现在，在你的浏览器中访问 [http://localhost:8080](http://localhost:8080)，看看有什么变化？

## 配置 Amber 主题

:::tip TIP
在这一小节，没有特殊说明的情况下，`_config.yml` 指代的是 `themes/amber` 目录下的 `_config.yml` 文件，`<root>/_config.yml` 代指的是博客根目录下的 `_config.yml` 文件。
:::

通过编辑 `themes/amber` 目录下的 `_config.yml` 文件来配置你的主题。以下所有的例子中的代码都可以在我的博客中找到。

### 基本配置
#### 导航条

找到 `_config.yml` 中的 `menu` 字段，你可以很方便的定制你的导航条：

```yaml
menu:
  home: /                 # 首页
  archives: /archives     # 归档页
  # 补充你的自定义菜单
  # 末尾的 `/index.html` 视情况可以省略
  # 示例:
  # [O]  About: /about/index (如果你的页面是 `sources/<dir>/index.md` 的形式)
  # [O]  About: /about       (如果你的页面是 `sources/page.md` 的形式)
```

由于这个主题是使用 `vue` 进行开发的，`hexo` 提供的 `layout` 功能没法用了，这可能为你定制自己想要的页面带来了一些麻烦；但好消息是，直接在 `md` 文件中书写 `html` 也是可以接受的，但如果你需要用到博客数据或者自定义更复杂的功能，请参考[高级玩家 - 自定义页面](#自定义页面)这一小节，有两个详细的示例供你参考。

一个可行的例子是：

```yaml
menu:
  Essay: /related/category/essay  # 找到所有分类为 essay 的文章
  Tech: /related/category/tech    # 找到所有分类为 tech 的文章
  Note: /related/category/note    # 找到所有分类为 note 的文章
  ACG: /related/tag/ACG           # 找到所有标签含有 ACG 的文章
  Node.js: /related/tag/Node-js   # 找到所有标签含有 Node.js/Node-js 的文章
  Python: /related/tag/Python     # 找到所有标签含有 Python 的文章
  Archives: /archives             # 归档页面
  pages:                          # 不支持二级菜单，层级导航将被展平
    - text: Projects              # 一个自定义页面
      link: /projects
    - text: Messages              # 另一个自定义页面
      link: /messages
    - text: Donate                # 又一个自定义页面
      link: /donate
    - text: Profile               # 还是自定义页面
      link: /profile
```

#### RSS/Atom 订阅链接

如果你安装并配置了 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)，你可以开启这一项为你的博客添加 RSS 订阅。在 `_config.yml` 里找到 `rss` 字段，一个可行的例子是：

```yaml
rss:
  enable: true
  path: /api/atom.xml
```

`path` 是你的 `hexo-generator-feed` 生成的文件能被访问到的绝对路径，如果你的博客在二级路径下，请在前面补充你的二级路径，因为这里的跳转不会被 `vue-router` 拦截到。

#### 社交链接

这个配置影响边栏中的 `Elsewhere (友言)` 小控件。在 `_config.yml` 中找到 `social` 字段，它接受以下几项配置：

```yaml
social:
  # facebook: ...
  # github: ...
  # twitter: ...
  # weibo: ...
  websites:
    # - text: ...
    #   link: ...
```

其中，`facebook`、`github`、`twitter`、`weibo` 字段有自己的 [font-awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) 小图标，而 `websites` 字段可以作为友链使用，`text` 字段表示你想要显示的文本内容，

一个可行的例子是：

```yaml
social:
  github: https://github.com/Mitscherlich
  weibo: https://weibo.com/Mitscherlich
  websites:
    - text: YUOSC
      link: https://yuosc.club
    - text: EasyHexo
      link: https://easyhexo.github.io/Easy-Hexo/
```

#### 侧边栏

侧边栏中简单的配置都放在这里。在 `_config.yml` 中找到 `sidebar` 字段，它接受以下几项配置：

```yaml
## Sidebar
sidebar:
  leaf: To descript your blog. *Markdown* supported.
  github: Mitscherlich
```

其中，`leaf` 影响小控件 `Leaf` 的内容，可以使用 `markdown` 语法书写，文字内容将被渲染后显示在首页上；
`github` 条目是可选的，用来展示博客作者的 [Github](https://github.com) 名片，如果留空，默认将会使用 `<root>/_config.yml` 中的 `author` 字段。

#### 评论系统

现在支持的评论系统有：[Gitalk](https://github.com/gitalk/gitalk)、[Gitment](https://github.com/imsun/gitment) 和 [Valine](https://github.com/xCss/Valine)，在 `_config.yml` 中找到 `comments` 字段，它接受以下几项配置：

```yaml
comments:
  enable: true
  engine: gitalk|gitment|valine # 请只保留你需要启用的评论系统！
```

然后，为你的评论系统书写配置，**注意 :warning:，请务必缩进在 `comments` 字段下**，配置将配自动加载：

例如，`gitalk` 接受以下几项配置：

```yaml
comments:
  enable: true
  engine: gitalk
  gitalk:
    # 必须: github application client id
    clientID: process.env.clientId
    # 必须: github application client secret
    clientSecret: process.env.clientSecret
    repo: process.env.repo    # 必须: github repo
    owner: process.env.author # 必须: github repo owner
    admin:
      - process.env.author  # 必须: gitHub repo owner and collaborators
                            # only these guys can initialize github issues
```

或者 `gitment`:

```yaml
comments:
  enable: true
  engine: gitalk
  gitment:
    repo: process.env.repo    # 必须: github repo
    owner: process.env.author # 必须: github repo owner
    oauth:
      # 必须: github application client id
      client_id: process.env.clientId
      # 必须: github application client secret
      client_secret: process.env.clientSecret
```

或者 `valine`:

```yaml
comments:
  enable: true
  engine: gitalk
  valine:
    # 必须: leancloud app id
    appId: process.env.appId
    # 必须: leancloud app key
    appKey: process.env.appKey
```

> 关于 `valine` 的使用，请参考其[官网教程](https://valine.js.org/quickstart.html)，正确填写 [Leancloud](https://leancloud.cn) 相关配置。

你可能注意到了，上面的配置中包含有大量 `process.env.*` 类似的文字，`yaml` 的语法并不允许从控制台读取环境变量，这意味着你必须将上述配置直接书写在 `_config.yml` 中，如果你介意在你的公开代码中暴露这些私有变量，你可以参考[高级玩家 - 安全变量](#安全变量)一节来了解如何私有化你的配置。

#### 页脚信息

在页脚显示作者的个人链接和相关信息，在 `_config.yml` 中找到 `powered_by` 字段，一个可行的例子是：

```yaml
powered_by:
  author: Mitscherlich
  link: https://github.com/Mitscherlich
```

#### Google Analytics

```yaml
google_analytics:
  enable: true
  track_id: UA-xxxxxxxxx-x
```

开启后，将启用 [Google Analytics](https://analytics.google.com/) 统计服务。

### 没有暴露配置的插件
#### fancybox

主题集成了 `fancybox` 用于展示图片幻灯，如果你不需要，请参考[高级玩家 - 开启/关闭可选功能](#开启-关闭可选功能)一节了解更多。

#### dplayer

主题集成了 `dplayer` 视频播放器，如果你不需要，请参考[高级玩家 - 开启/关闭可选功能](#开启-关闭可选功能)一节了解更多。

#### katex

主题集成了 `katex` 用于渲染公式，如果你不需要，请参考[高级玩家 - 开启/关闭可选功能](#开启-关闭可选功能)一节了解更多。

## 高级玩家

如果上面的基本配置还满足不了你，那么欢迎你进入“高玩”的地带，这里将告诉你如何更深入的配置 Amber 主题，并将带你了解如何自定义这个主题。

:::warning 注意
进入这一小节，我将默认你有一定的 `html/css/js` 基础，熟悉 `git` 基本命令的使用，并且了解过 `vue.js` 开发相关知识。<br/>
如果你还没准备好，我推荐你先去[菜鸟教程](http://www.runoob.com/)阅读 [html5](http://www.runoob.com/html/html5-intro.html) 和 [git](http://www.runoob.com/git/git-tutorial.html) 相关知识后再继续。
:::

首先你要做的事情，就是从 `develop` 分支重新拉取主题代码，预编译的代码已经派不上用场了：

```bash
$ cd /path/to/your/blog
$ git clone -b develop --depth=1 https://github.com/Mitscherlich/hexo-theme-amber.git themes/amber
# 或者你不想覆盖已有主题，可以拉取到 themes/amber-dev 目录下
$ cd themes/amber # 或者 themes/amber-dev，视你上一步的结果而定
$ yarn install    # npm 也可以！但推荐使用 yarn！
```

> 如果你将主题下载到了 `themes/amber-dev` 目录下，你还需要在 `<root>/_config.yml` 中将 `theme` 字段修改为 `amber-dev`

这一步完成后，你的目录结构应该跟我的一样：

![amber](@img/2/2-9/4.png)

红框中的文件你是需要关注的部分~~你就说哪里不需要吧~~

### 开启/关闭可选功能
#### fancybox

[fancybox](http://fancybox.net/) 是一个 [jquery](https://jquery.com/) 插件，你可以通过这样的形式在 `md` 文件中快速插入 `fancybox`：

```
{% fancybox slug /path/to/image [/path/to/thumbnail] [class] [title] %}
```

例如：

```
{% fancybox esayhexo /assets/easyhexo/amber/preview.png Amber 主题示例图 %}
```

渲染得到的结果：

```html
<p>
  <a data-fancybox="gallery" href="/assets/easyhexo/amber/preview.png" title="Amber 主题示例图">
    <img class="" src="/assets/easyhexo/amber/preview.png" alt="Amber 主题示例图">
  </a>
</p>
```

如果你用不到 `fancybox`，并且想要提升加载速度，你可选择仅用它。`fancybox` 并不没有被集成在 vue 工程中，而是直接在 vue 模版中被引用。在 `public` 目录下找到 `index.html`：

![amber](@img/2/2-9/5.png)

图中标注的区域就是引入 `jquery` 和 `fancybox` 的代码，如果不需要，直接注释掉就好：

![amber](@img/2/2-9/6.png)

完成后，你不能在代码中继续使用 `fancybox` 了，但 `fancybox tag` 还有效，在哪里找？

![amber](@img/2/2-9/7.png)

这个文件负责在 `hexo` 中引入 `fancybox tag`，将它备份到一个不同于 `scripts` 的目录就好：

```bash
$ mv scripts/tags/fancybox.js /path/to/backup.d/
```

#### dplayer

[DPlayer](https://github.com/MoePlayer/DPlayer) 是 *b站* 前端大佬 [@DIYGod](https://github.com/DIYGod) 的开源视频播放器（现同样用于 *b站* 播放页），支持懒加载、缩略图、弹幕等功能，你可以通过这样的形式在 `md` 文件中使用它：

```
{% dplayer key=value ... %}
```

示例：

```
{% dplayer src=/assets/easyhexo/how-to-use-amber/install.mp4 %}
```

渲染出来的结果：

```html
<!-- dplayer counter starts with 0 -->
<div id="dplayer0" class="dplayer hexo-tag-dplayer-mark" style="margin-bottom: 20px;">
  <script>
    (function(){let player = {/* configs */};window.dplayers||(window.dplayers=[]);window.dplayers.push(player);})();
  </script>
</div>
```

一个例子的效果：

![amber](@img/2/2-9/8.gif)

如果你不想使用 `dplayer`，同样的，将它备份到一个不同的目录就好：

```bash
$ mv scripts/tags/dplayer.js /path/to/backup.d/
```

另外，如果你不想让 `dplayer` 出现在你的构建中，你还需要在这两个位置移除 `dplayer` 的引用，别担心，虽然接下来涉及到一点点 `Vue.js` 和 `TypeScript`，但你完全可以跳过这一步，因为文章中没有出现 `dplayer` 的话，它将不会被渲染，自然也不会影响到代码性能。

首先，你需要在 `src/components/partials` 下找到 `Gallery.vue` 这个文件：

![amber](@img/2/2-9/9.png)

然后注释掉 `renderDplayer`：

![amber](@img/2/2-9/10.png)

接下来在 `src/pages/articles` 下找到 `_slug.vue` 这个文件：

![amber](@img/2/2-9/11.png)

同样的，注释掉 `renderDplayer`：

![amber](@img/2/2-9/12.png)

就是这样！无论如何 `dplayer` 都不会被加载了！~~请允许我向 [@DIYGod](https://github.com/DIYGod) 大佬表达真挚的歉意~~

#### katex

主题同样还集成了 [KaTex](https://github.com/KaTeX/KaTeX) 用于支持 `LaTeX` 公式。同样的，在上述两个文件中，你很容易就能找到 `renderMathInElement` 函数，将它们注释掉，`katex` 就不会再困扰你了！~~我很遗憾你放弃了这么多不错的功能~~

### 安全变量

:::warning 注意
在这一小节，我将默认你了解 **Linux/Unix** 命令行的使用，并且已经正确配置了你的 **CI/CD**。
:::

`hexo` 使用 `.yml` 文件书写配置，这意味着将 `OAuth Client Id/Secret` 等变量暴露在外，是否会不太安全？如果你跟我有相同的顾虑，那么我非常推荐你阅读这一小节，若毫不在意的话，那好吧，跳过这一小节也影响不大。

在 [Github](https://github.com) 上托管代码基本意味着开放，尤其在需要与人协作时，你的一些似有配置可能被 **CI/CD**（持续集成/部署）所需要，这意味着未经加密的变量将对互联网上的每个人都是可访问的，但我们完全可以通过技术手段将这点问题解决。一下我将以 [TravisCI](https://travis-ci.org/) 为例，为 `gitalk` 和 `github pages` 配置安全变量。

首先，你需要在 [TravisCI](https://travis-ci.org/) 中设置加密的安全变量：

![amber](@img/2/2-9/13.png)

接着，在你的 `.travis.yml` 中添加以下内容：

```yaml
before_script:
  - cd themes/amber # 要修改的是 `themes/amber` 下的 `_config.yml`，不是 `<root>/_config.yml`
  - sed -i "s|process.env.clientId|$OAUTH_CLIENT_ID|g" _config.yml
  - sed -i "s|process.env.clientSecret|$OAUTH_CLIENT_KEY|g" _config.yml
  - cd - # 回到 `<root>`
```

如果你想要成功的构建发布到 `github pages`，再添加以下内容：

```yaml
deploy:
  provider: pages
  local-dir: public
  skip_cleanup: true
  keep-history: true
  committer-from-gh: true
  github-token: $GITHUB_TOKEN
```

Ok! 这样就完成了！

不过仍要指出，这样配置的“安全变量”仍然是**伪**安全变量，只是在 **CI/CD** 中对外不可见而已，最后仍然会出现在你的前端构建中，即使例如本主题使用了 `webpack` 等构建工具也**无济于事**，**有心之人**仍然可以找出你“加密”的这些变量。最后，送给大家 [Leancloud](https://leancloud.cn) 的忠告：

> AppKey 是客户端中使用的 Key，理论上客户端中所有请求都不应被信任，默认应认为 AppKey 是泄露的 —— Leancloud

### 自定义边栏

:::warning 注意
接下来两个小节是这篇教程中最“高级”的部分，需要你对 `Vue.js` 和 `TypeScript` 都有所掌握，并且最好能熟练使用 `pug` 模版语法。当然，这两个小节的代码都是经过验证的，如果你想直接依葫芦画瓢也不是不可以。
:::

> 不能自定义的主题不是好主题 —— 沃兹基·硕德

看来你的胃口有够大，主题自带的小控件已经不能满足你了。那么就让我们开始实践，编写一个[阿里云广告](https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=dmb8ah8w)小控件，为你的博客创收吧！

首先，在 `src/components/sidebar/widgets` 目录下新建 `Ads.vue` 文件：

![amber](@img/2/2-9/14.png)

在 `Ads.vue` 文件书写页面框架：

```html
<template>
  <p>placeholder</p>
</template>

<script lang="ts">
</script>

<style lang="stylus" scoped>
</style>
```

接着，在 `template` 里面书写以下内容：

```html
<transition name="fade">
  <!-- b-carousel 是 bootstrap-vue 的内置组件 -->
  <b-carousel class="ads mb-4" indicators v-model="slide">
    <b-link v-for="({ text, image, link }, i) in ads" :key="`ads-${i}`" :href="link" target="_blank">
      <b-carousel-slide :img-src="image" style="height: 160px;"/>
    </b-link>
    <span class="dismiss cursor-pointer" @click="dismissAds">&times;</span>
    <span class="tips">{{ $t('ads') }}</span>
  </b-carousel>
</transition>
```

如果你熟悉 `pug`，这样写更简洁：

```pug
<template lang="pug">
  transition(name="fade")
    b-carousel.ads.mb-4(indicators, :interval="interval", v-model="slide", v-if="!dismiss")
      b-link(v-for="({ text, image, link }, i) in ads", :key="`ads-${i}`", :href="link", target="_blank")
        b-carousel-slide(:img-src="image", style="height: 160px;")
      span.dismiss.cursor-pointer(@click="dismissAds") &times;
      span.tips {{ $t('ads') }}
</template>
```

> 后面的模版代码将全部用 `pug` 书写

在 `script` 部分中添加以下内容：

```typescript
import { Vue, Component, Prop } from 'vue-property-decorator';
import store from 'store';

@Component({ name: 'Ads' })
export default class Ads extends Vue {
  private slide: number = 0;
  private dismiss: boolean = false;

  @Prop({ type: Number, default: 10 * 1000 })
  private interval?: number;

  @Prop({ default: [] })
  private ads?: Array<{ text: string; image: string; link: string; }>;

  private beforeMount() {
    const now = Date.now();
    const last = store.get('ads_expire_date', now);
    if (now - last > 1) {
      store.set('dismiss_ads', false);
    }
    this.dismiss = store.get('dismiss_ads', false);
  }

  private dismissAds(e: any) {
    e.preventDefault();
    this.dismiss = true;
    store.set('dismiss_ads', true);
    const now = Date.now();
    const expired = 24 * 60 * 3600; // 1 day
    store.set('ads_expire_date', now + expired);
  }
}
```

样式向来复杂，这里照抄就好：

```stylus
@import "~@/common/stylus/variables"

.ads
  &:hover
    .dismiss
      display block
  span.dismiss
    z-index 99
    font-size 28px
    display none
    position absolute
    right .5rem
    top -0.5rem
    color color-muted
    &:hover
      color color-light
  span.tips
    position absolute
    padding .1rem .25rem
    right .5rem
    bottom .5rem
    color color-light
    border 1px solid color-light
    border-radius .25rem
    font-size 14px
```

在上一级目录中的 `Sidebar.vue` 中引用你添加的小控件：

![amber](@img/2/2-9/15.png)

别忘了在 `Sidebar` 上添加 `getter`：

```typescript
class Sidebar extends Vue {
  ...
  private get ads() {
    // `data` 就是 `sources/_data` 下的文件内容，和 `hexo` 数据目录用法一致
    return this.$store.state.data.ads || [];
  }
  ...
}
```

### 自定义页面

看完了自定义小控件，来试试更复杂的功能：自定义页面吧！在这个例子中，我将为大家展示如何编写一个独立页面，用于展示你的项目作品。

首先，在 `src/pages` 目录下添加 `Projects.vue` 文件并书写大致框架：

```html
<template lang="pug">
  p placeholder
</template>

<script lang="ts">
</script>

<style lang="stylus" scoped>
</style>
```

在 `template` 中插入以下内容：

```pug
.projects
  transition(name="fade", mode="out-in")
    b-card-group.mb-4(columns, v-if="projects.length")
      b-card(:img-src="preview", :key="`project-${i}`", v-for="({ name, description, link, preview }, i) in projects")
        h4 {{ name }}
        p {{ description }}
        footer(slot="footer"): b-link.text-muted(:href="link")
          fa-icon.mr-2.text-success(:icon="['far', 'thumbs-up']")
          small {{ $t('visit') }}
    b-row.justify-content-center(v-else): loading.my-5(style="margin: 0 auto;")
```

在 `script` 中插入以下内容：

```typescript
import { Vue, Component } from 'vue-property-decorator';

@Component({ name: 'Projects' })
export default class Projects extends Vue {
  private get projects() {
    return this.$store.state.data.projects || [];
  }
}
```

在 `style` 中插入以下内容：

```stylus
.projects
  .card
    .card-img
      border-bottom-right-radius 0!important
      border-bottom-left-radius 0!important
```

怎么样，是不是非常简单？最后页面样式如下：

![amber](@img/2/2-9/16.png)

不要忘了将页面组件加入路由，在 `src/router.ts` 中插入以下内容：

![amber](@img/2/2-9/17.png)

现在，重新编译你的主题文件，如果没有任何问题，那么恭喜你，大功告成！:confetti_ball:

## 写在最后

大家在使用中有什么问题可以在评论区留言，我将尽可能回复。也欢迎在 [Github](https://github.com/Mitscherlich)、[知乎](https://www.zhihu.com/people/Mitscherlich)、[掘金](https://juejin.im/user/58b50c8e8d6d81005762ba8d)、[B站](http://space.bilibili.com/17636754)、[微博](https://weibo.com/Mitscherlich) 等关注我，及时获取我的其他项目以及相关最新动态。
