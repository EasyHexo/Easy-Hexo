---
title: hexo-submit-urls-to-search-engine
---
# hexo-submit-urls-to-search-engine 插件使用 <Badge text="@cjh0613"/> <Badge text="Finish"/>

## 简洁
使用 `hexo-submit-urls-to-search-engine` 插件，可主动推送 Hexo 博客新链接至谷歌、必应、百度搜索引擎站长平台以**提升网站收录质量和速度**。

## 官方文档
[中文详细文档](https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html)

[GitHub 地址](https://github.com/cjh0613/hexo-submit-urls-to-search-engine)

## 安装

  在 Hexo 根目录下执行指令：

  ```bash
  npm install hexo-submit-urls-to-search-engine --save
  ```

## 使用

  在 Hexo 根目录下的 _config.yml 文件中，添加以下配置项：

  ```yaml
  hexo_submit_urls_to_search_engine:
    # 提交最新的 n 个链接
    count: 10
    # 提交修改时间在 n 秒内的链接，单位秒。例如：
    # 有两个文件 a.txt 和 b.txt，分别对应 https://yoursite.com/a.txt 和 https://yoursite.com/b.txt
    # 其更新时间距当前分别为 800s 和 1000s（period 字段设为 900）
    # 则 https://yoursite.com/a.txt 会被提交，https://yoursite.com/b.txt 不会
    period: 900
    # 提交链接的条件，可选值：count | period。不同取值的含义如下：
    # count ：应用上述的 count  配置项
    # period：应用上述的 period 配置项
    submit_condition: count
    # 是否向 Google 提交，可选值：1 | 0（0：否；1：是）
    google: 0
    # 是否向 Bing 提交，可选值：1 | 0（0：否；1：是）
    bing: 1
    # 是否向 Baidu 提交，可选值：1 | 0（0：否；1：是）
    baidu: 1
    # 文本文档的地址，要推送的链接会保存在此文本文档里
    txt_path: submit_urls.txt
    # 在百度站长平台中注册的域名
    baidu_host: https://yoursite.com/
    # 百度自动推送 API 的 token（获取方式见插件文档：https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html）
    baidu_token: xxxxx
    # 在必应站长平台中注册的域名
    bing_host: https://yoursite.com/
    # 必应自动推送 API 的 token（获取方式见插件文档：https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html）
    bing_token: xxxxx
    # 在谷歌站长平台中注册的域名
    google_host: https://yoursite.com/
    # 存放 google key 的 json 文件，放于网站根目录
    google_key_file: google_key.json
  ```


  当然你也可以使用环境变量记录私钥，这样即使源码放在公开仓库，也不会泄露秘钥。


  完成上述配置后，你需要在 Hexo 根目录下运行 `hexo generate` 指令，该指令会生成一个 .txt 文件来存储要推送的链接。

  最后，在 Hexo 根目录下的 _config.yml 文件中，修改以下配置项，即可实现在执行 `hexo deploy` 指令时，自动推送你的链接：

  ```yaml
  deploy:
  - type: cjh_google_url_submitter
  - type: cjh_bing_url_submitter
  - type: cjh_baidu_url_submitter
  ```

如果你使用插件时**遇到了问题**或者想进行**更详细的设置**，请查看插件的[文档](https://cjh0613.github.io/blog/20200603HexoSubmitUrlsToSearchEngine.html)。
