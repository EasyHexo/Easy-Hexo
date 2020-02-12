---
title: 配置 Hexo
---
# 配置 Hexo <Badge text="ChungZH"/> <Badge text="Finish"/>

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

::: danger
此部分内容可能过期，请见 [Hexo 官方文档](https://hexo.io/zh-cn/docs/configuration)。
:::

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
pretty_urls:
  trailiing_index: true
```

| 参数                          | 描述                            |
| ----------------------------- | ------------------------------- |
| `url`                         | 网址                            |
| `root`                        | 网站根目录                      |
| `permalink`                   | 文章的永久链接格式              |
| `permalink_defaults`          | 永久链接中各部分的默认值        |
| `pretty_urls`                 | 改写 `permalink` 的值来美化 URL |
| `pretty_urls.trailing_index	` | 是否在永久链接中保留尾部的 `index.html`，`false` 时去除 |

:::tip 提醒

如果你的网站在子目录中，如：`https://yoursite.com/blog` ，就把你的 `url` 设为 `http://yoursite.com/blog` 并把 `root` 设为 `/blog/`。

:::

例如：

```yaml
# 比如，一个页面的永久链接是 http://example.com/foo/bar/index.html
pretty_urls:
  trailing_index: false
# 此时页面的永久链接会变为 http://example.com/foo/bar/
```

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
| `skip_render`  | 跳过文件的渲染。匹配到的文件将直接复制到 `public` 目录中。您可使用 [glob](https://github.com/micromatch/micromatch#extended-globbing) 表达式来匹配路径。 |

:::tip 提醒

一般情况下，这部分是不需要修改的。

:::

例如：

```yaml
skip_render: "mypage/**/*"
# 将会直接将 `source/mypage/index.html` 和 `source/mypage/code.js` 不做改动地输出到 'public' 目录
# 你也可以用这种方法来跳过对指定文章文件的渲染
skip_render: "_posts/test-post.md"
# 这将会忽略对 'test-post.md' 的渲染
```

### 文章

```yaml
# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
auto_spacing: false
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
  enable: true
  field: site
  exclude: []
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

| 参数                   | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `new_post_name`        | 新文章的文件名称                                             |
| `default_layout`       | 预设布局                                                     |
| `auto_spacing`         | 在中文和英文之间加入空格                                     |
| `titlecase`            | 把标题转换为 title case                                      |
| `external_link`        | 在新标签中打开链接                                           |
| `external_link.enable` | 在新标签中打开链接	                                          |
| `external_link.field`  | 适用于整个网站或仅文章                                       |
| `external_link.exclude`| 排除主机名。在适用时指定子域，包括 `www`                     |
| `filename_case`        | 把文件名称转换为 (1) 小写或 (2) 大写                         |
| `render_drafts`        | 显示草稿                                                     |
| `post_asset_folder`    | 启动 [Asset 文件夹](https://hexo.io/zh-cn/docs/asset-folders) |
| `relative_link`        | 把链接改为与根目录的相对位址                                 |
| `future`               | 显示未来的文章                                               |
| `highlight`            | 代码块的设置                                                 |
| `highlight.enable	`    | 开启语法高亮                                                 |
| `highlight.auto_detect`| 如果未指定语言，则启用自动检测                               |
| `highlight.line_number`| 显示行数                                                     |
| `highlight.tab_replace`| 用 n 个空格替换 tabs；如果值为空，则不会替换 tabs            |


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
use_date_for_updated: true
```

| 参数          | 描述     |
| ------------- | -------- |
| `date_format` | 日期格式 |
| `time_format` | 时间格式 |
| `use_date_for_updated` | 如果前面没有提供更新日期，则使用 `post.updated` 中的发布日期。通常与 Git 工作流一起使用。 |

:::tip 提醒

Hexo 使用 [Moment.js](http://momentjs.com/) 来解析和显示时间。

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
theme_config: 
deploy:
meta_generator:
```

| 参数    | 描述                                  |
| ------- | ------------------------------------- |
| `theme` | 当前主题名称。值为 `false` 时禁用主题 |
| `theme_config` | 主题的配置文件。在这里放置的配置会覆盖主题目录下的 `_config.yml` 中的配置。 |
| `deploy`| 部署的设置                            |
| `meta_generator` | [Meta generator](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#%E5%B1%9E%E6%80%A7) 标签。 值为 `false` 时 Hexo 不会在头部插入该标签。|


:::tip 提醒

下一篇文章将会提到 部署。

:::

## Hexo 命令详解

下面介绍一些 Hexo 的基本命令。

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

<dplayer src="https://dl.sm9.top/Video/EasyHexo/配置.mp4" danmaku-api="https://danmaku.xwhite.studio/api/dplayer/" danmaku-id="392996DE0ABBA502BF97AED350AD3E2B" danmaku-addition="https://danmaku.xwhite.studio/api/dplayer/v3/bilibili?aid=34828870&p=2" subtitle="https://dl.sm9.top/Video/EasyHexo/配置.vtt" />
