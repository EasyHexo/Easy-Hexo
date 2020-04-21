---
title: hexo-theme-archer
---

# hexo-theme-archer <Badge text="@Odeinjul"/>  <Badge text="Finish"/> 

一款简洁美观的 Hexo 主题
![Example](@img/2/2-18/1.png)

## 官方页面
[Wiki](https://github.com/fi3ework/hexo-theme-archer/wiki)
[Demo](http://firework.studio/archer-demo/)
[Documents](https://github.com/fi3ework/hexo-theme-archer/blob/master/docs/develop-guide-zh.md)

## Features
- 多种评论系统支持
- 谷歌分析
- 文章和页面的封面图片 
- 支持标签/分类
- 社交帐户配置 
- 支持分页 

## 下载安装
在 Hexo 博客根目录下执行
```sh
$ npm i hexo-generator-json-content --save && npm i --save hexo-wordcount && git clone https://github.com/fi3ework/hexo-theme-archer.git themes/archer --depth=1
```

把博客根目录的 `_config.yml` 中的 `theme` 项改成 `archer`。

```yaml
# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: archer
```

添加 sidebar 启用支持：
在 Hexo 博客根目录下的 `_config.yml` 中添加以下字段（不是 archer 下的 `_config.yml`）

```yml
jsonContent:
  meta: true
  pages: false
  posts:
    title: true
    date: true
    path: true
    text: false
    raw: false
    content: false
    slug: false
    updated: false
    comments: false
    link: false
    permalink: true
    excerpt: false
    categories: true
    tags: true
```

## 主题配置
主题的全局配置在：`/themes/hexo-theme-phantom/_config.yml`。

:::warning 注意
下面的配置有些是在 **主题** 的 `_config.yml` 进行配置，有些是在 **博客根目录** 的 `_config.yml` 进行配置，请区分。
:::

## 进阶配置
以下主要是关于安装完 hexo-theme-archer 后对其进行的一些魔改，
参考了 [The hexo-theme-archer wiki](https://github.com/fi3ework/hexo-theme-archer/wiki) 。

### 启用 404 页面
 
在 **hexo 的 source 目录**下加入 `404.md` 文件，`layout` 字段必须设为 `404`，例如：
```markdown
---
layout: 404
title: "[404]（引号内为页面标题可更改）"
description: "May the Force be with you :&#41;（引号内为页面内容可更改）"
---
```
---

### 启用 About 页面

* 在 **hexo 目录**下执行
```bash
hexo new page "about"
```
* 在 **hexo 目录**下 `source/about/index.md` 中添加字段 `layout: about`，例如：
```markdown
---
title: 这是自我介绍的题目(此处可更改)
layout: about
---
这是一段自我介绍（此处可更改）
```
* 在**主题目录**下 `_config.yml`中添加以下字段
```yml
about:
  enable: true #是否开启about页面
  image: '/intro/about-page.jpg' #about页面banner处图片地址
```

---

### 启用Latex支持
请参考：https://nathaniel.blog/tutorials/make-hexo-support-math-again/

---
### 启用 RSS 订阅
```bash
npm install hexo-generator-feed --save
```
* 在**主题目录**下 `_config.yml` 的 `social` 字段中添加 `rss: /atom.xml`，侧边栏便会出现 RSS.

---

### 使用随机图片作为 banner
banner 图片可使用 url 作为地址，利用这一点便可使用随机图片的 API 来实现。
在**主题目录**下 `_config.yml` 的 `site_header_image/post_header_image:/_404_image` 字段修改图片地址，便可改变**主页/文章/404 页面**的banner.
API参数页面：https://source.unsplash.com/ ，可以使用随机图片或某用户收藏的图片
建议使用的参数：https://source.unsplash.com/random/2560x863
你也可以使用别的 url 来实现这一效果

---

### 自定义主题颜色
* 修改 `archer\source-src\scss\_variables.scss` 中的 `$feature-color` 的颜色。
* 在 archer 目录下执行 ```npm install```，然后执行 ```npm run build```。

---

### 自定义文章的banner
通过配置每篇文章(即.md文件)的头部的```header_image```字段来修改，如果不填写将采用主题配置中的```post_header_image```字段，如果```post_header_image```字段未填写则采用```site_header_image```字段。
例如：
```markdown
---
title: hexo
date: 2020-02-23 10:29:53
tags:
    - hexo
header_image: /intro/post-bg.jpg
---
```

---

### 自定义文章在首页的摘要
首页的摘要有三种形式，优先级依次递减，高优先级会屏蔽掉低优先级的摘要。

#### 使用 hexo 的 ```<!-- more -->```
在文章中插入 <!-- more --> 分隔符，分隔符之前的会显示在首页

#### 自定义摘要
可以在文章的 meta 中定义 abstract 字段来自定义该文章在首页显示的摘要。
例如：
```markdown
---
title: Tags
date: 2013-12-24 23:29:53
abstract: this is a custom abstract
---
```

#### 默认摘要
默认摘要会截取文章的前 300 个字符，可以在配置中修改。

---

### 设置文章版权信息
修改主题配置文件中的 ```copyright``` 字段开启/关闭：
```yml
copyright:
  enable: true
  # https://creativecommons.org/
  license: '本文采用<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">知识共享署名-非商业性使用 4.0 国际许可协议</a>进行许可'
```
默认显示作者，链接，日期以及版权说明，版权说明可通过 ```copyright.lincese``` 自定义。

```copyright.lincese``` 的值可以是 HTML

当文章版权信息开启时，可通过修改文章的meta关闭这一篇的版权：
```markdown
copyright: false
```
进行单篇文章版权信息的关闭。

---

### 切换代码配色方案
主题现在有两套代码配色：atom-one-dark 及 atom-one-light。
切换方法:
* 修改 archer\source-src\scss\_variables.scss 中的 $code-theme，可以更换为 atom-one-dark 或 atom-one-light。
* 在 archer 目录下执行 npm install，然后执行 npm run build。

---

### 修改字

字体文件在```./themes//archer/source/font```,最简单的方法就是拖入一个字体文件并将它的名字改为你想替换的字体名。

---

## END

***再次感谢 hexo-theme-archer 的 wiki ，确实帮助了我很多**
