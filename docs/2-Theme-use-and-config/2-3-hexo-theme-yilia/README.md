---
title: Hexo-theme-yilia
---

2018-10-27日更新，未完成

# Hexo-theme-yilia

Hexo-Yilia是一个优秀的Hexo主题，由[@Litten](https://litten.me/)开发，受到了广大Hexo使用者的欢迎。  
说它优秀有以下几个原因：  
- [x]优秀的加载速度
- [x]优秀的双栏设计
- [x]优秀的智能菜单
- [x]优秀的简约画面   

这样一款简约优雅的主题，能让人更加专注于文章内容。  
所以事实上本人是不大建议魔改的，但是有一些小小的细节可以根据个人喜好进行调整。  
当然，如果您要使用这款主题，您就必须明确您是以文章为中心  
而不是以背景和格式为中心的。
<!--more-->

## 效果图  
redbag's blog (<http://redbag.pw/>) >>
![redbag's blog](/img/printscreen-hexo-theme-yilia-redbag-blog.jpg)  
***
jarworker's blog (<http://www.jarworker.cn/>) >> 
![jarworker's blog](/img/printscreen-hexo-theme-yilia-jarworker-blog.jpg)
***
markjuruo's blog (<https://markjuruo.ooo/>) >>
![markjuruo's blog](/img/printscreen-hexo-theme-yilia-markjuruo-blog.jpg)

## 基础配置

Yilia是一个优秀的双栏结构的主题，于是我们可以先来研究其左栏（Left-Col）。  
让我们来了解一下Yilia主题Left-Col中有哪些可显示并且方便个人修改的组件：  
- [x]作者名称，Author
- [x]签名，Subtitle
- [x]头像，Avatar
- [x]菜单，Menu（所有文章/友链/关于我）
- [x]智能菜单，SmartMenu
- [x]联系方式，CallMe（Github/Rss/Mail/...）
- [x]头像后部背景，Header

```yml
# Header

menu:
  主页: /
  随笔: /tags/随笔/

# SubNav
subnav:
  github: "#"
  weibo: "#"
  rss: "#"
  zhihu: "#"
  #qq: "#"
  #weixin: "#"
  #jianshu: "#"
  #douban: "#"
  #segmentfault: "#"
  #bilibili: "#"
  #acfun: "#"
  #mail: "mailto:litten225@qq.com"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"

rss: /atom.xml

# 是否需要修改 root 路径
# 如果您的网站存放在子目录中，例如 http://yoursite.com/blog，
# 请将您的 url 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
root: /

# Content

# 文章太长，截断按钮文字
excerpt_link: more
# 文章卡片右下角常驻链接，不需要请设置为false
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: false

# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: '谢谢你请我吃糖果'
# 支付宝二维码图片地址，跟你设置头像的方式一样。比如：/assets/img/alipay.jpg
alipay: 
# 微信二维码图片地址
weixin: 

# 目录
# 目录设定：0-不显示目录； 1-文章对应的md文件里有toc:true属性，才有目录； 2-所有文章均显示目录
toc: 1
# 根据自己的习惯来设置，如果你的目录标题习惯有标号，置为true即可隐藏hexo重复的序号；否则置为false
toc_hide_index: true
# 目录为空时的提示
toc_empty_wording: '目录，不存在的…'

# 是否有快速回到顶部的按钮
top: true

# Miscellaneous
baidu_analytics: ''
google_analytics: ''
favicon: /favicon.png

#你的头像url
avatar:

#是否开启分享
share_jia: true

#评论：1、多说；2、网易云跟帖；3、畅言；4、Disqus；5、Gitment
#不需要使用某项，直接设置值为false，或注释掉
#具体请参考wiki：https://github.com/litten/hexo-theme-yilia/wiki/

#1、多说
duoshuo: false

#2、网易云跟帖
wangyiyun: false

#3、畅言
changyan_appid: false
changyan_conf: false

#4、Disqus 在hexo根目录的config里也有disqus_shortname字段，优先使用yilia的
disqus: false

#5、Gitment
gitment_owner: false      #你的 GitHub ID
gitment_repo: ''          #存储评论的 repo
gitment_oauth:
  client_id: ''           #client ID
  client_secret: ''       #client secret

# 样式定制 - 一般不需要修改，除非有很强的定制欲望…
style:
  # 头像上面的背景颜色
  header: '#4d4d4d'
  # 右滑板块背景
  slider: 'linear-gradient(200deg,#a0cfe4,#e8c37e)'

# slider的设置
slider:
  # 是否默认展开tags板块
  showTags: false

# 智能菜单
# 如不需要，将该对应项置为false
# 比如
#smart_menu:
#  friends: false
smart_menu:
  innerArchive: '所有文章'
  friends: '友链'
  aboutme: '关于我'

friends:
  友情链接1: http://localhost:4000/
  友情链接2: http://localhost:4000/
  友情链接3: http://localhost:4000/
  友情链接4: http://localhost:4000/
  友情链接5: http://localhost:4000/
  友情链接6: http://localhost:4000/

aboutme: 很惭愧<br><br>只做了一点微小的工作<br>谢谢大家
```
