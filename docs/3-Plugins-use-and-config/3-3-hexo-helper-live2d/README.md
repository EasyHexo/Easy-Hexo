---
title: hexo-helper-live2d
---

# Live2d 插件使用

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-Odeinjul-66CCFF.svg?longCache=true&style=flat-square)](odeinjul.github.io)

>**忠告:使用live2d插件的话会是网页加载速度变慢，请酌情使用**

## 介绍

[hexo-helper-liv2d](https://github.com/EYHN/hexo-helper-live2d) 是 一个在您博客上添加live2d模型(*看板娘!* )的插件，可以十分方便地在网页上展示live2d模型。

> 本文只是指导你怎么用起来这个插件，相信如果你需要魔改本插件 时，已经不再需要人来指导了.

## 展示
![live2d-widget-model-z16](@img/3/3-2/1.png)

## 建议食用顺序
安装 -> 更多模型 -> c.使用npm模块 -> 使用现有的 -> 配置(使用我的示例)

## 安装

安装 hexo-helper-live2d 插件十分简单，只需要在博客目录执行

```batch
npm install --save hexo-helper-live2d
```
> 试试更加NB的[Yarn](https://yarnpkg.com/en/)来安装?据说会比用npm少不少麻烦呢 
`yarn add hexo-helper-live2d` . 

## 配置

配置项需要一些 Yaml 语法的基础知识，可以参见 [YAML 语法简介](/5-Add/5-2-yaml.html)

修改 Hexo 的配置文件(或者主题的配置文件) `_config.yml` .
示例(使用模块化安装的模型)

```yaml
live2d:
  enable: true
  scriptFrom: local
  model:
    use: live2d-widget-model-wanko
  display:
    position: right
    width: 150
    height: 300
  mobile:
    show: true
```

当然，上面只是我的一个示例，完整的配置选项在下面（如果不懂的话，可以直接复制我的示例文件）。

```yaml
# Live2D
## https://github.com/EYHN/hexo-helper-live2d
live2d:
  enable: true
  # enable: false
  scriptFrom: local # 默认
  pluginRootPath: live2dw/ # 插件在站点上的根目录(相对路径)
  pluginJsPath: lib/ # 脚本文件相对与插件根目录路径
  pluginModelPath: assets/ # 模型文件相对与插件根目录路径
  # scriptFrom: jsdelivr # jsdelivr CDN
  # scriptFrom: unpkg # unpkg CDN
  # scriptFrom: https://cdn.jsdelivr.net/npm/live2d-widget@3.x/lib/L2Dwidget.min.js # 你的自定义 url
  tagMode: false # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
  debug: false # 调试, 是否在控制台输出日志
  model:
    use: live2d-widget-model-wanko # npm-module package name
    # use: wanko # 博客根目录/live2d_models/ 下的目录名
    # use: ./wives/wanko # 相对于博客根目录的路径
    # use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json # 你的自定义 url
    display:    # 模型展示的位置设置
        position: right     # 方位
        width: 150          # 宽度
        height: 300         # 高度
    mobile:
        show: true   # 在移动设备上是否开启live2d
```

## 使用

当你在配置好后，live2d就已经开始运行了.

## 更多模型

有许多方法来使用不同的模型:

### a. live2d_models子目录名称

1. 在您博客根目录下创建一个 `live2d_models` 文件夹.

2. 在此文件夹内新建一个子文件夹.

3. 将你的 Live2D 模型复制到这个子文件夹中.

4. 将子文件夹的名称输入 `_config.yml` 的 `model.use` 中.

<details><summary>示例</summary><br>

你的模型叫 `mymiku`.

在博客根目录 (应当有 `_config.yml` 、`sources` 、 `themes` ) 新建名为 `mymiku` 的子文件夹.

将模型复制到 `/live2d_models/mymiku/` 中.

现在, 在这里应当有一个 `.model.json` 文件 (例如 `mymiku.model.json`)

在 `/live2d_models/mymiku/` 中.

将 `mymiku` 输入到位于 `_config.yml` 的 `model.use` 中.

</details>

### b. 相对于博客根目录的自定义路径

您可直接输入**相对于博客根目录**的自定义路径到 `model.use` 中.

示例: `./wives/wanko`

### c. 使用 npm 模块

#### 使用现有的

我们有许多现有的模型, [来看看](https://github.com/xiazeyu/live2d-widget-models)

<details><summary>点我如果你不想跳转</summary><br>

- `live2d-widget-model-chitose`
- `live2d-widget-model-epsilon2_1`
- `live2d-widget-model-gf`
- `live2d-widget-model-haru/01` (use `npm install --save live2d-widget-model-haru`)
- `live2d-widget-model-haru/02` (use `npm install --save live2d-widget-model-haru`)
- `live2d-widget-model-haruto`
- `live2d-widget-model-hibiki`
- `live2d-widget-model-hijiki`
- `live2d-widget-model-izumi`
- `live2d-widget-model-koharu`
- `live2d-widget-model-miku`
- `live2d-widget-model-ni-j`
- `live2d-widget-model-nico`
- `live2d-widget-model-nietzsche`
- `live2d-widget-model-nipsilon`
- `live2d-widget-model-nito`
- `live2d-widget-model-shizuku`
- `live2d-widget-model-tororo`
- `live2d-widget-model-tsumiki`
- `live2d-widget-model-unitychan`
- `live2d-widget-model-wanko`
- `live2d-widget-model-z16`

</details>

你需要先使用 `npm install 模型的包名` 来安装,

然后将包名输入位于 `_config.yml` 的 `model.use` 中.
例如:

```yaml
  model:
    use: live2d-widget-model-z16
```

#### 发布你自己的模型包(dalao!)

- 新建一个目录, 在Node环境下执行 `npm init`, 我们推荐您使用 `live2d-widget-model-xxx` 的包名.

- 在刚刚创建的目录下创建 `assets` 子目录, 把你的模型放进去.

示例:

[live2d-widget-model-wanko](https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko)

- 使用 `npm publish` 来发布.

### d. 使用CDN

如果你是没有CDN会死星人,直接将 `.model.json` 的url地址输入 `model.use`.

##各模型包示例待完善