---
title: Hexo-theme-yilia
---
# Hexo-theme-yilia

State: writing.

Hexo-Yilia是一个优秀的Hexo主题，由[@Litten][1]开发,受到了广大Hexo使用者的欢迎。  
说它优秀有以下几个原因：  
- [x] 优秀的加载速度
- [x] 优秀的双栏设计
- [x] 优秀的智能菜单
- [x] 优秀的简约画面   

这样一款简约优雅的主题，能让人更加专注于文章内容。  
所以事实上本人是不大建议魔改的，但是有一些小小的细节可以根据个人喜好进行调整。  
当然，如果您要使用这款主题，您就必须明确您是以文章为中心  
而不是以背景和格式为中心的。
<!--more-->

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
```cmd
git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia
```

## 基础配置

Yilia是一个优秀的双栏结构的主题，于是我们可以先来研究其左栏（Left-Col）。  
让我们来了解一下Yilia主题Left-Col中有哪些可显示并且方便个人修改的组件：  
- [x] 作者名称，Author
- [x] 签名，Subtitle
- [x] 头像，Avatar
- [x] 菜单，Menu（所有文章/友链/关于我）
- [x] 智能菜单，SmartMenu
- [x] 联系方式，CallMe（Github/Rss/Mail/...）
- [x] 头像后部背景，Header

极大的定制范畴使得同一款主题可以衍生出很多不同的风格。   

### Yilia的主题格式
（求求您耐心的读完这一段，千万不要吓跑）  
文件树：（Yilia文件夹下）  
其中，在文件夹后打`*`号的表示在使用过程中不会进行大量修改或是根本不用/不建议修改。  
```bat
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

其中，大量的渲染文件放在`layout`目录下。当然，大部分的Hexo-Theme渲染文件也是放在`layout`下的。  
Yilia有着层次分明的渲染结构，十分适合二次编写。但本文主要是基于原有风格进行细节调整。  
您会发现在`source`目录下有一个`img`文件夹，这里面可以存放和博客效果相关的图片，在`_config.yml`文件中就可以以`/img/你的图片名称`来使用图片了，我们一般称`/img/...`，`/post/...`这样的地址为相对地址，不同于`C:/bulabula/.../img/...`这样的完整地址，在同一个大目录下，相对地址的使用可以省略该大目录的地址信息。即`C:/mark/`下，想要使用`C:/mark/img/1.jpg`就可以写成`/img/1.jpg`。


### `_config.yml`文件配置

每款Hexo主题都有它的`_config.yml`文件，里面放有可以直接修改的个性化设置。  
于是，让我们从这说起吧

```yml
# Header

menu:
  主页: /
  随笔: /tags/随笔/

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
  #mail: "mailto:litten225@qq.com"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"

rss: /atom.xml

# 是否需要修改 root 路径
# 如果您的网站存放在子目录中，例如 http://yoursite.com/blog，
# 请将您的 url 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
root: /

# Content

# 文章太长，截断按钮文字
excerpt_link: more
# 文章卡片右下角常驻链接，不需要请设置为false
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false

# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: '谢谢你请我吃糖果'
# 支付宝二维码图片地址，跟你设置头像的方式一样。比如：/assets/img/alipay.jpg
alipay: 
# 微信二维码图片地址
weixin: 

# 目录
# 目录设定：0-不显示目录； 1-文章对应的md文件里有toc:true属性，才有目录； 2-所有文章均显示目录
toc: 1
# 根据自己的习惯来设置，如果你的目录标题习惯有标号，置为true即可隐藏hexo重复的序号；否则置为false
toc_hide_index: true
# 目录为空时的提示
toc_empty_wording: '目录，不存在的…'

# 是否有快速回到顶部的按钮
top: true

# Miscellaneous
baidu_analytics: ''
google_analytics: ''
favicon: /favicon.png

#你的头像url
avatar:

#是否开启分享
share_jia: true

#评论：1、多说；2、网易云跟帖；3、畅言；4、Disqus；5、Gitment
#不需要使用某项，直接设置值为false，或注释掉
#具体请参考wiki：https://github.com/litten/hexo-theme-yilia/wiki/

#1、多说
duoshuo: false

#2、网易云跟帖
wangyiyun: false

#3、畅言
changyan_appid: false
changyan_conf: false

#4、Disqus 在hexo根目录的config里也有disqus_shortname字段，优先使用yilia的
disqus: false

#5、Gitment
gitment_owner: false      #你的 GitHub ID
gitment_repo: ''          #存储评论的 repo
gitment_oauth:
  client_id: ''           #client ID
  client_secret: ''       #client secret

# 样式定制 - 一般不需要修改，除非有很强的定制欲望…
style:
  # 头像上面的背景颜色
  header: '#4d4d4d'
  # 右滑板块背景
  slider: 'linear-gradient(200deg,#a0cfe4,#e8c37e)'

# slider的设置
slider:
  # 是否默认展开tags板块
  showTags: false

# 智能菜单
# 如不需要，将该对应项置为false
# 比如
#smart_menu:
#  friends: false
smart_menu:
  innerArchive: '所有文章'
  friends: '友链'
  aboutme: '关于我'

friends:
  友情链接1: http://localhost:4000/
  友情链接2: http://localhost:4000/
  友情链接3: http://localhost:4000/
  友情链接4: http://localhost:4000/
  友情链接5: http://localhost:4000/
  友情链接6: http://localhost:4000/

aboutme: 很惭愧<br><br>只做了一点微小的工作<br>谢谢大家
```
以上是Yilia主题的`_config.yml`文件的全部内容。作者[@Litten][1]已经对其中内容进行了十分详细的解释，应当说是十分易懂的，因此一下将对其中一些细节进行再讲解。  

### 左侧菜单

这里的添加内容将会显示在左侧栏中，

```yml
menu:
  主页: /
  随笔: /tags/随笔/
```
如图：
![菜单栏](https://i.loli.net/2018/11/01/5bdb15b464fa8.jpg)

这其中的内容可以随意添加，例如：
```yml
menu:
  主页: /
  随笔: /tags/随笔/
  记录: /record
  专题: /special
```
当然，这样做的前提是您必须先建立该页面。像这样：
```cmd
hexo new page record
hexo new page special
```

### 左侧联系方式
```yml
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
比如：如果您只需要显示github上的联系方式，并且您的github个人主界面网址是<https://github.com/markjuruo>，那么您可以这样修改：
```yml
subnav:
  github: "https://github.com/markjuruo"
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
您会注意到，联系方式中有一项m`mail`。这里面可以填您的邮箱，填写格式为`mailto:YourMail`，必须保证`YourMail`的填写格式正确（即必须为`***@***.com`的格式）。当读者点击`mail`联系方式时，浏览器就会自动寻找并打开电脑上的邮件系统，收件人上会自动填上`YourMail`。


### 首页文章显示效果

当您希望在首页，每篇文章只显示于预览时，可以使用到下面的配置：

```yml
# 文章太长，截断按钮文字
excerpt_link: more
# 文章卡片右下角常驻链接，不需要请设置为false
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false
```
一般的，`excerpt_link: more`我们不进行改动。当您的文章太长时，您可以在预览部分的后面添加`<!--more-->`，这样，在首页，文章便只会显示`<!--more-->`之前的内容。

`show_all_link`即为首页每个文章右下角的展开全文的按钮，您可以按照个人喜好改变其中的内容，如改成：`show_all_link: '瞅一瞅'`  

`mathjax`，强大的数学公式渲染器。如果您经常需要用到数学公式的，请将这一段改为`mathjax: true`。具体的mathjax教程详见：<https://www.cnblogs.com/linxd/p/4955530.html>

### 文章打赏功能

```yml
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
```yml
alipay: 
weixin: 
```
这两项的填写，可以先把你支付宝或微信的收款二维码图片放到主题根目录下的`/source/img`文件夹中，然后再在其后填写`/img/您保存的图片名称`。

### 文章目录设置

```yml
# 目录
# 目录设定：0-不显示目录； 1-文章对应的md文件里有toc:true属性，才有目录； 2-所有文章均显示目录
toc: 1
# 根据自己的习惯来设置，如果你的目录标题习惯有标号，置为true即可隐藏hexo重复的序号；否则置为false
toc_hide_index: true
# 目录为空时的提示
toc_empty_wording: '目录，不存在的…'
```
Hexo中的目录是根据您在markdown中书写的以`#`开头的标题来生成的。并且会根据`#`的个数来确定级数。
比如：
```md
# title
## title
## title
# title
```
那么它就会生成为：
```yml
1. title
1.1. title
1.2. title
2. title
```

应当注意的是：如果`toc_hide_index`后的内容为`true`，那么生成的目录将会在每一级前面都加上序号，如：
```txt
1. title
1.1. title
1.2.1.title
1.2.2. title
2. title
```


### 其他个性设置(头像/Top键/分享/图标)

```yml
# 是否有快速回到顶部的按钮
top: true

favicon: /favicon.png

#你的头像url
avatar:

#是否开启分享
share_jia: true
```
应当注意的是，`avatar`和`favicon`两项，都可以先把您需要的图片放到主题根目录下的`/source/img`文件夹中，然后再在其后填写`/img/您保存的图片名称`。

[1]: https://litten.me
