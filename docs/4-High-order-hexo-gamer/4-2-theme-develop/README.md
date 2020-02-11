---
title: 编写自己的 Hexo 主题
---

# 编写自己的 Hexo 主题 <Badge text="@STAUNCHKAI"/> <Badge text="Finish"/>

## 前言

开始使用 Hexo 时，使用的都是其他大佬做好的主题，时间久了就产生了不如意的地方，要么是功能太过繁杂自己用不到，要么就是自己想要的东西主题上没有，于是乎，我有了一个自己写主题的想法，便开始接触学习前端，到现在，我的 Hexo 博客网站，用的都是自己写的主题。[https://staunchkai.com](https://staunchkai.com)

~~这篇文章应该在 18 年就出现的，由于懒癌晚期拖到了现在~~。

> 在我制作主题的过程中，参考了很多大佬写的主题，例如：[NexT](https://github.com/theme-next/hexo-theme-next)、[yilia](https://github.com/litten/hexo-theme-yilia)、[icarus](https://github.com/ppoffice/hexo-theme-icarus) 等等，在这里表示感谢。

在正式开始编写自己的主题之前，希望你多少具备点以下知识：

- 前端知识：包含 HTML、CSS、JavaScript（这是一切的前提，不用多熟练，可以一边写一边练）
- 一点基础的编程语法（至少知道什么是 `for` 、`if`）
- 会查看资料，包含但不限于官方文档、第三方文档
- 出现问题会主动去寻找解决方法，推荐 Google
- 模板引擎和预处理（这两个我是一边写一边学的）

:::tip 提醒
编写本文我不想重复造太多轮子，大多属于小坑提醒之类的。
:::

## 预备知识

### 模板引擎

Hexo 支持主流的模板引擎，如：`EJS`、`Jade`、`Swing` 等，**本文我使用的是 EJS**，可查看 [文档](https://ejs.bootcss.com/)。

Hexo 的页面都是通过模板引擎渲染出来的页面，它可以实现一些代码的复用，若是采用一般的 HTML，则会造成很大的工作量，非常不方便，因此需要事先了解和学习一下。

### CSS 预处理

与模板引擎一样，CSS 预处理能够更方便地写 CSS 样式，Hexo 中也支持大量的预处理，如：`sass`、`Stylus`、`Less` 等，**本文我是用的是 Stylus**，可查看 [文档](http://stylus-lang.com)。

### Hexo 官方文档

可到 [Hexo](https://hexo.io/zh-cn/docs/) 查看其文档，里面有很多用模板引擎用得到的变量以及辅助函数。

## 主题结构

Hexo 主题结构通常如下所示：

```
theme folder
├── languages	// 多语言文件夹
├── layout		// 页面文件
├── source		// 资源文件
└── _config.yml	// 主题配置文件
```

`languages` 文件夹放有一个或多个语言文件。

`layout` 文件夹下面用于存放页面文件，通常第一层有 `Index 首页`、`Archive 归档页`、`Tag 标签页`、`Category 分类页`、`Post 文章页`、`Page 页面详情页`、`layout 布局`，一般还会创建一个公共页面的文件夹，该文件夹用于放置一个页面的部分内容，用于复用。

`source` 文件夹用于放一些资源文件，例如：`字体`、`CSS`、`JS`、`图片` 等，也会根据他们的文件类型进行再次分类，图片放到图片的文件夹，JS 放到 JS 的文件夹。

以上内容可以手动自建，也可以使用 [generator-hexo-theme](https://github.com/tcrowe/generator-hexo-theme) 来生成主题结构。

## 注意事项

我们在编写主题的时候，都是一边写一边就要看到效果，所以需要使用 `hexo s` 命令在本地运行，更改文件刷新页面就能看到效果，嫌弃麻烦的可使用 [hexo-browsersync](https://github.com/hexojs/hexo-browsersync) 插件，当修改主题文件保存后，浏览器将自动进行刷新。

在使用 `hexo s` 之前要先 `hexo g`，**修改主题配置文件时，不需要重新构建文件，修改根目录配置文件时，需要重新构建（`hexo g`）**。

## 页面编写

> 编写推荐使用 [VS Code](https://code.visualstudio.com/) 编辑器并安装 ejs、Stylus 插件。

先从 `layout.ejs` 文件开始，该文件是布局文件，其他页面都按照其来进行渲染，编写时遵循 [HTML5 规范](https://www.runoob.com/html/html5-syntax.html)。

```ejs
<!DOCTYPE html>
<html lang="<%= config.language %>">
<head>
    <%- partial('common/head') %>
</head>
<body>
    <%- partial('common/header') %>
    <div class="wrapper">
        <%- body %>
    </div>
    <%- partial('common/footer') %>
</body>
</html>
```

参考 [官方文档 - 模板](https://hexo.io/zh-cn/docs/templates)。

- `config.language` 表示使用根目录配置文件中 `language` 属性，假设配置文件中该属性填的是 `zh-CN`，则最终渲染成 `<html lang="zh-CN">` 。
- `partial()` 用于引入公共布局，当引用后，每个页面都会存在你引用的这个布局，上面一共引用了三个文件 `head`、`header`、`footer`，三个文件都在 `common` 文件夹下，这时候应该建立该文件夹，并在下面创建对应的三个 ejs 文件。假设 `head.ejs` 中的内容为 `this is head`，最终渲染成如下：（每个页面都会存在此内容）

```html
<head>
    this is head
</head>
```

- `<%- body %>` 表示其他页面内容，例如：`index.ejs`、`archive.ejs` 等，假设 `index.ejs` 内容为 `this is index`，则最终渲染成如下：（因为是写在首页文件中，所以只有首页会存在该内容）

```html
<div class="wrapper">
    this is index
</div>
```

现在我们把其他文件也假设写出来。

|    文件    |  内容  |
| :--------: | :----: |
| index.ejs  | index  |
|  head.ejs  |  head  |
| header.ejs | header |
| footer.ejs | footer |

最终渲染成的 index 为：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    head
</head>
<body>
    header
    <div class="wrapper">
        index
    </div>
    footer
</body>
</html>
```

> 其他页面都是一样的用法，都是在生成在 `<%- body %>` 里面

## 数据使用

Hexo 中存在着三种变量数据：

- **根目录配置文件**：上面提到，该文件内的属性采用 `config.XXX` 来使用，更改此处属性要重新构建才能生效
- **主题配置文件**：和根目录配置文件使用方法一样，不过需要使用 `theme.XXX` 来调用，更改后无需重新构建
- **Hexo 预置**：可查看 [官方文档](https://hexo.io/zh-cn/docs/variables)。

### 配置文件数据

```yml
# 根目录配置文件
title: STAUNCHKAI
subtitle: this is a subtitle

# 主题配置文件
avatar: /images/avatar.png
a
  b: https://staunchkai.com
```

分类页面 `category.ejs` 中内容如下：

```ejs
<div class="category-page">
    <h1><%= config.title %></h1>
    <p><%= config.subtitle %></p>
</div>
<div class="cateogry-page-other">
    <img src="<%= theme.avatar %>">
    <p><%= theme.a.b %></p>
</div>
```

最终渲染结果为：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    head
</head>
<body>
    header
    <div class="wrapper">
        <div class="category-page">
            <h1>STAUNCHKAI</h1>
            <p>this is a subtitle</p>
        </div>
        <div class="cateogry-page-other">
            <img src="/images/avatar.png">
            <p>https://staunchkai.com</p>
        </div>
    </div>
    footer
</body>
</html>
```

### Hexo 预置数据

`post.ejs` 文件内容如下：

```ejs
<div class="post">
    <h1><%= page.title %></h1>
    <p><%= page.tip %></p>
    <div class="post-content">
        <%- page.content %>
    </div>
</div>
```

一篇 `md` 文章内容如下：

```markdown
---
title: 这是一篇文章
tip: hexo 开发
---
主内容...
```

文章页面最终渲染成：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    head
</head>
<body>
    header
    <div class="wrapper">
        <div class="post">
            <h1>这是一篇文章</h1>
            <p>hexo 开发</p>
            <div class="post-content">
                主内容...
            </div>
        </div>
    </div>
    footer
</body>
</html>
```

### 例子

举个复杂一丢丢的例子，主题配置文件如下：

```yml
social:
  Github:
    url: https://github.com/staunchkai
    icon: icon-github
  Email:
    url: mailto:staunchkai@outlook.com
    icon: icon-email
  Rss:
    url: /atom.xml
    icon: icon-rss
```

要把 social 属性全部读取出来，如下：

```ejs
<div class="social">
    <% for (let i in theme.social) { %>
    	<% let social = theme.socail[i]; %>
    	<a href="<%- url_for(social.url) %>" class="<%= social.icon %>"><%= i %></a>
    <% } %>
</div>
```

最终结果：

```html
<div class="social">
    <a href="https://github.com/staunchkai" class="icon-github">Github</a>
    <a href="mailto:staunchkai@outlook.com" class="icon-email">Email</a>
    <a href="/atom.xml" class="icon-rss">Rss</a>
</div>
```

:::tip 提醒
按照上面的，导航栏菜单也是同样的方法。
:::

## 辅助函数

辅助函数参考 [官方文档](https://hexo.io/zh-cn/docs/helpers)，官方文档最近几版更新的都比较详细，有具体的例子。在这里我挑几个来举例子。

### 条件函数

```ejs
<% if (is_home()) { %>	// 如果是首页
	<%- partial('common/header') %>	// 引入 header 文件
<% } %>

<% if (!is_archive()) { %>	// 如果不是归档页
	<%- partial('common/footer') %>	// 引入 footer 文件
<% } %>
```

### 日期

官方文档中有多个日期函数，但是我觉得使用下面这一个就足够了。

```ejs
官方文档
<%- date(date, [format]) %>

// 示例：
<%- date(Date.now()) %>
// 2013-01-01

<%- date(Date.now(), 'YYYY/M/D') %>
// Jan 1 2013

页面中的日期
<%- date(page.date, 'YYYY/M/D') %>	// 这样就能按照格式获取到页面中的日期
```

### 列表

官方文档中有 `list_categories`、`list_posts` 等函数，都有具体的使用方法，在这里对于列表我写出我常用的方法。

**文章列表：**

对于文章通常有两种，一种是每页只显示 `config.per_page` 数量的文章，带有分页，另外一种是一个页面显示所有文章。

```ejs
// 带分页，使用 Hexo 预置变量 page.posts
<% page.posts.each(function(post) { %>	// 因为这里有个对象 post
	<h1><% post.title %></h1>	// 所以这里才可以用 post.title
	<%- partial('common/post-card') %>	// 这时引用一个文件
<% }); %>

post-card 文件内容为：
<div class="post-card">
    <%= post.title %>	// 这里是会报错的，无法通过
</div>

需要修改引用为：
<%- partial('common/post-card', {post: post}) %>	// 把 post 传过去才可使用

// 若没有传过去，只能使用 page.title，因为 Hexo 中没有预置 post 这个东东，具体可查看文档
```

```ejs
// 一个页面显示所有文章
<% site.posts.each(function(post) { %>
	<h1><% post.title %></h1>
	<%- partial('common/post-card', {post: post}) %>
<% }); %>
```

:::tip 提醒
上面两个，分别使用了官方文档中的两个变量 `site.posts` 和 `page.pots`，请注意官方文档的重要性。
:::

**分类列表：**

```ejs
// 文章分类显示
<% page.categories.each(function(category) { %>		// 这里就没用 post.categories 了，除非是包含在上面的文章列表循环里面才可以用
	<a href="<%- url_for(category.path) %>"><%= category.name %></a>
<% }); %>
```

**标签列表：** 根据分类列表估计能把标签列表给弄出来了

## 其他页面

主题中原有的 `category.ejs` 和 `tag.ejs` 文件都是属于单个对象的页面，啥意思呢？ 假设一篇文章 `Front-matter` 如下：

```markdown
---
categories:
	- 分类1
	- 分类2
tags:
	- tag1
	- tag2
---
```

`category.ejs` 页面只显示单个分类，当你点击分类1跳转过去的页面就是 `category` ，它不会显示出网站中所有的分类。

根据上面的可以看出，目前网站存在两个分类，想要全部显示出来，需要自行创建一个页面，这也就是在我们使用其他主题的时候，为啥什么 `categories`、`tags` 需要在根目录 `srouce` 文件夹下面创一个对应的文件夹，再创建一个 `index.md`  的原因所在，Hexo 里面没有预置这个东西。

`tag.ejs` 也同理。

还记得主题文件夹下面的 `page.ejs` 文件吗？他的作用就是用来创建其他文件的，只要把对应的内容写到这个文件里面就可以了。那我们除了分类、标签页面，还有友情链接、关于页面等等，难道全部写到一个文件里面吗？

显然这种做法是可行的，但是会导致文件内容复杂，将来不好维护，通常都会重新新建对应的一个页面文件，然后再到 `page.ejs` 里面引用即可。

下面做一个 `关于` 页面的例子：

1. **首先在根目录资源文件夹创建一个名为 `about` 的文件夹，再到该文件夹下创建一个 `index.md` 文件，内容为：**

```markdown
---
title: 关于
type: 'about'
---
这是一个关于页面内容
```

2. **到主题文件夹中布局文件夹中创建一个 `about.ejs` 页面，内容为：**

```ejs
<div class="about-page">
    <h1><%= page.title %></h1>
    <p><%- page.content %></p>
</div>
```

3. **在 `page.ejs` 中引入`about.ejs`**

```ejs
<% if (is_page() && page.type === 'about') { %>	// 该文件是其他页面的集合，所以得判断啥情况引入啥文件
	<%- partial('about') %>
<% } %>

// 假设引入友情链接文件
<% if (is_page() && page.type === 'links') { %>	// is_page() 是啥请看官方文档 - 辅助函数
	<%- partial('links') %>
<% } %>
```

4. **最终渲染结果**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    head
</head>
<body>
    header
    <div class="wrapper">
        <div class="about-page">
            <h1>关于</h1>
            <p>这是一个关于页面内容</p>
        </div>
    </div>
    footer
</body>
</html>
```

`categories.ejs` 和 `tags.ejs` 页面是不是就可以使用 `site.categories.each...` 和 `site.tags.each...` 用同样的方式给弄出来了。

## 样式文件

如何在样式代码文件中引用主题文件的参数呢？假设主题配置文件中如下：

```yml
color: '#c5cae9'
```

在 ejs 页面中完全可以使用 `theme.color` 来获取到该属性。

在 Stylus 文件中使用如下：

```stylus
$main-color = hexo-config('color')
// 或
mainColor = unquote(hexo-config("color"))
```

## 结语

目前就想到这些了，纯小白肯定是没法看懂的，本文大多属于小坑小提醒类型，最好具备文首所述的那些知识再来折腾比较好。要是有其他啥问题的可以到 [我的网站](https://staunchkai.com) 评论留言或者找到我的联系方式进行交流，我可能很菜，只是将我写主题时遇到的些磕磕碰碰写出来，万一对谁起作用呢！

广告：

- [Hexo 博客部署到腾讯云服务器全流程](https://staunchkai.com/hexo_deploy.html)

- [Hexo 博客开启 https (SSL 证书)](https://staunchkai.com/hexo_SSL.html)
