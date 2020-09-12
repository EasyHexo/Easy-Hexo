---
title: 参与本项目
sidebarDepth: 3
---
# 参与本项目 <Badge text="@Yue-plus"/> <Badge text="Writing" type="warn"/>

Hi，欢迎对本项目贡献！

[这里是一些贡献的规范](https://github.com/EasyHexo/Easy-Hexo/blob/master/.github/CONTRIBUTING.md)，希望你能遵守，**并在开始贡献前认真通读一遍**。

在 Fork 并 `git clone` 仓库到本地以后，也许会对陌生的文件结构无从下手。

这个项目使用了 [VuePress](https://vuepress.vuejs.org/zh/) 而不是 Hexo。

多尝试些新鲜事物也不错~ 可以点进 VuePress 官网的[快速上手 →](https://vuepress.vuejs.org/zh/guide/)花上十分钟来感受一下它的优点。

## 安装 Yarn

[Yarn](https://classic.yarnpkg.com/zh-Hans/) 是一个快速、可靠、安全的依赖管理器。

### 下载

在下载时可能遇到选择操作系统全白，可以点击右上角切换语言：

![img](@img/5/5-4/1.jpg)

### 使用 WSL 时可能遇到的问题

WSL 是“适用于 Linux 的 Windows 子系统”。

> 如果你没在 WSL 上开发，也不要紧。跳过这一点即可。

#### PGP Key 添加失败

卸载 `gpg` ，用 `gnupg1` 替换：

```sh
sudo apt remove gpg
sudo apt install gnupg1
```

#### 软件包冲突

在使用 Debian 或 Ubuntu 执行 `sudo apt install yarn` 尝试安装 Yarn 时可能会遇到与 `cmdtest` 软件包冲突。

使用以下指令卸载 `cmdtest`，然后尝试重新安装 Yarn：

```sh
sudo apt autoremove cmdtest
```

> [在 GitHub 上更多信息](https://github.com/yarnpkg/yarn/issues/2821)


### 配置

因为中国大陆众所周知的网络原因，最好配置一下使用[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)：

查询当前镜像：
```sh
yarn config get registry
```

**设置为淘宝 NPM 镜像：**
```sh
yarn config set registry https://registry.npm.taobao.org/
```

如果你不想使用国内的镜像了，可以还原为官方镜像：
```sh
yarn config set registry https://registry.yarnpkg.com
```

> 更多 Yarn 指令请查看[官方文档](https://classic.yarnpkg.com/zh-Hans/docs)

## 启动本地服务器

切换工作目录到 `Easy-Hexo` 执行以下指令安装依赖：

```sh
yarn install
```

执行以下指令来开启本地服务器：

```sh
yarn docs:dev
```

默认会在 <http://localhost:8080> 启动一个热重载的开发服务器。

## 写作

### 扩展语法
可以使用 VuePress 的 [Markdown 拓展语法](https://vuepress.vuejs.org/zh/guide/markdown.html#header-anchors)。

### 文章

文章参考其他文件的命名方式，例如：`./docs/N-XXXXX/N-N-XXXXX/README.md`。

在 `./docs/.vuepress/_config.yml` 添加链接到侧边栏与导航栏：

```yml{4,7}
themeConfig:
  nav:
    XXXXXX:
      XXXXX: /N-XXXXX/N-N-XXXXX
  sidebar:
    /N-XXXXX/:
      - N-N-XXXXX.html
```

### 图片

图片需要在项目内的 `./docs/.vuepress/img/N/N-N/` 文件夹里整理好。

引用时使用 `![](@img/N/N-N/N.jpg)`。

### 各种配置技巧

查看 [VuePress 默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html) 

------------------------------------------

欢迎加入 EasyHexo 团队的 QQ 群：935778924。

有任何问题欢迎发送 [Issues](https://github.com/EasyHexo/Easy-Hexo/issues/new)