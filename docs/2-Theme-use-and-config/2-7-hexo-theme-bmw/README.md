> Now，花了几天的时间，终于把我的主题从 Vuejs 迁移到了 Hexo。这是官方的配置文档，如果您喜欢这个主题，欢迎Star ✨

主题地址：

- Hexo: [https://github.com/dongyuanxin/theme-bmw](https://github.com/dongyuanxin/theme-bmw)
- ~~Vuejs: [https://github.com/dongyuanxin/vuejs-theme-bmw](https://github.com/dongyuanxin/vuejs-theme-bmw)~~

PS: **非常推荐使用Hexo**，配合主题提供的SEO优化服务和Github等平台的Pages服务，您可以免去DDoS、搭建服务器等方面的烦恼和费用！！！

## 1. 快速开始

### 1.1 下载主题代码

```sh
$ hexo init your-blog
$ cd your-blog/
$ git clone git@github.com:dongyuanxin/theme-bmw.git themes/bmw
```

### 1.2 修改HEXO配置文件

修改hexo的配置文件：`your-blog/_config.yml`:

```yml
# ... 

# 位置：大概位于 6 ～ 12 行
title: 您自己的网站标题
subtitle: # 不需要填写
description: 您自己的网站描述
keywords: 您自己的网站关键词
author: 您的姓名
language: zh-Hans # 目前仅支持中文
timezone: # 不需要填写

# 位置：大概位于 18 行
permalink: passages/:title/ # 如果您需要开启评论和文章统计，请修改此配置

# 位置：大概位于 76 行
theme: bmw # 启用 "bmw" 主题

# ...
```

### 1.3 修改主题配置文件

theme-bmw 的配置文件：`your-blog/themes/bmw/_config.yml`

*请注意，初始阶段您并不需要修改本主题的配置文件，请继续往下看*。

### 1.4 启动博客

```sh
$ hexo s
```

hexo默认监听4000端口, 此时, 请使用Chrome等主流浏览器打开 [http://localhost:4000/](http://localhost:4000/) ，查看博客。

## 2. 更多页面

> BMW 主题在HEXO默认界面的基础上，额外提供了标签归档、 分类归档、 关于介绍 和 友链界面。如果您想自定义更多页面，请看“进阶内容”。

### 2.1 标签页面

生成标签页面：

```sh
$ hexo new page tags
```

修改标签归档页面的markdown文件(文件路径：`your-blog/source/tags/index.md`)的内容：

```markdown
---
title: tags
date: <!-- 自动生成，无需修改 -->
type: "tags"
categories:
tags:
---
```

查看标签归档页面：浏览器中打开 [http://localhost:4000/tags/](http://localhost:4000/tags/)

### 2.2 分类页面

生成分类页面：

```sh
$ hexo new page categories
```

修改分类归档页面的markdown文件(文件路径：`your-blog/source/categories/index.md`)的内容：

```markdown
---
title: categories
date: <!-- 自动生成，无需修改 -->
type: "categories"
categories:
tags:
---
```

查看标签归档页面：浏览器中打开 [http://localhost:4000/categories/](http://localhost:4000/categories/)

### 2.3 关于页面

生成分类页面：

```sh
$ hexo new page about
```

修改关于页面的markdown文件(文件路径：`your-blog/source/about/index.md`)的内容：

```markdown
---
title: about
date: <!-- 自动生成，无需修改 -->
type: "about"
categories:
tags:
---

这里编写您的网站/博客的相关介绍：联系方式、更新日志、甚至是您的个人简历。

BMW 主题会自动渲染此篇markdown，并且在 `http://localhost:4000/about/` 展示给您！
```

查看关于页面：浏览器中打开 [http://localhost:4000/about/](http://localhost:4000/about/)

### 2.4 友链界面

> 友链界面除了要编写相关markdown文件，还需要更改 BMW主题的配置文件，以更好地方式展示您的友链！

#### 2.4.1 生成友链界面

```sh
$ hexo new page friends
```

修改友链页面的markdown文件(文件路径：`your-blog/source/friends/index.md`)的内容：

```markdown
---
title: friends
date: <!-- 自动生成，无需修改 -->
type: "friends"
categories: 
tags:
---

这里编写您的友链声明，您可以陈述您的友链申请规则。

BMW 主题会自动渲染此篇markdown，并且在 `http://localhost:4000/friends/` 展示给您！
```

#### 2.4.2 展示更多友链

请打开 BMW主题 的配置文件：`your-blog/themes/bmw/_config.yml`。您会发现在大概46行 左右，有相关友情链接的配置：

```yml
# ...

# 友链详细信息
friends: # 这是一个数组, 每个元素是一个obj对象
  -
    nickname: 友链名称
    avatar: 友链头像
    site: 友链地址
    meta: 友链信息
  -
    nickname: 友链名称2
    avatar: 友链头像2
    site: 友链地址2
    meta: 友链信息2
  # ...

```

查看友链页面：浏览器中打开 [http://localhost:4000/friends/](http://localhost:4000/friends/)

## 3. 进阶内容

> `theme-bmw`的评论系统采用的是`Valine`，并且提供了基于`Leancloud`的文章统计插件。您只需要按照以下步骤进行简单的配置，便可以提供更好的用户体验！

*如果您不想开启评论系统和文章统计插件，请跳过这一部分*

### 3.1 配置`Leancloud`

进入[leancloud.cn](https://leancloud.cn/)

![](./1.png)

注册账户，并且登录您的账户，然后在右上角进入“控制台”。并且创建一个新应用。

![](./2.png)

配置默认即可（如下图所示），名字根据自己喜好取：

![](./3.png)

进入刚刚创建的应用，在左上方屏幕，点击创建新`Class`。接下来，我们就要为**评论系统**和**文章统计插件**分别创建2个应用。

![](./4.png)

1. 为评论系统开通`Class`: 名称必须是`Comment`, `ACL`权限选择“限制写入”，如下图
  ![](./5.png)
2. 为文章统计插件开通`Class`: 名称必须是`Timer`, `ACL`权限选择“无限制”，如下图
  ![](./6.png)


### 3.2 配置密钥

进入左边导航栏 -> 设置 -> 应用Key：

![](./7.png)

**注意：请保存好您的密钥，关于安全问题，请阅读最后一部分！！！**

Now，切回BMW主题的配置文件`your-blog/source/friends/index.md`。在大概 39~43行，有一项关于`leancloud`的配置，按照上图中的`appId`和`appKey`，复制并且粘贴到配置项即可。

### 3.3 开启评论系统

请先确保您按照前面步骤配置了`leancloud`，并且正确修改了配置文件中的相关配置。

进入配置文件，在大概42行左右，请将`leancloud.comment`修改为`true`.

重启hexo服务即可生效。

### 3.4 开启文章统计

请先确保您按照前面步骤配置了`leancloud`，并且正确修改了配置文件中的相关配置。

进入配置文件，在大概43行左右，请将`leancloud.timer`修改为`true`.

重启hexo服务即可生效。

## 4. ⚠️警告⚠️

### 4.1 尊重原创

1. 您可以根据个人需要修改页面底部的说明信息，**但请不要去除`theme-bmw`主题的版权声明**
2. 评论系统采用了`Valine`，**请不要去除`Valine`的版权声明**
3. 尊重原创，也祝您在开源社区玩得开心(\*^▽^\*)

### 4.2 文章格式

BMW主题针对文章的SEO做了相关优化，并且支持摘要内容渲染。如果您想让您的博客SEO更高，浏览体验更高，那么请注意文章格式。

下面是一个标准的文章格式：

```markdown
---
title: 文章标题
date: 文章创建日期
categories: 文章分类
tags:
  - 文章标签1
  - 文章标签2
  - ...
---

在`<!-- more -->`之前编写文章的摘要内容！！！

<!-- more -->

在`<!-- more -->`之后编写文章的正式内容！！！

```

### 4.3 Web安全问题

如果您开启了评论系统和文章统计插件，请仔细阅读此节！

借助了`Leancloud`规避了后端部署，傻瓜式一键启动相关功能。但随之而来的是，暴露在浏览器环境下的`appid`和`appkey`带来的安全问题。

请进入`leancloud`中您的应用 => 左侧导航栏 => 设置 => 安全中心，进行相关配置：

![](./8.png)

首先，关闭不需要的“服务开关” (仅保留“数据存储”服务)：

![](./9.png)

最后，设置您的“Web”安全域名 (就是您的博客/个人网站地址):

![](./10.png)