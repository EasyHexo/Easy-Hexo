---
title: hexo-asset-link
---


# hexo-asset-link 插件使用 <Badge text="MonoLogueChi"/> <Badge text="Finish"/>

## 介绍

[hexo-asset-link](https://github.com/liolok/hexo-asset-link)
[Asset-Link](https://github.com/liolok/hexo-asset-link) 是 一个用于转换静态资源路径的插件

可以让我们更方便的 使用静态资源



## 官方文档

[GitHub官方文档](https://github.com/liolok/hexo-asset-link)


## 安装
```batch
# 前置安装hexo-renderer-marked
npm install --save hexo-renderer-marked

# 安装
npm install --save hexo-asset-link
或者使用yarn
yarn add hexo-asset-link
```



## 初始准备

到根目录里把_config.yml里的`post_asset_folder:false`改为`post_asset_folder:ture`

这样做的可以每次执行`hexo new <Your article_name>`的时候都附带生成一个同名的资源文件夹

```
+-- _posts/
|   +-- <Your article_name>.md
|   +-- <Your article_name>/
|       +-- Test-Image.png
|       +-- Test-Other-File.pdf
```



## 使用



- hexo服务器预览的博客文章页
- 在线网站的博客主页
- 在线网站的博客文章页面
- VS Code,Typora等编辑器的Markdown预览

好好享受一下写作的快乐吧(๑•̀ㅂ•́)و✧
