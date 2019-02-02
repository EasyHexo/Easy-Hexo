---
title: hexo-theme-icarus
---

# hexo-theme-icarus

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Authur-Susreal-orange.svg?longCache=true&style=flat-square)](https://github.com/Susreal)
[![](https://img.shields.io/badge/hexo--theme--icarus-latest-blue.svg?longCache=true&style=flat-square)](https://github.com/ppoffice/hexo-theme-icarus)
![State: writing](https://img.shields.io/badge/State-writing-8E64B0.svg?style=flat-square)

------

**目录：**

[[toc]]

------

Hexo-theme-icarus 是一个优秀的 Hexo 主题，开发者 [Ruipeng Zhang](https://github.com/ppoffice) 同时还维护了 [hexo-theme-hueman](https://github.com/ppoffice/hexo-theme-hueman) 和 [hexo-theme-minos](https://github.com/ppoffice/hexo-theme-minos) 两个项目。

icarus 是一个三栏结构的自适应主题，预置了大量第三方插件，可以方便使用者快速建站。整体风格简约，适合各种类型的站点，无论是技术文章，还是摄影佳作，都可以完美承载。

## 效果图  

![Icarus](https://i.loli.net/2019/02/01/5c5410e9f394f.png)

## 安装

在命令行中cd至博客根目录，加载主题：

```bash
git clone https://github.com/ppoffice/hexo-theme-icarus.git themes/icarus
```

## 基础配置

首先，要在博客根目录下的 `_config.yml` 文件中做两件事情：
1. 设置语言: `language: zh-CN`
2. 设置主题为 icarus: `theme: icarus`

icarus 为我们预置了多达 12 种语言，默认是英文。一开始我没有设置语言，电脑上打开使用的是英文，但是手机上看就是一种类似葡萄牙语的文字。没有深究原因，所以还是按照博客的受众以及平时的喜好设置一下语言，zh-CN是简体中文。

### icarus 的文件结构

先来看看 icarus 主题的文件结构吧，让我们准备好尖叫声！ 

```batch
├─includes
├─languages
├─layout
│  ├─comment
│  ├─common
│  ├─donate
│  ├─plugin
│  ├─search
│  ├─share
│  └─widget
├─sripts
└─source
    ├─css
    ├─images
    └─js
```

仔细观察渲染文件 `layout` 目录，就可以发现 icarus 的强大了，评论、捐赠、搜索、分享以及诸多第三方插件，都已经集成好啦！再说一遍，集成好啦！icarus 的简中翻译相对中规中矩，大家可以根据自己的文案风格修改 `languages` 目录下的 `zh-CN.yml` 文件。


### `_config.yml` 文件配置

首次在博客根目录执行 `hexo clean` 或者 `hexo g` 都会触发 icarus 自动生成一个 `_config.yml` 文件，我们逐一说明。

### logo

logo 会展示在顶部导航栏的最左侧以及底部的footer区域，大家可以替换 `source/images/` 下的 logo 文件，使用 svg 或者 png 格式的都可以。研究源码发现，这个地方给没有 logo 的同学保留了一套文字方案：

```js /layout/common/navbar.ejs
<% if (has_config('logo.text') && get_config('logo.text')) { %>
    <%= get_config('logo.text') %>
<% } else { %>
    <img src="<%- url_for(get_config('logo')) %>" alt="<%= get_config('title') %>" height="28">
<% } %>
```

也就是说，只要给 logo 添加 `text` 属性，就会优先展示预设文字作为 logo：

```yaml
logo:
  text: your name
```
这对于不会画 logo 的同学来说无疑是个大好消息了：

![logo](https://i.loli.net/2019/02/01/5c545d8ad3094.png)

### 评论系统

icarus 预置了 `Changyan` `Disqus` `Facebook` `Gitment` `Gitalk` `Isso` `LiveRe` 和 `Valine` 八大主流评论插件。

这里以我使用的 `Valine` 为例。首先在 [LeanCloud](https://leancloud.cn/) 注册一个免费的开发账号，新建一个新应用，并把 appid 和 appkey 配置在对应部分：

```yaml
comment:
    type: valine
    app_id:         # (required) LeanCloud application id
    app_key:        # (required) LeanCloud application key
    notify:         # (optional) receive email notification
    verify:         # (optional) show verification code
    placeholder:    # (optional) comment box placeholder text
```

其余的三项选填，这样就完成了 `Valine` 的基本配置了。此外，`Valine` 同步 [Gravatar](https://cn.gravatar.com/) 头像，只要在评论的时候留下邮箱，就会展示你独一无二的头像咯！


效果如下：

![Valine Comment](https://i.loli.net/2019/02/01/5c546c2f25862.png)

如果有的文章不希望别人评论，但是我们又希望把整个站点的评论关闭的话，就需要对指定文章进行评论关闭操作了。操作也很简单，只需要在文章 markdown 文件的 front-matter 区域设置 `comments` 为 `false` 即可：

```yaml
---
title: article title
comments: false
---
```

### 打赏

作为程序员的收入来源之一，打赏是必不可少的啦。icarus 提供了 `支付宝` `微信` `PayPal` 和 `Patreon` 四种方式：

```yaml
donate:
    -
        type: alipay
        qrcode: /images/alipay.JPG
    -
        type: wechat
        qrcode: /images/wechat.JPG
    -
        # type: paypal
        # Paypal business ID or email address
        # business: ''
        # Currency code
        # currency_code: USD
    -
        # type: patreon
        # URL to the Patreon page
        # url: ''
```

`支付宝` 和 `微信` 只需要提供二维码就可以了，可以使用本地静态资源或者图床链接。效果如下，大家懂的：

[![投喂现场](https://i.loli.net/2019/02/01/5c546821e46d5.png)](https://susreal.github.io/images/alipay.JPG)

### widget

我觉得这是 icarus 比较精髓的部分了，所有的 widget 都是一个卡片，可以自由摆放在任何位置：

![卡片化部件](https://i.loli.net/2019/02/01/5c54696fbbcad.png)

包括文章在内，个人资料、链接、分类、最新文章、归档、标签和标签云都是一个卡片，可以在 `_config.yml` 中设置各个卡片的具体属性，同时也可以设置卡片出现在网站的左侧还是右侧：

```yaml
widgets:
    -
        # Widget name
        type: tagcloud
        # Where should the widget be placed, left or right
        position: left
```

### 其他设置（置顶/阅读量统计）

还有一些其他的设置就不在这里赘述了，具体可以参考 [官方文档](https://blog.zhangruipeng.me/hexo-theme-icarus/categories/) 进行了解。

除此之外，我根据实际需求，在 icarus 主题内添加了 [置顶文章](https://susreal.github.io/2019/01/30/Hexo%E9%85%8D%E7%BD%AE/#%E4%B8%80%E3%80%81%E6%96%87%E7%AB%A0%E7%BD%AE%E9%A1%B6) 和 [阅读量统计](https://susreal.github.io/2019/01/30/Hexo%E9%85%8D%E7%BD%AE/#%E4%BA%8C%E3%80%81%E6%B7%BB%E5%8A%A0%E9%98%85%E8%AF%BB%E7%BB%9F%E8%AE%A1) 的两个小功能，大家如果有兴趣，可以前往我的博客和我交流喔:-O
