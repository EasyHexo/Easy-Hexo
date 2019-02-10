---
title: hexo-tag-dplayer
---


# Dplayer 插件使用

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-MonoLogueChi-FE326D.svg?longCache=true&style=flat-square)](mailto:xxwhite@foxmail.com)


## 介绍

[hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer) 是 [APlayer](https://github.com/MoePlayer/DPlayer) 播放器的 Hexo 标签插件，可以十分方便地在文章内插入视频播放器。

## 安装

安装 hexo-tag-dplayer 插件十分简单，只需要在博客目录执行

```batch
npm install hexo-tag-dplayer -s
```

配置项需要一些 Yaml 语法的基础知识，可以参见 [YAML 语法简介](/5-Add/5-2-yaml.html)

修改 Hexo 的配置文件 `_config.yml` ，增加

```yaml
hexo-tag-dplayer:
  cdn:
    - https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js
    - https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css
  default: 
    api: https://api.prprpr.me/dplayer/
    loop: yes
    screenshot: yes
    # 后面还可以接着写其他默认配置
```

## 使用

使用 hexo-tag-dplayer 非常简单，只需要在 MarkDown 文件中插入正确的标记就可以了。

::: v-pre
```markdown
{% dplayer "url=https://dl.sm9.top/Video/2018/KeyCastOW.mp4" %} 
```
:::

如果还需要其他配置，尽管在上面写就好，详情可以看[这里] (https://github.com/MoePlayer/hexo-tag-dplayer)，下面有一个简单的示例可以看一下：

::: v-pre
```markdown
{% dplayer "url=https://dl.sm9.top/Video/2018/%E6%8E%98%E5%9C%B0%E6%B1%82%E5%8D%87_x264.mp4" " screenshot" "loop=yes" "id=46190A32F63DFF2CF0A3BB0F3293636C" "api=https://api.prprpr.me/dplayer/" "addition=https://api.prprpr.me/dplayer/v3/bilibili?aid=17150441 " %} 
```
:::

附Dplayer一些简单的参数列表，注意， Dplayer 的参数仅作为参考，具体请以 [hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer) 为准

名称 | 默认值 | 描述
----|-------|----
container | document.querySelector('.dplayer') | 播放器容器元素
live | false | 开启直播模式, [详情](http://dplayer.js.org/#/home?id=live)
autoplay | false | 视频自动播放
theme | '#b7daff' | 主题色
loop | false | 视频循环播放
lang | navigator.language.toLowerCase() | 可选值: 'en', 'zh-cn', 'zh-tw'
screenshot | false | 开启截图，如果开启，视频和视频封面需要开启跨域
hotkey | true | 开启热键
preload | 'auto' | 预加载，可选值: 'none', 'metadata', 'auto'
volume | 0.7 | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
logo | - | 在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
apiBackend | - | 自定义获取和发送弹幕行为，[详情](http://dplayer.js.org/#/home?id=live)
video | - | 视频信息
video.quality | - | [详情](http://dplayer.js.org/#/home?id=quality-switching)
video.defaultQuality | - | [详情](http://dplayer.js.org/#/home?id=quality-switching)
video.url | - | 视频链接
video.pic | - | 视频封面
video.thumbnails | - | 视频缩略图，可以使用 [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails) 生成
video.type | 'auto' | 可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或其他自定义类型, [详情](http://dplayer.js.org/#/home?id=mse-support)
video.customType | - | 自定义类型, [详情](http://dplayer.js.org/#/home?id=mse-support)
subtitle | - | 外挂字幕
subtitle.url | `required` | 字幕链接
subtitle.type | 'webvtt' | 字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
subtitle.fontSize | '20px' | 字幕字号
subtitle.bottom | '40px' | 字幕距离播放器底部的距离，取值形如: '10px' '10%'
subtitle.color | '#fff' | 字幕颜色
danmaku | - | 显示弹幕
danmaku.id | `required` | 弹幕池id，必须唯一
danmaku.api | `required` | [详情](http://dplayer.js.org/#/home?id=danmaku-api)
danmaku.token | - | 弹幕后端验证 token
danmaku.maximum | - | 弹幕最大数量
danmaku.addition | - | 额外外挂弹幕，[详情](http://dplayer.js.org/#/home?id=bilibili-danmaku)
danmaku.user | 'DIYgod' | 弹幕用户名
danmaku.bottom | - | 弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'
danmaku.unlimited | false | 海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效
contextmenu | [] | 自定义右键菜单
highlight | [] | 自定义进度条提示点
mutex | true | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器

## 使用弹幕

上面的示例中已经写了怎么使用弹幕了，使用弹幕首先需要有一个 ID ，建议使用视频的哈希值作为ID，这样可以尽可能保证 ID 唯一，防止重复，接下来要配置弹幕接口，官方免费的弹幕接口能用，但是不稳定，如果有特殊需求，推荐个人自己搭建弹幕服务器。

解析 BiliBiLi 弹幕，这个上面的示例也已经有了，同样，免费的服务不一定稳定，有特殊需求的请自己搭建弹幕服务器。

增加外部弹幕列表，同解析 BiliBiLi 弹幕一样，只要将外部弹幕的地址写进 `addition` 就可以了

## 使用字幕

增加参数 `"subtitle=字幕文件地址"` 就可以了，如需修改字幕颜色或者字体大小，仿照其他参数写就可以了