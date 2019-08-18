---
title: hexo-theme-stun
---

<div align="center"><img src="@img/2/2-16/logo.png" alt="stun-logo"/></div>

# hexo-theme-stun <Badge text="@liuyib"/> <Badge text="Finish"/> <Badge text="latest"/>

:::tip 提醒
hexo-theme-stun 支持主题平滑升级。有关内容请查阅[使用数据文件平滑升级主题](/5-Add/5-3-data-file.html)。
:::

[Stun 主题地址](https://github.com/liuyib/hexo-theme-stun)

## 特性

- 简洁，易用，可定制性高
- 响应式设计
- 支持文章图片懒加载
- 支持 `MathJax`
- 支持 `Gitalk`、`Gitment`、`Valine`、`Livere` 和 `Disqus ` 评论系统
- 瀑布流式的相册页面
- 支持 `Fancybox`
- 内置谷歌广告，一键开启
- 好看的背景特效
- `...`

## 主题演示

[liuyib`s Blog](https://liuyib.github.io/)

## 下载主题

1. 进入 hexo 根目录，执行指令：`git clone https://github.com/liuyib/hexo-theme-stun.git themes/stun`

2. 安装依赖：`npm install --save-dev hexo-render-pug hexo-renderer-stylus`

## 配置

### 添加新页面

Stun 主题内置了三种页面：分类页、标签页、关于页。想启用这些页面，只需要在 Hexo 根目录下执行命令：

``` bash
# 启用分类页，执行这条指令
$ hexo new page categories

# 启用标签页，执行这条指令
$ hexo new page tags

# 启用关于页，执行这条指令
$ hexo new page about
```

除了上述三种内置页面外，如果你想使用自定义页面，需要执行如下步骤：

这里以添加**阅读**页面为例。

1. 修改主题配置文件

``` yaml
menu:
  # 格式如下
  # xxx: 路径 || 图标名称
  read: /read/ || book
```

> 图标的名称在这里获取：[https://fontawesome.com/v4.7.0/icons/](https://fontawesome.com/v4.7.0/icons/)

2. 创建页面文件

在 Hexo 根目录下执行指令：

``` bash
$ hexo new page read
```

3. 国际化设置

找到 `languages` 目录下的语言文件进行修改：

`zh-CN.yml`：

```yaml
nav:
  read: 阅读
```

`en.yml`：

```yaml
nav:
  read: Read
```

这样就完成了自定义页面的添加。

### 图标

设置网站图标（favicon），修改主题配置文件：

```yaml
favicon:
  small: /images/icons/favicon-16x16.png
  medium: /images/icons/favicon-32x32.png
  # # 如果你不懂，请忽略下面这些
  # apple_touch_icon: /images/icons/apple-touch-icon.png
  # safari_pinned_tab: /images/icons/logo-stun.svg
  # msapplication: /images/icons/favicon-144x144.png
```

### PWA

如果你想要使网站支持 PWA 特性，需要安装插件 [hexo-pwa](https://github.com/lavas-project/hexo-pwa)，该插件可以使你的网站具有以下功能：

- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) - 用户可以将您的站点添加到移动主屏幕
- [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/) - 让您的网站离线可用

使用步骤如下：

1、安装插件

```bash
$ npm install --save hexo-pwa
```

2、配置插件

找到 Hexo 根目录下的 `_config.yml` 文件，添加以下字段：

``` yaml
pwa:
  manifest:
    # Manifest 文件名和路径
    path: /manifest.json
  serviceWorker:
    # Service Worker 的文件名和路径
    path: /sw.js
    # 在 / 路径（首页）下，预加载的文章数
    preload:
      urls:
        - /
      posts: 5
    # 具体请查看：https://googlechromelabs.github.io/sw-toolbox/api.html#options
    opts:
      # 网络请求超时自动返回到缓存过的响应的时间
      networkTimeoutSeconds: 5
    routes:
      # 缓存你的静态资源，例如你使用了 webp 格式的图片，将其添加进去
      - pattern: !!js/regexp /.*\.(js|css|html|jpg|jpeg|png|svg|gif|json|xml|eot|ttf|woff|woff2)$/
        # 缓存策略，可选值：cacheFirst, networkFirst, cacheOnly, networkOnly, fastest
        # 每个值的具体含义请查看：https://googlechromelabs.github.io/sw-toolbox/api.html#handlers
        strategy: cacheFirst
      - pattern: !!js/regexp /\//
        strategy: networkFirst
      # 如果你想缓存 CDN 资源，请像下面这样进行设置
      - pattern: !!js/regexp /cdn.jsdelivr.net/
        strategy: cacheFirst
  # Hexo 插件的优先级，默认为 10
  priority: 5
```

有关插件的详尽信息，请查看插件的[文档](https://github.com/lavas-project/hexo-pwa)。

3、修改主题配置

修改主题配置文件：

```yaml
pwa:
  # 是否启用
  enable: true
  manifest: /manifest.json
  theme_color: "#54bcff"
```

4、创建 `manifest.json` 文件

你可以通过 [Web App Manifest](https://app-manifest.firebaseapp.com/) 网站来快速生成 `manifest.json` 文件。`manifest.json` 文件的内容如下：

```json
{
  "name": "xxx", // 应用全称
  "short_name": "xxx", // 应用简称
  "theme_color": "#ffffff", // 匹配浏览器的地址栏颜色
  "background_color": "#ffffff", // 加载应用时的背景色
  "display": "standalone", // 首选显示模式。其他选项有：fullscreen, minimal-ui, browser
  "scope": "/",
  "start_url": "/",
  "icons": [ // 该数组指定图标参数，用来适配不同设备（格式为 png，至少包含一个 192px*192px 的图标）
    {
      "src": "images/icons/favicon-48x48.png", // 图标文件的路径，需在 source/ 目录下自行创建
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "images/icons/favicon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "images/icons/favicon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "images/icons/favicon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/icons/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "splash_pages": null // 配置自定义启动动画。
}
```

5、重启 Hexo 服务器

### 订阅

设置邮件订阅和 RSS 订阅，修改主题配置文件：

```yaml
feed:
  # 是否启用
  enable: false
  # 邮件订阅地址 (例如：http://eepurl.com/guAE6j).
  email:
  # RSS 订阅地址 (例如：/atom.xml)
  rss:
```

想要使用邮件订阅，你需要自己构建 或 使用第三方提供的邮件订阅服务。

开启 RSS 订阅之前，你需要安装 hexo 插件：[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)。然后在 Hexo 根目录下的 `_config.yml` 文件中添加配置项（关于各个配置项的具体含义，请自行查看插件的文档）：

```yaml
feed:
  type: atom
  # 这是 RSS 订阅的地址（可以随意设置，和上面 rss 配置项对应）
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
  icon: icon.png
```

配置完成之后，访问你设置的订阅地址，如：`https://yoursite.com/atom.xml`，即可看到 RSS 订阅信息。

### 代码高亮

设置代码高亮以及高亮样式，修改主题配置文件：

```yaml
highlight_theme: light
```

有三种可供选择的代码高亮样式：`light`、`drak`、`ocean`

### 打赏

设置文章的赞赏码，修改主题配置文件：

```yaml
# Reward
reward:
  # 是否启用
  enable: false
  # 支付宝
  alipay: https://xxxxx.png
  # 微信
  wechat: https://xxxxx.png
```

### 更多配置

有关主题更详细的配置，请查看 [Stun 主题文档](https://liuyib.github.io/hexo-theme-stun/zh-CN/)。
