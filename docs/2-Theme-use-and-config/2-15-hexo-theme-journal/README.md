---
title: hexo-theme-journal
---

# hexo-theme-journal <Badge text="@ChungZH"/> <Badge text="Writing" type="warn"/> <Badge text="2.0.2"/>

[Journal 主题地址](https://github.com/SumiMakito/hexo-theme-Journal)

## Journal 主题演示

![预览](@img/2/2-15/1.png)

## 主题简介

一款简单、专注于阅读和写作的主题，容易定制，对移动端和宽屏友好，有灵活的评论控制。

## 下载 Journal 主题

### 安装依赖

在 Hexo 博客根目录打开终端并输入：
```bash
yarn add hexo-renderer-ejs hexo-generator-archive hexo-generator-category-enhance hexo-generator-feed hexo-generator-index hexo-generator-tag
```

或者使用 npm：
```bash
npm i --save hexo-renderer-ejs hexo-generator-archive hexo-generator-category-enhance hexo-generator-feed hexo-generator-index hexo-generator-tag
```

### 克隆主题

在博客根目录输入：
```bash
cd themes
git clone https://github.com/SumiMakito/hexo-theme-Journal.git journal
cd journal
yarn install # 或者使用  `npm i`
```

## 配置 Journal 主题

首先把博客根目录的 `_config.yml` 中的 `theme` 项改成 `journal`。

### 文章

![post-item](@img/2/2-15/2.png)

> 上图是一个 post-item 的示例

要实现如上图的效果，文章的 front-matter 部分就应该这样写：

```yaml
---
title: 吾輩は猫である
intro: 吾輩は猫である。名前はまだない。
featured_image: neko.jpg
date: 2018-11-11 12:00:00
tags: 
    - Novel
    - Japanese
---
```

下面是各个选项的解释：

- `title`：文章标题
- `intro`：引言（可选）
- `featured_image`：特色图片，将显示在 post-item 中（可选）。在这个例子中，`neko.jpg` 被放置在 post 或者 page 的 asset 文件夹中。
<!-- TODO: 添加 asset 相关内容 -->
- `date`：文章写作时间
- `tags`：标签


