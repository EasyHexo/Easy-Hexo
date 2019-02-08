---
title: hexo-theme-apollo
---
# hexo-theme-apollo <Badge text="@ChungZH"/> <Badge text="Writing" type="warn"/> <Badge text="latest"/>


[Apollo 主题地址](https://github.com/pinggod/hexo-theme-apollo)

## Apollo 主题演示

![预览](@img/2/2-4/1.png)

## 主题简介

这是一款简洁、大方的 Hexo 主题。它的配置项不多，能让你专注于博客的内容而不是外表。如果你需要一款能让你专注于内容而又美观的 Hexo 主题，那么 Apollo 主题绝对是你的不二之选。

## 下载 Apollo 主题

首先，在博客根目录打开终端，输入以下命令：
```bash
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
git clone https://github.com/pinggod/hexo-theme-apollo.git themes/apollo
```

就把 Apollo 主题下载好了。

## 配置 Apollo 主题

配置项不多。下面就是 Apollo 的 `_config.yml` 文件内容。

```yaml
menu:
    Blog: /
    Archive: /archives/
    Weibo: http://weibo.com/sunchongsheng
    GitHub: https://github.com/pinggod
    Rss: /atom.xml

favicon: /favicon.png
logo: /favicon.png

# Comment
# e.g disqus: seansun
disqus:
duoshuo:

# Analytics
# google-analytics:
# ga: UA-xxxxxxxx-x

# Copyright Infomation
startyear: 2015
```

### `menu` 设置

```yaml
menu:
    Blog: /
    Archive: /archives/
    Weibo: http://weibo.com/sunchongsheng
    GitHub: https://github.com/pinggod
    Rss: /atom.xml
```

就是这几行，即网站中的这部分：

![预览](@img/2/2-4/2.png)

你可以自行添加一些链接。

:::tip 提示

Hexo 新建页面可以前往 [这里](/1-Hexo-install-and-config/1-3-config-hexo.html#hexo-命令详解) 学习。

:::

