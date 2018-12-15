---
title: Hexo-theme-yilia
---

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-markjuruo-F79F66.svg?longCache=true&style=flat-square)](https://markjuruo.coding.me)

# Hexo-theme-yilia

![State: writing](https://img.shields.io/badge/State-writing-8E64B0.svg?style=flat-square)

Hexo-Yilia 是一个优秀的 Hexo 主题，由 [Litten](https://litten.me) 开发,受到了广大 Hexo 使用者的欢迎。  

1. 优秀的加载速度
2. 优秀的双栏设计
3. 优秀的智能菜单
4. 优秀的简约画面   

这样一款简约优雅的主题，能让人更加专注于文章内容。  
所以事实上本人是不大建议魔改的，但是有一些小小的细节可以根据个人喜好进行调整。
当然，如果您要使用这款主题，您就必须明确您是以文章为中心  
而不是以背景和格式为中心的。


## 效果图  

redbag's blog (<http://redbag.pw/>) >>

![redbag's blog](https://i.loli.net/2018/10/31/5bd9cb5a115fa.jpg)  
***
jarworker's blog (<http://www.jarworker.cn/>) >> 

![jarworker's blog](https://i.loli.net/2018/10/31/5bd9cb5ac517e.jpg)
***
markjuruo's blog (<https://markjuruo.ooo/>) >>

![markjuruo's blog](https://i.loli.net/2018/10/31/5bd9cb5ac6ca8.jpg)

## 安装

请在命令行中打开博客根目录，然后输入：

```bash
git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
```

## 基础配置

Yilia 是一个优秀的双栏结构的主题，于是我们可以先来研究其左栏（Left-Col）。  
让我们来了解一下 Yilia 主题 Left-Col 中有哪些可显示并且方便个人修改的组件：  
1. 作者名称，Author
2. 签名，Subtitle
3. 头像，Avatar
4. 菜单，Menu（所有文章/友链/关于我）
5. 智能菜单，SmartMenu
6. 联系方式，CallMe（Github/Rss/Mail/...）
7. 头像后部背景，Header

极大的定制范畴使得同一款主题可以衍生出很多不同的风格。   

### Yilia 的主题格式

（求求您耐心的读完这一段，千万不要吓跑）  
文件树：（ Yilia 文件夹下）  
其中，在文件夹后打`*`号的表示在使用过程中不会进行大量修改或是根本不用/不建议修改。  
```batch
├─languages *
├─layout
│  └─_partial
│      └─post
├─source
│  ├─fonts *
│  └─img
└─source-src *
    ├─css
    │  ├─core
    │  ├─fonts
    │  └─img
    └─js
```

其中，大量的渲染文件放在 `layout` 目录下。当然，大部分的 Hexo-Theme 渲染文件也是放在 `layout` 下的。  
Yilia 有着层次分明的渲染结构，十分适合二次编写。但本文主要是基于原有风格进行细节调整。  
您会发现在 `source` 目录下有一个 `img` 文件夹，这里面可以存放和博客效果相关的图片，在 `_config.yml` 文件中就可以以 `/img/你的图片名称` 来使用图片了，我们一般称 `/img/...` ， `/post/...` 这样的地址为相对地址，不同于 `C:/bulabula/.../img/...` 这样的完整地址，在同一个大目录下，相对地址的使用可以省略该大目录的地址信息。即 `C:/mark/` 下，想要使用 `C:/mark/img/1.jpg` 就可以写成 `/img/1.jpg` 。


### `_config.yml` 文件配置

每款 Hexo 主题都有它的 `_config.yml` 文件，里面放有可以直接修改的个性化设置。  

作者 [Litten](https://litten.me) 已经对其中内容进行了十分详细的解释，应当说是十分易懂的，因此一下将对其中一些细节进行再讲解。  

### 左侧菜单

这里的添加内容将会显示在左侧栏中，

```yaml
menu:
  主页: /
  随笔: /tags/随笔/
```
如图：

![菜单栏](https://i.loli.net/2018/11/01/5bdb15b464fa8.jpg)

这其中的内容可以随意添加，例如：
```yaml
menu:
  主页: /
  随笔: /tags/随笔/
  记录: /record
  专题: /special
```
当然，这样做的前提是您必须先建立该页面。像这样：
```bash
hexo new page record
hexo new page special
```

### 左侧联系方式

```yaml
# SubNav
subnav:
  github: "#"
  weibo: "#"
  rss: "#"
  zhihu: "#"
  #qq: "#"
  #weixin: "#"
  #jianshu: "#"
  #douban: "#"
  #segmentfault: "#"
  #bilibili: "#"
  #acfun: "#"
  #mail: "mailto:example@example.com"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"
```
左侧菜单栏的下方可以添加联系方式。  
如果前面加了`#`，就代表注释掉了，将不会显示。  
否则，请在后面写上您相对应的联系方式的网站地址。
比如：如果您只需要显示 GitHub 上的联系方式，并且您的 GitHub 个人主界面网址是 `https://github.com/xiaoming` ，那么您可以这样修改：
```yaml
subnav:
  github: "https://github.com/xiaoming"
  #weibo: "#"
  #rss: "#"
  #zhihu: "#"
  #qq: "#"
  #weixin: "#"
  #jianshu: "#"
  #douban: "#"
  #segmentfault: "#"
  #bilibili: "#"
  #acfun: "#"
  #mail: "#"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"
```
您会注意到，联系方式中有一项 `mail` 。这里面可以填您的邮箱，填写格式为 `mailto:YourMail` ，必须保证 `YourMail` 的填写格式正确（即必须为 `***@***.com` 的格式）。当读者点击 `mail` 联系方式时，浏览器就会自动寻找并打开电脑上的邮件系统，收件人上会自动填上 `YourMail` 。


### 首页文章显示效果

当您希望在首页，每篇文章只显示于预览时，可以使用到下面的配置：

```yaml
# 文章太长，截断按钮文字
excerpt_link: more
# 文章卡片右下角常驻链接，不需要请设置为false
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false
```
一般的， `excerpt_link: more` 我们不进行改动。当您的文章太长时，您可以在预览部分的后面添加 `<!--more-->` ，这样，在首页，文章便只会显示 `<!--more-->` 之前的内容。

`show_all_link` 即为首页每个文章右下角的展开全文的按钮，您可以按照个人喜好改变其中的内容，如改成： `show_all_link: '瞅一瞅'`  

`mathjax` ，强大的数学公式渲染器。如果您经常需要用到数学公式的，请将这一段改为 `mathjax: true` 。具体的 mathjax 教程详见：[这里](https://www.cnblogs.com/linxd/p/4955530.html)

### 文章打赏功能

```yaml
# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: '谢谢你请我吃糖果'
# 支付宝二维码图片地址，跟你设置头像的方式一样。比如：/assets/img/alipay.jpg
alipay: 
# 微信二维码图片地址
weixin: 
```
这里配置文章打赏功能。
```yaml
alipay: 
weixin: 
```
这两项的填写，可以先把你支付宝或微信的收款二维码图片放到主题根目录下的 `/source/img` 文件夹中，然后再在其后填写 `/img/您保存的图片名称` 。

### 文章目录设置

```yaml
# 目录
# 目录设定：0-不显示目录； 1-文章对应的md文件里有toc:true属性，才有目录； 2-所有文章均显示目录
toc: 1
# 根据自己的习惯来设置，如果你的目录标题习惯有标号，置为true即可隐藏hexo重复的序号；否则置为false
toc_hide_index: true
# 目录为空时的提示
toc_empty_wording: '目录，不存在的…'
```
Hexo 中的目录是根据您在 Markdown 中书写的以 `#` 开头的标题来生成的。并且会根据 `#` 的个数来确定级数。
比如：
```markdown
# title
## title
## title
# title
```
那么它就会生成为：
```yaml
1. title
1.1. title
1.2. title
2. title
```

应当注意的是：如果 `toc_hide_index` 后的内容为 `true` ，那么生成的目录将会在每一级前面都加上序号，如：
```yaml
1. title
1.1. title
1.2.1.title
1.2.2. title
2. title
```


### 其他个性设置(头像/ Top 键/分享/图标)

```yaml
# 是否有快速回到顶部的按钮
top: true

favicon: /favicon.png

#你的头像url
avatar:

#是否开启分享
share_jia: true
```
应当注意的是， `avatar` 和 `favicon` 两项，都可以先把您需要的图片放到主题根目录下的 `/source/img` 文件夹中，然后再在其后填写 `/img/您保存的图片名称` 。
