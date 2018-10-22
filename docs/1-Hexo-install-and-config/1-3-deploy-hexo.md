---
title: 部署 Hexo
---

# 部署到 GithubPage

## 准备工作

1.如果没有账号，请点此前往[Github](github.com)注册一个Github账号。

2.新建一个公开仓库仓库名格式为 `your_username.github.io`例如你的Github用户名是`easyhexo`，那么你的仓库地址名称就应该是`easyhexo.github.io`
3.创建完成后记下该仓库的 HTTPS/SSH 地址 一般格式为`https://github.com/your_username/your_reponame.git` 在下一步会用到。

## 安装[部署插件](https://github.com/hexojs/hexo-deployer-git)

```shell 文件位置 你的 Hexo 站点目录
npm install hexo-deployer-git --save
npm install hexo-server --save
```

## 配置站点 _config.yml 文件

```yml
deploy:
  type: git   #类型填git
  repo: <repository url> #你的Github仓库地址
  branch: [branch]  #分支名称。默认填写 master 如果您使用的是 GitHub ，程序会尝试自动检测。
  message: [message] # 提交信息可以自定义，不填的话默认为提交时间
```

## 发布到 Github、

在你的Hexo站点根目录下，执行如下命令即可发布到GithubPage上。
>`hexo clean && hexo d -g`

## 自定义域名

Step1. 如果你拥有域名，请将你的域名解析指向以下IP地址中的任意一个

```shell
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

例如

|记录类型|主机记录|解析路线|记录值|MAX优先|时间|
| :-:|:-:|:-:|:-:|:-:|:-:|:-:|
|CNAME|@|默认|185.199.111.153|--|600|

Step2. 打开仓库设置,找到 GitHub Pages 项目，修改 Custom domain 选项的值为你的自定义域名（不带http等前缀）

Step3. 勾选 Custom domain 选项下的 Enforce HTTPS选项，开启 Https 服务。

# 部署到 Coding（dev.tencent.com）

部署到Coding的方法和部署到Github的方法类似，只不过域名解析指向你的coding page地址而已。同时Coding在国内的访问速度会比较快。

# 部署到 CentOS Servers

## 准备工作

- 确保你的 PC 已经安装好 Hexo 主程序的并且生成站点文件夹。安装 Hexo，请参阅[Hexo文档](https://hexo.io/zh-cn/docs/)
- 一台搭载CenOS 7.4 64bit的ECS服务器实例，其他Linux系统也可以
- 你至少应该掌握一丢丢的Linux命令

## 安装[部署插件](https://github.com/hexojs/hexo-deployer-git)

```shell 文件位置 你的 Hexo 站点目录
npm install hexo-deployer-git --save
npm install hexo-server --save
```

*更多内容请阅读[Hexo文档](https://hexo.io/zh-cn/docs/)*

## 服务器环境配置

### 更新服务器的软件包

>`yum -y update`

### 安装 Git

>`yum install git -y`

### 新建 Git 用户

>`useradd -m git`

设置 gituser 的密码
>`passwd git`

### 配置 SSH 免密登陆

我们在使用SSH访问服务器时每一次连接都需要验证相应用户的密码，十分繁琐，所以我们通过一组密匙来进行授权访问。
在`Git Bash`中使用`ssh-keygen`命令在你的电脑上生成一组密匙，这个过程中`ssh-keygen`会确认密钥的存储位置（Windows下默认是 `c:users/username/.ssh/id_rsa`），然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空。
>`ssh-keygen`

使用`ssh-copy-id -i`命令将公钥也就是`id_rsa.pub`添加到服务器上。这个过程中需要验证你所添加的用户的密码，如果你的服务器上存在多个用户，你需要逐一添加。添加完成后可以通过`ssh your_user_name@HostIP`命令来验证是否添加成功。

```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub your_user_name@HostIP  //添加公钥
ssh your_user_name@HostIP //验证是否添加成功
```

### 禁止git用户Shell登陆权限

出于安全考虑，禁用Git用户的 shell 权限(必须先验证是否可以免密码登陆，可以后再禁用 shell 权限，否则无法通过`ssh-copy-id -i`添加SSH公钥)，使用`vim /etc/passwd`命令修改passwa文件

```diff 文件位置 ~/etc/passwd
-  git:x:1001:1001:,,,:/home/git:/bin/bash
+  git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
```

### SSH 免密登陆无效问题排查

检查`/etc/ssh/sshd_config`文件，确认以下关键选项是否正常

```conf 文件位置 ~/etc/ssh/sshd_config
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

关于SSH的更多问题可查阅[这里](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-windows)

### 初始化 Git 仓库

新建`/var/repo`目录，并在该目录下，使用`git init --bare`创建一个名为`blog.git`裸仓库，并改变该目录的所有者为git用户。
>裸仓库可以直接作为服务器仓库供各开发者push、pull数据，实现数据共享和同步，不保存文件，只保存历史提交的版本信息。

```bash
mkdir -p /var/repo    //新建var/repo目录
cd /var/repo          //进入该目录
git init --bare blog.git   //新建一个裸仓库
chown -R git:git blog.git
```

### 配置 Git Hooks

使用vim命令在`/var/repo/blog.git/hooks`目录下创建`post-receive`文件
>`vim /var/repo/blog.git/hooks/post-receive`

并且写入以下内容

```sh 文件位置 ~/var/repo/blog.git/hooks/post-receive
#!/bin/sh
git --work-tree=/home/www/hexo --git-dir=/var/repo/blog.git checkout -f
```

提升`post-receive`的可执行权限
>`chmod +x /var/repo/blog.git/hooks/post-receive`

### 安装 Nginx

 >是一个高性能的HTTP和反向代理服务，也是一个IMAP/POP3/SMTP服务。外网用户访问服务器的 Web 服务由 Nginx 提供，Nginx 需要配置静态资源的路径信息才能通过 url 正确访问到服务器上的静态资源。

在安装之前我们先创建用于存放静态资源的目录`/home/www/hexo`，并更改其所有者，稍后将其设置为Nginx的默认静态资源目录。

```bash
mkdir -p /home/www/hexo      //创建目录
chown -R git:git /home/www/hexo   //更改目录所有者
yum install nginx -y   //安装Nginx
```

### 配置静态服务器访问路径

修改Nginx默认静态资源路径，打开 Nginx 的默认配置文件 `/etc/nginx/nginx.conf` ，将默认的`root /usr/share/nginx/html;`修改为: `root /home/www/hexo;` 如下所示。

```diff 文件位置 ~/etc/nginx/nginx.conf
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

如果你拥有`SSL,TSL`证书，需要配置`HTTPS`访问或者添加`HTTP`强制转换`HTTPS`访问功能，请参照以下代码进行配置。

```yml 文件位置 ~/etc/nginx/nginx.conf HTTPS访问
server {
        listen       80 default_server;
        listen       [::]:80 default_server;

        return 301 https://liujunzhou.cn$request_uri; # 使用301重定向
 }

# Settings for a TLS enabled server.

server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  liujunzhou.cn; #你的域名
        root         /home/www/hexo; #Nginx静态资源存放路径

        ssl_certificate "/etc/pki/tls/certs/CA.crt";
        ssl_certificate_key "/etc/pki/tls/certs/CA.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2; #按照这个协议配置
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;#按照这个套件配置
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

## 配置`_config.yml`文件

在`_config.yml`文件中设置deploy选项

```yml
# Deployment
deploy:
- type: git # 类型填git
  repo: your_user_name@HostIP:/var/repo/blog.git
  branch: master
  message:
```

### 发布站点

在你的Hexo站点根目录下，执行如下命令即可发布你的站点到服务器上。
>`$hexo clean && hexo d -g`

## 其他问题
### Hooks失效
如果部署成功，但是`/home/www/hexo`目录的资源文件并未更新，请检查`post-receive`是否有执行权限，以及`/home/www/hexo`文件所有者是否为git用户，以及是否具有读写权限。

```bash
chown -R git:git /var/repo/blog.git  //更改blog.git目录的所有者
chmod +x /var/repo/blog.git/hooks/post-receive   //提升post-receive执行权
chown -R git:git /home/www/hexo   //或者chmod 755 /home/www/hexo 确保hexo文件夹为空
```

### 部署后，部分页面404

部分情况下，在初次部署之后，部分文章或者页面路径大小如果更改了，会导致新部署上去的页面出现404错误。
这是由于GIT没有区分大小写导致的文件路径错误。修改`hexo根目录/.deploy_git/.git/config`文件

```diff 文件位置 hexo根目录/.deploy_git/.git/config
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = false
	symlinks = false
-	ignorecase = true
+       ignorecase = false
[branch "master"]
	remote = ueser_name@HostIP:/var/repo/blog.git
	merge = refs/heads/master
```

待补充，如果有问题，请给我[发邮件](mailto:liu.junzhou@hotmail.com)

本文由[MoshiYeap撰写](https://liujunzhou.cn),采用[知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-nd/4.0/)进行许可。

## 引用列表

- [Hexo 快速、简洁且高效的博客框架](https://hexo.io/zh-cn/)
- [hexo部署到centos服务器上](https://www.jianshu.com/p/59eeb1493a45)
- [Connecting to GitHub with SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
- [Markdown 语法说明 (简体中文版)](https://www.appinn.com/markdown/)
