---
title: Hexo-theme-material
---
# Hexo-theme-material

State: writing.

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-ffy-800080.svg?longCache=true&style=flat-square)](https://github.com/ffdy)

:::tip
注意，这里介绍的 Material 主题是 1.5.2 的版本，不建议新手使用最新的版本，因为好像有很多 Bug（作者最近失联了）
:::

[Material 主题地址](https://github.com/viosey/hexo-theme-material)

## Material 主题演示

![演示](@img/2/2-5/1.png)

## 下载 Material 主题

在博客根目录打开终端，输入以下命令：

```bash
cd themes
git clone https://github.com/viosey/hexo-theme-material.git material
cd material
```

![i6XOpT.png](@img/2/2-5/2.png)

## 启用 Material 主题

:::tip
这里有两个 `_config.yml` 文件，一个位于博客根目录，另一个位于主题文件夹下，下面分别叫他们`根 _config.yml `文件和`主题 _config.yml `文件。
:::

进入 Material 文件夹，将`_config.template.yml` 重命名为 `_config.yml`
（这个 `_config.yml` 文件是 `主题_config.yml` 文件）

:::tip
建议你将 `_config.template.yml` 文件备份，防止一些不可描述的的问题。
:::

![i6x8mQ.png](@img/2/2-5/3.png)

回到主题根目录，用文本编辑器打开`根_config.yml`文件<br>
找到`language`属性（我用的简体中文）

![icIGE8.png](@img/2/2-5/4.png)

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

![icI0uq.png](@img/2/2-5/5.png)

在最下面找到`theme`属性

![i6zA3V.png](@img/2/2-5/6.png)
![i6Lih8.md.png](@img/2/2-5/7.png)

将后面的字段改为你刚刚改的主题文件夹的名字，比如我的`Material`。

:::tip

在 yml 中，冒号后面必须加一个空格，否则会报错。

:::

OK，Material 主题就正式启用了下面，就是见证奇迹的时候了，有没有一点小激动呢？

回到博客根目录，打开终端，输入：

```brash
$ hexo clean
```
回车

![icPF6P.png](@img/2/2-5/8.png)

完美！！！:tada:

好，再输入：
```brash
$ hexo g
```
回车

![icPQlq.png](@img/2/2-5/9.png)

完全OK！！！:tada:

输入：
```brash
$ hexo s
```
回车

![icPqhj.png](@img/2/2-5/10.png)

打开浏览器输入`http://localhost:4000`，即可看见你博客的样子。

![icPW9A.png](@img/2/2-5/11.png)
![icP2hd.png](@img/2/2-5/12.png)

点篇文章试试，如果没问题，那么恭喜你！
:tada: :tada: :tada: :tada:

## Material 主题配置

附录有原版`主题 _config.yml `代码，防止出现问题。
回到主题文件夹，打开`主题 _config.yml `文件<br>
看起来是不是又臭又长？不过别担心，下面会详细的讲解他们应该怎样配置

**请多一点耐心和细心**

### 一、基本设置

#### 1、博客的网站图标

```brash
# Head info
head:
    favicon: "/img/favicon.png" #正常网站图标
    high_res_favicon: "/img/favicon.png" #高清图标
    apple_touch_icon: "/img/favicon.png" #IOS主屏按钮图标
```

![ic5c6I.png](@img/2/2-5/13.png)

进入主题文件下的 `source/img` 文件夹，将 `favicon.png` 替换成你的网站图标，名字可以自定义，但必须和主题配置文件中的保持一致，比如我的图标名为 `F.png`：

![ic5bXq.png](@img/2/2-5/14.png)

```brash
    favicon: "/img/F.png" #正常网站图标
    high_res_favicon: "/img/F.png" #高清图标
    apple_touch_icon: "/img/F.png" #IOS主屏按钮图标
```
----
#### 2、优化 SEO
这个设置启用后会在页面的 Head 中生成结构化数据，有助于改善 Google 等搜索引擎的 SEO <br>
如果你在 `hexo g `时出现问题，不妨尝试将其设为 `false`

```brash
    # Enable generate structured-data as JSON+LD for SEO or not.
    #    Set as 'false' if it cause some wrong when `hexo g`.
    structured_data: true #就是这个
```
----
#### 3、跳转链接
```brash
# Jump Links Settings
url:
    rss: #设置生成的 rss 或 atom 链接
    daily_pic: "#" #设置点击 daily_pic 模块时跳转的链接
    logo: "#" #设置点击 logo 时跳转的链接 
```
----
### 二、样式和主题
#### 1、主体的样式
```brash
# Schemes
scheme: Paradox #默认样式
#scheme: Isolation #极简样式
```
默认样式就像上面的演示<br>
极简样式像这样的：

![](@img/2/2-5/15.png)

去除了隐藏侧边栏和文章的随机图片等功能，十分简洁

----

#### 2、标语和板块背景色
```brash
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
#### 3、页面的 Js 效果
```brash
# JS Effect Switches
js_effect:
    fade: true #页面加载时部分模块的渐显效果
    smoothscroll: false #页面平滑滚动特效
```
#### 4、文章摘要字数
```brash
# Reading experience
reading:
    entry_excerpt: 80 #首页文章摘要字数
```
#### 5、文章缩略图
```brash
# Thumbnail Settings
thumbnail:
    purecolor: #这里填入颜色代码,如果文章无缩略图,缩略图区域显示该颜色
    random_amount: 19 #缩略图的数量,如果你要自定义,请改为你的图片数
```
Material 主题提供了 19 张简约图，如果你的文章没有定义缩略图，主题就会从随机图库中随机取一张图<br>如果随机图库中没有图片，那么该区域会显示你设置的颜色<br>如果你也没有设置颜色，则会显示你的主题色

主题默认支持`.png`格式的缩略图，并且只支持`.png`的缩略图，命名格式还必须是`Material-XX.png`<br>
好吧，这看起来好像很坑，但它好在是开源的，可以自己动手修改

进入`themes/Material/layout/_partial`文件夹，找到`Paradox-post_entry-thumbnail.ejs`和`Paradox-post-thumbnail.ejs`两个文件，用文本编辑器打开

![](@img/2/2-5/16.png)

如果你想用其他格式的图片，你可以`Ctrl+f`搜索`.png`， 把如图位置的字段改为你想使用的格式：

`Paradox-post_entry-thumbnail.ejs`文件

![](@img/2/2-5/17.png)

`Paradox-post-thumbnail.ejs`文件

![](@img/2/2-5/18.png)

这种方法只能同时使用同种格式的图片，如果你想用不同格式的图，请自行尝试`if-else`语法，也有很多软件可以批量改格式，比如`格式工厂`

那么现在又有一个问题，我现在有 192 张图,每一张图都要命名成`Material-xx.png`的格式，如果一张一张的重命名，岂不是要累趴下，有没有什么好的方法呢

答案是肯定的，你可以用相关软件，或者写一个批处理

这里介绍一个简单的方法-- Windows 自带的文件重命名策略：
> 选中你想用的 n 张图
> 选择一个重命名，假设你输入了 Material，回车

你会发现这 n 张图的名字变成了`Material (x).png`，x 是 1~n，并且括号前多了一个空格
