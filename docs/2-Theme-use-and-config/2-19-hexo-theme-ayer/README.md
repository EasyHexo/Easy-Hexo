---
title: hexo-theme-ayer
---

# hexo-theme-ayer <Badge text="@Shen-Yu"/>  <Badge text="Finish"/>  <Badge text="v1.8.8"/>

## 介绍

> [Ayer](https://github.com/Shen-Yu/hexo-theme-ayer) 是一个干净且优雅的 Hexo 主题，自带响应式，加载速度很快，该有的功能都有，可配置项很多，非常适合作为你的博客主题，主题内还附送了6张精美的高清壁纸。欢迎使用和 Star 支持，如果你在使用过程中有任何疑问或者建议，欢迎联系我！如果你的博客采用了本主题，欢迎在下面评论区留下地址~

[Ayer](https://github.com/Shen-Yu/hexo-theme-ayer) 在马来语中是“水”的意思，在西班牙语中是“昨天”的意思。

![hexo-theme-ayer](@img/2/2-19/1.jpg)

[GitHub 地址](https://github.com/Shen-Yu/hexo-theme-ayer)

[Gitee 地址](https://gitee.com/shen-yu/hexo-theme-ayer)

[效果预览](https://shen-yu.gitee.io)

[中文说明](https://shen-yu.gitee.io/2019/ayer/)

<!-- more -->

## 特性

1. 干净且优雅，文章内容美观易读
2. 首页封面全屏平铺，扁平化设计，简洁又不失高大上
3. 响应式设计，博客在桌面端、平板、手机等设备上均能很好的展现
4. 首页封面和文案可以任意更换，主题内附送 6 张精美高清壁纸
5. 时间轴式的归档页
6. 支持 `黑夜阅读` 模式
7. 侧边栏可以点击显示或隐藏
8. 支持文章置顶和文章打赏
9. 支持文章字数和阅读时长统计
10. 支持网易云音乐播放
11. 支持 `MathJax` 和 `Katex` 数学公式
12. `TOC` 目录在文章页悬浮，跳转更方便
13. 可设置阅读文章时做密码验证 [hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt/blob/master/ReadMe.zh.md)
14. [Valine](https://valine.js.org/) 和 [Gitalk](https://gitalk.github.io/) 评论模块（推荐配合 `leancloud` 使用 `Valine` ）
15. 集成了[不蒜子 - 极简网页计数器](http://busuanzi.ibruce.info/)、百度统计、Google Analytics、CNZZ 等统计功能
16. 支持 Github Ribbons


如果想体验手机端浏览效果，可以扫一下二维码：

![手机端效果](@img/2/2-19/2.jpg)

## 多语言支持
`zh-CN（简体中文）` ; `en（English）` ; `zh-TW（繁體中文）` ; `ja（Japanese）` ; `es（Spanish）` ; `de（German）` ; `fr（French）` ; `ru（Russian）` ; `ko（Korean）` ; `vi（Vietnamese）` ; `nl（Dutch）` ; `no（Norwegian）` ; `pt（Portuguese）` 

Hexo 默认语言为英语（en），请参照上表修改 Hexo 博客目录下的 `_config.yml` 文件中 `language:` 的值（第 11 行）。

## 支持

根据 [hexo-theme-ayer 主题的开源许可证](https://github.com/Shen-Yu/hexo-theme-ayer/blob/master/LICENSE)，只要给这个主题点一个 star 并且不抹掉页脚的主题仓库链接就可以免费使用该主题。

## 安装

**方法一：**

``` bash
# 国内用户如果速度较慢，可以把github地址替换为：https://gitee.com/mirrors/ayer.git
git clone https://github.com/Shen-Yu/hexo-theme-ayer.git themes/ayer
```

**方法二（hexo >= 5.0）：**

``` bash
npm i hexo-theme-ayer -S
```

- 如果是新安装本主题，安装完成后会在根目录生成一个 `_config.ayer.yml` 文件，直接编辑 `_config.ayer.yml` 文件进行配置即可。
- 如果是主题升级，可以使用方法一，也可以将原来的配置文件移动到根目录，并重命名为 `_config.ayer.yml`。

## 修改

将 Hexo 博客目录下的 `_config.yml` 里的 `theme` 值修改成 `ayer`

``` yaml
theme: ayer
```

## 更新

更新主题可能会覆盖你之前改动过的 config 文件，建议先把 `config.yml` 里的配置备份一下，然后删掉 ayer 目录后重新 `git clone` 下载主题，再把配置复制进去。

``` bash
cd themes/ayer
git pull
```

如果你是用方法二的 npm 安装本主题，那么在根目录执行以下命令就可更新。

``` bash
npm update hexo-theme-ayer -S
```

## 主题配置

以下是 ayer 主题目录下的 `_config.yml` 文件配置，如果你是用方法二的 npm 安装，那么在 Hexo 博客目录下的 `_config.ayer.yml` 配置就行，注意别把 Hexo 的配置文件和主题的配置文件搞混。另外，请先确保你已经读过 [Hexo 文档](https://hexo.io/zh-cn/docs/)。如果你在配置过程中有问题，请先擅用 [搜索引擎](https://cn.bing.com)。如果你搜不到解决方法，你可以参考：[我的博客源码](https://gitee.com/shen-yu/shen-yu/tree/dev/)，按照我的一模一样配肯定是不会有问题的。如果对部分字体或颜色等有定制需求，请自行在 css 文件进行修改，主题本身已经很符合审美，自定义配置项也很多，不建议改得花里胡哨，过大的字体和库都会影响博客加载速度。如果还有问题或者建议，那么请在评论区给我留言~

``` yaml
# 侧边栏菜单
menu:
  主页: /
  归档: /archives
  分类: /categories
  标签: /tags
  摄影: http://shenyu-vip.lofter.com
  旅行: /tags/旅行/
  关于我: /2019/about

# 站点次标题和打字动效
# https://github.com/mattboldt/typed.js
subtitle:
  enable: true  # 是否开启动效
  text: 面朝大海，春暖花开  # 显示的文字
  text2: 愿你一生努力，一生被爱   # 滚动播放，如果不需要可以留空
  text3: 想要的都拥有，得不到的都释怀  # 最多支持三段文字
  startDelay: 0   # 延迟时间
  typeSpeed: 200  # 打字速度
  loop: true  # 是否循环
  backSpeed: 100  # 回退速度
  showCursor: true  # 是否显示光标

# 网站图标和侧边栏logo
favicon: /favicon.ico
logo: /images/ayer-side.svg

# 封面配置
# enable-是否启用封面；path-封面背景图；logo-封面logo
cover:
  enable: true
  path: /images/cover1.jpg  # /source/images目录下附送多张精美壁纸，可任意更换
  logo: /images/ayer.svg  # 如果不要直接设置成false

# 页面顶部进度条  
progressBar: true

# 告示板模块
broadcast:
  enable: true # true开启，false关闭
  type: 2 # 1：自定义输入，2：一言api(https://hitokoto.cn/)
  text: 一个安静优雅的hexo主题，快速且响应式。 # type为1时有效

# 文章配置
# 文章太长，截断按钮文字(在需要截断的行增加此标记：<!--more-->)
excerpt_link: 阅读更多...
# 如果你嫌每篇文章手动加more标记比较麻烦，又不想在首页全文显示，可以把excerpt_all设置成true，这样首页只会显示文章归档
excerpt_all: false

# 是否开启代码复制按钮
copy_btn: true
# 是否开启文章分享按钮
share_enable: true
# 国内的社交平台(If you are not in China, maybe you prefer to set:false)
share_china: true
# 文章分享文字
share_text: 分享

# 分页文字
nav_text:
  page_prev: 上一页
  page_next: 下一页
  post_prev: 上一篇
  post_next: 下一篇

# 文章页是否显示目录
toc: true

# 文章中的图片是否支持点击放大
image_viewer: true

# https://github.com/willin/hexo-wordcount
# 是否开启字数统计(关闭请设置enable为false)
# 也可以单独在md文件里Front-matter设置`no_word_count: true`属性，来自定义关闭字数统计
word_count:
  enable: true
  # 只在文章详情显示(不在首页显示)
  only_article_visit: true

# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-默认开启所有文章均有打赏，如果有些文章你不需要，请在文章对应的md文件里设置no_reward:true
reward_type: 2
# 打赏wording
reward_wording: '请我喝杯咖啡吧~'
# 支付宝二维码图片地址，跟你设置logo的方式一样。比如：/images/alipay.jpg
alipay: /images/alipay.jpg
# 微信二维码图片地址
weixin: /images/wechat.jpg

# 版权声明
# 版权声明type设定：0-关闭版权声明； 1-文章对应的md文件里有copyright: true属性，才有版权声明； 2-所有文章均有版权声明
copyright_type: 2

# 是否启用搜索
search: true

# RSS订阅(先安装hexo-generator-feed插件，再去博客根目录config进行配置)
# 不想显示可以直接留空
rss: /atom.xml

# 是否启用黑夜模式开关
darkmode: true

# 动态背景效果: 0-关闭，1-动态线条(跟随鼠标)
canvas_bg: 0

# 自定义鼠标样式，直接替换/images/mouse.cur文件
mouse:
  enable: false
  path: /images/mouse.cur

# 鼠标点击效果：0-关闭，1-爱心，2-爆炸烟花，3-粒子烟花
click_effect: 0

# 页面宽度自定义（不建议修改，可能造成布局混乱），article_width文章宽度，sidebar_width侧边栏宽度
layout:
  article_width: 80rem
  sidebar_width: 8rem
  
# GitHub Ribbons-封面右上角的forkme，换样式直接在source/images目录下替换forkme图片
github: 
  # (关闭请设置为false)
  url: https://github.com/Shen-Yu/hexo-theme-ayer

# 网易云音乐插件
music:
  enable: false
  # 播放器尺寸类型(1：小尺寸、2：大尺寸)
  type: 1
  id: 22707008  # 网易云分享的音乐ID(更换音乐请更改此配置项)
  autoPlay: true  # 是否开启自动播放

# 访问量统计(不蒜子)
busuanzi:
  enable: true

# 友盟cnzz统计(url填js代码src链接)
cnzz:
  enable: true
  url: #

# Google Analytics
google_analytics: ''
# 百度统计
baidu_analytics: ''

# Mathjax数学公式
mathjax: true

# Katex数学公式(allpost设置为false时只有头部设置math:true的文章才开启)
# 需要更换hexo渲染器，npm un hexo-renderer-marked -S && npm i hexo-renderer-markdown-it-katex -S
katex:
  enable: false # true
  allpost: true
  copy_tex: false

# 网站成立年份(默认为 2019，若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
since: 2019

# 是否显示页脚信息(建议保留，有助于本主题的推广)
pageFooter: true

# ICP备案信息尾部显示
icp:
  enable: false
  url: 'http://www.beian.miit.gov.cn/' # 备案链接
  text: '浙ICP备88888888' # 备案信息
# 公安备案信息尾部显示
gongan:
  enable: true
  img: /images/beian.png #公安备案图片
  url: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=01234567890123" #公安备案链接
  text: "浙公网安备01234567890123号" #公安备案信息

# 友情链接
friends_link:
  Ayer主题: #网站名称
    #网站地址
    url: https://github.com/Shen-Yu/hexo-theme-ayer
    #网站图片(可忽略不写)
    img: /images/ayer.png
  GitHub:
    url: https://github.com/Shen-Yu
    img: https://i.loli.net/2020/09/07/indb4PRYDA98EkN.png
  码云:
    url: https://gitee.com/shen-yu
    img: https://i.loli.net/2020/09/07/K3AqO7h6krQFlRX.png
  Hexo官网:
    url: https://hexo.io
    img: https://i.loli.net/2020/09/07/UYGzjo7h68CRWny.png
  Hexo图表插件:
    url: https://github.com/Shen-Yu/hexo-tag-chart
    img: https://i.loli.net/2020/09/07/GIXBYE5SoylhR1r.png

# 评论：1、Valine(推荐)；2、Gitalk

# 1、Valine[一款快速、简洁且高效的无后端评论系统](https://github.com/xCss/Valine)
# 启用Valine必须先创建leancloud应用， 注册账号后获取 id|key 填入即可
leancloud:  
  enable: true
  app_id: #
  app_key: #
# Valine配置(如果有些文章你想关闭评论，请在文章对应的md文件里设置no_valine:true)
valine:
  enable: true # 是否启用
  avatar: monsterid # 头像样式(https://valine.js.org/avatar.html)
  placeholder: 给我的文章加点评论吧~ # placeholder

# 2、Gitalk(https://github.com/gitalk/gitalk)
gitalk:
  enable: false # true
  clientID: # GitHub Application Client ID
  clientSecret: # Client Secret
  repo: # Repository name
  owner: # GitHub ID
  admin: # GitHub ID
```


### 插件(必需)

+ [hexo-generator-searchdb](https://github.com/theme-next/hexo-generator-searchdb) 用于搜索
	
  ```bash
  npm install hexo-generator-searchdb --save
  ```
  然后将以下配置复制到你 Hexo 博客目录下的 `_config.yml` 里（注意不是 ayer 目录下的）:
  
  ```yaml
  # hexo-generator-searchdb
  search:
    path: search.xml
    field: post
    format: html
  ```

+ [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 用于生成 RSS 订阅

  ```bash
  npm install hexo-generator-feed --save
  ```
  
  然后将以下配置复制到你 Hexo 博客目录下的 `_config.yml` 里（注意不是 ayer 目录下的）:
  
  ```yaml
  feed:
      type: atom
      path: atom.xml
      limit: 20
      hub:
      content:
      content_limit: 140
      content_limit_delim: ' '
      order_by: -date	
  ```

### 插件(可选)

+ [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top) 用于文章置顶

+ [hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt/blob/master/ReadMe.zh.md) 用于文章加密

+ [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md) 用于播放音乐

+ [hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer) 用于播放视频

+ [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md) 二次元看板娘

更多插件请见 [hexo插件市场](https://hexo.io/plugins/)

### 分类
``` bash
hexo new page categories
```
然后将以下复制到 `/source/categories/index.md` 文件
``` md
---
title: categories
type: "categories"
layout: "categories"
---
```

### 标签
``` bash
hexo new page tags
```
配置同分类一样

### 友情链接
``` bash
hexo new page friends
```
然后将以下复制到 `/source/friends/index.md` 文件
``` md
---
title: friends
type: friends
layout: "friends"
---
```
然后在 ayer 主题目录下的 `_config.yml` 中自定义 `friends_link` 配置项即可

### 相册
``` bash
hexo new page photos
```
然后将以下复制到 `/source/photos/index.md` 文件，`img_url` 替换成图片路径，`caption` 替换成图片名称

``` md
---
title: Gallery

albums: [
        ["img_url","img_caption"],
        ["img_url","img_caption"]
        ]
---
```

### 文章目录

用 Tocbot 解析文章标题并生成目录

+ 将以下配置复制到你 ayer 主题目录下的 `_config.yml` 里：

``` bash
# Toc
toc: true
```
+ 当然你可能并不想所有文章都生成悬浮目录，你可以在文章顶部的配置中加一行来进行关闭：

``` md
---
no_toc: true
---
```

---

## 常见问题

### 一.本地图片引用了却无法显示

> 插入图片的两种方法：
1. 引用图床
2. 引用本地图片。为了防止路径出错，建议使用图床。

#### 1.图床
推荐使用：[SM.MS](https://sm.ms/)，[聚合图床](https://www.superbed.cn/)

#### 2.本地图片
参照 [Hexo 文档](https://hexo.io/zh-cn/docs/asset-folders)，然后用这种方式引用图片：
``` md
{% asset_img image.jpg [title] %}
```

如果还是无法显示，请尝试在文章里用 html 的 img 标签来引用本地图片。


### 二.可以启动但是样式变形了

这很可能是因为你把博客部署到了服务器子目录，导致静态资源加载的路径不对，在此强烈建议你部署到根目录，Github 和码云都支持根目录部署，只要你把仓库名搞成和用户名一样就行了。

### 三.点击侧边栏页面无法显示

原因：ayer 主题目录下的 `config.yml` 里 menu 属性的路径不对，这需要你根据页面路径手动配置。

以我的博客为例：

```yaml
menu:
  主页: /
  归档: /archives
  分类: /categories
  标签: /tags
  旅行: /tags/旅行/
  摄影: http://shenyu-vip.lofter.com
  关于我: /2019/about
```

上面的 `归档/archives` 是固定的，你不需要修改，`标签`和`分类`都需要手动创建目录，`旅行`实际上就是一个标签页，当你在文章头部设置tags属性后就会自动生成，`摄影`是一个站外的绝对路径，`关于我`实际上就是一个正常的文章页。好了，现在一个侧边栏导航就已经配置好了。

### 四.为什么修改了配置却没有效果

建议每次生成站点或部署之前都用 `hexo clean` 命令清理一下缓存，请使用 Ctrl + F5 清除缓存并刷新页面。

### 五.怎么修改大标题和站点信息

参考 [Hexo 文档](https://hexo.io/zh-cn/docs/configuration)

站点配置文件 `_config.yml` 是 Hexo 站点根目录下的主配置文件（还不知道是哪里的，自己搜索），注意：别和 `ayer` 主题目录下的 `_config.yml` 搞混了。

修改网站各种资料，例如标题、副标题和邮箱等个人资料，请修改 Hexo 博客目录下的 `_config.yml`

以我的博客为例：
![](@img/2/2-19/5.jpg)

### 六.怎么添加百度或谷歌统计

#### 百度统计

参考这里：[百度统计代码介绍](https://tongji.baidu.com/web/help/article?id=174&type=0&castk=LTE%3D)

在 ayer 的 config 配置里的 `baidu_analytics` 填上百度统计代码中的 `hm.js?` 后面那一串东西

#### 谷歌统计

参考这里：[Get started with Google Analytics](https://support.google.com/analytics/answer/1008015?hl=en)

在 ayer 的 config 配置里的 `google_analytics` 填上谷歌统计代码的跟踪 ID，即 UA 值(包含 UA)

### 七.怎么查看文章的访问量

在 ayer 的 config 配置里有 `busuanzi` 选项，默认设置为 `enable:true`，就开启了站点访问量的统计，站点尾部左下角的 `PV` 代表了当前页的访问次数，`UV` 代表了当前站点的访问人数。注意：不蒜子统计是根据当前域名来统计的，你在本地启动的时候由于是 localhost，所以数字会很大，部署到线上之后就会根据域名重新统计。

### 八.网易云音乐无法播放

这是由于网易云音乐对部分歌曲做了版权限制，你可以多换几首试试，配置文件里的默认歌曲 `潮鳴り` 是可以播放的。如果你动手能力强，也可以试试音乐播放插件 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md)，配合`MetingJS`可以支持对于 QQ音乐、网易云、虾米、酷狗、百度等平台的音乐播放。

### 九.分享链接无法打开

你需要在 Hexo 博客目录下的 `_config.yml` 文件中把 url 配置成部署后的域名。

### 十.怎么让搜索引擎收录站点

参考：[Hexo站点SEO优化技巧](https://shen-yu.gitee.io/2020/hexo-seo/)
