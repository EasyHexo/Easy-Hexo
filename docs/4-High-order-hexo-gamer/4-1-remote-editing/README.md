---
title: 让你的 Hexo 博客支持远程编辑
---

# 让你的 Hexo 博客支持远程编辑 <Badge text="@17shou_VIP"/> <Badge text="Finish"/>

> 本文由[作者](https://www.17shou.vip/)从[个人博客](https://www.17shou.vip/让你的Hexo博客支持远程编辑/)和[洛谷日报](https://www.luogu.org/blog/AC-WA-RE-TLE-MLE/rang-ni-di-hexo-bo-ke-zhi-chi-yuan-cheng-bian-ji)中整理发表。

## 优缺点

请先看看这种方法的优缺点再决定是否进行教程：

优点：

1. 能实现远程编辑。
2. 能让网站访问速度更快，因为部署在自己的服务器上。

缺点：

1. 需要一个服务器，我推荐阿里云的轻量级学生机（114 元/年）
2. 需要域名备案，需要成年人进行办理，审核时间在 7 天左右。
3. 控制台页面可能对某些人来说有点丑。
   ![1PNG](@img/4/4-1/1.png)
4. 安装过程可能有点复杂。

在这一功能方面，可能 Wordpress​ 和 Typecho​ 能做的更好，但它们也一样需要服务器和域名备案。如果您认为不想再去重新搞个 Wordpress​ 或者 ​Typecho​ ，又想实现远程编辑这一功能的话，就可以进行这篇教程了！

------

## 教程使用

防止有些人根据自己情况要填的东西直接 Copy​ 命令，忘记修改了，我会在需要自己填的地方打上 `【】` 。比如一个地方要填密码，我会写 `【密码】` ，**记得自己进行替换**。

## 初步准备

1. 现在第一步要做的事就是购买服务器了，如果已有服务器可以跳过。在这里，我推荐阿里云云翼计划的学生机（[购买地址](https://promotion.aliyun.com/ntms/act/campus2018.html)），我建议用轻量级的，因为有 5M 带宽、1000GB 的流量。你大可以不用担心不够用，我用了两个月连 1GB 都没有用完。

![云翼计划.PNG](@img/4/4-1/2.png)

   记得在预装环境那里选择 `Ubuntu 16.04 64位` ，当然 `CentOS` 理论上也可以，但是我没有试过。

2. 现在先设置一下服务器的连接密码，在阿里云的控制台中按照下图进行操作：

![服务器密码设置.PNG](@img/4/4-1/3.png)

3. 现在下载服务器的命令行工具 `Xshell` 和 `Xftp​` ，去百度一下官网，然后官网有个人免费版本下载（[链接](https://www.netsarang.com/zh/free-for-home-school/)），输入邮箱，然后会把软件下载链接邮箱发给你，或者你直接在什么软件助手下也可以，不过可能不是最新的。

   现在开始连接服务器，安装完两个软件，先打开 `Xshell​` ，新建会话：

![新建会话.PNG](@img/4/4-1/4.png)

   然后写上服务器公网 `IP​` ，输上密码，设置连接失败自动重连（因为我们会重启服务器）：

![设置会话IP.PNG](@img/4/4-1/5.png)

![设置会话密码.PNG](@img/4/4-1/6.png)

没有问题的话，应该就可以连上去了。如果连不上去，在控制台检查一下服务器的防火墙设置，看看 `22` 端口有没有打开，如果没有，就把 `80 443 4000 22 8888` 端口一起打开。

## 二、配置服务器环境

### 宝塔版

1. 首先安装**宝塔控制面板**，可能要几分钟时间：

```shell
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

2. 在命令行上应该出现了 3 行控制面板进入入口和账号密码，用这个在浏览器打开控制面板（如果无法访问，请检查在服务器运营商的控制台的防火墙中有没有开放 `8888` 端口）
3. 进入面板后应该会让你安装一键包，直接安装即可，安装完在`软件商店`里面安装 `Nodejs` 

![宝塔一键包.jpg](@img/4/4-1/7.jpg)

4. 打开 `Xshell` ，安装 `Nodejs` 和 `Git​` ，这两个东西不在一键包里面：

```shell
sudo apt-get install git
sudo apt-get install nodejs
sudo apt install nodejs-legacy
```

5. 安装 `Hexo​` ：

```shell
npm install -g hexo
npm install hexo-server --save
```

6. 根据自己个人喜好，调整一下面板的名字、接入接口、用户名、密码等。

![面板常规设置.png](@img/4/4-1/8.png)

7. 在宝塔的安全中开放端口：`80 443 4000 22 8888`

------

### 非宝塔版

- 现在的服务器应该是很纯净的，需要安装一些普通的东西，如 `nginx` ， `git` 还有 `hexo​` 等。

1. 安装 `Git​` ：

   ```shell
   sudo apt-get install git
   ```

2. 安装 `Nodejs​` ：

   ```shell
   sudo apt-get install nodejs
   sudo apt install nodejs-legacy
   sudo apt install npm
   ```

3. 安装 `Nginx​` ：

   ```shell
   sudo apt-get install nginx
   ```

4. 安装 `Hexo​` ：

   ```shell
   npm install -g hexo
   npm install hexo-server --save
   ```

5. 设置开机自启：因为我忘了，所以请自行上网查找资料。

------

## 三、在本地安装 Hexo-admin

1. 在**本地**的 `hexo​` 文件夹中 `Git Bash` 。

   输入如下命令（**现在是本地端**），安装 `Hexo-admin​` ：

   ```shell
   npm install --save hexo-admin
   ```

2. 现在开始配置 `Hexo-admin​` ：

   打开本地 `server​` ：

   ```shell
   hexo s
   ```

   在浏览器中打开 `http://localhost:4000/admin` 

![Hexo-admin.PNG](@img/4/4-1/9.png)

   现在应该可以看到 `Hexo-admin​` 的界面了，应该不需要输入用户名和密码的。所以说现在要设密码，在 `Settings` 中打开 `Setup authentification here` ：

![Hexo-admin设置密码.PNG](@img/4/4-1/10.png)

   然后填写用户名和密码：

![hexo-admin配置代码.PNG](@img/4/4-1/11.png)

   现在复制下面生成的代码，复制到 `hexo` 根目录下的 `_config.yml` 中，直接放在最下面即可。

   把上面的代码复制后还要再加一段，这是后面要设置一键部署脚本的路径，记得与上面保持代码缩进！

```yaml
   deployCommand: './Script/Depoly.sh'
```

![_config粘贴代码.PNG](@img/4/4-1/12.png)

   然后保存。

3. 现在点击 `Xshell` 上方工具栏打开 `Xftp` ，把自己的整个 `hexo` 文件夹上传到服务器 `\usr\local` 目录，把 `hexo​` 文件夹名字改为 `Blog` 。（目录和名字可以自己随便改，但是一定要保证后面的文件路径不要填错）

4. 在自己的服务器上安装 `Hexo-admin​` ：

   ```shell
   cd /usr/local/Blog
   npm install --save hexo-admin
   ```

5. 现在是比较关键的一步了！为了让你们方便，我直接写几段代码，自己复制即可，记得分开复制。

   先进入 `Blog` ​文件夹，新建文件夹，创建一键部署脚本：

   ```shell
   cd /usr/local/Blog
   mkdir Script
   nano Depoly.sh
   ```

   编辑脚本：

   ```shell
   #!/usr/bin/env sh
   hexo g
   【hexo d】
   ```

   PS：这里不用 `hexo clean` ，然后根据自己需要，添加 `hexo d` 。如果先 `hexo clean` 了一遍后，在进行 `hexo g` 的过程中将无法访问网站，因为 `public` 目录已经被请了。关于 `【hexo d】` ，虽然我们已经使用了自己的服务器，不再使用 Github 了，但是鉴于有些读者会使用诸如 `baidu-url-submitter` 之类基于 `hexo d` 的插件，所以在这里给大家提示一下。

    `Ctrl+X` 退出编辑。

   设置可执行权限：

   ```shell
   chmod +x Depoly.sh
   ```

6. 然后设置 `hexo s` 开机自启：

   找到 `Ubuntu` 的系统自启文件 `rc.local` ：

   ```shell
   cd /etc/rc.local
   nano rc.local
   ```

   复制代码：

   ```shell
   #!/bin/sh -e
   /MyScript/hexo-sever.sh
   exit 0
   
   ```

    `Ctrl+X` 退出。

   在写一个自己的启动脚本：

   ```shell
   cd /
   mkdir MyScript
   cd MyScript
   nano hexo-sever.sh
   
   ```

   ```shell
   #!/bin/bash
   cd /usr/local/Blog
   hexo s
   
   
   ```

   `Ctrl+X` 退出。

   设置可执行权限：

   ```shell
   chmod +x hexo-sever.sh
   
   ```

7. 现在重启一下服务器，在浏览器输入 `http://【服务器公网IP】:4000/admin` ，如果能上去，就说明成功了。

------

## 四、使用 `Nginx​` 代理

- 为什么要使用 `Nginx`​ 来代理呢？直接用 `hexo s` 不就可以了吗？但是 `hexo s` 的服务效率太低了。

### 宝塔版

1. 打开宝塔面板，在左侧点击网站，添加网站
2. 如图进行配置：

![Nginx添加网站.PNG](@img/4/4-1/13.png)

3. 在进行一些其他的配置：

![SSL证书.PNG](@img/4/4-1/14.png)

4. 在你的域名运营商那里设置 DNS​ 解析：

![DNS解析.PNG](@img/4/4-1/15.png)

5. 输入域名，没有问题的话应该可以访问了！！

![没有问题.PNG](@img/4/4-1/16.png)

### 非宝塔版

- http ：

  ```shell
      server {
          listen 80;
          server_name www.17shou.vip 17shou.vip;
          root /usr/local/Blog/public;
          location / {
                  index  index.html index.htm;
          }
      }
  
  ```

- SSL ​+ 强制 https ：

  ```shell
  	server {
              listen 443;
              server_name www.17shou.vip 17shou.vip;
              ssl on;
              index index.html index.htm;
              # 这里是证书的pem和key文件的目录，根据自己的修改！！
              ssl_certificate   cert/www.17shou.vip.pem;
              ssl_certificate_key  cert/www.17shou.vip.key;
              ssl_session_timeout 5m;
              ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
              ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
              ssl_prefer_server_ciphers on;
              root /usr/local/Blog/public;
              location / {
                  index index.html index.htm;
              }
         }
  	server {  
  		# 因为https是443端口，所以80端口的任务就是跳到443端口去
      	listen  80;  
      	server_name www.17shou.vip 17shou.vip;  
      	rewrite ^(.*)$  https://$host$1 permanent;
  	}  
  
  ```

## Q&A

### Q：为什么我不能访问 `hexo-admin` ？

### A：可能因为你没开放 4000 端口，宝塔和服务器运营商那里都要开放端口。

### Q：为什么我不能使用域名访问？？

### A：如果端口没有任何问题的话，可能是备案问题，按照服务器运营商的操作去备案，个人认为阿里云是最方便的，自己扫一遍脸，写个备案单就可以了，所以刚开始我建议阿里云。


## 参考资料

