---
title: YAML 语法简介
---
# YAML 语法简介

[![](https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square)](https://github.com/EasyHexo/Easy-Hexo)
[![](https://img.shields.io/badge/Author-MonoLogueChi-FE326D.svg?longCache=true&style=flat-square)](mailto:xxwhite@foxmail.com)

使用 Hexo 并不需要掌握过多的 YAML 语法知识，只需要简单的了解一下就可以。

## Markdown 文件内使用 YAML

在 Hexo 中写文档，通常需要在头部写一些关于文章的信息，这些都是需要使用 YAML 语言来写的，例如

```yaml
---
title: 录制视频时显示按键
date: 2018-10-28 22:54:43
tags: [软件, 随便水水]

keywords: KeyCastOW 录屏技巧 按键显示
comments: true
---
```

:::tip

此部分一般叫做 `Front-matter`。

:::

文章内部的 YAML 配置都是以`---`开始和结束的，而且，结束之后通常还要再有一行的空行，用以区分 Markdown 语法。

## _config.yml 中使用 YAML

这个就太常见了，Hexo 的配置文件和主题的配置文件都需要使用 YAML 语言来写。


## 基本语法

YAML 使用键值对的形式记录信息，标准格式是

```yaml
key: value
键: 值
```

### 基本规则

1. 大小写敏感
2. **使用缩进表示层级关系**
3. 禁止使用 tab 缩进，只能使用空格键
4. 缩进长度没有限制，只要元素对齐就表示这些元素属于一个层级
5. 使用#表示注释
6. 字符串可以不用引号标注（但是建议你最好还是加上引号）

例如

```yaml
hexo-tag-dplayer:
  cdn:
    - https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js
    - https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css
  default: 
    api: https://api.prprpr.me/dplayer3/
    loop: yes
    screenshot: yes
```

其中`hexo-tag-dplayer`是最高一级的，在模板里一般表示为`config.hexo-tag-dplayer`;  
观察缩进情况，可以发现`cdn`和`default`是同一级的，模板里一般表示为`config.hexo-tag-dplayer.cdn`和`config.hexo-tag-dplayer.default`；  
同理，`default`下的三个选项又是一级，以此类推，只要记住缩进表示层级关系就可以了。

### 三种数据结构

#### scalar 纯量

scalar 不可再分割的量，这个你无需了解，因为了解了也没什么~~卵~~用。

#### map 散列表

键值对的集合，只要是出于同于缩进级别下的键值对，都可以称为一个 map （其实 map 也无需理解，因为这个太常见了，常见到你已经感觉不到它的存在了）

例如前面的 `cdn` 和 `default` 都在 `hexo-tag-dplayer `之下，并且处于同一缩进级别，就可以称为 map ；  
map 有两种写法，最简单，也是最常用的就是前面的那种写法，如

```yaml
hexo-tag-dplayer:
  cdn: value
  default: value
```

等价于

:::v-pre
```yaml
{hexo-tag-dplayer: {cdn: value, default: value}}
# 或者是
hexo-tag-dplayer: {cdn: value, default: value}
```
:::

至于使用哪种写法，都是为了可读性。

例如在配置文件中，如果使用第二种写法，那所有配置都挤在一行，看都看不懂，而第一种写法缩进分明，一眼就能看出来层级关系；  
但是在一些只需要很简单的配置的地方，比如 Hexo 文章开头的配置，第二种写法反而会可读性更高一些。


#### list 数组

**划重点**，这是本篇文章最有用的一节

list 的表示形式同样有两种

```yaml
key:
  - value1
  - value2
```

或者

```yaml
key: [value1, value2]
```

map 和 list 可以相互嵌套使用

### 使用建议

正如前面所说，使用哪种写法，都是为可读性服务的

我个人的建议是，当需要嵌套使用时，map 和 list 都尽量使用第一种写法，不需要嵌套使用时，尽量使用第二种写法，例如本篇文章的第一个例子

```yaml
---
title: 录制视频时显示按键
date: 2018-10-28 22:54:43
tags: [软件, 随便水水]

keywords: KeyCastOW 录屏技巧 按键显示
comments: true
---
```