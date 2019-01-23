---
title: hexo-theme-material-indigo
---
# hexo-theme-material-indigo
[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-Ghosin-F79F66.svg?longCache=true&style=flat-square)](https://www.ghosin.com)
![State: writing](https://img.shields.io/badge/State-writing-8E64B0.svg?style=flat-square)

## 简介

这是一个 Material Design 风格的 Hexo 主题，基于 Hexo 3.0+ 制作。  

本文使用`$`作为命令提示符, 部分内容搬运自[ indigo 主题官方文档](https://github.com/yscoder/hexo-theme-indigo/wiki)。

## Indigo 演示

[示例站点](http://imys.net/) 

![演示](@img/2/2-10/3.png)

## Feature

1. 仅支持 IE10+ 等现代浏览器。
2. 去 jQuery，更轻。相信现代浏览器的原生兼容性。
3. 使用 Less 作为 css 预处理器，需要安装 `hexo-renderer-less`。
4. 添加了英文字体支持 Roboto。
5. 添加了一些波纹效果。
6. 无前端依赖的分享实现。
7. 基于静态数据的站内搜索，无第三方侵入。
8. 支持文章打赏。

## 安装

### 主题安装

安装需确认你的 Hexo 版本在 3.0 以上，以及 Node 版本为 6.x 以上，在 Hexo 根目录，执行以下命令。

```bash
$ git clone https://github.com/yscoder/hexo-theme-indigo.git themes/indigo
```

### 切换主题分支

> 现有两个主题分支，[作者博客](https://imys.net/)中使用的是 card 分支卡片风格主题，master 分支是旧版平铺式风格主题。推荐使用 card 分支。  

```bash
# cd theme/indigo后  
# 获取远程 card 分支，并切换  
$ git checkout -b card origin/card  

# 获取远程 master 分支，并切换  
$ git checkout -b master origin/master  
```

此命令只需执行一次，之后使用 `git checkout [branch]` 命令在两个主题之间切换。  

### 依赖安装

还是在 Hexo 根目录，如果以下插件已安装过，无需再次安装。 

#### Less

主题默认使用 less 作为 css 预处理工具。  

```bash
$ npm install hexo-renderer-less --save
```

#### Feed

用于生成 rss。  

```bash
$ npm install hexo-generator-feed --save
```

#### Json-content

用于生成静态站点数据，用作站内搜索的数据源。 

```bash
$ npm install hexo-generator-json-content --save
```

#### QRCode

用于生成微信分享二维码。  

> 可选，不安装时会请求 jiathis Api 生成二维码。


```bash
$ npm install hexo-helper-qrcode --save
```

### 开启标签页

```bash
$ hexo new page tags
```

修改 `Hexo根目录/source/tags/index.md` 的元数据：

```yaml
layout: tags
comments: false
---
```

### 开启分类页

仅 card theme 支持。  

```bash
$ hexo new page categories
```

修改 `Hexo根目录/source/categories/index.md` 的元数据：

```yaml
layout: categories
comments: false
---
```

## 配置

### 站点配置

编辑站点配置文件，`Hexo根目录/_config.yml`。

#### 启用主题

```yaml
theme: indigo
```

#### 基本配置

为了得到更好的使用体验，以下内容请务必填写完整，因为这些内容会在主题中得到展示。更多见 [Hexo 官方文档](https://hexo.io/zh-cn/docs/configuration.html)

```yaml
title: 站点标题
subtitle: 站点副标题
description: 站点描述
keywords: 站点关键字
author: 作者名字
email: 邮箱
url: 站点域名
```

#### feed 配置

参考 [Hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)  
如果`_config.yml`中没有，直接插入即可。

```yaml
feed:
  type: atom
  path: atom.xml
  limit: 0
```

#### jsonContent 配置

为了节约资源，可以对 jsonContent 插件生成的数据字段进行配置，减少数据文件大小。参考 [Hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content)。

```yaml
jsonContent:
  meta: false
  pages: false
  posts:
    title: true
    date: true
    path: true
    text: true
    raw: false
    content: false
    slug: false
    updated: false
    comments: false
    link: false
    permalink: false
    excerpt: false
    categories: false
    tags: true
```

### 主题配置

编辑主题配置文件，`Hexo根目录/themes/indigo/_config.yml`。

#### 左侧菜单

默认配置如下：

```yaml
menu:
  home:
    text: 主页
    url: /
  archives:
    url: /archives
  tags:
    url: /tags
  github:
    url: https://github.com/yscoder
    target: _blank
  weibo:
    url: http://www.weibo.com/ysweb
    target: _blank
  link:
    text: 测试
    url: /
```

添加新菜单项时，在 menu 下增加子属性即可。属性说明如下：  

```yaml
menu:
 link:               # fontawesome图标，省略前缀，本主题前缀为 icon-，必须
   text: About       # 菜单显示的文字，如果省略即默认与图标一致，首字母会转大写
   url: /about       # 链接，绝对或相对路径，必须
   target: _blank    # 是否跳出，省略则在当前页面打开
```

Font Awesome 图标已集成到主题中，你可以到 [这个页面](http://fontawesome.io/icons/) 挑选合适的图标。

#### favicon

站点 logo，显示在浏览器当前标签页左上角。  

```yaml
favicon: /favicon.ico
```
#### 头像

位于左侧菜单上方。

```yaml
avatar: /img/logo.jpg
```

#### email

头像下方。

```yaml
email: example@example.com
```

#### color

设置 Android L Chrome 浏览器状态栏颜色，不需要可去除此项或设为 `false`。

```yaml
color: '#3F51B5'
```

#### 页面标题 (card theme 限定)

自定义归档、标签、分类页的大标题。

```yaml
tags_title: Tags
archives_title: Archives
categories_title: Categories
```

#### 文章摘要

可以在 Markdown 文件中加 `<!--more-->` 以分割摘要与文章正文。未设置时，按 `excerpt_length` 设置截取。

```yaml
# 文章摘要渲染方式: 为 true 时将渲染为 html，否则为文本
excerpt_render: false
# 截断长度
excerpt_length: 200
# 文字正文页链接文字
excerpt_link: 阅读全文...
```

#### MathJax

开启后，使你的站点支持公式渲染。请按需开启，因为此项需要加载额外的 js 文件，使你的网站打开速度变慢。

```yaml
mathjax: false
```

#### 分享

文章分享开关。

```yaml
share: true
```

#### 文章打赏

默认开启  

```yaml
reward:
  title: 谢谢大爷~             #显示的文字
  wechat: /img/wechat.jpg     #微信，关闭设为 false
  alipay: /img/alipay.jpg     #支付宝，关闭设为 false
```

此外在 card theme 中，可以通过在 Markdown 头部添加 `reward: false` 来控制某些不想开启打赏的页面。  

关闭打赏：

```yaml
reward: false
```

:::tip 提示
二维码请自行从微信、支付宝中下载。当两个二维码同时存在时，为保持显示效果的一致性，注意截图时的边框留白保持一致。必要时可借助 PS 等图片处理工具进行图片大小裁剪、压缩等。
:::  

#### 站内搜索

是否开启搜索。

```yaml
search: true
```

#### 布局

开启后，文章页在大屏下会隐藏左侧菜单，专注阅读。

```yaml
hideMenu: true
```

#### Toc

开启文章内容导航。

```yaml
#toc: false  #关闭
toc:
  list_number: false  # 决定导航使用的标签， true 为 ol， false 为 ul。
```

#### copyright (card theme 限定)

文章页版权声明内容，Hexo 中所有变量及辅助函数等均可调用，具体请查阅 [hexo.io](http://hexo.io/)。

```yaml
copyright: 这里写留言或版权声明：<a href="<%- url_for(page.path) %>" target="_blank" rel="external"><%- url %></a>
```

#### less

设置 less 编译时的入口文件路径，[Hexo-renderer-less](https://github.com/hexojs/hexo-renderer-less)。

```yaml
less:
  compress: true    # 是否压缩css
  paths:
    - source/css/style.less
```

#### 评论

集成了 [disqus](https://disqus.com/)、[友言](http://www.uyan.cc/)、[Gitment](https://github.com/imsun/gitment) 和 [Valine](https://valine.js.org/)，开启其一即可。

#### 数据统计

集成的有谷歌、腾讯、百度和 CNZZ，请填写你的站点标识。

```yaml
google_analytics: key
tajs: 站点id
baidu_tongji: 站点id
cnzz: 站点id
```

#### 谷歌站点验证 (card theme 限定)

```yaml
google_site_verification: false
```

#### 规范网址 (card theme 限定)

让搜索引擎重定向你的不同域名、不同子域、同域不同目录的站点到你期望的路径。[使用规范网址](https://support.google.com/webmasters/answer/139066)。

```yaml
canonical: http://imys.net
```

#### 版权起始年份

```yaml
since_year: 2006
```

#### 自定义页面关于

用户页面中作者相关的描述性文字，如不需要设为 `false`。

```yaml
about: 用户页面中作者相关的描述性文字，如不需要设为 false
```

#### cdn

开启后将使用 unpkg cdn 最新的主题样式，如果想让你的自定义样式生效，把此项设为 `false`。

```yaml
cdn: true
```

#### lightbox

文章图片灯箱效果。

```yaml
lightbox: true
```

#### ICP 备案号

```yaml
ICP_license: 京ICP备巴啦啦小魔仙案
```

以上是官方文档中所有配置，为说明配置在配置文件中都有中文说明。

## 为主题安装 MetingJS

> 注：以下部分根据 [MetingJS](https://github.com/metowolf/MetingJS) 中 README.md 配置，可同理应用于其他主题。 


### 修改文件

* 在`themes\indigo\layout\_partial\head.ejs`中插入在`</head>`前：


```javascript
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.css">
  <script src="https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js"></script>
</head>
```

* 在`themes\indigo\layout\_partial\script.ejs`中结尾插入：


```javascript
<script src="//cdn.jsdelivr.net/npm/meting@1.1.0/dist/Meting.min.js"></script>
```

然后就可以在任何地方随时插入音乐了，例如：

```markdown
文章内容1
<div class="aplayer" data-id="60198" data-server="netease" data-type="playlist" data-mode="random"></div>
文章内容2
```

MetingJS 用法见[ meto 的文章](https://i-meto.com/ghost-aplayer/)。

## 为主题安装 DisqusJS

> 注：以下部分根据 [DisqusJS](https://suka.js.org/DisqusJS/) 中  README.md 配置，可同理应用于其他主题。 
> Disqus 替代方案 - 使用 Disqus API 渲染评论列表


### 修改文件

* 在`themes\indigo\layout\_partial\post\comment.ejs`中结尾插入：


```javascript
<%- partial('../plugins/disqusjs') %>
```

* 在`themes\indigo\layout\_partial\plugins`中创建`disqusjs.ejs`,内容如下：


```javascript
<% if (theme.disqusjs) { %>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/disqusjs@1.0/dist/disqusjs.css">
<script src="https://cdn.jsdelivr.net/npm/disqusjs@1.0/dist/disqus.js"></script>
<section class="comments" id="comments">
    <div id="disqus_thread"></div>
    <script>
        var dsqjs = new DisqusJS({
            shortname: '<%- theme.disqusjs.shortname %>',
            apikey: '<%- theme.disqusjs.apikey %>',
        });
    </script>
</section>
<% } %>
```

* 配置 Disqus Application  
在 [Disqus API Application](https://disqus.com/api/applications/) 处注册一个 Application。 

![](@img/2/2-10/0.png)  

点击新创建的 Application，获取你的 API Key（公钥）。

![](@img/2/2-10/1.png)  

在 Application 的 Settings 页面设置你的域名，Disqus 会检查 API 请求的 Referrer。  

![](@img/2/2-10/2.png)  

* 主题配置文件`themes\indigo\_config.yml`中插入:


```yaml
disqusjs:
  shortname: shortname #你的 Disqus Forum 的 shortname，你可以在  https://disqus.com/admin/settings/general/ 获取你的 shortname
  apikey: API Key #DisqusJS 向 API 发起请求时使用的 API Key，你应该在配置 Disqus Application 时获取了 API Key
```
请确保其他评论关闭(配置为 `false`)。
