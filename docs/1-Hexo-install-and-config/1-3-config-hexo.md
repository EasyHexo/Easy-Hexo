---
title: 配置 Hexo
---
# 配置 Hexo

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-ChungZH-43CD80.svg?longCache=true&style=flat-square)](https://github.com/chungzh)

## 建立网站

安装好 Hexo 后即可建立你的网站。

首先建立一个文件夹。

```bash
mkdir <your_blog_name>  # 建立你的网站根目录，名字可以自己修改
```

然后往这个文件夹里安装 Hexo。

```bash
hexo init <your_blog_name>
```

这样就建立好网站了！

## 配置 Hexo

没错，就是在 Hexo 根目录 `_config.yml` 这个文件里配置！

:::warning 警告
在 YAML 语法中，冒号后面必须要有一个空格才能继续写下去。
:::

### 网站

```yaml
# Site
title:            
subtitle: 
description: 
keywords:
author: 
language: 
timezone: 
```

| 参数          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `title`       | 网站标题                                                     |
| `subtitle`    | 网站副标题                                                   |
| `description` | 网站描述                                                     |
| `keywords`    | 网站关键词                                                   |
| `author`      | 作者名字                                                     |
| `language`    | 网站使用的语言                                               |
| `timezone`    | 网站时区：详见[时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) |

### URL

```yaml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: 
root: 
permalink: :year/:month/:day/:title/
permalink_defaults:
```

| 参数                 | 描述                     |
| -------------------- | ------------------------ |
| `url`                | 网址                     |
| `root`               | 网站根目录               |
| `permalink`          | 文章的永久链接格式       |
| `permalink_defaults` | 永久链接中各部分的默认值 |

:::tip 提醒

如果你的网站在子目录中，如：`https://yoursite.com/blog` ，就把你的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。

:::

### 目录

```yaml
# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render: README.md
```

| 参数           | 描述                |
| -------------- | ------------------- |
| `source_dir`   | 资源文件夹          |
| `public_dir`   | 公共文件夹          |
| `tag_dir`      | 标签文件夹          |
| `archive_dir`  | 归档文件夹          |
| `category_dir` | 分类文件夹          |
| `code_dir`     | Include code 文件夹 |
| `i18n_dir`     | 国际化文件夹        |
| `skip_render`  | 跳过文件的渲染      |

:::tip 提醒

一般情况下，这部分是不需要修改的。

:::

### 文章

```yaml
# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
post_asset_folder: true
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:
```

| 参数                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| `new_post_name`     | 新文章的文件名称                                             |
| `default_layout`    | 预设布局                                                     |
| `auto_spacing`      | 在中文和英文之间加入空格                                     |
| `titlecase`         | 把标题转换为 title case                                      |
| `external_link`     | 在新标签中打开链接                                           |
| `filename_case`     | 把文件名称转换为 (1) 小写或 (2) 大写                         |
| `render_drafts`     | 显示草稿                                                     |
| `post_asset_folder` | 启动 [Asset 文件夹](https://hexo.io/zh-cn/docs/asset-folders) |
| `relative_link`     | 把链接改为与根目录的相对位址                                 |
| `future`            | 显示未来的文章                                               |
| `highlight`         | 代码块的设置                                                 |

### 分类 & 标签

```yaml
# Category & Tag
default_category: uncategorized
category_map:
tag_map:
```

| 参数               | 描述     |
| ------------------ | -------- |
| `default_category` | 默认分类 |
| `category_map`     | 分类别名 |
| `tag_map`          | 标签别名 |

### 日期 / 时间格式

```yaml
# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss
```

| 参数          | 描述     |
| ------------- | -------- |
| `date_format` | 日期格式 |
| `time_format` | 时间格式 |

:::tip 提醒

Hexo 使用 [Moment.js](http://momentjs.com/) 。

:::

## 分页

```yaml
# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page
```

| 参数             | 描述                                |
| ---------------- | ----------------------------------- |
| `per_page`       | 每页显示的文章量 (0 = 关闭分页功能) |
| `pagination_dir` | 分页目录                            |

## 扩展

```yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: 
```

| 参数    | 描述                                |
| ------- | ----------------------------------- |
| `theme` | 当前主题名称。值为`false`时禁用主题 |

### 部署

```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: 
  repo: 
```

:::tip 提醒

关于部署，我们将在下一篇文章讲。

:::

## Hexo 命令详解

为了让大家更方便地使用 Hexo ，这里让大家学习一下 Hexo 的一些在终端中使用的命令。

### `hexo init [folder]`

这个命令是 Hexo 初始化命令。`[folder]` 表示你要初始化的文件夹。如果你要初始化本地，直接 `hexo init .` 。

### `hexo new [layout] <title>`

这个命令是新建文章或页面用的命令。其中 `[layout]` 表示他的模板（即页面或者文章），`<title>` 表示标题。

用法：
1. `hexo new post 001` ，表示新建了一个标题为 `001` 的文章。
2. `hexo new page 001` ，表示新建了一个标题为 `001` 的页面。

如果你不想在终端中新建文章或页面，可以直接在 `博客根目录/source/_post/` 目录下创建 Markdown 文件写**文章**。或者在 `博客根目录/source/` 目录下创建一个文件夹，然后在新文件夹里创建 `index.md` 写**页面**即可。

:::tip 提醒

当你新建页面后，页面的链接就是你页面所在的文件夹的名字。

例如：我在 `博客根目录/source/` 下新建了一个名为 `test` 的文件夹，然后在 `test` 文件夹下写 Markdown 文件，那么这个页面的链接就是 `网址/test`。

:::

### `hexo server`

当你要在本地查看网站的时候，就可以用这个命令。

默认在 `http://localhost:8080/` 这里，可能会不同，注意提示信息即可。

:::tip 提醒

如果你想要换端口号（上面的 `8080` 就是端口号），可以在终端里输入 `hexo s -p 端口号`。

:::

### `hexo generate`

这个命令是生成网站静态文件的时候用的，生成后网页将会放在根目录下面的 `public` 文件夹里。

### `hexo deploy`

这个命令用来部署网站，使用此命令将会把生成好的页面（即 `public` 文件夹里的内容）部署到指定的地方上。

### `hexo clean`

这个命令用来清空 `public` 文件夹。

### `hexo version`

这个命令用来输出你所使用的 Hexo 目前的版本号。

## 视频

<dplayer src="https://dl.sm9.top/Video/EasyHexo/配置.mp4" danmaku-id="392996DE0ABBA502BF97AED350AD3E2B" subtitle="https://dl.sm9.top/Video/EasyHexo/配置.vtt" :cross-origin="true" />
