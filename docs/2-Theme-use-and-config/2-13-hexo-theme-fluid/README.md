---
title: hexo-theme-fluid
---

<div align="center"><img alt="Fluid Logo" src="@img/2/2-13/logo.png" width="128"></div>

# hexo-theme-fluid <Badge text="@fluid-dev"/> <Badge text="Finish"/> <Badge text="1.7.1"/>

一款 Material Design 风格的主题。

![ScreenShot](@img/2/2-13/1.png)

文档：

- [用户手册](https://hexo.fluid-dev.com/docs/)
- [更新日志](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/Changelog.md)
- [文章配置](https://hexo.io/zh-cn/docs/front-matter)

预览：[zkqiang's blog](https://zkqiang.cn)

## 快速开始

#### 1. 获取主题最新版本

请优先下载 [最新 release 版本](https://github.com/fluid-dev/hexo-theme-fluid/releases)，master 分支无法保证稳定。

下载后解压到 `themes` 目录下并重命名为 `fluid`。

#### 2. 指定主题

如下修改 Hexo 博客目录中的 `_config.yml`：

```yaml
theme: fluid  # 指定主题

language: zh-CN  # 指定语言，可不改
```

#### 3. 创建「关于页」

自 v1.7.0 开始，「关于页」需要手动创建：

```bash
$ hexo new page about
```

创建成功后修改 `/source/about/index.md`，添加 `layout` 属性。

修改后的文件示例如下：

```yml
title: about
date: 2020-02-23 19:20:33
layout: about
---

# 这里可以写正文
支持 Markdown, HTML
```

## 功能特性

- [x] 图片懒加载
- [x] 自定义代码高亮方案
- [x] 内置多语言
- [x] 支持多款评论插件
- [x] 支持使用[数据文件](/5-Add/5-3-data-file.html)存放配置，平滑升级
- [x] 自定义静态资源 CDN
- [x] 内置文章搜索
- [x] 页脚备案信息
- [x] 网页访问统计
- [x] 支持 LaTeX 数学公式

:::details 反馈

- 微信群：扫描后添加好友，**回复「fluid」**（在聊天回复，不是加好友验证）自动拉群。
- 二维码<img width="250" src="https://cdn.jsdelivr.net/gh/fluid-dev/static@master/hexo-theme-fluid/wechat.jpeg">

:::