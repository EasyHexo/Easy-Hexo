---
title: hexo-theme-amber
---

# hexo-theme-amber

[![maintainer][maintainer-img]][maintainer-url]
[![author][author-img]][author-url]
![state][state-img]

[maintainer-img]: https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square
[maintainer-url]: https://github.com/EasyHexo/Easy-Hexo
[author-img]: https://img.shields.io/badge/Author-Mitscherlich-blue.svg?longCache=true&style=flat-square
[author-url]: https://github.com/Mitscherlich
[state-img]: https://img.shields.io/badge/State-writing-orange.svg?style=flat-square

::: warning 注意
这个主题仍处于开发中，此阶段会有测试性的功能加入或移除，这篇文章也可能在将来的某个时间被修改，请以最新的文档为准。
:::

[Amber 主题地址][theme-url]

[theme-url]: https://github.com/Mitscherlich/hexo-theme-amber

Amber 主题是一个基于 Vue 的 SPA 主题，受 [hexo-theme-lite](https://github.com/HeskeyBaozi/hexo-theme-lite) 的启发而诞生。

## Amber 主题演示

![preview](@img/2/2-9/1.png)

在线演示：

[Mitscherlich's Blog](https://mitscherlich.me)

## 下载 Amber 主题

::: tip TIPS
Amber 主题的下载分为*简易模式*和*高级模式*，高级模式请参考下面的**开发 Amber 主题**小节。
:::

1. 进入 Github，直接下载默认分支；

![download](@img/2/2-9/2.png)

2. 将下载的文件解压并将得到的文件夹重命名为 `amber`；

3. 将这个文件夹放到你的博客根目录下的 `themes` 文件夹下。

![download](@img/2/2-9/3.png)

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
$ serve public -p 3000
```

现在，在你的浏览器中访问 [http://localhost:3000](http://localhost:3000)，看看有什么变化？

## Amber 主题配置

::: warning 注意
这一小节的变动在将来可能很大，请留意变动。
:::

定制一个主题听起来有点可怕？没关系，参照 `themes/amber` 目录下提供的 `_config.yml` 文件，各项配置都有详细的配置说明。如果英文实在有些头疼，那么下面将为你详细说明每一项配置的用途和配置方法。

### 一、样式和内容

#### 1. 导航条

你可以定制你的导航条，以方便用户跳转到他想去的位置：

```yaml
menu:
  home: /                 # 首页
  archives: /archives     # 归档页
  categories: /categories # 分类页
  # 补充你的自定义菜单
  # 末尾的 `/index` 可以省略
  # 独立页面请添加 `/pages` 作为前缀
  # 示例:
  # [X]  About: /about/index       (需要 `/pages` 前缀)
  # [O]  About: /pages/about/index (OK)
  # [O]  About: /pages/about
  # about: /about
```

层级导航会被展平，暂时不支持二级导航

```yaml
menu:
  some:
    - nav1: path1
    - nav2: path2
# 菜单将等效于：
# menu:
#   nav1: path1
#   nav2: path2
```

你也可以在导航条中使用 [font-awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) 图标：

```yaml
menu_icon: false          # 是否在导航条中使用 font-awesome 图标
```

若要使用图标，需要将条目配置为对象：

```yaml
menu:
  home:
    link: /
    icon: home
  archive:
    link: /archives
    icon: archive
  categories:
    link: /categories
    icon: bookmark
```

#### 2. 侧边栏

Amber 主题提供了多种可定制的侧边栏小控件，并提供了显示控制的配置，使用起来非常灵活：

```yaml
# 现在支持的小控件有：
# - `LeafCard` (一言)
# - `ElsewhereCard` (友言)
# - `TagCloudCard` (标签云)
# - `GithubCard` (Github 名片)
sidebar:
  fixed: # 固定位置的小控件
    leaf:
      only: index       # 这将仅在首页显示
    tag_cloud: TagCloud # 如果你的控件名不符合 TitleCase，请手动配置
    elsewhere:
      only: index
  sticky:
    github: Github
```

其中，`LeafCard` (一言) 还支持自定义显示的内容：

```yaml
leaf: 一句话介绍一下你的博客吧，支持 *Markdown*。
```

`ElsewhereCard` (友言) 的内容在社交链接中定制：

```yaml
social_icon: true # 这里也支持 font-awesome 哦
# 应该都不用我介绍了吧
social:
  facebook:
    link: ...
    icon: facebook
  github:
    link: ...
    icon: github-alt
  twitter:
    link: ...
    icon: twitter
  wechat:
    link: ...
    icon: wexin
  weibo:
    link: ...
    icon: weibo
  qq:
    link: ...
    icon: qq
  zhihu:
    link: ...
    icon: zhihu
```

#### 3. 搜索功能

主题内置搜索功能，不需要额外的插件哦：

```yaml
search: true # `false` 将禁用搜索功能
```

#### 4. 自定义 404 页面

::: warning 注意
这是一项实验性的功能，由于不稳定可能不能取得预期相应的结果，这里的配置可能在将来被修改。
:::

主题默认的 404 页面是移植自 Chrome 的 dino-runner 小游戏，Chrome 内核的用户在地址栏输入 `chrome://dino` 试玩；如果你不想要，可以替换为你需要的内容：

```yaml
# 自定义 404 页面
page_404:
  # 将 enable 设置为 `true` 来启用自定义 404 页面
  enable: false
  # 你想要使用的 `.md` 文件路径
  # 示例:
  # 你可以通过这个命令来创建 `hexo new page 404`
  # [X]  source_path: /404/index    (不需要 `/` 前缀)
  # [O]  source_path: 404/index.md
  # [O]  source_path: 404/index
  # [O]  source_path: 404           ('/index' 可以被省略)
  source_path: 404/index.md
```

![404](@img/2/2-9/4.gif)

> 默认页面的小游戏

#### 5. 支持信息

配置后，将在页面底部显示你的相关信息：

```yaml
powered_by:
  author: Mitscherlich
  link: https://mitscherlich.me
```

### 二、扩展功能

除了上面主题自带的功能以外，主题还支持一些由第三方提供的功能。

#### 1. RSS & Atom 订阅支持

> 需要 `hexo-generator-feed`: [https://github.com/hexojs/hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)

参照 `hexo-generator-feed` 的说明安装配置了以后，在主题目录下的 `_config.yml` 中启用即可：

```yaml
rss: /api/atom.xml # 请配置为最终 feed 生成的绝对路径
# 若果不确定可以先通过 `hexo g` 生成一次看一下
```

#### 2. MathJax 支持

启用后，可以在你的文章用 MathJax 书写数学公式：

```yaml
mathjax: true
```

![mathjax](@img/2/2-9/5.png)

> 使用 MathJax 排版的数学公式

#### 3. Gitalk 评论

> 请先参考 Gitalk 的说明创建你的 Github Oauth App: [https://github.com/gitalk/gitalk](https://github.com/gitalk/gitalk)

为你的文章添加 Gitalk 评论，和你的朋友们分享你的心得吧：

```yaml
gitalk:
  enable: false # 设为 true 以启用
  owner: ...    # 仓库所有者
  admin:        # 允许创建 issues 的用户
    - ...       # 只在这里设置是没用的，还需要在 GitHub 上给这些用户你的仓库访问权限
  repo: ...     # 存放评论 issues 的仓库
  client_id: ...
  client_secret: ...
  lazy: false
```

![gitalk](@img/2/2-9/6.png)

> 是定制过的 Gitalk 样式哦

### 三、 文章 Meta & Tag

#### 1. 文章封面 `cover`

主题会尝试从文章的 `front-matters` 里抽取 `cover` 字段作为文章封面，如果没有这个字段，在生成文章时就尝试从文章中抽取第一张图片作为封面图片。如果文章也没有图片，那么这篇文章出现在轮播图时将显示默认的空白背景。

#### 2. 幻灯片 `fancybox`

主题提供了 `fancybox` 标签，可以在文章中使用 `fancybox` 加载幻灯图：

```nunjucks
{% fancybox slug /path/to/image [/path/to/thumbnail] [class] [title] %}
```

例如：

```nunjucks
{% fancybox https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png "a-class other-class" the remain content will be title %}
```

渲染出来是这样的：

```html
<p>
  <a data-fancybox="gallery" href="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" title="the remain content will be title">
    <img class="a-class other-class" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="the remain content will be title">
  </a>
</p>
```

<img src="@img/2/2-9/7.gif" style="width: 100%">

> fancybox 效果

#### 3. 视频播放器 `dplayer`

```nunjucks
{% dplayer key=value ... %}
```

例如：

```nunjucks
{% dplayer src=/assets/vedio.mp4 %}
```

<img src="@img/2/2-9/8.gif" style="width: 100%">

> 感谢 *B站* 前端大佬 [@DIYgod](https://github.com/DIYgod) 开发如此优秀的的插件

## 开发 Amber 主题

什么，主题配置仍不能让你满意？如果你熟悉 `Vue` 和 `TypeScript`，来试试定制你的需要吧！

### 获取主题源码

主题源码存放在仓库的 `master` 分支，需要通过 `git` 克隆下载：

```bash
$ cd /path/to/your/blog
$ git clone --depth 1 -b master https://github.com/Mitscherlich/hexo-theme-amber.git themes/amber
```

当然你也可以将它下载到一个不同的目录，用来区分你的生产环境和开发环境：

```bash
$ git clone --depth 1 -b master https://github.com/Mitscherlich/hexo-theme-amber.git themes/amber-dev
# 也需要在 `<root>/_config.yml` 里将主题修改为 `amber-dev`
```

安装依赖，推荐使用 `yarn`：

```bash
$ yarn install  # npm install 也行
$ yarn build    # npm run build
```

### 编译配置

这个主题基于 `Vue CLI 3` 生成，配置全部存放在 `vue.config.js` 里，详细配置请参考[配置参考 | Vue CLI 3](https://cli.vuejs.org/zh/config/)。

你需要注意的是，`outputDir` 和 `indexPath` 不能修改，因为依赖于 `hexo` 生成模版的目录结构，这些文件必须生成在对应的目录下。

在构建你的应用时，你可能需要依赖一些第三方的库，但同时又不想在 webpack 中引入使项目构建体积过大，你可以配置 `configureWebpack` 的 `externals` 字段，将其加入外部依赖中以减小构建体积。


### 推荐可以自定义的部分

#### 1. 侧边栏小控件

> TODO

#### 2. 自定义样式

> TODO

#### 3. 更多 Tag

> TODO

## 写在最后

> TODO
