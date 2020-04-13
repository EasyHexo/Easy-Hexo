# hexo-theme-phantom

hexo-theme-phantom 是一个面向摄影/设计作品为主导的响应式 Hexo 主题。[示例网站](http://www.codeblocq.com/assets/projects/hexo-theme-phantom/)。

<!-- TODO: Add Screenshot -->

**目录**：

[[toc]]

## Features

- Disqus 和 Facebook 的评论系统
- 谷歌分析
- 文章和页面的封面图片 
- 支持标签 
- 响应式图像
- 图片库(展示)
- 社交帐户配置 
- 支持分页 

## 使用的外部库

- [FeatherLight.js](http://noelboss.github.io/featherlight/) 
- [jQuery](https://jquery.com/)
- [Skel](https://github.com/n33/skel)

## 下载安装

### 1. 需要 SCSS 支持

Phantom 使用 SCSS 作为 CSS 预处理器。hexo 默认不支持 SCSS，所以 `hexo-renderer-scss` 是必需的。

用以下命令安装:

```sh
$ npm install --save hexo-renderer-scss
```
### 2. 安装主题

使用下面的命令安装:

```sh
$ git clone https://github.com/klugjo/hexo-theme-phantom themes/phantom
```

把博客根目录的 `_config.yml` 中的 `theme` 项改成 `phantom`。

```yaml
# Extensions
## Plugins: http://hexo.io/plugins/
## Themes: http://hexo.io/themes/
theme: phantom
```

## 主题配置

主题的全局配置在：`/themes/hexo-theme-phantom/_config.yml`。

:::warning 注意
下面的配置有些是在 **主题** 的 `_config.yml` 进行配置，有些是在 **博客根目录** 的 `_config.yml` 进行配置，请区分。
:::

### 1. Menu 设置

menu 在主题的 `_config.yml` 中配置

![menu](@img/2/2-17/1.png)

```yaml
# Header
menu:
  Home: /
  Archives: /archives
  About: /about.html
```

其中 `key` 是名称，`value` 是页面路径

### 2. 博客 Logo 图片路径

博客 logo (标题旁) 也是在**博客根目录**的 `_config.yml` 配置

![logo](@img/2/2-17/2.png)

```yaml
# Logo Image Source
logo_src: /images/logo.svg
```

### 3. 主要的副标题

大的副标题  (logo 旁的文字) 在**主题**的 `_config.yml` 中配置，支持 HTML 语法

![main subtitle](@img/2/2-17/3.png)

```yaml
# Theme Main Subtitle
subtitle_main: This is Phantom, a free, fully responsive site<br />template designed by <a href="http://html5up.net">HTML5 UP</a>.
```

### 4. 第二个副标题

第二个标题 (logo 下面的较小字体) 在主题的 `_config.yml` 中配置

![second subtitle](@img/2/2-17/4.png)

```yaml
# Theme Secondary subtitle
susbtitle_secondary: Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod.
```

### 5. 页脚文字

页脚的一段文字在主题配置文件 `_config.yml` 中配置：

```yaml
# Footer About Section
about_footer: This theme was initially developed by HTML5 Templates and adapted for Hexo by Jonathan Klughertz.
```

### 6. 默认标题

默认标题 (当没有标题指定时使用) 在主题配置文件 `_config.yml` 中配置：

```yaml
# Default post title
default_post_title: Untitled
```

### 7. 默认主页封面图像

您可以为（主页）上的文章指定默认缩略图。如果您忘记在文章的开头指定图像，则将使用此图像。

```yaml
# Default post cover index page
default_cover_index: "http://placehold.it/450x450"
```

### 8. 默认文章页封面图片

您可以在文章页面（详细信息页面）上为文章/页面指定默认缩略图。如果您忘记在文章的开头指定图像，则将使用此图像。如果您未指定默认值并且未在文章中指定图片，则不会显示图片

```yaml
# Default post cover index page
default_cover_detail: "http://placehold.it/1300x500"
```

### 9. 显示日期

默认情况下，Phantom 不显示文章和页面的日期。您可以根据需要将此配置设置为 `true`

```yaml
# Show Dates for posts and pages
show_dates:
```

### 10. 评论

评论配置在 `_config.yml` 中指定. 如果同时指定 `disqus_shortname` 和 `facebook.appid`，则每个文章将有 2 套评论系统。因此，你只需要选择一个。

```yaml
# Comments. Choose one by filling up the information
comments:
  # Disqus comments
  disqus_shortname: klugjotest
  # Facebook comments
  facebook:
    appid: 123456789012345
    comment_count: 5
    comment_colorscheme: light
```

### 11. 谷歌分析

Google Analytics（分析）跟踪ID在主题的`_config.yml`中进行配置。

```yml
# Google Analytics Tracking ID
google_analytics:
```

### 12. 社交账号

在主题的`_config.yml`中设置指向社交页面的链接。链接在页脚。

```yaml
# Social Accounts
twitter_url: 
facebook_url: https://www.facebook.com/
instagram_url: 
dribble_url: https://dribbble.com/pixelhint
github_url: 
googleplus_url: https://plus.google.com/+Pixelhint/posts
behance_url: https://www.behance.net/
fivehundredpx_url: 
email_url: 
rss_url: 
```

## （五）发布自定义配置

对于每个文章，您都可以在[最前面](https://hexo.io/docs/front-matter.html)指定其他信息

### 1. 文章副标题

用 `subtitle` 指定将显示在主页标题下面的文字。

```yaml
subtitle: Lorem Ipsum
```

### 2. 文章的索引缩略图

使用`cover_index`指定将用于主页上的张贴图片

例:

```yaml
cover_index: /assets/work1.jpg
```

### 3. 文章的详细缩略图

使用`cover_detail`指定将被用于该讯息的详细信息页面上张贴图片

```yaml
cover_detail: /assets/hero_image.jpg
```

## 创作者

该主题由 [HTML5 Up](http://html5up.net/phantom/) 创建，并由 [Jonathan Klughertz](http://www.codeblocq.com/) 改编到 [Hexo](http://www.codeblocq.com/)。

## Bugs

如果您有问题，功能要求或需要我解决的错误，请[单击此处](https://github.com/klugjo/hexo-theme-phantom/issues/new)提出问题。

