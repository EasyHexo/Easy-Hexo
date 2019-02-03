---
title: 部署 Hexo
---

# 部署 Hexo

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-MoshiYeap-FF6666.svg?longCache=true&style=flat-square)](https://junzhouliu.github.io/)
[![](https://img.shields.io/badge/Author-Odeinjul-66CCFF.svg?longCache=true&style=flat-square)](https://odeinjul.github.io/)
## 部署到 GitHub

### 准备工作

1. 如果没有账号，请点此前往 [GitHub](gitHub.com) 注册一个 GitHub 账号。
2. 新建一个公开仓库仓库名格式为 `your_username.github.io` 例如你的 GitHub 用户名是 `easyhexo`，那么你的仓库地址名称就应该是  `easyhexo.github.io`
3. 创建完成后记下该仓库的 HTTPS/SSH 地址 一般格式为 `https://github.com/your_username/your_reponame.git` 在下一步会用到。

### 安装[部署插件](https://github.com/hexojs/hexo-deployer-git)

```bash
$ npm install hexo-deployer-git --save
$ npm install hexo-server --save
```
### 配置 Git

如果你只是安装好了 Git 但没有配置过你的 Git ，那么现在需要做的第一件事情就是设置你的 Git 用户名和邮箱。
在 Git Bash 中执行以下两条命令配置你的用户名和邮箱，这里建议用户名和邮箱与你的 GitHub 用户名和邮箱保持一致。

```bash
$ git config --global user.name "Your_user_name"
$ git config --global user.email Your_email@example.com
```
:::tip 提醒
每次 Git 提交时都会附带这两条信息，用于记录是谁提交的更新，并且会随更新内容一起被记录到历史记录中。简单说，是用来标记的你的身份的~
:::

### 配置站点 `_config.yml` 文件

```yaml
deploy:
  type: git   # 类型填git
  repo: <repository url> # 你的Github仓库地址
  branch: master  # 分支名称。默认填写 master 如果您使用的是 GitHub ，程序会尝试自动检测。
  message:  # 提交信息可以自定义，不填的则默认为提交时间
```

### 发布到 GitHub

在你的 Hexo 站点根目录下，执行如下命令即可部署到 GitHub Pages 上。

```bash
$ hexo clean && hexo d -g
```

:::tip 提醒
如果是第一次使用，会弹出一个登录框，需要登陆你的 GitHub 账号。
:::

### 自定义域名
1. 如果你拥有个人域名，请用 A 记录解析到以下IP中的任意一个。或者使用 CNAME 请解析到你的 GitHub 仓库名称。
```yaml
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
**参考表格**
| 记录类型 | 主机记录 | 解析路线 | 记录值 | MAX 优先级 | TTL（秒）|
| :-----: | :-----: | :-----: | :-----:| :-----: | :-----:|
|    A    | @       |   默认  | 185.199.110.153| - | 600 |
|  CNAME  | @       |   默认  | GitHub 博客仓库名称| - | 600 |

2. 打开仓库设置,找到 GitHub Pages 项目，修改 Custom domain 选项的值为你的自定义域名（不带 http 等前缀）
3. 勾选 Custom domain 选项下的 Enforce HTTPS 选项，强制开启 Https 。如果遇到 `Enforce HTTPS` 选项无法打开，可以稍等一会儿再尝试。

:::tip 提醒
同时需要在本地的 `source` 目录新建一个 CNAME 文件，内容为你的自定义域名（不带 http 等前缀）。否则无法使用自定义域名功能（ hexo d 生成的文件没有 CNAME 文件，导致仓库的自定域名设置失效）
:::

## 部署到 CODING（dev.tencent.com）

### 准备工作

1. 如果没有账号，请点此前往 [CODING](dev.tencent.com) 注册 CODING 账号。
2. 新建一个公开仓库，仓库名格式为 `your_username.coding.me` 例如你的 CODING 用户名(username)是 `easyhexo`，那么你的仓库名称就应该是  `easyhexo.coding.me`
3. 创建完成后记下该仓库的 HTTPS/SSH 地址 一般格式为 `https://coding.net/your_username/your_reponame.git` 在下一步会用到。
4. 如果您没有配置 `Git` 和 `hexo-deployer-git` 请参阅前文配置方法配置。

### 配置站点 `_config.yml` 文件

```yaml
deploy:
  type: git   # 类型填git
  repo: 
    github: <github repository url> # 你的GitHub仓库地址
    coding: <coding repository url> # 你的coding仓库地址
  branch: master  # 默认填写 master。
  message:  # 提交信息可以自定义，不填的则默认为提交时间
```

### 发布到 CODING

在本地 Hexo 站点根目录下，执行如下命令即可部署到 CODING Pages 上。

```bash
$ hexo clean && hexo d -g
```

:::tip 提醒
如果是第一次使用，会弹出一个登录框，需要登陆你的 CODING 账号。
:::

### 自定义域名
1. 如果你拥有个人域名，请添加 CNAME 记录。
2. 绑定前请在域名 DNS 设置中添加一条 CNAME 记录指向 xxxx.coding.me。将@和www记录都解析到这个即可。 

**参考表格**
| 记录类型 | 主机记录 | 解析路线 | 记录值 | MAX 优先级 | TTL（秒）|
| :-----: | :-----: | :-----: | :-----:| :-----: | :-----:|
|  CNAME  | www     |   默认  | xxxx.coding.me| - | 600 |
|  CNAME  | @       |   默认  | xxxx.coding.me| - | 600 |

2. 打开仓库设置,找到 代码-Pages服务，在绑定新域名下的文本框内输入你的自定义域名（不带 http 等前缀）。
3. 勾选 强制HTTPS访问。

:::tip 提醒
出于 SEO 的考虑，我们建议您绑定一个 www 域名即可，如果您使用的域名 DNS 解析服务不支持添加 CNAME 记录，建议更换 Nameservers 到其他支持该功能的域名提供商（如 腾讯云）。如果遇到自定义域名失效，请参照前文 GitHub 配置方案解决。
:::

详细内容请参阅 [CODING 官方文档](https://dev.tencent.com/help/) 。

## 部署到 CentOS Servers

### 预先准备

- 确保你的 PC 已经安装好 Hexo 主程序的并且生成站点文件夹。安装 Hexo，请参阅[安装 Hexo](/1-Hexo-install-and-config/1-2-install-hexo.html)
- 一台搭载 CenOS 7.4 64bit 的 ECS 服务器实例，其他 Linux 系统也可以
- 你至少应该掌握一丢丢的 Linux 命令

### 安装[部署插件](https://github.com/hexojs/hexo-deployer-git)

```bash
$ npm install hexo-deployer-git --save
$ npm install hexo-server --save
```

### 服务器环境配置

#### 更新服务器的软件包

```bash
yum -y update
```
#### 安装 Git

```bash
yum install git -y
```
#### 新建 Git 用户

```bash
useradd -m git
```
#### 设置 gituser 的密码

```bash
passwd git
```
#### 配置 SSH 免密登陆

我们在使用 SSH 访问服务器时每一次连接都需要验证相应用户的密码，十分繁琐，所以我们通过一组密匙来进行授权访问。
在 `Git Bash` 中使用 `ssh-keygen` 命令在你的电脑上生成一组密匙，这个过程中 `ssh-keygen` 会确认密钥的存储位置（ Windows 下默认是 `c:users/username/.ssh/id_rsa`），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空。

```bash
$ ssh-keygen
```

使用 `ssh-copy-id -i` 命令将公钥也就是 `id_rsa.pub` 添加到服务器上。这个过程中需要验证你所添加的用户的密码，如果你的服务器上存在多个用户，你需要逐一添加。添加完成后可以通过 `ssh your_user_name@HostIP` 命令来验证是否添加成功。

```bash
$ ssh-copy-id -i ~/.ssh/id_rsa.pub your_user_name@HostIP  //添加公钥
$ ssh your_user_name@HostIP   //验证是否添加成功
```

#### 禁止 Git 用户 Shell 登陆权限

出于安全考虑，禁用 Git 用户的 shell 权限(必须先验证是否可以免密码登陆，可以后再禁用 shell 权限，否则无法通过 `ssh-copy-id -i` 添加 SSH 公钥)，使用 `vim /etc/passwd` 命令修改 `~/etc/` 下的 passwa 文件

```diff
-  git:x:1001:1001:,,,:/home/git:/bin/bash
+  git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
```

#### SSH 免密登陆无效问题排查

检查 `/etc/ssh/` 目录下的 `sshd_config` 文件，确认以下关键选项是否正常

```yaml
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile      .ssh/authorized_keys

#GSSAPIAuthentication yes
#GSSAPICleanupCredentials yes
```

若还是不能正常工作，则检查用户权限和组权限

```bash
chmod 0755 /home/your_user_name
chmod 700 /home/your_user_name/.ssh
chmod 600 /home/your_user_name/.ssh/authorized_keys
```

关于 SSH 的更多问题可查阅[这里](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-windows)

#### 初始化 Git 仓库

新建 `/var/repo` 目录，并在该目录下，使用 `git init --bare` 创建一个名为 `blog.git` 裸仓库，并改变该目录的所有者为 git 用户。
> 裸仓库可以直接作为服务器仓库供各开发者 push、pull 数据，实现数据共享和同步，不保存文件，只保存历史提交的版本信息。

```bash
mkdir -p /var/repo    //新建 var/repo 目录
cd /var/repo          //进入该目录
git init --bare blog.git   //新建一个裸仓库
chown -R git:git blog.git
```

#### 配置 Git Hooks

使用 vim 命令在 `/var/repo/blog.git/hooks` 目录下创建 `post-receive` 文件

```bash
vim /var/repo/blog.git/hooks/post-receive
```

并且在 `post-receive` 文件中写入以下内容

```bash
#!/bin/sh
git --work-tree=/home/www/hexo --git-dir=/var/repo/blog.git checkout -f
```

提升 `post-receive` 的可执行权限

```bash
chmod +x /var/repo/blog.git/hooks/post-receive
```

#### 安装 Nginx

> Nginx 是一个高性能的 HTTP 和反向代理服务，也是一个 IMAP/POP3/SMTP 服务。外网用户访问服务器的 Web 服务由 Nginx 提供，Nginx 需要配置静态资源的路径信息才能通过 url 正确访问到服务器上的静态资源。

在安装之前我们先创建用于存放静态资源的目录 `/home/www/hexo` ，并更改其所有者，稍后将其设置为 Nginx 的默认静态资源目录。

```bash
mkdir -p /home/www/hexo      //创建目录
chown -R git:git /home/www/hexo   //更改目录所有者
yum install nginx -y   //安装Nginx
```

#### 配置静态服务器访问路径

修改 Nginx 默认静态资源路径，打开 Nginx 的默认配置文件 `/etc/nginx/nginx.conf` ，将默认的 `root /usr/share/nginx/html;` 修改为: `root /home/www/hexo;` 如下所示。

```diff
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
-       root         /data/www;
+       root         /homr/www/hexo;

        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

```

如果你拥有 `SSL,TSL` 证书，需要配置 `HTTPS` 访问或者添加 `HTTP` 强制转换 `HTTPS` 访问功能，请参照以下代码进行配置。

```nginx
server {
        listen       80 default_server;
        listen       [::]:80 default_server;

        return 301 https://liujunzhou.top$request_uri; # 使用301重定向
 }

# Settings for a TLS enabled server.

server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  liujunzhou.top; #你的域名
        root         /home/www/hexo; # Nginx 静态资源存放路径

        ssl_certificate "/etc/pki/tls/certs/CA.crt";
        ssl_certificate_key "/etc/pki/tls/certs/CA.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照此协议配置
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照此套件配置
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

```

### 配置`_config.yml`文件

在 `_config.yml` 文件中设置 deploy 选项

```yaml
# Deployment
deploy:
- type: git # 类型填git
  repo: your_user_name@HostIP:/var/repo/blog.git
  branch: master
  message:
```
#### 发布站点

在你的 Hexo 站点根目录下，执行如下命令即可发布你的站点到服务器上。

```bash
$ hexo clean && hexo d -g
```

## 其他问题

### Hooks 失效

如果部署成功，但是 `/home/www/hexo` 目录的资源文件并未更新，请检查 `post-receive` 是否有执行权限，以及 `/home/www/hexo` 文件所有者是否为 Git 用户，以及是否具有读写权限。

```bash
chown -R git:git /var/repo/blog.git  //更改blog.git目录的所有者
chmod +x /var/repo/blog.git/hooks/post-receive   //提升post-receive执行权
chown -R git:git /home/www/hexo   //或者chmod 755 /home/www/hexo 确保hexo文件夹为空
```

### 部署后，部分页面 404

部分情况下，在初次部署之后，部分文章或者页面路径大小如果更改了，会导致新部署上去的页面出现 404 错误。
这是由于 Git 没有区分大小写导致的文件路径错误。修改 `hexo根目录/.deploy_git/.git/` 下的 `config` 文件

```diff 
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = false
	symlinks = false
-	ignorecase = true
+   ignorecase = false
[branch "master"]
	remote = ueser_name@HostIP:/var/repo/blog.git
	merge = refs/heads/master
```

## 视频

<dplayer src="https://dl.sm9.top/Video/EasyHexo/部署.mp4" danmaku-id="CDCA91E8E5FD5955BB772A08B0F43DAA" subtitle="https://dl.sm9.top/Video/EasyHexo/部署.vtt" :cross-origin="true" />
