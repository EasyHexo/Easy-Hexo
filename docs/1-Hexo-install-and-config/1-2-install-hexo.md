---
title: 安装 Hexo
---
# 安装 Hexo

在安装 Hexo 之前，你需要安装以下两个工具：

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

如果您已经安装好以上两个工具，可以直接跳转至 [安装 Hexo](/1-Hexo-install-and-config/1-2-install-hexo.html#安装-hexo-2)。

## 安装 Git

- Windows：下载并安装 [git](https://git-scm.com/download/win).
- Mac：使用 [Homebrew](http://mxcl.github.com/homebrew/), [MacPorts](http://www.macports.org/) ：`brew install git`;或下载 [安装程序](http://sourceforge.net/projects/git-osx-installer/) 安装。
- Linux (Ubuntu, Debian)：`sudo apt-get install git-core`
- Linux (Fedora, Red Hat, CentOS)：`sudo yum install git-core`
- Linux (Arch 系列)：`sudo pacman -S git`

:::tip
由于墙的原因，从上面的链接下载 git for windows 最好挂上一个代理，否则下载速度十分缓慢。也可以参考[这个页面](https://github.com/waylau/git-for-win)，收录了存储于百度云的下载地址。
:::

## 安装 Node.js

安装 Node.js 的最佳方式是使用 [nvm](https://github.com/creationix/nvm)。

cURL:

```
$ curl https://raw.github.com/creationix/nvm/v0.33.11/install.sh | sh
```

Wget:

```
$ wget -qO- https://raw.github.com/creationix/nvm/v0.33.11/install.sh | sh
```

安装完成后，重启终端并执行下列命令即可安装 Node.js。

```
$ nvm install stable
```

或者您也可以下载 [安装程序](http://nodejs.org/) 来安装。

## 安装 Hexo

安装好后，即可使用 npm 完成 Hexo 的安装。


```
$ npm install -g hexo-cli
```


