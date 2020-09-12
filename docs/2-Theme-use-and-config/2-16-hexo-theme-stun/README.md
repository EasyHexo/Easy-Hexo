---
title: hexo-theme-stun
---

<div align="center"><img src="@img/2/2-16/logo.svg" alt="stun-logo" style="height: 100px" /></div>

# hexo-theme-stun <Badge text="@liuyib"/> <Badge text="Finish"/> <Badge text="latest"/>

:::tip 提醒
hexo-theme-stun 支持主题平滑升级。有关内容请查阅[使用数据文件平滑升级主题](/5-Add/5-3-data-file.html)。
:::

[Stun 主题地址](https://github.com/liuyib/hexo-theme-stun)

## 特性

- 简洁，快速，易用，可定制性高
- 响应式设计
- 二级导航菜单
- 支持文章图片懒加载
- 支持 `Pjax`
- 支持 `Pwa`
- 支持 `Fancybox`
- 支持 `Quicklink`
- 支持 `MathJax`、`KaTex`
- 支持 `Gitalk`、`Valine`、`Livere` 和 `Disqus` 评论系统
- 瀑布流式的相册页面
- 内置谷歌广告，一键开启
- 代码高亮，多种配色可选
- 好看的背景特效
- `...`

## 主题演示

[liuyib's Blog](https://liuyib.github.io/)

![stun-demo](@img/2/2-16/demo.jpg)

## 下载主题

1. 进入 hexo 根目录，执行指令：`git clone https://github.com/liuyib/hexo-theme-stun.git themes/stun`

2. 安装依赖：`npm install --save-dev hexo-render-pug`

## 配置

### 添加新页面

Stun 主题内置有：分类页、标签页。默认没有启用。想启用这些页面，需要按照如下步骤操作：

1. 在 Hexo 根目录下执行命令

``` bash
# 启用分类页，执行这条指令
$ hexo new page categories

# 启用标签页，执行这条指令
$ hexo new page tags
```

2. 修改 Front-Matter

找到 Hexo 根目录下的 `source/categories` 或 `source/tags` 文件夹中的 Markdown 文件，添加 Front-Matter：

``` yaml
# 如果是分类页，添加这个
type: "categories"

# 如果是标签页，添加这个
type: "tags"
```

3. 然后修改主题配置文件，将 `categories` 或 `tags` 对应项取消注释

``` yaml
menu:
  # `||` 分隔符前面表示路径，后面表示 Font Awesome 图标名称
  # 如果不需要使用图标，直接填写路径即可
  home: / || home
  archives: /archives/ || folder-open
  # categories: /categories/ || th
  # tags: /tags/ || tags
  # xxx: /xxx/ || xxx
```

除了使用上述内置页面外，如果你想使用自定义页面，需要执行如下步骤：

以添加**阅读**页面为例。

1. 修改主题配置文件，添加相应的菜单项

``` yaml
menu:
  # 格式如下
  # 名称: 路径 || 图标名称
  reading: /reading/ || book
```

> 图标的名称在这里获取：[https://fontawesome.com/v4.7.0/icons/](https://fontawesome.com/v4.7.0/icons/)。

2. 创建页面文件

在 Hexo 根目录下执行指令：

``` bash
$ hexo new page reading # 这里的 reading 对应你设置的路径
```

3. 国际化设置

找到 `languages` 目录下的语言文件，选择你网站使用的那种语言进行修改，这里以中文作为举例：

`zh-CN.yml`：

``` yaml
nav:
  reading: 阅读
```

这样就完成了自定义页面的添加。

另外，你可以通过修改主题配置文件里的 `menu_settings` 字段，来设置图标和文字是否显示：

``` yaml
menu_settings:
  # 是否只显示图标
  icon_only: false
  # 是否只显示文字
  text_only: false
```

### Favicon

刚开始，主题默认使用 Stun 的 Logo 作为网站图标，你需要换成自己的。

建议你在 **Hexo 根目录**下的 `source` 目录中，新建一个文件夹用于放置图片，例如 `assets`，然后你可以通过 `/assets/xxx.png` 这样的路径使用图片。将图片路径填入你的主题配置文件：

``` yaml
favicon:
  small: /assets/favicon-16x16.png                  # 16x16 像素大小的图片
  medium: /assets/favicon-32x32.png                 # 32x32 像素大小的图片
  # ！！如果你不懂，请忽略下面这些！！
  # apple_touch_icon: /assets/apple-touch-icon.png  # 180x180 像素大小的图片
  # safari_pinned_tab: /assets/logo-stun.svg        # SVG 格式的图片
  # msapplication: /assets/favicon-144x144.png      # 144x144 像素大小的图片
```

> 你也可以在**主题目录**下的 `source` 目录中放置图片，但不建议这种做法，因为更新主题时，可能会覆盖你的文件。

### 顶部栏

如果想要设置网站顶部栏的高度，导航栏的高度，背景图片，需要修改主题配置文件：

``` yaml
header:
  # 网站顶部的高度（设置为百分数，表示所占屏幕高度的百分比。支持所有 CSS 长度单位）
  height: 80%
  # 顶部导航栏的高度（支持所有 CSS 长度单位）
  nav_height: 50px
  # 顶部背景图片
  bg_image:
    # 是否启用
    enable: false
    # 填写图片路径或链接
    url: https://xxxxx.png
  # 顶部背景图的遮罩效果
  mask:
    enable: true
    # 透明度（取值：0 ~ 1）
    opacity: 0.5
```

### 指定顶部图

如果想要为某个页面或某篇文章单独指定顶部图，你需要在页面或文章 Markdown 源文件的 [Front-Matter](https://hexo.io/zh-cn/docs/Front-Matter) 中，添加 `top_image` 项，然后填入的图片 url 或路径即可。例如：

``` yaml
---
title: Hello Stun
date: 2019-05-15 22:54:49
top_image: https://xxxxx.jpg
---
```

### 作者信息

侧边栏默认头像是 Stun 的 Logo，你需要换成自己的，修改主题配置文件：

``` yaml
author:
  # 是否启用
  enable: true
  # 侧边栏头像
  avatar:
    # 填写图片路径或链接
    url: https://xxx.png
    # 是否显示为圆形
    rounded: true
    # 头像透明度（取值：0 ~ 1）
    opacity: 1
    # 鼠标 hover 动画，可选值：trun 或 shake
    animation: trun
  # 格言（可以是任意一句想写的话）
  motto: hello world
```

### 社交链接

修改主题配置文件：

``` yaml
# `||` 分隔符前面表示社交链接的 URL 或信息，后面表示 Font Awesome 图标
# 如果你找不到想要的图标，可以考虑用文字来代替图标显示
# 通过添加 `origin:` 前缀即可显示文字。例如：`origin:知` 会以 `知` 代替图标显示
social:
  github: https://github.com/ || github
  google: https://plus.google.com/ || google
  # twitter: https://twitter.com/ || twitter
  # youtube: https://youtube.com/ || youtube
  # segmentfault: https://segmentfault.com/ || origin:sf
  # weibo: https://weibo.com/ || weibo
  # zhihu: https://www.zhihu.com/ || origin:知
  # wechat: yournumber || weixin
  # telegram: yournumber || telegram
  # qq: yournumber || qq
  # 你可以自行添加这里没有的社交链接，格式如下：
  # xxx: xxx || (origin:)xxx

# 社交链接的设置
social_setting:
  # 是否启用社交链接
  enable: true
  # 是否只显示图标
  icon_only: true
```

> 如果不想启用某个社交链接，直接注释掉即可。
>
> 图标的名称在这里查找：[https://fontawesome.com/v4.7.0/icons/](https://fontawesome.com/v4.7.0/icons/)

当你添加一个默认没有的社交链接时，需要进行国际化设置。这里以添加链接 `掘金` 为例，步骤如下：

1. 修改主题配置文件

``` yaml
social:
  juejin: https://juejin.im/timeline || origin:掘
```

> 由于 Font Awesome 中找不到掘金的 logo，所以这里使用 `掘` 字来代替显示。

2. 国际化设置

找到 `languages` 目录下的语言文件，选择你网站使用的那种语言进行修改，这里以中文作为举例：

`zh-CN`：

``` yaml
social:
  juejin: 掘金
```

> 这里的国际化设置，是针对鼠标经过图标时，显示的提示文字。

效果如下：

![](@img/2/2-16/1.jpg)

### 文章摘要

如果想要保留文章摘要，需要**手动**在文章的 Markdown 源文件中添加 `<!-- more -->` 标记。标记之前的部分都会被保留为文章摘要，显示在文章列表中。

如果想要自动保留文章摘要，可以通过修改主题配置文件：

``` yaml
auto_excerpt:
  # 是否启用
  enable: false
  # 自动保留的字数
  length: 150
```

> 由于自动保留摘要的效果并不理想，所以这里不建议开启。

### 启用赞赏码

如果想要在文章底部启用打赏的二维码，需要修改主题配置文件：

``` yaml
# Reward
reward:
  # 是否启用
  enable: true
  # 支付宝
  alipay: https://xxxxx.png
  # 微信
  wechat: https://xxxxx.png
```

效果如下：

![转账二维码](@img/2/2-16/support.jpg)

### 更多配置

有关主题更详细的配置，请查看 [Stun 主题文档](https://liuyib.github.io/hexo-theme-stun/zh-CN/)。
