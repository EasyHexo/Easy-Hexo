---
title: hexo-tag-aplayer
---

# Aplayer插件使用

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-MonoLogueChi-FE326D.svg?longCache=true&style=flat-square)](mailto:xxwhite@foxmail.com)

## 介绍

[hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) 是 [APlayer](https://github.com/MoePlayer/APlayer) 播放器的 Hexo 标签插件，可以十分方便地在文章内插入音乐播放器。

> 本文只是指导你怎么用起来这个插件，相信如果你需要用到 ~~骚操作~~ 高级操作的时候，已经不再需要这篇文章来指导了.

## 安装

安装 hexo-tag-aplayer 插件十分简单，只需要在博客目录执行

```batch
npm install hexo-tag-aplayer -s
```

## 配置

配置项需要一些 Yaml 语法的基础知识，可以参见 [YAML语法简介](/5-Add/5-2-yaml.html)

修改 hexo 的配置文件 `_config.yml` ，增加

```yaml
aplayer:
  cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js  # 引用 APlayer.js 外部 CDN 地址 (默认不开启)
  style_cdn: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css
  meting: true       # MetingJS 支持
  meting_cdn: https://cdn.jsdelivr.net/npm/meting/dist/Meting.min.js # 引用 Meting.js 外部 CDN 地址 (默认不开启)
```

当然，上面只是我的一个示例，完整的配置选项在下面（如果不懂的话，可以直接复制我的示例文件）。

```yaml
aplayer:
  script_dir: some/place                        # Public 目录下脚本目录路径，默认: 'assets/js'
  style_dir: some/place                         # Public 目录下样式目录路径，默认: 'assets/css'
  cdn: http://xxx/aplayer.min.js                # 引用 APlayer.js 外部 CDN 地址 (默认不开启)
  style_cdn: http://xxx/aplayer.min.css         # 引用 APlayer.css 外部 CDN 地址 (默认不开启)
  meting: true                                  # MetingJS 支持
  meting_api: http://xxx/api.php                # 自定义 Meting API 地址
  meting_cdn: http://xxx/Meing.min.js           # 引用 Meting.js 外部 CDN 地址 (默认不开启)
  asset_inject: true                            # 自动插入 Aplayer.js 与 Meting.js 资源脚本, 默认开启
  externalLink: http://xxx/aplayer.min.js       # 老版本参数，功能与参数 cdn 相同
```

## 使用

使用 hexo-tag-aplayer 非常简单，只需要在 MarkDown 文件中插入正确的标记就可以了。


::: v-pre
```markdown
{% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %}
```
:::

如果你开启了[文章资源文件夹](https://hexo.io/zh-cn/docs/asset-folders.html#%E6%96%87%E7%AB%A0%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E5%A4%B9)功能的话，就可以这样加载歌曲了

::: v-pre
```markdown
{% aplayer "Caffeine" "Jeff Williams" "caffeine.mp3" "picture.jpg" "lrc:caffeine.txt" %}
```
:::

## MetingJS

好吧，对于新手来说，前面的你可能已经听懵逼了，忘记前面的使用方法，来看看下面的吧。

使用 MetingJS ，首先要在配置里开启，还记得前面我说直接复制我的配置吗？

```yaml
aplayer:
  meting: true
```

开启 [MetingJS](https://github.com/metowolf/MetingJS) 之后，一切都变得简单了，只需要

::: v-pre
```markdown
{% meting "002j785c33YQHT" "tencent" "song" %}
```
:::

WTF？这是什么？？？是不是还是一脸懵逼呢，不急，听我慢慢来解释。

有关  `{% meting %}`  的选项列表如下:

| 选项          | 默认值     | 描述                                                        |
| ------------- | ---------- | ----------------------------------------------------------- |
| id            | **必须值** | 歌曲 id / 播放列表 id / 相册 id / 搜索关键字                |
| server        | **必须值** | 音乐平台: `netease`, `tencent`, `kugou`, `xiami`, `baidu`   |
| type          | **必须值** | `song`, `playlist`, `album`, `search`, `artist`             |
| fixed         | `false`    | 开启固定模式                                                |
| mini          | `false`    | 开启迷你模式                                                |
| loop          | `all`      | 列表循环模式：`all`, `one`,`none`                           |
| order         | `list`     | 列表播放模式： `list`, `random`                             |
| volume        | 0.7        | 播放器音量                                                  |
| lrctype       | 0          | 歌词格式类型                                                |
| listfolded    | `false`    | 指定音乐播放列表是否折叠                                    |
| storagename   | `metingjs` | LocalStorage 中存储播放器设定的键名                         |
| autoplay      | `true`     | 自动播放，移动端浏览器暂时不支持此功能                      |
| mutex         | `true`     | 该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停 |
| listmaxheight | `340px`    | 播放列表的最大长度                                          |
| preload       | `auto`     | 音乐文件预载入模式，可选项： `none`, `metadata`, `auto`     |
| theme         | `#ad7a86`  | 播放器风格色彩设置                                          |

如果你想完全读懂上面的这张表，你可能需要去查看 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) 和 [APlayer](https://github.com/MoePlayer/APlayer) 的文档了，不是完全懂没关系，只要暂时会用就可以了，如果想要进阶使用的话，再去查找，你只需要记住我前面示例就可以了。


再来看
::: v-pre
```markdown
{% meting "002j785c33YQHT" "tencent" "song" %}
```
:::

其中 `{% meting %}` 是meting的标签， `002j785c33YQHT` 是 id ， `tencent` 是平台， `song` 是类型，下面就怎么获得 id 展开讨论。

### QQ音乐

推荐使用

搜索歌曲，歌曲地址就是 id ，如果是音乐列表，列表地址就是 id ,同理，歌手也是一样的。

![QQ音乐id](@img/3/3-1/1.png)


### 网易云音乐

网易云音乐比较实在，直接告诉你 id 是什么了

![网易云音乐id](@img/3/3-1/2.png)

其他平台的，也是类似，只要花点时间研究一下就能找到。

最前三个参数是必须填写的参数，也是可以简写的，后面其他的参数就不可以简写了，具体可以看下面的进阶示例。


::: v-pre
```markdown
<!-- 进阶示例 -->
{% meting "60198" "netease" "playlist" "autoplay" "mutex:false" "listmaxheight:340px" "preload:none" "theme:#ad7a86"%}
```
:::

## 其他示例

### 插入歌曲列表

::: v-pre
```markdown
<!-- 使用 MetingJS 插入歌曲列表 -->
{% meting "001Mf4Ic1aNYYK" "tencent" "album" "order:random" "listmaxheight:180px" %}
```
:::

效果截图

![歌曲列表效果](@img/3/3-1/3.png)

### 其他示例待完善