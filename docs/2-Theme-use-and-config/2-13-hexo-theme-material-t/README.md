---
title: hexo-theme-material-t
---
# hexo-theme-material-t <Badge text="@invom"/> <Badge text="Writing" type="warn"/> <Badge text="latest"/>

![img](https://raw.githubusercontent.com/invom/Material-T/master/screenshot-index.png)

::: warning
项目仍在开发中，请留意changelog
:::

[项目地址](https://github.com/invom/Material-T)

**目录**：

[[toc]]


## 安装

**1.** 获取最新版本

```bash
cd themes
git clone -b master https://github.com/invom/Material-T.git
```

**2.** 修改站点配置文件 `_config.yml`

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

**3.** 在站点配置文件 `_config.yml` 中启用 `Material-T`

## 预览
[invom's blog](https://invom.github.io)

## 快速开始

### icon

- favicon 和 apple_touch_icon 均位于 `Material-T/source/` 目录下，直接替换即可。
- 导航栏与关于页的社交网络图标，均引用自 [fontawesome](https://fontawesome.com/icons) 。只需要将属性名替换为图标名称，属性值替换为 url 即可。

### banner-img

:::tip
文章的 banner-img 可在 Front Matter 中指定。
:::

#### 图片

主题配置文件中，每个页面都有名为 `banner_img` 的属性，属性值(缺省值: index.head_img )可以为外链，也可以使用相对链接。若使用相对链接，建议将图片放置在 `Material-T/source/img/` 目录下，对应的图片地址为 `/img/your_img_name`

#### 高度控制

鉴于每个人的喜好不同，此处开放对页面 banner-img 高度的控制。

主题配置文件中，每个页面对应的 `banner_img_height` 属性，有效值为 0 - 100。100 即为全屏，个人建议 60 以上，看起来会比较和谐。

### 评论

当前只开发了对 disqus 的支持，对 valine、gitment 的支持还在开发计划中，欢迎 pr。

### 开启关于页

1. `hexo new page about`
2. 编辑 `source/about/index.md`: 添加 Front Matter `type: "about"`（必需）。`title` 可自行修改。

## 进阶玩家

### 各页面配置

::: tip
见 [详细文档](http://invom.github.io/Material-T-docs)
:::

### 使用html

footer 与关于页的 extension 处均可使用 HTML。

### 自动摘要

::: warning
优先级: 手动摘要 > 自动摘要
:::

若无特殊要求，可配置自动摘要，选取每篇文章中前 n 个字符。由于文章卡片左侧可能有略缩图（固定高度），所以建议 175 字符左右。

```yml
index:
  auto_excerpt:
    enable: true
    length: 175
```

### 文章页多种布局

当前文章页有两种布局可供选择（ 居中 or 偏左）

### 代码高亮

1. 关闭 Hexo 默认代码高亮（此步已在安装教程中完成）
修改博客配置文件：
```yml
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```
2. 选择高亮主题：
修改主题配置文件：
```yml
# Code Highlight
# Theme available: github | tomorrow | tomorrow-night | tomorrow-night-eighties
highlight:
  enable: true
  theme: tomorrow-night-eighties
```

## 贡献

项目还在不断研发中，欢迎 dalao 们 pr。