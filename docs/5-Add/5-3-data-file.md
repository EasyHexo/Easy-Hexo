---
title: 数据文件
---

# 数据文件 <Badge text="MoshiYeap"/> <Badge text="Finish"/>

## 关于「数据文件」

::: theorem 数据文件

有时您可能需要在主题中使用某些资料，而这些资料并不在文章内，并且是需要重复使用的，那么您可以考虑使用 Hexo 3.0 新增的「数据文件」功能。此功能会载入 `source/_data` 内的 YAML 或 JSON 文件，如此一来您便能在网站中复用这些文件了。 

:::right

—— [Hexo 官方文档](https://hexo.io/zh-cn/docs/data-files)

:::

## 如何使用？

大部分主题使用此特性都是为了平滑更新，使用方式**可能**如下：

- 将主题目录下的 `_config.yml` 文件复制到博客根目录下的 `/source/_data` 中，并重命名为主题名称。例如我使用的是 `melody` 主题，那么就叫做 `melody.yml` 。如果 `source` 目录下没有 `_data` 文件夹请自行创建。

- 之后升级主题便可直接使用 `git pull` or `git fetch` 命令完成主题更新。

某些主题也将数据文件特性用于存放一些设置数据。

总之，请注意主题的文档，**每一个主题的使用方法都可能不一样**！

## 支持列表

:::warning 警告
点击列表中的链接即可查看设置方法，不同主题配置方式可能 **存在差异**。
:::

- [hexo-theme-NexT](https://github.com/theme-next/hexo-theme-next/blob/master/docs/zh-CN/DATA-FILES.md) <Badge text="平滑更新"/>
- [hexo-theme-Melody](https://molunerfinn.com/hexo-theme-melody-doc/zh-Hans/quick-start.html#%E9%85%8D%E7%BD%AE) <Badge text="平滑更新"/>
- [hexo-theme-Stun](https://liuyib.github.io/hexo-theme-stun/zh-CN/advanced/advanced-setting.html#%E5%B9%B3%E6%BB%91%E5%8D%87%E7%BA%A7) <Badge text="平滑更新"/>
- [hexo-theme-fluid](https://hexo.fluid-dev.com/docs/guide/#%E8%A6%86%E7%9B%96%E9%85%8D%E7%BD%AE) <Badge text="平滑更新"/>
- [hexo-theme-volantis](/2-Theme-use-and-config/2-6-hexo-theme-volantis/#%E5%A6%82%E4%BD%95%E6%96%B0%E5%A2%9E%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)
