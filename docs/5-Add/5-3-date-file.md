---
title: 使用数据文件平滑升级主题
---
# 使用数据文件平滑升级主题

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-MoshiYeap-FF6666.svg?longCache=true&style=flat-square)](https://junzhouliu.github.io/)

## 关于「数据文件」

:::tip
「数据文件」是 Hexo 3.0 新增的「数据文件」功能。此功能会载入 source/_data 内的 YAML 或 JSON 文件。
:::

## 如何使用？

本功能需要主题支持，部分主题的使用方式大同小异，将主题目录下的 `_config.yml` 文件复制到 `hexo` 根目录下的 `/source/_data` 中，并重命名为主题名称，例如 `melody.yml` 。如果 `source` 目录下没有 `_data` 文件夹请自行创建。

之后升级主题便可直接使用 `git pull` or `git fetch` 命令完成主题更新。

## 支持列表

:::warning
点击主题列表即可查看设置方法，不同主题配置方式可能存在差异。
:::

- [NexT]()
- [Melody](https://molunerfinn.com/hexo-theme-melody-doc/#/zh-Hans/quick-start?id=%E8%AE%BE%E7%BD%AE)