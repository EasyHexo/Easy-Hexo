---
title: Hexo-theme-material
---
# Hexo-theme-material

State: writing.

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-ffy-800080.svg?longCache=true&style=flat-square)](https://github.com/ffdy)

::: tip 注意
注意，这里介绍的 Material 主题是 1.5.2 的版本，不建议新手使用最新的版本，因为好像有很多 Bug（作者最近失联了）
:::

[Material 主题地址](https://github.com/viosey/hexo-theme-material)

## Material 主题演示

![演示](@img/2/2-5/1.png)

## 下载 Material 主题

1. 进入 Github，下载 [Material](https://github.com/viosey/hexo-theme-material/releases) 主题 1.5.2 的版本。

2. 将下载下来的主题解压，将解压的文件夹重命名为 `Material`。

3. 将这个文件夹放到你的博客根目录下的 themes 文件夹下。

![2.png](@img/2/2-5/2.png)

## 启用 Material 主题

::: tip 注意
这里有两个 `_config.yml` 文件，一个位于博客根目录，另一个位于主题文件夹下，下面分别叫他们`根 _config.yml `文件和`主题 _config.yml `文件。
:::

进入 Material 文件夹，将 `_config.template.yml` 重命名为 `_config.yml`
（这个 `_config.yml` 文件是 `主题 _config.yml` 文件）

::: tip 注意
建议你将 `_config.template.yml` 文件备份，防止一些不可描述的的问题。
:::

![3.png](@img/2/2-5/3.png)

回到主题根目录，用文本编辑器打开`根_config.yml`文件，找到`language`属性。（我用的简体中文）

![4.png](@img/2/2-5/4.png)

有以下几项可选：
- العَرَبِيََّّة （ar）
- Deutsch（de）
- English（en）
- Español（es）
- Français（fr）
- 日本語（ja）
- Malay（ms）
- Portuguese（Brazil）（pt-BR）
- 简体中文（zh-CN）
- 繁體中文（zh-TW）

分别对应 language 文件下的文件

![5.png](@img/2/2-5/5.png)

在最下面找到 `theme` 属性

![6.png](@img/2/2-5/6.png)
![7.png](@img/2/2-5/7.png)

将后面的字段改为你刚刚改的主题文件夹的名字，比如我的 `Material`。

::: tip 注意

在 yml 中，冒号后面必须加一个空格，否则会报错。

:::

OK，Material 主题就正式启用了下面，就是见证奇迹的时候了，有没有一点小激动呢？

回到博客根目录，打开终端，输入：

```bash
$ hexo clean
```
回车

![8.png](@img/2/2-5/8.png)

完美！！！:tada:

好，再输入：
```bash
$ hexo g
```
回车

![9.png](@img/2/2-5/9.png)

完全 OK！！！:tada:

输入：
```bash
$ hexo s
```
回车

![10.png](@img/2/2-5/10.png)

打开浏览器输入 `http://localhost:4000`，即可看见你博客的样子。

![11.png](@img/2/2-5/11.png)
![12.png](@img/2/2-5/12.png)

点篇文章试试，如果没问题，那么恭喜你！
:tada: :tada: :tada: :tada:

## Material 主题配置

附录有原版`主题 _config.yml `代码，防止出现问题。
回到主题文件夹，打开`主题 _config.yml `文件<br>
看起来是不是又臭又长？不过别担心，下面会详细的讲解他们应该怎样配置

**请多一点耐心和细心**

### 一、基本设置

#### 1、博客的网站图标

```yaml
# Head info
head:
    favicon: "/img/favicon.png" #正常网站图标
    high_res_favicon: "/img/favicon.png" #高清图标
    apple_touch_icon: "/img/favicon.png" #IOS主屏按钮图标
```

![13.png](@img/2/2-5/13.png)

进入主题文件下的 `source/img` 文件夹，将 `favicon.png` 替换成你的网站图标，名字可以自定义，但必须和主题配置文件中的保持一致，比如我的图标名为 `F.png`：

![14.png](@img/2/2-5/14.png)

```yaml
    favicon: "/img/F.png" #正常网站图标
    high_res_favicon: "/img/F.png" #高清图标
    apple_touch_icon: "/img/F.png" #IOS主屏按钮图标
```
----
#### 2、优化 SEO
这个设置启用后会在页面的 Head 中生成结构化数据，有助于改善 Google 等搜索引擎的 SEO 。
如果你在 `hexo g `时出现问题，不妨尝试将其设为 `false`

```yaml
    # Enable generate structured-data as JSON+LD for SEO or not.
    #    Set as 'false' if it cause some wrong when `hexo g`.
    structured_data: true #就是这个
```
----
#### 3、跳转链接

```yaml
# Jump Links Settings
url:
    rss: #设置生成的 rss 或 atom 链接
    daily_pic: "#" #设置点击 daily_pic 模块时跳转的链接
    logo: "#" #设置点击 logo 时跳转的链接 
```
----
### 二、样式和主题
#### 1、主体的样式

```yaml
# Schemes
scheme: Paradox #默认样式
#scheme: Isolation #极简样式
```
默认样式就像上面的演示<br>
极简样式像这样的：

![15.png](@img/2/2-5/15.png)

去除了隐藏侧边栏和文章的随机图片等功能，十分简洁

----

#### 2、标语和板块背景色

```yaml
# UI & UX: slogan, color, effect
uiux:
    slogan: "Hi, nice to meet you" #标语
    theme_color: "#0097A7" #主题主要颜色,博客的大部分地方使用此颜色 
    theme_sub_color: "#00838F" #主题的辅助色
    hyperlink_color: "#00838F" #超链接的颜色
    button_color: "#757575" #按钮颜色,比如菜单按键和回到顶部按键
    android_chrome_color: "#0097A7" #Android上Chrome的地址栏颜色
    nprogress_color: "#29d" #顶部加载进度条颜色
    nprogress_buffer: "800" #精度条的缓冲时间
```

----

#### 3、页面的 Js 效果
```yaml
# JS Effect Switches
js_effect:
    fade: true #页面加载时部分模块的渐显效果
    smoothscroll: false #页面平滑滚动特效
```

----

#### 4、文章摘要字数
```yaml
# Reading experience
reading:
    entry_excerpt: 80 #首页文章摘要字数
```

----

#### 5、文章缩略图
```yaml
# Thumbnail Settings
thumbnail:
    purecolor: #这里填入颜色代码,如果文章无缩略图,缩略图区域显示该颜色
    random_amount: 19 #缩略图的数量,如果你要自定义,请改为你的图片数
```
Material 主题提供了 19 张简约图，如果你的文章没有定义缩略图，主题就会从随机图库中随机取一张图。
如果随机图库中没有图片，那么该区域会显示你设置的颜色。
如果你也没有设置颜色，则会显示你的主题色。

主题默认支持 `.png` 格式的缩略图，并且只支持 `.png` 的缩略图，命名格式还必须是 `Material-XX.png`。
好吧，这看起来好像很坑，但它好在是开源的，可以自己动手修改

进入 `themes/Material/layout/_partial` 文件夹，找到 `Paradox-post_entry-thumbnail.ejs` 和 `Paradox-post-thumbnail.ejs` 两个文件，用文本编辑器打开

![16.png](@img/2/2-5/16.png)

如果你想用其他格式的图片，你可以 `Ctrl+f` 搜索 `.png`， 把如图位置的字段改为你想使用的格式（推荐使用 `.jpg` 格式，比较小，加载较快）：

`Paradox-post_entry-thumbnail.ejs` 文件

![17.png](@img/2/2-5/17.png)

`Paradox-post-thumbnail.ejs` 文件

![18.png](@img/2/2-5/18.png)

这种方法只能同时使用同种格式的图片，如果你想用不同格式的图，请自行尝试 `if-else` 语法，也有很多软件可以批量改格式，比如`格式工厂`

那么现在又有一个问题，我现在有 192 张图,每一张图都要命名成 `Material-xx.png` 的格式，如果一张一张的重命名，岂不是要累趴下，有没有什么好的方法呢

答案是肯定的，你可以用相关软件，或者写一个批处理

这里介绍一个简单的方法-- Windows 自带的文件重命名策略：
> 选中你想用的 n 张图
> 选择一个重命名，假设你输入了 Material，回车

你会发现这 n 张图的名字变成了 `Material (x).jpg`，x 为 1~n，并且括号前多了一个空格

这时我们还要修改一下相关配置，上面的两个文件相同的的位置改为：

`Paradox-post-thumbnail.ejs` 文件

![19.png](@img/2/2-5/19.png)

`Paradox-post_entry-thumbnail.ejs` 文件

![20.png](@img/2/2-5/20.png)

另外`主题 _config.yml` 文件 `img` 字段中改为：

![21.png](@img/2/2-5/21.png)

::: tip 注意
如果你按如上方法命名，箭头所指的空格一定要有。其他的命名方式大体一致。
:::

----

#### 6、各种图片位置
```bash
# Images Settings
img:
    logo: "/img/logo.png" #标志
    avatar: "/img/avatar.png" #头像
    daily_pic: "/img/daily_pic.png" #标语背景
    sidebar_header: "/img/sidebar_header.png" #侧边栏头像背景
    #random_thumbnail: "/img/random/material-" #这里是原来的
    random_thumbnail: "/img/random/material (" #文章随机缩略图
    footer_image: #侧边栏底部图片
        upyun_logo: #以又拍云为例
            link: "https://www.upyun.com/" #点击链接
            src: "/img/upyun_logo.svg" #图标
```
这里所有的图片均放在 `themes/Material/source/img` ，你可以替换它们，并将如上配置相应改变。

文章随机缩略图按上一栏配置

![22.png](@img/2/2-5/22.png)

----

#### 7、字体
```bash
# Custom Fonts
#    family: the font-family which will be used in the theme
#    use: uri of fonts host.
#        Available value: google | baomitu | ustc | custom | catnet
#        - When you set as 'custom', you should fill in the value of 'custom_font_host', which should be a mirror of google fonts.
#        - If you have setup your custom font-family, don't forget to add style tag with @font-face or link.tag with font css
#          to /source/data/head.yml as custom code, to load custom font files.
fonts:
    family: Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
    use: google
    custom_font_host:
```
----
#### 8、文章卡片阴影
```bash
# Card Elevation Level
card_elevation: 2 #请自行改变数值
```
----

### 三、自定义设置
#### 1、站点成立时间
```bash
# Copyright
# Specify the date when the site was setup.
#    For example, if you set it as 2015, then footer will show '© 2015 - 2018'
copyright_since: 2015
```
如果设为 2015，他会显示 `© 2015 - 2018`，如果不设，只会显示当前 `2018` 年

```bash
# Footer Text
# You can specify the text you want to show in footer, HTML tag is supported.
#   For example, you can setup ICP license number as:
#       '<a href="http://www.miitbeian.gov.cn" rel="nofollow">某ICP备xxxxxxxx号-x</a>'
footer_text: <a href="http://www.miitbeian.gov.cn" rel="nofollow">某ICP备xxxxxxxx号-x</a>
```
页底显示的信息格式应与上面的例子一样

![23.png](@img/2/2-5/23.png)

----
#### 2、二维码
```bash
# Qrcode for redirect at other device
#    use: choose which method to generate the qrcode for each posts.
#        Available value: plugin | online
#            - When use "plugin", you need to install the hexo-helper-qrcode.
#            - When use "online", the qrcode will be generated by 'pan.baidu.com' in China.
qrcode:
    enable: false #是否启用
    use: plugin #生成方式，可选的有：plugin | online
```

用于在文章页中显示二维码，扫描二维码即可直接打开文章。

当 use 设置为 plugin 时，你需要安装 `hexo-helper-qrcode` 插件，在博客根目录下打开 Git
```bash
$ npm install hexo-helper-qrcode --save 
```

当 use 设置为 online 时，二维码将会由 `pan.baidu.com` 的 API 生成。

----

#### 3、代码高亮

Material 主题提供了两种代码高亮：prettify | hanabi <br>
启用前你需要吧`根 _config.yml` 文件中的代码高亮关闭，否则会产生冲突
```bash
highlight:
  enable: false #这里改为false
  line_number: false
  auto_detect: false
  tab_replace:
```
`主题 _config.yml` 文件如下：
```bash
# Code highlight
# You can only enable one of them to avoid issues.
# Also you need to disable highlight option in hexo's _config.yml.
#
#    Prettify
#        theme: # Available value in /source/css/prettify/[theme].min.css
prettify:
    enable: false #是否启用
    theme: "github-v2" #高亮主题，各种样式见附录

#    Hanabi (https://github.com/egoist/hanabi)
#        line_number: [true/false] # Show line number for code block
#        includeDefaultColors: [true/false] # Use default hanabi colors
#        customColors: This value accept a string or am array to setting for hanabi colors.
#                    - If `includeDefaultColors` is true, this will append colors to the color pool
#                    - If `includeDefaultColors` is false, this will instead default color pool
hanabi:
    enable: true 
    line_number: true #是否显示行数
    includeDefaultColors: true
    customColors: #可添加多种自定义颜色作为代码高亮主题，但请遵循 Yaml 的规范填写配置。
```
hanabi 默认效果（ C++ 为例）：

![24.png](@img/2/2-5/24.png)

:::tip 注意
两种高亮只能开启一个，prettify 样式见附录
:::

----

#### 4、版权声明
你可以在每篇文章的结尾添加你的版权说明，支持 Html 标签。License 以粗体显示，默认为空。 比如，你可这样设定 CC License。

```bash
# Post License
# You can specify the text you want to show in the end of your posts and pages, HTML tag is supported.
#   For example, you can setup a CC license as:
#       'This blog is under a <a href="/creativecommons.html" target="_blank">CC BY-NC-SA 3.0 Unported License</a>'
# You can also use Front-Matter `license` to override this setting.
license: 'This blog is under a <a href="/creativecommons.html" target="_blank">CC BY-NC-SA 3.0 Unported License</a>'
```
你也可以在页面的 Front-Matter 中为不同文章添加不同的 License。

![25.png](@img/2/2-5/25.png)

----

### 四、菜单设置
#### 1、行号，SNS 
行号
```bash
# TOC Button

toc:
#   use: choose whether the line_number of toc will show or not.
#       Available value of "linenumber": true | false
    linenumber: true
```
SNS

填上你的个人链接，如果不想显示，留空或前面加 `#` 号
```bash
# SNS Menu
sns:
    email: youremail@email.com #这个将显示在侧边栏头像下面
    facebook: "https://www.facebook.com/facebook"
    twitter: "https://twitter.com/twitter"
    googleplus: "https://www.google.com/"
    weibo:
    instagram:
    tumblr:
    github:
    linkedin:
    zhihu:
    bilibili:
    telegram:
    v2ex:
```

![26.png](@img/2/2-5/26.png)

----
#### 2、分享菜单
如果为 `false` 将不显示在分享菜单
```bash
# SNS Share Switch
sns_share:
    twitter: true
    facebook: true
    googleplus: true
    weibo: true
    linkedin: false
    qq: false
    telegram: false
```

![27.png](@img/2/2-5/27.png)

----

#### 3、侧边栏设置
```bash
# Sidebar Customize
sidebar:
    dropdown:
        Email Me:
            link: "mailto: scaryffy@gmail.com" #个人邮箱地址
            icon: email
    homepage: #主页
        use: true #是否启用
        icon: home #图标
        divider: false #下方是否添加分割线
    archives: #归档
        use: true
        icon: inbox
        divider: false
    categories: #分类
        use: false
        icon: chrome_reader_mode
        divider: false
    pages: #其他独立页面
        #About: #关于
            #link: "/about"
            #icon: person
            #divider: false
    article_num: #是否显示文章总数
        use: false
        divider: false
    footer: #侧边栏页脚显示作者及主题信息
        divider: true
        theme: true
        support: false
        feedback: false
        material: false
```
图标可以到[这里](https://material.io/icons/)选择你喜欢的替换

### 五、独立界面
#### 1、友情链接
侧边栏添加`友链`：
```bash
    pages: #其他独立页面
        #####
        友链:
            link: "/links"
            icon: face
            divider: false
        #####
        About: #关于
            link: "/about"
            icon: person
            divider: false
```
回到博客根目录，打开终端，输入：
```bash
$ hexo new page "links"
```
进入博客根目录 `source/links` 文件夹，打开 `index.md` 文件，改为：
```bash
---
title: links
date: 2018-10-23 08:52:56
layout: links
---
```
同样在根目录下 `source` 文件下创建 `_data` 文件夹（不可使用其他名字），在 `_data` 下创建 `links.yml` 文件，打开修改，格式为：
```bash
Name: # Name 替换为名字
    link: http://example.com #链接
    avatar: http://example.com/avatar.png #头像
    descr: "这是一个描述" #描述
```
例子：
```bash
Condor2048:
    link: https://skylayer.pro/
    avatar: http://qlogo3.store.qq.com/qzone/1262500438/1262500438/50?1538278027
    descr: "大大大大大大佬"
```
添加多个友情链接，只需要根据上面的格式重复填写即可。

![28.png](@img/2/2-5/28.png)

----

#### 2、标签云
侧边栏添加`标签云`：
```bash
    pages: #其他独立页面
        友链:
            link: "/links"
            icon: face
            divider: false
        #####
        标签云:
            link: "/tags"
            icon: cloud_circle
            divider: false
        #####
        About: #关于
            link: "/about"
            icon: person
            divider: false
```
回到博客根目录，打开终端，输入：
```bash
$ hexo new page "tags"
```
进入博客根目录 `source/tags` 文件夹，打开 `index.md` 文件，改为：
```bash
---
title: tags
date: 2018-10-23 08:52:56
layout: tags
---
```

![29.png](@img/2/2-5/29.png)

#### 3、图库
侧边栏添加`图库`：
```bash
    pages: #其他独立页面
        友链:
            link: "/links"
            icon: face
            divider: false
        标签云:
            link: "/tags"
            icon: cloud_circle
            divider: false
        #####
        图库:
            link: "/gallery"
            icon: cloud_circle
            divider: false
        #####
        About: #关于
            link: "/about"
            icon: person
            divider: false
```
回到博客根目录，打开终端，输入：
```bash
$ hexo new page "gallery"
```
进入博客根目录 `source/gallery` 文件夹，打开 `index.md` 文件，改为：
```bash
---
title: gallery
date: 2018-10-23 08:52:56
layout: gallery
---
```
同样在根目录下 `source/_data` 文件下创建 `gallery.yml` 文件，打开修改，格式为：
```bash
Name: #名字
    full_link: http://example.com/full-image.png #链接
    thumb_link: http://example.com/thumb-image.png #链接
    descr: "这是一个描述" #描述
```
添加多张图片，只需要根据上面的格式重复填写即可。