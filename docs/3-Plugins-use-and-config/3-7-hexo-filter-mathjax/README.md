---
title: hexo-filter-mathjax
---
# hexo-filter-mathjax 插件使用 <Badge text="@Yue-plus"/> <Badge text="Writing" type="warn"/> <Badge text="0.5.3"/>

## 简介

`hexo-filter-mathjax` 是一个用于在 Hexo 渲染 [MathJax](https://www.mathjax.org/)（数学公式）的插件。

**警告：不需要前端脚本与其他数学公式插件。使用此插件之前，请将其全部删除。**

## 官方文档

- [MathJax](https://www.mathjax.org/)
- [GitHub 项目地址](https://github.com/next-theme/hexo-filter-mathjax)

## 安装

```shell script
npm install hexo-filter-mathjax
hexo clean
```

## 配置

把以下内容添加到 `<Hexo>/_config.yml` 文件：

```yml
mathjax:
  tags: none # 或 'ams' 或 'all'
  single_dollars: true # 启用单个美元符号作为内联（行内）数学公式定界符
  cjk_width: 0.9 # 相对 CJK 字符宽度
  normal_width: 0.6 # 相对正常（等宽）宽度
  append_css: true # 将 CSS 添加到每个页面
  every_page: false # 如果为 true，那么无论每篇文章的前题中的 `mathjax` 设置如何，每页都将由 mathjax 呈现
```

## 使用

在需要启用 mathjax 的文章的 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 区内添加 `mathjax: true`：

```markdown
---
title: On the Electrodynamics of Moving Bodies
categories: Physics
date: 1905-06-30 12:00:00
mathjax: true
---
```

然后，就可以在文章中使用 LaTeX 语法。

### 渲染器

需要注意，内联数学公式（…… $<数学公式>$ ……）在开头 $ 之后和结尾 $ 之前 **不能有空格！** 例如：

```diff
-$ \epsilon_0 $
+$\epsilon_0$
-$ \frac{\partial}{\partial t} $
+$\frac{\partial}{\partial t}$
```

**注意！** 使用例如默认的 [`hexo-renderer-marked`](https://github.com/hexojs/hexo-renderer-marked) 渲染器时 LaTeX 与 Markdown 语法之间的冲突。如有必要，请使用 `\` 进行转义：

```diff
-$\epsilon_0$
+$\epsilon\_0$
-\begin{eqnarray*}
+\begin{eqnarray\*}
```

> 也可以尝试更换能更好处理数学公式的渲染器 [hexo-renderer-pandoc](https://github.com/wzpan/hexo-renderer-pandoc)

## 示例

编写以下 LaTeX 代码：

```latex
$$
i\hbar\frac{\partial}{\partial t}\psi=-\frac{\hbar^2}{2m}\nabla^2\psi+V\psi
$$
```
```latex
\begin{eqnarray\*}
\nabla\cdot\vec{E}&=&\frac{\rho}{\epsilon_0}\\\\
\nabla\cdot\vec{B}&=&0\\\\
\nabla\times\vec{E}&=&-\frac{\partial B}{\partial t}\\\\
\nabla\times\vec{B}&=&\mu_0\left(\vec{J}+\epsilon_0\frac{\partial E}{\partial t}\right)\\\\
\end{eqnarray\*}
```

得到以下效果：

![](@img/3/3-7/1.jpg)

--------------------------------------------------

> 最后宣传一波自己的主题~ `(๑•̀ㅂ•́)و✧)`
>
> [hexo-theme-arknights](https://github.com/Yue-plus/hexo-theme-arknights) 、[预览](http://ark.theme.yueplus.ink/)