---
title: hexo-theme-material-t
---
# hexo-theme-material-t <Badge text="@invom"/> <Badge text="Writing" type="warn"/> <Badge text="latest"/>

![img](@img/2/2-13/1.png)

::: warning 注意
hexo-theme-material-t 仍在开发中，请留意 changelog。
:::

[项目地址](https://github.com/invom/Material-T)

------

**目录**：

[[toc]]

------

如果你是 Hexo 的新司机，建议按顺序阅读下文 `快速开始` ，它将带你快速了解该主题的结构。

## 安装

**1.** 在博客根目录执行如下命令以获取最新版本：

```bash
cd themes
git clone -b master https://github.com/invom/Material-T.git
```

**2.** 在站点配置文件 `_config.yml` 中启用 `Material-T`：把文件里的 `themes: landscape` 项替换为 `themes: Material-T`。

## 预览
[invom's blog](https://invom.github.io)

## 快速开始

### 主题配置文件结构

主题配置文件是按照页面（不包括 favicon、评论等）划分了几大对象，比如在首页相关的配置位于 `index` 对象中，文章页的配置位于 `post` 对象中。

### 关闭冲突的默认配置

修改站点配置文件 `_config.yml`

```yml
// 关闭归档页中的默认分页：
archive_generator:
  per_page: 0  
  yearly: true
  monthly: true
  daily: false
  order_by: -date

// 弃用Hexo默认代码高亮
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```

### 开启关于页

1. 在博客根目录执行 `hexo new page about`
2. 编辑 `source/about/index.md`: 添加 Front Matter `type: "about"`（必需）。`title` 可自行修改。

### 配置首页文章列表格式

首页的文章列表由四部分组成：文章略缩图、标题、摘要、文章信息（时间、标签），除标题外的三部分均可控制是否开启。

- 略缩图：由每篇文章的 Front Matter 中 index_img 属性设置。
- 摘要：分为手动摘要及自动摘要，手动摘要可在文章中使用 `<!-- more -->` 划分，自动摘要则在主题配置文件中设置。
- 文章信息：可在主题配置文件中的 `post_info` 属性控制是否开启。

### 选择文章页布局

目前提供两种文章页布局方式：居中式、左偏移式。可在配置文件中进行选择：

```yml
post: 
  # available: 1 | 2
  layout: 2
```

### 设置 banner_img

banner_img 即为每个页面最上方的图片，除具体文章页面可以在文章 Front Matter 中修改，其余页面均在主题配置文件中配置。以首页为例：

```yml
index: 
  # 图片路径
  banner_img: /img/index-banner.jpg
  # 图片高度占屏幕的百分比: 0 - 100
  banner_img_height: 100
```

### 代码高亮

1. 确保已关闭 Hexo 默认代码高亮（方法在上文有提到）
2. 选择高亮主题：
修改主题配置文件：
```yml
# Code Highlight
# Theme available: github | tomorrow | tomorrow-night | tomorrow-night-eighties
highlight:
  enable: true
  theme: tomorrow-night-eighties
```

### 图标

- favicon 和 apple_touch_icon 均位于 `Material-T/source/` 目录下，直接替换即可。
- 导航栏与关于页的社交网络图标，均引用自 [fontawesome](https://fontawesome.com/icons) 。只需要将属性名替换为图标名称，属性值替换为 url 即可。

----

## 进阶玩家

更细致的配置请移步 [详细文档](http://invom.github.io/Material-T-docs) 。如有疑问请在 issue 区提出，或加入交流社区。
