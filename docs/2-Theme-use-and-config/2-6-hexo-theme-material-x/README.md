---
title: Hexo-theme-material-x
---

# Hexo-theme-material-x

[Material X 主题地址](https://github.com/xaoxuu/hexo-theme-material-x)

**Material X** 是 xaoxuu 基于 Material Flow（已停止维护）改编的一个 Hexo 主题，相对作者原主题主要有以下方面改动：

- 调整卡片阴影细节以及增加卡片的动画效果。
- 博文列表将作者的多列布局改为单列布局。
- 使用 [Font Awesome](http://fontawesome.io) 图标。
- 优化了颜色搭配，方便在 defines 中更换主题色。
- 一些 UI 细节，如调整搜索框长度使之与右边卡片等宽、优化了在手机端的显示效果。
- 可以显示网易云音乐歌单。
- 支持 3 种评论系统：Disqus、来必力和 Valine。
- 增加了推荐文章列表，增加博客流量。
- 增加了阅读统计。
- 支持渲染MathJax数学公式。
- 修复了目录有时无法定位的BUG。


## Demo Blogs

本主题将持续更新和维护，你可以在这里查看主题最新的实际效果：[👉https://blog.xaoxuu.com 👈](https://blog.xaoxuu.com)

**以及其他使用 Material X 主题的博客：**

| 博客         | 链接                 |
| ------------ | -------------------- |
| MicDZ's blog | https://www.micdz.cn |
| 小吴博客 | https://www.wushile.top |
| Heiyiren | http://blog.heiyiren.top |
| MainGuo | https://blog.mainguo.top |
| Mark's blog | https://mark-thinkpad.gitee.io/blog/ |
| gltjk | https://blog.gltjk.com |
| BFDZ | https://www.bfdz.ink |
| Amblizer's Mainframe | https://amblizer.xyz |
| Digcore | https://www.digcore.cn/ |


## 下载安装

提供两种安装方式：脚本和手动，脚本不仅可以安装主题，还可以方便你发布博客，详见[@hexo.sh](../hexo.sh/)。

### A. 使用脚本全自动安装（目前仅支持 mac OS）

首先到博客的根目录打开终端 ，如果你想省事，复制下面这行脚本到终端中执行，全程自动化操作。

```bash
curl -O 'https://raw.githubusercontent.com/xaoxuu/hexo.sh/master/hexo.sh' -# && chmod 777 hexo.sh && . hexo.sh -i i x
```

如果你选择了脚本安装，现在可以直接往下看配置项啦~

### B. 手动安装

到博客的根目录打开终端 ，下载主题到 `themes/` 文件夹：

```bash
git clone https://github.com/xaoxuu/hexo-theme-material-x themes/material-x
```

然后安装依赖包：

```bash
npm i -S hexo-generator-search hexo-generator-feed hexo-renderer-less hexo-autoprefixer hexo-generator-json-content hexo-recommended-posts
```

## 站点配置

### 网站图标

在博客主目录的 `_config.yml` 文件中，添加 `shortcut_icon` 和 `favicon`。
例如：

```yaml
shortcut_icon: "https://xaoxuu.com/assets/img/favicon.ico"
favicon: "https://xaoxuu.com/assets/img/favicon.ico"
```

## 主题配置

把 `themes/material-x/_config.yml` 中的 **所有** 内容复制到博客主目录的 `_config.yml` 文件中，然后根据自己的需要填写和修改。这样做的好处是：更新主题的时候你修改过的配置就不会被覆盖了。

:::tip
以下这些配置如果没有特殊说明，都指的是博客主目录的 `_config.yml` 文件。
:::

### 导航栏

你可以找到类似这一段，把它改为你需要的：

```yaml
# 导航栏
nav_menu:
  - name: 主页
    slug: about
    icon: fa-home
    url: /
  - name: 项目
    slug: projects
    icon: fa-cube
    url: https://xaoxuu.com/proj
  - name: 博客
    slug: home
    icon: fa-rss
    url: /
  - name: 归档
    slug: archives
    icon: fa-archive
    url: /archives
```

其中 icon 是 `Font Awesome` 图标名，你要显示什么图标，去 [Font Awesome](https://fontawesome.com/icons?d=gallery) 找就可以了。

### 侧边栏

右边的小窗口，可以根据需要显示。

```yaml
# 右边的小窗口，不想显示哪一项的注释掉对应的即可
widgets:
  # 博主信息，显示个人头像、格言、社交信息等
  author:
    enable: true
    avatar: https://xaoxuu.com/assets/img/avatar.jpg # 头像，如果config中已经设置avatar了，这里可以不用写
    title: 某知名博主 # 博客名、头衔等等，居中显示
    motto: 某知名博主的座右铭啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。 # 格言座右铭等等
    social: true # 是否显示社交信息（内容同页脚的社交信息）
  # 显示文章分类
  categories: true
  # 显示文章标签
  tagcloud: true
  # 显示网易云歌单
  musicid: 746319661 # 歌单id
  # 显示友链
  links:
  - name: xaoxuu
    url: https://xaoxuu.com
  # 显示目录（在文章中设置toc:false可以隐藏单篇文章的目录）
  toc: true		
```



#### 博主（头像/头衔/格言/社交信息）

```yaml
# 右边的小窗口，不想显示哪一项的注释掉对应的即可
widgets:
  # 博主信息，显示个人头像、格言、社交信息等
  author:
    enable: true
    avatar: https://xaoxuu.com/assets/img/avatar.jpg # 头像，如果config中已经设置avatar了，这里可以不用写
    title: 某知名博主 # 博客名、头衔等等，居中显示
    motto: 某知名博主的座右铭啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。 # 格言座右铭等等
    social: true # 是否显示社交信息（内容同页脚的社交信息）
```


#### 分类

```yaml
# 右边的小窗口，不想显示哪一项的注释掉对应的即可
widgets:
  ...
  # 显示文章分类
  categories: true
```

:::tip
值得注意的是：不同层级的同名分类不是同一个分类，不会自动合并。例如文章A的分类是“分类1，分类2”，文章B的分类是“分类2”，那么会有两个名为“分类2”的分类，一个路径是`分类1/分类2`，一个路径是`分类2`。
:::

#### 标签

```yaml
# 右边的小窗口，不想显示哪一项的注释掉对应的即可
widgets:
  ...
  # 显示文章标签
  tagcloud: true
```



#### 网易云音乐歌单

```yaml
# 右边的小窗口，不想显示哪一项的注释掉对应的即可
widgets:
  ...
  # 显示网易云歌单
  musicid: 746319661 # 歌单id
```



#### 友链

```yaml
# 右边的小窗口，不想显示哪一项的注释掉对应的即可
widgets:
  ...
  # 显示友链
  links:
  - name: xaoxuu's blog
    url: https://blog.xaoxuu.com
```



#### 生成目录（TOC）

默认值：`true`

```yaml
# 右边的小窗口，不想显示哪一项的注释掉对应的即可
widgets:
  ...
  # 显示目录（在文章中设置toc:false可以隐藏单篇文章的目录）
  toc: true
```



### 推荐文章

如果你不想显示推荐文章，可以卸载 `hexo-recommended-posts` 这个依赖包。

```yaml
# 推荐文章
recommended_posts:
  autoDisplay: false # 自动在文章底部显示推荐文章，如果你使用Material-X主题，这里要设置为false。
  server: https://api.truelaurel.com # 后端推荐服务器地址
  timeoutInMillis: 10000 # 服务时长，超过此时长，则使用离线推荐模式
  excludePattern: []
  titleHtml: <h4>推荐文章</h4> #自定义标题
  internalLinks: 3 # 内部文章数量
  externalLinks: 2 # 外部文章数量
  fixedNumber: false
```

:::tip
注意：`autoDisplay: false` 这一项不要修改，因为自动显示效果不佳，作者已经在主题里给它设置显示位置了。
:::


### 评论系统

提供 3 种可选，如果你使用其他的评论系统，请自己修改主题。

#### Disqus

官网： [http://disqus.com/](http://disqus.com/)

```yaml
# disqus评论
disqus_shortname: #你的disqus的shortname#
```

#### 来必力

官网： [http://www.laibili.com.cn/](http://www.laibili.com.cn/)

```yaml
# 来必力评论
livere_uid: #你的livere的uid
```
在这里查看你的 uid：[https://livere.com/insight/myCode](https://livere.com/insight/myCode)，在【代码管理 -> 一般网站】中找到如下这段代码，其中 `data-uid` 中的内容就是你的 `livere_uid`。

```html
<!-- 来必力City版安装代码 -->
<div id="lv-container" data-id="city" data-uid="你的livere的uid">
...
```

#### Valine

官网： [https://valine.js.org](https://valine.js.org)

```yaml
# valine
valine:
  enable: true # 如果你想用Valine评论系统，请设置enable为true
  appId:  # 必填
  appKey:  # 必填
  guest_info: nick,mail,link #valine comment header info
  placeholder: 快来评论吧~ # valine comment input placeholder(like: Please leave your footprints )
  avatar: mp # gravatar style https://valine.js.org/avatar
  pageSize: 10 # comment list page size
  verify: false # valine verify code (true/false)
  notify: false # valine mail notify (true/false)
  lang: zh-cn
```

### 页脚

```yaml
# 页脚社交信息
social:
  - icon: fa-envelope
    url: mailto:me@xaoxuu.com
  - icon: fa-github
    url: https://github.com/xaoxuu
  - icon: fa-instagram
    url: https://www.instagram.com/xaoxuu
  - icon: fa-google-plus
    url:
  - icon: fa-twitter
    url: https://twitter.com/xaoxuu
  - icon: fa-music
    url: https://music.163.com/#/user/home?id=63035382
  - icon: fa-rss
    url: atom
  - icon: fa-telegram
    url:
  - icon: fa-vimeo
    url:
  - icon: fa-gitlab
    url:
  - icon: fa-linkedin
    url:
  - icon: fa-snapchat
    url:
  - icon: fa-steam
    url:
  - icon: fa-spotify
    url:
  - icon: fa-tumblr
    url:
  - icon: fa-youtube
    url:
  - icon: fa-weibo
    url:
  - icon: fa-weixin
    url:
  - icon: fa-qq
    url:
```

这些社交按钮也会同时出现在侧边栏头像下方，可以在侧边栏的配置中设置不显示。

## 文章配置

文章的配置（Front Matter）写在文章的 md 文件开头，只对当前文章有效。

### 是否生成目录

默认值：`true`
如果主题配置中的 `toc` 为 `false`，则这里的设置无效。

```yaml
---
toc: false
---
```

### 是否显示推荐文章

默认值：`true`
如果主题配置中没有提供 `recommended_posts`，则这里的设置无效。

```yaml
---
recommended_posts: false
---
```

### 是否显示评论

默认值：`true`
如果主题配置中没有提供任何一种评论系统，则这里的设置无效。

```yaml
---
comments: false
---
```


### 是否开启渲染MathJax

默认值：`false`
如果某一篇文章含有MathJax数学公式，可以在这篇文章中设置为 `true`。

```yaml
---
mathjax: true
---
```



## 自定样式

找到 `themes/material-x/source/less/_defines.less` 这个文件。

:::tip
由于这个文件在 `themes/material-x` 中，所以更新主题的时候先备份一下 `_defines.less` 这个文件，更新之后对比改动自行修改。
:::


### 字体

调整这些字体的顺序：

```less
// 大部分文字字体
@fontfamily_base: 'Ubuntu', Menlo, Monaco, Helvetica, "Hiragino Sans GB", "Hiragino Sans GB W3", Source Han Sans CN Regular, WenQuanYi Micro Hei, "Microsoft YaHei", Arial, sans-serif;
// 代码字体
@fontfamily_code: Menlo, Monaco, @fontfamily_base;
// LOGO字体
@fontfamily_logo: @fontfamily_base;
```

默认的字体 `Ubuntu` 使用的是GoogleFontsAPI：

```html
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
```


### 字号

```less
// base
@fontsize_base:   16px;
@fontsize_small:  @fontsize_base * 0.875;
@lineheight_base: 1.7;
// title
@fontsize_h1: @fontsize_base * 1.5;
@fontsize_h2: @fontsize_base * 1.4;
@fontsize_h3: @fontsize_base * 1.2;
@fontsize_h4: @fontsize_base * 1.1;
@fontsize_h5: @fontsize_base * 1;
@fontsize_h6: @fontsize_small;
// article
@fontsize_article_title: @fontsize_h1 * 1.2;
@fontsize_article_title_phone: @fontsize_h2;
```



### 布局尺寸

```less
@on_modal_threshold:  680px;
@on_phone:         820px;
@on_laptop:        990px;
@on_desktop:       1200px;
// container
@width_container:  1200px;
// post
@width_post_max: 980px;
// 侧边栏宽度
@width_sidebar: 285px;
// 搜索框的宽度，建议和侧边栏宽度保持一致
@width_searchbar: @width_sidebar;
// 一个cell的高度
@height_cell: 36px;
```



### 导航栏

```less
// 导航栏高度
@height_navbar: 54px;
@fontsize_logo: 1.3em;
@fontsize_header_switcher: 1.3em;
@fontsize_header: 1em;
```



### 间距

目前很多地方的间距都是依据这个值：

```less
@gap: 20px;
```



### 圆角

```less
// 0px: 极端，2px：硬朗，4px：常规，8px：圆润，16px：温柔
@border_radius: 8px; // 圆角半径，可以根据心情随时调整风格
@border_radius_left_line: 4px; // 左边的竖线的宽度
@border_radius_code_block: 4px; // 代码块的圆角及其滚动条的宽度
```



### 配色

为了方便个性化配色，这里的字段有点多，不要着急，左边的`key`是主题文件中需要用到的，右边的`value`，你可以使用宏定义（例如`@theme_base_main: #EFEFEF;`），也可以直接写具体的颜色值。

#### 背景颜色

| key                  | value的作用                                |
| -------------------- | ------------------------------------------ |
| @theme_bg_main       | 网页背景色                                 |
| @theme_bg_navbar     | 导航栏背景色                               |
| @theme_bg_card       | 卡片的背景色                               |
| @theme_bg_code       | 代码的背景色                               |
| @theme_bg_code_block | 代码块的背景色                             |
| @theme_bg_quote      | 引用的背景色，以及分类、归档的高亮时的颜色 |

#### 文字颜色

| key                   | value的作用                            |
| --------------------- | -------------------------------------- |
| @theme_text_header    | 标题文字颜色（h1/h2）                  |
| @theme_text_link      | 链接颜色                               |
| @theme_text_highlight | 链接高亮颜色                           |
| @theme_text_in_header | 在主题色中显示的文本（一般为白或灰黑） |
| @theme_text_main      | 正文文字颜色                           |

#### 代码

```less
// 背景色 ----------------
// 网页背景
@theme_bg_main: @theme_base_main;
// 导航栏背景
@theme_bg_navbar: darken(@theme_base_main, 4%);
// 卡片背景
@theme_bg_card: white;
// 卡片标题栏背景
@theme_bg_card_header: @theme_bg_navbar;
// 代码的背景色
@theme_bg_code: fade(@color_mac_maximize, 6%);
// 代码块的背景色
@theme_bg_code_block: @theme_bg_code;
// 引用的颜色以及分类、归档的 hover 时颜色
@theme_bg_quote: @theme_base_tint;
// 文字颜色 ----------------
// 标题文字颜色（h1/h2）
@theme_text_header: @theme_base_tint;
// 链接颜色
@theme_text_link: @color_ax_blue;
// 链接高亮颜色
@theme_text_highlight: @theme_base_tint;
// 在主题色中显示的文本（一般为白或深灰）
@theme_text_in_header: @dark;
// 正文文字颜色
@theme_text_main: @dark;
```

这里右边多次出现的 `@theme_base_main` 和 `@theme_base_tint` 就是宏定义，主题文件中并没有用到。

对应的效果如图所示：

![](https://img.vim-cn.com/70/5620af391b12439452a1e03413574fb3a1208c.png )



### 阴影

```less
// 卡片正常状态的阴影
@boxshadow_card_normal: @boxshadow_base_1, @boxshadow_base_2;
// 卡片漂浮起来时的阴影
@boxshadow_card_raised: @boxshadow_base_2, @boxshadow_base_4, @boxshadow_base_8, @boxshadow_base_16;
```



## 故障排查

如果你发现 **无法使用** 或者效果与[示例](https://blog.xaoxuu.com)有较大区别，可以使用hexo官方提供的用于单元测试的博客应用本主题查看样式是否正常，对比`_config.yml`文件排查问题。

### 下载单元测试

Hexo官方的单元测试博客： [https://github.com/hexojs/hexo-theme-unit-test.git](https://github.com/hexojs/hexo-theme-unit-test.git)。

如果你的系统是macOS，则可以使用[hexo.sh](../hexo.sh/)脚本一键完成测试。


## 主题源码

<div class="readmore">[<i class="fa fa-github"></i>源码](https://github.com/xaoxuu/hexo-theme-material-x/)</div>
