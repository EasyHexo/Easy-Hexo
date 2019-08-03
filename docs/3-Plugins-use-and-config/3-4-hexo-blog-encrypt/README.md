---
title: hexo-blog-encrypt
---
# hexo-blog-encrypt <Badge text="@17shou_VIP"/> <Badge text="Finish"/> <Badge text="2.2.2"/>

## 简介

> 试想一下，你写了一篇博客，但是，出于某种原因，不太希望每一个人都可以看到这篇博客。所以你常常会为这种文章设置一个密码，其他人需要输入密码才可以访问这篇博客。这对于 Typecho 或者 Wordpress 来说，这很容易。但是对于 Hexo 来说，之前并没有一个类似的功能。

于是，[hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt) 就这样诞生了！

## Demo

* [MikeCoder](https://mhexo.github.io/example-site/2018/06/25/encrypt-test/) （本插件开发者）
* [17shou_VIP](https://www.17shou.vip/%E3%80%90Diary%E3%80%912019-5-16/) （本文作者）

## 开始

1. 首先, 你需要确保你的文章中含有内容（不能为空或者只包含空格）

2. 在 Hexo 根目录的 `_config.yml` 启用插件：

```yaml
# Security
##
encrypt:
    enable: true
```

3. 在你需要加密的 Hexo 博文头部添加：`password` ，`abstract` ， `message` 。

```yaml
---
password: PassWord
abstract: This blog is encrypted.
message: You must enter the password to read.
---
```

   * `password`：是该博客加密使用的密码。
   * `abstract`：是该博客的摘要，会显示在博客的列表页。
   * `message`：这个是博客查看时，密码输入框上面的描述性文字。

4. 最后 `hexo clean` + `hexo g` 查看效果。

## 高级

1. 对 TOC（目录） 进行加密，以主题 Landscape 为例：

   * 找到目录 `hexo/themes/landscape/layout/_partial` 下的 `article.ejs`
   * 找到 `<% post.content %>` 这段代码，一般 30 行左右
   * 替换：

   ```ejs
   <% if(post.toc == true){ %>
       <div id="toc-div" class="toc-article" <% if (post.encrypt == true) { %>style="display:none" <% } %>>
           <strong class="toc-title">Index</strong>
           <% if (post.encrypt == true) { %>
               <%- toc(post.origin, {list_number: true}) %>
           <% } else { %>
               <%- toc(post.content, {list_number: true}) %>
           <% } %>
       </div>
   <% } %>
   <%- post.content %>
   ```

2. 修改加密模板：

   * 由于不重要，详情请见[官方文档](https://github.com/MikeCoder/hexo-blog-encrypt/blob/master/ReadMe.zh.md#%E4%BF%AE%E6%94%B9%E5%8A%A0%E5%AF%86%E6%A8%A1%E6%9D%BF)。

3. 回调：

   * 若想要在文章解密之后调用额外代码，可以使用回调，但是需要自己编写代码。
   * 详情请见[官方文档](https://github.com/MikeCoder/hexo-blog-encrypt/blob/master/ReadMe.zh.md#%E5%9B%9E%E8%B0%83)。

