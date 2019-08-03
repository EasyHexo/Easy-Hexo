---
title: 使用数据文件平滑升级主题
---

# 使用数据文件平滑升级主题 <Badge text="MoshiYeap"/> <Badge text="Finish"/>

## 关于「数据文件」

:::tip 提醒
「数据文件」是 Hexo 3.0 新增的功能。此功能会载入 `source/_data` 内的 `YAML` 或 `JSON` 文件。
:::

## 如何使用？

本功能需要主题支持，部分主题的使用方式大同小异：将主题目录下的 `_config.yml` 文件复制到博客根目录下的 `/source/_data` 中，并重命名为主题名称。例如我使用的是 `melody` 主题，那么就叫做 `melody.yml` 。如果 `source` 目录下没有 `_data` 文件夹请自行创建。

之后升级主题便可直接使用 `git pull` or `git fetch` 命令完成主题更新。

## 支持列表

:::warning 警告
点击主题列表即可查看设置方法，不同主题配置方式可能存在差异。
:::

- [hexo-theme-NexT](https://github.com/theme-next/hexo-theme-next/blob/master/docs/zh-CN/DATA-FILES.md)
- [hexo-theme-Melody](https://molunerfinn.com/hexo-theme-melody-doc/#/zh-Hans/quick-start?id=%E8%AE%BE%E7%BD%AE)