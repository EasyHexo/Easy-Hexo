---
title: hexo-theme-next 5.x.x
---
# hexo-theme-next 5.x.x 

##  （一）安装NexT主题

1. 在博客根目录下执行`git clone https://github.com/theme-next/hexo-theme-next themes/next`并解压缩
2. 修改`_config.yaml`文件中的`theme`属性，默认是`landscape`，修改为`next`：  

```
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next                          #注意：“theme:”后要带一个空格
```

---

##  （二）演示

* [DragonBaby308's Blog](http://www.dragonbaby308.com/)

---

##  （三）对NexT进行魔改

###  Scheme主题选择  

在`theme/_config.yaml`文件中的`scheme`目录下选择自己喜欢的主题即可。    
**Muse** 是NexT的默认版本，黑白主调，大量留白。  
![Muse](https://tva1.sinaimg.cn/large/007rAy9hgy1g3b7cx1gfpj31k40rkgoh.jpg)   

**Mist** 是NexT的紧凑版本，整洁有序。  
![Mist](https://tva1.sinaimg.cn/large/007rAy9hgy1g3b786c1l6j31k40t9wid.jpg)  

**Pisces** 是双栏设计，头像、签名等被移到左边单独作为一栏，个人最喜欢。  
![Pisces](https://tva1.sinaimg.cn/large/007rAy9hgy1g3b7fimlnyj31k40rk43k.jpg)  

---

###  文内链接形式  

未修改时，文内链接颜色和普通文本没有区别：  
![link origin](https://tva1.sinaimg.cn/large/007rAy9hgy1g3dn9jt9tcj30ey053a9v.jpg)  
为了突出区别性，我们在`themes/next/source/css/_common/components/post/post.styl`文件中添加下列的代码：

```css
  .post-body p a {
    color: #0593d3;
    border-bottom: none;
    border-bottom: 1px solid #0593d3;
    &:hover {
      color: #fc6423;
      border-bottom: none;
      border-bottom: 1px solid #fc6423;
    }
  }
```

修改后的文内链接是蓝色，鼠标放上去会变为红色：  
![link new](https://tva1.sinaimg.cn/large/007rAy9hgy1g3dndvv50nj30e305sdfn.jpg)  

---

###  菜单设置

在`theme/_config.yaml`文件中的`menu`目录下：`home`属性代表主页，`about`属性代表个人信息，`tags`属性代表标签，`categories`属性代表目录，`archives`属性代表归档……
通过修改对应的属性，可以修改页面的展示信息，即左侧的菜单栏：  
![menu](https://tva1.sinaimg.cn/large/007rAy9hgy1g3b8ap7opaj309o0lo3z5.jpg)    

---

###  网站图标设置

将图片（png或jpg格式，不是favicon.ico）放在`themes/next/source/images`里，然后修改主题配置文件`theme/_config.yaml`的`favicon`属性，将`small`、`medium`和`apple_touch_icon`都配置为`/images/imgPath`就可以了，其他字段都注释掉。  

```yaml
favicon:
  small: /images/db3.png
  medium: /images/db3.png
  apple_touch_icon: /images/db3.png
```

---

###  启用RSS订阅博客更新

> 什么是RSS？  
RSS(Really Simple Syndication，简易信息聚合)是一种描述和同步网站内容的格式，是使用最广泛的XML应用。RSS搭建了信息迅速传播的一个技术平台，使得每个人都成为潜在的信息提供者。发布一个RSS文件后，这个RSS Feed中包含的信息就能直接被其他站点调用，而且由于这些数据都是标准的XML格式，所以也能在其他的终端和服务中使用，是一种描述和同步网站内容的格式。  
RSS目前广泛用于网上新闻频道，blog和wiki，主要的版本有0.91, 1.0, 2.0。使用RSS订阅能更快地获取信息，网站提供RSS输出，有利于让用户获取网站内容的最新更新。网络用户可以在客户端借助于支持RSS的聚合工具软件，在不打开网站内容页面的情况下阅读支持RSS输出的网站内容。  


1. 安装`hexo-generator-feed`插件  
`npm install hexo-generator-feed --save`  

2. 在站点的配置文件`_config.yaml`文件中配置RSS feed  
在`_config.yaml`文件末尾添加：

```yaml
 feed:  
 type: atom  
 path: atom.xml  
 limit: 0  

 plugins:
   - hexo-generator-feed
  ```

3.  修改主题配置文件`theme/_config.yaml`的rss属性为：`rss: /atom.xml`  

4.  使用RSS  

运行`hexo g`，如果提示`INFO  Generated: atom.xml`，且在`Hexo/public/`目录下生成了`atom.xml`文件，则说明RSS设置成功。   
运行`hexo d`，如果服务器对应的目录`hexo`下也有了`atom.xml`文件，则说明部署也成功了。    
这样你的博客就可以被别人订阅了，点击主页的RSS按钮，会显示如下页面：  
![RSS](https://tva1.sinaimg.cn/large/007rAy9hgy1g3dj6qc852j31k40t9jy9.jpg)  
iOS可以在App Store搜索SSReader，下载后配置`www.dragonbaby308.com/atom.xml`即可。

---

###  打赏  

在`theme/_config.yaml`文件中的`Reward(Donate)`目录下，传入打赏图片，可以展示打赏信息：  
```yaml
  # Reward (Donate)
  reward_settings:
    enable: true
    animation: true
    comment: 没办法，要恰饭的嘛
  reward:
    wechatpay: https://tva1.sinaimg.cn/large/007rAy9hgy1g3b8vqnvnrj30u014q0w6.jpg
    alipay: https://tva1.sinaimg.cn/large/007rAy9hgy1g3b8wjrpzgj30p011iaco.jpg
```

---

###  首页文章折叠

将`theme/_config.yaml`文件`auto_excerpt`目录下的`enable`改为true即可。    
![auto_excerpt](https://tva1.sinaimg.cn/large/007rAy9hgy1g3b9szshqnj31k40t9jv2.jpg)  

---

###  回到顶部按钮显示百分比

```yaml
back2top:
  # 回到顶部按钮
  enable: true
  # true，按钮显示在侧边栏；false，按钮显示在右下角
  sidebar: false
  # 按钮上显示百分比
  scrollpercent: true
```

如图：  
![back2top](https://tva1.sinaimg.cn/large/007rAy9hgy1g3j9ct6oyhj305z07eaa9.jpg)

---

###  文章添加阴影

未添加阴影时，文章之间的分隔不是很明显：  
![no shadow](https://tva1.sinaimg.cn/large/007rAy9hgy1g3emm5omevj30u80hdwei.jpg)  
在`themes/next/source/css/_custom/custom.styl`文件中添加如下代码：  
```css
// Custom styles.
// 为文章添加阴影效果
.post {
   margin-top: 60px;
   margin-bottom: 60px;
   padding: 25px;
   -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
   -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
}
```

效果如图：  
![shadow](https://tva1.sinaimg.cn/large/007rAy9hgy1g3emnnvrjzj30yz0kzq34.jpg)

---

###  头像

修改`theme/_config.yaml`文件下的`avatar`属性，可以使用本地图片，或是在`avatar: url:`属性中传入网络图片。  

---

###  社交链接

修改`theme/_config.yaml`文件下的`social`属性，按照格式设置即可：
```yaml
  social:
    GitHub: https://github.com/DragonBaby308 || github
    Bilibili: https://space.bilibili.com/24837083 || bilibili
```

---

###  友情链接

修改`theme/_config.yaml`文件下的`links`属性，按照格式设置即可：
```yaml
links:
  让我帮你百度一下: http://lab.mkblog.cn/lmbtfy/
```

---

###  Local Search本地搜索

1.  首先，安装`hexo-generator-searchdb`，在根目录下执行：  
`npm install -g hexo-generator-searchdb --save`  

2.  在站点配置文件`_config.yaml`中添加如下内容：  
```yaml
search:
  path: ./public/search.xml
  field: post
  format: html
  limit: 10000
```

3.  将主题配置文件`theme/_config.yaml`文件中`local_search`标签下的`enable`改为true。
![Local Search](https://tva1.sinaimg.cn/large/007rAy9hgy1g3dlfi7k19j31k40rkgs1.jpg)  

---

###  不蒜子统计UV（访客数）和PV（访问量）

将主题配置文件`theme/_config.yaml`文件中`busuanzi_count`标签下的`enable`改为true。配置如下：  
```yaml
busuanzi_count:
  enable: true
  # 访客数
  site_uv: true
  # 访问量
  site_pv: true
  # 文章阅读次数
  page_pv: true
```

---

###  动态背景  

首先将动态背景所需要依赖的js下载到`themes/next/source/lib`目录下，然后将主题配置文件`theme/_config.yaml`文件中`canvas`标签下的对应特效改为true即可启用。
如，我需要使用`Canvas-nest`动画，则需要首先`git clone https://github.com/theme-next/theme-next-canvas-nest Hexo/themes/next/source/lib/canvas-nest`，将js下载到本地，然后再修改主题配置文件`theme/_config.yaml`文件中`canvas_nest`标签下的`enable`为true。

```git
# canvas-nest  鼠标静止不动，会有线条聚集
git clone https://github.com/theme-next/theme-next-canvas-nest Hexo/themes/next/source/lib/canvas-next

# three_waves  波浪
# canvas_lines
# canvas_sphere
git clone https://github.com/theme-next/theme-next-three Hexo/themes/next/source/lib/next-three

# canvas-ribbon  彩虹效果，只支持Pisces
git clone https://github.com/theme-next/theme-next-canvas-ribbon Hexo/themes/next/source/lib/canvas-ribbon

canvas_nest:
  enable: true
  onmobile: true # display on mobile or not
  color: "0,0,255" # RGB values, use ',' to separate
  opacity: 0.5 # the opacity of line: 0~1
  zIndex: -1 # z-index property of the background
  count: 99 # the number of lines

three_waves: true
canvas_lines: true
canvas_sphere: true

canvas_ribbon:
  enable: true
  size: 300
  alpha: 0.6
  zIndex: -1
```

---

###  加载条效果

首先通过`git clone https://github.com/theme-next/theme-next-pace Hexo/themes/next/source/lib/page`命令，将加载条所需要依赖的js下载到`Hexo/themes/next/source/lib`目录下，然后将主题配置文件`theme/_config.yaml`文件中`pace`标签改为true，在`pace_theme`中选用对应主题即可启用。  

```yaml
pace: true
# pace_theme: pace-theme-big-counter  右上角百分比数字
# pace_theme: pace-theme-bounce  右上角弹球
# pace_theme: pace-theme-barber-shop  理发店蓝白加载条，从左滑到右
# pace_theme: pace-theme-center-atom  屏幕正中，原子样式的圆形加载条
# pace_theme: pace-theme-center-circle  屏幕正中，圆形转圈加载条
# pace_theme: pace-theme-center-radar  屏幕正中，雷达形状
# pace_theme: pace-theme-center-simple  屏幕正中，进度条
# pace_theme: pace-theme-corner-indicator  右上角转圈
# pace_theme: pace-theme-fill-left  从左到右
# pace_theme: pace-theme-flash  右上角有一个小圈圈，其他特效没看出来
# 屏幕正中间进度条
pace_theme: pace-theme-loading-bar  
# pace_theme: pace-theme-mac-osx  斑马纹？
# pace_theme: pace-theme-minimal  啥也没有
```

---

###  本文结束标记

在`themes/next/layout/_macro`目录下新建`passage-end-tag.swig`文件，添加以下代码：  

```css
<div>
    {% if not is_index %}
        <div style="text-align:center;color: #ccc;font-size:14px;">-------------本文结束<i class="fa fa-paw"></i>感谢您的阅读-------------</div>
    {% endif %}
</div>
```

接着在`themes/next/layout/_macro/post.swig`文件中，`post-body`后，添加如下代码：  

```css
<div>
  {% if not is_index %}
    {% include 'passage-end-tag.swig' %}
  {% endif %}
</div>
```

最后在`theme/_config.yaml`文件末尾添加：  

```yaml
# 文章末尾添加“本文结束”标记
passage_end_tag:
  enabled: true
```

效果如图：  
![pageend](https://tva1.sinaimg.cn/large/007rAy9hgy1g3dsko99qvj30tg07r0t9.jpg)

---

###  版权声明

1.  在`theme/next/layout/_macro/`目录下添加文件`my-copyright.swig`
```css
{% if page.copyright %}
<div class="my_post_copyright">
  <script src="//cdn.bootcss.com/clipboard.js/1.5.10/clipboard.min.js"></script>

  <!-- JS库 sweetalert 可修改路径 -->
  <script src="https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <p><span>本文标题:</span><a href="{{ url_for(page.path) }}">{{ page.title }}</a></p>
  <p><span>文章作者:</span><a href="/" title="访问 {{ theme.author }} 的个人博客">{{ theme.author }}</a></p>
  <p><span>发布时间:</span>{{ page.date.format("YYYY年MM月DD日 - HH:mm") }}</p>
  <p><span>最后更新:</span>{{ page.updated.format("YYYY年MM月DD日 - HH:mm") }}</p>
  <p><span>原始链接:</span><a href="{{ url_for(page.path) }}" title="{{ page.title }}">{{ page.permalink }}</a>
    <span class="copy-path"  title="点击复制文章链接"><i class="fa fa-clipboard" data-clipboard-text="{{ page.permalink }}"  aria-label="复制成功！"></i></span>
  </p>
  <p><span>许可协议:</span><i class="fa fa-creative-commons"></i> <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" title="Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)">署名-非商业性使用-禁止演绎 4.0 国际</a> 转载请保留原文链接及作者。</p>  
</div>
<script>
    var clipboard = new Clipboard('.fa-clipboard');
      $(".fa-clipboard").click(function(){
      clipboard.on('success', function(){
        swal({   
          title: "",   
          text: '复制成功',
          icon: "success",
          showConfirmButton: true
          });
        });
    });  
</script>
{% endif %}
```

2.  在`theme/next/source/css/_common/components/post/`目录下添加文件`my-post-copyright.styl`
```css
.my_post_copyright {
  width: 85%;
  max-width: 45em;
  margin: 2.8em auto 0;
  padding: 0.5em 1.0em;
  border: 1px solid #d3d3d3;
  font-size: 0.93rem;
  line-height: 1.6em;
  word-break: break-all;
  background: rgba(255,255,255,0.4);
}
.my_post_copyright p{margin:0;}
.my_post_copyright span {
  display: inline-block;
  width: 5.2em;
  color: #b5b5b5;
  font-weight: bold;
}
.my_post_copyright .raw {
  margin-left: 1em;
  width: 5em;
}
.my_post_copyright a {
  color: #808080;
  border-bottom:0;
}
.my_post_copyright a:hover {
  color: #a3d2a3;
  text-decoration: underline;
}
.my_post_copyright:hover .fa-clipboard {
  color: #000;
}
.my_post_copyright .post-url:hover {
  font-weight: normal;
}
.my_post_copyright .copy-path {
  margin-left: 1em;
  width: 1em;
  +mobile(){display:none;}
}
.my_post_copyright .copy-path:hover {
  color: #808080;
  cursor: pointer;
}
```

3.  修改`theme/next/layout/_macro/post.swig`文件
```css
{#####################}
{### END POST BODY ###}
{#####################}

  # 添加下面这段
{% if not is_index %}
  {% include 'my-copyright.swig' %}
{% endif %}

{% if theme.wechat_subscriber.enable and not is_index %}
  {% include '../_partials/post/wechat-subscriber.swig' %}
{% endif %}
```

4.  修改`theme/next/source/css/_common/components/post/post.styl`文件，在最后一行新增：`@import "my-post-copyright";`

5.  修改`Hexo/scaffolds/post.md`，默认显示版权信息
```yaml
---
title: {{ title }}
date: {{ date }}
tags:
categories:
copyright:
---
```

效果如图：  
![copyright](https://tva1.sinaimg.cn/large/007rAy9hgy1g3dt2a4xnzj30r60caq3u.jpg)

---

###  Live2d 看板娘

1.  安装hexo-helper-live2d

在博客根目录下，执行`npm install hexo-helper-live2d --save`

2.  修改站点配置文件或主题配置文件

官方已有的看板娘名称请点[这里](https://github.com/xiazeyu/live2d-widget-models)查看，部分看板娘的模型预览请看[CSDN某博客](https://blog.csdn.net/wang_123_zy/article/details/87181892)。  
我修改的是站点配置文件`Hexo/_config.yaml`，添加如下代码：
```yaml
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  model:
    # 填写你所需要的看板娘名称
    use: live2d-widget-model-haruto
  display:
    position: right
    width: 150
    height: 300
  mobile:
    show: true
```

3.  通过npm安装依赖的看板娘文件

`npm install live2d-widget-model-name`，其中`name`是你选择的官方看板娘的名字，如我选择的是`haruto`，则为`npm install live2d-widget-model-haruto`。  
重新运行`hexo clean && hexo d -g`则可在主页看到了。  
![haruto](https://tva1.sinaimg.cn/large/007rAy9hgy1g3en4cn6o1g31h20prqv5.jpg)

---

###  fancybox：图片显示

```
cd Hexo/themes/next/source/lib
git clone https://github.com/theme-next/theme-next-fancybox3 fancybox
```

在`next/_config.yml`中搜索`fancybox`，将`false`改为`true`。  

![fb](https://tva2.sinaimg.cn/large/007DFXDhgy1g58ziz34vwg31h20prnpe.gif)

---

###  添加背景图片

* 首先参考[https://www.cnblogs.com/Mayfly-nymph/p/10622307.html](https://www.cnblogs.com/Mayfly-nymph/p/10622307.html)将背景设置为半透明，方便显示背景图片；
* 在`themes\next\source\css \ _custom\custom.styl`中添加：

```styl
//为文章添加背景图片
@media screen and (min-width:1200px) {
    body {
    background-image:url(https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/backgroud.jpg);
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-position:50% 50%; 
    }
    #footer a {
        color:#eee;
    }
}
```

> ![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/backgroundImg.png)  

---

###  友情链接

1. `hexo new page links`，会生成`source/links`目录
2. 在`themes/_config.yml`中的`menu`属性下添加：

```yml
# links是目录名，/links/是目录名，link是fontawesome的图标名称
links: /links/ || link
```

3. 在`themes/languages/zh-CN`中的`menu`属性下添加：

```yml
# 改属性用于翻译，将links翻译成友链
links: 友链
```

4. 修改`source/links/index.md`：

```md
---
title: 友情链接
date: 2019-09-27 20:23:59
author: DragonBaby308
type: links
comment: false
---

欢迎交换友链！
```

5. `/theme/next/layout`目录下，新建`links.swig`：

```swig
{% block content %}
  {######################}
  {### LINKS BLOCK ###}
  {######################}
  
    <div id="links">
        <style>
            .links-content{
                margin-top:1rem;
            }
            
            .link-navigation::after {
                content: " ";
                display: block;
                clear: both;
            }
            
            .card {
                width: 300px;
                font-size: 1rem;
                padding: 10px 20px;
                border-radius: 4px;
                transition-duration: 0.15s;
                margin-bottom: 1rem;
                display:flex;
            }
            .card:nth-child(odd) {
                float: left;
            }
            .card:nth-child(even) {
                float: right;
            }
            .card:hover {
                transform: scale(1.1);
                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
            }
            .card a {
                border:none; 
            }
            .card .ava {
                width: 3rem!important;
                height: 3rem!important;
                margin:0!important;
                margin-right: 1em!important;
                border-radius:4px;
                
            }
            .card .card-header {
                font-style: italic;
                overflow: hidden;
                width: 236px;
            }
            .card .card-header a {
                font-style: normal;
                color: #2bbc8a;
                font-weight: bold;
                text-decoration: none;
            }
            .card .card-header a:hover {
                color: #d480aa;
                text-decoration: none;
            }
            .card .card-header .info {
                font-style:normal;
                color:#a3a3a3;
                font-size:14px;
                min-width: 0;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        </style>
        <div class="links-content">
            <div class="link-navigation">

                {% for link in theme.mylinks %}
                
                    <div class="card">
                        <img class="ava" src="{{ link.avatar }}"/>
                        <div class="card-header">
                        <div><a href="{{ link.site }}" target="_blank">@ {{ link.nickname }}</a></div>
                        <div class="info">{{ link.info }}</div>
                        </div>
                    </div>
                
                {% endfor %}

            </div>
            {{ page.content }}
            </div>
        </div>
  
  {##########################}
  {### END LINKS BLOCK ###}
  {##########################}
{% endblock %}
```

6. 修改`/themes/next/layout/page.swig`：

```swig
# 找到：#}{{ __('title.schedule') + page_title_suffix }}{# 这一段代码，在后面加
#}{% elif page.type === 'links' and not page.title %}{#
    #}{{ __('title.links') + page_title_suffix }}{#

# 找到：{% include 'schedule.swig' %} 这一段代码，在后面加
{% elif page.type === 'links' %}
  {% include 'links.swig' %}
```

7. 在`/themes/_config.yml`中添加友链：

```yml
mylinks:
  - nickname: DragonBaby's Blog  #友链名称
    avatar: https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/db3.png  #友链头像
    site: http://www.dragonbaby308.com/  #友链地址
    info: 苏宁不破产不改网名。  #友链说明
  - nickname: 青果先生  #友链名称
    avatar: https://raw.githubusercontent.com/wugenqiang/picGo/master/pictures/003.jpg  #友链头像
    site: https://blog.enjoytoshare.club  #友链地址
    info: Sometimes your whole life boils down to one insame move.  #友链说明
```

---

###  在线联系：DaoVoice

1. [http://www.daovoice.io/](http://www.daovoice.io/)注册，如果没有邀请码，可以填我的：`b3d33e2b`。注册成功后记住自己的appid
> 如果想及时回复可以绑定微信：  
![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/daovoice-wx.png)

2. `themes/next/layout/_partials/head/head.swig`中找个位置添加：

```swig
{% if theme.daovoice %}
  <script>
  (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/0f81ff2f.js","daovoice")
  daovoice('init', {
      app_id: "{{theme.daovoice_app_id}}"
    });
  daovoice('update');
  </script>
{% endif %}
```

3. `themes/_config.yml`中添加：

```yml

# DaoVoice
daovoice: true
daovoice_app_id: #你的app_id
```

4. 接下来你留言，我微信就能收到啦

![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/daovoice.png)

---

###  修改正文区域的宽度

在`themes/next/source/_variables/custom.styl`中添加：

```styl
// 修改成你期望的宽度
$content-desktop = 700px
// 当视窗超过 1600px 后的宽度
$content-desktop-large = 1050px
```

---

###  改图标

![#](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/tag-before.png)

在`themes/next/layout/_macro/post.swig`中搜索`rel="tag">`，将`#`修改为`<i class="fa fa-envira"></i>`。  
效果如下图：  
![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/tag-after.png)

---

###  去掉顶部黑线

* 在`themes\next\source\css\_custom\custom.styl`中添加：

```styl
//去除顶部黑线
.headband {display:none;}
```

---

###  点击头像返回主页

* `themes\next\layout\_macro\sidebar.swig`修改：

```swig
# 找到img class="site-author-image"标签，在其外部添加<a href="/"></a>

<a href="/">
  <img class="site-author-image" itemprop="image"
  src="{{ url_for( theme.avatar.url | default(theme.images + '/avatar.gif') ) }}"
  alt="{{ author }}"/>
</a>
```

---

###  3-D标签云

* `npm install hexo-tag-cloud@^2.* --save`
* `next/layout/_macro/sidebar.swig`修改：

```swig
# 找到aside标签，在上方添加：

      {% if site.tags.length > 1 %}
        <script type="text/javascript" charset="utf-8" src="/js/tagcloud.js"></script>
        <script type="text/javascript" charset="utf-8" src="/js/tagcanvas.js"></script>
        <div class="widget-wrap">
            <div id="myCanvasContainer" class="widget tagcloud">
                <canvas width="250" height="250" id="resCanvas" style="width=100%">
                    {{ list_tags() }}
                </canvas>
            </div>
        </div>
      {% endif %}

#    </div>
#  </aside>
```

* 效果如图：![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/3d-tags.gif)

---

###  设置文章封面图片

* `\themes\next\layout\_macro\post.swig`中加以下代码：

```swig
# {% if is_index %}标签后
      
{% if post.summary_img  %}
  <div class="out-img-topic">
    <img src={{ post.summary_img }} class="img-topic">
  </div>
{% endif %}

# {% if post.description and theme.excerpt_description %}标签前
```

* 在帖子头部加`summary_img: url`，即可显示文章封面图片

![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/titlepic.png)

---

###  目录全展开

* 默认情况`NexT`主题的目录是不展开的：  
![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/toc1.png)

* 在`next/_config.yml`中搜索`toc`，将`expand_all`属性从`false`改为`true`：
![](https://dragonbaby308.oss-cn-hangzhou.aliyuncs.com/hexo/toc2.png)

* 将`number`从`true`改为`false`，可以去掉默认编号，使用自己设置的编号。

---

###  文章置顶

> 见[https://blog.csdn.net/qwerty200696/article/details/79010629](https://blog.csdn.net/qwerty200696/article/details/79010629)

---

###  `gulp`：静态资源压缩，加速部署

> `Hexo`魔改到一定程度后，加上帖子多了，感觉每次部署都得几分钟，打开网页也变慢了，所以通过`gulp`对静态资源进行压缩。

1. 通过`npm`安装`gulp`：

```npm
npm install gulp -g --unsafe-perm
npm install gulp-htmlclean gulp-htmlmin gulp-minify-css gulp-uglify gulp-imagemin --save
```

2. `Hexo`根目录下新建`gulpfile.js`文件：

```js
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩html
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// 压缩css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 压缩js
gulp.task('minify-js', function() {
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 压缩图片
gulp.task('minify-images', function() {
    return gulp.src('./public/images/**/*.*')
        .pipe(imagemin(
        [imagemin.gifsicle({'optimizationLevel': 3}),
        imagemin.jpegtran({'progressive': true}),
        imagemin.optipng({'optimizationLevel': 7}),
        imagemin.svgo()],
        {'verbose': true}))
        .pipe(gulp.dest('./public/images'))
});
// 默认任务
gulp.task('default', gulp.parallel(
    'minify-html','minify-css','minify-js','minify-images'
));
```

3. 以后部署的时候通过`hexo clean && hexo g & gulp & hexo d`就会根据`gulpfile.js`中的配置，对`/public`目录中的静态资源文件进行压缩。
